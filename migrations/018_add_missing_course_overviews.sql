-- Add missing overview descriptions for PG Diploma courses

UPDATE public.courses 
SET overview = 'A 12-month PG Diploma designed to develop clinical expertise in laboratory diagnostics, covering pathology, hematology, biochemistry, and microbiology with hands-on training.'
WHERE title ILIKE '%Clinical Pathology%' AND overview IS NULL;

UPDATE public.courses 
SET overview = 'A 12-month PG Diploma designed to develop clinical expertise in orthodontic diagnosis, treatment planning, biomechanics, and advanced orthodontic techniques.'
WHERE title ILIKE '%Orthodontics%' AND overview IS NULL;

-- Ensure all courses have at least a basic description
UPDATE public.courses
SET overview = 'Comprehensive professional program with expert-led training and hands-on experience.'
WHERE overview IS NULL OR overview = '';
