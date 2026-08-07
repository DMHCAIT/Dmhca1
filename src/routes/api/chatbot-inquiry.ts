import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client using environment variables from .env.local
const getSupabaseClient = () => {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY;
  
  if (!url || !key) {
    throw new Error(`Missing Supabase credentials: URL=${!!url}, KEY=${!!key}`);
  }
  
  return createClient(url, key);
};

// Send lead to TeleCRM API
async function sendToTeleCRM(data: any) {
  const telecrmToken = process.env.TELECRM_SYNC_TOKEN;
  const telecrmApiUrl = process.env.TELECRM_API_URL;
  const telecrmEnterpriseId = process.env.TELECRM_ENTERPRISE_ID;

  if (!telecrmToken || !telecrmApiUrl) {
    console.warn('[Chatbot] Skipping TeleCRM - missing configuration');
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
      baseUrl = `https://next.telecrm.in/enterprise/${telecrmEnterpriseId}/autoupdatelead`;
    } else if (!/autoupdate|autoupdatelead|enterprise/i.test(normalizedApiUrl)) {
      baseUrl = `${normalizedApiUrl}/leads`;
    }

    let sent = false;
    for (const payload of candidates) {
      try {
        console.log('[Chatbot] TeleCRM attempt URL:', baseUrl);
        console.log('[Chatbot] TeleCRM attempt payload:', payload);

        const res = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${telecrmToken}`,
          },
          body: JSON.stringify(payload),
        });

        const text = await res.text();
        console.log('[Chatbot] TeleCRM attempt status:', res.status, 'body:', text);

        if (res.ok) {
          console.log('[Chatbot] Lead successfully sent to TeleCRM with payload variant');
          sent = true;
          break;
        }
      } catch (err) {
        console.error('[Chatbot] Error sending TeleCRM attempt:', err);
      }
    }

    if (!sent) {
      console.error('[Chatbot] All TeleCRM payload attempts failed. See logs above for details.');
    }
  } catch (err) {
    console.error('[Chatbot] Error sending lead to TeleCRM:', err);
  }
}

const ChatbotInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  mobile: z.string().min(10, 'Phone must have at least 10 digits'),
  course: z.string().min(1, 'Course is required'),
  timestamp: z.string(),
});

export const submitChatbotInquiry = createServerFn({ method: 'POST' })
  .validator(ChatbotInquirySchema)
  .handler(async ({ data: { name, email, mobile, course, timestamp } }) => {
    console.log('[Chatbot Inquiry] Request:', { name, email, mobile, course, timestamp });

    try {
      const supabase = getSupabaseClient();

      // Extract clean phone digits
      const digitsOnly = mobile.replace(/\D/g, '');
      console.log('[Chatbot Inquiry] Phone validation:', {
        original: mobile,
        digitsOnly,
        length: digitsOnly.length,
      });

      if (digitsOnly.length < 10) {
        throw new Error(
          `Invalid phone number. Got ${digitsOnly.length} digits, need at least 10`
        );
      }

      // Use the last 10 digits as the phone number
      const cleanPhone = digitsOnly.slice(-10);

      // Insert into applications table
      const { data, error } = await supabase
        .from('applications')
        .insert([
          {
            full_name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: cleanPhone,
            course_name: course.trim(),
            source: 'chatbot_widget',
            form_type: 'chatbot_inquiry',
            form_data: {
              originalCourse: course,
              submissionTime: timestamp,
            },
            status: 'new',
          },
        ])
        .select();

      if (error) {
        console.error('[Chatbot Inquiry] Supabase insertion error:', error);
        throw new Error(`Failed to save inquiry: ${error.message}`);
      }

      console.log('[Chatbot Inquiry] Saved successfully:', data);

      // Fire-and-forget: send lead to TeleCRM (do not block main request)
      sendToTeleCRM({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: cleanPhone,
        course: course.trim(),
      });

      return {
        success: true,
        message: 'Inquiry saved successfully',
        data: data,
      };
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      console.error('[Chatbot Inquiry] Error:', errorMsg, error);
      
      return {
        success: false,
        message: errorMsg,
        data: null,
        error: error instanceof Error ? {
          message: error.message,
          stack: error.stack,
        } : null,
      };
    }
  });
