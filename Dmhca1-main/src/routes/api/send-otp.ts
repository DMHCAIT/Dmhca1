import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { randomInt } from 'crypto';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth:
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      : undefined,
});

const SendOTPSchema = z.object({
  email: z.string().email('Invalid email'),
  fullName: z.string().optional(),
  interests: z.array(z.string()).optional(),
  mode: z.enum(['signup', 'login']).default('login'),
});

export const sendOTP = createServerFn({ method: 'POST' })
  .validator(SendOTPSchema)
  .handler(async ({ data: { email, fullName, interests, mode } }) => {
    try {
      // Check if user exists
      const { data: existingUser, error: lookupError } = await supabase
        .from('users')
        .select('id, full_name')
        .eq('email', email)
        .single();

      // Validation based on mode
      if (mode === 'signup' && existingUser) {
        throw new Error('Already have an account? Please login instead');
      }
      if (mode === 'login' && !existingUser) {
        throw new Error('No account found. Please signup first');
      }

      // Determine display name
      let displayName = fullName || existingUser?.full_name || '';

      // If signup mode and fullName provided, create user with full_name
      if (mode === 'signup' && fullName) {
        const { data: newUser, error: createError } = await supabase
          .from('users')
          .insert({
            email,
            full_name: fullName,
            created_at: new Date().toISOString(),
          })
          .select('full_name')
          .single();

        if (createError && createError.code !== '23505') {
          throw new Error(`Failed to store signup data: ${createError.message}`);
        }

        // Use the inserted full_name for email greeting
        displayName = newUser?.full_name || fullName;
        console.log(`✓ User created: ${email} with name: ${displayName}`);
      }

      console.log(`📧 Email greeting will be: Hello ${displayName || 'there'},`);

      // Generate OTP
      const otp = String(randomInt(100000, 999999));
      const otpHash = crypto.createHash('sha256').update(otp).digest('hex');
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 minutes validity

      console.log(`OTP Generated for ${email}:`);
      console.log(`  OTP: ${otp}`);
      console.log(`  Created at: ${new Date().toISOString()}`);
      console.log(`  Expires at: ${expiresAt}`);
      console.log(`  Valid for: 15 minutes`);

      // Store OTP in Supabase
      const { error: dbError } = await supabase.from('otp_tokens').insert({
        email,
        otp_hash: otpHash,
        expires_at: expiresAt,
        verified: false,
      });

      if (dbError) throw new Error(`DB error: ${dbError.message}`);

      // Send OTP email
      await transporter.sendMail({
        from: {
          name: 'DMHCA',
          address: process.env.SMTP_USER || 'noreply@dmhca.in'
        },
        to: email,
        subject: 'Your DMHCA Login OTP - Secure Access',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                  .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
                  .header p { margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; }
                  .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
                  .otp-section { text-align: center; margin: 30px 0; }
                  .otp-label { font-size: 14px; color: #666; margin-bottom: 12px; font-weight: 500; }
                  .otp-box { 
                      background: white; 
                      border: 2px solid #2563eb; 
                      padding: 20px; 
                      border-radius: 8px; 
                      font-size: 42px; 
                      font-weight: 700; 
                      letter-spacing: 8px; 
                      color: #1e3a8a;
                      font-family: 'Courier New', monospace;
                      margin-bottom: 20px;
                  }
                  .otp-timer { font-size: 13px; color: #d97706; font-weight: 600; }
                  .security-info { 
                      background: #eff6ff; 
                      border-left: 4px solid #2563eb; 
                      padding: 15px; 
                      margin: 20px 0; 
                      border-radius: 4px; 
                      font-size: 13px; 
                      color: #1e40af;
                  }
                  .security-info strong { display: block; margin-bottom: 8px; }
                  .footer { 
                      text-align: center; 
                      margin-top: 30px; 
                      padding-top: 20px; 
                      border-top: 1px solid #e5e7eb; 
                      font-size: 12px; 
                      color: #999;
                  }
                  .footer a { color: #2563eb; text-decoration: none; }
                  .logo-section { text-align: center; margin-bottom: 30px; }
                  .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <h1>🔐 Your Login OTP</h1>
                      <p>DMHCA - Fellowship, PG Diploma & Advanced Medical Courses</p>
                  </div>
                  <div class="content">
                      <p style="margin-top: 0; font-size: 15px;">Hello ${displayName || 'there'},</p>
                      <p style="color: #555;">Thank you for logging into your DMHCA account. Please use the verification code below to complete your login securely.</p>
                      
                      <div class="otp-section">
                          <div class="otp-label">Your One-Time Password:</div>
                          <div class="otp-box">${otp}</div>
                          <div class="otp-timer">⏱️ Valid for 15 minutes only</div>
                      </div>

                      <div class="security-info">
                          <strong>🔒 Security Reminder:</strong>
                          Never share this code with anyone. DMHCA staff will never ask for your OTP via email, call, or message.
                      </div>

                      <p style="font-size: 14px; color: #666; margin-top: 20px;">
                          <strong>Didn't request this code?</strong><br>
                          If you didn't try to login, please ignore this email. Your account remains secure.
                      </p>

                      <div class="divider"></div>

                      <p style="font-size: 13px; color: #666; margin-bottom: 10px;">
                          <strong>Need help?</strong><br>
                          Contact our support team at <a href="mailto:support@dmhca.in" style="color: #2563eb;">support@dmhca.in</a>
                      </p>

                      <div class="footer">
                          <p style="margin: 10px 0;">© 2024 DMHCA. All rights reserved.</p>
                          <p style="margin: 5px 0; color: #bbb;">This is an automated message, please do not reply directly.</p>
                      </div>
                  </div>
              </div>
          </body>
          </html>
        `,
      });

      return { success: true, message: 'OTP sent successfully' };
    } catch (error) {
      console.error('Send OTP error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to send OTP');
    }
  });



