-- Existing enquiries retain NULL CRM status; only new submissions are delivered.
ALTER TABLE public.contact_messages
  ADD COLUMN IF NOT EXISTS event_id uuid UNIQUE,
  ADD COLUMN IF NOT EXISTS crm_status text CHECK (crm_status IN ('pending', 'delivered', 'failed')),
  ADD COLUMN IF NOT EXISTS crm_error text,
  ADD COLUMN IF NOT EXISTS crm_delivered_at timestamptz;

ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS event_id uuid UNIQUE,
  ADD COLUMN IF NOT EXISTS crm_status text CHECK (crm_status IN ('pending', 'delivered', 'failed')),
  ADD COLUMN IF NOT EXISTS crm_error text,
  ADD COLUMN IF NOT EXISTS crm_delivered_at timestamptz;

NOTIFY pgrst, 'reload schema';
