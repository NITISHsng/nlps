-- ==========================================
-- CLEAN OLD TABLES
-- ==========================================
DROP TABLE IF EXISTS public.notices CASCADE;
DROP TABLE IF EXISTS public.admissions_settings CASCADE;
DROP TABLE IF EXISTS public.facilities CASCADE;
DROP TABLE IF EXISTS public.gallery_items CASCADE;
DROP TABLE IF EXISTS public.contact_settings CASCADE;


-- ==========================================
-- 1. NOTICES TABLE
-- ==========================================
CREATE TABLE public.notices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date date NOT NULL DEFAULT CURRENT_DATE,
  category text NOT NULL DEFAULT 'General',
  pdf_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active notices"
ON public.notices
FOR SELECT
USING (is_active = true);

CREATE POLICY "Admin can manage notices"
ON public.notices
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE INDEX idx_notices_date ON public.notices(date DESC);
CREATE INDEX idx_notices_category ON public.notices(category);
CREATE INDEX idx_notices_is_active ON public.notices(is_active);


-- ==========================================
-- 2. ADMISSIONS SETTINGS TABLE
-- ==========================================
CREATE TABLE public.admissions_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_open boolean NOT NULL DEFAULT false,
  start_date timestamptz,
  end_date timestamptz,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.admissions_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read admission settings"
ON public.admissions_settings
FOR SELECT
USING (true);

CREATE POLICY "Admin can manage admission settings"
ON public.admissions_settings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

INSERT INTO public.admissions_settings (is_open)
SELECT false
WHERE NOT EXISTS (SELECT 1 FROM public.admissions_settings);


-- ==========================================
-- 3. FACILITIES TABLE
-- ==========================================
CREATE TABLE public.facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  specifications jsonb,
  is_archived boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.facilities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read facilities"
ON public.facilities
FOR SELECT
USING (is_archived = false);

CREATE POLICY "Admin can manage facilities"
ON public.facilities
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);


-- ==========================================
-- 4. GALLERY ITEMS TABLE
-- ==========================================
CREATE TABLE public.gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  description text,
  file_url text NOT NULL,
  thumbnail_url text,
  media_type text NOT NULL DEFAULT 'image',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read gallery"
ON public.gallery_items
FOR SELECT
USING (true);

CREATE POLICY "Admin can manage gallery"
ON public.gallery_items
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);


-- ==========================================
-- 5. CONTACT SETTINGS TABLE
-- ==========================================
CREATE TABLE public.contact_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_numbers jsonb,
  emails jsonb,
  address text,
  social_media jsonb,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.contact_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read contact settings"
ON public.contact_settings
FOR SELECT
USING (true);

CREATE POLICY "Admin can manage contact settings"
ON public.contact_settings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

INSERT INTO public.contact_settings (address)
SELECT ''
WHERE NOT EXISTS (SELECT 1 FROM public.contact_settings);


-- ==========================================
-- REFRESH SUPABASE SCHEMA CACHE
-- ==========================================
NOTIFY pgrst, 'reload schema';