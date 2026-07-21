import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const CheckEmailSchema = z.object({
  email: z.string().email('Invalid email'),
});

export const checkEmail = createServerFn({ method: 'POST' })
  .validator(CheckEmailSchema)
  .handler(async ({ data: { email } }) => {
    try {
      const { data: user, error } = await supabase
        .from('users')
        .select('id, email, full_name')
        .eq('email', email)
        .single();

      if (error && error.code === 'PGRST116') {
        // User doesn't exist
        return { exists: false };
      }

      if (error) {
        throw new Error(error.message);
      }

      // User exists
      return { exists: true, fullName: user?.full_name || '' };
    } catch (error) {
      console.error('Check email error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to check email');
    }
  });
