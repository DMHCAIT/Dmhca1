-- USD fees live in the existing course testimonials JSON as priceUSD.
-- Persist course identifiers, not client-provided totals, for regional checkout.
ALTER TABLE applications ADD COLUMN IF NOT EXISTS checkout_items jsonb;
ALTER TABLE payments ADD COLUMN IF NOT EXISTS course_items jsonb;
ALTER TABLE applications ALTER COLUMN course_name TYPE text;
ALTER TABLE payments ALTER COLUMN course_name TYPE text;

-- Lock the payment and link all enrollments in one transaction so retries cannot
-- create duplicate or partial multi-course enrollments.
CREATE OR REPLACE FUNCTION public.activate_course_payment(p_payment_id uuid)
RETURNS void
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  payment_row public.payments%ROWTYPE;
  course_item jsonb;
  new_enrollment_id uuid;
  first_enrollment_id uuid;
BEGIN
  SELECT * INTO STRICT payment_row FROM public.payments
  WHERE id = p_payment_id FOR UPDATE;
  IF payment_row.status <> 'completed' THEN
    RAISE EXCEPTION 'Payment has not been verified';
  END IF;
  IF payment_row.enrollment_id IS NOT NULL THEN
    UPDATE public.enrollments SET status = 'active', updated_at = now()
    WHERE id = payment_row.enrollment_id;
    RETURN;
  END IF;
  FOR course_item IN SELECT value FROM jsonb_array_elements(
    COALESCE(payment_row.course_items,
      jsonb_build_array(jsonb_build_object('courseName', payment_row.course_name))))
  LOOP
    INSERT INTO public.enrollments
      (user_id, course_id, course_name, student_name, student_email, payment_method, status)
    VALUES
      (payment_row.user_id, NULL, course_item->>'courseName',
       COALESCE(payment_row.student_name, 'Student'), payment_row.student_email,
       'razorpay', 'active')
    RETURNING id INTO new_enrollment_id;
    first_enrollment_id := COALESCE(first_enrollment_id, new_enrollment_id);
  END LOOP;
  IF first_enrollment_id IS NULL THEN
    RAISE EXCEPTION 'No courses in payment';
  END IF;
  UPDATE public.payments SET enrollment_id = first_enrollment_id
  WHERE id = payment_row.id;
END;
$$;
REVOKE ALL ON FUNCTION public.activate_course_payment(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.activate_course_payment(uuid) TO service_role;

NOTIFY pgrst, 'reload schema';
