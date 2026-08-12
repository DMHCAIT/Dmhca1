#!/usr/bin/env bun
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const migrationSQL = `
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
  status VARCHAR(50) DEFAULT 'pending',
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
  payment_method VARCHAR(50),
  razorpay_order_id VARCHAR(255),
  razorpay_payment_id VARCHAR(255),
  razorpay_signature VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
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
DROP POLICY IF EXISTS "Users can view their own profile" ON users;
DROP POLICY IF EXISTS "Users can update their own profile" ON users;
CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);

-- RLS Policies for otp_tokens (allow service role to insert)
DROP POLICY IF EXISTS "Service role can insert OTP tokens" ON otp_tokens;
DROP POLICY IF EXISTS "Service role can select OTP tokens" ON otp_tokens;
DROP POLICY IF EXISTS "Service role can update OTP tokens" ON otp_tokens;
CREATE POLICY "Service role can insert OTP tokens" ON otp_tokens
  FOR INSERT USING (true);
CREATE POLICY "Service role can select OTP tokens" ON otp_tokens
  FOR SELECT USING (true);
CREATE POLICY "Service role can update OTP tokens" ON otp_tokens
  FOR UPDATE USING (true);

-- RLS Policies for enrollments
DROP POLICY IF EXISTS "Users can view their enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can insert their enrollments" ON enrollments;
CREATE POLICY "Users can view their enrollments" ON enrollments
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can insert their enrollments" ON enrollments
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- RLS Policies for payments
DROP POLICY IF EXISTS "Users can view their payments" ON payments;
CREATE POLICY "Users can view their payments" ON payments
  FOR SELECT USING (user_id = auth.uid());

-- RLS Policies for student profiles
DROP POLICY IF EXISTS "Users can view their student profile" ON student_profiles;
DROP POLICY IF EXISTS "Users can update their student profile" ON student_profiles;
DROP POLICY IF EXISTS "Users can insert their student profile" ON student_profiles;
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
`;

async function applyMigration() {
  try {
    console.log("🔄 Connecting to Supabase...");
    console.log(`📍 Project: ${supabaseUrl}`);
    
    console.log("\n📦 Applying migration...");
    
    // Execute the SQL migration
    const { data, error } = await supabase.rpc("exec", {
      query: migrationSQL,
    });

    if (error) {
      console.error("❌ RPC exec failed (expected - trying alternate method)");
      console.log("Error:", error.message);
      
      // Try using pg query directly
      console.log("\n🔄 Trying direct database connection...");
      console.log("⚠️  Note: This requires executing the SQL in Supabase SQL Editor manually.");
      
      displaySQLForManualExecution();
    } else {
      console.log("✅ Migration applied successfully!");
      console.log(data);
      
      // Verify tables exist
      await verifyTables();
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
    
    console.log("\n📋 MANUAL APPLICATION REQUIRED:");
    console.log("================================================");
    console.log("Since direct RPC didn't work, please apply manually:");
    console.log("================================================\n");
    
    displaySQLForManualExecution();
  }
}

function displaySQLForManualExecution() {
  console.log("1️⃣  Go to: https://supabase.com/dashboard");
  console.log("2️⃣  Click your project");
  console.log("3️⃣  In left sidebar, click 'SQL Editor'");
  console.log("4️⃣  Click 'New query'");
  console.log("5️⃣  Paste this SQL and run:\n");
  console.log("=".repeat(80));
  console.log(migrationSQL);
  console.log("=".repeat(80));
  console.log("\n✅ After running, the tables will be created!");
}

async function verifyTables() {
  try {
    console.log("\n🔍 Verifying tables...");
    
    const { data: tables, error } = await supabase
      .from("information_schema.tables")
      .select("table_name")
      .eq("table_schema", "public");
    
    if (error) {
      console.log("⚠️  Could not verify tables directly");
      return;
    }
    
    const tableNames = tables?.map(t => t.table_name) || [];
    const requiredTables = ["users", "otp_tokens", "enrollments", "payments", "student_profiles"];
    
    console.log("\n📊 Tables in database:");
    requiredTables.forEach(tableName => {
      const exists = tableNames.includes(tableName);
      const status = exists ? "✅" : "❌";
      console.log(`${status} ${tableName}`);
    });
  } catch (err) {
    console.log("Note: Verification failed, but migration may still be applied.");
  }
}

console.log("🚀 DMHCA Database Migration Tool\n");
applyMigration();
