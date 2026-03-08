-- ==========================================
-- ADD TOP STUDENTS TABLE
-- ==========================================

CREATE TABLE public.top_students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year integer NOT NULL,
  name text NOT NULL,
  image text,
  percentage text NOT NULL,
  details text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.top_students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view top students"
ON public.top_students
FOR SELECT
USING (true);

CREATE POLICY "Admin can manage top students"
ON public.top_students
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Refresh schema cache
NOTIFY pgrst, 'reload schema';
