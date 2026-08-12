# Admin Panel Setup & Usage Guide

## Overview
A complete admin panel for DMHCA with:
- User authentication (Supabase Auth)
- Event comments management
- Contact form submissions tracking
- Media upload & storage (images/videos)
- Supabase database integration
- Real-time updates

---

## Setup Instructions

### 1. Database Setup
Run the SQL migration in your Supabase project:
1. Go to Supabase Dashboard → SQL Editor
2. Copy the entire contents of `migrations/001_init_admin_tables.sql`
3. Paste and execute in SQL Editor
4. This creates:
   - `event_comments` table
   - `contact_messages` table
   - `admin_users` table
   - Storage buckets (images, videos, media)
   - Row Level Security (RLS) policies

### 2. Admin User Setup
Create an admin account in Supabase:
1. Go to Supabase → Authentication → Users
2. Click "Add user"
3. Email: your-admin@email.com
4. Password: secure password
5. This account will be used for admin panel login

### 3. Environment Variables
Already added to `.env.local`:
```env
SUPABASE_URL=https://lwpagbsineaqkblihger.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
DATABASE_URL=postgresql://postgres...
```

### 4. Vercel Deployment
Add these to Vercel environment variables:
1. Project → Settings → Environment Variables
2. Add all 4 variables from `.env.local`
3. Mark `SUPABASE_SERVICE_ROLE_KEY` and `DATABASE_URL` as server-only
4. Redeploy

---

## Admin Panel Routes

### Access Points
- **Login:** `/admin/login`
- **Dashboard:** `/admin` (requires authentication)
- **Event Comments:** `/admin/comments`
- **Contact Messages:** `/admin/messages`
- **Media Manager:** `/admin/media`
- **Settings:** `/admin/settings`

### Features

#### 1. Dashboard (`/admin`)
- Overview statistics
- Total comments and messages
- Pending messages count
- Quick access to all features

#### 2. Event Comments (`/admin/comments`)
- View all event comments
- Delete inappropriate comments
- Filter by event
- Display: name, email, date, comment text

#### 3. Contact Messages (`/admin/messages`)
- Track all contact form submissions
- Mark messages as: new → reviewed → responded
- Delete messages
- Filter by status
- Display: name, email, phone, course, message date

#### 4. Media Manager (`/admin/media`)
- Upload images and videos
- Organize by date folder
- Preview thumbnails
- Delete files
- Get public URLs
- Tabs: Images / Videos

#### 5. Settings (`/admin/settings`)
- General site configuration
- Storage bucket status
- System information
- Admin user management

---

## Using the Admin Panel

### Step 1: Login
1. Go to `https://yourdomain.com/admin/login`
2. Enter your Supabase admin email
3. Enter your password
4. Click "Sign In"

### Step 2: Navigate Dashboard
- Use sidebar to navigate between sections
- Dashboard shows all active metrics
- Logout button in bottom-left

### Step 3: Manage Content

**Comments:**
- View all event comments
- Click trash icon to delete

**Messages:**
- View contact form submissions
- Status workflow: new → reviewed → responded
- Click buttons to update status

**Media:**
- Click upload area or select file
- Files auto-organized by date
- View/delete uploaded files
- Copy URLs to use in content

---

## File Structure

```
src/
├── lib/
│   ├── supabase.ts          # Supabase client + types
│   └── storage.ts           # Storage upload handlers
├── hooks/
│   └── useAdminAuth.ts      # Auth hook & guard
├── routes/
│   ├── admin.tsx            # Main layout & navigation
│   ├── admin.login.tsx      # Login page
│   ├── admin.index.tsx      # Dashboard
│   ├── admin.comments.tsx   # Comments management
│   ├── admin.messages.tsx   # Messages management
│   ├── admin.media.tsx      # Media manager
│   └── admin.settings.tsx   # Settings page
└── migrations/
    └── 001_init_admin_tables.sql  # Database schema
```

---

## Integration with Event Comments

Event comments are automatically synced to database:

**Old flow (localStorage):**
```
Component → localStorage (local only)
```

**New flow (database):**
```
Component → Supabase DB → Admin Panel
```

To migrate existing comments to database, run:
```typescript
// Copy localStorage comments to Supabase
const comments = JSON.parse(localStorage.getItem('event_comments_*'));
// Then insert to supabase event_comments table
```

---

## Storage Buckets

Three Supabase Storage buckets created:

1. **images/** (public)
   - PNG, JPG, WebP
   - Max 50MB each
   - Public read access
   - Use for: event images, course materials

2. **videos/** (private)
   - MP4, WebM
   - Max 100MB each
   - Authenticated access only
   - Use for: training videos, tutorials

3. **media/** (public)
   - Any file type
   - Max 100MB each
   - Public read access
   - Use for: documents, PDFs, mixed content

---

## API Integration

### Upload Files
```typescript
import { uploadFile } from '@/lib/storage';

const result = await uploadFile(file, {
  bucket: 'images',
  folder: 'events'
});

console.log(result.url); // Public URL
```

### Query Comments
```typescript
import { supabaseClient } from '@/lib/supabase';

const { data } = await supabaseClient
  .from('event_comments')
  .select('*')
  .eq('event_slug', 'event-name');
```

### Insert Message
```typescript
await supabaseClient
  .from('contact_messages')
  .insert({
    name, email, phone, message, status: 'new'
  });
```

---

## Security

### Row Level Security (RLS)
- Public can view comments
- Authenticated users can submit
- Admins can manage all content

### API Keys
- `SUPABASE_ANON_KEY` - Client-side (public)
- `SUPABASE_SERVICE_ROLE_KEY` - Server-side only (secret)
- `DATABASE_URL` - Server pooling connection (secret)

### Best Practices
- Never expose service keys in client code
- Use Vercel secrets for production
- Rotate passwords regularly
- Limit admin users to trusted team members

---

## Troubleshooting

### Login not working?
- Check user exists in Supabase Auth
- Verify email/password correct
- Check SUPABASE_URL and ANON_KEY in .env

### Files not uploading?
- Check bucket exists and is public/private as needed
- Verify file size under limit
- Check storage quota in Supabase

### Database queries returning empty?
- Verify RLS policies are set correctly
- Check user is authenticated
- Verify table has data

### Build errors?
- Run `npm install` to get all dependencies
- Verify TypeScript paths in `tsconfig.json`
- Check imports match file structure

---

## Next Steps

1. ✅ Database schema created
2. ✅ Admin routes set up
3. ✅ Authentication configured
4. ✅ Storage buckets created
5. TODO: Add more admin users
6. TODO: Sync existing comments to database
7. TODO: Connect EventComments component to database
8. TODO: Add analytics/reporting

---

## Support

For issues or questions:
1. Check this guide first
2. Review Supabase docs: https://supabase.com/docs
3. Check browser console for errors
4. Verify all env variables are set

Last updated: 2026-06-25
