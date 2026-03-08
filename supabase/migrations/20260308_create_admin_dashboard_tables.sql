-- Create admissions_settings table
CREATE TABLE IF NOT EXISTS admissions_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_open boolean NOT NULL DEFAULT false,
  start_date timestamptz,
  end_date timestamptz,
  updated_at timestamptz DEFAULT now()
);

-- Create facilities table
CREATE TABLE IF NOT EXISTS facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  specifications jsonb,
  is_archived boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create gallery_items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  description text,
  file_url text NOT NULL,
  thumbnail_url text,
  media_type text NOT NULL, -- 'image' or 'video'
  created_at timestamptz DEFAULT now()
);

-- Create contact_settings table
CREATE TABLE IF NOT EXISTS contact_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_numbers jsonb,
  emails jsonb,
  address text,
  social_media jsonb,
  updated_at timestamptz DEFAULT now()
);

-- RLS Policies for admissions_settings
ALTER TABLE admissions_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin can manage admission settings" ON admissions_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public can read admission settings" ON admissions_settings FOR SELECT USING (true);

-- RLS Policies for facilities
ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin can manage facilities" ON facilities FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public can read facilities" ON facilities FOR SELECT USING (is_archived = false);

-- RLS Policies for gallery_items
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin can manage gallery" ON gallery_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public can read gallery" ON gallery_items FOR SELECT USING (true);

-- RLS Policies for contact_settings
ALTER TABLE contact_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin can manage contact settings" ON contact_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public can read contact settings" ON contact_settings FOR SELECT USING (true);
