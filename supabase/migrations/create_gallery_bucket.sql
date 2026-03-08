-- ==========================================
-- CREATE STORAGE BUCKET FOR GALLERY
-- ==========================================
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery', 'gallery', true) 
ON CONFLICT (id) DO NOTHING;

-- ==========================================
-- SET UP STORAGE PUBLIC READ POLICY
-- ==========================================
CREATE POLICY "Public can view gallery images"
ON storage.objects FOR SELECT
USING ( bucket_id = 'gallery' );

-- ==========================================
-- SET UP STORAGE ADMIN WRITE POLICIES
-- ==========================================
CREATE POLICY "Admin can insert gallery images"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'gallery' AND auth.role() = 'authenticated' );

CREATE POLICY "Admin can update gallery images"
ON storage.objects FOR UPDATE
WITH CHECK ( bucket_id = 'gallery' AND auth.role() = 'authenticated' );

CREATE POLICY "Admin can delete gallery images"
ON storage.objects FOR DELETE
USING ( bucket_id = 'gallery' AND auth.role() = 'authenticated' );
