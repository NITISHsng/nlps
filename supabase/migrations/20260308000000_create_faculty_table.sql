-- ==========================================
-- ADD FACULTY TABLE
-- ==========================================

CREATE TABLE public.faculty (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  subject text NOT NULL,
  qualification text,
  experience text,
  joining text,
  image text,
  achievements text,
  bio text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.faculty ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view faculty"
ON public.faculty
FOR SELECT
USING (true);

CREATE POLICY "Admin can manage faculty"
ON public.faculty
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Refresh schema cache
NOTIFY pgrst, 'reload schema';
