CREATE TABLE IF NOT EXISTS public.event_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID,
  user_email VARCHAR(255) NOT NULL,
  user_name VARCHAR(255),
  user_phone VARCHAR(30),
  registration_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  event_slug TEXT NOT NULL,
  event_title TEXT NOT NULL,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  designation VARCHAR(100) NOT NULL,
  specialty VARCHAR(150) NOT NULL,
  institution VARCHAR(200) NOT NULL,
  city VARCHAR(120) NOT NULL,
  referral_source VARCHAR(50),
  consent BOOLEAN NOT NULL CHECK (consent = true),
  status VARCHAR(30) NOT NULL DEFAULT 'pending',
  razorpay_order_id VARCHAR(255),
  razorpay_payment_id VARCHAR(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- CREATE TABLE IF NOT EXISTS does not update a table created by an earlier schema.
-- Add the registration columns explicitly so this migration also upgrades that table.
ALTER TABLE public.event_registrations
  ADD COLUMN IF NOT EXISTS event_id UUID,
  ADD COLUMN IF NOT EXISTS user_email VARCHAR(255),
  ADD COLUMN IF NOT EXISTS user_name VARCHAR(255),
  ADD COLUMN IF NOT EXISTS user_phone VARCHAR(30),
  ADD COLUMN IF NOT EXISTS registration_date TIMESTAMPTZ DEFAULT now(),
  ADD COLUMN IF NOT EXISTS event_slug TEXT,
  ADD COLUMN IF NOT EXISTS event_title TEXT,
  ADD COLUMN IF NOT EXISTS full_name VARCHAR(150),
  ADD COLUMN IF NOT EXISTS email VARCHAR(255),
  ADD COLUMN IF NOT EXISTS phone VARCHAR(30),
  ADD COLUMN IF NOT EXISTS designation VARCHAR(100),
  ADD COLUMN IF NOT EXISTS specialty VARCHAR(150),
  ADD COLUMN IF NOT EXISTS institution VARCHAR(200),
  ADD COLUMN IF NOT EXISTS city VARCHAR(120),
  ADD COLUMN IF NOT EXISTS referral_source VARCHAR(50),
  ADD COLUMN IF NOT EXISTS consent BOOLEAN,
  ADD COLUMN IF NOT EXISTS status VARCHAR(30) DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS razorpay_order_id VARCHAR(255),
  ADD COLUMN IF NOT EXISTS razorpay_payment_id VARCHAR(255),
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now(),
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

-- The original schema requires an event-table UUID. This event is code-managed,
-- so retain existing IDs but allow its new slug-based registrations without one.
ALTER TABLE public.event_registrations
  ALTER COLUMN event_id DROP NOT NULL,
  ALTER COLUMN status SET DEFAULT 'pending';

-- The legacy status check only allowed registered/attended/cancelled.
ALTER TABLE public.event_registrations
  DROP CONSTRAINT IF EXISTS event_registrations_status_check;

ALTER TABLE public.event_registrations
  ADD CONSTRAINT event_registrations_status_check
  CHECK (status IN ('pending', 'paid', 'payment_setup_failed', 'registered', 'attended', 'cancelled'));

CREATE INDEX IF NOT EXISTS idx_event_registrations_event_status
  ON public.event_registrations (event_slug, status);

CREATE INDEX IF NOT EXISTS idx_event_registrations_email
  ON public.event_registrations (email);

CREATE UNIQUE INDEX IF NOT EXISTS idx_event_registrations_razorpay_order
  ON public.event_registrations (razorpay_order_id)
  WHERE razorpay_order_id IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_event_registrations_razorpay_payment
  ON public.event_registrations (razorpay_payment_id)
  WHERE razorpay_payment_id IS NOT NULL;

ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;
