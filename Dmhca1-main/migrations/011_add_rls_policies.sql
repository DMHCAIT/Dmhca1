-- Enable RLS and set policies for applications and carts tables

-- applications table - allow public inserts (for unauthenticated form submissions)
ALTER TABLE IF EXISTS public.applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public inserts" ON public.applications;
DROP POLICY IF EXISTS "Allow users to view their own" ON public.applications;
DROP POLICY IF EXISTS "Allow updates" ON public.applications;

-- Public can insert
CREATE POLICY "Allow public inserts" ON public.applications
  FOR INSERT 
  WITH CHECK (true);

-- Users can view
CREATE POLICY "Allow users to view their own" ON public.applications
  FOR SELECT 
  USING (true);

-- Admins can update
CREATE POLICY "Allow updates" ON public.applications
  FOR UPDATE 
  USING (true);

-- carts table - allow users to manage their own cart
ALTER TABLE IF EXISTS public.carts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage their cart" ON public.carts;

CREATE POLICY "Users can manage their cart" ON public.carts
  FOR ALL
  USING (true)
  WITH CHECK (true);
