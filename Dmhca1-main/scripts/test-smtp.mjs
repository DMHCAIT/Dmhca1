import nodemailer from 'nodemailer';
import 'dotenv/config';

console.log('🔍 Testing SMTP Configuration...\n');

// Validate env vars
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

console.log('📧 SMTP Config:');
console.log(`  Host: ${smtpConfig.host}`);
console.log(`  Port: ${smtpConfig.port}`);
console.log(`  Secure: ${smtpConfig.secure}`);
console.log(`  User: ${smtpConfig.auth.user}`);
console.log(`  From: ${process.env.SMTP_FROM}\n`);

// Check if all required vars are set
if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
  console.error('❌ Missing SMTP configuration. Please check .env.local');
  process.exit(1);
}

try {
  // Create transporter
  const transporter = nodemailer.createTransport(smtpConfig);

  // Verify connection
  console.log('⏳ Verifying SMTP connection...');
  await transporter.verify();
  console.log('✅ SMTP connection verified!\n');

  // Send test email
  console.log('📤 Sending test email...');
  const result = await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_USER, // Send to self for testing
    subject: 'SMTP Test - Enrollment System',
    html: `
      <h2>✅ SMTP Configuration Works!</h2>
      <p>Your enrollment system can now send OTP emails.</p>
      <p><strong>From:</strong> ${process.env.SMTP_FROM}</p>
      <p><strong>Test Time:</strong> ${new Date().toISOString()}</p>
    `,
  });

  console.log('✅ Test email sent successfully!');
  console.log(`  Message ID: ${result.messageId}\n`);

  console.log('🎉 SMTP is working properly!\n');
  console.log('Next: Users will receive OTP emails at their registered addresses.');

} catch (error) {
  console.error('❌ SMTP test failed:');
  console.error(`  Error: ${error.message}\n`);

  if (error.code === 'ECONNREFUSED') {
    console.error('  Likely cause: Invalid SMTP host or port.');
  } else if (error.code === 'EAUTH') {
    console.error('  Likely cause: Invalid username or password.');
  }

  process.exit(1);
}
