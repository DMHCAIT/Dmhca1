import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

function generateToken(userId: string): string {
  const data = `${userId}-${Date.now()}-${Math.random()}`;
  return Buffer.from(data).toString('base64');
}

const VerifyOTPSchema = z.object({
  email: z.string().email('Invalid email'),
  otp: z.string().min(6, 'Invalid OTP'),
});

export const verifyOTP = createServerFn({ method: 'POST' })
  .validator(VerifyOTPSchema)
  .handler(async ({ data: { email, otp } }) => {
    try {
      // Get the latest OTP for this email that is still valid (using SQL-level timestamp comparison)
      const { data: otpRecord, error: dbError } = await supabase
        .from('otp_tokens')
        .select('*')
        .eq('email', email)
        .eq('verified', false)
        .gt('expires_at', new Date().toISOString()) // Only get OTPs that haven't expired yet (SQL-level check)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (dbError || !otpRecord) {
        console.error(`OTP verification failed for ${email}:`, dbError?.message || 'No valid OTP found');
        throw new Error('No valid OTP found or OTP expired');
      }

      console.log(`✅ Valid OTP found for ${email}`);
      console.log(`   Expires at: ${otpRecord.expires_at}`);
      console.log(`   Current time: ${new Date().toISOString()}`);

      // Verify OTP hash
      const otpHash = crypto.createHash('sha256').update(otp).digest('hex');
      if (otpHash !== otpRecord.otp_hash) {
        throw new Error('Invalid OTP');
      }

      // Mark OTP as verified
      await supabase
        .from('otp_tokens')
        .update({ verified: true })
        .eq('id', otpRecord.id);

      // Fetch user (should already exist from signup OTP send or login validation)
      const { data: user, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (userError || !user) {
        throw new Error('User not found. Please signup first');
      }

      // Generate token
      const token = generateToken(user.id);

      return {
        success: true,
        token,
        userId: user.id,
        email: user.email,
        fullName: user.full_name || '',
      };
    } catch (error) {
      console.error('Verify OTP error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to verify OTP');
    }
  });



