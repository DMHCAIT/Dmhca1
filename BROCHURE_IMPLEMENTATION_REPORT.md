# Brochure Upload & Display Implementation - Analysis Report

## Current Status: ❌ NOT IMPLEMENTED

The brochure upload and display functionality is **currently NOT present** in your system.

---

## What's Missing

### 1. **Database Schema** ❌
- **Missing Field**: No `brochure_url` or `brochure_path` column in the `courses` table
- **Missing Migration**: No migration file for adding brochure fields
- **Impact**: Cannot store brochure URLs in the database

### 2. **Admin Panel Upload** ❌
- **Missing File**: No brochure upload UI in `src/routes/admin.courses.tsx`
- **Missing API Handler**: No brochure file upload handler in `src/routes/api/`
- **Impact**: Admin cannot upload brochures through the admin panel

### 3. **Supabase Storage** ❌
- **Missing Bucket**: No "course-brochures" bucket configured in Supabase
- **Missing Upload Logic**: No code to handle brochure file uploads to Supabase Storage
- **Impact**: Nowhere to store uploaded PDF files

### 4. **Website Display** ❌
- **Missing Component**: No brochure download link/button on course detail pages
- **Missing Retrieval**: No code to fetch and display brochure URLs on the website
- **Impact**: Even if brochures were uploaded, they wouldn't be visible to users

---

## Implementation Checklist

### Phase 1: Database Schema
- [ ] Create migration file: `016_add_brochure_to_courses.sql`
- [ ] Add `brochure_url` column to courses table
- [ ] Add `brochure_filename` column to track original filename
- [ ] Update the data JSONB field structure to include brochure

### Phase 2: Supabase Configuration
- [ ] Create "course-brochures" storage bucket
- [ ] Set up public access policy for the bucket
- [ ] Configure RLS policies for brochure access

### Phase 3: Admin Panel
- [ ] Add brochure upload button in admin courses editor
- [ ] Implement brochure file upload handler
- [ ] Show uploaded brochure preview/link
- [ ] Add brochure URL to form data

### Phase 4: API Routes
- [ ] Create `src/routes/api/upload-brochure.ts`
- [ ] Handle PDF file validation
- [ ] Upload to Supabase Storage
- [ ] Return public URL for storage

### Phase 5: Website Display
- [ ] Update course detail pages to show brochure download link
- [ ] Add brochure button in course card components
- [ ] Show brochure availability status

---

## Files That Need Changes

### New Files to Create:
1. `migrations/016_add_brochure_to_courses.sql`
2. `src/routes/api/upload-brochure.ts`

### Files to Modify:
1. `src/routes/admin.courses.tsx` - Add brochure upload UI
2. `src/routes/courses.$slug.tsx` - Add download button
3. Database migration script

---

## Data Structure

### Courses Table - New Column:
```sql
ALTER TABLE courses ADD COLUMN IF NOT EXISTS brochure_url TEXT;
ALTER TABLE courses ADD COLUMN IF NOT EXISTS brochure_filename VARCHAR(255);
```

### Testimonials JSON Structure:
```json
{
  "title": "Course Title",
  "slug": "course-slug",
  "brochure_url": "https://lwpagbsineaqkblihger.supabase.co/storage/v1/object/public/course-brochures/...",
  "brochure_filename": "original-filename.pdf"
}
```

---

## Next Steps

Would you like me to implement this functionality? I can:
1. Create the database migration
2. Add brochure upload to admin panel
3. Create the API handler
4. Update the website to display brochures

Let me know which phase you'd like me to start with!
