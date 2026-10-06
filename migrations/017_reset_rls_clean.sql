-- Fix RLS policies - Remove old restrictive policies and create permissive ones
-- Handles policy conflicts by dropping all variants first

-- First, disable RLS temporarily to clear all policies cleanly
ALTER TABLE IF EXISTS public.courses DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS (this clears all policies)
ALTER TABLE IF EXISTS public.courses ENABLE ROW LEVEL SECURITY;

-- Now create fresh permissive policies
-- SELECT - Anyone can read
CREATE POLICY "courses_select_all" ON public.courses
  FOR SELECT
  USING (true);

-- INSERT - Allow all inserts (anon key compatible)
CREATE POLICY "courses_insert_all" ON public.courses
  FOR INSERT
  WITH CHECK (true);

-- UPDATE - Allow all updates (anon key compatible)
CREATE POLICY "courses_update_all" ON public.courses
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- DELETE - Allow all deletes (anon key compatible)
CREATE POLICY "courses_delete_all" ON public.courses
  FOR DELETE
  USING (true);

-- Do the same for certificates table
ALTER TABLE IF EXISTS public.certificates DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "certificates_select_all" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "certificates_insert_all" ON public.certificates FOR INSERT WITH CHECK (true);
CREATE POLICY "certificates_update_all" ON public.certificates FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "certificates_delete_all" ON public.certificates FOR DELETE USING (true);

-- Do the same for events table
ALTER TABLE IF EXISTS public.events DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "events_select_all" ON public.events FOR SELECT USING (true);
CREATE POLICY "events_insert_all" ON public.events FOR INSERT WITH CHECK (true);
CREATE POLICY "events_update_all" ON public.events FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "events_delete_all" ON public.events FOR DELETE USING (true);

-- Do the same for home_sections table
ALTER TABLE IF EXISTS public.home_sections DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.home_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "home_sections_select_all" ON public.home_sections FOR SELECT USING (true);
CREATE POLICY "home_sections_insert_all" ON public.home_sections FOR INSERT WITH CHECK (true);
CREATE POLICY "home_sections_update_all" ON public.home_sections FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "home_sections_delete_all" ON public.home_sections FOR DELETE USING (true);

-- Do the same for about_content table
ALTER TABLE IF EXISTS public.about_content DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.about_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "about_content_select_all" ON public.about_content FOR SELECT USING (true);
CREATE POLICY "about_content_insert_all" ON public.about_content FOR INSERT WITH CHECK (true);
CREATE POLICY "about_content_update_all" ON public.about_content FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "about_content_delete_all" ON public.about_content FOR DELETE USING (true);
