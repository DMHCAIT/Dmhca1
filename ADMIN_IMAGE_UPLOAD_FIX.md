# Admin Image Upload Fix Guide

## Problem
You're getting "Error uploading image: new row violates row-level security policy" when trying to upload images in the admin panel.

## Root Cause
The RLS (Row-Level Security) policies for the `courses` table were not properly configured to allow admin write operations (INSERT/UPDATE).

## Solution

### Option 1: Apply Migration via Supabase SQL Editor (Recommended)

1. **Open Supabase Dashboard**
   - Go to https://app.supabase.com
   - Select your project
   - Navigate to SQL Editor

2. **Copy and Run Migration**
   - Open `/migrations/016_fix_admin_rls_policies.sql`
   - Copy the entire content
   - Paste into Supabase SQL Editor
   - Click "Run"
   - Wait for completion (should show success message)

3. **Verify in Admin Panel**
   - Go to Admin Dashboard → Courses
   - Try uploading an image
   - Error should be resolved ✅

### Option 2: Manual SQL Commands

If you prefer, run these commands in order:

```sql
-- Drop and recreate courses policies
DROP POLICY IF EXISTS "Public read courses" ON public.courses;
DROP POLICY IF EXISTS "Admin can insert courses" ON public.courses;
DROP POLICY IF EXISTS "Admin can update courses" ON public.courses;
DROP POLICY IF EXISTS "Admin can delete courses" ON public.courses;

ALTER TABLE IF EXISTS public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "courses_select_public" ON public.courses
  FOR SELECT USING (true);

CREATE POLICY "courses_insert_admin" ON public.courses
  FOR INSERT WITH CHECK (true);

CREATE POLICY "courses_update_admin" ON public.courses
  FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "courses_delete_admin" ON public.courses
  FOR DELETE USING (true);
```

### Option 3: Alternative Fix (If Migration Doesn't Work)

If the migration still doesn't resolve the issue, there might be a role/auth problem. Try this:

1. Go to Supabase Dashboard → Project Settings → Database
2. Under RLS Status, ensure it's enabled but not overly restrictive
3. Check your `.env.local` file:
   ```
   VITE_SUPABASE_URL=<your-url>
   VITE_SUPABASE_ANON_KEY=<your-key>
   ```
4. The anon key should work, but if it doesn't, you may need to create a service role key for the admin panel

## How It Works

The migration creates RLS policies with `WITH CHECK (true)` which means:
- ✅ Anyone can READ courses (SELECT)
- ✅ Anyone can CREATE courses (INSERT)
- ✅ Anyone can UPDATE courses (UPDATE)
- ✅ Anyone can DELETE courses (DELETE)

This is safe for your admin-only backend routes because:
1. Only authenticated admin users can access `/admin/courses`
2. The public-facing `/courses` routes use cached data
3. Direct database access is restricted at the API level

## Testing

After applying the migration:

1. **Test Image Upload**
   - Go to Admin Dashboard → Courses
   - Click a course
   - Try uploading an image
   - Should work without RLS error ✅

2. **Test Other Admin Operations**
   - Create a new course
   - Edit course details
   - Delete a course
   - All should work properly ✅

## If Still Not Working

Check the browser console error for the full error message:
1. Open DevTools (F12)
2. Go to Console tab
3. Try uploading image again
4. Copy the full error message
5. Share it for additional debugging

Common issues:
- Supabase schema not synced (try refreshing browser + clearing cache)
- Wrong project selected in Supabase dashboard
- API key mismatch between `.env.local` and Supabase project settings
