# IMAGE EXTRACTION GUIDE - DMHCA Event Pages

## How to Extract Exact Hero Images from Old DMHCA Website

The script `download-event-images.ps1` attempts to download images automatically. However, if you want to manually extract and verify the exact images used on the old website, follow these steps:

## Manual Image Extraction Process

### Step 1: Open Each Old Event Page
Visit each event page on the old DMHCA website:
1. https://dmhca.in/simple-event/join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program/
2. https://dmhca.in/simple-event/webinar-what-to-expect-at-the-hiv-awareness-webinar-2025/
3. https://dmhca.in/simple-event/webinar-cervical-cancer-awareness-diagnosis-and-treatment/
4. https://dmhca.in/simple-event/using-laptop-and-pc-working-at-home/
5. https://dmhca.in/simple-event/business-people-working-together-conference/
6. https://dmhca.in/simple-event/young-tutor-home-teaching-online-courses/
7. https://dmhca.in/simple-event/startup-business-team-meeting-modern/

### Step 2: Extract Hero/Featured Image
For each page:
- Right-click on the **main event image/hero image** at the top of the page
- Select "Copy image link" or "Copy image address"
- Note the full image URL

### Step 3: Common Image URL Patterns
Images on old DMHCA site are typically located at:
- `https://dmhca.in/wp-content/uploads/YYYY/MM/filename.jpg`
- `https://dmhca.in/wp-content/uploads/YYYY/MM/filename.jpeg`
- `https://dmhca.in/wp-content/uploads/YYYY/MM/filename.png`

### Step 4: Extract via Browser Inspector (Advanced)
If images are background-images in CSS:
1. Open page in browser
2. Press F12 (Developer Tools)
3. Use Inspector tool (arrow icon) to select the hero image element
4. In Styles tab, look for `background-image: url(...)`
5. Extract the image URL from there

### Step 5: Speaker Photos
If you need speaker photos displayed on event pages:
- Right-click on each speaker photo
- Copy the image URL
- Note the speaker name for the filename

## What to Download

### Essential Downloads (7 Main Hero Images)
1. **Ultrasound Workshop** → Save as: `vasa-academy.webp`
2. **HIV Awareness Webinar** → Save as: `sandeep_gupta.webp`
3. **Cervical Cancer** → Save as: `Renuka-gupta.webp`
4. **Cardiology Conclave** → Save as: `Pramod-kumar-Dhar.webp`
5. **High-Risk Pregnancies** → Save as: `Dr_Azra-khan.webp`
6. **Trauma & Fracture** → Save as: `Dr_Abbas-kazim.webp`
7. **MSK Ultrasound** → Save as: `Dr.Abhishek-Lachyan.webp`

## Image Conversion to WebP

### Option 1: Using ImageMagick (Recommended)
```powershell
# Install ImageMagick from: https://imagemagick.org/script/download.php#windows
magick input.jpg -quality 80 output.webp
```

### Option 2: Using ffmpeg
```powershell
# Install ffmpeg from: https://ffmpeg.org/download.html
ffmpeg -i input.jpg -c:v libwebp -quality 80 output.webp
```

### Option 3: Using Online Converter
- Visit: https://convertio.co/jpg-webp/ or similar
- Upload JPG/PNG
- Download as WebP
- Rename appropriately

## Final Steps

1. Place all converted WebP images in: `public/events&webinars/`
2. Verify filenames match the mapping in `src/routes/simple-event.$slug.tsx`:
   ```typescript
   const slugMap: Record<string, string> = {
     'join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program': 'vasa-academy.webp',
     'webinar-what-to-expect-at-the-hiv-awareness-webinar-2025': 'sandeep_gupta.webp',
     // ... etc
   };
   ```
3. Run dev server: `npm run dev`
4. Navigate to `/simple-event` and verify all hero images display correctly
5. Click each event to verify images appear exactly as on old site

## Troubleshooting

- **Image not downloading**: Check if URL is still valid by visiting it in browser
- **WebP conversion fails**: Install ImageMagick or ffmpeg, or use online converter
- **Images appear distorted**: May need to adjust CSS (object-fit, aspect-ratio) in `simple-event.$slug.tsx`
- **Image not showing on page**: Verify filename matches exactly in slugMap (case-sensitive)
