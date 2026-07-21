import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export const saveApplication = createServerFn()
  .handler(async (input: {
    user_id?: string | null;
    full_name: string;
    email: string;
    phone: string;
    course_name?: string | null;
    program_name?: string | null;
    qualification?: string | null;
    experience?: string | null;
    message?: string | null;
    status?: string;
  }) => {
    console.log('[SaveApplication] Received input:', { 
      full_name: input.full_name,
      email: input.email,
      phone: input.phone,
      user_id: input.user_id,
    });

    try {
      // Validate required fields
      if (!input.full_name?.trim()) {
        throw new Error('full_name is required');
      }
      if (!input.email?.trim()) {
        throw new Error('email is required');
      }
      if (!input.phone?.trim()) {
        throw new Error('phone is required');
      }

      // Build insert payload
      const payload: any = {
        full_name: input.full_name.trim(),
        email: input.email.trim(),
        phone: input.phone.trim(),
        status: input.status || 'new',
      };

      // Optional fields
      if (input.user_id) payload.user_id = input.user_id;
      if (input.course_name) payload.course_name = input.course_name;
      if (input.program_name) payload.program_name = input.program_name;
      if (input.qualification) payload.qualification = input.qualification;
      if (input.experience) payload.experience = input.experience;
      if (input.message) payload.message = input.message;

      console.log('[SaveApplication] Inserting payload:', payload);

      // Insert using service role client
      const { data, error } = await supabase
        .from('applications')
        .insert([payload])
        .select();

      if (error) {
        console.error('[SaveApplication] DB error:', error);
        throw error;
      }

      console.log('[SaveApplication] Success, inserted ID:', data?.[0]?.id);
      return { success: true, data: data?.[0], applicationId: data?.[0]?.id };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('[SaveApplication] Error:', message);
      throw err;
    }
  });
