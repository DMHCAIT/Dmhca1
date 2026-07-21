# Applying the OTP Database Migration

The error `Could not find the table 'public.otp_tokens'` means the database tables haven't been created yet. Follow these steps:

## Option 1: Manual Application (Recommended - Most Reliable)

### Step 1: Open Supabase SQL Editor
1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Click on your project
3. In the left sidebar, click **"SQL Editor"**
4. Click **"New query"** button (or click the "+" icon)

### Step 2: Copy and Paste the Migration SQL
1. Open the file: `migrations/009_enrollment_system_fixed.sql`
2. Select all the SQL code (Ctrl+A)
3. Copy it (Ctrl+C)
4. In the Supabase SQL Editor, paste the entire SQL (Ctrl+V)
5. Click the **"Run"** button (or press Ctrl+Enter)

### Step 3: Verify Success
You should see a message like: `"PostgreSQL executed successfully"`

The tables created are:
- ✅ `users` - Stores user accounts
- ✅ `otp_tokens` - Stores OTP verification codes
- ✅ `enrollments` - Stores course enrollments
- ✅ `payments` - Stores payment records
- ✅ `student_profiles` - Stores student information

---

## Option 2: Using the Apply Script (Command Line)

Run this command:
```bash
bun run scripts/apply-enrollment-migration.mts
```

Note: This may not work directly due to Supabase RPC limitations. If it doesn't work, use Option 1 instead.

---

## Verification

After applying the migration, verify the tables exist:

### In Supabase Dashboard:
1. Go to **"Table Editor"** in the left sidebar
2. You should see these new tables:
   - `otp_tokens`
   - `users`
   - `enrollments`
   - `payments`
   - `student_profiles`

### Testing the Connection:
Run the signup flow again at http://localhost:8084/:
1. Click "Sign Up"
2. Fill in the 3-step form
3. Click "Send OTP"
4. You should receive an OTP email and the table error should be gone

---

## If You Still Get the Error

1. **Check table name**: Make sure the table is `otp_tokens` (not `otp_token`)
2. **Check schema**: The table should be in the `public` schema
3. **Check permissions**: Verify your service role key has access to the table
4. **Refresh migrations**: Try clearing any migration cache and rerunning

---

## SQL Code Location
The migration SQL is in: `migrations/009_enrollment_system_fixed.sql`

It includes:
- Table creation statements
- RLS (Row Level Security) policies
- Database indexes for performance
- Proper constraints and references
