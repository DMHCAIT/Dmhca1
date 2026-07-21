# Enrollment System Setup Guide

## Overview
Complete OTP-based login and Razorpay payment integration for course enrollment with optional education loan support.

## Flow Diagram
```
Click "Enroll Now"
      │
      ▼
Login / Sign Up (OTP via SMTP)
      │
      ▼
Complete Student Profile (Optional)
      │
      ▼
Review Course Details
      │
      ▼
Choose Payment Method
      │
 ┌────┴───────────────┐
 │                    │
 ▼                    ▼
Online Payment     Education Loan
(Razorpay)         (Redirect to Loan Partner)
 │                    │
 ▼                    ▼
Payment Success    Loan Application Submitted
 │                    │
 ▼                    ▼
Enrollment Created (Active/Pending)
 │
 ▼
Confirmation Email Sent
 │
 ▼
Student Dashboard
```

## Prerequisites

1. **Supabase Account** - Already configured with credentials in `.env.local`
2. **Razorpay Account** - For payment processing
3. **SMTP Email Provider** - Gmail, SendGrid, or similar
4. **Node.js & Bun** - Already installed

## Environment Variables

Update `.env.local` with your credentials:

```env
# Supabase (Already configured)
VITE_SUPABASE_URL=https://lwpagbsineaqkblihger.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
DATABASE_URL=postgresql://postgres.lwpagbsineaqkblihger:...

# SMTP Configuration (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password        # Use App Password if 2FA enabled
SMTP_FROM=noreply@dmhca.in

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your-key-id-from-razorpay-dashboard
RAZORPAY_KEY_SECRET=your-key-secret-from-razorpay-dashboard

# Loan Partner Configuration
LOAN_PARTNER_URL=https://your-loan-partner-app.example.com/apply

# Session Management
SESSION_SECRET=your-secure-random-string-min-32-chars
```

### Getting SMTP Credentials

#### Gmail Setup:
1. Enable 2-Step Verification in Google Account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the generated password as `SMTP_PASS`

#### Other Providers:
- **SendGrid**: SMTP_HOST: `smtp.sendgrid.net`, SMTP_USER: `apikey`
- **Brevo (Sendinblue)**: SMTP_HOST: `smtp-relay.brevo.com`

### Getting Razorpay Credentials:
1. Sign up at https://razorpay.com
2. Go to Settings → API Keys
3. Copy your Key ID and Key Secret

## Database Setup

### 1. Apply Migrations to Supabase

```sql
-- Navigate to Supabase SQL Editor and run the migration at:
-- migrations/009_enrollment_system.sql
```

This creates:
- `users` - User accounts
- `otp_tokens` - OTP verification records
- `enrollments` - Course enrollments
- `payments` - Payment records
- `student_profiles` - Extended student information

### 2. Verify Tables

In Supabase dashboard, verify all tables exist under Database → Tables:
- users
- otp_tokens
- enrollments
- payments
- student_profiles

## Backend API Endpoints

All endpoints are located in `/api` directory:

### Authentication
- **POST `/api/send-otp`** - Send OTP to email
  ```json
  { "email": "user@example.com" }
  ```
  Returns: `{ "ok": true, "message": "OTP sent to email" }`

- **POST `/api/verify-otp`** - Verify OTP and create session
  ```json
  { "email": "user@example.com", "otp": "123456" }
  ```
  Returns: `{ "ok": true, "token": "...", "userId": "...", "email": "..." }`

### Enrollment
- **POST `/api/enroll`** - Create enrollment record
  ```json
  { "courseId": "course-123", "userId": "user-id", "paymentMethod": "razorpay" }
  ```
  Returns: `{ "ok": true, "enrollment": { "id": "...", "status": "pending" } }`

### Razorpay Payments
- **POST `/api/razorpay-create-order`** - Create payment order
  ```json
  { "amount": 5000, "enrollmentId": "enr-123", "userId": "user-id" }
  ```
  Returns: `{ "ok": true, "order": { "id": "...", "amount": ..., "currency": "INR" } }`

- **POST `/api/razorpay-verify`** - Verify payment signature
  ```json
  { 
    "razorpay_order_id": "order_123",
    "razorpay_payment_id": "pay_123",
    "razorpay_signature": "signature_hash"
  }
  ```
  Returns: `{ "ok": true, "message": "Payment verified and enrollment activated" }`

### Education Loan
- **POST `/api/loan-redirect`** - Get loan partner redirect URL
  ```json
  { "amount": 5000, "courseId": "course-123", "enrollmentId": "enr-123", "userId": "user-id" }
  ```
  Returns: `{ "ok": true, "url": "https://..." }`

## Frontend Components

### 1. OTPLoginModal (`src/components/OTPLoginModal.tsx`)
Modal for OTP-based login/signup. Handles:
- Email validation
- OTP generation and verification
- User creation in Supabase

**Usage:**
```tsx
import { OTPLoginModal } from '@/components/OTPLoginModal';

<OTPLoginModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  onSuccess={(data) => console.log(data)} 
/>
```

### 2. StudentProfileForm (`src/components/StudentProfileForm.tsx`)
Form for completing student profile (optional during enrollment). Collects:
- Personal details (name, phone, DOB)
- Education info (qualification, specialization)
- Experience
- Address

**Usage:**
```tsx
import { StudentProfileForm } from '@/components/StudentProfileForm';

<StudentProfileForm 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  onSuccess={(data) => console.log(data)} 
/>
```

### 3. EnrollmentFlow (`src/components/EnrollmentFlow.tsx`)
Main enrollment component. Orchestrates entire flow:
- User authentication (OTP)
- Profile completion (optional)
- Payment method selection
- Razorpay checkout
- Loan application redirect

**Usage:**
```tsx
import { EnrollmentFlow } from '@/components/EnrollmentFlow';

<EnrollmentFlow 
  courseId="course-123"
  courseName="Advanced Cardiology"
  amount={5000}
  onClose={() => setIsOpen(false)}
/>
```

### 4. Adding "Enroll Now" Button to Course Page

Add to your course detail page:

```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { EnrollmentFlow } from '@/components/EnrollmentFlow';

export function CourseDetail() {
  const [showEnrollment, setShowEnrollment] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setShowEnrollment(true)}
        size="lg"
      >
        Enroll Now
      </Button>

      {showEnrollment && (
        <EnrollmentFlow 
          courseId={course.id}
          courseName={course.name}
          amount={course.price}
          onClose={() => setShowEnrollment(false)}
        />
      )}
    </>
  );
}
```

## Setup Steps

### 1. Run Database Migrations

```bash
# Login to Supabase dashboard
# Go to SQL Editor
# Copy and paste migrations/009_enrollment_system.sql
# Execute
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Update .env.local

Fill in all required variables from above.

### 4. Start Development Server

```bash
bun run dev
```

Server starts at `http://localhost:8080`

### 5. Test Endpoints

Use curl or Postman:

```bash
# Test send OTP
curl -X POST http://localhost:8080/api/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Verify OTP (use OTP from email)
curl -X POST http://localhost:8080/api/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","otp":"123456"}'
```

## Testing Checklist

- [ ] SMTP credentials working (OTP sent to email)
- [ ] OTP verification creating users in Supabase
- [ ] Razorpay order creation working
- [ ] Razorpay payment verification updating enrollment
- [ ] Student profile form saving to database
- [ ] Enrollment status changing to "active" after payment
- [ ] Loan redirect URL working
- [ ] Frontend components loading without errors

## Production Considerations

1. **Session Management**: Currently uses simple base64 token. Implement JWT or session-based auth for production.
2. **Email Security**: Use environment variables for SMTP, never hardcode credentials.
3. **Payment Security**: Always verify Razorpay signatures server-side (already implemented).
4. **Rate Limiting**: Add rate limiting to OTP endpoints to prevent abuse.
5. **Error Logging**: Implement proper error logging and monitoring.
6. **HTTPS**: Use HTTPS in production for all API calls.
7. **CORS**: Configure CORS properly if frontend and backend on different domains.

## Troubleshooting

### OTP not received:
- Check SMTP credentials in `.env.local`
- Check spam folder
- Verify email address is correct
- Check Supabase logs for errors

### Razorpay payment fails:
- Verify RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are correct
- Check Razorpay dashboard for API access
- Ensure amount is in correct format (in paise)

### Database errors:
- Verify migrations ran successfully
- Check RLS policies in Supabase
- Verify SERVICE_ROLE_KEY has admin access

## Support

For issues, check:
1. `.env.local` for missing/incorrect credentials
2. Supabase logs at https://app.supabase.com/project/lwpagbsineaqkblihger/logs
3. Browser console for frontend errors
4. Terminal output for backend errors
