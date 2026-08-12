import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const SaveLoginSchema = z.object({
  userId: z.string().uuid('Invalid user ID'),
  email: z.string().email('Invalid email'),
  fullName: z.string().optional(),
  token: z.string().optional(),
});

export const saveLogin = createServerFn({ method: 'POST' })
  .validator(SaveLoginSchema)
  .handler(async ({ data: { userId, email, fullName, token } }) => {
    try {
      // Update user's last_login timestamp
      const { data: updatedUser, error: updateError } = await supabase
        .from('users')
        .update({
          last_login: new Date().toISOString(),
        })
        .eq('id', userId)
        .select('*')
        .single();

      if (updateError) {
        console.error('Error updating user login:', updateError);
        throw new Error(`Failed to save login: ${updateError.message}`);
      }

      console.log('✓ Login recorded:', {
        userId,
        email,
        fullName,
        lastLogin: updatedUser?.last_login,
      });

      return {
        success: true,
        message: 'Login recorded successfully',
        user: updatedUser,
      };
    } catch (error) {
      console.error('Save login error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to record login');
    }
  });
