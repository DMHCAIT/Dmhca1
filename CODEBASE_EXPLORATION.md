# DMHCA Codebase Exploration Report

## Overview
This is a **TanStack Router + Vite** React application with Supabase backend for a medical education platform. The system includes student enrollment, course management, admin panel, and payment processing via Razorpay.

---

## 1. DATABASE SETUP - Supabase

### Connection Configuration
- **Client**: [src/lib/supabase.ts](src/lib/supabase.ts)
  - Uses VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (browser)
  - Server-side uses SUPABASE_SERVICE_ROLE_KEY
  - Exports: `supabaseClient` (anon) and `supabaseAdmin` (service role)

### Core Tables Structure

#### **1. Authentication & User Management**
**users** - Student accounts
- `id` (UUID, PK)
- `email` (unique)
- `full_name`, `phone_number`
- `profile_completed` (boolean)
- `created_at`, `updated_at`

**otp_tokens** - OTP verification
- `id` (UUID, PK)
- `email`, `otp_hash`, `expires_at`
- `verified` (boolean)
- Expires in 5 minutes

**admin_users** - Admin accounts
- `id` (UUID, PK)
- `email` (unique), `role` (admin/moderator/editor)
- `is_active` (boolean)

**login_logs** - Auth tracking
- `email`, `ip_address`, `user_agent`, `login_status`

---

#### **2. User Engagement & Submissions**
**contact_messages** - Contact form submissions
- `id` (UUID, PK)
- `name`, `email`, `phone`, `message`, `course`
- `status` ('new', 'reviewed', 'responded')
- Timestamps

**event_comments** - Event discussion threads
- `id` (UUID, PK)
- `event_slug`, `name`, `email`, `comment`
- Public read, authenticated write

**user_signups** - Signup tracking
- `id` (UUID, PK)
- `name`, `email`, `phone`, `course_interested`
- `status` ('new', 'contacted', 'enrolled', 'rejected')

---

#### **3. Enrollment & Payments**
**enrollments** - Course enrollments
- `id` (UUID, PK)
- `user_id` (FK → users)
- `course_id` (VARCHAR)
- `status` ('pending', 'active', 'completed', 'cancelled')
- `enrollment_date`, `completion_date`

**payments** - Payment records
- `id` (UUID, PK)
- `enrollment_id` (FK)
- `user_id` (FK)
- `amount` (DECIMAL), `currency` (default: INR)
- `payment_method` ('razorpay', 'loan', etc)
- `razorpay_order_id`, `razorpay_payment_id`, `razorpay_signature`
- `status` ('pending', 'completed', 'failed', 'refunded')

**student_profiles** - Extended student info
- `id` (UUID, PK)
- `user_id` (FK, unique)
- `date_of_birth`, `qualification`, `specialization`
- `experience_years`, `address`, `city`, `state`, `postal_code`

---

#### **4. Course & Content Management**
**courses** - Complete course data
- `id` (UUID, PK)
- `slug` (unique), `title`, `description`
- `category`, `duration`, `price` (INR)
- `image_url`, `image_alt`
- `instructor_name`, `instructor_bio`, `instructor_image`
- `duration_weeks`, `total_lessons`, `certification`
- `highlights`, `syllabus`, `requirements`, `learning_outcomes` (JSON)
- `testimonials`, `meta` (JSON)
- Timestamps

**home_sections** - Homepage content
- `id` (UUID, PK)
- `section_name` (unique)
- `title`, `subtitle`, `description`
- `button_text`, `button_link`, `image_url`
- `display_order`, `is_active`

**about_content** - About page sections
- `id` (UUID, PK)
- `section_name` (unique)
- `title`, `description`, `image_url`
- `is_active`

---

#### **5. User Actions & Cart**
**applications** - Course applications
- `id` (BIGINT, PK)
- `user_id` (UUID, nullable)
- `full_name`, `email`, `phone`
- `course_name`, `program_name`
- `qualification`, `experience`, `message`
- `status` ('new')
- `created_at`

**carts** - Shopping carts
- `id` (BIGINT, PK)
- `user_id` (UUID, unique)
- `cart` (JSONB, default: [])
- `updated_at`

---

### Row Level Security (RLS) Policies

**Public Access**:
- Anyone can view event comments
- Anyone can insert applications
- Anyone can view and insert contact messages
- Public read on images storage bucket

**Authenticated Access**:
- Users see only their own:
  - User profile
  - Enrollments
  - Payments
  - Student profile
  - Cart
- Admins can update status fields
- Service role can insert/update OTP tokens

**Admin Access**:
- Full access to contact_messages, event_comments
- Can update application statuses

---

### Storage Buckets (Supabase Storage)
- **images** (public read, authenticated write)
- **videos** (authenticated only)
- **media** (public read, authenticated write)

---

### Migrations Applied
Located in [migrations/](migrations/) folder:
- `001_init_admin_tables.sql` - Initial tables (event_comments, contact_messages, admin_users)
- `002_complete_admin_system.sql` - User management tables
- `003-008_*` - Progressive enhancements (pages, applications, certificates, categories)
- `009_enrollment_system_fixed.sql` - Enrollment & payment system
- `010_create_applications_and_carts.sql` - Applications and cart tables
- `011_add_rls_policies.sql` - RLS policies for public/user/admin access
- `012_fix_payment_flow_schema.sql` - Payment flow refinements

---

## 2. API STRUCTURE

### Location: `/api` folder

#### **Authentication Endpoints**
| File | Method | Purpose | Auth |
|------|--------|---------|------|
| `send-otp.js` | POST | Generate & email OTP | Public |
| `verify-otp.js` | POST | Verify OTP & create/fetch user | Public |
| `save-otp.js` | POST | Store OTP data | Public |
| `save-login.js` | POST | Log login event | Public |
| `save-signup.js` | POST | Store signup data | Public |

**Key Behavior**: OTP-based authentication (no passwords)
- 6-digit OTP generated, hashed with SHA256
- Sent via SMTP (nodemailer)
- Expires in 5 minutes
- Creates user on first verify if doesn't exist

---

#### **Payment Endpoints**
| File | Method | Purpose |
|------|--------|---------|
| `razorpay-create-order.js` | POST | Create Razorpay order |
| `razorpay-verify.js` | POST | Verify payment signature |
| `loan-redirect.js` | GET | Redirect to loan application |

**Razorpay Integration**:
- Creates order with amount (in paise), currency, receipt
- Stores payment record in DB with pending status
- Signature verification on callback
- Updates payment status upon verification

---

#### **Enrollment Endpoints**
| File | Method | Purpose |
|------|--------|---------|
| `enroll.js` | POST | Create enrollment record |

---

#### **Server Root**
| File | Purpose |
|------|---------|
| `index.js` | SSR handler, static asset serving |

---

### Frontend API Calls Pattern
**Location**: Routes via `/routes/api/` (TanStack Router API routes)

```
Frontend → src/routes/api/send-otp.ts
         → src/routes/api/verify-otp.ts
         → src/routes/api/save-login.ts
         → src/routes/api/save-signup.ts
         → /api/razorpay-create-order.js
         → /api/enroll.js
```

**Method**: Direct `fetch()` calls with JSON payloads
```javascript
fetch('/api/enroll', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ courseId, userId, paymentMethod })
})
```

---

## 3. ADMIN PANEL

### Location & Structure
**Base Route**: [src/routes/admin.tsx](src/routes/admin.tsx)

**Layout**:
- Collapsible sidebar (logo, navigation, toggle)
- Main content area with outlet
- Responsive for mobile/tablet

**Sidebar Navigation**:
```
├── Dashboard (icon: LayoutDashboard)
├── Courses (BookOpen) → /admin/courses
├── Certificates (Award) → /admin/certificates
├── Applications (Users) → /admin/applications
├── Event Comments (MessageSquare) → /admin/comments
├── Contact Messages (Mail) → /admin/messages
├── Media Manager (Image) → /admin/media
├── Settings (Settings) → /admin/settings
```

---

### Admin Routes

#### **1. Dashboard** - [admin.index.tsx](src/routes/admin.index.tsx)
- Stats cards: Total courses, applications, new applications, messages, pending messages, comments
- Fetches counts from Supabase
- Displays active tools count

#### **2. Courses** - [admin.courses.tsx](src/routes/admin.courses.tsx)
**Features**:
- List all courses (searchable, filterable by category)
- Expand course to view full details
- Edit course data (title, slug, program, category, price, duration, etc.)
- Upload course images to storage
- Manage learning outcomes, requirements, modules
- Add/edit FAQs, trainers, reviews
- Delete courses
- Statistics: total, fellowships, PG diplomas, certificates
- Category management

**Data Structure**:
```typescript
{
  id: UUID,
  slug, title, program, category,
  priceINR, months, level, lessons, rating, reviewCount,
  overview, heroDescription,
  learn: string[], requirements: string[],
  modules: string[], moduleDetails: string[][],
  faqs: { question, answer }[],
  trainers: any[], reviews: any[],
  meta: { key: value }
}
```

#### **3. Certificates** - [admin.certificates.tsx](src/routes/admin.certificates.tsx)
- View/manage issued certificates
- Filter by status
- Download/verify certificates

#### **4. Applications** - [admin.applications.tsx](src/routes/admin.applications.tsx)
- List course applications
- Manage status (new, reviewed, accepted, rejected)
- View applicant details
- Sort/filter by date, status

#### **5. Event Comments** - [admin.comments.tsx](src/routes/admin.comments.tsx)
- View all event comments
- Delete inappropriate comments
- See comment count by event

#### **6. Contact Messages** - [admin.messages.tsx](src/routes/admin.messages.tsx)
- List contact form submissions
- Filter by status: all, new, reviewed, responded
- Update status on messages
- Delete messages
- Display: name, email, phone, message date, status

#### **7. Media Manager** - [admin.media.tsx](src/routes/admin.media.tsx)
- File upload interface
- Browse media by bucket (images, media)
- Delete files
- Preview images

#### **8. Pages Editor** - [admin.pages-editor.tsx](src/routes/admin.pages-editor.tsx)
- Edit home page sections
- Edit about page content
- Manage display order and visibility

#### **9. Settings** - [admin.settings.tsx](src/routes/admin.settings.tsx)
- System configuration
- Email settings
- Payment settings

---

### Admin Authentication
**File**: [src/routes/admin-login.tsx](src/routes/admin-login.tsx)

- Email + Password login (Supabase `signInWithPassword`)
- Redirects to `/admin` on success
- **Note**: Development mode bypasses auth check

**Auth Hook**: [src/hooks/useAdminAuth.ts](src/hooks/useAdminAuth.ts)
- Checks Supabase session
- Redirects to login if not authenticated
- Dev mode allows access without session
- Listens for auth state changes

---

## 4. AUTHENTICATION FLOW

### Student Authentication

#### **OTP-Based Login/Signup**

**Signup Flow** ([SignupFlow.tsx](src/components/SignupFlow.tsx)):
1. Step 1: Enter full name
2. Step 2: Enter email
3. Step 3: Select interests (max 3 from 20 specialties)
4. Step 4: Verify OTP sent to email
5. Success: User created, stored in localStorage

**Login Flow** ([OTPLoginModal.tsx](src/components/OTPLoginModal.tsx)):
1. Enter email
2. Receive OTP via email
3. Enter OTP
4. Success: Session created

**Process**:
```
User → Send OTP → Email (nodemailer)
       ↓
       Verify OTP → DB check → Create/fetch user
       ↓
       Generate token (Base64 JWT-like)
       ↓
       Store in localStorage:
       - token, userId, email, full_name, interests, isLoggedIn, hasSignedUp
```

**Token Format**: Base64-encoded JSON
```json
{
  "userId": "uuid",
  "email": "user@email.com",
  "iat": 1234567890
}
```

---

### Admin Authentication

**Type**: Supabase Auth (Email + Password)
- Uses Supabase's built-in authentication
- Creates password-based account
- Development bypass available

---

### Session Management
**Storage**: localStorage (client-side only)
- **isLoggedIn**: 'true'/'false'
- **hasSignedUp**: 'true'/'false'
- **userId**: User UUID
- **email**: User email
- **full_name**: Student's full name
- **interests**: JSON array of selected specialties
- **token**: Session token

**Logout**: Clear all localStorage keys + Supabase signOut

---

## 5. EXISTING COMPONENTS FOR REFERENCE

### Modal Components

#### **OTPLoginModal** ([OTPLoginModal.tsx](src/components/OTPLoginModal.tsx))
```typescript
Props:
- isOpen: boolean
- onClose: () => void
- onSuccess: (data) => void
- onSwitchToSignup: () => void

Steps: 'email' | 'otp'
Handles: Email validation, OTP entry, verification
```

#### **SignupFlow** ([SignupFlow.tsx](src/components/SignupFlow.tsx))
```typescript
Props:
- isOpen: boolean
- onClose: () => void
- onSuccess: (data) => void
- onSwitchToLogin: () => void

Steps: 1 (name) | 2 (email) | 3 (interests) | 4 (OTP)
Features: Multi-step form, paginated interests selection (8 per page)
```

#### **EnrollmentFlow** ([EnrollmentFlow.tsx](src/components/EnrollmentFlow.tsx))
```typescript
Props:
- courseId: string
- courseName: string
- amount: number
- onClose: () => void

Steps: 'login' | 'profile' | 'payment' | 'success'
Integrates: OTPLoginModal, StudentProfileForm, Razorpay payment
```

---

### Other Key Components

#### **StudentDashboard** ([StudentDashboard.tsx](src/components/StudentDashboard.tsx))
- Displays user profile (avatar, name, email)
- Shows interests, enrollments
- Logout functionality
- Loads data from localStorage

#### **StudentProfileForm** ([StudentProfileForm.tsx](src/components/StudentProfileForm.tsx))
- Collects extended profile info
- Fields: DOB, qualification, specialization, experience, address, city, state, postal
- Skippable during enrollment

#### **Header** ([src/components/site/Header.tsx](src/components/site/Header.tsx))
- Navigation menu (Home, About, Courses, Contact)
- Auth state management
- Login/Signup modal triggers
- Shopping cart icon
- Theme toggle

#### **EventComments** ([EventComments.tsx](src/components/EventComments.tsx))
- Comment section for event pages
- Displays comments, allows new comment submission
- Shows commenter name, email, timestamp

#### **PaymentModal** ([PaymentModal.tsx](src/components/PaymentModal.tsx))
- Payment method selection
- Razorpay integration
- Loan option
- Status display

---

### UI Component Library (Radix UI + Tailwind)
Located in [src/components/ui/](src/components/ui/):
- Standard components: Button, Input, Label, Card, Dialog, Drawer, Dropdown, etc.
- Form integration: React Hook Form + Zod validation
- Custom: Modal, Sidebar, Accordion, Tabs, etc.

---

## 6. PROJECT STRUCTURE SUMMARY

```
c:\Users\john\Downloads\Dmhca1-main\
├── src/
│   ├── components/
│   │   ├── site/             # Public site components
│   │   │   └── Header.tsx    # Navigation
│   │   ├── ui/               # Radix UI wrappers
│   │   ├── OTPLoginModal.tsx
│   │   ├── SignupFlow.tsx
│   │   ├── EnrollmentFlow.tsx
│   │   ├── StudentDashboard.tsx
│   │   ├── StudentProfileForm.tsx
│   │   └── ...
│   ├── routes/
│   │   ├── admin.tsx         # Admin layout
│   │   ├── admin-login.tsx   # Admin login page
│   │   ├── admin.index.tsx   # Dashboard
│   │   ├── admin.courses.tsx
│   │   ├── admin.messages.tsx
│   │   ├── admin/            # Nested routes
│   │   ├── api/              # API route handlers
│   │   ├── courses.$slug.tsx # Course detail page
│   │   ├── dashboard.tsx     # Student dashboard
│   │   └── [100+ other routes]
│   ├── hooks/
│   │   ├── useAdminAuth.ts   # Admin auth check
│   │   ├── useCoursesData.ts # Course data caching
│   │   └── ...
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Dark/light mode
│   ├── lib/
│   │   ├── supabase.ts       # Supabase client
│   │   ├── cart-sync.ts      # Cart sync logic
│   │   └── ...
│   ├── data/                 # Static data files
│   ├── types/
│   │   └── courseDetails.ts
│   └── styles.css
├── api/
│   ├── send-otp.js
│   ├── verify-otp.js
│   ├── save-otp.js
│   ├── save-login.js
│   ├── save-signup.js
│   ├── enroll.js
│   ├── razorpay-create-order.js
│   ├── razorpay-verify.js
│   ├── loan-redirect.js
│   └── index.js              # SSR handler
├── migrations/
│   ├── 001-011_*.sql         # Database migrations
│   └── ...
├── public/
│   ├── images, courses, events/
│   └── Faculty_images/
├── scripts/
│   └── seed-* migration scripts
├── package.json              # Dependencies (TanStack, Radix, Supabase, Razorpay)
├── vite.config.ts            # Vite build config
├── tsconfig.json
└── README files...
```

---

## 7. TECHNOLOGY STACK

### Frontend
- **Framework**: TanStack Router + TanStack Start (Vite)
- **UI**: Radix UI components
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **State**: React Query (React), localStorage
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Backend / API
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth + Custom OTP
- **Payment**: Razorpay
- **Email**: Nodemailer (SMTP)
- **Storage**: Supabase Storage (S3-like)

### Build & Deploy
- **Build Tool**: Vite
- **Deployment**: Vercel (config in vercel.json)
- **Runtime**: Node.js (for API/SSR)

---

## 8. KEY IMPLEMENTATION NOTES

### OTP Implementation
- **Duration**: 5 minutes
- **Format**: 6-digit number
- **Hashing**: SHA256 (not reversible)
- **Email**: HTML formatted with SMTP
- **DB Storage**: otp_hash, not plain OTP

### Cart Sync
- File: [src/lib/cart-sync.ts](src/lib/cart-sync.ts)
- Syncs local cart to server storage
- Loads server cart to local on login
- Uses carts table with JSONB field

### Courses Data
- Massive JSON structures stored in single `courses` table row
- `syllabus`, `learning_outcomes`, `requirements`, `testimonials` are JSON fields
- Admin panel parses and edits as arrays

### Payment Flow
1. User selects course
2. Must login/signup first
3. Can skip profile form
4. Choose payment method (Razorpay/Loan)
5. Razorpay redirect for payment
6. Signature verification
7. Mark enrollment as 'active'

---

## 9. DATABASE QUERY EXAMPLES

### Fetch User Enrollments
```javascript
const { data } = await supabaseClient
  .from('enrollments')
  .select('*, courses(title, slug), payments(status)')
  .eq('user_id', userId);
```

### Get Admin Dashboard Stats
```javascript
const { count: messageCount } = await supabaseClient
  .from('contact_messages')
  .select('id', { count: 'exact' });

const messages = await supabaseClient
  .from('contact_messages')
  .select('*')
  .eq('status', 'new');
```

### Update Application Status
```javascript
await supabaseClient
  .from('applications')
  .update({ status: 'reviewed', updated_at: new Date() })
  .eq('id', appId);
```

---

## 10. ENVIRONMENT VARIABLES

### Required
```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx (server-only)

VITE_RAZORPAY_KEY_ID=xxx
RAZORPAY_KEY_SECRET=xxx (server-only)

SMTP_HOST=xxx
SMTP_PORT=xxx
SMTP_SECURE=true/false
SMTP_USER=xxx
SMTP_PASS=xxx
SMTP_FROM=noreply@dmhca.com
```

---

## 11. NEXT STEPS FOR FORM/SUBMISSION FEATURE

### Existing Table for Forms
Use the **applications** table:
```sql
CREATE TABLE applications (
  id bigint PRIMARY KEY,
  user_id uuid NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  course_name text NULL,
  program_name text NULL,
  qualification text NULL,
  experience text NULL,
  message text NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);
```

### To Add Custom Form Type
1. Add new column to `applications` or create new table
2. Update RLS policies to allow public insert
3. Create API endpoint (POST to `/api/form-submit.js`)
4. Create React component using React Hook Form
5. Add admin viewing page in `/admin/applications` (already exists)

---

**Report Generated**: 2025-07-29
**Framework**: TanStack Router + Vite + React 19
**Database**: Supabase PostgreSQL
**Status**: Production-ready with admin panel, payments, and OTP auth
