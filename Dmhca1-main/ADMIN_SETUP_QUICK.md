# 🚀 Admin Panel - Quick Setup Checklist

## ✅ Setup Steps (Do These First!)

### Step 1: Run Database Migration
1. Open Supabase Dashboard → SQL Editor
2. Copy entire contents of: `migrations/004_add_applications_table.sql`
3. Paste in SQL Editor and execute
4. You should see "create table completed" message

### Step 2: Verify Tables Exist
In Supabase → SQL Editor, run:
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
```

Should include: `applications`, `courses`, `contact_messages`, `event_comments`, `site_pages`

### Step 3: Test Admin Access
1. Go to `/admin-login`
2. Use your Supabase auth credentials
3. Should redirect to `/admin` dashboard
4. See statistics: courses, applications, messages

### Step 4: Test Application Form
1. Go to `/apply` or `/admission`
2. Fill out test form
3. Submit
4. Go to `/admin/applications` → Should see new application!

### Step 5: Test Page Editor
1. Go to `/admin/pages-editor`
2. Click "Home Page"
3. Edit hero title
4. Click "Save Changes"
5. Changes should be saved

---

## 📋 Admin Panel Features Ready to Use

### 👥 Applications (`/admin/applications`)
- ✅ View all applications
- ✅ Filter by status
- ✅ See applicant details
- ✅ Add internal notes
- ✅ Update status (new → reviewed → contacted → enrolled/rejected)
- ✅ Delete applications

### 📚 Courses (`/admin/courses`)
- ✅ View all courses
- ✅ Add new course
- ✅ Edit course details
- ✅ Upload course images
- ✅ Delete courses
- ✅ Categorize courses

### 📧 Contact Messages (`/admin/messages`)
- ✅ View contact form submissions
- ✅ Track applicant info
- ✅ Update message status
- ✅ Delete messages

### ✏️ Page Editor (`/admin/pages-editor`)
- ✅ Edit hero sections (title, description, image)
- ✅ Edit main page content
- ✅ Update SEO meta tags
- ✅ Toggle page active/inactive
- ✅ Edit: Home, About, Contact, Courses, Events pages

### 📊 Dashboard (`/admin`)
- ✅ See total courses
- ✅ See total applications
- ✅ See new applications count
- ✅ See contact messages count
- ✅ See event comments count

---

## 🎯 Current Data Flow

### When User Submits Application Form
```
User fills /apply → Click Submit
  ↓
Data sent to submitApplicationForm server function
  ↓
Data validated with Zod
  ↓
Saved to 'applications' table (status: 'new')
  ↓
User sees success message
  ↓
Admin sees on /admin/applications
```

### When User Submits Contact Form
```
User fills contact form → Click Submit
  ↓
Data sent to submitContactForm server function
  ↓
Data validated with Zod
  ↓
Saved to 'contact_messages' table (status: 'new')
  ↓
Admin sees on /admin/messages
```

---

## 🔑 Admin Panel URLs Reference

| Page | URL | Purpose |
|------|-----|---------|
| Login | `/admin-login` | Admin authentication |
| Dashboard | `/admin` | Overview & statistics |
| Applications | `/admin/applications` | Manage course applications |
| Courses | `/admin/courses` | Add/edit/delete courses |
| Messages | `/admin/messages` | Contact form submissions |
| Page Editor | `/admin/pages-editor` | Edit website pages |
| Events | `/admin/events` | Event management |
| Comments | `/admin/comments` | Event comments |
| Media | `/admin/media` | Upload/manage files |
| Settings | `/admin/settings` | System settings |

---

## 🚨 Troubleshooting

### "Error loading applications"
- ✅ Did you run the SQL migration?
- ✅ Does `applications` table exist?
- Check Supabase → SQL Editor → Run query above

### "Cannot login"
- ✅ Is Supabase auth configured?
- ✅ Are environment variables set? (SUPABASE_URL, SUPABASE_ANON_KEY)
- Check `.env.local` file

### "Form submissions not saving"
- ✅ Check browser console for errors
- ✅ Verify database migration was run
- ✅ Try submitting form and check admin panel

### "Page editor not saving"
- ✅ Check if `site_pages` table exists
- ✅ Click "Save Changes" button
- ✅ Try different page

---

## 📞 Need Help?

1. **Check database tables exist:**
   - Supabase → Tables → Look for: `applications`, `courses`, `contact_messages`

2. **Check migrations ran:**
   - Supabase → SQL Editor → Check table creation was successful

3. **Check logs:**
   - Browser Console (F12) → Look for errors
   - Supabase Logs → Check for database errors

4. **Verify environment:**
   - `.env.local` has SUPABASE_URL and SUPABASE_ANON_KEY

---

## ✨ Your Admin Panel is Now Complete!

You now have:
- ✅ Full course management system
- ✅ Application tracking system
- ✅ Contact form tracking
- ✅ Page editor for home/contact pages
- ✅ All data stored in Supabase database
- ✅ Admin dashboard with statistics

**Start using it:**
1. Go to `/admin-login`
2. Manage your courses and applications
3. Edit your pages
4. Track all form submissions

Enjoy! 🎉
