BEGIN;

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS sample_certificate_url text;

COMMENT ON COLUMN public.courses.sample_certificate_url IS
  'Public URL of the optional sample certificate image uploaded through the course editor.';

NOTIFY pgrst, 'reload schema';

COMMIT;
