import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
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
function generateEnrollmentEmailTemplate(studentName, courseName, courseDetails) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background-color: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          .header { text-align: center; margin-bottom: 30px; }
          .header h1 { color: #0f172a; margin: 0; font-size: 28px; }
          .header p { color: #666; margin: 10px 0 0 0; }
          .content { line-height: 1.8; color: #555; }
          .course-box { background-color: #f9fafb; border-left: 4px solid #1e40af; padding: 20px; margin: 20px 0; border-radius: 4px; }
          .course-box h3 { margin: 0 0 10px 0; color: #0f172a; }
          .course-box p { margin: 8px 0; }
          .features { margin: 20px 0; }
          .features li { margin: 8px 0; }
          .next-steps { background-color: #dbeafe; border: 1px solid #93c5fd; padding: 15px; border-radius: 4px; margin: 20px 0; }
          .next-steps h4 { color: #1e40af; margin-top: 0; }
          .button { display: inline-block; background-color: #1e40af; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; }
          .dmhca-logo { text-align: center; margin-bottom: 30px; }
          .dmhca-logo img { max-width: 150px; height: auto; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="dmhca-logo">
            <h2 style="color: #1e40af; margin: 0;">DMHCA</h2>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">Delhi Medical Heart Care Academy</p>
          </div>

          <div class="header">
            <h1>🎉 Welcome to Your New Course!</h1>
            <p>Your enrollment has been confirmed and payment received</p>
          </div>

          <div class="content">
            <p>Dear <strong>${studentName}</strong>,</p>

            <p>Thank you for enrolling with DMHCA! We're thrilled to have you join us. Your payment has been successfully processed, and your enrollment is now active.</p>

            <div class="course-box">
              <h3>📚 Your Course Details</h3>
              <p><strong>Course Name:</strong> ${courseName}</p>
              ${courseDetails ? `<p><strong>Duration:</strong> ${courseDetails.duration || 'N/A'}</p>` : ''}
              ${courseDetails ? `<p><strong>Level:</strong> ${courseDetails.level || 'N/A'}</p>` : ''}
              ${courseDetails ? `<p><strong>Lessons:</strong> ${courseDetails.lessons || 'N/A'}</p>` : ''}
            </div>

            <div class="next-steps">
              <h4>📋 Next Steps:</h4>
              <ol>
                <li>Check your email for course access credentials</li>
                <li>Log in to your student dashboard</li>
                <li>Download course materials and syllabus</li>
                <li>Join the course community group</li>
                <li>Complete your profile for personalized learning</li>
              </ol>
            </div>

            <h3>🎓 What to Expect:</h3>
            <ul class="features">
              <li>Expert-led instruction from industry professionals</li>
              <li>Comprehensive course materials and resources</li>
              <li>Hands-on learning and practical assignments</li>
              <li>Certification upon successful completion</li>
              <li>Lifetime access to course materials</li>
              <li>24/7 support from our dedicated team</li>
            </ul>

            <h3>❓ Need Help?</h3>
            <p>If you have any questions or need assistance, please don't hesitate to contact our support team:</p>
            <ul class="features">
              <li>📧 Email: support@dmhca.in</li>
              <li>📱 Phone: +91 XXXXXXXXXX</li>
              <li>🕐 Support Hours: Monday - Friday, 9 AM - 6 PM IST</li>
            </ul>

            <p>We're here to ensure your learning experience is smooth and rewarding.</p>

            <p><strong>Best regards,</strong><br>
            The DMHCA Team<br>
            <em>Empowering Healthcare Professionals</em></p>
          </div>

          <div class="footer">
            <p>&copy; 2024 Delhi Medical Heart Care Academy. All rights reserved.</p>
            <p>This is an automated email. Please do not reply directly to this message.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function post(req) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      enrollmentId,
      studentEmail,
      courseName,
      studentName,
    } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(JSON.stringify({ error: 'Missing payment details' }), { status: 400 });
    }

    // Verify signature
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const hmac = crypto.createHmac('sha256', keySecret);
    hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
    const generated = hmac.digest('hex');

    if (generated !== razorpay_signature) {
      return new Response(JSON.stringify({ error: 'Signature verification failed' }), { status: 400 });
    }

    // Update payment record in DB
    const { error: updateError } = await supabase
      .from('payments')
      .update({
        razorpay_payment_id,
        razorpay_signature,
        status: 'completed',
        updated_at: new Date().toISOString(),
      })
      .eq('razorpay_order_id', razorpay_order_id);

    if (updateError) throw new Error(`DB error: ${updateError.message}`);

    // Mark enrollment as active
    const { data: payment } = await supabase
      .from('payments')
      .select('enrollment_id')
      .eq('razorpay_order_id', razorpay_order_id)
      .single();

    if (payment) {
      await supabase
        .from('enrollments')
        .update({ status: 'active', updated_at: new Date().toISOString() })
        .eq('id', payment.enrollment_id);
    }

    // Send enrollment confirmation email
    try {
      if (studentEmail) {
        const emailContent = generateEnrollmentEmailTemplate(
          studentName || 'Student',
          courseName || 'Your Course',
          { duration: '6 months', level: 'Intermediate', lessons: '24' }
        );

        await transporter.sendMail({
          from: {
            name: 'DMHCA',
            address: process.env.SMTP_FROM || process.env.SMTP_USER,
          },
          to: studentEmail,
          subject: `🎉 Enrollment Confirmed - ${courseName || 'Course'} | DMHCA`,
          html: emailContent,
        });
      }
    } catch (emailErr) {
      console.error('Email sending error:', emailErr);
      // Don't fail the entire response if email fails
    }

    return new Response(JSON.stringify({ ok: true, message: 'Payment verified and enrollment activated' }), {
      status: 200,
    });
  } catch (err) {
    console.error('razorpay verify:', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}
