import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email template for enrollment confirmation
function generateEnrollmentEmailTemplate(studentName: string, courseName: string, amount?: string) {
  const currentYear = new Date().getFullYear();
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            color: #1f2937;
            background-color: #f3f4f6;
            line-height: 1.6;
          }
          .wrapper { background-color: #f3f4f6; padding: 20px; }
          .container { 
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            text-align: center;
            padding: 40px 20px;
            border-bottom: 4px solid #3b82f6;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .header p {
            font-size: 14px;
            opacity: 0.9;
          }
          .content { padding: 40px 30px; }
          .greeting {
            font-size: 16px;
            margin-bottom: 25px;
            color: #1f2937;
          }
          .course-section {
            background: linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%);
            border-left: 4px solid #3b82f6;
            padding: 20px;
            margin: 25px 0;
            border-radius: 8px;
          }
          .course-section h3 {
            color: #0f172a;
            font-size: 16px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .course-detail {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 15px;
            margin: 10px 0;
            font-size: 14px;
          }
          .course-detail-label {
            font-weight: 600;
            color: #0f172a;
          }
          .course-detail-value {
            color: #374151;
          }
          .payment-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
          }
          .payment-section h3 {
            color: #92400e;
            font-size: 16px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .payment-row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 15px;
            margin: 10px 0;
            font-size: 14px;
            border-bottom: 1px solid #fcd34d;
            padding-bottom: 10px;
          }
          .payment-row:last-child {
            border-bottom: none;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #f59e0b;
            font-weight: 700;
            font-size: 16px;
          }
          .payment-label {
            color: #92400e;
          }
          .payment-value {
            color: #92400e;
            text-align: right;
            font-weight: 600;
          }
          .next-steps {
            background-color: #f0fdf4;
            border: 1px solid #86efac;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
          }
          .next-steps h4 {
            color: #15803d;
            font-size: 16px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .next-steps ol {
            margin-left: 20px;
          }
          .next-steps li {
            margin: 10px 0;
            color: #374151;
            font-size: 14px;
          }
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            margin: 20px 0;
            font-weight: 600;
            font-size: 14px;
          }
          .support-box {
            background-color: #dbeafe;
            border: 1px solid #93c5fd;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
            font-size: 13px;
          }
          .support-box p {
            color: #0369a1;
            margin: 8px 0;
          }
          .footer {
            background-color: #f9fafb;
            border-top: 1px solid #e5e7eb;
            padding: 25px;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
          }
          .footer-link {
            color: #3b82f6;
            text-decoration: none;
          }
          .verification-badge {
            display: inline-block;
            background-color: #dbeafe;
            color: #0369a1;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1>✅ Payment Confirmed!</h1>
              <p>Your enrollment has been activated</p>
            </div>
            
            <div class="content">
              <div class="greeting">
                <p>Dear <strong>${escapeHtml(studentName)}</strong>,</p>
                <p style="margin-top: 10px;">Thank you for enrolling with DMHCA! Your payment has been successfully processed and your enrollment is now active.</p>
              </div>

              <div class="course-section">
                <h3>📚 Your Course Details</h3>
                <div class="course-detail">
                  <span class="course-detail-label">Course Name:</span>
                  <span class="course-detail-value"><strong>${escapeHtml(courseName)}</strong></span>
                </div>
                <div class="course-detail">
                  <span class="course-detail-label">Access Type:</span>
                  <span class="course-detail-value">Lifetime Access</span>
                </div>
                <div class="course-detail">
                  <span class="course-detail-label">Status:</span>
                  <span class="course-detail-value"><span class="verification-badge">✓ Active</span></span>
                </div>
              </div>

              ${amount ? `
              <div class="payment-section">
                <h3>💳 Payment Details</h3>
                <div class="payment-row">
                  <span class="payment-label">Total Amount Paid:</span>
                  <span class="payment-value">₹${amount}</span>
                </div>
                <div class="payment-row">
                  <span class="payment-label">Payment Method:</span>
                  <span class="payment-value">Razorpay Secure</span>
                </div>
                <div class="payment-row">
                  <span class="payment-label">Payment Status:</span>
                  <span class="payment-value">✓ Completed</span>
                </div>
              </div>
              ` : ''}

              <div class="next-steps">
                <h4>📋 Next Steps:</h4>
                <ol>
                  <li><strong>Access Your Dashboard:</strong> Log in to your student account to view course materials</li>
                  <li><strong>Download Resources:</strong> Course PDFs, videos, and supplementary materials are available</li>
                  <li><strong>Start Learning:</strong> Begin with the first module at your own pace</li>
                  <li><strong>Track Progress:</strong> Monitor your completion status on the dashboard</li>
                </ol>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://dmhca.in" class="button">Go to Dashboard</a>
              </div>

              <div class="support-box">
                <p><strong>📞 Need Help?</strong></p>
                <p>If you have any questions about your course or need technical support:</p>
                <p>Email: <strong>support@dmhca.in</strong></p>
                <p>Phone: <strong>+91 70420 11441</strong></p>
                <p>We're here to help Monday-Friday, 9:00 AM - 6:00 PM IST</p>
              </div>

              <p style="margin-top: 30px; color: #6b7280; font-size: 13px;">
                <strong>Important:</strong> Please save this email for your records. It contains your enrollment confirmation and payment receipt.
              </p>
            </div>

            <div class="footer">
              <p style="margin-bottom: 12px;">
                © ${currentYear} Delhi Medical Health Care Academy (DMHCA). All rights reserved.
              </p>
              <p>
                <a href="https://dmhca.in/privacy-policy" class="footer-link">Privacy Policy</a> | 
                <a href="https://dmhca.in/term-conditions" class="footer-link">Terms & Conditions</a> | 
                <a href="https://dmhca.in/refund-returns-policy" class="footer-link">Refund Policy</a>
              </p>
              <p style="margin-top: 12px; color: #9ca3af;">
                New Delhi, India
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Zod schema for verification input
const VerifyPaymentSchema = z.object({
  razorpay_order_id: z.string().min(1, 'Order ID is required'),
  razorpay_payment_id: z.string().min(1, 'Payment ID is required'),
  razorpay_signature: z.string().min(1, 'Signature is required'),
  enrollmentId: z.union([z.string(), z.number(), z.null()]).optional(),
  studentEmail: z.string().email(),
  courseName: z.string().min(1, 'Course name is required'),
  studentName: z.string().optional(),
  amount: z.number().optional(),
});

export const verifyRazorpayPayment = createServerFn({ method: 'POST' })
  .validator(VerifyPaymentSchema)
  .handler(async ({ data }) => {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      enrollmentId,
      studentEmail,
      courseName,
      studentName,
      amount,
    } = data;

    console.log('[Verify Payment] Verifying:', { razorpay_order_id, razorpay_payment_id, enrollmentId });

    try {
      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        throw new Error('Missing payment details');
      }

      // Verify signature
      const keySecret = process.env.RAZORPAY_KEY_SECRET || '';
      const hmac = crypto.createHmac('sha256', keySecret);
      hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
      const generated = hmac.digest('hex');

      if (generated !== razorpay_signature) {
        throw new Error('Signature verification failed');
      }

      console.log('[Verify Payment] Signature verified');

      // Update payment record
      const { error: updateError } = await supabase
        .from('payments')
        .update({
          razorpay_payment_id,
          razorpay_signature,
          status: 'completed',
          updated_at: new Date().toISOString(),
        })
        .eq('razorpay_order_id', razorpay_order_id);

      if (updateError) throw new Error(`Update error: ${updateError.message}`);

      console.log('[Verify Payment] Payment record updated');

      // Fetch payment record to get enrollment details
      const { data: payment, error: fetchError } = await supabase
        .from('payments')
        .select('id, enrollment_id, student_name, student_email, course_name')
        .eq('razorpay_order_id', razorpay_order_id)
        .single();

      if (fetchError) {
        console.error('[Verify Payment] Failed to fetch payment record:', fetchError);
        throw new Error(`Failed to fetch payment: ${fetchError.message}`);
      }

      if (!payment) {
        throw new Error('Payment record not found');
      }

      console.log('[Verify Payment] Payment fetched:', payment);

      // Mark enrollment as active or create new one
      if (payment.enrollment_id) {
        // Enrollment already exists, activate it
        const { error: activateError } = await supabase
          .from('enrollments')
          .update({ status: 'active', updated_at: new Date().toISOString() })
          .eq('id', payment.enrollment_id);

        if (activateError) {
          console.error('[Verify Payment] Failed to activate enrollment:', activateError);
          throw new Error(`Failed to activate enrollment: ${activateError.message}`);
        }

        console.log('[Verify Payment] Enrollment activated:', payment.enrollment_id);
      } else {
        // No enrollment yet — create one using stored student info
        const { data: newEnroll, error: enrollErr } = await supabase
          .from('enrollments')
          .insert({
            user_id: null,
            course_id: null,
            course_name: payment.course_name || courseName,
            student_name: payment.student_name || studentName || 'Student',
            student_email: payment.student_email || studentEmail,
            payment_method: 'razorpay',
            status: 'active',
          })
          .select()
          .single();

        if (enrollErr) {
          console.error('[Verify Payment] Failed to create enrollment:', enrollErr);
          throw new Error(`Failed to create enrollment: ${enrollErr.message}`);
        }

        // Associate payment with new enrollment
        const { error: linkError } = await supabase
          .from('payments')
          .update({ enrollment_id: newEnroll.id })
          .eq('id', payment.id);

        if (linkError) {
          console.error('[Verify Payment] Failed to link enrollment:', linkError);
          throw new Error(`Failed to link enrollment: ${linkError.message}`);
        }

        console.log('[Verify Payment] Enrollment created and activated:', newEnroll.id);
      }

      // Send email
      try {
        const finalEmail = payment.student_email || studentEmail;
        if (!finalEmail || finalEmail === 'unknown@example.com') {
          console.warn('[Verify Payment] No valid email to send confirmation');
        } else {
          const emailContent = generateEnrollmentEmailTemplate(
            payment.student_name || studentName || 'Student',
            payment.course_name || courseName,
            String(amount || '')
          );

          try {
            await transporter.sendMail({
              from: {
                name: 'DMHCA',
                address: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@dmhca.in',
              },
              to: finalEmail,
              subject: `🎉 Enrollment Confirmed - ${payment.course_name || courseName} | DMHCA`,
              html: emailContent,
              replyTo: 'support@dmhca.in',
            });

            console.log('[Verify Payment] ✅ Email sent successfully to:', finalEmail);
          } catch (smtpErr) {
            console.error('[Verify Payment] SMTP Error:', smtpErr instanceof Error ? smtpErr.message : smtpErr);
            // Don't fail verification if email fails - still mark as successful
          }
        }
      } catch (emailErr) {
        console.error('[Verify Payment] Email template error:', emailErr);
        // Don't fail if email fails
      }

      return {
        ok: true,
        message: 'Payment verified and enrollment activated',
      };
    } catch (err) {
      console.error('[Verify Payment] Error:', err);
      throw err;
    }
  });
