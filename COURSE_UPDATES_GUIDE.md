# Real-Time Course Updates Implementation Guide

## Overview
This document outlines the implementation of real-time course updates across the website when changes are made in the admin panel.

## Architecture

### 1. **Dynamic Courses Hook** (`src/hooks/useCoursesData.ts`)
- Fetches courses from Supabase with intelligent caching (5-minute TTL)
- Provides fallback to static data if Supabase is unavailable
- Methods:
  - `useCoursesData()`: React hook for components
  - `invalidateCoursesCache()`: Clears cache after admin updates
  - `getCachedCourses()`: Get cached data synchronously

### 2. **Admin Panel Updates** (`src/routes/admin.courses.tsx`)
- When courses are updated/added/deleted/image uploaded:
  - Changes saved to Supabase `courses` table
  - `invalidateCoursesCache()` is called immediately after
  - Cache invalidation triggers fresh data fetch on next page view

### 3. **Website Pages Updated**
- **Homepage** (`src/routes/index.tsx`): Uses `useCoursesData()` for featured courses
- **Course Detail** (`src/routes/courses.$slug.tsx`): Already has Supabase fallback in loader
- **Other listing pages**: Can be updated incrementally

## Data Flow

```
Admin Panel Update
       ↓
Supabase Database Updated (courses table)
       ↓
invalidateCoursesCache() called
       ↓
Cache cleared
       ↓
User visits website page
       ↓
useCoursesData() fetches fresh data from Supabase
       ↓
Website displays updated course information
```

## Fields Synced from Admin to Website

When admin updates a course, these fields are saved to Supabase:
- `testimonials`: Contains full course data (JSON)
  - title, slug, program, category, priceINR, months, level, lessons
  - rating, reviewCount, overview, heroDescription
  - learn[], requirements[], modules[], moduleDetails[]
  - faqs[], trainers[], reviews[], meta{}
- `image_url`: Course image URL
- `slug`, `title`, `category`: Direct fields
- `price`, `duration_weeks`, `categories`: Mapped fields

## Cache Strategy

- **TTL**: 5 minutes (300,000 ms)
- **Invalidation**: Immediate after admin updates
- **Fallback**: Static data in `src/data/courses.tsx`
- **Error Handling**: Uses cached data if Supabase unavailable

## Performance Optimization

- **Memoization**: Featured courses computed with `useMemo`
- **Lazy Loading**: Courses fetch on component mount
- **Smart Updates**: Only re-render when course data changes
- **Batch Operations**: All related pages use same cache

## Testing Updates

1. **Admin Panel**:
   - Update a course (e.g., change price, title, image)
   - Should show success message and cache invalidation

2. **Website**:
   - Visit homepage (featured courses updated)
   - Visit course details page (shows latest data)
   - All course listings show updated information

3. **Cache Validation**:
   - Changes visible within 5 minutes even without refresh
   - Manual cache clear available in admin Refresh Data button

## Future Enhancements

- Real-time WebSocket updates for instant sync
- Batch export/import for multiple courses
- Scheduled sync jobs from external sources
- Course version history and rollback
