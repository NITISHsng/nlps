-- ==========================================
-- UPDATE SCHEMA FOR ADMISSIONS AND CONTACT
-- ==========================================

-- 1. Add announcement_text to admissions_settings
ALTER TABLE public.admissions_settings ADD COLUMN IF NOT EXISTS announcement_text text;

-- 2. Add office_hours to contact_settings
ALTER TABLE public.contact_settings ADD COLUMN IF NOT EXISTS office_hours jsonb;

-- ==========================================
-- REFRESH SUPABASE SCHEMA CACHE
-- ==========================================
NOTIFY pgrst, 'reload schema';
