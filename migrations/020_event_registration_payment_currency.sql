-- Store the amount and currency paid for each event registration so the admin
-- panel can distinguish Indian (INR 599) and international (USD 7) payments.
ALTER TABLE public.event_registrations
  ADD COLUMN IF NOT EXISTS payment_region VARCHAR(20),
  ADD COLUMN IF NOT EXISTS amount NUMERIC(10, 2),
  ADD COLUMN IF NOT EXISTS currency VARCHAR(3);

-- Registrations created before this migration were all INR 599.
UPDATE public.event_registrations
SET payment_region = COALESCE(payment_region, 'indian'),
    amount = COALESCE(amount, 599),
    currency = COALESCE(currency, 'INR')
WHERE event_slug = 'female-hormones-fertility-and-subfertility'
  AND (payment_region IS NULL OR amount IS NULL OR currency IS NULL);

ALTER TABLE public.event_registrations
  DROP CONSTRAINT IF EXISTS event_registrations_currency_check;

ALTER TABLE public.event_registrations
  ADD CONSTRAINT event_registrations_currency_check
  CHECK (currency IS NULL OR currency IN ('INR', 'USD'));

ALTER TABLE public.event_registrations
  DROP CONSTRAINT IF EXISTS event_registrations_payment_region_check;

ALTER TABLE public.event_registrations
  ADD CONSTRAINT event_registrations_payment_region_check
  CHECK (payment_region IS NULL OR payment_region IN ('indian', 'international'));

-- Statuses are now set automatically from Razorpay: a failed payment is recorded as 'failed'.
ALTER TABLE public.event_registrations
  DROP CONSTRAINT IF EXISTS event_registrations_status_check;

ALTER TABLE public.event_registrations
  ADD CONSTRAINT event_registrations_status_check
  CHECK (status IN ('pending', 'paid', 'failed', 'payment_setup_failed', 'registered', 'attended', 'cancelled'));

NOTIFY pgrst, 'reload schema';
