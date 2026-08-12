/**
 * Image fallback utility for course images
 * Provides placeholder/fallback images for courses with missing or blocked images
 */

export const imageCache: Record<string, string> = {
  // Cardiology
  "fellowship-in-echocardiography": "https://images.unsplash.com/photo-1579154204601-01d82b06ae4d?w=500&h=300&fit=crop",
  "certificate-in-hypertension": "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",
  "fellowship-in-interventional-cardiology": "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",
  "fellowship-in-clinical-cardiology": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
  "fellowship-in-cardiothoracic-surgery": "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",
  "fellowship-in-cardio-oncology": "https://images.unsplash.com/photo-1579154204601-01d82b06ae4d?w=500&h=300&fit=crop",
  "pg-diploma-in-cardiology": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
  "certificate-in-advanced-cardiac-care": "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",

  // Radiology
  "fellowship-in-abdominal-imaging": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
  "fellowship-in-breast-imaging": "https://images.unsplash.com/photo-1579154204601-01d82b06ae4d?w=500&h=300&fit=crop",
  "fellowship-in-womens-imaging": "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",

  // General defaults by category
  cardiology: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
  radiology: "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",
  dermatology: "https://images.unsplash.com/photo-1579154204601-01d82b06ae4d?w=500&h=300&fit=crop",
  obstetrics: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
  pediatrics: "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",
  neurology: "https://images.unsplash.com/photo-1579154204601-01d82b06ae4d?w=500&h=300&fit=crop",
  oncology: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
  pulmonary: "https://images.unsplash.com/photo-1631217b5fbb46ead842fc20db5e7aab?w=500&h=300&fit=crop",
};

/**
 * Get a fallback image URL for a course
 * Tries slug first, then category, then returns default medical image
 */
export function getImageFallback(slug: string, category?: string): string {
  // Try exact slug match
  if (imageCache[slug]) {
    return imageCache[slug];
  }

  // Try category match
  if (category && imageCache[category]) {
    return imageCache[category];
  }

  // Default medical image
  return "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop";
}

/**
 * Create a data URL SVG placeholder with text
 */
export function createSVGPlaceholder(text: string, bgColor: string = "#667eea"): string {
  const svg = `
    <svg width="410" height="290" xmlns="http://www.w3.org/2000/svg">
      <rect width="410" height="290" fill="${bgColor}"/>
      <text x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-weight="bold">
        ${text}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
