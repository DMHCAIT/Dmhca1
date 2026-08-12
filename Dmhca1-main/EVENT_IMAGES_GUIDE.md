# Event Images Download Guide

## Overview
The event pages have been created with placeholder images. You need to download the actual event images from your old website (dmhca.in) and place them in the `public/events&webinars/` directory.

## Event Images to Download

### 1. Ultrasound Workshop
- **Source URL**: https://dmhca.in/simple-event/join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program/
- **Target File**: `public/events&webinars/ultrasound-workshop.webp`
- **Size**: Recommended 1920x1080 (16:9 aspect ratio)

### 2. HIV Awareness Webinar
- **Source URL**: https://dmhca.in/simple-event/webinar-what-to-expect-at-the-hiv-awareness-webinar-2025/
- **Target File**: `public/events&webinars/hiv-awareness.webp`
- **Size**: Recommended 1920x1080 (16:9 aspect ratio)

### 3. Cervical Cancer Webinar
- **Source URL**: https://dmhca.in/simple-event/webinar-cervical-cancer-awareness-diagnosis-and-treatment/
- **Target File**: `public/events&webinars/cervical-cancer.webp`
- **Size**: Recommended 1920x1080 (16:9 aspect ratio)

### 4. Cardiology Conclave
- **Source URL**: https://dmhca.in/simple-event/using-laptop-and-pc-working-at-home/
- **Target File**: `public/events&webinars/cardiology-conclave.webp`
- **Size**: Recommended 1920x1080 (16:9 aspect ratio)

### 5. High-Risk Pregnancies Webinar
- **Source URL**: https://dmhca.in/simple-event/business-people-working-together-conference/
- **Target File**: `public/events&webinars/high-risk-pregnancies.webp`
- **Size**: Recommended 1920x1080 (16:9 aspect ratio)

### 6. Trauma and Fracture Management
- **Source URL**: https://dmhca.in/simple-event/young-tutor-home-teaching-online-courses/
- **Target File**: `public/events&webinars/trauma-fracture.webp`
- **Size**: Recommended 1920x1080 (16:9 aspect ratio)

### 7. Musculoskeletal Ultrasound
- **Source URL**: https://dmhca.in/simple-event/startup-business-team-meeting-modern/
- **Target File**: `public/events&webinars/msk-ultrasound.webp`
- **Size**: Recommended 1920x1080 (16:9 aspect ratio)

## Steps to Download and Add Images

### Option 1: Manual Download (Recommended)
1. Visit each event URL from the list above
2. Right-click on the featured image and select "Save image as..."
3. Convert to WebP format if needed (using online converters or tools)
4. Save to the corresponding filename in `public/events&webinars/`

### Option 2: Using Browser DevTools
1. Visit each event page
2. Open DevTools (F12)
3. Go to the Network tab
4. Look for image files (.jpg, .png, .webp)
5. Download and save as the WebP filename in `public/events&webinars/`

### Option 3: Using Online Image Download Tools
- Visit https://www.online-convert.com/
- Upload images and convert to WebP format
- Download and save to `public/events&webinars/`

## Speaker Images (Optional)

If you want to add speaker profile images, download them from the old website and save them to `public/events&webinars/`:

- `dr-abhishek.webp` - HIV Awareness speaker
- `dr-azra-khan.webp` - HIV Awareness speaker
- `dr-abbas-kazim.webp` - HIV Awareness speaker
- `dr-renuka-gupta.webp` - Cervical Cancer speaker

Update the `src/data/events.ts` file with the correct image paths once downloaded.

## Image Specifications

- **Format**: WebP (for optimal performance)
- **Dimensions**: 1920x1080px or larger
- **Quality**: 80-90% WebP quality
- **File Size**: Ideally under 200KB per image

## Verifying Images Are Loading

1. Start the dev server: `npm run dev`
2. Navigate to: http://localhost:8080/simple-event
3. Check if images are displaying correctly
4. Click on individual events to verify detail page images

## Troubleshooting

### Images Not Showing
- Check file paths match exactly (case-sensitive on Linux/Mac)
- Verify WebP format is supported by your browser
- Try adding fallback `onError` handlers to use placeholder images

### WebP Format Issues
- Use an online converter if needed: https://ezgif.com/
- Or install ImageMagick: `magick convert image.jpg image.webp`

## Content Migration Notes

All event content has been recreated in `src/data/events.ts` with:
- Event titles and slugs matching the old website URLs
- Event descriptions and details
- Speaker information
- Pricing (where applicable)
- Event content and learning objectives

If you need to update event details later, edit the events array in `src/data/events.ts`.
