# DMHCA Quick Architecture Reference

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     Frontend (TanStack Router)                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Pages:                        Components:                        │
│  ├── /admin/*                 ├── OTPLoginModal                  │
│  ├── /courses/[slug]          ├── SignupFlow                     │
│  ├── /dashboard               ├── EnrollmentFlow                 │
│  ├── /payment                 ├── StudentDashboard               │
│  └── [100+ other routes]      └── EventComments                  │
│                                                                   │
│  State: localStorage (auth tokens, user data, cart)              │
│                                                                   │
└────────────────────────────────┬────────────────────────────────┘
                                  │
                ┌─────────────────┼──────────────────┐
                │                 │                  │
         [fetch() calls]   [Supabase Auth]   [Razorpay]
                │                 │                  │
    ┌───────────▼────────┐  ┌─────▼──────┐  ┌──────▼────────┐
    │   Backend API      │  │ Supabase   │  │ Razorpay API  │
    │   (/api/*.js)      │  │ PostgreSQL │  │               │
    ├────────────────────┤  │            │  ├───────────────┤
    │ • send-otp         │  │ Tables:    │  │ • Create Order│
    │ • verify-otp       │  │ ├─ users   │  │ • Verify Pay  │
    │ • enroll           │  │ ├─ courses │  │ • Redirect    │
    │ • razorpay-create  │  │ ├─ apps    │  └───────────────┘
    │ • razorpay-verify  │  │ ├─ payments│
    │ • save-login/up    │  │ ├─ contact │
    └────────────────────┘  │ └─ etc     │
                            └────────────┘
```

---

## Authentication Flow

### Student Login/Signup (OTP-Based)
```
┌─────────────────────────────────────────────────────┐
│                    User Action                       │
├─────────────────────────────────────────────────────┤
│  [Signup] → Enter Name → Email → Select Interests  │
│    [OTP Modal]                                      │
│                                                     │
│  [Login] → Email → [OTP Modal]                     │
└──────────────────────────┬──────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │  Send OTP   │
                    │ (send-otp.js)│
                    └──────┬───────┘
                           │
     ┌─────────────────────┼─────────────────────┐
     │                     │                     │
  [Email via SMTP]    [Hash w/ SHA256]   [Store in otp_tokens]
     │                     │                     │
     └─────────────────────┼─────────────────────┘
                           │
                    ┌──────▼────────┐
                    │  User Enters  │
                    │  OTP Code     │
                    └──────┬────────┘
                           │
                    ┌──────▼───────────┐
                    │  verify-otp.js   │
                    │ - Hash & compare  │
                    │ - Create/fetch    │
                    │   user            │
                    │ - Gen token       │
                    └──────┬───────────┘
                           │
     ┌─────────────────────┼──────────────────┐
     │                     │                  │
  [Token]          [User ID]            [localStorage]
  (Base64 JWT)     (UUID)               ├─ token
                                        ├─ userId
                                        ├─ email
                                        ├─ full_name
                                        ├─ interests
                                        └─ isLoggedIn: true
```

### Admin Login (Email + Password)
```
[Email + Password] → Supabase Auth.signInWithPassword()
                  → Check dev mode or session
                  → Redirect to /admin
                  → useAdminAuth hook validates
```

---

## Admin Dashboard Navigation

```
┌──────────────────────────────────────────────────────┐
│              ADMIN PANEL (/admin)                    │
├──────────────────────────────────────────────────────┤
│ Sidebar (collapsible)        │  Main Content         │
│                               │                       │
│ ├─ Dashboard                  │  [Outlet for route]  │
│ │  └─ Stats cards             │                       │
│ │  └─ Recent activity          │  Features depend on  │
│ │                              │  selected menu item  │
│ ├─ Courses                     │                       │
│ │  └─ List, search, filter     │                       │
│ │  └─ Add/edit/delete course   │                       │
│ │  └─ Upload images            │                       │
│ │  └─ Manage syllabus, FAQs    │                       │
│ │                              │                       │
│ ├─ Certificates               │                       │
│ │  └─ View issued certs        │                       │
│ │  └─ Filter by status         │                       │
│ │  └─ Download/verify          │                       │
│ │                              │                       │
│ ├─ Applications               │                       │
│ │  └─ List course apps         │                       │
│ │  └─ Update status            │                       │
│ │  └─ View applicant details   │                       │
│ │                              │                       │
│ ├─ Event Comments             │                       │
│ │  └─ View all comments        │                       │
│ │  └─ Delete comments          │                       │
│ │                              │                       │
│ ├─ Contact Messages           │                       │
│ │  └─ List inquiries           │                       │
│ │  └─ Filter: new/reviewed/res │                       │
│ │  └─ Update status & delete   │                       │
│ │                              │                       │
│ ├─ Media Manager              │                       │
│ │  └─ Upload files             │                       │
│ │  └─ Browse by bucket         │                       │
│ │  └─ Delete media             │                       │
│ │                              │                       │
│ ├─ Pages Editor               │                       │
│ │  └─ Edit home sections       │                       │
│ │  └─ Edit about content       │                       │
│ │                              │                       │
│ └─ Settings                   │                       │
│    └─ System config            │                       │
│    └─ Email settings           │                       │
│    └─ Payment settings         │                       │
└──────────────────────────────────────────────────────┘
```

---

## Enrollment & Payment Flow

```
┌───────────────────────────────────────────────────────┐
│         Student Selects Course                        │
└──────────────────────┬────────────────────────────────┘
                       │
                ┌──────▼──────────┐
                │ Logged in?       │
                └─┬──────────────┬─┘
           Yes  │              │  No
                │              │
           [Skip]         ┌────▼────────────┐
                │         │ OTPLoginModal   │
                │         │ or SignupFlow   │
                │         └────┬────────────┘
                │              │ [User authenticated]
                │              │
        ┌───────▼──────────────▼────┐
        │ EnrollmentFlow Component   │
        ├────────────────────────────┤
        │ Step 1: Login/Signup       │
        │ Step 2: Profile (optional) │
        │         ├─ DOB             │
        │         ├─ Qualification   │
        │         ├─ Experience      │
        │         └─ Address         │
        │ Step 3: Payment Method     │
        │         ├─ Razorpay        │
        │         └─ Loan Redirect   │
        │ Step 4: Success            │
        └──────────┬─────────────────┘
                   │
         ┌─────────┴──────────┐
         │                    │
    [Razorpay]          [Loan Redirect]
         │                    │
    ┌────▼────────┐      ┌────▼──────────┐
    │ POST        │      │ GET           │
    │ /api/       │      │ /api/loan-    │
    │ razorpay-   │      │ redirect      │
    │ create-order│      │ ?enrollmentId │
    └────┬────────┘      │ &amount       │
         │               └───────────────┘
    ┌────▼─────────────────┐
    │ Razorpay Checkout    │
    │ [Payment Gateway UI] │
    └────┬─────────────────┘
         │
    ┌────▼──────────────────────┐
    │ POST /api/razorpay-verify │
    │ - Verify signature         │
    │ - Update payment status    │
    └────┬──────────────────────┘
         │
    [Payment Confirmed]
         │
    ┌────▼──────────────────┐
    │ Update DB:            │
    │ - enrollments.status  │
    │   = 'active'          │
    │ - payments.status     │
    │   = 'completed'       │
    └───────────────────────┘
```

---

## Database Schema (Simplified)

```
┌──────────────────────────────────────────────────────┐
│             AUTHENTICATION & USERS                   │
├──────────────────────────────────────────────────────┤
│  users                     │  admin_users             │
│  ├─ id (UUID)              │  ├─ id (UUID)            │
│  ├─ email ★                │  ├─ email ★              │
│  ├─ full_name              │  ├─ role                 │
│  ├─ phone_number           │  └─ is_active            │
│  └─ profile_completed      │                          │
│                                                       │
│  otp_tokens               │  login_logs              │
│  ├─ email                 │  ├─ user_email           │
│  ├─ otp_hash              │  ├─ ip_address           │
│  ├─ expires_at (5 min)    │  ├─ user_agent           │
│  └─ verified              │  └─ login_status         │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│            ENROLLMENT & PAYMENTS                     │
├──────────────────────────────────────────────────────┤
│  enrollments              │  payments                 │
│  ├─ id (UUID)             │  ├─ id (UUID)             │
│  ├─ user_id (FK)          │  ├─ enrollment_id (FK)   │
│  ├─ course_id             │  ├─ user_id (FK)         │
│  ├─ status                │  ├─ amount (INR)         │
│  ├─ enrollment_date       │  ├─ payment_method      │
│  └─ completion_date       │  ├─ razorpay_order_id   │
│                            │  ├─ razorpay_signature  │
│  student_profiles        │  └─ status               │
│  ├─ id (UUID)             │                          │
│  ├─ user_id (FK, ★)       │                          │
│  ├─ DOB, qualification    │                          │
│  ├─ experience_years      │                          │
│  └─ address, city, state  │                          │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│            CONTENT & FORMS                          │
├──────────────────────────────────────────────────────┤
│  courses                  │  applications             │
│  ├─ id (UUID)             │  ├─ id (BIGINT)           │
│  ├─ slug ★                │  ├─ user_id              │
│  ├─ title, category       │  ├─ full_name            │
│  ├─ price, duration       │  ├─ email, phone         │
│  ├─ syllabus (JSON)       │  ├─ course_name          │
│  ├─ learning_outcomes JSON│  ├─ qualification        │
│  ├─ testimonials (JSON)   │  ├─ message              │
│  └─ meta (JSON)           │  └─ status               │
│                            │                          │
│  contact_messages         │  carts                    │
│  ├─ id (UUID)             │  ├─ id (BIGINT)           │
│  ├─ name, email, phone    │  ├─ user_id (FK, ★)      │
│  ├─ message               │  ├─ cart (JSONB)         │
│  ├─ course                │  └─ updated_at           │
│  ├─ status                │                          │
│  └─ timestamps            │  event_comments          │
│                            │  ├─ id (UUID)            │
│                            │  ├─ event_slug           │
│                            │  ├─ name, email, comment │
│                            │  └─ timestamps           │
└──────────────────────────────────────────────────────┘

Key: ★ = unique constraint, FK = foreign key
```

---

## API Endpoints Summary

```
┌──────────────────────────────────────────────────────┐
│             AUTHENTICATION APIS                      │
├──────────────────────────────────────────────────────┤
│  POST /api/send-otp                                  │
│  ├─ Input: { email, mode, fullName?, interests? }   │
│  ├─ Output: { ok: true }                             │
│  └─ Action: Email OTP (SHA256 hashed in DB)         │
│                                                      │
│  POST /api/verify-otp                               │
│  ├─ Input: { email, otp }                           │
│  ├─ Output: { token, userId, email }                │
│  └─ Action: Verify, create/fetch user               │
│                                                      │
│  POST /api/save-login                               │
│  ├─ Input: { userId, email, fullName, token }       │
│  └─ Action: Log login event                         │
│                                                      │
│  POST /api/save-signup                              │
│  ├─ Input: { email, fullName, interests }           │
│  └─ Action: Store signup data                       │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│             PAYMENT APIS                             │
├──────────────────────────────────────────────────────┤
│  POST /api/razorpay-create-order                     │
│  ├─ Input: { amount, enrollmentId, userId }         │
│  ├─ Output: { order: { id, amount, currency } }     │
│  └─ Action: Create Razorpay order                   │
│                                                      │
│  POST /api/razorpay-verify                          │
│  ├─ Input: { razorpay_order_id, razorpay_payment_id │
│  │            razorpay_signature }                   │
│  ├─ Output: { ok: true, message }                    │
│  └─ Action: Verify signature, update payment        │
│                                                      │
│  GET /api/loan-redirect                             │
│  ├─ Query: ?enrollmentId=X&amount=Y                 │
│  └─ Action: Redirect to loan application           │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│             ENROLLMENT APIS                          │
├──────────────────────────────────────────────────────┤
│  POST /api/enroll                                    │
│  ├─ Input: { courseId, userId, paymentMethod }      │
│  ├─ Output: { enrollment: { id, status, ... } }     │
│  └─ Action: Create enrollment record                │
└──────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
<Header />
├─ Navigation
├─ OTPLoginModal
├─ SignupFlow
├─ ThemeToggle
└─ Shopping Cart

<EnrollmentFlow>
├─ OTPLoginModal (step: login)
├─ StudentProfileForm (step: profile)
├─ PaymentModal
│  ├─ Razorpay integration
│  └─ Loan redirect
└─ Success screen

<AdminLayout>
├─ Sidebar
│  ├─ Logo
│  ├─ NavMenu
│  └─ Toggle button
└─ <Outlet>
   ├─ AdminDashboard (/)
   ├─ AdminCourses (/courses)
   ├─ AdminMessages (/messages)
   ├─ AdminApplications (/applications)
   └─ ... other admin pages

<StudentDashboard>
├─ Profile card (avatar, name, email)
├─ Interests list
├─ Enrollments list
└─ Logout button
```

---

## Key Files Quick Reference

| Purpose | File |
|---------|------|
| Supabase Config | [src/lib/supabase.ts](src/lib/supabase.ts) |
| OTP Login | [src/components/OTPLoginModal.tsx](src/components/OTPLoginModal.tsx) |
| Signup Flow | [src/components/SignupFlow.tsx](src/components/SignupFlow.tsx) |
| Enrollment | [src/components/EnrollmentFlow.tsx](src/components/EnrollmentFlow.tsx) |
| Admin Login | [src/routes/admin-login.tsx](src/routes/admin-login.tsx) |
| Admin Layout | [src/routes/admin.tsx](src/routes/admin.tsx) |
| Admin Dashboard | [src/routes/admin.index.tsx](src/routes/admin.index.tsx) |
| Manage Courses | [src/routes/admin.courses.tsx](src/routes/admin.courses.tsx) |
| Manage Messages | [src/routes/admin.messages.tsx](src/routes/admin.messages.tsx) |
| Send OTP | [api/send-otp.js](api/send-otp.js) |
| Verify OTP | [api/verify-otp.js](api/verify-otp.js) |
| Razorpay Order | [api/razorpay-create-order.js](api/razorpay-create-order.js) |
| DB Migrations | [migrations/](migrations/) (11 files) |
| Theme Context | [src/contexts/ThemeContext.tsx](src/contexts/ThemeContext.tsx) |
| Admin Auth Hook | [src/hooks/useAdminAuth.ts](src/hooks/useAdminAuth.ts) |

---

## localStorage Keys Reference

```javascript
// After successful OTP verification
{
  token: "base64-encoded-jwt",           // Session token
  userId: "550e8400-e29b-41d4-a716...", // User UUID
  email: "user@example.com",
  full_name: "John Doe",
  interests: ["Cardiology", "Radiology"], // JSON stringified
  isLoggedIn: "true",
  hasSignedUp: "true" // Only after signup
}
```

---

## Environment Setup Checklist

```
Required Environment Variables:
  ✓ VITE_SUPABASE_URL
  ✓ VITE_SUPABASE_ANON_KEY
  ✓ SUPABASE_SERVICE_ROLE_KEY (server-only)
  ✓ VITE_RAZORPAY_KEY_ID
  ✓ RAZORPAY_KEY_SECRET (server-only)
  ✓ SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
  ✓ SMTP_FROM (e.g., noreply@dmhca.com)

Database Setup:
  ✓ Run all migrations (001-011_*.sql)
  ✓ Enable RLS on all tables
  ✓ Create storage buckets (images, videos, media)
  ✓ Set storage policies

Admin User Setup:
  ✓ Create admin account via Supabase Auth (email/password)
  ✓ Insert into admin_users table
  ✓ Login at /admin-login

App Ready:
  ✓ npm install (or bun install)
  ✓ npm run dev (or bun run dev)
  ✓ Access at http://localhost:5173
```

---

**Last Updated**: 2025-07-29
