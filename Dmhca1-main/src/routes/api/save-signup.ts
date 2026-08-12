import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const SaveSignupSchema = z.object({
  email: z.string().email('Invalid email'),
  fullName: z.string().min(1, 'Full name required'),
  interests: z.array(z.string()).optional(),
  phone: z.string().optional(),
});

export const saveSignup = createServerFn({ method: 'POST' })
  .validator(SaveSignupSchema)
  .handler(async ({ data: { email, fullName, interests, phone } }) => {
    try {
      // Check if record already exists for this email
      const { data: existingRecord } = await supabase
        .from('user_signups')
        .select('id')
        .eq('email', email)
        .single();

      if (existingRecord) {
        console.log('✓ Signup record already exists for:', email);
        return {
          success: true,
          message: 'Signup data already saved',
          signup: existingRecord,
        };
      }

      // Save to user_signups table with only the columns that exist
      const { data: signupRecord, error: signupError } = await supabase
        .from('user_signups')
        .insert({
          email,
          name: fullName,
          phone: phone || null,
          course_interested: interests ? interests.join(', ') : null,
          status: 'new',
        })
        .select('*')
        .single();

      if (signupError) {
        console.error('Error saving signup:', signupError);
        throw new Error(`Failed to save signup: ${signupError.message}`);
      }

      console.log('✓ Signup saved to user_signups:', signupRecord);

      return {
        success: true,
        message: 'Signup data saved successfully',
        signup: signupRecord,
      };
    } catch (error) {
      console.error('Save signup error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to save signup');
    }
  });
