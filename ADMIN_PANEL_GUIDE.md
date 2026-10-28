# Complete Admin Panel Guide - DMHCA

## 🎯 Overview

Your complete admin panel has been set up with the following features:

### ✅ What's Now Available

#### 1. **Dashboard** (`/admin`)
- Overview of all system statistics
- Total courses, applications, contact messages, event comments
- New applications and pending messages count
- Quick visual metrics

#### 2. **Course Management** (`/admin/courses`)
**Features:**
- ➕ Create new courses
- ✏️ Edit existing courses
- 🗑️ Delete courses
- 📸 Upload course images
- 🏷️ Categorize courses
- Track course metadata

**Fields:**
- Title, Slug, Category
- Indian base course fee (INR), international final course fee (USD), Duration (weeks)
- Instructor name
- Short description & full description
- Course image
- Active/Inactive status

**Regional course pricing:**
- Enter the Indian **base** course fee in INR. Indian checkout adds 18% GST and a
  Razorpay fee of 4% of the base fee (rounded as before).
- Enter the **final total** international fee in USD, with at most two decimal
  places. Visitors in every country other than India see and pay this USD amount.
  No GST or payment fee is added to it, and no exchange-rate conversion is used.
- Leave USD blank to show "Contact us for international pricing" and disable
  international checkout for that course. Existing courses need USD fees entered
  individually; Indian prices are not used as a fallback.
- Save the course, then reload its public page to check the new price. The course
  page, cart and payment screen read server-calculated quotes. If a saved fee
  changes before payment, checkout requires a refresh rather than charging a
  different amount silently.

**Deployment requirements (before enabling checkout):**
1. Apply `migrations/022_course_international_pricing.sql` to Supabase. It adds
   cart/payment course snapshots and the transactional enrollment function used
   by payment verification. Do not rerun older destructive payment migrations.
2. Enable international payments and USD presentment for your Razorpay account.
   Razorpay's checkout/order currency is USD for international visitors; your
   bank's settlement currency is determined separately by Razorpay.
3. Deploy behind Vercel's trusted `x-vercel-ip-country` geolocation. Unknown
   countries block checkout with a support message instead of guessing. Other
   hosts must implement trusted server-side geolocation first; do not forward
   arbitrary client-supplied country headers.
4. Keep regional HTML and pricing responses private and uncached. The application
   sends `Cache-Control: private, no-store`; do not override it with CDN or
   prerender caching rules.

**Testing from India:**
- Local development defaults to INR when the hosting country header is absent;
  this is a development preview, not detection of your physical location.
- In local development, set `PRICING_TEST_COUNTRY=IN` for India or `US` / `PH` for
  international visitors, restart the dev server, and reload the page. This
  server-only override is ignored in production.
- For production, use a US/Philippines VPN or a tester abroad. Check the course,
  cart, final total, and Razorpay checkout currency. A VPN's exit country is the
  detected country; browser language and device region do not change pricing.
- For example, INR 10,000 becomes INR 12,200 at payment. An admin USD fee of 199.99
  remains USD 199.99 throughout checkout.
- Use Razorpay test credentials for payment testing. No live migration or real
  payment is performed by the code change itself.

#### 3. **Application Management** (`/admin/applications`)
**Features:**
- 📝 View all course applications
- 👤 Applicant information (name, email, phone)
- 📚 Course & program tracking
- 📊 Status tracking (New → Reviewed → Contacted → Enrolled/Rejected)
- 📝 Add internal notes
- 🗑️ Delete applications
- 🔍 Filter by status

**Status Workflow:**
- **New** (Red) - Just submitted
- **Reviewed** (Blue) - Reviewed by admin
- **Contacted** (Yellow) - Reached out to applicant
- **Enrolled** (Green) - Student enrolled
- **Rejected** (Gray) - Not selected

#### 4. **Contact Messages** (`/admin/messages`)
**Features:**
- 📧 View contact form submissions
- 👥 Track sender information
- 📱 Phone & email details
- 💬 Message content
- 📊 Status management
- 🗑️ Delete messages
- 🔍 Filter by status

#### 5. **Page Editor** (`/admin/pages-editor`)
**Editable Pages:**
- 🏠 Home Page
- ℹ️ About Us
- 📧 Contact Page
- 📚 Courses Overview
- 📅 Events & Webinars

**For Each Page, You Can Edit:**
- Hero Title & Description
- Hero Image URL
- Main page content (HTML supported)
- Meta description (SEO)
- Meta keywords
- Active/Inactive toggle

#### 6. **Event Comments** (`/admin/comments`)
- View comments from event pages
- Delete inappropriate comments
- Filter by event

#### 7. **Media Manager** (`/admin/media`)
- Upload course images
- Upload videos
- Organize media files
- Get public URLs
- Delete files

#### 8. **Settings** (`/admin/settings`)
- Site configuration
- System information
- Admin user management

---

## 🗄️ Database Structure

### Event registration payment status

At `/admin/event-registrations`, choose **Paid**, **Pending**, or **Payment setup failed**
on a registration and click **Save status**. Verify payments received through an
external Razorpay payment link before selecting Paid.

Only authenticated admins and moderators can save changes. Updates persist in
`event_registrations.status` and `event_registrations.updated_at`; the status badge,
payment count, and filters update after the database confirms the save. Reloading
the page retrieves the saved status. A manual confirmation does not create a
Razorpay payment ID or change records in the separate `payments` table.

Both local development and production require a real Supabase login at
`/admin-login`. Signed-out users are redirected there rather than being allowed
into a local admin preview. The signed-in email must have an `admin` or
`moderator` role in `admin_users` to load or update event registrations.
The secondary Supabase service client uses separate, non-persistent auth storage
so it cannot share or clear the browser login session.

This uses the existing columns and status values from migration
`019_create_event_registrations.sql`; no additional database migration is required
if that migration is already applied.

### Applications Table
```sql
CREATE TABLE applications (
  id UUID PRIMARY KEY
  full_name VARCHAR(255)
  email VARCHAR(255)
  phone VARCHAR(20)
  course_name VARCHAR(255)
  program_name VARCHAR(255)
  qualification VARCHAR(255)
  experience TEXT
  message TEXT
  status VARCHAR(50) - 'new', 'reviewed', 'contacted', 'enrolled', 'rejected'
  notes TEXT
  created_at TIMESTAMP
  updated_at TIMESTAMP
)
```

### Contact Messages Table
```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY
  name VARCHAR(255)
  email VARCHAR(255)
  phone VARCHAR(20)
  message TEXT
  course VARCHAR(255)
  status VARCHAR(50) - 'new', 'reviewed', 'responded'
  created_at TIMESTAMP
  updated_at TIMESTAMP
)
```

### Courses Table
```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY
  title VARCHAR(255)
  slug VARCHAR(255)
  category VARCHAR(50)
  description TEXT
  short_description TEXT
  price NUMERIC
  duration_weeks INTEGER
  instructor_name VARCHAR(255)
  image_url TEXT
  is_active BOOLEAN
  created_at TIMESTAMP
  updated_at TIMESTAMP
)
```

### Site Pages Table
```sql
CREATE TABLE site_pages (
  id UUID PRIMARY KEY
  page_name VARCHAR(255) UNIQUE
  display_name VARCHAR(255)
  hero_title VARCHAR(255)
  hero_description TEXT
  hero_image TEXT
  content TEXT
  meta_description TEXT
  meta_keywords TEXT
  is_active BOOLEAN
  created_at TIMESTAMP
  updated_at TIMESTAMP
)
```

---

## 🔗 API Endpoints / Server Functions

### Application Form Submission
**Server Function:** `submitApplicationForm`
**Location:** `src/lib/api/application-form.function.ts`
**Fields:** fullName, email, phone, qualification, experience, course, program, message

### Contact Form Submission
**Server Function:** `submitContactForm`
**Location:** `src/lib/api/contact-form.function.ts`
**Fields:** name, email, phone, course, message

---

## 📝 User Application Workflow

### 1. **Application Form** (`/apply` or `/admission`)
User fills out:
- Full Name
- Email
- Phone
- Qualification
- Experience
- Course of Interest
- Program Type
- Message

Data is automatically saved to `applications` table with status "new"

### 2. **Admin Review Process**
1. Admin sees new applications on `/admin/applications`
2. Filters by "new" status
3. Reviews applicant details
4. Adds internal notes if needed
5. Updates status based on action:
   - "reviewed" after initial review
   - "contacted" when reaching out
   - "enrolled" when accepted
   - "rejected" if not selected

### 3. **Contact Form Workflow**
User fills contact form with:
- Name, Email, Phone
- Course inquiry (optional)
- Message

Admin views on `/admin/messages` and:
- Updates status
- Deletes if spam
- Tracks responses

---

## 🚀 How to Setup (First Time)

### 1. Run Database Migration
```bash
# In Supabase → SQL Editor, run:
# migrations/004_add_applications_table.sql
```

### 2. Access Admin Panel
- Go to `/admin-login`
- Use your Supabase auth email/password
- Dashboard appears at `/admin`

### 3. Start Managing
- Add/Edit/Delete courses
- Review applications
- Respond to contact messages
- Edit pages
- Upload media

---

## 📊 Key Features Summary

| Feature | Location | Purpose |
|---------|----------|---------|
| Dashboard | `/admin` | Overview & statistics |
| Courses | `/admin/courses` | Add, edit, delete courses |
| Applications | `/admin/applications` | Manage course applications |
| Contact Messages | `/admin/messages` | Manage contact form submissions |
| Page Editor | `/admin/pages-editor` | Edit website pages |
| Events | `/admin/events` | Manage event data |
| Comments | `/admin/comments` | Moderate event comments |
| Media | `/admin/media` | Upload & manage files |
| Settings | `/admin/settings` | System configuration |

---

## 🔐 Security Features

- ✅ Authentication required for all admin pages
- ✅ Row-level security (RLS) enabled on all tables
- ✅ Only authenticated users can view admin data
- ✅ Unauthenticated users can submit forms
- ✅ All form data stored securely in Supabase

---

## 💡 Tips for Best Use

### For Course Management
- Use clear, descriptive titles
- Keep slug URLs simple (lowercase, hyphens)
- Add high-quality course images
- Update prices regularly
- Keep descriptions detailed with benefits

### For Applications
- Review new applications daily
- Add notes about each applicant
- Update status regularly
- Respond within 24-48 hours
- Track enrollment through the status

### For Pages
- Keep hero sections compelling
- Use SEO keywords effectively
- Update meta descriptions (160 chars)
- Keep content fresh and relevant
- Test pages on mobile devices

---

## 🐛 Troubleshooting

### Applications not saving?
- Check Supabase connection
- Verify table exists: `migrations/004_add_applications_table.sql`
- Check browser console for errors

### Can't login?
- Verify Supabase auth is configured
- Check email/password is correct
- Ensure SUPABASE_URL and SUPABASE_ANON_KEY are set

### Pages not updating?
- Clear browser cache
- Verify you have write permissions
- Check if table `site_pages` exists

### Course images not uploading?
- Check storage bucket exists
- Verify file size < 10MB
- Supported formats: JPG, PNG, WebP, GIF

---

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Verify database tables exist
3. Check Supabase logs for database errors
4. Ensure all environment variables are set

---

## 🎁 Future Enhancements

Possible additions:
- Email notifications for new applications
- Bulk actions for courses
- Advanced analytics
- User messaging system
- Certificate management
- Payment tracking
