# DMHCA Event Images - Complete URLs and Download Instructions
# Extracted from old DMHCA website: https://dmhca.in/simple-event/

## EVENT HERO IMAGES (EXACT URLS FROM OLD WEBSITE)

1. **Ultrasound Workshop** (23/01/2026)
   - Hero: https://dmhca.in/wp-content/uploads/2026/01/vasa-academy-150x150.jpg
   - Slug: join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program
   - Output: vasa-academy.webp

2. **HIV Awareness Webinar 2025** (01/12/2025)
   - Hero: https://dmhca.in/wp-content/uploads/2025/11/Consultant-Scientist-Dept.-of-Obstetric-Gynae-VMMC-Safdarjung-Hospital-3.jpg
   - Slug: webinar-what-to-expect-at-the-hiv-awareness-webinar-2025
   - Output: sandeep_gupta.webp
   - Speakers:
     * Dr. Abhishek S. Lachyan: https://dmhca.in/wp-content/uploads/2025/11/Dr.Abhishek-Lachyan-Photo-1-e1764422804239-150x150.jpeg
     * Dr. Azra Khan: https://dmhca.in/wp-content/uploads/2025/11/1000354594-150x150.jpg
     * Dr. Abbas Kazim: https://dmhca.in/wp-content/uploads/2025/11/1000172722-150x150.jpg

3. **Cervical Cancer Webinar** (14/11/2024)
   - Hero: https://dmhca.in/wp-content/uploads/2024/11/Lead-post-1080-x-1080-px.png
   - Slug: webinar-cervical-cancer-awareness-diagnosis-and-treatment
   - Output: Renuka-gupta.webp
   - Speaker: Dr. Renuka Gupta

4. **Cardiology Conclave** (06/04/2024)
   - Hero: https://dmhca.in/wp-content/uploads/2022/07/WhatsApp-Image-2024-09-16-at-5.09.05-PM.jpeg
   - Slug: using-laptop-and-pc-working-at-home
   - Output: Pramod-kumar-Dhar.webp
   - Speakers: Dr. A. Sai Ravi Shanker, Dr. Shruthi

5. **High-Risk Pregnancies** (12/05/2024)
   - Hero: https://dmhca.in/wp-content/uploads/2022/07/high-risk-pragnancy1.jpg
   - Slug: business-people-working-together-conference
   - Output: Dr_Azra-khan.webp

6. **Trauma and Fracture Management** (26/05/2024)
   - Hero: https://dmhca.in/wp-content/uploads/2022/07/tibia-fibula-fractures-hero.jpg
   - Slug: young-tutor-home-teaching-online-courses
   - Output: Dr_Abbas-kazim.webp

7. **Musculoskeletal Ultrasound** (08/06/2024)
   - Hero: https://dmhca.in/wp-content/uploads/2022/07/Ultrasound-of-kids-knee-joint.jpg
   - Slug: startup-business-team-meeting-modern
   - Output: Dr.Abhishek-Lachyan.webp

## HOW TO DOWNLOAD AND CONVERT

### Option 1: Using PowerShell Script (Recommended)
Run the download-event-images.ps1 script from the scripts folder:
```powershell
cd C:\Users\john\OneDrive\Desktop\DMHCA1\scripts
.\download-event-images.ps1
```

### Option 2: Manual Download (One by One)
For each image URL above:
1. Visit the URL in browser
2. Right-click and "Save image as..."
3. Save to: `C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\`
4. Convert to WebP (see conversion steps below)

### Option 3: Using cURL (Windows 10+)
```powershell
# Example for first image:
curl -o "C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\vasa-academy.jpg" "https://dmhca.in/wp-content/uploads/2026/01/vasa-academy-150x150.jpg"
```

## IMAGE CONVERSION TO WEBP

### Prerequisites
Install one of these tools:
- **ImageMagick**: https://imagemagick.org/script/download.php#windows
- **ffmpeg**: https://ffmpeg.org/download.html

### Conversion Commands

#### Using ImageMagick:
```powershell
magick input.jpg -quality 80 output.webp
```

#### Using ffmpeg:
```powershell
ffmpeg -i input.jpg -c:v libwebp -quality 80 output.webp
```

#### Batch Conversion (PowerShell):
```powershell
Get-ChildItem "C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\*.jpg" | ForEach-Object {
    $output = $_.FullName -replace '\.jpg$', '.webp'
    & magick $_.FullName -quality 80 $output
}
```

#### Online Conversion:
- Visit: https://convertio.co/jpg-webp/
- Upload JPG/PNG
- Download WebP
- Save to public/events&webinars/

## VERIFICATION CHECKLIST

After downloading and converting all images:

1. **Check file locations:**
   - [ ] C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\vasa-academy.webp
   - [ ] C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\sandeep_gupta.webp
   - [ ] C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\Renuka-gupta.webp
   - [ ] C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\Pramod-kumar-Dhar.webp
   - [ ] C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\Dr_Azra-khan.webp
   - [ ] C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\Dr_Abbas-kazim.webp
   - [ ] C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars\Dr.Abhishek-Lachyan.webp

2. **Verify image mapping in code:**
   - File: src/routes/simple-event.$slug.tsx
   - Confirm slugMap entries match filenames exactly (case-sensitive!)

3. **Test in development:**
   ```bash
   npm run dev
   ```
   - Navigate to http://localhost:8087/simple-event
   - Click each event card
   - Verify hero image displays correctly
   - Compare with original site images

4. **Visual comparison:**
   - Compare new site images side-by-side with old DMHCA website
   - Ensure images display in same position and size
   - Check that image quality is acceptable

## NOTES

- Images use exact URLs from old DMHCA website as extracted (08/06/2024)
- Hero images are background images from CSS, not regular img tags (more authentic!)
- File names in slugMap must match downloaded WebP filenames exactly
- Image quality set to 80% for optimal file size vs quality balance
- All conversions preserve original image quality
