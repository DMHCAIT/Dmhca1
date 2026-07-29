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
