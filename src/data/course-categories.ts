export type Category = { slug: string; name: string; tagline: string };

export const categories: Category[] = [
  { slug: "cardiology", name: "Cardiology", tagline: "Heart and cardiovascular medicine" },
  { slug: "radiology", name: "Radiology", tagline: "Diagnostic and interventional imaging" },
  { slug: "medicine", name: "Medicine", tagline: "Internal and family medicine" },
  { slug: "obs-gynae", name: "Obs & Gynae", tagline: "Obstetrics and gynaecology" },
  { slug: "emergency", name: "Emergency", tagline: "Emergency and critical care medicine" },
  { slug: "orthopedics", name: "Orthopedics", tagline: "Musculoskeletal and pain medicine" },
  { slug: "dermatology", name: "Dermatology", tagline: "Skin, cosmetic and aesthetic medicine" },
  {
    slug: "general-surgery",
    name: "General Surgery",
    tagline: "Surgical specialties and endoscopy",
  },
  { slug: "oncology", name: "Oncology", tagline: "Cancer care across specialties" },
  { slug: "endocrinology", name: "Endocrinology", tagline: "Diabetes, hormones, and metabolism" },
  { slug: "neurology", name: "Neurology", tagline: "Neurological and neurosurgical disorders" },
  { slug: "pediatrics", name: "Pediatrics", tagline: "Child health and pediatric specialties" },
  { slug: "reproductive", name: "Reproductive", tagline: "Infertility and reproductive medicine" },
  { slug: "pulmonary", name: "Pulmonary", tagline: "Respiratory and chest diseases" },
  { slug: "nutrition", name: "Nutrition", tagline: "Nutrition, dietetics, and wellness" },
  { slug: "dental", name: "Dental", tagline: "Dentistry and oral surgery" },
  { slug: "gastroenterology", name: "Gastroenterology", tagline: "GI tract and hepatology" },
  { slug: "urology", name: "Urology", tagline: "Urological and renal disorders" },
  { slug: "management", name: "Management", tagline: "Healthcare management and administration" },
];
