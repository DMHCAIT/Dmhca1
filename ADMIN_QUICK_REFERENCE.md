# 🎯 Admin Panel - Quick Reference

## 📌 URLs

| URL | Purpose |
|-----|---------|
| `/admin-login` | Login with Supabase credentials |
| `/admin` | Dashboard (overview & stats) |
| `/admin/courses` | Manage all 75 courses |
| `/admin/applications` | Track course applications |
| `/admin/messages` | Contact form submissions |
| `/admin/pages-editor` | Edit website pages |
| `/admin/events` | Manage events |
| `/admin/comments` | Manage event comments |
| `/admin/media` | Upload and manage media |
| `/admin/settings` | System settings |

---

## 🚀 Getting Started (3 Steps)

### 1️⃣ Login
```
Go to /admin-login
Enter: Supabase email & password
```

### 2️⃣ View Dashboard
```
After login: /admin automatically opens
See stats: 75 courses, applications, messages
```

### 3️⃣ Manage Courses
```
Click: Courses menu
See: All 75 courses listed
Click any course: Expand details
Click Edit: Modify course info
```

---

## 📚 Courses Dashboard (`/admin/courses`)

### View Courses
- 🔍 **Search** - Find courses by title/slug
- 🏷️ **Filter** - Select by category
- 📋 **Expand** - Click course to see details

### Edit Courses
1. Click course
2. Click "Edit" button
3. Modify fields:
   - Title, slug
   - Category (multi-select)
   - Price, weeks, lessons
   - Description
   - Image URL
   - Learning points
4. Click "Update Course"
5. ✅ Changes saved!

### Add Course
1. Click "Add Course" button
2. Fill form (minimum: title, slug)
3. Click "Create Course"
4. ✅ New course added!

### Delete Course
1. Click course
2. Click "Delete" button
3. Confirm deletion
4. ✅ Course removed!

---

## 👥 Applications (`/admin/applications`)

### View Applications
- See: Name, email, phone, course
- Status badges: new/reviewed/contacted/enrolled/rejected
- Click application: See full details

### Update Status
1. Click application
2. Select new status from dropdown
3. Status updates immediately
4. ✅ Saved to database!

### Add Notes
1. Click application
2. Type in "Internal Notes" box
3. Click "Save Notes"
4. ✅ Notes saved!

### Workflow
```
NEW (Red)
  ↓
REVIEWED (Blue) - Reviewed by admin
  ↓
CONTACTED (Yellow) - Reached out
  ↓
ENROLLED (Green) or REJECTED (Gray)
```

---

## 📧 Contact Messages (`/admin/messages`)

### View Messages
- Filter by status: all/new/reviewed/responded
- See: sender info, message content
- Click message: View full details

### Update Status
1. Click message
2. Change status
3. ✅ Automatically saved!

### Delete Message
1. Click message
2. Click "Delete"
3. ✅ Removed!

---

## ✏️ Page Editor (`/admin/pages-editor`)

### Edit a Page
1. Click page name (Home, About, Contact, etc.)
2. Edit in right panel:
   - Hero Title
   - Hero Description
   - Hero Image URL
   - Main Content
   - Meta Description (SEO)
   - Meta Keywords (SEO)
3. Click "Save Changes"
4. ✅ Page updated!

### Editable Pages
- 🏠 Home
- ℹ️ About
- 📧 Contact
- 📚 Courses Overview
- 📅 Events

---

## 📊 Dashboard (`/admin`)

### Statistics Shown
- 📚 Total Courses: 75
- 👥 Total Applications
- 📧 Contact Messages
- 💬 Event Comments
- 🆕 New Applications
- ⚠️ Pending Messages

### Refresh
- Statistics auto-update every few seconds
- Refresh page: F5 or Cmd+R

---

## 🎨 Courses Data Structure

### Required Fields
- ✅ **Title** - Course name
- ✅ **Slug** - URL (auto-generated from title)

### Optional Fields
- Categories (cardiology, radiology, etc.)
- Price (₹)
- Duration (weeks)
- Lessons count
- Level (beginner/intermediate/expert)
- Program (Fellowship/PG Diploma)
- Descriptions (short & full)
- Images (image_url)
- Learning points (JSON array)
- Rating (0-5 stars)
- Requirements (JSON array)
- Modules (JSON array)

### Example Course
```
Title: "Fellowship in Echocardiography"
Slug: "fellowship-in-echocardiography"
Category: cardiology
Price: ₹110,000
Weeks: 52
Program: Fellowship
Level: expert
```

---

## 🔄 Data Flow

### User → Admin
```
User fills form (/apply, /admission, contact)
         ↓
Form submitted → Sent to server function
         ↓
Validation → Check required fields
         ↓
Save → Insert into database
         ↓
Admin sees → On /admin/applications or /admin/messages
```

### Admin → Database
```
Admin modifies course
         ↓
Click "Update Course"
         ↓
Data sent to server
         ↓
Database updated
         ↓
Website reflects changes (reload page)
```

---

## 💾 Data Storage

### What's Stored
- ✅ All 75 courses
- ✅ All applications
- ✅ All contact messages
- ✅ All event comments
- ✅ All page edits
- ✅ Admin actions

### Where
**Supabase PostgreSQL Database**
- Secure
- Backed up
- Real-time
- Scalable

### Backup
- Supabase auto-backups daily
- No manual backup needed
- 99.9% uptime

---

## ⚡ Tips & Tricks

### 🎯 Speed Tips
- Use search to find courses quickly
- Use filters to narrow down
- Bulk edit similar courses
- Copy course and modify for variations

### 🎨 Best Practices
- Use clear, descriptive titles
- Keep slugs simple (lowercase, hyphens)
- Add high-quality images
- Write detailed descriptions
- Update prices regularly

### 📋 Admin Tips
- Review applications daily
- Respond to messages within 24 hours
- Use status workflow consistently
- Add notes for follow-up
- Keep page content fresh

---

## 🔒 Security Notes

✅ **Admin Access**
- Need Supabase account
- Email + password authentication
- 2FA optional (in Supabase settings)

✅ **Data Protection**
- All traffic encrypted (HTTPS)
- Database secured with RLS
- Public forms don't need login
- Admin panel requires login

✅ **Permissions**
- Public: Submit forms only
- Admin: Full database access

---

## 🐛 Quick Troubleshooting

### "Page won't load"
→ Refresh browser (F5)

### "Can't login"
→ Check email/password in Supabase

### "Data not saving"
→ Check internet connection, try again

### "Courses not showing"
→ Run seed script: `npm run seed:courses`

### "Buttons not working"
→ Clear browser cache, refresh page

### "Images not showing"
→ Check image URL is valid, try different URL

---

## 📞 Need Help?

1. **Check Supabase** → Make sure logged in
2. **Check Database** → Tables exist? Data present?
3. **Check Network** → Internet working?
4. **Check Console** → F12 → Console tab for errors
5. **Check Docs** → ADMIN_WORKING_SETUP.md for detailed guide

---

## ✨ Key Numbers

| Item | Count |
|------|-------|
| Courses | 75 |
| Admin Pages | 9 |
| Database Tables | 5 |
| Categories | 19 |
| Programs | 4 |
| Levels | 3 |
| Editable Fields (Course) | 20+ |
| Maximum File Size | 10MB |
| Storage Capacity | Unlimited |

---

## 🎯 Admin Panel Status

| Feature | Status |
|---------|--------|
| Courses Management | ✅ LIVE |
| Application Tracking | ✅ LIVE |
| Contact Management | ✅ LIVE |
| Page Editor | ✅ LIVE |
| Dashboard | ✅ LIVE |
| Data Storage | ✅ LIVE |
| Authentication | ✅ LIVE |
| Real-time Updates | ✅ LIVE |

---

**All systems GO!** 🚀 Start managing your platform at `/admin`
