-- Fix RLS policies to allow admin panel operations (including image uploads)
-- This removes restrictive auth.role() checks and allows anon key to perform admin operations

-- Drop ALL existing policies for courses (both with and without schema prefix)
DROP POLICY IF EXISTS "Public read courses" ON courses;
DROP POLICY IF EXISTS "Admin manage courses" ON courses;
DROP POLICY IF EXISTS "Admin update courses" ON courses;
DROP POLICY IF EXISTS "Admin delete courses" ON courses;
DROP POLICY IF EXISTS "Admin can insert courses" ON courses;
DROP POLICY IF EXISTS "Admin can update courses" ON courses;
DROP POLICY IF EXISTS "Admin can delete courses" ON courses;

DROP POLICY IF EXISTS "Public read courses" ON public.courses;
DROP POLICY IF EXISTS "Admin manage courses" ON public.courses;
DROP POLICY IF EXISTS "Admin update courses" ON public.courses;
DROP POLICY IF EXISTS "Admin delete courses" ON public.courses;
DROP POLICY IF EXISTS "Admin can insert courses" ON public.courses;
DROP POLICY IF EXISTS "Admin can update courses" ON public.courses;
DROP POLICY IF EXISTS "Admin can delete courses" ON public.courses;

-- Ensure RLS is enabled
ALTER TABLE IF EXISTS public.courses ENABLE ROW LEVEL SECURITY;

-- Create permissive policies for admin operations
-- SELECT - Anyone can read
CREATE POLICY "courses_select_public" ON public.courses
  FOR SELECT
  USING (true);

-- INSERT - Allow inserts (no auth checks)
CREATE POLICY "courses_insert_admin" ON public.courses
  FOR INSERT
  WITH CHECK (true);

-- UPDATE - Allow updates (no auth checks)
CREATE POLICY "courses_update_admin" ON public.courses
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- DELETE - Allow deletes (no auth checks)
CREATE POLICY "courses_delete_admin" ON public.courses
  FOR DELETE
  USING (true);

-- Ensure course_images bucket is accessible for uploads
-- Note: Bucket policies are separate from table RLS policies

-- Fix other admin tables similarly
-- Certificates table
DROP POLICY IF EXISTS "Allow authenticated users to manage" ON public.certificates;
DROP POLICY IF EXISTS "Allow admin to manage certificates" ON public.certificates;
DROP POLICY IF EXISTS "Allow admin to update certificates" ON public.certificates;
DROP POLICY IF EXISTS "Allow admin to delete certificates" ON public.certificates;

ALTER TABLE IF EXISTS public.certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "certificates_select_public" ON public.certificates
  FOR SELECT
  USING (true);

CREATE POLICY "certificates_insert_admin" ON public.certificates
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "certificates_update_admin" ON public.certificates
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "certificates_delete_admin" ON public.certificates
  FOR DELETE
  USING (true);

-- Events table
DROP POLICY IF EXISTS "Admin manage events" ON public.events;
DROP POLICY IF EXISTS "Admin update events" ON public.events;
DROP POLICY IF EXISTS "Admin delete events" ON public.events;
DROP POLICY IF EXISTS "Admin can insert events" ON public.events;
DROP POLICY IF EXISTS "Admin can update events" ON public.events;
DROP POLICY IF EXISTS "Admin can delete events" ON public.events;

ALTER TABLE IF EXISTS public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "events_select_public" ON public.events
  FOR SELECT
  USING (true);

CREATE POLICY "events_insert_admin" ON public.events
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "events_update_admin" ON public.events
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "events_delete_admin" ON public.events
  FOR DELETE
  USING (true);

-- Home sections table
DROP POLICY IF EXISTS "Admin manage home" ON public.home_sections;
DROP POLICY IF EXISTS "Admin can insert home sections" ON public.home_sections;
DROP POLICY IF EXISTS "Admin can update home sections" ON public.home_sections;
DROP POLICY IF EXISTS "Admin can delete home sections" ON public.home_sections;

ALTER TABLE IF EXISTS public.home_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "home_sections_select_public" ON public.home_sections
  FOR SELECT
  USING (true);

CREATE POLICY "home_sections_insert_admin" ON public.home_sections
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "home_sections_update_admin" ON public.home_sections
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "home_sections_delete_admin" ON public.home_sections
  FOR DELETE
  USING (true);

-- About content table
DROP POLICY IF EXISTS "Admin manage about" ON public.about_content;
DROP POLICY IF EXISTS "Admin can insert about content" ON public.about_content;
DROP POLICY IF EXISTS "Admin can update about content" ON public.about_content;
DROP POLICY IF EXISTS "Admin can delete about content" ON public.about_content;

ALTER TABLE IF EXISTS public.about_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "about_content_select_public" ON public.about_content
  FOR SELECT
  USING (true);

CREATE POLICY "about_content_insert_admin" ON public.about_content
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "about_content_update_admin" ON public.about_content
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "about_content_delete_admin" ON public.about_content
  FOR DELETE
  USING (true);
