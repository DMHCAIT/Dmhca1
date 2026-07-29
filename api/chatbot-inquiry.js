import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
