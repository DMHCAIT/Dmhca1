-- Users table (authentication via OTP)
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  phone_number VARCHAR(20),
  profile_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- OTP verification storage
CREATE TABLE IF NOT EXISTS otp_tokens (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  otp_hash VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now()
);

-- Enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending, active, completed, cancelled
  enrollment_date TIMESTAMP DEFAULT now(),
  completion_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Payments
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  enrollment_id UUID NOT NULL REFERENCES enrollments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  payment_method VARCHAR(50), -- razorpay, loan, etc
  razorpay_order_id VARCHAR(255),
  razorpay_payment_id VARCHAR(255),
  razorpay_signature VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending', -- pending, completed, failed, refunded
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Student profiles
CREATE TABLE IF NOT EXISTS student_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  date_of_birth DATE,
  qualification VARCHAR(255),
  specialization VARCHAR(255),
  experience_years INTEGER,
  address TEXT,
  city VARCHAR(255),
  state VARCHAR(255),
  postal_code VARCHAR(20),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE otp_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users
CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);

-- RLS Policies for otp_tokens (allow service role to insert)
CREATE POLICY "Service role can insert OTP tokens" ON otp_tokens
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can select OTP tokens" ON otp_tokens
  FOR SELECT USING (true);

CREATE POLICY "Service role can update OTP tokens" ON otp_tokens
  FOR UPDATE USING (true);

-- RLS Policies for enrollments
CREATE POLICY "Users can view their enrollments" ON enrollments
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert their enrollments" ON enrollments
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- RLS Policies for payments
CREATE POLICY "Users can view their payments" ON payments
  FOR SELECT USING (user_id = auth.uid());

-- RLS Policies for student profiles
CREATE POLICY "Users can view their student profile" ON student_profiles
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can update their student profile" ON student_profiles
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can insert their student profile" ON student_profiles
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_otp_tokens_email ON otp_tokens(email);
CREATE INDEX IF NOT EXISTS idx_otp_tokens_verified ON otp_tokens(verified);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
