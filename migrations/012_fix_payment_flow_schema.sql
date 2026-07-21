-- Migration: Fix payment flow schema for proper enrollment and email handling

-- Drop and recreate tables without transactions to avoid abort issues
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS enrollments CASCADE;

-- Create enrollments table with nullable user_id
CREATE TABLE enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID DEFAULT NULL,
  course_id VARCHAR(255) DEFAULT NULL,
  course_name VARCHAR(255) NOT NULL,
  student_name VARCHAR(255) NOT NULL,
  student_email VARCHAR(255) NOT NULL,
  payment_method VARCHAR(50) DEFAULT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  enrollment_date TIMESTAMP DEFAULT now(),
  completion_date TIMESTAMP DEFAULT NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create payments table with all required columns and nullable foreign keys
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  enrollment_id UUID DEFAULT NULL,
  user_id UUID DEFAULT NULL,
  course_name VARCHAR(255) NOT NULL,
  student_name VARCHAR(255) DEFAULT NULL,
  student_email VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) NOT NULL DEFAULT 'INR',
  payment_method VARCHAR(50) DEFAULT 'razorpay',
  razorpay_order_id VARCHAR(255) DEFAULT NULL UNIQUE,
  razorpay_payment_id VARCHAR(255) DEFAULT NULL,
  razorpay_signature VARCHAR(255) DEFAULT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  FOREIGN KEY (enrollment_id) REFERENCES enrollments(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for enrollments
DROP POLICY IF EXISTS "Allow public enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can view their enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can update their enrollments" ON enrollments;

CREATE POLICY "Allow public enrollments" ON enrollments FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their enrollments" ON enrollments FOR SELECT USING (true);
CREATE POLICY "Users can update their enrollments" ON enrollments FOR UPDATE USING (true);

-- RLS Policies for payments
DROP POLICY IF EXISTS "Allow public payments" ON payments;
DROP POLICY IF EXISTS "Allow public read payments" ON payments;
DROP POLICY IF EXISTS "Allow public update payments" ON payments;

CREATE POLICY "Allow public payments" ON payments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read payments" ON payments FOR SELECT USING (true);
CREATE POLICY "Allow public update payments" ON payments FOR UPDATE USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_payments_razorpay_order_id ON payments(razorpay_order_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_student_email ON enrollments(student_email);
