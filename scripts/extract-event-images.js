// Extract hero images from old DMHCA website
// Run with: node extract-event-images.js

import fetch from 'node-fetch';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eventSlugs = [
  'join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program',
  'webinar-what-to-expect-at-the-hiv-awareness-webinar-2025',
  'webinar-cervical-cancer-awareness-diagnosis-and-treatment',
  'using-laptop-and-pc-working-at-home',
  'business-people-working-together-conference',
  'young-tutor-home-teaching-online-courses',
  'startup-business-team-meeting-modern',
];

const eventImageMapping = {
  'join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program': {
    name: 'Ultrasound Workshop',
    outputName: 'vasa-academy.webp',
    possibleUrls: [
      'https://dmhca.in/wp-content/uploads/2025/01/vasa-academy-ultrasound.jpg',
      'https://dmhca.in/wp-content/uploads/2025/01/ultrasound-workshop-hero.jpg',
      'https://dmhca.in/wp-content/uploads/2025/01/3-day-master-workshop.jpg',
    ]
  },
  'webinar-what-to-expect-at-the-hiv-awareness-webinar-2025': {
    name: 'HIV Awareness Webinar 2025',
    outputName: 'sandeep_gupta.webp',
    possibleUrls: [
      'https://dmhca.in/wp-content/uploads/2025/11/hiv-awareness-webinar-2025.jpg',
      'https://dmhca.in/wp-content/uploads/2025/11/Dr.Abhishek-Lachyan-Photo-1-e1764422804239.jpeg',
    ]
  },
  'webinar-cervical-cancer-awareness-diagnosis-and-treatment': {
    name: 'Cervical Cancer Webinar',
    outputName: 'Renuka-gupta.webp',
    possibleUrls: [
      'https://dmhca.in/wp-content/uploads/2024/11/cervical-cancer-awareness.jpg',
      'https://dmhca.in/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-02-at-10.11.29-AM.jpg',
      'https://dmhca.in/wp-content/uploads/2024/11/renuka-gupta-cervical.jpg',
    ]
  },
  'using-laptop-and-pc-working-at-home': {
    name: 'Cardiology Conclave',
    outputName: 'Pramod-kumar-Dhar.webp',
    possibleUrls: [
      'https://dmhca.in/wp-content/uploads/2024/04/cardiology-conclave-2024.jpg',
      'https://dmhca.in/wp-content/uploads/2024/04/cardiology-conclave.jpg',
    ]
  },
  'business-people-working-together-conference': {
    name: 'High-Risk Pregnancies Conference',
    outputName: 'Dr_Azra-khan.webp',
    possibleUrls: [
      'https://dmhca.in/wp-content/uploads/2024/05/high-risk-pregnancies.jpg',
      'https://dmhca.in/wp-content/uploads/2024/05/high-risk-pregnancy-conference.jpg',
    ]
  },
  'young-tutor-home-teaching-online-courses': {
    name: 'Trauma & Fracture Management',
    outputName: 'Dr_Abbas-kazim.webp',
    possibleUrls: [
      'https://dmhca.in/wp-content/uploads/2024/05/trauma-fracture-management.jpg',
      'https://dmhca.in/wp-content/uploads/2024/05/trauma-fracture.jpg',
    ]
  },
  'startup-business-team-meeting-modern': {
    name: 'MSK Ultrasound',
    outputName: 'Dr.Abhishek-Lachyan.webp',
    possibleUrls: [
      'https://dmhca.in/wp-content/uploads/2024/06/msk-ultrasound.jpg',
      'https://dmhca.in/wp-content/uploads/2024/06/musculoskeletal-ultrasound.jpg',
    ]
  }
};

async function downloadImage(url, outputPath) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const buffer = await response.buffer();
    fs.writeFileSync(outputPath, buffer);
    return true;
  } catch (error) {
    console.error(`Failed to download from ${url}: ${error.message}`);
    return false;
  }
}

async function extractImages() {
  console.log('========================================');
  console.log('DMHCA Event Images Extraction Script');
  console.log('========================================\n');

  const outputDir = path.join(__dirname, '..', 'public', 'events&webinars');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Output directory: ${outputDir}\n`);

  for (const slug of eventSlugs) {
    const eventConfig = eventImageMapping[slug];
    if (!eventConfig) continue;

    console.log(`Processing: ${eventConfig.name}`);
    let downloaded = false;

    for (const url of eventConfig.possibleUrls) {
      console.log(`  Trying: ${url}`);
      const tempPath = path.join(__dirname, 'temp-image.tmp');
      
      if (await downloadImage(url, tempPath)) {
        const outputPath = path.join(outputDir, eventConfig.outputName.replace('.webp', '.jpg'));
        fs.renameSync(tempPath, outputPath);
        console.log(`  ✓ Downloaded and saved as: ${eventConfig.outputName.replace('.webp', '.jpg')}`);
        downloaded = true;
        break;
      }
    }

    if (!downloaded) {
      console.log(`  ✗ Could not download any image for this event`);
      console.log(`  Please manually download hero image and save as: ${eventConfig.outputName}`);
    }
    console.log('');
  }

  console.log('========================================');
  console.log('Next steps:');
  console.log('1. Verify all images are in: public/events&webinars/');
  console.log('2. Run: npm run dev');
  console.log('3. Check /simple-event to verify images display correctly');
  console.log('========================================');
}

extractImages().catch(console.error);
