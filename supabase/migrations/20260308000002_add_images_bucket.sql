-- Add category to gallery_items
ALTER TABLE public.gallery_items ADD COLUMN IF NOT EXISTS category text DEFAULT 'Campus View';

-- CREATE STORAGE BUCKET FOR IMAGES
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true) 
ON CONFLICT (id) DO NOTHING;

-- SET UP STORAGE PUBLIC READ POLICY
CREATE POLICY "Public can view gallery images bucket"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

-- SET UP STORAGE ADMIN WRITE POLICIES
CREATE POLICY "Admin can insert gallery images bucket"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'images' AND auth.role() = 'authenticated' );

CREATE POLICY "Admin can update gallery images bucket"
ON storage.objects FOR UPDATE
WITH CHECK ( bucket_id = 'images' AND auth.role() = 'authenticated' );

CREATE POLICY "Admin can delete gallery images bucket"
ON storage.objects FOR DELETE
USING ( bucket_id = 'images' AND auth.role() = 'authenticated' );
