import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Send lead to TeleCRM API
async function sendToTeleCRM(data) {
  const telecrmToken = process.env.TELECRM_SYNC_TOKEN;
  const telecrmApiUrl = process.env.TELECRM_API_URL;
  const telecrmEnterpriseId = process.env.TELECRM_ENTERPRISE_ID;

  if (!telecrmToken || !telecrmApiUrl) {
    console.warn('Skipping TeleCRM - missing configuration');
    return;
  }

  try {
    const cleanedPhone = data.phone.replace(/\D/g, '');

    // Prepare candidate payloads; prefer `fields` shape for this enterprise
    const candidates = [
      {
        // wrapped under 'fields' (accepted by this workspace)
        fields: {
          name: data.name,
          email: data.email,
          phone: cleanedPhone,
          message: `Course Interest: ${data.course}`,
          source: 'chatbot_widget',
          website_url: 'https://www.dmhca.in/',
        },
      },
      {
        // flat top-level fields
        name: data.name,
        email: data.email,
        phone: cleanedPhone,
        message: `Course Interest: ${data.course}`,
        source: 'chatbot_widget',
        website_url: 'https://www.dmhca.in/',
      },
      {
        // wrapped under 'lead'
        lead: {
          name: data.name,
          email: data.email,
          phone: cleanedPhone,
          message: `Course Interest: ${data.course}`,
          source: 'chatbot_widget',
          website_url: 'https://www.dmhca.in/',
        },
      },
    ];

    const normalizedApiUrl = telecrmApiUrl.replace(/\/$/, '');
    let baseUrl = normalizedApiUrl;
    if (/autoupdate\/v2/i.test(normalizedApiUrl) && telecrmEnterpriseId) {
      baseUrl = `https://next-api.telecrm.in/enterprise/${telecrmEnterpriseId}/autoupdatelead`;
    } else if (!/autoupdate|autoupdatelead|enterprise/i.test(normalizedApiUrl)) {
      baseUrl = `${normalizedApiUrl}/leads`;
    }

    let sent = false;
    for (const payload of candidates) {
      try {
        console.log('TeleCRM attempt URL:', baseUrl);
        console.log('TeleCRM attempt payload:', payload);

        const res = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${telecrmToken}`,
          },
          body: JSON.stringify(payload),
        });

        const text = await res.text();
        console.log('TeleCRM attempt status:', res.status, 'body:', text);

        if (res.ok) {
          console.log('Chatbot lead successfully sent to TeleCRM with payload variant');
          sent = true;
          break;
        }
      } catch (err) {
        console.error('Error sending TeleCRM attempt:', err);
      }
    }

    if (!sent) {
      console.error('All TeleCRM payload attempts failed. See logs above for details.');
    }
  } catch (err) {
    console.error('Error sending lead to TeleCRM:', err);
  }
}

export async function post(req) {
  try {
    const { name, email, mobile, course, timestamp } = await req.json();

    // Validate required fields
    if (!name || !email || !mobile || !course) {
      console.error('Missing fields:', { name: !!name, email: !!email, mobile: !!mobile, course: !!course });
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), { status: 400 });
    }

    // Validate phone format (must contain 10 digits)
    const digitsOnly = mobile.replace(/\D/g, '');
    console.log('Phone validation:', { original: mobile, digitsOnly, length: digitsOnly.length });
    
    if (digitsOnly.length < 10) {
      return new Response(JSON.stringify({ error: `Invalid phone number. Got ${digitsOnly.length} digits, need at least 10` }), { status: 400 });
    }
    // Use the last 10 digits as the phone number
    const cleanPhone = digitsOnly.slice(-10);

    // Insert into applications table
    const { data, error } = await supabase
      .from('applications')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: cleanPhone,
          course_interested: course.trim(),
          source: 'chatbot_widget',
          form_type: 'chatbot_inquiry',
          form_data: {
            originalCourse: course,
            submissionTime: timestamp,
          },
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase insertion error:', error);
      return new Response(JSON.stringify({ error: 'Failed to save inquiry', details: error.message }), { status: 500 });
    }

    console.log('Inquiry saved successfully:', data);

    // Fire-and-forget: send lead to TeleCRM (do not block main request)
    sendToTeleCRM({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: cleanPhone,
      course: course.trim(),
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Inquiry saved successfully',
      data: data,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error processing chatbot inquiry:', error);
    return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), { status: 500 });
  }
}
