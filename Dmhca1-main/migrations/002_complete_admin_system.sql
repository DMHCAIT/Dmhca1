-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- AUTHENTICATION & USER MANAGEMENT
-- ============================================================

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('admin', 'moderator', 'editor')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User signups tracking
CREATE TABLE IF NOT EXISTS user_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  course_interested VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'rejected')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User login logs
CREATE TABLE IF NOT EXISTS login_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email VARCHAR(255),
  ip_address VARCHAR(45),
  user_agent TEXT,
  login_status VARCHAR(20) DEFAULT 'success' CHECK (login_status IN ('success', 'failed')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- PAGE CONTENT MANAGEMENT
-- ============================================================

-- Home page sections
CREATE TABLE IF NOT EXISTS home_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_name VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500),
  subtitle VARCHAR(500),
  description TEXT,
  button_text VARCHAR(100),
  button_link VARCHAR(500),
  image_url VARCHAR(500),
  background_color VARCHAR(50),
  display_order INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- About page content
CREATE TABLE IF NOT EXISTS about_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_name VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500),
  description TEXT,
  image_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- COURSE MANAGEMENT
-- ============================================================

-- Courses table (complete course data)
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  category VARCHAR(100),
  duration VARCHAR(100),
  price DECIMAL(10, 2),
  image_url VARCHAR(500),
  image_alt TEXT,
  instructor_name VARCHAR(255),
  instructor_bio TEXT,
  instructor_image VARCHAR(500),
  duration_weeks INTEGER,
  total_lessons INTEGER,
  certification BOOLEAN DEFAULT true,
  highlights TEXT, -- JSON array
  syllabus TEXT, -- JSON array of modules
  requirements TEXT, -- JSON array
  learning_outcomes TEXT, -- JSON array
  testimonials TEXT, -- JSON array
  faq TEXT, -- JSON array
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Course enrollments
CREATE TABLE IF NOT EXISTS course_enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID NOT NULL REFERENCES courses(id),
  user_email VARCHAR(255) NOT NULL,
  user_name VARCHAR(255),
  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  progress DECIMAL(5, 2) DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused', 'cancelled')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- EVENTS & WEBINARS
-- ============================================================

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  date_time TIMESTAMP,
  duration_hours DECIMAL(5, 2),
  location VARCHAR(500),
  speaker_name VARCHAR(255),
  speaker_bio TEXT,
  speaker_image VARCHAR(500),
  image_url VARCHAR(500),
  image_alt TEXT,
  event_type VARCHAR(50) CHECK (event_type IN ('webinar', 'workshop', 'conference', 'training')),
  capacity INTEGER,
  enrolled_count INTEGER DEFAULT 0,
  registration_link VARCHAR(500),
  highlights TEXT, -- JSON array
  agenda TEXT, -- JSON array
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Event registrations
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES events(id),
  user_email VARCHAR(255) NOT NULL,
  user_name VARCHAR(255),
  user_phone VARCHAR(20),
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'registered' CHECK (status IN ('registered', 'attended', 'cancelled')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Event comments
CREATE TABLE IF NOT EXISTS event_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_slug VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- CONTACT & MESSAGING
-- ============================================================

-- Contact messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  course VARCHAR(255),
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'responded', 'closed')),
  response_message TEXT,
  responded_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- SITE CONFIGURATION
-- ============================================================

-- Site settings
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  setting_key VARCHAR(255) UNIQUE NOT NULL,
  setting_value TEXT,
  description VARCHAR(500),
  setting_type VARCHAR(50) DEFAULT 'text' CHECK (setting_type IN ('text', 'number', 'boolean', 'json', 'url', 'email')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Footer content
CREATE TABLE IF NOT EXISTS footer_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_name VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255),
  content TEXT,
  links TEXT, -- JSON array
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Navigation menu items
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  menu_name VARCHAR(100) NOT NULL,
  label VARCHAR(255) NOT NULL,
  url VARCHAR(500),
  icon VARCHAR(100),
  display_order INTEGER,
  parent_id UUID REFERENCES menu_items(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- INDEXING FOR PERFORMANCE
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_is_active ON courses(is_active);
CREATE INDEX IF NOT EXISTS idx_courses_display_order ON courses(display_order);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date_time);
CREATE INDEX IF NOT EXISTS idx_events_slug ON events(slug);
CREATE INDEX IF NOT EXISTS idx_events_is_active ON events(is_active);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_user_signups_email ON user_signups(email);
CREATE INDEX IF NOT EXISTS idx_user_signups_status ON user_signups(status);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_course_id ON course_enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_user_email ON course_enrollments(user_email);
CREATE INDEX IF NOT EXISTS idx_event_registrations_event_id ON event_registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_login_logs_email ON login_logs(user_email);
CREATE INDEX IF NOT EXISTS idx_login_logs_date ON login_logs(created_at);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE login_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE home_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE footer_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Admin-only policies
CREATE POLICY "Admin users private" ON admin_users
  FOR SELECT USING (auth.role() = 'authenticated');

-- Public read, admin write policies for content tables
CREATE POLICY "Public read courses" ON courses
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admin manage courses" ON courses
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Admin update courses" ON courses
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin delete courses" ON courses
  FOR DELETE USING (auth.role() = 'authenticated');

-- Similar policies for events
CREATE POLICY "Public read events" ON events
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admin manage events" ON events
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Admin update events" ON events
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin delete events" ON events
  FOR DELETE USING (auth.role() = 'authenticated');

-- Home sections
CREATE POLICY "Public read home" ON home_sections
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admin manage home" ON home_sections
  FOR ALL USING (auth.role() = 'authenticated');

-- About content
CREATE POLICY "Public read about" ON about_content
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admin manage about" ON about_content
  FOR ALL USING (auth.role() = 'authenticated');

-- Messages (admin only)
CREATE POLICY "Admin read messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "User submit message" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin manage messages" ON contact_messages
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin delete messages" ON contact_messages
  FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE BUCKETS
-- ============================================================

INSERT INTO storage.buckets (id, name, public) VALUES
  ('course-images', 'course-images', true),
  ('event-images', 'event-images', true),
  ('instructor-images', 'instructor-images', true),
  ('page-images', 'page-images', true),
  ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public can read all images" ON storage.objects
  FOR SELECT USING (bucket_id IN ('course-images', 'event-images', 'instructor-images', 'page-images', 'media'));

CREATE POLICY "Admin can upload images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id IN ('course-images', 'event-images', 'instructor-images', 'page-images', 'media') AND auth.role() = 'authenticated');

CREATE POLICY "Admin can delete images" ON storage.objects
  FOR DELETE USING (bucket_id IN ('course-images', 'event-images', 'instructor-images', 'page-images', 'media') AND auth.role() = 'authenticated');

-- ============================================================
-- INITIAL DATA
-- ============================================================

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, description, setting_type) VALUES
  ('site_title', 'Delhi Medical Health Care Academy', 'Website title', 'text'),
  ('site_description', 'Accessible online medical education', 'Website meta description', 'text'),
  ('phone', '+91 70420 11441', 'Contact phone number', 'text'),
  ('email', 'info@dmhca.in', 'Contact email address', 'email'),
  ('address', 'New Delhi, India', 'Office address', 'text'),
  ('logo_url', '/logo.png', 'Logo URL', 'url'),
  ('primary_color', '#1a2b4a', 'Primary brand color', 'text'),
  ('secondary_color', '#d4af37', 'Secondary brand color', 'text')
ON CONFLICT (setting_key) DO NOTHING;
