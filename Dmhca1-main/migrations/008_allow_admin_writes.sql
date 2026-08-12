-- Allow anon key to perform admin operations in development
-- This permits the admin panel to write/update/delete while using the VITE_SUPABASE_ANON_KEY

-- Certificates table
DROP POLICY IF EXISTS "Allow authenticated users to manage" ON certificates;
DROP POLICY IF EXISTS "Allow admin to manage certificates" ON certificates;
DROP POLICY IF EXISTS "Allow admin to update certificates" ON certificates;
DROP POLICY IF EXISTS "Allow admin to delete certificates" ON certificates;
CREATE POLICY "Allow admin to manage certificates" ON certificates FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin to update certificates" ON certificates FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin to delete certificates" ON certificates FOR DELETE USING (true);

-- Courses table
DROP POLICY IF EXISTS "Admin manage courses" ON courses;
DROP POLICY IF EXISTS "Admin update courses" ON courses;
DROP POLICY IF EXISTS "Admin delete courses" ON courses;
DROP POLICY IF EXISTS "Admin can insert courses" ON courses;
DROP POLICY IF EXISTS "Admin can update courses" ON courses;
DROP POLICY IF EXISTS "Admin can delete courses" ON courses;
CREATE POLICY "Admin can insert courses" ON courses FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can update courses" ON courses FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Admin can delete courses" ON courses FOR DELETE USING (true);

-- Events table
DROP POLICY IF EXISTS "Admin manage events" ON events;
DROP POLICY IF EXISTS "Admin update events" ON events;
DROP POLICY IF EXISTS "Admin delete events" ON events;
DROP POLICY IF EXISTS "Admin can insert events" ON events;
DROP POLICY IF EXISTS "Admin can update events" ON events;
DROP POLICY IF EXISTS "Admin can delete events" ON events;
CREATE POLICY "Admin can insert events" ON events FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can update events" ON events FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Admin can delete events" ON events FOR DELETE USING (true);

-- Home sections table
DROP POLICY IF EXISTS "Admin manage home" ON home_sections;
DROP POLICY IF EXISTS "Admin can insert home sections" ON home_sections;
DROP POLICY IF EXISTS "Admin can update home sections" ON home_sections;
DROP POLICY IF EXISTS "Admin can delete home sections" ON home_sections;
CREATE POLICY "Admin can insert home sections" ON home_sections FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can update home sections" ON home_sections FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Admin can delete home sections" ON home_sections FOR DELETE USING (true);

-- About content table
DROP POLICY IF EXISTS "Admin manage about" ON about_content;
DROP POLICY IF EXISTS "Admin can insert about content" ON about_content;
DROP POLICY IF EXISTS "Admin can update about content" ON about_content;
DROP POLICY IF EXISTS "Admin can delete about content" ON about_content;
CREATE POLICY "Admin can insert about content" ON about_content FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can update about content" ON about_content FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Admin can delete about content" ON about_content FOR DELETE USING (true);

-- Applications table
DROP POLICY IF EXISTS "Authenticated can insert applications" ON applications;
DROP POLICY IF EXISTS "Admin can view applications" ON applications;
DROP POLICY IF EXISTS "Admin can update applications" ON applications;
DROP POLICY IF EXISTS "Admin can delete applications" ON applications;
DROP POLICY IF EXISTS "Anyone can insert applications" ON applications;
DROP POLICY IF EXISTS "Admin can view all applications" ON applications;
CREATE POLICY "Anyone can insert applications" ON applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can view all applications" ON applications FOR SELECT USING (true);
CREATE POLICY "Admin can update applications" ON applications FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Admin can delete applications" ON applications FOR DELETE USING (true);

-- Contact messages table
DROP POLICY IF EXISTS "Admin read messages" ON contact_messages;
DROP POLICY IF EXISTS "Admin can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Admin can update messages" ON contact_messages;
DROP POLICY IF EXISTS "Admin can delete messages" ON contact_messages;
CREATE POLICY "Admin can read messages" ON contact_messages FOR SELECT USING (true);
CREATE POLICY "Admin can update messages" ON contact_messages FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Admin can delete messages" ON contact_messages FOR DELETE USING (true);
