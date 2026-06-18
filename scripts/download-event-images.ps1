# Download event images from old DMHCA website and convert to WebP
# This script downloads images from dmhca.in/simple-event pages and converts them to WebP format

# Define the output directory
$outputDir = "C:\Users\john\OneDrive\Desktop\DMHCA1\public\events&webinars"
$tempDir = "C:\Users\john\OneDrive\Desktop\DMHCA1\scripts\temp-images"

# Create directories if they don't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

if (-not (Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DMHCA Event Images Download & Convert Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Event image mapping - EXACT URLs extracted from old DMHCA website
$events = @(
    @{
        "name" = "Ultrasound Workshop"
        "slug" = "join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program"
        "imageUrl" = "https://dmhca.in/wp-content/uploads/2026/01/vasa-academy-150x150.jpg"
        "outputName" = "vasa-academy.webp"
    },
    @{
        "name" = "HIV Awareness Webinar 2025"
        "slug" = "webinar-what-to-expect-at-the-hiv-awareness-webinar-2025"
        "imageUrl" = "https://dmhca.in/wp-content/uploads/2025/11/Consultant-Scientist-Dept.-of-Obstetric-Gynae-VMMC-Safdarjung-Hospital-3.jpg"
        "outputName" = "sandeep_gupta.webp"
    },
    @{
        "name" = "Cervical Cancer Webinar"
        "slug" = "webinar-cervical-cancer-awareness-diagnosis-and-treatment"
        "imageUrl" = "https://dmhca.in/wp-content/uploads/2024/11/Lead-post-1080-x-1080-px.png"
        "outputName" = "Renuka-gupta.webp"
    },
    @{
        "name" = "Cardiology Conclave"
        "slug" = "using-laptop-and-pc-working-at-home"
        "imageUrl" = "https://dmhca.in/wp-content/uploads/2022/07/WhatsApp-Image-2024-09-16-at-5.09.05-PM.jpeg"
        "outputName" = "Pramod-kumar-Dhar.webp"
    },
    @{
        "name" = "High-Risk Pregnancies"
        "slug" = "business-people-working-together-conference"
        "imageUrl" = "https://dmhca.in/wp-content/uploads/2022/07/high-risk-pragnancy1.jpg"
        "outputName" = "Dr_Azra-khan.webp"
    },
    @{
        "name" = "Trauma and Fracture Management"
        "slug" = "young-tutor-home-teaching-online-courses"
        "imageUrl" = "https://dmhca.in/wp-content/uploads/2022/07/tibia-fibula-fractures-hero.jpg"
        "outputName" = "Dr_Abbas-kazim.webp"
    },
    @{
        "name" = "Musculoskeletal Ultrasound"
        "slug" = "startup-business-team-meeting-modern"
        "imageUrl" = "https://dmhca.in/wp-content/uploads/2022/07/Ultrasound-of-kids-knee-joint.jpg"
        "outputName" = "Dr.Abhishek-Lachyan.webp"
    }
)

# Check if ImageMagick or ffmpeg is installed for WebP conversion
$hasImageMagick = $null -ne (Get-Command magick -ErrorAction SilentlyContinue)
$hasFfmpeg = $null -ne (Get-Command ffmpeg -ErrorAction SilentlyContinue)

if (-not $hasImageMagick -and -not $hasFfmpeg) {
    Write-Host "WARNING: Neither ImageMagick nor ffmpeg found!" -ForegroundColor Yellow
    Write-Host "Install ImageMagick or ffmpeg to convert images to WebP format." -ForegroundColor Yellow
    Write-Host "Download ImageMagick: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    Write-Host "Or ffmpeg: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host ""
}

# Download and convert images
$successCount = 0
$failCount = 0

foreach ($event in $events) {
    Write-Host "Processing: $($event.name)" -ForegroundColor Green
    
    $tempFile = Join-Path $tempDir "$([System.IO.Path]::GetFileNameWithoutExtension($event.imageUrl)).jpg"
    $outputFile = Join-Path $outputDir $event.outputName
    
    try {
        # Download image
        Write-Host "  Downloading from: $($event.imageUrl)" -ForegroundColor Gray
        Invoke-WebRequest -Uri $event.imageUrl -OutFile $tempFile -ErrorAction Stop
        
        if (Test-Path $tempFile) {
            Write-Host "  Downloaded: $($tempFile)" -ForegroundColor Gray
            
            # Convert to WebP
            if ($hasImageMagick) {
                Write-Host "  Converting to WebP with ImageMagick..." -ForegroundColor Gray
                & magick "$tempFile" -quality 80 "$outputFile"
            } elseif ($hasFfmpeg) {
                Write-Host "  Converting to WebP with ffmpeg..." -ForegroundColor Gray
                & ffmpeg -i "$tempFile" -c:v libwebp -quality 80 "$outputFile" -y | Out-Null 2>&1
            } else {
                Write-Host "  Copying as-is (no converter available)..." -ForegroundColor Yellow
                Copy-Item $tempFile $outputFile -Force
            }
            
            if (Test-Path $outputFile) {
                $fileSizeMB = (Get-Item $outputFile).Length / 1MB
                Write-Host "  ✓ Saved to: $($event.outputName) ($($fileSizeMB.ToString("F2")) MB)" -ForegroundColor Green
                $successCount++
            }
            
            # Cleanup temp file
            Remove-Item $tempFile -Force -ErrorAction SilentlyContinue
        }
    } catch {
        Write-Host "  ✗ Error: $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
    
    Write-Host ""
}

# Cleanup temp directory
if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Successful: $successCount" -ForegroundColor Green
Write-Host "  Failed: $failCount" -ForegroundColor Red
Write-Host "  Output Directory: $outputDir" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
