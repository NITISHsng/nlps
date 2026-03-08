-- CREATE STORAGE BUCKET FOR NOTICES
INSERT INTO storage.buckets (id, name, public) 
VALUES ('pdf-files', 'pdf-files', true) 
ON CONFLICT (id) DO NOTHING;

-- SET UP STORAGE PUBLIC READ POLICY
CREATE POLICY "Public can view notices bucket"
ON storage.objects FOR SELECT
USING ( bucket_id = 'pdf-files' );

-- SET UP STORAGE ADMIN WRITE POLICIES
CREATE POLICY "Admin can insert notices bucket"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'pdf-files' );

CREATE POLICY "Admin can update notices bucket"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'pdf-files' );

CREATE POLICY "Admin can delete notices bucket"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'pdf-files' );
