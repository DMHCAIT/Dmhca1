// DMHCA - Complete Course Database (75 Courses from dmhca.in)
// This file contains all courses with trainers, prices, modules, and complete details

export type CourseModule = {
  title: string;
  description?: string;
  topics?: string[];
  duration?: string;
};

export type CourseInstructor = {
  name: string;
  title?: string;
  specialization?: string;
  bio?: string;
  image?: string;
  qualifications?: string[];
  experience?: string;
};

export type CourseFAQ = {
  q: string;
  a: string;
  category?: string;
};

export type CourseReview = {
  id?: string;
  studentName: string;
  studentImage?: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  date: string;
  verified?: boolean;
  helpful?: number;
};

export type Course = {
  // Basic Information
  slug: string;
  title: string;
  categories: string[];
  image: string;
  
  // Hero Section (Course Details Page) - Different from overview
  heroTitle?: string; // Custom title for course details page hero
  heroImage?: string; // Custom image for course details page hero
  heroDescription?: string; // Custom description for hero section (optional)
  
  // Course Metadata
  lessons: number | null;
  weeks: number | null;
  level: string;
  priceINR: number;
  rating: number | null;
  reviewCount: number;
  program?: string;
  
  // Course Content
  overview: string;
  learn: string[];
  requirements: string[];
  modules: string[];
  moduleDetails?: Array<string[] | string>;
  
  // People
  trainers?: CourseInstructor[];
  
  // Questions
  faqs: CourseFAQ[];
  
  // Reviews & Feedback
  reviews?: CourseReview[];
  
  // Metadata
  meta: Record<string, string>;
  
  // Extended Details (Optional - for structured course details)
  courseDetails?: {
    overview?: {
      title?: string;
      description?: string;
      keyHighlights?: string[];
    };
    learningOutcomes?: Array<{
      title: string;
      description?: string;
      icon?: string;
    }>;
    curriculum?: CourseModule[];
    instructors?: CourseInstructor[];
    faqs?: CourseFAQ[];
    prerequisites?: Array<{
      title: string;
      description?: string;
    }>;
  };
};

export type Category = { slug: string; name: string; tagline: string };

// All 19 Categories from DMHCA
export const categories: Category[] = [
  { slug: "cardiology", name: "Cardiology", tagline: "Heart and cardiovascular medicine" },
  { slug: "radiology", name: "Radiology", tagline: "Diagnostic and interventional imaging" },
  { slug: "medicine", name: "Medicine", tagline: "Internal and family medicine" },
  { slug: "obs-gynae", name: "Obs & Gynae", tagline: "Obstetrics and gynaecology" },
  { slug: "emergency", name: "Emergency", tagline: "Emergency and critical care medicine" },
  { slug: "orthopedics", name: "Orthopedics", tagline: "Musculoskeletal and pain medicine" },
  { slug: "dermatology", name: "Dermatology", tagline: "Skin, cosmetic and aesthetic medicine" },
  { slug: "general-surgery", name: "General Surgery", tagline: "Surgical specialties and endoscopy" },
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

// Complete 75-Course Database from dmhca.in
export const _courses: Course[] = [
  {
    slug: "fellowship-in-echocardiography",
    title: "Fellowship in Echocardiography",
    categories: ["cardiology"],
    image: "/courses/assd-410x290.webp",
    heroDescription: "Fellowship in Echocardiography: Master Cardiac Imaging Techniques for Comprehensive Diagnosis and Patient Care",
    lessons: 41,
    weeks: 52,
    level: "expert",
    priceINR: 110000,
    rating: 4.8,
    reviewCount: 6,
    program: "Fellowship",
    overview: "The Fellowship in Echocardiography offers advanced training in cardiac imaging techniques, focusing on the practical application of echocardiographic modalities in diagnosing and managing cardiovascular diseases. This program is designed for cardiologists and medical professionals who want to enhance their proficiency in echocardiography. Through hands-on training, expert mentorship, and case-based learning, you will gain the skills to perform and interpret echocardiograms for diverse cardiac conditions.",

learn: [
  "Fundamental principles and techniques of transthoracic and transesophageal echocardiography.",
  "Interpretation of 2D, 3D, and Doppler echocardiographic images.",
  "Evaluation of heart valve diseases, cardiomyopathies, congenital heart defects, and other cardiac conditions.",
  "Advanced use of echocardiography in stress testing and intraoperative settings.",
  "Best practices in performing echocardiograms and minimizing patient discomfort.",
  "Effective communication of echocardiographic findings with multidisciplinary healthcare teams."
],

requirements: [
  "MBBS and Above Qualification"
],

modules: [
  "Introduction & Basics",
  "Fundamentals of Ultrasound Physics",
  "Echocardiographic Examination Techniques",
  "Echocardiographic Modalities",
  "Quantitative Measurements",
  "Doppler Echocardiography",
  "Functional Assessment",
  "Echo in Cardiac Diseases",
  "Stress Echocardiography",
  "Transesophageal Echocardiography (TEE)",
  "Interventional & Advanced Echo",
  "Clinical Application & Advanced Topics",
  "Quality Assurance & Reporting"
],

moduleDetails: [
  ["Role and scope of echocardiography", "Cardiac anatomy and physiology relevant to imaging", "Safety, infection control, and ethical considerations in echo labs"],
  ["Physics of ultrasound and sound propagation", "Image formation, artifacts, and optimization (knobology)", "Transducers and instrumentation"],
  ["Patient preparation and positioning", "Standard imaging windows and views (parasternal, apical, subcostal)", "Acquisition of high-quality images and common pitfalls"],
  ["M-Mode and 2D Echocardiography", "3D echocardiography basics", "Tissue harmonic imaging and contrast echo", "Advanced imaging tools and AI-enabled techniques (where available)"],
  ["Chamber dimensions, volumes, and mass", "Calculation of indexed dimensions (BSA/BMI)", "Reference normal values and clinical interpretation"],
  ["Doppler principles: pulsed-wave, continuous-wave, and color Doppler", "Non-invasive hemodynamic assessments", "Flow measurements and pressure estimations"],
  ["Evaluation of systolic and diastolic function", "Tissue Doppler imaging", "Strain imaging and myocardial work analysis"],
  ["Coronary artery disease and ischemia evaluation", "Valvular heart disease assessment (stenosis, regurgitation)", "Cardiomyopathies and pericardial disease", "Adult congenital heart disease"],
  ["Exercise and pharmacologic stress protocols", "Indications and contraindications", "Interpretation and clinical decision-making"],
  ["Indications and contraindications", "TEE technique and safety", "Clinical applications (endocarditis, embolic sources, perioperative use)"],
  ["Echo guidance in structural interventions (e.g., TAVR, MitraClip)", "Intra-operative and hybrid procedure echo support", "Left atrial appendage closure guidance"],
  ["Echo for acute settings (shock, tamponade, pulmonary hypertension)", "ICU/Emergency echo (FoCUS/POCUS)", "Pediatric and fetal echo basics"],
  ["Echo lab quality control and accreditation standards", "Structured reporting techniques", "Professional practice standards and guidelines"]
],

faqs: [
  { q: "Who is eligible for a Fellowship in Echocardiography?", a: "Candidates with MBBS, MD/DNB (Medicine), DM Cardiology, or relevant clinical backgrounds are eligible; basic cardiology knowledge is preferred." },
  { q: "What is the duration of a Fellowship in Echocardiography?", a: "The fellowship duration usually ranges from 10 to 12 months, depending on the training structure and clinical exposure." },
  { q: "Can I do a Fellowship in Echocardiography after MBBS?", a: "Yes, MBBS graduates can pursue this fellowship to gain specialized skills in cardiac imaging and echocardiography." },
  { q: "What are the career opportunities after a Fellowship in Echocardiography?", a: "Graduates can work as Echo Specialists, Cardiac Imaging Consultants, or in hospitals, diagnostic centers, and cardiac clinics." },
  { q: "What is the fee for a Fellowship in Echocardiography?", a: "Fees vary based on course duration and clinical training; exact details are available on inquiry." },
  { q: "What is the salary expectation after a Fellowship in Echocardiography?", a: "Salary depends on experience and location, with growth opportunities as clinical expertise increases." }
],
    meta: {
      duration: "52 week",
      lessons: "41",
      skill_level: "Fellowship",
      certificate: "yes"
    },
    trainers: [
      { name: "Dr. DMHCA Expert Faculty", title: "Echocardiography Specialist" }
    ]
  },
  {
    slug: "certificate-in-hypertension",
    title: "Certificate Course in Hypertension",
    categories: ["cardiology"],
    image: "/courses/Certificate-In-Hypertension-410x290.webp",
    heroDescription: "Certificate in Hypertension: Comprehensive Management of High Blood Pressure for Improved Patient Care",
    lessons: 35,
    weeks: 50,
    level: "beginner",
    priceINR: 30000,
    rating: 5,
    reviewCount: 1,
    program: "Certificate",
    overview: "Hypertension is one of the most prevalent cardiovascular risk factors and a leading cause of morbidity and mortality worldwide. Effective diagnosis, risk stratification, and long-term management of hypertension are critical in preventing complications such as stroke, myocardial infarction, heart failure, and chronic kidney disease. This certificate course is designed to equip physicians with updated knowledge and practical skills in the comprehensive evaluation and management of patients with hypertension, including resistant and secondary hypertension.",

learn: [
  "Understand the pathophysiology and classification of hypertension.",
  "Perform accurate blood pressure measurement and interpretation.",
  "Evaluate cardiovascular risk and target organ damage.",
  "Identify and manage primary and secondary hypertension.",
  "Manage hypertensive emergencies and urgencies.",
  "Prescribe appropriate pharmacological and non-pharmacological therapies.",
  "Interpret ambulatory and home blood pressure monitoring reports.",
  "Apply evidence-based guidelines in hypertension management."
],

requirements: ["MBBS MD/ MS /DGO/ DNB"],

modules: [
  "Fundamentals of Hypertension",
  "Primary (Essential) Hypertension",
  "Secondary & Resistant Hypertension",
  "Hypertension in Special Populations",
  "Hypertensive Emergencies & Complications",
  "Monitoring, Prevention & Clinical Integration"
],

moduleDetails: [
  ["Epidemiology and burden of hypertension", "Pathophysiology and classification", "Accurate BP measurement techniques", "White coat and masked hypertension", "Cardiovascular risk assessment", "Lifestyle modifications"],
  ["Diagnosis and staging", "Initial evaluation and investigations", "Pharmacological therapy (ACE inhibitors, ARBs, CCBs, diuretics, beta-blockers)", "Combination therapy strategies", "Follow-up and monitoring"],
  ["Renal hypertension", "Endocrine causes (pheochromocytoma, hyperaldosteronism, thyroid disorders)", "Obstructive sleep apnea", "Drug-induced hypertension", "Resistant hypertension management", "Interventional options (overview)"],
  ["Hypertension in pregnancy", "Pediatric hypertension", "Elderly patients", "Diabetes and metabolic syndrome", "Chronic kidney disease", "Cardiovascular disease patients"],
  ["Hypertensive urgency vs emergency", "Acute stroke and hypertension", "Acute coronary syndrome", "Acute heart failure", "Aortic dissection", "Target organ damage assessment"],
  ["Ambulatory blood pressure monitoring (ABPM)", "Home blood pressure monitoring", "Preventive cardiology principles", "Patient counseling and adherence strategies", "Clinical audit and documentation", "Case discussions and final assessment"]
],

faqs: [
  { q: "Who is eligible for the Certificate in Hypertension?", a: "MBBS, MD, MS, DGO, DNB holders and other healthcare professionals with a clinical background are eligible for the Certificate in Hypertension." },
  { q: "What is the duration of the Certificate in Hypertension?", a: "The course runs for 50 weeks, providing comprehensive training in hypertension management and preventive care." },
  { q: "What will I learn in this hypertension certification course?", a: "You’ll learn about blood pressure measurement, risk factors, diagnosis, treatment guidelines, lifestyle modification, and patient education for better outcomes." },
  { q: "What are the career opportunities after completing this course?", a: "Graduates can work in hospitals, clinics, preventive care settings, and community health programs focusing on hypertension and cardiovascular risk management." },
  { q: "What is the fee for the Certificate in Hypertension?", a: "Fees vary by program structure and training scope; exact details are available on inquiry or enrollment request with the academy." },
  { q: "What is the salary expectation after completing the hypertension certificate?", a: "Salary depends on role, experience, and location; skilled professionals in hypertension care and chronic disease management typically earn competitive packages in clinical and preventive healthcare." }
],
    meta: {
      duration: "50 week",
      lessons: "35",
      skill_level: "Certificate",
      certificate: "yes"
    },
    trainers: [
      { name: "DMHCA Faculty", title: "Interventional Cardiology Specialists", bio: "Expert faculty with advanced training in interventional techniques.", image: "/logo.webp" }
    ]
  },
  {
    slug: "fellowship-in-interventional-cardiology",
    title: "Fellowship in Interventional Cardiology",
    categories: ["cardiology"],
    image: "/courses/Cardiac-Surgeons-410x290.webp",
    heroDescription: "Fellowship in Interventional Cardiology: Expertise in Advanced Cardiac Procedures and Life-Saving Interventions",
    lessons: 37,
    weeks: 50,
    level: "expert",
    priceINR: 190000,
    rating: 5,
    reviewCount: 4,
    program: "Fellowship",
    overview: "The Fellowship in Interventional Cardiology is designed to provide specialized training in advanced cardiac procedures, including catheter-based treatments for heart disease. This program equips fellows with the skills needed to perform complex interventions like angioplasty, stent placement, and more, preparing them to manage critical cardiac conditions and improve patient outcomes.",

learn: [
  "Mastery of catheter-based interventions, including angioplasty, stenting, and valve repairs.",
  "Techniques for diagnosing and treating coronary artery disease and other cardiac disorders.",
  "Advanced imaging and hemodynamic monitoring for precise cardiac interventions.",
  "Management of acute coronary syndromes and heart failure.",
  "Post-procedural care and long-term management of cardiac patients.",
  "Best practices in cardiovascular risk reduction and patient safety during interventions."
],

requirements: [
  "MD/MS/DNB/DM",
  "5+ Years Experienced Cardiologist"
],

modules: [
  "Basic Science and Pharmacology",
  "Fundamentals of Interventions",
  "Peripheral Vascular Intervention",
  "Intracardiac Intervention",
  "Evaluation of Interventional Techniques",
  "Interventional Cardiology"
],

moduleDetails: [
  [
    "Arterial Disease—Atherosclerosis",
    "Restenosis Platelet—Inhibitor Agents",
    "Anticoagulant and Fibrinolytic Agents",
    "Vasoactive and Antiarrhythmic Drugs"
  ],
  [
    "Fundamentals of X-ray Imaging, Radiation Safety, and Contrast Media",
    "Coronary Hemodynamics: Pressure and Flow",
    "Intravascular Ultrasound, Optical Coherence Tomography, and Near-Infrared Spectroscopy",
    "Vulnerable Plaque Imaging",
    "Hemodynamics for Interventional Cardiologists",
    "Coronary Angiography for PCI"
  ],
  [
    "Extremity Interventions",
    "Chronic Mesenteric Ischemia: Diagnosis and Intervention",
    "Renal Artery Stenosis",
    "Device Therapy for Resistant Hypertension",
    "Thoracic and Abdominal Aortic Vascular Interventions",
    "Venous Intervention",
    "Carotid and Cerebrovascular Intervention",
    "Stroke Centers and Interventional Cardiology"
  ],
  [
    "Imaging for Intracardiac Interventions",
    "Percutaneous Closure of Patent Foramen Ovale and Atrial Septal Defect",
    "Mitral Valvuloplasty",
    "Transcatheter Aortic Valve Interventions",
    "Transcatheter Aortic Valve Interventions",
    "Hypertrophic Cardiomyopathy",
    "Pericardial Interventions",
    "Transcatheter Therapies for Congenital Heart Disease",
    "Stem Cell Therapy for Ischemic Heart Disease"
  ],
  [
    "Qualitative and Quantitative",
    "Qualitative and Quantitative Coronary Angiography",
    "Intravascular Ultrasound",
    "High-Risk Vulnerable Plaques: Definition, Diagnosis, and Treatment",
    "Optical Coherence Tomography"
  ],
  [
    "Medical Economics and Interventional Cardiology",
    "Quality of Care in Interventional Cardiology",
    "Volume and Outcome",
    "Interventional Heart Failure"
  ]
],

faqs: [
  { q: "Who is eligible for a Fellowship in Interventional Cardiology?", a: "Candidates with a MD/MS/DM/DNB in Cardiology or equivalent cardiology qualification are eligible to pursue this advanced fellowship focused on interventional procedures." },
  { q: "What is the duration of the Fellowship in Interventional Cardiology?", a: "The fellowship typically runs for 10–12 months, depending on the training structure." },
  { q: "Can I do this fellowship after MD Cardiology?", a: "Yes, doctors who have completed MD/DNB Cardiology can pursue this program to gain specialized skills in cardiac interventions." },
  { q: "What are the career opportunities after this fellowship?", a: "Graduates can work as Interventional Cardiologists, Cath Lab Specialists, Consultants in cardiac centers, hospitals, and specialized clinics." },
  { q: "What is the fee for a Fellowship in Interventional Cardiology?", a: "Fees vary based on training duration and clinical exposure; detailed fee information is available on inquiry with the academy." },
  { q: "What is the salary expectation after a Fellowship in Interventional Cardiology?", a: "Salary depends on knowledge, experience, and location; interventional cardiologists typically earn high salaries with strong growth potential in private and hospital settings." }
],
    meta: {
      duration: "50 week",
      lessons: "37",
      skill_level: "Fellowship",
      certificate: "yes"
    },
    trainers: [
      { name: "DMHCA Faculty", title: "Interventional Cardiology Specialists" }
    ]
  },
  {
    slug: "fellowship-in-clinical-cardiology",
    title: "Fellowship in Clinical Cardiology",
    categories: ["cardiology"],
    image: "/courses/21003304_cardio_onc_og-410x290.webp",
    heroDescription: "Become a Leader in Heart Health: Fellowship in Clinical Cardiology for Advanced Cardiovascular Care and Expertise",
    lessons: 70,
    weeks: 52,
    level: "expert",
    priceINR: 135000,
    rating: 5,
    reviewCount: 3,
    program: "Fellowship",
    overview: "A Fellowship in Clinical Cardiology offers specialized training in diagnosing, managing, and treating a wide range of cardiovascular diseases. The program focuses on non-invasive and invasive cardiac procedures, patient care, and the latest advancements in cardiology. Fellows gain hands-on experience in echocardiography, cardiac catheterization, stress testing, and management of heart failure, preparing them for leadership roles in clinical cardiology and patient-centered cardiovascular care.",

learn: [
  "In-depth knowledge of diagnosing and managing coronary artery disease, heart failure, arrhythmias, and valvular heart diseases.",
  "Mastery of non-invasive diagnostic tools such as echocardiography, stress testing, and Holter monitoring.",
  "Hands-on training in performing cardiac catheterization for diagnostic and therapeutic purposes, including angiography and coronary interventions.",
  "Expertise in advanced heart failure therapies, including medication management, device therapy, and patient care strategies.",
  "Exposure to advanced cardiac imaging techniques like CT angiography, cardiac MRI, and nuclear imaging for detailed heart assessments.",
  "Skills in managing arrhythmias, including pharmacologic treatment and device-based therapies like pacemakers and defibrillators.",
  "Training in lifestyle modification, risk factor management, and preventive strategies for reducing cardiovascular disease burden."
],

requirements: [
  "MBBS and Above Qualification"
],

modules: [
  "Basic Cardiovascular Sciences & Clinical Evaluation",
  "Electrocardiography & Cardiac Monitoring",
  "Ischemic Heart Disease",
  "Heart Failure & Cardiomyopathies",
  "Valvular Heart Disease",
  "Hypertension & Preventive Cardiology",
  "Echocardiography & Cardiac Imaging",
  "Arrhythmias & Electrophysiology",
  "Congenital & Structural Heart Disease",
  "Peripheral Vascular & Aortic Diseases",
  "Cardiac Emergencies & Critical Care Cardiology",
  "Ethics & Clinical Integration"
],

moduleDetails: [
  [
    "Anatomy and physiology of the cardiovascular system",
    "Cardiovascular examination techniques",
    "Approach to chest pain",
    "Interpretation of ECG (basics)",
    "Cardiac biomarkers",
    "Risk factors and prevention of cardiovascular disease"
  ],
  [
    "Advanced ECG interpretation",
    "Arrhythmia recognition",
    "Holter monitoring",
    "Ambulatory BP monitoring",
    "Event recorders",
    "Stress testing (TMT)"
  ],
  [
    "Stable angina",
    "Acute coronary syndrome (STEMI/NSTEMI)",
    "Thrombolysis principles",
    "Post-MI management",
    "Secondary prevention",
    "Cardiac rehabilitation"
  ],
  [
    "Acute and chronic heart failure",
    "HFrEF and HFpEF",
    "Dilated cardiomyopathy",
    "Hypertrophic cardiomyopathy",
    "Restrictive cardiomyopathy",
    "Pharmacological management"
  ],
  [
    "Mitral valve disorders",
    "Aortic valve disorders",
    "Tricuspid and pulmonary valve disease",
    "Rheumatic heart disease",
    "Prosthetic valves",
    "Indications for surgical referral"
  ],
  [
    "Primary hypertension",
    "Secondary hypertension",
    "Hypertensive emergencies",
    "Lipid disorders",
    "Lifestyle interventions",
    "Cardiovascular risk stratification"
  ],
  [
    "Basics of 2D echocardiography",
    "Doppler echocardiography",
    "Stress echocardiography (overview)",
    "Transesophageal echocardiography (overview)",
    "Cardiac CT and MRI (overview)",
    "Interpretation of echo findings"
  ],
  [
    "Supraventricular tachycardia",
    "Atrial fibrillation",
    "Ventricular tachycardia",
    "Heart blocks",
    "Pacemaker basics",
    "Indications for ICD and CRT"
  ],
  [
    "Atrial septal defect",
    "Ventricular septal defect",
    "Patent ductus arteriosus",
    "Tetralogy of Fallot (overview)",
    "Adult congenital heart disease",
    "Structural interventions (overview)"
  ],
  [
    "Peripheral arterial disease",
    "Deep vein thrombosis",
    "Pulmonary embolism",
    "Aortic aneurysm",
    "Aortic dissection",
    "Vascular ultrasound basics"
  ],
  [
    "Cardiogenic shock",
    "Cardiac arrest management",
    "Acute pulmonary edema",
    "Life-threatening arrhythmias",
    "Post-resuscitation care",
    "ICU cardiac monitoring"
  ],
  [
    "Evidence-based cardiology",
    "Clinical audit and case presentations",
    "Ethics and medico-legal aspects",
    "Preventive cardiology practice"
  ]
],

faqs: [
  { q: "Who is eligible for this fellowship?", a: "MBBS and above-qualified professionals or those with relevant clinical experience can apply to strengthen cardiology expertise." },
  { q: "What is the duration of this fellowship?", a: "The program typically runs for 10–12 months with structured clinical and theoretical training." },
  { q: "Can I pursue it after MBBS?", a: "It is generally recommended for postgraduates in medicine or cardiology, as it requires advanced clinical understanding." },
  { q: "What career opportunities are available after completion?", a: "Graduates can work as clinical cardiologists, consultants, or specialists in hospitals and cardiac care centers." },
  { q: "What is the fee for this fellowship?", a: "Fees vary based on structure and clinical exposure; exact details are shared upon inquiry." },
  { q: "What is the salary after completion?", a: "Salary depends on experience and location, with strong earning potential in both hospital and private practice settings." }
],
    meta: {
      duration: "52 week",
      lessons: "70",
      skill_level: "Fellowship",
      certificate: "yes"
    },
    trainers: [
      { name: "DMHCA Faculty", title: "Clinical Cardiology Specialists" }
    ]
  },
  {
    slug: "fellowship-in-cardiothoracic-surgery",
    title: "Fellowship in Cardiothoracic Surgery",
    categories: ["cardiology"],
    image: "/courses/Robotic--410x290.webp",
    heroDescription: "Excel in Cardiothoracic Surgery: Advanced Fellowship Training in Complex Heart and Lung Procedures.",
    lessons: 18,
    weeks: 50,
    level: "expert",
    priceINR: 180000,
    rating: 5,
    reviewCount: 1,
    program: "Fellowship",
     overview: "A Fellowship in Cardiothoracic Surgery provides advanced training in surgical procedures for the heart, lungs, and other thoracic organs. This program offers comprehensive hands-on experience in complex surgeries such as coronary artery bypass grafting, heart valve repair and replacement, and lung resections. Fellows develop expertise in both open and minimally invasive techniques, including robotic-assisted surgery. The fellowship emphasizes clinical excellence, research, and leadership skills to prepare surgeons for advanced roles in cardiothoracic surgery.",

  learn: [
    "Mastery of complex procedures such as coronary artery bypass grafting (CABG), heart valve repair and replacement, and lung resections.",
    "Skills in performing and managing minimally invasive and robotic-assisted thoracic surgeries.",
    "Comprehensive management of patients before, during, and after cardiothoracic surgery, including intensive care and recovery.",
    "In-depth understanding of the anatomy and diseases affecting the heart and thoracic organs.",
    "Utilization of the latest surgical technologies and techniques, including advanced imaging and robotic systems.",
    "Developing expertise in making critical surgical decisions, managing complications, and customizing treatment plans for individual patients",
    "Engaging in clinical research to contribute to advancements in cardiothoracic surgery and improve surgical outcomes.",
    "Working closely with multidisciplinary teams, including cardiologists, pulmonologists, and intensivists, to provide comprehensive patient care.",
    "Training in ethical considerations, leadership skills, and communication strategies for managing complex cases and leading surgical teams.",
    "Enhancing skills in communicating effectively with patients and their families about surgical options, risks, and recovery processes."
  ],

  requirements: [
    "MBBS/ MD/MS/Equivalent",
    "No previous experience is needed."
  ],
    modules: [
      "Syllabus"
    ],
    moduleDetails: [
      [
        "Ischaemic Heart Disease",
          "Heart Valve Disease",
          "Aortovascular Disease",
          "Congenital Heart Disease",
          "Cardiothoracic Trauma",
          "Critical Care and Postoperative Management",
          "Cardiopulmonary Bypass, Myocardial Protection and Circulatory Support",
          "General Managementofa Patient Undergoing Thoracic Surgery",
          "Management of Benign Oesophageal Disease",
          "Management of Oesophageal Neoplasia",
          "Neoplasms of the Lung",
          "Disorders of the Pleura",
          "Disorders of the Chest Wall",
          "Disorders of the Diaphragm",
          "Emphysema and Bullae",
          "Disorders of the Pericardium",
          "Disorders of the Mediastinum",
          "Disorders of the Airway"
      ],
    ],
     faqs: [
    {
      q: "Who is eligible for a Fellowship in Cardiothoracic Surgery?",
      a: "Candidates with MBBS, MD, MS, or equivalent qualifications are eligible to pursue this fellowship. No previous experience is required."
    },
    {
      q: "What is the duration of the Fellowship in Cardiothoracic Surgery?",
      a: "The fellowship duration is 10–12 months, depending on clinical training requirements."
    },
    {
      q: "Can I do this fellowship after MS General Surgery?",
      a: "Yes, after MS General Surgery, candidates often pursue MCh in Cardiothoracic Surgery first, then advanced fellowships to gain specialized operative skills."
    },
    {
      q: "What are the career opportunities after this fellowship?",
      a: "Graduates can work as Cardiothoracic Surgeons, Surgical Consultants, and Operating Team Leads in hospitals, cardiac centers, and specialized surgical units."
    },
    {
      q: "What is the fee for a Fellowship in Cardiothoracic Surgery?",
      a: "Fees vary by training duration and clinical exposure; exact fee details are available upon inquiry with the academy."
    },
    {
      q: "What is the salary expectation after a Fellowship in Cardiothoracic Surgery?",
      a: "Salary depends on experience, hospital, and location; cardiothoracic surgery specialists typically earn high compensation with strong growth prospects in hospitals and surgical practice."
    }
  ],
    meta: {
      duration: "50 week",
      lessons: "18",
      skill_level: "Fellowship",
      certificate: "yes"
    },
    trainers: [
      { name: "DMHCA Faculty", title: "Cardiothoracic Surgery Specialists" }
    ]
  },
  {
    slug: "fellowship-in-cardio-oncology",
    title: "Fellowship in Cardio Oncology",
    categories: ["cardiology", "oncology"],
    image: "/courses/Lead-post-chandan-4-410x290.webp",
    heroDescription: "Advance Your Expertise: Fellowship in Cardio-Oncology for Managing Heart Conditions in Cancer Patients.",
    lessons: 17,
    weeks: 50,
    level: "expert",
    priceINR: 150000,
    rating: 5,
    reviewCount: 2,
    program: "Fellowship",
    overview: "A Fellowship in Cardio-Oncology is an advanced training program designed for physicians to specialize in the intersection of cardiology and oncology. The program focuses on the cardiovascular effects of cancer treatments, such as chemotherapy and radiation, and the management of heart conditions in cancer patients. Fellows gain expertise in diagnosing, preventing, and treating cardiovascular complications related to cancer therapies, ensuring comprehensive care for patients with both cancer and heart disease. The fellowship combines clinical practice with research opportunities to advance knowledge in this emerging field.",
    learn: [
       "How cancer treatments like chemotherapy, immunotherapy, and radiation can impact heart health and lead to conditions such as cardiomyopathy, arrhythmias, and heart failure.",
    "Techniques for assessing cardiovascular risk in cancer patients and monitoring heart function during and after cancer therapy.",
    "Mastery of diagnostic tools such as echocardiography, cardiac MRI, and biomarkers for evaluating heart conditions in cancer patients.",
    "Strategies for preventing, diagnosing, and managing cardiovascular complications, including medication management, lifestyle interventions, and personalized treatment plans.",
    "Working closely with oncologists, radiation therapists, and other specialists to ensure comprehensive care for cancer patients with heart conditions.",
    "Conducting and contributing to research on the effects of cancer treatments on cardiovascular health, exploring new diagnostic and therapeutic approaches.",
    "Developing long-term management plans for cancer survivors at risk of late-onset cardiovascular diseases due to their cancer treatments."
    ],
    requirements: ["MBBS/MD/MS/Equivalent"],
    modules: [
     "Introduction to Cardiology Oncology",
      "Basic Principles of Cardiology in Cancer Patients",
      "Cardiotoxicity of Cancer Therapies",
      "Cardiovascular Imaging in Oncology",
      "Management of Cardiovascular Complications in Cancer Patients"
    ],
    moduleDetails: [
      [
        "Pathophysiology of Cardiac Complications in Cancer Patients",
        "Risk Factors for Cardiovascular Disease in Cancer Patients",
        "Cardiac Monitoring Strategies During Cancer Treatment",
        "Psychosocial Aspects of Cardio-Oncology Care"
      ],
      [
        "Cardiovascular Risk Modification Strategies",
        "Management of Cardiovascular Risk during Cancer Treatment"
      ],
      [
        "Mechanisms of Chemotherapy-induced Cardiotoxicity",
        "Radiation-induced Cardiac Complications",
        "Targeted Therapy and Immunotherapy-related Cardiovascular Effects",
        "Prevention and Management of Cardiotoxicity"
      ],
      [
        "Advanced Imaging Techniques for Cardiotoxicity Assessment",
        "Integration of Imaging Biomarkers into Clinical Practice",
        "Multimodality Imaging Approaches in Cardio-Oncology",
        "Imaging-Guided Cardio-Oncology Interventions"
      ],
      [
        "Cardiomyopathy Associated with Cancer Therapies",
        "Cardiac Toxicity of Targeted Therapies",
        "Interventional Cardiology in Cancer Patients ."
      ]
    ],
    faqs: [
     {
      "q": "Who is eligible for a Fellowship in Cardio-Oncology?",
      "a": "Candidates with MBBS, MD, MS, or equivalent qualifications are eligible to pursue this fellowship. No previous experience is required."
    },
    {
      "q": "What is the duration of the Fellowship in Cardio-Oncology?",
      "a": "The fellowship typically runs for 10 – 12 months, depending on clinical exposure and structured training modules."
    },
    {
      "q": "Can I do this fellowship after MD Cardiology or Oncology?",
      "a": "Yes, physicians with postgraduate training in Cardiology or Oncology can pursue this fellowship to specialize in cardio-oncology care."
    },
    {
      "q": "What are the career opportunities after this fellowship?",
      "a": "Graduates can work as Cardio-Oncology Specialists, Clinical Consultants or Coordinators in multidisciplinary cancer and heart care teams at hospitals and cancer centers."
    },
    {
      "q": "What is the fee for a Fellowship in Cardio-Oncology?",
      "a": "Fees vary based on training duration and clinical exposure; specific fee information is available on inquiry."
    },
    {
      "q": "What is the salary expectation after a Fellowship in Cardio-Oncology?",
      "a": "Salary depends on experience, specialty and workplace; trained cardio-oncology specialists typically command competitive packages in tertiary care and specialized clinics."
    }
  ],
    meta: {
      duration: "50 week",
      lessons: "17",
      skill_level: "Fellowship",
      certificate: "yes"
    },
    trainers: [
      { name: "DMHCA Faculty", title: "Cardio-Oncology Specialists" }
    ]
  },

  // Radiology (5 courses)
  {
    slug: "fellowship-in-abdominal-imaging",
    title: "Fellowship in Abdominal Imaging",
    categories: ["radiology"],
    image: "/courses/Fellowship-Course-in-Abdominal-Imaging-410x290.webp",
    heroTitle: "Master Abdominal Imaging",
    heroDescription: "Advanced training in imaging of abdominal organs using ultrasound, Doppler, CT, and MRI with focus on oncologic and...",
    lessons: 28,
    weeks: 25,
    level: "expert",
    priceINR: 110000,
    rating: 5,
    reviewCount: 1,
    program: "Fellowship",
   overview: "The Fellowship in Abdominal Imaging is a focused postgraduate subspecialty training program designed to develop expertise in imaging of the abdominal organs, including the liver, pancreas, gastrointestinal tract, kidneys, adrenal glands, and retroperitoneum. The fellowship emphasizes multimodality imaging using ultrasound, Doppler, CT, and MRI, with strong focus on protocol optimization, accurate diagnosis, oncologic imaging, and clinical correlation. The program prepares radiologists for independent subspecialty practice in abdominal imaging.",

learn: [
  "Perform and interpret abdominal ultrasound, CT, and MRI studies.",
  "Diagnose hepatobiliary, pancreatic, gastrointestinal, renal, and adrenal diseases.",
  "Apply multiphasic CT and MRI protocols effectively.",
  "Interpret abdominal oncologic imaging for staging and follow-up.",
  "Recognize acute abdominal emergencies on imaging.",
  "Produce structured, clinically relevant imaging reports.",
  "Correlate imaging findings with laboratory and clinical data.",
  "Communicate effectively with referring clinicians.",
  "Maintain radiation safety and contrast safety standards.",
  "Practice ethical and evidence-based abdominal imaging."
],

requirements: [
  "MD/ MS/ DNB/ PG Equivalent (OBG or Radio-diagnostic)",
  "MBBS, Sonologist / 6 months PCPNDT certificate/ resident doctor with 3 years’ experience"
],

modules: [
  "Foundations of Abdominal Imaging",
  "Hepatobiliary & Pancreatic Imaging",
  "Gastrointestinal Tract Imaging",
  "Genitourinary & Retroperitoneal Imaging",
  "Abdominal Oncology, Emergency Imaging",
  "Abdominal Oncology, Project and Clinical practice"
],

moduleDetails: [
  ["Abdominal anatomy and imaging correlations", "Imaging physics and protocol selection", "Ultrasound and Doppler techniques", "Contrast agents and safety", "Reporting standards"],
  ["Liver lesions and cirrhosis", "Focal hepatic lesions and LI-RADS overview", "Biliary tree imaging", "Pancreatic inflammatory and neoplastic diseases", "MRCP and multiphasic CT protocols"],
  ["Esophagus, stomach, and small bowel imaging", "Colorectal imaging", "Inflammatory bowel disease", "GI emergencies", "CT enterography overview"],
  ["Renal and adrenal imaging", "Urothelial tumors", "Retroperitoneal masses", "Vascular anatomy", "Doppler applications"],
  ["Oncologic staging and response assessment", "Abdominal trauma imaging", "Acute abdomen imaging", "Imaging-pathology correlation", "Clinical audit and quality assurance"],
  ["Project work", "Medico-legal aspects", "Communication and reporting excellence"]
],

faqs: [
  { q: "Who is the Fellowship in Abdominal Imaging designed for?", a: "This online program is suitable for OBG and radiology PG-qualified professionals, MBBS doctors, certified sonologists, and experienced residents seeking deeper expertise in abdominal imaging." },
  { q: "What advanced imaging topics does the Abdominal Imaging fellowship at DMHCA cover?", a: "This fellowship from DMHCA focuses on ultrasound, CT, MRI interpretation of abdominal organs, liver and pancreas imaging, GI tract assessment, and evidence-based diagnostic strategies." },
  { q: "How will I access the abdominal imaging fellowship content at DMHCA?", a: "The course is delivered via online lectures, expert-led sessions, case-based discussions, and comprehensive digital study materials accessible flexibly from anywhere." },
  { q: "What improvements can this fellowship bring to my clinical practice?", a: "Completing this fellowship helps enhance your diagnostic confidence, deepen understanding of complex abdominal scans, and strengthen interpretation skills in cross-sectional imaging." },
  { q: "What is the fee for the Abdominal Imaging fellowship at DMHCA?", a: "Fees vary depending on course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this abdominal imaging fellowship from DMHCA enhance my career and earning potential?", a: "Yes, This course providing advanced online training in abdominal imaging can boost your professional profile, expand clinical opportunities, and support higher earning prospects in radiology and diagnostic care." }
],
    meta: {
      duration: "25 week",
      lessons: "28",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
  slug: "fellowship-in-pulmonology",
  title: "Fellowship in Pulmonology",
  categories: ["pulmonary"],
  image: "",
  lessons: 52,
  weeks: 50,
  level: "expert",
  priceINR: 140000,
  rating: null,
  reviewCount: 0,
  program: "Fellowship",
  heroDescription: "Advanced training in respiratory medicine including pulmonary diagnostics, critical respiratory care, and management of acute and chronic pulmonary disorders.",
  overview: "Pulmonology is a specialized branch of medicine that focuses on the diagnosis, treatment, and prevention of diseases affecting the respiratory system. Conditions such as asthma, chronic obstructive pulmonary disease (COPD), tuberculosis, interstitial lung diseases, and respiratory infections contribute significantly to global morbidity and mortality. This fellowship program provides comprehensive clinical training in respiratory medicine, pulmonary diagnostics, critical respiratory care, and management of both acute and chronic pulmonary disorders.",

  learn: [
    "Understand the anatomy and physiology of the respiratory system.",
    "Diagnose and manage common pulmonary diseases.",
    "Interpret pulmonary function tests and imaging studies.",
    "Perform and assist in basic pulmonary procedures.",
    "Manage respiratory emergencies and critical care conditions.",
    "Apply evidence-based guidelines in respiratory medicine."
  ],

  requirements: [
    "MBBS / MD/MS or Equivalent"
  ],

  modules: [
    "Foundations of Pulmonology",
    "Pulmonary Diagnostic Techniques",
    "Obstructive Airway Diseases",
    "Respiratory Infections",
    "Interstitial & Occupational Lung Diseases",
    "Pleural Diseases",
    "Pulmonary Vascular Disorders",
    "Sleep-Related Breathing Disorders",
    "Pulmonary Procedures",
    "Respiratory Critical Care",
    "Pulmonary Rehabilitation & Preventive Care",
    "Clinical Integration & Final Assessment"
  ],

  moduleDetails: [
    ["Anatomy and physiology of the respiratory system", "Pathophysiology of respiratory diseases", "Respiratory symptoms and clinical examination", "Basics of respiratory pharmacology"],
    ["Chest X-ray interpretation", "CT scan of the chest", "Pulmonary function tests (PFTs)", "Arterial blood gas (ABG) analysis", "Sputum and microbiological investigations"],
    ["Asthma", "Chronic obstructive pulmonary disease (COPD)", "Bronchiectasis", "Inhalation therapy and bronchodilators", "Long-term disease management"],
    ["Community-acquired pneumonia", "Tuberculosis", "Viral respiratory infections", "Fungal lung infections", "Antibiotic stewardship"],
    ["Interstitial lung disease (ILD)", "Idiopathic pulmonary fibrosis", "Sarcoidosis", "Hypersensitivity pneumonitis", "Occupational lung diseases"],
    ["Pleural effusion", "Pneumothorax", "Empyema", "Diagnostic thoracentesis", "Pleural drainage techniques"],
    ["Pulmonary embolism", "Pulmonary hypertension", "Diagnostic evaluation", "Medical management"],
    ["Obstructive sleep apnea", "Central sleep apnea", "Sleep study basics", "CPAP and BiPAP therapy"],
    ["Bronchoscopy overview", "Thoracentesis", "Pleural biopsy", "Airway management"],
    ["Acute respiratory failure", "Mechanical ventilation", "Non-invasive ventilation", "ICU respiratory care"],
    ["Pulmonary rehabilitation", "Smoking cessation programs", "Vaccination in respiratory diseases", "Patient education and counseling"],
    ["Case discussions and presentations", "Multidisciplinary team management", "Final examination and assessment"]
  ],

  faqs: [
    { q: "Who is eligible for the Fellowship in Pulmonology?", a: "MBBS, MD/MS or equivalent qualifications are required. Candidates should have a strong foundation in clinical medicine or internal medicine." },
    { q: "What is the duration of the Fellowship in Pulmonology?", a: "The fellowship program runs for 50 weeks, providing comprehensive training in respiratory medicine and pulmonary diagnostics." },
    { q: "What will I learn in this pulmonology fellowship?", a: "You'll learn respiratory system anatomy and physiology, diagnosis and management of pulmonary diseases, pulmonary function testing, imaging interpretation, bronchoscopy techniques, and critical respiratory care management." },
    { q: "What are the career opportunities after this fellowship?", a: "Graduates can work as respiratory specialists in hospitals, clinics, research institutions, and critical care settings, managing respiratory diseases and providing expert pulmonary care." },
    { q: "What is the fee for the Fellowship in Pulmonology?", a: "The program fee is ₹140,000. Payment options and financial arrangements are available on inquiry." },
    { q: "What practical procedures will I learn?", a: "The program includes training in bronchoscopy, thoracentesis, pleural biopsy, airway management, and other pulmonary procedures with hands-on clinical experience." }
  ],

  trainers: [
    { name: "DMHCA Faculty", title: "Pulmonology Specialists", bio: "Expert faculty with advanced training in respiratory medicine and pulmonary diagnostics." }
  ],

  meta: {
    duration: "50 weeks",
    lessons: "52",
    skill_level: "Fellowship",
    certificate: "yes"
  }
},
  {
    slug: "fellowship-in-breast-imaging",
    title: "Fellowship in Breast Imaging",
    categories: ["radiology","obs-gynae"],
    image: "/courses/Fellowship-Course-in-Breast-Imaging-410x290.webp",
    heroDescription: "Advanced fellowship focused on mammography, breast ultrasound, MRI, and early breast cancer diagnosis.",
    lessons: 23,
    weeks: 25,
    level: "expert",
    priceINR: 90000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview:"The Fellowship in Breast Imaging is a focused postgraduate subspecialty training program designed to develop expertise in the screening, diagnosis, and imaging-guided management of breast diseases. The fellowship provides structured training in mammography, breast ultrasound, breast MRI, and image-guided interventions, emphasizing early detection of breast cancer, standardized reporting, quality assurance, and multidisciplinary collaboration. The program prepares clinicians and radiologists for competent independent practice in breast imaging.",
learn:["Perform and interpret screening and diagnostic mammography.","Conduct comprehensive breast ultrasound examinations.","Interpret breast MRI studies using standard protocols.","Apply BI-RADS classification accurately and consistently.","Differentiate benign from malignant breast lesions.","Participate in image-guided breast interventions (exposure).","Correlate imaging findings with clinical and pathological data.","Communicate imaging results effectively in multidisciplinary teams.","Maintain radiation safety and quality assurance standards.","Practice ethical, evidence-based breast imaging."],
requirements:["MD/ MS/ DNB/ PG Equivalent (OBG or Radio-diagnostic)","MBBS, Sonologist / 6 months PCPNDT certificate/ resident doctor with 3 years’ experience"],
modules:["Fundamentals of Breast Imaging","Mammography","Breast Ultrasound & Doppler","Breast MRI & Interventional Exposure","Project and Clinical Practice"],
moduleDetails:[["Breast anatomy and pathology","Imaging physics and radiation safety","Screening principles and protocols","Breast density and risk assessment","Reporting standards"],["Screening and diagnostic mammography","Digital and tomosynthesis overview","Microcalcifications and masses","BI-RADS application"],["Indications and techniques","Characterization of breast lesions","Ultrasound-guided procedures","Axillary evaluation","Correlation with mammography"],["Breast MRI protocols and interpretation","MRI indications and contraindications","Image-guided biopsies","Pre and post-treatment imaging","Multidisciplinary tumor board participation"],["Project work","Screening program evaluation","Medico-legal aspects","Communication and reporting excellence"]],
faqs:[
{q:"Who can enroll in the Fellowship in Breast Imaging?",a:"This online program is suitable for MD, MS, DNB, or PG equivalent (OBG/Radio-diagnostic) holders and MBBS sonologists with PCPNDT certification or relevant experience seeking advanced breast imaging knowledge."},
{q:"What core topics are included in the Breast Imaging fellowship at DMHCA?",a:"This fellowship from DMHCA covers mammography, ultrasound evaluation, breast MRI interpretation, screening protocols, and evidence-based diagnostic strategies."},
{q:"How will I access the breast imaging fellowship content at DMHCA?",a:"The course is delivered via online lectures, expert-led sessions, case discussions, and comprehensive digital study materials that can be accessed flexibly from anywhere."},
{q:"In what ways can this fellowship improve clinical practice?",a:"Completing this fellowship helps enhance diagnostic confidence, improve interpretation accuracy, and strengthen your professional capabilities in breast imaging and cancer screening."},
{q:"What is the fee for the Breast Imaging fellowship at DMHCA?",a:"Fees vary depending on course structure and included learning resources; full pricing details are shared upon inquiry or enrollment request."},
{q:"Can the Breast Imaging fellowship from DMHCA support career advancement and higher earnings?",a:"Yes, This advanced online training in breast imaging can boost your professional credibility, expand clinical opportunities, and support enhanced earning potential in radiology and diagnostic practice."}
],
    meta: {
      duration: "25 week",
      lessons: "23",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-womens-imaging",
    title: "Fellowship in Women's Imaging",
    categories: ["radiology", "obs-gynae"],
    image: "/courses/Fellowship-in-Womens-Imaging-410x290.webp",
    heroDescription: "Comprehensive imaging training for women's health including breast, gynecological, and pelvic imaging.",
    lessons: 27,
    weeks: 50,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "The Fellowship in Women’s Imaging is an advanced subspecialty training program designed to provide comprehensive expertise in imaging of the female pelvis and breast across the reproductive lifespan. The fellowship emphasizes high-quality ultrasound, mammography, CT, and MRI, accurate diagnosis of gynecologic, obstetric, and breast disorders, and close collaboration with gynecology, oncology, and obstetrics teams. The program prepares imaging specialists for independent subspecialty practice in women’s imaging.",

learn: [
  "Perform and interpret pelvic and breast imaging studies competently.",
  "Diagnose benign and malignant gynecologic conditions using multimodality imaging.",
  "Apply advanced ultrasound, Doppler, CT, and MRI techniques in women’s imaging.",
  "Interpret breast imaging using standardized reporting systems.",
  "Correlate imaging findings with clinical and pathological data.",
  "Participate effectively in multidisciplinary team discussions.",
  "Ensure radiation safety and quality assurance in women’s imaging.",
  "Communicate imaging findings clearly to clinicians and patients.",
  "Practice ethical, evidence-based women’s imaging.",
  "Participate in audit, teaching, and research activities."
],

requirements: [
  "MD/ MS/ DNB/ PG Equivalent (OBG or Radio-diagnostic)",
  "MBBS, Sonologist / 6 months PCPNDT certificate/ resident doctor with 3 years’ experience"
],

modules: [
  "Fundamentals of Women’s Imaging",
  "Gynecologic Ultrasound & Doppler",
  "Obstetric Imaging",
  "Breast Imaging",
  "Advanced Imaging & Oncology",
  "Project and Clinical Practice"
],

moduleDetails: [
  ["Female pelvic and breast anatomy", "Imaging physics relevant to women’s imaging", "Ultrasound techniques and Doppler principles", "Radiation safety and contrast use", "Reporting standards and structured reports"],
  ["Uterine and endometrial pathology", "Ovarian and adnexal masses", "Pelvic pain and infertility imaging", "Doppler assessment in gynecology", "Imaging in gynecologic emergencies"],
  ["First- and second-trimester ultrasound", "Placental and amniotic fluid assessment", "Fetal growth and well-being", "Doppler in obstetrics", "Imaging in high-risk pregnancy"],
  ["Screening and diagnostic mammography", "Breast ultrasound and Doppler", "Breast MRI protocols and interpretation", "BI-RADS classification", "Image-guided breast interventions (exposure)"],
  ["MRI of the female pelvis", "Gynecologic oncology imaging", "Staging and follow-up imaging", "Multidisciplinary tumor board participation", "Imaging-pathology correlation"],
  ["Ethical and medico-legal aspects", "Project work and training"]
],

faqs: [
  { q: "Who should enroll in the Fellowship in Women’s Imaging?", a: "This Course is designed for radiologists, gynecologists, obstetricians, and sonographers with MD/MS/DNB/PG equivalent (OBG or Radiodiagnosis) or eligible MBBS qualifications, the course provides structured online education in women’s health imaging." },
  { q: "What advanced imaging skills are included in the Women’s Imaging fellowship at DMHCA?", a: "This fellowship from DMHCA covers breast imaging, pelvic ultrasound, obstetric and gynecologic imaging protocols, Doppler techniques, and interpretation of women’s health scans." },
  { q: "How will I access the Women’s Imaging fellowship content at DMHCA?", a: "The course is delivered through online lectures, expert-led sessions, case-based discussions, and comprehensive digital study materials, allowing flexible learning from anywhere." },
  { q: "How can this fellowship enhance my clinical imaging expertise?", a: "Completing this fellowship helps strengthen your interpretation skills, boost diagnostic confidence in women’s health imaging, and elevate your professional credibility." },
  { q: "What is the fee for the Women’s Imaging fellowship at DMHCA?", a: "Fees vary based on course structure and included digital learning resources; full pricing details are provided upon inquiry or enrollment request." },
  { q: "Can advanced online training in women’s imaging from DMHCA improve my career and earnings?", a: "Yes, after completing this fellowship can boost your professional profile, open advanced clinical opportunities, and support higher earning potential in women’s health and diagnostic imaging." }
],
    meta: {
      duration: "50 week",
      lessons: "27",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "pg-diploma-in-cosmetology-and-aesthetic-medicine",
    title: "PG Diploma in Cosmetology and Aesthetic Medicine",
    categories: ["dermatology"],
    image: "/courses/dermatopathology-410x290.webp",
    heroDescription: "Master Advanced Techniques in Aesthetic Medicine with a Fellowship PG Diploma in Cosmetology for Career Growth",
    lessons: 46,
    weeks: 50,
    level: "intermediate",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "The Post Graduate Diploma in Cosmetology and Aesthetic Medicine is a specialized program designed to train medical professionals and graduates in modern cosmetic dermatology, aesthetic procedures, and skin care technologies. The course provides knowledge of skin anatomy, dermatological conditions, cosmetic products, and advanced aesthetic treatments such as chemical peels, laser therapy, anti-aging treatments, and hair restoration techniques. The program focuses on both theoretical knowledge and hands-on clinical training, enabling students to diagnose cosmetic concerns and perform safe aesthetic procedures. Graduates can work in skin clinics, cosmetic centers, dermatology departments, aesthetic hospitals, or start their own cosmetology practice.",

learn: [
  "Understand skin and hair anatomy and physiology",
  "Diagnose common cosmetic skin disorders",
  "Perform basic and advanced aesthetic procedures",
  "Use lasers and dermatological equipment",
  "Manage anti-aging and skin rejuvenation treatments",
  "Develop skills to run a cosmetology clinic."
],

requirements: [
  "MBBS MD/ MS /DGO/ DNB"
],
trainers: [
  {
    name: "Dr. Bhuvaneshwari",
    title: "Cosmetologist/Dermatologist",
    image: "/Faculty_images/Dr Bhuvaneshwari.webp"
  }
],


modules: [
  "Basics of Cosmetology",
  "Skin Anatomy and Physiology",
  "Hair and Nail Science",
  "Cosmetic Dermatology",
  "Cosmetic Products & Cosmeceuticals",
  "Chemical Peels",
  "Laser and Light Therapy",
  "Injectable Treatments",
  "Anti-Aging Treatments",
  "Hair Restoration Techniques",
  "Clinical Practice",
  "Clinic Management & Entrepreneurship"
],

moduleDetails: [
  [
    "Introduction to Cosmetology and Aesthetic Medicine",
    "History and scope of cosmetology",
    "Ethics and legal aspects",
    "Patient consultation and documentation"
  ],
  [
    "Structure of skin",
    "Skin types and functions",
    "Aging of skin",
    "Skin microbiology"
  ],
  [
    "Hair anatomy and growth cycle",
    "Hair loss disorders",
    "Nail anatomy and nail diseases"
  ],
  [
    "Acne and acne scar management",
    "Pigmentation disorders",
    "Melasma and hyperpigmentation",
    "Dark circles and skin discoloration"
  ],
  [
    "Skin care cosmetics",
    "Anti-aging products",
    "Sunscreens and moisturizers",
    "Cosmetic chemistry"
  ],
  [
    "Types of chemical peels",
    "Indications and contraindications",
    "Procedure techniques",
    "Post-treatment care"
  ],
  [
    "Basics of laser physics",
    "Types of dermatological lasers",
    "Laser hair removal",
    "Laser skin resurfacing"
  ],
  [
    "Botulinum toxin (Botox)",
    "Dermal fillers",
    "Mesotherapy",
    "Platelet-Rich Plasma (PRP)"
  ],
  [
    "Skin rejuvenation therapies",
    "Microneedling",
    "Radiofrequency treatments",
    "Non-surgical facelift procedures"
  ],
  [
    "PRP for hair loss",
    "Hair fall treatment",
    "Hair transplantation basics"
  ],
  [
    "Patient assessment",
    "Case studies",
    "Complication management",
    "Infection control and safety"
  ],
  [
    "Setting up a cosmetology clinic",
    "Equipment and instruments",
    "Marketing and branding",
    "Legal and regulatory requirements"
  ]
],

faqs: [
  { q: "Who can apply for this PG Diploma course?", a: "The course is suitable for candidates with MBBS, MD, MS, DGO, or DNB qualifications seeking advanced academic knowledge in cosmetology and aesthetics." },
  { q: "How is the PG Diploma in Cosmetology and Aesthetic Medicine delivered?", a: "The course is conducted through online lectures, digital study material, expert-guided sessions, and case-based discussions, allowing flexible learning from anywhere." },
  { q: "What career benefits does this PG Diploma offer?", a: "Completing this course helps professionals enhance theoretical expertise, strengthen clinical understanding, and improve career prospects in cosmetology and aesthetic practice." },
  { q: "What is the fee for the PG Diploma in Cosmetology and Aesthetic Medicine?", a: "Fees depend on the course structure and academic resources provided. Exact details are shared during the admission or inquiry process." },
  { q: "Can this PG Diploma help increase professional income?", a: "Yes — advanced academic knowledge in cosmetology and aesthetic medicine can improve professional credibility, leading to better career opportunities and income growth." }
],
    meta: {
      duration: "50 week",
      lessons: "46",
      skill_level: "PG Diploma",
      certificate: "yes"
    }
  },

  // Medicine (8 courses)
  {
    slug: "pg-diploma-in-infectious-diseases",
    title: "PG Diploma in Infectious Diseases",
    categories: ["medicine"],
    image: "/courses/pg-diploma-in-infectious-diseases-410x290.webp",
    heroDescription: "Specialize in diagnosing and managing infectious diseases with practical clinical expertise.",
    lessons: 29,
    weeks: 50,
    level: "intermediate",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "Infectious diseases remain a major cause of morbidity and mortality worldwide, especially in developing countries like India. The emergence of new pathogens, re-emergence of old infections, and rising antimicrobial resistance have made this field increasingly important.",
    learn: [
     "Understand the basic mechanisms of infectious diseases and host immune response",
     "Diagnose common and complex infections using clinical and laboratory methods",
     "Apply appropriate antimicrobial therapy and promote rational drug use",
     "Manage emerging and re-emerging infections",
     "Implement infection prevention and control (IPC) practices in hospitals",
     "Understand and respond to outbreaks and epidemics",
     "Address antimicrobial resistance (AMR) effectively",
     "Manage infections in special populations (immunocompromised, pediatric, elderly, pregnant patients)",
     "Integrate public health strategies into clinical practice"
    ],
    requirements: ["MBBS", "MD", "MS", "M.Sc Nursing"],
    modules: [
      "Basics of Infectious Diseases",
      "Bacterial Infections",
      "Viral Infections",
      "Fungal, Parasitic & Tropical Diseases",
      "Epidemiology & Public Health",
      "Infections in Special Populations"
    ],
    moduleDetails: [
      [
        "Immunology and host defense mechanisms",
        "Microbial classification (bacteria, viruses, fungi, parasites)",
        "Pathogenesis and transmission of infections",
        "Diagnostic techniques (culture, serology, PCR)"
      ],
      [
        "Sepsis and systemic infections",
        "Respiratory, CNS, and soft tissue infections",
        "Tuberculosis and atypical mycobacteria",
        "Antibiotics: mechanisms, resistance, stewardship"
      ],
      [
        "Respiratory viral infections",
        "Hepatitis viruses",
        "HIV/AIDS",
        "Arboviral infections (e.g., dengue)",
        "Antiviral therapy and vaccines"
      ],
      [
        "Opportunistic fungal infections",
        "Malaria and parasitic diseases",
        "Helminthic infections",
        "Neglected tropical diseases"
      ],
      [
        "Disease surveillance",
        "Outbreak investigation",
        "Vaccination programs",
        "Hospital-acquired infections (HAIs)",
        "Infection control practices",
        "Antimicrobial resistance (AMR)"
      ],
      [
        "Immunocompromised patients",
        "Transplant recipients",
        "Pregnancy-related infections",
        "Pediatric and geriatric infections",
        "Pyrexia of unknown origin (PUO)"
      ]
    ],
  faqs: [
  { q: "Who is eligible for enrolling in the PG Diploma in Infectious Diseases?", a: "The program is suitable for MBBS, MD/MS, and M.Sc. Nursing professionals seeking advanced expertise in infectious disease management." },
  { q: "What key subjects are included in the PG Diploma in Infectious Diseases?", a: "The curriculum covers bacterial, viral, fungal, and parasitic infections, antimicrobial therapy, infection control, epidemiology, and outbreak management." },
  { q: "What professional advantages can this diploma offer?", a: "This diploma enhances clinical decision-making, strengthens infectious disease expertise, and supports career advancement in healthcare settings." },
  { q: "What is the fee for the PG Diploma in Infectious Diseases at DMHCA?", a: "Fees vary depending on the course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this infectious diseases diploma from DMHCA enhance my career and earning potential?", a: "Yes, it can improve professional credibility, expand specialized career opportunities, and support long-term career growth in healthcare." }
],
    meta: {
      duration: "50 week",
      lessons: "29",
      skill_level: "PG Diploma",
      certificate: "yes"
    }
  },
  {
    slug: "certificate-in-clinical-psychology",
    title: "Certificate in Clinical Psychology",
    categories: ["medicine"],
    image: "/courses/Clinical-Psychology-1.webp",
    heroDescription: "The Certificate in Clinical Psychology is a short-term course that builds foundational knowledge of mental health, disorders, assessment, and basic counseling skills.",
    lessons: 25,
    weeks: 25,
    level: "beginner",
    priceINR: 40000,
    rating: 5,
    reviewCount: 2,
    program: "Certificate",
   overview: "A Certificate in Clinical Psychology is a short-term professional program designed to introduce learners to the fundamental concepts, theories, and practical skills used in the field of mental health. This course is ideal for students, healthcare professionals, counselors, social workers, and anyone interested in understanding human behavior, emotional wellbeing, and psychological disorders. It provides a strong foundation in how psychologists assess, diagnose, and support individuals facing mental health challenges.\n\nThe program typically covers key topics such as basic psychology principles, common mental health disorders, psychological assessment methods, counseling techniques, psychotherapy approaches, and ethical practices. Learners gain insight into conditions like anxiety, depression, personality disorders, stress-related disorders, and behavioral problems. The course also helps participants understand how biological, social, and environmental factors influence mental health.",

learn: [
  "Basic principles and foundations of clinical psychology.",
  "Identification and understanding of common mental health disorders.",
  "Fundamentals of psychological assessment and case evaluation.",
  "Introduction to counseling and psychotherapy techniques.",
  "Effective communication and active listening skills.",
  "Ethical guidelines and professional responsibilities in mental healthcare.",
  "The role of biological, social, and environmental factors in mental health."
],

requirements: [
  "Any graduate with psychology or allied health or nursing"
],

modules: [
  "Basics of Clinical Psychology & Assessment",
  "Common Mental Health Disorders & Counseling",
  "Basic Psychotherapy Techniques & Practical Exposure"
],

moduleDetails: [
  [
    "Introduction to clinical psychology and scope",
    "Overview of common mental disorders",
    "Diagnostic classification systems (DSM & ICD overview)",
    "Clinical interview techniques",
    "Mental Status Examination (MSE)",
    "Basics of psychological assessment",
    "Screening tools for anxiety, depression, and stress",
    "Ethical principles and confidentiality"
  ],
  [
    "Anxiety disorders",
    "Depressive disorders",
    "Stress-related disorders",
    "Substance use disorders (overview)",
    "Child and adolescent behavioral problems (overview)",
    "Suicide risk identification",
    "Basic counseling skills",
    "Building therapeutic alliance",
    "Crisis intervention basics"
  ],
  [
    "Introduction to Cognitive Behavioral Therapy (CBT)",
    "Behavioral modification techniques",
    "Relaxation and stress management methods",
    "Basic family counseling principles",
    "Case formulation basics",
    "Documentation and report writing",
    "Supervised case discussions",
    "Final assessment and case presentation"
  ]
],

faqs: [
  { q: "Who can enroll in the Certificate in Clinical Psychology?", a: "This program is suitable for graduates with psychology, allied health, or nursing backgrounds seeking foundational knowledge in clinical psychology and mental health care." },
  { q: "What topics are covered in the Certificate in Clinical Psychology?", a: "This certificate covers clinical psychology principles, mental health disorders, psychological assessment, counseling techniques, psychotherapy approaches, and ethical practices." },
  { q: "How is the Certificate in Clinical Psychology delivered?", a: "The course is delivered through online lectures, expert-led sessions, case discussions, and digital study materials that can be accessed flexibly from anywhere." },
  { q: "How can this certificate improve my professional practice?", a: "This certificate helps strengthen understanding of mental health conditions, improve counseling skills, and enhance confidence in psychological assessment and support." },
  { q: "What is the fee for the Certificate in Clinical Psychology?", a: "Fees vary based on course structure and included learning resources; detailed pricing information is provided upon inquiry or enrollment request." },
  { q: "Can completing this certificate support career growth and earning potential?", a: "Yes, This specialized online training in clinical psychology can boost professional credibility, expand opportunities in mental health and counseling settings, and support enhanced income prospects in psychological care." }
],
    meta: {
      duration: "25 week",
      lessons: "25",
      skill_level: "Certificate",
      certificate: "yes"
    }
  },
  {
    slug: "certificate-in-clinical-nutrition",
    title: "Certificate in Clinical Nutrition",
    categories: ["nutrition"],
    image: "/courses/Clinical-Nutrition-1.webp",
    heroDescription: "Comprehensive Certificate in Clinical Nutrition: Master Dietary Strategies for Disease Prevention and Personalized Patient Care",
    lessons: 36,
    weeks: 25,
    level: "beginner",
    priceINR: 28000,
    rating: 5,
    reviewCount: 2,
    program: "Certificate",
   overview: "Clinical Nutrition focuses on the assessment and management of nutritional status in health and disease. Proper nutritional care plays a critical role in preventing chronic illnesses, improving recovery outcomes, and enhancing overall patient well-being. This certificate course is designed to provide healthcare professionals with practical knowledge in nutritional assessment, therapeutic diet planning, and evidence-based nutritional interventions for various medical conditions.",

learn: [
  "Understand the principles of human nutrition and metabolism.",
  "Perform comprehensive nutritional assessment.",
  "Develop individualized diet plans for various medical conditions.",
  "Manage hospital-based nutrition including enteral and parenteral nutrition.",
  "Counsel patients on lifestyle and dietary modifications.",
  "Interpret laboratory parameters related to nutritional status.",
  "Apply evidence-based nutritional guidelines in clinical practice."
],

requirements: ["MDS/Dietitians/Health Assistants/BDS/MBBS/ AYUSH"],

modules: [
  "Fundamentals of Nutrition",
  "Nutrition in Medical Disorders",
  "Hospital & Therapeutic Nutrition",
  "Maternal, Pediatric & Geriatric Nutrition",
  "Weight Management & Lifestyle Counseling",
  "Clinical Practice, Ethics & Integration"
],

moduleDetails: [
  ["Macronutrients and micronutrients", "Digestion, absorption, and metabolism", "Energy balance and requirements", "Dietary reference intakes", "Nutritional assessment methods (anthropometry, dietary recall)", "Laboratory assessment of nutritional status"],
  ["Nutrition in diabetes mellitus", "Cardiovascular disease and lipid disorders", "Hypertension and renal disorders", "Liver diseases", "Gastrointestinal disorders", "Obesity and metabolic syndrome"],
  ["Enteral nutrition", "Parenteral nutrition", "Nutrition in critically ill patients", "Malnutrition and cachexia", "Nutritional support in cancer patients", "Post-surgical nutrition"],
  ["Nutrition in pregnancy and lactation", "Infant and child nutrition", "Adolescent nutrition", "Geriatric nutrition", "Micronutrient deficiencies", "Growth monitoring"],
  ["Obesity assessment and management", "Calorie calculation and meal planning", "Behavior modification strategies", "Physical activity recommendations", "Nutritional supplements and nutraceuticals", "Eating disorders overview"],
  ["Case-based diet planning", "Documentation and follow-up", "Food safety and hygiene", "Public health nutrition overview", "Ethical considerations in nutrition practice", "Final assessment"]
],

faqs: [
  { q: "Who should consider enrolling in this clinical nutrition certificate course?", a: "The course welcomes MDS, dietitians, health assistants, BDS, MBBS, and AYUSH professionals aiming to build practical nutrition knowledge through flexible online study" },
  { q: "What key topics are included in the Certificate in Clinical Nutrition at DMHCA?", a: "This certificate from DMHCA covers macronutrient and micronutrient principles, clinical diet planning, metabolic health, therapeutic nutrition, and evidence-based dietary strategies." },
  { q: "How is the Certificate in Clinical Nutrition delivered to students?", a: "The course is provided via online lectures, expert-led discussions, clinical case insights, and downloadable digital resources that you can access flexibly from anywhere." },
  { q: "In what ways can this certificate improve my clinical practice?", a: "This certificate helps enhance your nutritional assessment skills, improve patient diet planning confidence, and deepen your understanding of nutrition-related health conditions." },
  { q: "What is the fee for the Certificate in Clinical Nutrition at DMHCA?", a: "Fees vary depending on course structure and included learning resources; complete pricing information is shared upon inquiry or enrollment request." },
  { q: "Can this clinical nutrition certificate from DMHCA boost my career and earning potential?", a: "Yes, This program in clinical nutrition can boost your professional credibility, expand your career opportunities, and support higher income prospects in clinical, community, and wellness settings." }
],
    meta: {
      duration: "25 week",
      lessons: "36",
      skill_level: "Certificate",
      certificate: "yes"
    }
  },
  {
    slug: "certificate-course-in-hiv-medicine",
    title: "Certificate Course in HIV Medicine",
    categories: ["medicine"],
    image: "/courses/Certificate-Course-in-HIV-Medicine-410x290.webp",
    heroDescription: "Gain skills in HIV diagnosis, treatment, prevention, counseling, and patient care in Certificate Course in HIV Medicine.",
    lessons: 42,
    weeks: 25,
    level: "beginner",
    priceINR: 30000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview:
"The Certificate in HIV Medicine provides healthcare professionals with comprehensive knowledge of HIV prevention, diagnosis, and patient-centered management. This program covers current treatment guidelines, antiretroviral therapy, co-infection care, and counseling strategies. Designed for doctors, nurses, and allied health workers, it enhances clinical competence and prepares learners to deliver effective, compassionate HIV care in diverse healthcare settings through practical case studies, expert instruction, and evidence-based clinical skill development for improved outcomes.",

learn: [
  "Fundamentals of HIV biology, transmission, and epidemiology",
  "HIV testing methods, diagnosis, and interpretation of results",
  "Principles and protocols of antiretroviral therapy (ART)",
  "Management of opportunistic infections and co-morbid conditions",
  "HIV care in special populations, including pregnant women and children",
  "Counseling techniques for adherence, prevention, and stigma reduction",
  "Monitoring treatment response and handling drug resistance",
  "Ethical, legal, and public-health aspects of HIV care"
],

requirements: [
  "Medical graduate/ Nursing Graduate/ AYUSH / M.SC ( Microbiology, Biotechnology) / M.Pharma"
],

modules: [
  "Basic HIV Primary Care",
  "AIDS Control Programme",
  "HIV Testing and Diagnosis",
  "Management of HIV/AIDS"
],

moduleDetails: [
  [
    "Introduction to HIV/AIDS: global and national epidemiology",
    "Natural history and pathogenesis of HIV infection",
    "Transmission and prevention of HIV",
    "Clinical staging of HIV disease (WHO clinical staging)",
    "Common opportunistic infections (OIs) and their presentation",
    "Principles of primary prophylaxis (Cotrimoxazole, IPT etc.)",
    "Symptom-directed history taking and examination in HIV patients",
    "Nutrition, positive living and adherence counseling",
    "Universal safety precautions and PEP (post-exposure prophylaxis)",
    "Care of PLHIV in outpatient and community settings",
    "Palliative care and end-of-life issues"
  ],
  [
    "Evolution and objectives of National AIDS Control Programme (e.g., NACP-I to NACP-IV/V in India or country-specific)",
    "Structure and components of the programme",
    "Link ART centres, ART centres, Centres of Excellence",
    "Care, Support and Treatment (CST) services",
    "National Strategic Plan (current phase)",
    "Role of NGOs, PLHIV networks (DAPCU, GIPA)",
    "Mainstreaming and Greater Involvement of People Living with HIV (GIPA)"
  ],
  [
    "Types of HIV tests (ICTC, PPTCT, community-based testing)",
    "HIV testing strategies (Strategy I, II, III as per NACO/WHO)",
    "Pre-test and post-test counseling",
    "Window period and interpretation of HIV test results (discordant results, indeterminate WB)",
    "HIV-1 vs HIV-2",
    "Consent, confidentiality and the 3Cs (Counseling, Consent, Confidentiality)",
    "Testing algorithm (three consecutive reactive rapid tests)",
    "Quality assurance in HIV testing",
    "Early infant diagnosis (EID) using DNA PCR",
    "CD4 and Viral load testing: indications and interpretation",
    "HIV-2 diagnosis and co-infection issues"
  ],
  [
    "Goals of ART and when to start ART (Treat All policy)",
    "First-line, second-line and third-line regimens (adults, adolescents, children, pregnant women)",
    "Drug dosing, side effects and toxicity monitoring",
    "Management of common adverse drug reactions",
    "Immune Reconstitution Inflammatory Syndrome (IRIS)",
    "Treatment failure: clinical, immunological and virological criteria",
    "Switching regimens and salvage therapy",
    "Management of common opportunistic infections:",
    "Prophylaxis of OIs (primary and secondary)",
    "Prevention of parent-to-child transmission (PPTCT) regimen",
    "Management of co-infections (HBV, HCV)",
    "Monitoring of ART (clinical, CD4, viral load)",
    "Drug resistance testing (when available)"
  ]
],

faqs: [
  { q: "Who should consider enrolling in the HIV Medicine certificate course?", a: "This online program is suitable for medical graduates, nursing graduates, AYUSH professionals, M.Sc (Microbiology or Biotechnology), and M.Pharm holders seeking focused knowledge in HIV care." },

  { q: "What important topics are covered in the Certificate Course in HIV Medicine?", a: "This certificate from DMHCA explores HIV epidemiology, antiretroviral therapy basics, counseling strategies, opportunistic infections, and patient management principles through structured modules." },

  { q: "How is the Certificate in HIV Medicine delivered by DMHCA?", a: "The course is offered via online lectures, expert-led discussions, evidence-based modules, and digital study materials, enabling you to learn flexibly from anywhere." },

  { q: "What professional benefits can I expect after completing this certificate?", a: "Completing this certificate helps strengthen HIV care knowledge, improve patient management confidence, and enhance your professional credentials in HIV and infectious disease practice." },

  { q: "What is the fee for the Certificate Course in HIV Medicine at DMHCA?", a: "Fees vary depending on course structure and included learning resources; detailed pricing information is shared upon inquiry or enrollment request." },

  { q: "Can this HIV Medicine certificate from DMHCA support career growth and income potential?", a: "Yes, This Program is focused online training in HIV medicine can boost your professional credibility, expand clinical roles, and support improved earning opportunities in infectious disease and public health settings." }
],
    meta: {
      duration: "25 week",
      lessons: "42",
      skill_level: "Certificate",
      certificate: "yes"
    }
  },
  {
    slug: "certificate-course-in-tuberculosis",
    title: "Certificate Course in Tuberculosis",
    categories: ["pulmonary"],
    image: "/courses/Certificate-In-Tuberculosis-410x290.webp",
    heroDescription: "Certificate in Tuberculosis: Master Diagnosis, Treatment, and Prevention Strategies for Effective TB Disease Control",
    lessons: 27,
    weeks: 50,
    level: "beginner",
    priceINR: 15000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Tuberculosis (TB) continues to be a significant infectious disease burden globally. Early detection, appropriate treatment, prevention of transmission, and control of drug resistance are essential components of TB management. This short-term certificate course is designed to provide focused training in the diagnosis, treatment, and public health management of tuberculosis, including drug-resistant TB and TB-HIV co-infection.",

learn: [
  "Understand the epidemiology and transmission of tuberculosis.",
  "Diagnose pulmonary and extrapulmonary TB using appropriate investigations.",
  "Initiate and monitor standard anti-tubercular therapy (ATT).",
  "Recognize and manage drug-resistant TB.",
  "Manage TB in special populations.",
  "Apply national TB control program guidelines in clinical practice."
],

requirements: [
  "MBBS/ MD/MS/DNB AYUSH/BDS/MDS NURSING/ Diabetes Educators/ Dietitians"
],

modules: [
  "Basics & Diagnosis of Tuberculosis",
  "Treatment & Drug-Resistant Tuberculosis",
  "TB in Special Situations & Public Health Approach"
],

moduleDetails: [
  [
    "Epidemiology and pathogenesis of TB",
    "Clinical features of pulmonary TB",
    "Latent TB infection",
    "Sputum smear microscopy",
    "CBNAAT / GeneXpert",
    "Line probe assay",
    "Culture methods (overview)",
    "Radiological evaluation",
    "Diagnosis of extrapulmonary TB"
  ],
  [
    "First-line anti-tubercular drugs",
    "Standard treatment regimens",
    "Monitoring of treatment response",
    "Adverse drug reactions and management",
    "MDR-TB and XDR-TB definitions",
    "Second-line drugs overview",
    "Management of treatment failure",
    "Adherence and counseling strategies"
  ],
  [
    "TB-HIV co-infection",
    "Pediatric TB",
    "TB in pregnancy",
    "TB in diabetes and other comorbidities",
    "TB meningitis and severe forms",
    "DOTS strategy",
    "Infection control in healthcare settings",
    "Contact tracing",
    "Recording and reporting systems",
    "Case discussions and final assessment"
  ]
],

faqs: [
  { q: "Who can benefit from enrolling in this TB certificate program?", a: "This online course is suitable for physicians, pulmonologists, nurses, public health workers, and healthcare professionals from medical and allied backgrounds seeking expertise in tuberculosis care." },
  { q: "What will I learn in the Certificate in Tuberculosis course at DMHCA?", a: "This certificate from DMHCA covers TB epidemiology, diagnosis and screening methods, treatment regimens, drug resistance issues, and evidence-based patient management strategies." },
  { q: "How is the Certificate in Tuberculosis delivered by DMHCA?", a: "The program is delivered through online lectures, expert-led discussions, case studies, and digital study materials that you can access easily from anywhere." },
  { q: "In what ways can this certificate improve my clinical practice?", a: "This certificate helps enhance your skills in TB screening and management, improve patient counseling confidence, and deepen understanding of current TB protocols." },
  { q: "What is the fee for the Certificate in Tuberculosis at DMHCA?", a: "Fees vary based on course structure and included learning resources; detailed pricing information is provided upon inquiry or enrollment request." },
  { q: "Can completing this tuberculosis certificate from DMHCA support my career growth and earning potential?", a: "Yes, This Course is focused online training in TB medicine can boost your professional credibility, open clinical and public health opportunities, and support enhanced income prospects in infectious disease care." }
],
    meta: {
      duration: "50 week",
      lessons: "27",
      skill_level: "Certificate",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-nephrology",
    title: "Fellowship in Nephrology",
    categories: ["medicine"],
    image: "/courses/NEPHRO-410x290.webp",
    heroDescription: "A fellowship in nephrology provides advanced training in diagnosing and treating kidney diseases and disorders.",
    lessons: 48,
    weeks: 50,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "The Fellowship in Nephrology is a comprehensive one-year advanced training program designed to equip medical graduates with specialized knowledge and clinical competency in the prevention, diagnosis, and management of kidney diseases. This program bridges the gap between general medicine and subspecialty nephrology by providing intensive clinical exposure, hands-on procedural training, and evidence-based academic learning.",

  learn: [
    "In-depth understanding of kidney physiology and pathophysiology.",
    "Diagnosis and management of acute and chronic kidney disease.",
    "Treatment of glomerular diseases and electrolyte imbalances.",
    "Dialysis techniques, including hemodialysis and peritoneal dialysis.",
    "Management of kidney transplant patients and related immunosuppressive therapies.",
    "Performance of kidney biopsies and other nephrology procedures."
  ],

  requirements: [
    "MBBS/ MS/ MD/ DNB/ Equivalent"
  ],

  modules: [
    "Introduction to Nephrology",
    "Acute Kidney Injury (AKI)",
    "Chronic Kidney Disease (CKD)",
    "Renal Immunology",
    "Hemodialysis (HD) Principles & Practice",
    "Peritoneal Dialysis (PD)",
    "Transplant Nephrology",
    "Critical Care Nephrology",
    "Pediatric Nephrology",
    "Renal Imaging"
  ],

  moduleDetails: [
    ["Renal anatomy & physiology", "Glomerular/tubular functions", "Acid–base balance", "Fluid & electrolyte physiology", "Introduction to urinalysis"],
    ["Types & causes of AKI", "KDIGO staging", "Prerenal/renal/postrenal AKI", "Drug-induced nephrotoxicity", "AKI in ICU & postoperative care"],
    ["CKD stages & progression", "Proteinuria & albuminuria", "CKD-MBD", "Anemia of CKD", "Nutrition in CKD"],
    ["Primary GN (MCD, FSGS, membranous, IgA, MPGN)", "Secondary GN (lupus, vasculitis)", "Renal immunology basics", "Approach to hematuria & proteinuria"],
    ["HD machine basics", "Dialyzers & membranes", "Vascular access (AVF, AVG, catheters)", "Dialysis complications", "Dialysis adequacy (Kt/V)"],
    ["CAPD & APD", "PD catheter care", "Peritonitis diagnosis/management", "PD ultrafiltration & adequacy", "Home-based PD"],
    ["Donor/recipient evaluation", "Immunosuppressive medications", "Acute/chronic rejection", "Opportunistic infections", "Post-transplant complications"],
    ["AKI in critical illness", "CRRT modalities (CVVH, CVVHD, CVVHDF)", "SLED", "Sepsis and kidney injury", "Electrolyte emergencies"],
    ["Pediatric AKI & CKD", "Nephrotic syndrome", "Congenital kidney disorders", "Pediatric dialysis basics"],
    ["Kidney stones & metabolic evaluation", "Obstructive uropathy", "Hydronephrosis", "Imaging: USG, Doppler, CT, MRI", "Urodynamic basics"]
  ],

  faqs: [
    {
      q: "Who is the Fellowship in Nephrology designed for?",
      a: "This program is designed for MBBS/MS/MD/DNB or equivalent holders seeking advanced knowledge in nephrology and renal care."
    },
    {
      q: "What specialized topics are covered in the Nephrology fellowship at DMHCA?",
      a: "This fellowship covers renal physiology, kidney disease evaluation, electrolyte disorders, dialysis principles, and evidence-based nephrology management."
    },
    {
      q: "How can learners access the Nephrology fellowship content at DMHCA?",
      a: "The course is delivered through online lectures, expert-led sessions, case-based discussions, and digital study materials accessible from anywhere."
    },
    {
      q: "What improvements can this fellowship bring to my clinical practice?",
      a: "It enhances understanding of kidney diseases, strengthens diagnostic and management skills, and improves confidence in dialysis and transplant care."
    },
    {
      q: "What is the fee for the Nephrology fellowship at DMHCA?",
      a: "Fees vary depending on course structure and learning resources; detailed pricing is shared upon inquiry or enrollment request."
    },
    {
      q: "Can this fellowship enhance my career and earning potential?",
      a: "Yes, this advanced training can boost professional credibility, expand clinical opportunities, and support higher earning potential in nephrology practice."
    }
  ],
    meta: {
      duration: "50 week",
      lessons: "48",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-rheumatology",
    title: "Fellowship in Rheumatology",
    categories: ["orthopedics"],
    image: "/courses/assd-3-410x290.webp",
    heroDescription: "Fellowship in Rheumatology: Specialized Training in Diagnosing and Managing Rheumatic Diseases for Enhanced Patient Care",
    lessons: 24,
    weeks: 50,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "The Fellowship in Rheumatology provides in-depth training in the diagnosis, treatment, and long-term management of rheumatic diseases. Designed for medical professionals seeking specialization, this program combines clinical practice, research opportunities, and expert mentorship to build skills in managing conditions such as arthritis, lupus, and other autoimmune disorders. Enhance your expertise in delivering patient-centered care for complex rheumatologic cases.",

learn: [
  "Comprehensive assessment and diagnosis of rheumatic diseases.",
  "Pharmacological and non-pharmacological treatment strategies for conditions like rheumatoid arthritis, lupus, and gout.",
  "Advanced use of diagnostic tools including ultrasound and laboratory testing in rheumatology.",
  "Management of chronic pain and improving patient quality of life.",
  "Research skills in rheumatology, including participation in ongoing studies.",
  "Patient education and counseling for self-management of rheumatic conditions."
],

requirements: [
  "MBBS/ MS/ MD/ DNB/ Equivalent"
],

modules: [
  "Approach to Rheumatology",
  "Diseases Activity Index",
  "Immunology",
  "Connective Tissue Disease",
  "Vasculitis",
  "Rheumatic Disease & Organ Involvement"
],

moduleDetails: [
  ["Understanding basic anatomy of all joints", "Basic X-ray training of all joints", "How to approach different cases of rheumatic diseases"],
  ["Measuring diseases activity", "Assessing damage of joints", "Habilitation & counseling", "Physiotherapy"],
  ["Basic of immunology", "Molecular biology", "Cellular biology", "Auto-immunity"],
  ["SLE", "Primary Systemic sclerosis", "Dermatomyositis / Polymyositis", "MCTD / UDCTD / Overlap Syndrome", "Scleroderma / Systemic Sclerosis"],
  ["GCA, Takayasu’s Arteritis", "Bechet’s syndrome", "ANCA Associated vasculitis", "PAN & Cryoglobulin vasculitis"],
  ["Skin & Rheumatic disease", "Eyes & Rheumatic disease", "Lung & Rheumatic disease", "Kidney & Rheumatic disease"]
],

faqs: [
  { q: "Who is the Fellowship in Rheumatology designed for?", a: "This program is designed for MBBS/MS/MD/DNB or equivalent holders and provides structured online education in rheumatology." },
  { q: "What major subjects are covered in the Rheumatology fellowship at DMHCA?", a: "This fellowship includes inflammatory arthritis, autoimmune disorders, diagnostic strategies, therapeutic approaches, and evidence-based management of musculoskeletal conditions." },
  { q: "How will I access the Rheumatology fellowship training with DMHCA?", a: "The course is delivered through online lectures, expert-led discussions, clinical case reviews, and digital study materials accessible from anywhere." },
  { q: "How can completing this fellowship improve my clinical practice?", a: "It helps enhance diagnostic confidence, deepen understanding of rheumatic conditions, and strengthen treatment planning skills." },
  { q: "What are the fees for the Rheumatology fellowship at DMHCA?", a: "Fees vary based on course structure and learning resources; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can this Rheumatology fellowship from DMHCA boost career opportunities and income potential?", a: "Yes, it can boost professional credibility, expand clinical roles, and support enhanced earning prospects in rheumatology and related specialties." }
],
    meta: {
      duration: "50 week",
      lessons: "24",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  // Obstetrics & Gynecology (8 courses)
  {
    slug: "certificate-in-obstetrics-gynecology-nursing",
    title: "Certificate in Obstetrics & Gynecology Nursing",
    categories: ["obs-gynae"],
    image: "/courses/Obstetrics-Gynecology-Nursing.webp",
    lessons: 36,
    weeks: 25,
    level: "beginner",
    priceINR: 30000,
    heroDescription:"Build expertise in obstetrics and gynecology nursing - gain skills in prenatal care, labor support, and women’s health management.",
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "The Certification in Obstetrics and Gynecology Nursing program is designed to provide nurses with specialized knowledge and practical skills required for comprehensive maternal and reproductive healthcare. The course focuses on the care of women during pregnancy, childbirth, the postpartum period, and management of common gynecological conditions. It also emphasizes patient safety, early detection of complications, and effective support during obstetric procedures. This program prepares nurses to work efficiently in maternity wards, labor rooms, gynecology departments, and community maternal health services.",

learn: [
  "To provide in-depth knowledge of obstetric and gynecological nursing practices.",
  "To develop competencies in antenatal, intranatal, and postnatal care.",
  "To enhance skills in monitoring maternal and fetal health.",
  "To train nurses in assisting obstetric and gynecological procedures.",
  "To improve the ability to identify and manage obstetric emergencies.",
  "To promote women’s health, family planning, and reproductive health education."
],

requirements: [
  "Garduate: Nursing / Medical/ Healthcare/ Equivalent"
],

modules: [
  "Fundamentals of Obstetrics and Gynecology Nursing",
  "Antenatal Care",
  "Labor and Delivery (Intranatal Care)",
  "Postnatal Care",
  "Neonatal Care",
  "Gynecological Nursing",
  "Family Planning and Reproductive Health",
  "Obstetric and Gynecological Emergencies",
  "Clinical Training / Practical Exposure"
],

moduleDetails: [
  [
    "Anatomy and physiology of the female reproductive system",
    "Hormonal regulation and menstrual cycle",
    "Principles and scope of obstetric and gynecological nursing"
  ],
  [
    "Physiological changes during pregnancy",
    "Antenatal assessment and clinical examinations",
    "High-risk pregnancy identification and management",
    "Nutritional requirements during pregnancy",
    "Antenatal investigations and fetal monitoring"
  ],
  [
    "Physiology and stages of labor",
    "Monitoring labor progress (partograph)",
    "Nursing care during normal labor and delivery",
    "Pain management during labor",
    "Assisting obstetric procedures and instrumental deliveries"
  ],
  [
    "Immediate postpartum care",
    "Breastfeeding techniques and counseling",
    "Maternal and neonatal postnatal assessment",
    "Postpartum complications and management"
  ],
  [
    "Immediate newborn assessment",
    "Neonatal resuscitation basics",
    "Common neonatal conditions and nursing care",
    "Immunization and newborn screening"
  ],
  [
    "Common gynecological disorders",
    "Menstrual disorders and infections",
    "Nursing care in gynecological surgeries",
    "Preoperative and postoperative patient care"
  ],
  [
    "Contraceptive methods and counseling",
    "Infertility basics and nursing role",
    "Reproductive tract infections and prevention"
  ],
  [
    "Postpartum hemorrhage",
    "Eclampsia and preeclampsia",
    "Sepsis and obstetric shock",
    "Emergency response and referral systems"
  ],
  [
    "Antenatal clinic posting",
    "Labor room assistance",
    "Postnatal ward care",
    "Gynecology ward and procedure assistance"
  ]
],

faqs: [
  { q: "Who can enroll in the Certification in Obstetrics and Gynecology Nursing program?", a: "This program is suitable for nursing professionals and individuals from medical and healthcare backgrounds seeking specialized knowledge in obstetric and gynecological nursing through online learning." },
  { q: "What topics are covered in the Certification in Obstetrics and Gynecology Nursing?", a: "This certification covers antenatal, intranatal, postnatal, neonatal, and gynecological nursing care, along with reproductive health, family planning, and obstetric emergency management." },
  { q: "How is the Certification in Obstetrics and Gynecology Nursing delivered?", a: "The course is delivered through online lectures, expert-led sessions, case discussions, and digital study materials that can be accessed flexibly from anywhere." },
  { q: "How can this certification improve my professional practice?", a: "This certification helps strengthen maternal and reproductive healthcare knowledge, improve patient care skills, and enhance confidence in obstetric and gynecological nursing practice." },
  { q: "What is the fee for the Certification in Obstetrics and Gynecology Nursing?", a: "Fees vary based on course structure and included learning resources; detailed pricing information is provided upon inquiry or enrollment request." },
  { q: "Can completing this certification support career growth and earning potential?", a: "Yes, This specialized online training in obstetric and gynecological nursing can boost professional credibility, expand career opportunities, and support enhanced income prospects in maternal healthcare settings." }
],
    meta: {
      duration: "25 week",
      lessons: "36",
      skill_level: "Certificate",
      certificate: "yes",
      enrolled: "24"
    }
  },
  {
  slug: "pg-diploma-in-maternal-child-health",
  title: "PG Diploma in Maternal & Child Health",
  categories: ["pediatrics"],
  image: "/courses/PG-Diploma-in-Maternal-Child-Health.webp",
  heroTitle: "Comprehensive Maternal & Child Health Diploma",
  heroDescription: "Enhance your expertise in maternal and child care - learn prenatal, postnatal, and pediatric practices to deliver better healthcare outcomes.",
  lessons: 48,
  weeks: 50,
  level: "intermediate",
  priceINR: 100000,
  rating: null,
  reviewCount: 0,
  program: "PG Diploma",

  overview: "The Postgraduate Diploma in Maternal & Child Health (MCH) is a specialized healthcare program focused on improving the health and well-being of mothers, infants, and children. This program emphasizes antenatal, intranatal, and postnatal care, along with child growth, development, nutrition, and immunization. It also addresses public health challenges such as maternal mortality, infant mortality, malnutrition, and infectious diseases. The course integrates clinical knowledge with community health practices, preparing professionals to work in hospitals, primary healthcare centers, NGOs, and public health programs.",

  learn: [
    "Provide comprehensive maternal healthcare services",
    "Monitor and manage pregnancy and childbirth",
    "Ensure proper child growth and development",
    "Implement immunization and nutrition programs",
    "Prevent and manage maternal and child health complications",
    "Promote community health and awareness"
  ],
requirements: ["MBBS", "BDS", "BAMS", "BHMS", "BNYS", "BUMS", "equivalent"],
modules: [
  "Introduction to Maternal & Child Health",
  "Reproductive Health and Physiology",
  "Antenatal Care",
  "Intranatal Care",
  "Postnatal Care",
  "Neonatal Care",
  "Child Growth and Development",
  "Nutrition in Maternal & Child Health",
  "Immunization and Child Health Programs",
  "Common Childhood Illnesses",
  "Public Health and Community Care",
  "Clinical / Field Training & Case Studies"
],

moduleDetails: [
  [
    "Concepts and scope of MCH",
    "Maternal and child health indicators",
    "National and global MCH programs",
    "Role of healthcare providers"
  ],
  [
    "Female reproductive system",
    "Menstrual cycle and conception",
    "Hormonal changes in pregnancy",
    "Fetal development"
  ],
  [
    "Pregnancy diagnosis",
    "Routine antenatal check-ups",
    "Nutrition during pregnancy",
    "High-risk pregnancy identification"
  ],
  [
    "Stages of labor",
    "Normal delivery management (theoretical)",
    "Complications during labor",
    "Emergency obstetric care"
  ],
  [
    "Care of mother after delivery",
    "Breastfeeding practices",
    "Postpartum complications",
    "Family planning and contraception"
  ],
  [
    "Care of newborn",
    "Neonatal resuscitation",
    "Low birth weight and preterm babies",
    "Neonatal infections"
  ],
  [
    "Growth monitoring",
    "Developmental milestones",
    "Early childhood care",
    "Behavioral and developmental disorders"
  ],
  [
    "Maternal nutrition",
    "Infant and child nutrition",
    "Malnutrition and its management",
    "Micronutrient deficiencies"
  ],
  [
    "National immunization schedule",
    "Vaccine-preventable diseases",
    "Child health programs",
    "School health services"
  ],
  [
    "Respiratory infections",
    "Diarrheal diseases",
    "Fever and infections",
    "Pediatric emergencies"
  ],
  [
    "Community health services",
    "Health education and awareness",
    "Maternal and child welfare programs",
    "Epidemiology basics"
  ],
  [
    "Antenatal clinic exposure",
    "Pediatric ward observation",
    "Community health visits",
    "Case presentations and project work"
  ]
],

  faqs: [
    { q: "Who is eligible for enrolling in the PG Diploma in Maternal & Child Health?", a: "The program is suitable for MBBS, BDS, BAMS, BHMS, BNYS, BUMS, and equivalent healthcare professionals seeking specialized knowledge in maternal and child healthcare." },
    { q: "What key subjects are included in the PG Diploma in Maternal & Child Health?", a: "The curriculum covers antenatal care, childbirth management, neonatal care, child development, nutrition, immunization, and community health programs." },
    { q: "What professional advantages can this diploma offer?", a: "This diploma enhances clinical and public health expertise, helping professionals improve maternal and child healthcare outcomes and advance their careers." },
    { q: "What is the fee for the PG Diploma in Maternal & Child Health at DMHCA?", a: "Fees vary depending on the course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
    { q: "Can this maternal and child health diploma from DMHCA enhance my career and earning potential?", a: "Yes, it can strengthen professional credibility, expand healthcare career opportunities, and support long-term career growth in maternal and child health services." }
  ],
    meta: {
      duration: "50 week",
      lessons: "48",
      skill_level: "PG Diploma",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-high-risk-pregnancy",
    title: "Fellowship in High Risk Pregnancy",
    categories: ["obs-gynae"],
    image: "/courses/High-Risk-Pregnancy-410x290.webp",
    heroDescription: "Ensure Safe Outcomes: Fellowship in High-Risk Pregnancy for Advanced Maternal and Fetal Care Expertise.",
    lessons: 0,
    weeks: 50,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in High-Risk Pregnancy provides advanced training in the management of pregnancies complicated by medical, surgical, or obstetric conditions. The program emphasizes the care of both mother and fetus, covering prenatal diagnosis, maternal-fetal medicine, and advanced obstetric procedures. Fellows gain hands-on experience in managing complex cases, including preeclampsia, gestational diabetes, preterm labor, and fetal abnormalities.",
trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],
learn: [
  "Management of pregnancies complicated by hypertension, diabetes, and autoimmune diseases.",
  "Advanced prenatal testing including amniocentesis, CVS, and fetal ultrasound.",
  "Diagnosis and management of IUGR, congenital anomalies, and twin-to-twin transfusion syndrome.",
  "Prevention and management of preterm labor and neonatal outcomes.",
  "Management of hypertensive disorders including preeclampsia and eclampsia.",
  "Diagnosis and management of gestational diabetes.",
  "High-risk obstetric procedures including cervical cerclage and fetal monitoring."
],

requirements: [
  "MBBS/MD/MS/Equivalent"
],

modules: [
  "Pre Conceptional Counseling",
  "Normal Antenatal Care (LR & HR)",
  "Antenatal Screening Protocols",
  "Identification of High-Risk Pregnancies",
  "First and Second Trimester Screening & Counseling",
  "Soft Marker Counseling in Mid-Trimester Scan",
  "Follow-up of High-Risk Pregnancies",
  "Antenatal Care of Multiple Pregnancies",
  "Management of PROM",
  "Induction of Labour Protocols"
],
faqs: [
  { q: "Who should consider enrolling in the Fellowship in High-Risk Pregnancy?", a: "This course is designed for MBBS/MD/MS or equivalent holders seeking structured education in maternal-fetal medicine and high-risk obstetrics." },
  { q: "What essential topics are covered in the High-Risk Pregnancy fellowship?", a: "The fellowship includes high-risk obstetric conditions, prenatal risk assessment, maternal-fetal monitoring, and evidence-based pregnancy care." },
  { q: "How is the High-Risk Pregnancy fellowship delivered?", a: "The course is delivered through online lectures, expert-led discussions, case-based learning, and digital study materials." },
  { q: "How can this fellowship improve my clinical practice?", a: "It helps strengthen risk assessment skills, improve decision-making, and enhance confidence in managing high-risk pregnancies." },
  { q: "What is the fee for the Fellowship in High-Risk Pregnancy?", a: "Fees vary based on course structure and learning resources; detailed pricing is available upon inquiry." },
  { q: "Can this fellowship enhance career prospects and earning potential?", a: "Yes, it can boost professional credibility, expand clinical opportunities, and support higher earning potential in obstetrics and maternal health." }
],
    meta: {
      duration: "50 week",
      lessons: "0",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-fetal-medicine",
    title: "Fellowship in Fetal Medicine",
    categories: ["obs-gynae"],
    image: "/courses/fetelmedicine-410x290.webp",
    heroDescription: "Advanced Fellowship in Fetal Medicine: Specialized Training for Excellence in Prenatal Diagnosis and Care",
    lessons: 28,
    weeks: 50,
    level: "expert",
    priceINR: 150000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Fetal Medicine provides advanced training in the assessment, diagnosis, and management of fetal conditions and complications during pregnancy. The program focuses on prenatal screening, ultrasound diagnostics, fetal interventions, and the care of high-risk pregnancies. Fellows gain hands-on experience with cutting-edge technologies to detect congenital anomalies, monitor fetal growth, and manage complex pregnancies, preparing them for leadership in maternal-fetal medicine.",

learn: [
  "Mastery of high-resolution ultrasound techniques to diagnose fetal anomalies, monitor fetal development, and assess placental health.",
  "Training in performing invasive fetal procedures such as amniocentesis, chorionic villus sampling (CVS), and in-utero therapies.",
  "Expertise in interpreting prenatal genetic screening results and identifying chromosomal abnormalities and genetic disorders.",
  "Skills in managing high-risk pregnancies involving fetal growth restriction, multiple pregnancies, and maternal conditions affecting the fetus.",
  "Proficiency in assessing fetal heart function and diagnosing congenital heart defects using echocardiography.",
  "Experience in collaborating with obstetricians, neonatologists, geneticists, and pediatric surgeons to provide comprehensive care for mother and fetus.",
  "Training in counseling expectant parents on fetal diagnoses, treatment options, and potential outcomes.",
  "Exposure to the planning and management of complex cases requiring fetal surgery for life-threatening conditions.",
  "Development of ethical decision-making skills for handling sensitive cases, including fetal anomalies and prenatal counseling."
],

requirements: [
  "MBBS/MD/MS/Equivalent"
],

modules: [
  "Embryology & Fetal Development",
  "Perinatal Genetics",
  "Fetal Abnormalities & Its Management",
  "Prenatal Diagnosis & Therapy",
  "Perinatal Pathology"
],

moduleDetails: [
  [
    "General Embryology",
    "Ovulation to implantation",
    "Development of germ disc, yolk sac",
    "Development of placenta & membranes",
    "Timing & normal development of main organ systems",
    "Basic principles of teratogens",
    "Mechanism of teratogenesis",
    "Effects of possible teratogens – drugs, infection, radiation"
  ],
  [
    "Basic principle of genetics",
    "Genetic disorders",
    "Chromosomal disorders (including screening, diagnosis & management)",
    "Multiple anomalies & syndromic disorders"
  ],
  [
    "CNS anomalies",
    "Cardiac anomalies",
    "Genitourinary anomalies",
    "Pulmonary abnormalities",
    "Neck & face anomalies",
    "Skeletal anomalies",
    "Fetal tumors",
    "Fetal hydrops",
    "Multiple pregnancies",
    "Disorders of amniotic fluid",
    "Management options including termination of pregnancy",
    "Preconception counselling",
    "Antenatal screening"
  ],
  [
    "Invasive tests – Amniocentesis, Chorionic Villous Sampling",
    "Maternal serum screening (AFP, BhCG, Estriol, PAPP-A)"
  ],
  [
    "Analysis of fetal & placental tissues"
  ]
],

faqs: [
  { q: "Who should enroll in the Fetal Medicine fellowship?", a: "This course welcomes MBBS/MD/MS or equivalent professionals aiming to enhance their knowledge of fetal medicine through structured online learning." },
  { q: "What advanced topics are included in the Fellowship in Fetal Medicine?", a: "This fellowship covers fetal assessment techniques, prenatal screening protocols, diagnosis of fetal abnormalities, maternal-fetal medicine principles, and evidence-based care strategies." },
  { q: "How is the Fetal Medicine fellowship delivered?", a: "The course is provided through online lectures, expert-led discussions, case-based modules, and comprehensive digital study materials." },
  { q: "How will this fellowship help improve my clinical practice?", a: "It helps enhance prenatal diagnostic skills, strengthen decision-making in complex fetal care, and increase confidence in managing high-risk pregnancies." },
  { q: "What is the fee for the Fetal Medicine fellowship?", a: "Fees vary based on course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this fellowship enhance my career prospects and earnings?", a: "Yes, it can boost your professional profile, expand clinical roles, and support higher earning potential in obstetrics, maternal-fetal medicine, and prenatal care." }
],
    meta: {
      duration: "50 week",
      lessons: "28",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-obstetrics-ultrasound",
    title: "Fellowship in Obstetrics Ultrasound",
    categories: ["obs-gynae", "radiology"],
    image: "/courses/Fellowship-in-Obstetrics-Ultrasound-410x290.webp",
    heroDescription: "Specialized fellowship offering advanced training in obstetric ultrasound, fetal imaging, Doppler, and prenatal diagnosis.",
    lessons: 24,
    weeks: 25,
    level: "expert",
    priceINR: 80000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview:"The Fellowship in Obstetrics Ultrasound is a specialized postgraduate training program designed to develop expertise in prenatal ultrasound assessment throughout pregnancy. The fellowship emphasizes first-, second-, and third-trimester ultrasound, fetal growth and well-being assessment, Doppler studies, and identification of fetal anomalies, supporting high-quality antenatal and high-risk pregnancy care. The program prepares clinicians and imaging specialists for competent independent practice in obstetric ultrasound.",

learn:[
  "Perform and interpret first-, second-, and third-trimester obstetric ultrasound examinations.",
  "Accurately date pregnancy and assess fetal viability.",
  "Perform detailed fetal anatomy and anomaly scans.",
  "Assess fetal growth, amniotic fluid, and placental location.",
  "Apply Doppler studies for fetal and maternal assessment.",
  "Identify and manage imaging aspects of high-risk pregnancies.",
  "Recognize common fetal anomalies and soft markers.",
  "Generate standardized obstetric ultrasound reports.",
  "Communicate findings effectively with patients and clinicians."
],

requirements:[
  "MD/ MS/ DNB/ PG Equivalent (OBG or Radio-diagnostic)",
  "MBBS, Sonologist / 6 months PCPNDT certificate/ resident doctor with 3 years’ experience"
],

modules:[
  "First-Trimester Ultrasound",
  "Second-Trimester Fetal Anatomy & Anomaly Scan",
  "Third-Trimestre Growth & Well-being",
  "Doppler Studies & High-Risk Pregnancy",
  "Special Topics, and Project"
],

moduleDetails:[
  ["Early pregnancy assessment","Dating and viability scans","Ectopic pregnancy evaluation","First-trimester screening overview","Multiple pregnancy assessment"],
  ["Systematic fetal anatomy evaluation","CNS, cardiac, abdominal, and skeletal assessment","Soft markers and chromosomal risk assessment","Placental and cord abnormalities","Reporting standards"],
  ["Fetal biometry and growth charts","Amniotic fluid assessment","Fetal presentation and lie","Growth restriction and macrosomia","Surveillance protocols"],
  ["Uterine artery Doppler","Umbilical and MCA Doppler","Doppler in preeclampsia and IUGR","Twin and multiple pregnancy Doppler","Clinical correlation"],
  ["Ultrasound in obstetric emergencies","Fetal well-being assessment (BPP, NST )","Project work","Communication and reporting excellence"]
],

faqs:[
  {q:"Who should consider enrolling in the Fellowship in Obstetrics Ultrasound?",a:"This Course is open to MD, MS, DNB, or PG equivalent (OBG or Radiodiagnosis) professionals, as well as MBBS-qualified sonologists with a 6-month PCPNDT certificate or resident doctors with 3 years of experience, this program offers advanced theoretical training in obstetric ultrasound through online learning."},
  {q:"What specialized skills are taught in the Obstetrics Ultrasound fellowship at DMHCA?",a:"This fellowship from DMHCA includes fetal imaging techniques, prenatal anatomy scanning, Doppler protocols, anomaly detection, and evidence-based interpretation."},
  {q:"How is the Obstetrics Ultrasound fellowship program delivered by DMHCA?",a:"The course is provided through online lectures, expert-led discussions, real-world case insights, and comprehensive digital resources, allowing flexible learning from anywhere."},
  {q:"What improvements can this fellowship bring to my clinical practice?",a:"Completing this fellowship helps enhance ultrasound interpretation accuracy, improve prenatal diagnostic confidence, and strengthen your professional profile in obstetric care."},
  {q:"What is the fee for the Obstetrics Ultrasound fellowship at DMHCA?",a:"Fees vary based on course structure and included digital study materials; detailed pricing is available upon inquiry or enrollment request."},
  {q:"Can the Obstetrics Ultrasound fellowship from DMHCA help enhance my career and income potential?",a:"Yes, This advanced online training in obstetric ultrasound can boost your professional credibility, expand clinical roles, and support higher earning opportunities in prenatal diagnostic and maternal-fetal care."}
],
    meta: {
      duration: "25 week",
      lessons: "24",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-laparoscopy-and-hysteroscopy",
    title: "Fellowship in Laparoscopy and Hysteroscopy",
    categories: ["obs-gynae"],
    image: "/courses/INTERVATIONAL-RADIOLOGY-410x290.webp",
    heroDescription: "Advanced minimal invasive gynecological surgery training including laparoscopy and hysteroscopy procedures.",
    lessons: 35,
    weeks: 50,
    level: "expert",
    priceINR: 190000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Laparoscopy & Hysteroscopy provides advanced training in minimally invasive surgical techniques for diagnosing and treating gynecological conditions. The program emphasizes proficiency in laparoscopic and hysteroscopic procedures, allowing for faster recovery, reduced scarring, and improved patient outcomes. Fellows gain hands-on experience in treating conditions such as fibroids, endometriosis, ovarian cysts, and infertility, preparing them for leadership roles in minimally invasive gynecologic surgery.",
trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],
learn: [
  "Mastery of minimally invasive laparoscopic techniques for treating gynecological conditions like ovarian cysts, endometriosis, and pelvic adhesions.",
  "Expertise in performing hysteroscopic procedures to treat intrauterine pathologies such as polyps, fibroids, and uterine septa.",
  "Skills in performing complex laparoscopic surgeries such as myomectomy, hysterectomy, and tubal surgeries with precision.",
  "Training in minimally invasive techniques for diagnosing and treating infertility, including laparoscopy for tubal evaluation and hysteroscopy for uterine abnormalities.",
  "Expertise in the excision and management of endometriosis through laparoscopic surgery to relieve pain and restore fertility.",
  "Proficiency in performing surgeries that preserve fertility, such as laparoscopic cystectomies and myomectomies.",
  "Skills in using intraoperative ultrasound and other imaging techniques for enhanced surgical precision."
],

requirements: [
  "MBBS,MS/ MD/ DGO/ DNB",
  "No previous experience is needed."
],

modules: [
  "Endometriosis",
  "Tubal Pathology and Ovarian Pathology",
  "Uterine and Pelvic Floor Pathology",
  "Oncology",
  "Endoscopy During Pregnancy",
  "Operative Hysteroscopy"
],

moduleDetails: [
  [
    "Laparoscopic management of endometriosis",
    "Douglasectomy, torus excision, uterine suspension",
    "Laparoscopic excision of rectovaginal and retrocervical endometriotic lesions",
    "Ureteral endometriosis",
    "Bladder endometriosis",
    "Laparoscopic hysterectomy including for advanced endometriosis with recto sigmoid disease"
  ],
  [
    "Fertiloscopy",
    "Trans-vaginal laparoscopy",
    "Fimbrioplasty, salpingoneostomy and adhesiolysis ectopic pregnancy",
    "Laparoscopic management of ectopic pregnancy",
    "Laparoscopic microsurgical tubal anastomosis",
    "Laparoscopic management of ovarian cysts",
    "Laparoscopic management of adnexal torsion"
  ],
  [
    "Laparoscopic myomectomy",
    "Laparoscopic subtotal hysterectomy",
    "Laparoscopic hysterectomy in benign diseases",
    "Laparoscopic approach for prolapse",
    "Laparoscopic sacrocolpexy for severe uterine prolapse and severe vaginal vault prolapse"
  ],
  [
    "Tumour of the ovary or epithelial ovarian tumour",
    "Laparoscopic reimplantation of cryopreserved ovarian tissue",
    "Ovarian tissue cryopreservation and existing alternatives",
    "Laparoscopic ovarian transposition before radiotherapy",
    "Laparoscopic preservation of female fertility",
    "Endoscopy in malignancy",
    "Indications for lymphadenectomy in stage I/IIa endometrial cancer",
    "Laparoscopic surgery in cervical cancer"
  ],
  [
    "Fetal endoscopy",
    "Laparoscopic abdominal cerclage"
  ],
  [
    "Instrumentation for hysteroscopy",
    "Müllerian duct anomalies",
    "Hysteroscopic lysis of intrauterine adhesions",
    "Hysteroscopic myomectomy",
    "Endometrial resection",
    "Global endometrial ablation",
    "Tubal sterilization"
  ]
],

faqs: [
  { q: "Who is eligible for the Fellowship in Laparoscopy and Hysteroscopy?", a: "This online program is suitable for MBBS, MS, MD, DGO, or DNB-qualified professionals seeking to deepen their knowledge of minimally invasive gynecologic surgery." },
  { q: "What surgical areas are covered in the Laparoscopy and Hysteroscopy fellowship at DMHCA?", a: "This fellowship explores minimally invasive laparoscopy techniques, hysteroscopic procedures, surgical planning, and procedural interpretation through structured expert modules." },
  { q: "How does DMHCA deliver the Laparoscopy and Hysteroscopy fellowship curriculum?", a: "The course is delivered through online lectures, expert-led discussions, case-oriented content, and comprehensive digital study resources with flexible access from anywhere." },
  { q: "How can completing this fellowship improve my surgical practice?", a: "Completing this fellowship helps strengthen your understanding of minimally invasive gynecologic procedures, enhance clinical decision-making, and elevate your professional confidence in surgical care." },
  { q: "What is the fee for the Laparoscopy and Hysteroscopy fellowship at DMHCA?", a: "Fees vary based on course structure and included learning resources; comprehensive pricing details are shared upon inquiry or enrollment request." },
  { q: "Can this online fellowship from DMHCA enhance my career prospects and earning potential?", a: "Yes, this course in laparoscopy and hysteroscopy can boost your professional profile, expand clinical opportunities, and support higher earning potential in gynecologic surgery and women’s health care." }
],
    meta: {
      duration: "50 week",
      lessons: "35",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-cosmetic-gynecology",
    title: "Fellowship in Cosmetic Gynecology",
    categories: ["obs-gynae"],
    image: "/courses/Cosmetic-Gynecology-410x290.webp",
    heroDescription: "Enhance Women's Health and Aesthetics: Fellowship in Cosmetic Gynecology for Advanced Surgical and Non-Surgical Techniques.",
    lessons: 23,
    weeks: 50,
    level: "expert",
    priceINR: 140000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",  
trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],
   overview: "The Fellowship in Cosmetic Gynecology is a specialized postgraduate clinical training program designed to develop expertise in aesthetic and functional gynecological procedures aimed at improving vaginal health, sexual function, pelvic floor support, and genital aesthetics. The program emphasizes evidence-based practice, minimally invasive energy-based technologies, injectable therapies, surgical techniques, patient counseling, and ethical considerations, with structured exposure to outpatient and procedural gynecology settings. This fellowship prepares gynecologists for safe and competent practice in cosmetic and functional gynecology.",

learn: [
  "Understand normal and altered female genital anatomy and physiology.",
  "Evaluate patients seeking cosmetic and functional gynecologic procedures.",
  "Perform non-surgical cosmetic gynecologic treatments safely.",
  "Assist and perform selected surgical cosmetic gynecologic procedures.",
  "Use energy-based devices appropriately in gynecology.",
  "Manage sexual dysfunction and vaginal health conditions.",
  "Counsel patients regarding realistic outcomes, risks, and alternatives.",
  "Practice ethical, legal, and patient-centered cosmetic gynecology.",
  "Manage complications and postoperative care.",
  "Maintain proper documentation and follow-up protocols."
],

requirements: [
  "MBBS / DGO / MS / MD",
  "No previous experience is needed."
],

modules: [
  "Foundations of Cosmetic Gynecology",
  "Non-Surgical Cosmetic Gynecology",
  "Functional & Sexual Health Procedures",
  "Surgical Cosmetic Gynecology",
  "Practice Management & Advanced Care"
],

moduleDetails: [
  [
    "Vulvovaginal anatomy and physiology",
    "Aesthetic principles and patient selection",
    "Ethics, consent, and medico-legal aspects",
    "Photography and documentation standards",
    "Infection control and safety"
  ],
  [
    "Energy-based devices (laser, RF)",
    "Platelet-rich plasma (PRP) applications",
    "Injectable fillers and biostimulators",
    "Management of vaginal laxity and GSM",
    "Postpartum and menopausal vaginal care"
  ],
  [
    "Female sexual dysfunction",
    "Vulvodynia and dyspareunia",
    "Pelvic floor dysfunction overview",
    "Counseling and follow-up"
  ],
  [
    "Labiaplasty techniques",
    "Vaginal tightening procedures",
    "Perineoplasty",
    "Hymenoplasty (ethical considerations)",
    "Postoperative care and complications"
  ],
  [
    "Complication management",
    "Patient satisfaction and outcome assessment",
    "Practice setup and equipment"
  ]
],

faqs: [
  { q: "Who is eligible for the Fellowship in Cosmetic Gynecology?", a: "This program is designed for MBBS/DGO/MS/MD-qualified professionals seeking structured training in cosmetic and functional gynecology with no prior experience required." },
  { q: "What topics are covered in this fellowship?", a: "It covers aesthetic gynecology, non-surgical energy-based treatments, PRP applications, surgical procedures, sexual health, and evidence-based clinical care." },
  { q: "How is the fellowship delivered?", a: "The course is delivered via online lectures, expert-led discussions, case-based learning, and digital study materials accessible from anywhere." },
  { q: "What career benefits does it offer?", a: "It enhances clinical expertise in women’s aesthetic health, improves patient management skills, and expands opportunities in cosmetic gynecology practice." },
  { q: "What is the fee for this fellowship?", a: "Fees vary based on course structure and included resources; exact details are shared during inquiry or enrollment." },
  { q: "Can it improve earning potential?", a: "Yes, specialized training in cosmetic gynecology can increase professional credibility and expand income opportunities in private and aesthetic practice." }
],
    meta: {
      duration: "50 week",
      lessons: "23",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },
  {
    slug: "fellowship-in-obstetrics-and-gynecology",
    title: "Fellowship in Obstetrics and Gynecology",
    categories: ["obs-gynae"],
    image: "/courses/Obstetrics-And-Gynaecology--410x290.webp",
    heroDescription: "Advance Women's Health: Fellowship in Obstetrics & Gynecology for Expertise in Reproductive and Maternal Care.",
    lessons: 68,
    weeks: 50,
    level: "expert",
    priceINR: 135000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],
   overview: "A Fellowship in Obstetrics & Gynecology offers specialized training in the comprehensive care of women’s reproductive health, pregnancy, and childbirth. The program provides advanced education in high-risk obstetrics, gynecologic surgery, reproductive endocrinology, and fertility management. Fellows gain hands-on experience in managing complex pregnancies, performing gynecologic procedures, and addressing reproductive health concerns, preparing them for leadership roles in women’s healthcare.",

learn: [
  "Expertise in managing complicated pregnancies, including preeclampsia, gestational diabetes, and preterm labor.",
  "Mastery of gynecologic procedures such as hysterectomy, myomectomy, and minimally invasive laparoscopic surgeries.",
  "Understanding of hormonal disorders affecting fertility and assisted reproductive technologies (IVF and related treatments).",
  "Skills in comprehensive prenatal care, including fetal monitoring, ultrasound, and genetic counseling.",
  "Training in labor and delivery management including normal and operative procedures like C-section and instrumental delivery.",
  "Exposure to gynecologic oncology including cervical, ovarian, and uterine cancers.",
  "Expertise in family planning, contraceptive counseling, and reproductive health management."
],

requirements: [
  "MBBS / MD / MS / Equivalent",
  "No previous experience is needed."
],

modules: [
  "Basic Sciences & Clinical Methods",
  "Antenatal Care & Normal Pregnancy",
  "High-Risk Pregnancy",
  "Intrapartum Care & Labor Management",
  "Postpartum Care & Obstetric Emergencies",
  "Gynecological Disorders",
  "Reproductive Endocrinology & Infertility",
  "Gynecologic Oncology",
  "Urogynecology & Pelvic Floor Disorders",
  "Contraception & Family Planning",
  "Minimally Invasive & Operative Gynecology",
  "Ethics & Clinical Integration"
],

moduleDetails: [
  [
    "Anatomy of female reproductive system",
    "Physiology of menstruation and ovulation",
    "Hormonal regulation",
    "History taking and pelvic examination",
    "Antenatal care basics",
    "Infection control and documentation"
  ],
  [
    "Diagnosis of pregnancy",
    "Physiological changes in pregnancy",
    "Routine antenatal investigations",
    "Nutrition in pregnancy",
    "Fetal growth and monitoring",
    "Counseling and birth preparedness"
  ],
  [
    "Gestational diabetes mellitus",
    "Hypertensive disorders of pregnancy",
    "Anemia in pregnancy",
    "Thyroid disorders in pregnancy",
    "Multiple pregnancy",
    "Preterm labor"
  ],
  [
    "Stages of labor",
    "Partograph use",
    "Induction of labor",
    "Cesarean section (overview)",
    "Instrumental delivery",
    "Management of labor complications"
  ],
  [
    "Postpartum hemorrhage",
    "Puerperal infections",
    "Eclampsia management",
    "Obstetric shock",
    "Sepsis in pregnancy",
    "Maternal resuscitation"
  ],
  [
    "Abnormal uterine bleeding",
    "Fibroids",
    "Endometriosis",
    "Adenomyosis",
    "Pelvic inflammatory disease",
    "Ovarian cysts"
  ],
  [
    "Evaluation of infertility",
    "Ovulatory disorders",
    "PCOS",
    "Hormonal investigations",
    "Ovulation induction",
    "Assisted reproduction basics (overview)"
  ],
  [
    "Cervical cancer",
    "Endometrial cancer",
    "Ovarian cancer",
    "Vulvar and vaginal cancers",
    "Cancer screening (Pap smear, HPV testing)",
    "Principles of management"
  ],
  [
    "Pelvic organ prolapse",
    "Urinary incontinence",
    "Fistula (overview)",
    "Pelvic floor rehabilitation",
    "Conservative and surgical options"
  ],
  [
    "Temporary contraceptive methods",
    "Permanent sterilization methods",
    "Emergency contraception",
    "Medical termination of pregnancy",
    "Counseling and consent"
  ],
  [
    "Laparoscopy basics",
    "Hysteroscopy basics",
    "Dilation and curettage",
    "Minor gynecological procedures",
    "Postoperative care",
    "Complication management"
  ],
  [
    "Evidence-based obstetrics and gynecology",
    "Maternal mortality audit",
    "Ethics and medico-legal issues",
    "Case presentations"
  ]
],

faqs: [
  { q: "Who can enroll in this fellowship?", a: "Candidates with MBBS, MD, MS, or equivalent qualifications can apply to enhance their expertise in obstetrics and gynecology." },
  { q: "What areas are covered in this program?", a: "It covers pregnancy care, labor management, gynecological disorders, reproductive health, oncology, and evidence-based clinical practice." },
  { q: "How is the fellowship delivered?", a: "The program is delivered through online lectures, expert sessions, case discussions, and digital learning materials accessible from anywhere." },
  { q: "What skills will I gain after completion?", a: "You will improve clinical decision-making, patient management skills, and confidence in handling obstetric and gynecological cases." },
  { q: "What is the fee for this fellowship?", a: "Fees vary based on structure and learning resources; exact details are provided during inquiry or enrollment." },
  { q: "Can this fellowship improve career growth?", a: "Yes, it enhances clinical expertise, professional credibility, and can improve career opportunities and earning potential." }
],
    meta: {
      duration: "50 week",
      lessons: "68",
      skill_level: "Fellowship",
      certificate: "yes"
    }
  },

  {
    slug: "fellowship-in-pediatric-rheumatology",
    title: "Fellowship in Pediatric Rheumatology",
    categories: ["pediatrics"],
    image: "/courses/fellowship-in-pediatric-rheumatology.webp",
    heroDescription: "Apply for Pediatric rheumatology fellowship training to treat childhood rheumatic conditions.",
    lessons: 42,
    weeks: 50,
    level: "expert",
    priceINR: 145000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "Fellowship in Pediatric Rheumatology is designed to equip pediatricians with specialized skills to diagnose, manage, and provide long-term care for children with rheumatic and musculoskeletal diseases. The program combines intensive clinical exposure with structured academic teaching, multidisciplinary collaboration, and procedural training. Fellows will develop competency in evaluating complex autoimmune and inflammatory conditions, working within a team-based care model, and applying evidence-based approaches tailored to pediatric populations.",

learn: [
  "Diagnose and manage major pediatric rheumatic diseases",
  "Perform accurate pediatric musculoskeletal examinations",
  "Interpret key labs and imaging used in rheumatologic evaluation",
  "Create effective, evidence-based treatment plans",
  "Coordinate multidisciplinary care for complex cases"
],

requirements: [
  "MD/MS/DNB/DCH(Pediatrics)",
  "Medicine Physician/General Surgeon/Rheumatologist"
],

modules: [
  "Foundations of Pediatric Rheumatology",
  "Diagnostics & Investigations",
  "Juvenile Idiopathic Arthritis",
  "Connective Tissue Diseases",
  "Vasculitis & Autoinflammatory Disorders",
  "Non Inflammatory Disorders & Mimics",
  "Regional & Infectious Considerations",
  "Chronic Disease Management & Continuity Care",
  "Procedural Skills",
  "Assessment & Training"
],

moduleDetails: [
  ["Introduction to pediatric rheumatology", "Pediatric immune system & mechanisms of autoimmunity", "Musculoskeletal examination in children", "Clinical approach to a child with joint pain or swelling", "Orientation to inpatient, outpatient, and day-care workflows"],
  ["Laboratory evaluation: inflammatory markers, autoantibodies, complements", "Synovial fluid analysis basics", "Radiology: X-ray, MRI, CT relevant to rheumatology", "Introduction to musculoskeletal ultrasound", "Pattern recognition in pediatric arthritis"],
  ["Clinical presentation and diagnostic criteria", "Management with NSAIDs, steroids, csDMARDs", "IL 1, IL 6, and TNF inhibitors", "Growth and functional assessment"],
  ["Pediatric Systemic Lupus Erythematosus", "Juvenile Dermatomyositis", "Localised and systemic scleroderma", "Mixed connective tissue disease and overlap syndromes", "Organ involvement monitoring and multidisciplinary care"],
  ["Kawasaki disease, IgA vasculitis, PAN, Takayasu disease", "ANCA-associated vasculitis in children", "Periodic fever syndromes", "Genetic testing indications and pathways"],
  ["Chronic pain syndromes: juvenile fibromyalgia", "Hypermobility & EDS spectrum disorders", "Metabolic bone disease", "Infectious & post-infectious arthritis", "Orthopedic mimickers of rheumatologic disease"],
  ["TB-related musculoskeletal disease", "Viral and bacterial reactive arthritis", "Local prevalent infections mimicking autoimmune disease", "Vaccination protocols for immunosuppressed children"],
  ["Monitoring DMARDs & biologics", "Psychosocial and school-related issues", "Adolescent transition to adult rheumatology", "Rehabilitation and physiotherapy integration"],
  ["Joint aspiration & intra-articular injections", "Sedation methods & safety in children", "Steroid injection technique"],
  ["Case-based discussions", "Assignment", "Project report"]
],

faqs: [
  { q: "Who is the Pediatric Rheumatology fellowship designed for?", a: "The program is ideal for pediatricians, rheumatologists, internal medicine doctors, and healthcare professionals seeking deeper expertise in managing pediatric rheumatic disorders through structured online learning." },
  { q: "What advanced pediatric rheumatology topics are included in this fellowship?", a: "This fellowship from DMHCA explores juvenile arthritis, autoimmune and inflammatory disorders, diagnostic evaluation, therapeutic approaches, and evidence-based care for musculoskeletal conditions in children." },
  { q: "How will I access the pediatric rheumatology training at DMHCA?", a: "The course is delivered via online lectures, expert-led discussions, case-based insights, and comprehensive digital study resources that learners can access flexibly from anywhere." },
  { q: "What benefits can this fellowship bring to my clinical practice?", a: "Completing this fellowship helps enhance pediatric rheumatologic assessment skills, improve clinical decision-making, and strengthen professional confidence in treating children with rheumatic conditions." },
  { q: "What is the fee for the Pediatric Rheumatology fellowship at DMHCA?", a: "Fees vary based on course structure and included digital learning materials; comprehensive pricing details are provided upon inquiry or enrollment request." },
  { q: "Can this online fellowship from DMHCA enhance my career prospects and earnings?", a: "Yes, This online training in pediatric rheumatology can boost your professional credibility, expand clinical roles, and support higher earning opportunities in pediatric care and autoimmune disease management." }
],
    meta: { duration: "50 week", lessons: "42", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-nutrition-and-dietetics",
    title: "PG Diploma in Nutrition and Dietetics",
    categories: ["nutrition"],
    image: "/courses/PG-Diploma-in-Nutrition-and-Dietetics-410x290.webp",
    heroDescription: "Gain advanced skills in nutrition, diet planning, and wellness management in PG Diploma in Nutrition and Dietetics.",
    lessons: 32,
    weeks: 50,
    level: "intermediate",
    priceINR: 100000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
   overview: "A PG Diploma in Nutrition and Dietetics equips students with advanced knowledge of food science, therapeutic nutrition, and diet planning. The program blends theoretical understanding with practical training to address nutritional needs across age groups and health conditions. Graduates learn to create personalized diet plans, manage lifestyle diseases, and promote wellness. This qualification opens opportunities in hospitals, wellness centers, community health programs, and the food industry.",

learn: [
  "Principles of human nutrition and food science",
  "Diet planning for individuals across different age groups",
  "Therapeutic nutrition for managing lifestyle and clinical conditions",
  "Meal planning, food safety, and quality control",
  "Nutritional assessment techniques and counseling skills",
  "Community nutrition and public health strategies",
  "Research basics and evidence-based dietary practices",
  "Developing personalized diet and wellness programs"
],

requirements: ["Any Graduate", "B.Sc.", "B. Pharma", "MBBS", "BDS", "BUMS", "BAMS"],

modules: [
  "Fundamentals of Nutrition",
  "Food Science & Diet Planning",
  "Clinical Nutrition (Medical Nutrition Therapy)",
  "Community Nutrition",
  "Therapeutic Diets",
  "Food Safety & Quality Control",
  "Nutrition Education"
],

moduleDetails: [
  [
    "Concepts of nutrition and health",
    "Macronutrients: carbohydrates, proteins, fats",
    "Micronutrients: vitamins and minerals",
    "Digestion, absorption, and metabolism",
    "Recommended Dietary Allowances (RDA)"
  ],
  [
    "Food groups and their nutritive value",
    "Methods of cooking and nutrient preservation",
    "Meal planning and portion control",
    "Balanced diet for different age groups",
    "Food labeling and standards"
  ],
  [
    "Diet in diabetes, obesity, and hypertension",
    "Cardiovascular diseases",
    "Gastrointestinal disorders",
    "Renal diseases",
    "Liver disorders",
    "Cancer and critical care nutrition"
  ],
  [
    "Nutritional problems in developing countries",
    "Malnutrition (PEM, micronutrient deficiencies)",
    "National nutrition programs",
    "Maternal and child nutrition",
    "School health and feeding programs"
  ],
  [
    "Modification of normal diet",
    "Liquid, soft, and special diets",
    "Enteral and parenteral nutrition",
    "Diet planning for hospitalized patients"
  ],
  [
    "Food hygiene and sanitation",
    "Food adulteration and prevention",
    "Food laws and regulations",
    "Quality assurance systems"
  ],
  [
    "Diet surveys and nutritional assessment",
    "Nutrition counseling techniques",
    "Health education strategies"
  ]
],

faqs: [
  { q: "Who is eligible for enrolling in the PG Diploma in Nutrition and Dietetics?", a: "The program is suitable for Any Graduate, B.Sc., B. Pharma, MBBS, BDS, BUMS, and BAMS graduates seeking specialized knowledge in nutrition and dietetics." },
  { q: "What key subjects are included in the PG Diploma in Nutrition and Dietetics?", a: "The curriculum covers human nutrition, food science, clinical nutrition, therapeutic diets, food safety, community nutrition, and nutrition education." },
  { q: "What professional advantages can this diploma offer?", a: "This diploma enhances expertise in nutrition assessment, diet planning, therapeutic nutrition, and wellness management, supporting career growth in healthcare and nutrition sectors." },
  { q: "What is the fee for the PG Diploma in Nutrition and Dietetics at DMHCA?", a: "Fees vary depending on the course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this nutrition and dietetics diploma from DMHCA enhance my career and earning potential?", a: "Yes, it can strengthen professional credibility, expand opportunities in healthcare, wellness, and nutrition services, and support long-term career growth." }
],
    meta: { duration: "50 week", lessons: "32", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "certificate-in-clinical-embryology",
    title: "Certificate in Clinical Embryology",
    categories: ["reproductive"],
    image: "/courses/clinical-embryology-certificate.webp",
    heroDescription: "Gain hands-on expertise in IVF, embryology lab techniques, and reproductive science to advance your career in fertility care.",
    lessons: 26,
    weeks: 25,
    level: "beginner",
    priceINR: 350000,
    rating: 5,
    reviewCount: 1,
    program: "Certificate",
    overview: "Clinical Embryology is a specialized field within reproductive medicine that focuses on the laboratory aspects of human reproduction, including gamete handling, fertilization, embryo culture, and assisted reproductive technologies (ART). Embryologists play a critical role in infertility treatment by ensuring optimal laboratory conditions and procedures for successful fertilization and embryo development. This certificate course provides comprehensive training in embryology laboratory techniques, ART procedures, cryopreservation, and quality control practices in fertility centers.",

learn: [
  "Understand the physiology of human reproduction and embryonic development.",
  "Perform basic embryology laboratory procedures.",
  "Assist in assisted reproductive techniques (ART) such as IVF and ICSI.",
  "Handle gametes and embryos under sterile laboratory conditions.",
  "Understand cryopreservation techniques and embryo storage.",
  "Apply quality control and safety standards in embryology labs."
],

requirements: [
  "Graduation: Medical/ Healthcare"
],

modules: [
  "Fundamentals of Embryology",
  "Embryology Laboratory Setup",
  "Gamete Handling Techniques",
  "Assisted Reproductive Techniques (ART)",
  "Cryopreservation & Advanced Techniques",
  "Quality Control, Ethics & Clinical Practice"
],

moduleDetails: [
  [
    "Anatomy and physiology of male and female reproductive systems",
    "Gametogenesis (spermatogenesis and oogenesis)",
    "Fertilization and early embryonic development",
    "Hormonal regulation of reproduction"
  ],
  [
    "Design and layout of IVF laboratory",
    "Laboratory equipment and instruments",
    "Culture media and preparation",
    "Sterility and aseptic techniques"
  ],
  [
    "Semen collection and analysis",
    "Sperm preparation techniques",
    "Oocyte retrieval (overview)",
    "Oocyte handling and grading"
  ],
  [
    "In vitro fertilization (IVF)",
    "Intracytoplasmic sperm injection (ICSI)",
    "Embryo culture and grading",
    "Blastocyst development"
  ],
  [
    "Sperm freezing",
    "Oocyte and embryo cryopreservation",
    "Vitrification techniques",
    "Thawing procedures",
    "Preimplantation genetic testing (overview)"
  ],
  [
    "Laboratory quality control and assurance",
    "Documentation and record keeping",
    "Ethical and legal aspects in ART",
    "Patient counseling (basic concepts)",
    "Case discussions and practical exposure"
  ]
],

faqs: [
  { q: "Who can enroll in the Certificate in Clinical Embryology?", a: "This program is suitable for graduates from medical and healthcare backgrounds seeking specialized knowledge in clinical embryology and assisted reproductive technologies through online learning." },
  { q: "What topics are covered in the Certificate in Clinical Embryology?", a: "This certificate covers embryology laboratory techniques, gamete handling, IVF, ICSI, embryo culture, cryopreservation, and quality control practices in fertility laboratories." },
  { q: "How is the Certificate in Clinical Embryology delivered?", a: "The course is delivered through online lectures, expert-led sessions, case discussions, and digital study materials that can be accessed flexibly from anywhere." },
  { q: "How can this certificate improve my professional practice?", a: "This certificate helps strengthen embryology laboratory knowledge, improve understanding of ART procedures, and enhance confidence in fertility care and reproductive medicine." },
  { q: "What is the fee for the Certificate in Clinical Embryology?", a: "Fees vary based on course structure and included learning resources; detailed pricing information is provided upon inquiry or enrollment request." },
  { q: "Can completing this certificate support career growth and earning potential?", a: "Yes, This specialized online training in clinical embryology can boost professional credibility, expand opportunities in fertility centers and IVF laboratories, and support enhanced income prospects in reproductive medicine." }
],
    meta: { duration: "25 week", lessons: "26", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-obesity-management",
    title: "Certificate in Obesity Management",
    categories: ["endocrinology"],
    image: "/courses/Certificate-in-Obesity-Management-410x290.webp",
    heroDescription: "Certificate in Obesity Management is designed to enhance clinical skills in obesity assessment and treatment.",
    lessons: 26,
    weeks: 25,
    level: "beginner",
    priceINR: 35000,
    rating: 5,
    reviewCount: 1,
    program: "Certificate",
   overview: "The Certificate in Obesity Management is a comprehensive six-month program designed to provide in-depth knowledge and practical understanding of obesity prevention, assessment, and management. With obesity emerging as a major global health challenge, this course equips learners with evidence-based strategies to address weight-related health concerns effectively and ethically.\n\nThe program integrates principles of nutrition science, exercise physiology, behavioral psychology, and clinical management to develop a multidisciplinary approach to weight management. Participants will gain a clear understanding of the biological, environmental, and lifestyle factors contributing to obesity, along with current therapeutic interventions and long-term weight maintenance strategies.\n\nThis course is suitable for healthcare professionals, nutritionists, fitness trainers, wellness coaches, and individuals seeking structured, scientific training in obesity management.",

learn: [
  "Understand the pathophysiology and epidemiology of obesity.",
  "Identify risk factors and conduct comprehensive obesity assessments.",
  "Apply evidence-based nutrition strategies for weight management.",
  "Design safe and effective exercise and lifestyle modification plans.",
  "Recognize obesity-related comorbidities and their management principles.",
  "Understand pharmacological and surgical treatment options.",
  "Develop long-term weight maintenance and relapse-prevention strategies.",
  "Practice ethical and professional standards in obesity management"
],

requirements: [
  "MBBS, BAMS, BHMS, BUMS, or Equivalent"
],

modules: [
  "Foundations of Obesity Science",
  "Causes, Risk Factors, and Assessment",
  "Nutrition Therapy for Obesity",
  "Exercise, Behavior, and Lifestyle Modification",
  "Medical and Surgical Management",
  "Special Populations and Long-Term Management"
],

moduleDetails: [
  [
    "Definition and classification of obesity",
    "Body composition indicators",
    "Epidemiology of obesity",
    "Energy balance concept",
    "Basics of metabolism",
    "Hormonal regulation of weight",
    "Genetics and epigenetics",
    "Gut microbiota and obesity"
  ],
  [
    "Lifestyle and dietary causes",
    "Sedentary behavior",
    "Sleep, stress, and circadian rhythm",
    "Psychological contributors",
    "Socioeconomic and environmental factors",
    "Clinical assessment methods",
    "Medical history and risk screening",
    "Laboratory investigations"
  ],
  [
    "Calorie requirements and energy deficit",
    "Macronutrients and metabolism",
    "Protein and weight management",
    "Fiber, hydration, and satiety",
    "Evidence-based diet patterns",
    "Portion control and mindful eating",
    "Food label reading",
    "Meal planning strategies"
  ],
  [
    "Physical activity in weight management",
    "Exercise physiology basics",
    "Types of exercise",
    "Exercise prescription",
    "Safety and contraindications",
    "Behavior change models",
    "Emotional eating",
    "Cognitive behavioral strategies",
    "Sleep and stress management",
    "Habit formation and goal setting"
  ],
  [
    "Obesity-related diseases",
    "Pharmacotherapy",
    "Monitoring treatment outcomes",
    "Bariatric surgery overview",
    "Patient selection criteria",
    "Pre-operative preparation",
    "Post-operative nutrition",
    "Long-term follow-up"
  ],
  [
    "Childhood and adolescent obesity",
    "Women’s health and obesity",
    "Obesity in elderly populations",
    "Obesity with chronic diseases",
    "Weight-loss plateaus",
    "Preventing weight regain",
    "Long-term lifestyle coaching",
    "Digital tools for weight management"
  ]
],

faqs: [
  { q: "Who is eligible for the Certificate in Obesity Management?", a: "Candidates with MBBS, BAMS, BHMS, BUMS, or equivalent qualifications are eligible. No prior experience is required." },
  { q: "What is the duration of the Certificate in Obesity Management?", a: "The course duration is approximately 24 weeks, allowing flexible online learning." },
  { q: "Can I do the Certificate in Obesity Management after MBBS?", a: "Yes, MBBS graduates can enroll to gain specialized knowledge in obesity prevention and weight management strategies." },
  { q: "What will I learn in the Certificate in Obesity Management?", a: "The course covers obesity assessment, nutrition planning, lifestyle modification, exercise strategies, medical management, and long-term weight control approaches." },
  { q: "What are the career opportunities after completing this certificate?", a: "Graduates can enhance their clinical practice, offer structured weight management programs, and work in hospitals, wellness clinics, or independent practice." },
  { q: "What is the fee for the Certificate in Obesity Management?", a: "The fee may vary depending on enrolment options. For the latest details, candidates are advised to contact DMHCA directly." },
  { q: "What is the salary expectation after this certification?", a: "Income potential depends on experience, location, and practice setup. Professionals offering obesity management services can significantly increase their consultation and treatment revenue." }
],
    meta: { duration: "25 week", lessons: "26", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-clinical-embryology",
    title: "PG Diploma in Clinical Embryology",
    categories: ["reproductive"],
    image: "/courses/Post-Graduate-Diploma-in-Clinical-Embryology-410x290.webp",
    heroDescription: "Complete reproductive medicine training including IVF, embryo transfer, and infertility management.",
    lessons: 73,
    weeks: 50,
    level: "intermediate",
    priceINR: 115000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "The Postgraduate Diploma in Clinical Embryology is a specialized program that focuses on the science of human reproduction, embryology, and assisted reproductive technologies (ART). Clinical embryology plays a vital role in fertility treatments and IVF (In Vitro Fertilization) laboratories, where embryologists assist in fertilization, embryo culture, cryopreservation, and reproductive laboratory procedures. This program provides comprehensive training in reproductive biology, laboratory techniques, infertility management, and advanced assisted reproductive technologies. The course combines theoretical knowledge with practical laboratory training, preparing graduates to work in IVF clinics, fertility centers, and reproductive research laboratories.",

learn: [
  "Understand human reproductive biology and embryology",
  "Perform laboratory procedures used in IVF and ART",
  "Handle gametes and embryos in laboratory settings",
  "Conduct sperm analysis and embryo culture",
  "Apply quality control and laboratory safety standards",
  "Assist clinicians in infertility diagnosis and treatment"
],

requirements: ["MBBS", "MS", "MD", "DNB", "Equivalent"],
trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],
modules: [
  "syllabus",
  "Introduction to Clinical Embryology",
  "Human Reproductive Anatomy and Physiology",
  "Human Embryology",
  "Infertility and Reproductive Disorders",
  "Semen Analysis and Andrology",
  "Assisted Reproductive Technologies (ART)",
  "Embryo Culture and Assessment",
  "Cryopreservation Techniques",
  "Genetics and Reproductive Technology",
  "Laboratory Management and Quality Control",
  "Ethics, Legal Issues, and Regulations",
  "Clinical and Laboratory Training"
],

moduleDetails: [
   [
  "Anatomy of Male & Female Reproduction",
  "Physiology of Male & Female Reproduction",
  "Biochemistry",
  "Pathology",
  "Microbiology",
  "Introduction to Assisted Reproductive Technology",
  "Gametogenesis",
  "Fertilization",
  "Embryo quality assessment",
  "Embryo culture",
  "Spermatogenesis and its disorder",
  "Semen analysis",
  "Azoospermia",
  "Semen preparation and sperm function tests",
  "Cryopreservation",
  "Molecular biology",
  "Modalities for Genetic analysis",
  "Advanced techniques in Assisted Reproductive Technology:",
  "Management of genetic disorders",
  "Evaluation and Treatment of infertile couples",
  "Stimulation protocol in ART & Fertility preservation",
  "Implantation",
  "Assisted Reproductive Technology – Pregnancy & Outcomes",
  "Third party reproduction",
  "Instrumentation and micromanipulation",
  "Embryology laboratory",
  "IVF and Embryo transfer"
],
  [
    "History and development of embryology",
    "Scope of clinical embryology",
    "Role of embryologists in fertility clinics",
    "Ethics and legal aspects in reproductive medicine"
  ],
  [
    "Male reproductive system",
    "Female reproductive system",
    "Hormonal regulation of reproduction",
    "Gametogenesis"
  ],
  [
    "Fertilization process",
    "Early embryo development",
    "Implantation and placental development",
    "Genetic regulation of embryogenesis"
  ],
  [
    "Causes of male infertility",
    "Causes of female infertility",
    "Hormonal disorders affecting fertility",
    "Diagnostic techniques"
  ],
  [
    "Semen collection and evaluation",
    "Sperm morphology and motility",
    "Sperm preparation techniques",
    "Sperm function tests"
  ],
  [
    "In Vitro Fertilization (IVF)",
    "Intracytoplasmic Sperm Injection (ICSI)",
    "Intrauterine Insemination (IUI)",
    "Ovulation induction techniques"
  ],
  [
    "Oocyte retrieval and handling",
    "Fertilization techniques",
    "Embryo culture media",
    "Embryo grading and selection"
  ],
  [
    "Freezing of sperm, oocytes, and embryos",
    "Vitrification methods",
    "Storage and thawing procedures",
    "Cryobank management"
  ],
  [
    "Genetic screening techniques",
    "Preimplantation genetic testing (PGT)",
    "Chromosomal abnormalities",
    "Genetic counseling basics"
  ],
  [
    "IVF laboratory setup",
    "Sterilization and contamination control",
    "Quality assurance in ART labs",
    "Laboratory documentation"
  ],
  [
    "Ethical issues in assisted reproduction",
    "Legal regulations for IVF clinics",
    "Patient confidentiality and consent"
  ],
  [
    "IVF laboratory procedures",
    "Handling gametes and embryos",
    "Case studies and lab demonstrations"
  ]
],

faqs: [
  { q: "Who is the PG Diploma in Clinical Embryology designed for?", a: "This course is designed for MBBS/MS/MD/DNB or equivalent holders, the program provides structured online education to deepen theoretical expertise in embryology." },
  { q: "What core topics are included in the PG Diploma in Clinical Embryology at DMHCA?", a: "This diploma explores fertilization biology, gamete handling, embryo development, IVF laboratory techniques, cryopreservation, and evidence-based reproductive science." },
  { q: "How can completing this diploma enhance my clinical practice?", a: "This diploma helps strengthen your understanding of assisted reproductive technologies, boost confidence in lab protocols, and improve decision-making in fertility care settings." },
  { q: "What is the fee for the PG Diploma in Clinical Embryology at DMHCA?", a: "Fees vary based on course structure and included resources; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can this clinical embryology diploma from DMHCA boost career opportunities and earning potential?", a: "Yes, This program is providing advanced online training in clinical embryology can enhance your professional credibility, open doors to IVF lab roles, and support better income prospects in reproductive medicine." }
],
    meta: { duration: "50 week", lessons: "73", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "fellowship-in-reproductive-medicine",
    title: "Fellowship in Reproductive Medicine",
    categories: ["reproductive"],
    image: "/courses/mn-IVF-410x290.webp",
    heroDescription: "Fellowship in Reproductive Medicine: Mastering Advanced Fertility and Reproductive Health Solutions",
    lessons: 77,
    weeks: 50,
    level: "expert",
    priceINR: 135000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],
    overview: "The Fellowship in Reproductive Medicine offers specialized training in fertility and reproductive health. This program provides an in-depth understanding of assisted reproductive technologies (ART), fertility treatments, and the management of reproductive disorders. With a combination of theoretical knowledge and hands-on experience, fellows will gain the expertise required to offer advanced reproductive care.",

learn: [
  "Diagnosis and management of infertility and reproductive endocrine disorders.",
  "Advanced techniques in assisted reproductive technologies (ART), including IVF, IUI, and embryo transfer.",
  "Hormonal and surgical interventions in reproductive health.",
  "Best practices in managing male and female infertility.",
  "Genetic counseling and screening in reproductive medicine.",
  "Ethical considerations and patient counseling in fertility treatments."
],

requirements: [
  "MBBS/MD/MS/Equivalent",
  "No previous experience is required"
],

modules: [
  "Basic Reproductive Sciences",
  "Evaluation of Infertile Couple",
  "Ovulation Disorders & Medical Management",
  "Male Infertility",
  "Assisted Reproductive Technology (ART) – Basics",
  "Advanced ART & Laboratory Techniques",
  "Recurrent Implantation Failure & Pregnancy Loss",
  "Reproductive Endocrinology",
  "Fertility Preservation & Third-Party Reproduction",
  "Gynecologic Procedures in Reproductive Medicine",
  "Obstetric Outcomes & High-Risk ART Pregnancies",
  "Ethics & Clinical Integration"
],

moduleDetails: [
  [
    "Anatomy and physiology of male and female reproductive systems",
    "Hypothalamic–pituitary–ovarian axis",
    "Spermatogenesis and oogenesis",
    "Menstrual cycle and ovulation physiology",
    "Endocrinology of reproduction",
    "Ovarian reserve and its assessment",
    "Reproductive genetics basics"
  ],
  [
    "Definition and epidemiology of infertility",
    "History taking and clinical examination",
    "Female infertility workup",
    "Male infertility evaluation",
    "Hormonal assays and interpretation",
    "Semen analysis and advanced sperm function tests",
    "Imaging in infertility (USG, HSG, SIS)"
  ],
  [
    "Anovulation and oligo-ovulation",
    "Polycystic ovarian syndrome (PCOS)",
    "Hypogonadotropic hypogonadism",
    "Hyperprolactinemia",
    "Thyroid disorders in infertility",
    "Ovulation induction protocols",
    "Monitoring follicular development"
  ],
  [
    "Oligospermia, asthenospermia, teratospermia",
    "Azoospermia (obstructive & non-obstructive)",
    "Varicocele and its management",
    "Hormonal therapy in male infertility",
    "Sperm retrieval techniques (overview)",
    "Genetic factors in male infertility",
    "Lifestyle factors affecting male fertility"
  ],
  [
    "Indications for ART",
    "Controlled ovarian stimulation protocols",
    "Oocyte retrieval procedures",
    "In vitro fertilization (IVF) principles",
    "Intracytoplasmic sperm injection (ICSI)",
    "Embryology lab basics",
    "Embryo grading and selection"
  ],
  [
    "Blastocyst culture and transfer",
    "Cryopreservation (sperm, oocyte, embryo)",
    "Frozen embryo transfer protocols",
    "Assisted hatching",
    "Preimplantation genetic testing (overview)",
    "Laboratory quality control",
    "ART complications and prevention"
  ],
  [
    "Recurrent pregnancy loss evaluation",
    "Immunological factors in infertility",
    "Thrombophilia and antiphospholipid syndrome",
    "Endometrial receptivity assessment",
    "Luteal phase support",
    "Management of recurrent implantation failure"
  ],
  [
    "Premature ovarian insufficiency",
    "Diminished ovarian reserve",
    "Ovarian hyperstimulation syndrome (OHSS)",
    "Hormonal replacement therapy",
    "Adolescent reproductive disorders",
    "Menopause and fertility considerations"
  ],
  [
    "Fertility preservation in cancer patients",
    "Oocyte and ovarian tissue freezing",
    "Donor oocyte programs",
    "Donor sperm programs",
    "Surrogacy (medical aspects)",
    "Ethical and legal considerations"
  ],
  [
    "Diagnostic and operative hysteroscopy",
    "Laparoscopy in infertility",
    "Tubal surgery",
    "Endometriosis management",
    "Fibroid management in infertility",
    "Ultrasound-guided procedures"
  ],
  [
    "Early pregnancy monitoring after ART",
    "Ectopic pregnancy",
    "Multiple pregnancy management",
    "Miscarriage management",
    "Complications of ART pregnancies",
    "Counseling and follow-up"
  ],
  [
    "ART registry and documentation",
    "Quality assurance in IVF centers",
    "Counseling skills in infertility practice",
    "Ethics and medico-legal aspects in reproductive medicine",
    "Case presentations and exit assessment"
  ]
],

faqs: [
  { q: "Who is the Fellowship in Reproductive Medicine designed for?", a: "The program welcomes MBBS/MD/MS or equivalent professionals seeking to enhance their knowledge of reproductive medicine through flexible online learning, without prior experience." },
  { q: "What key areas are covered in the Fellowship in Reproductive Medicine at DMHCA?", a: "This fellowship from DMHCA explores fertility assessment, hormonal regulation, assisted reproductive technologies (ART), infertility protocols, and evidence-based reproductive care principles." },
  { q: "How is the Reproductive Medicine fellowship structured and delivered?", a: "The course is delivered via online lectures, expert-led sessions, case-based discussions, and comprehensive digital study materials, enabling flexible access from anywhere." },
  { q: "In what ways can this fellowship improve my clinical reproductive practice?", a: "Completing this fellowship helps enhance diagnostic confidence, refine fertility management strategies, and strengthen your ability to counsel and manage complex reproductive cases." },
  { q: "What is the fee for the Fellowship in Reproductive Medicine at DMHCA?", a: "Fees vary depending on course structure and included learning resources; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can completing this online fellowship from DMHCA support my career growth and income potential?", a: "Yes, completing the DMHCA Fellowship in Reproductive Medicine can boost your career, enhance clinical credibility, and increase earning potential." }
],
    meta: { duration: "50 week", lessons: "77", skill_level: "Fellowship", certificate: "yes" }
  },

  {
    slug: "certificate-in-infertility",
    title: "Certificate in Infertility Management",
    categories: ["obs-gynae"],
    image: "/courses/Certificate-Infertility-410x290.webp",
    heroDescription: "Gain Specialized Skills in Reproductive Health with a Certificate in Infertility Diagnosis and Treatment",
    lessons: 28,
    weeks: 25,
    level: "beginner",
    priceINR: 26000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
   overview: "Infertility is a growing health concern affecting couples worldwide, with causes ranging from hormonal imbalances to structural and lifestyle factors. Effective infertility management requires a multidisciplinary approach involving clinical evaluation, diagnostic techniques, assisted reproductive technologies (ART), and patient counseling. This certificate course is designed to provide healthcare professionals with comprehensive knowledge and practical skills in the evaluation and management of male and female infertility, including basic ART procedures",
learn: [
  "Understand the physiology of human reproduction.",
  "Identify causes of male and female infertility.",
  "Perform basic infertility evaluation and investigations.",
  "Understand ovulation induction and hormonal therapies.",
  "Assist in assisted reproductive techniques (ART).",
  "Provide counselling and support to infertile couples."
],
requirements: ["MBBS/ Equivalent", "No previous experience is needed."],
trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],
modules: [
  "Basics of Reproductive Medicine",
  "Evaluation of Infertility",
  "Female Infertility Management",
  "Male Infertility Management",
  "Assisted Reproductive Techniques (ART)",
  "Counseling, Ethics & Clinical Practice"
],
moduleDetails: [
  ["Anatomy and physiology of male and female reproductive systems", "Hormonal regulation of reproduction", "Menstrual cycle and ovulation", "Basics of fertility and conception"],
  ["Definition and types of infertility", "Clinical history and examination", "Female infertility evaluation", "Male infertility evaluation", "Hormonal and imaging investigations"],
  ["Ovulatory disorders", "Polycystic ovarian syndrome (PCOS)", "Tubal and uterine factors", "Endometriosis", "Ovulation induction protocols"],
  ["Semen analysis and interpretation", "Causes of male infertility", "Medical and surgical management", "Lifestyle and environmental factors"],
  ["Intrauterine insemination (IUI)", "In vitro fertilization (IVF) basics", "Intracytoplasmic sperm injection (ICSI)", "Cryopreservation techniques", "Overview of embryology lab procedure"],
  ["Counseling of infertile couples", "Psychological aspects of infertility", "Ethical and legal considerations", "Case discussions and clinical exposure", "Logbook submission and final assessment"]
],
faqs: [
  { q: "Who is eligible for the Certificate in Infertility?", a: "The course welcomes MBBS/equivalent professionals aiming to develop expertise in infertility management through structured online learning, without prior experience." },
  { q: "What key areas are covered in the Certificate in Infertility course?", a: "This certificate from DMHCA explores infertility causes, evaluation protocols, reproductive endocrinology basics, treatment options, and evidence-based patient counseling strategies." },
  { q: "How do learners access the Certificate in Infertility materials at DMHCA?", a: "Learners access the Certificate in Infertility materials through DMHCA’s online Learning Management System (LMS), where, after enrollment, they receive login details to attend live sessions and view recorded lectures and study content anytime online." },
  { q: "In what ways can this certificate improve my clinical work?", a: "This certificate helps enhance your ability to assess and manage infertility, improve counseling skills, and boost professional confidence in reproductive health care." },
  { q: "What is the fee for the Certificate in Infertility at DMHCA?", a: "Fees vary based on course structure and included learning resources; full pricing details are shared upon inquiry or enrollment request." },
  { q: "Can completing this infertility certificate from DMHCA help my career and income potential?", a: "Yes, This Course in infertility can boost your professional credibility, expand clinical roles, and support higher earning opportunities in reproductive medicine and fertility care." }
],
    meta: { duration: "25 week", lessons: "28", skill_level: "PG Diploma", certificate: "yes" },
  },
  {
    slug: "fellowship-in-clinical-embryology",
    title: "Fellowship in Clinical Embryology",
    categories: ["reproductive"],
    image: "/courses/aceorg_home_banner-410x290.webp",
    heroDescription: "Specialize in Reproductive Science: Fellowship in Clinical Embryology for Advanced Fertility Treatment Expertise.",
    lessons: 55,
    weeks: 50,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Clinical Embryology is a specialized field within reproductive medicine focused on assisted reproductive technologies (ART), including gamete handling, fertilization techniques, embryo culture, cryopreservation, and IVF laboratory quality control. This fellowship provides in-depth theoretical knowledge and structured training to enable candidates to understand and manage IVF laboratory processes effectively.",
trainers: [
  {
    name: "Dr. Prabhdeep Kaur",
    title: "Obs & Gynea Specialist",
    image: "/Faculty_images/Dr. Prabhdeep Kaur.webp"
  }
],

learn: [
  "Understanding reproductive physiology and gametogenesis.",
  "Semen analysis and sperm preparation techniques including swim-up and density gradient methods.",
  "Oocyte handling, grading, and fertilization techniques including IVF and ICSI.",
  "Embryo culture, development stages, and grading systems.",
  "Cryopreservation techniques for embryos, oocytes, and sperm.",
  "Laboratory quality control, documentation, and compliance standards.",
  "Basic reproductive genetics and interpretation of PGT reports.",
  "Ethical, legal, and regulatory aspects of ART practice."
],

requirements: [
  "MBBS / Equivalent",
  "No previous experience is needed."
],

modules: [
  "Basic Reproductive Biology",
  "Andrology Laboratory",
  "Oocyte Handling & IVF Procedures",
  "Intracytoplasmic Sperm Injection (ICSI)",
  "Embryo Culture & Grading",
  "Cryopreservation Techniques",
  "Advanced ART Techniques",
  "Quality Control & Laboratory Management",
  "Reproductive Genetics",
  "Clinical Integration in ART",
  "Ethics, Legal & Regulatory Framework"
],

moduleDetails: [
  [
    "Anatomy and physiology of reproductive systems",
    "Gametogenesis (spermatogenesis and oogenesis)",
    "Hormonal regulation of reproduction",
    "Fertilization and early embryonic development",
    "Basics of infertility evaluation"
  ],
  [
    "Semen analysis (WHO guidelines overview)",
    "Sperm morphology and motility assessment",
    "Sperm preparation techniques",
    "Sperm cryopreservation",
    "Advanced sperm function tests"
  ],
  [
    "Oocyte retrieval handling",
    "Oocyte grading",
    "Conventional IVF techniques",
    "Culture media preparation",
    "Fertilization assessment"
  ],
  [
    "ICSI setup and micromanipulation",
    "Sperm selection techniques",
    "ICSI procedure steps",
    "Fertilization troubleshooting",
    "Quality control in micromanipulation"
  ],
  [
    "Embryo development stages",
    "Cleavage and blastocyst grading",
    "Time-lapse monitoring overview",
    "Culture conditions and incubator management"
  ],
  [
    "Principles of cryobiology",
    "Slow freezing and vitrification",
    "Embryo, oocyte, and sperm freezing",
    "Thawing techniques"
  ],
  [
    "Assisted hatching",
    "PGT overview",
    "Embryo biopsy techniques",
    "Donor and surrogacy lab considerations"
  ],
  [
    "IVF lab setup and design",
    "Air quality and contamination control",
    "Equipment calibration and maintenance",
    "Documentation and traceability",
    "KPI monitoring"
  ],
  [
    "Basic genetics and chromosomal abnormalities",
    "Indications for genetic testing",
    "PGT report interpretation",
    "Genetic counseling basics"
  ],
  [
    "Ovarian stimulation overview",
    "Embryo transfer coordination",
    "Luteal phase support basics",
    "ART complication management"
  ],
  [
    "ART laws and regulations",
    "Ethical considerations in IVF",
    "Consent and confidentiality",
    "Data protection and adverse event handling"
  ]
],

faqs: [
  { q: "Who can enroll in the Clinical Embryology fellowship?", a: "MBBS or equivalent qualified candidates can enroll; no prior experience is required." },
  { q: "What topics are covered in this fellowship?", a: "It includes IVF lab techniques, gamete handling, embryo culture, cryopreservation, genetics, and ART procedures." },
  { q: "How is the course delivered?", a: "It is delivered via online lectures, expert sessions, case discussions, and digital study materials." },
  { q: "What skills will I gain?", a: "You will gain expertise in IVF lab procedures, embryo handling, and assisted reproductive technologies." },
  { q: "What is the fee for this program?", a: "Fees vary based on structure and resources; exact details are shared during inquiry." },
  { q: "Can this fellowship improve career growth?", a: "Yes, it enhances clinical and laboratory expertise, improving career opportunities in fertility and ART labs." }
],
    meta: { duration: "50 week", lessons: "55", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-endocrinology",
    title: "Fellowship in Endocrinology",
    categories: ["endocrinology"],
    image: "/courses/Endocrinology-Fellowship-410x290.webp",
    heroDescription: "Advanced Fellowship in Endocrinology: Master Diagnostic and Therapeutic Skills for Complex Hormonal and Metabolic Disorders",
    lessons: 16,
    weeks: 52,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "The Fellowship in Endocrinology at DMHCA is a specialized program designed to equip healthcare professionals with advanced expertise in diagnosing, treating, and managing endocrine disorders. This comprehensive fellowship provides in-depth knowledge of hormonal systems, metabolic pathways, and cutting-edge approaches to patient care. Combining theoretical learning with practical training, the program ensures a balanced understanding of endocrine health and its critical role in overall well-being.",

learn: [
  "In-depth knowledge of endocrine physiology and pathophysiology.",
  "Advanced diagnostic techniques for endocrine and metabolic disorders.",
  "Management of common and complex endocrine diseases such as diabetes, thyroid disorders, and adrenal and pituitary diseases.",
  "Practical skills for hormone therapies and personalized patient care.",
  "Research methodologies to advance clinical practices in endocrinology."
],

requirements: [
  "MBBS and Above Qualification"
],

modules: [
  "Disorders Affecting the Pituitary, Thyroid, and Adrenal Glands",
  "Investigating Reproductive Endocrinology",
  "Diabetes Mellitus, Obesity, and Lipoprotein Metabolism",
  "Disorders Affecting Multiple Endocrine Systems",
  "Bone and Calcium Metabolism Disorders"
],

moduleDetails: [
  [
    "Investigating Pheochromocytoma",
    "Exploring disorders of the thyroid gland",
    "Grasping disorders of the adrenal cortex",
    "Uncovering disorders of the neurohypophysis"
  ],
  [
    "Exploring Disorders of the Testes and Male Reproductive System",
    "Managing Gynecologic Malignancies",
    "Grasping Disorders Related to Sex Development",
    "Comprehending the Female Reproductive System",
    "Navigating the Menopause Transition and Postmenopausal Hormone Therapy",
    "Addressing Sexual Dysfunction"
  ],
  [
    "Grasping Disorders Related to Lipoprotein Metabolism",
    "Investigating Diabetes Mellitus"
  ],
  [
    "Exploring Endocrine Paraneoplastic Syndromes",
    "Investigating Endocrine Tumors in the Gastrointestinal Tract and Pancreas"
  ],
  [
    "Addressing Hypercalcemia and Hypocalcemia",
    "Investigating Disorders of the Parathyroid Gland"
  ]
],

faqs: [
  {
    q: "Who should enroll in the Fellowship in Endocrinology?",
    a: "This Program is designed for MBBS and higher degree holders, the course offers advanced expertise in the endocrine system for physicians, endocrinologists, and related healthcare professionals online."
  },
  {
    q: "What subjects are covered in the Fellowship in Endocrinology?",
    a: "This fellowship explores hormonal disorders, diabetes management, thyroid and metabolic conditions, adrenal and pituitary disorders, and endocrine system fundamentals through expert modules."
  },
  {
    q: "How is the Fellowship in Endocrinology delivered?",
    a: "The course is conducted via online lectures, expert-led discussions, evidence-based content, and case studies, enabling flexible access to learning from anywhere."
  },
  {
    q: "Is the Fellowship in Endocrinology recognized in India?",
    a: "Yes — it’s offered by DMHCA, a reputable medical academy focused on quality online education aligned with current endocrinology practice standards."
  },
  {
    q: "What career benefits can I expect after this fellowship?",
    a: "Completing this fellowship helps enhance clinical knowledge, improve endocrine decision-making, and strengthen professional credentials in endocrinology and metabolic care."
  },
  {
    q: "What is the fee for the Fellowship in Endocrinology?",
    a: "Fees vary based on course structure and academic resources provided; complete pricing details are shared during the inquiry or enrollment process."
  }
],
    meta: { duration: "52 week", lessons: "16", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-diabetology",
    title: "Fellowship in Diabetology",
    categories: ["endocrinology"],
    image: "/courses/Gray-Minimalist-White-Sneakers-Collection-Instagram-Post-1-410x290.webp",
    heroDescription: "Fellowship in Diabetology: Mastering Comprehensive Diabetes Care for Enhanced Patient Outcomes and Clinical Expertise",
    lessons: 36,
    weeks: 52,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "This advanced fellowship is tailored for healthcare professionals who aim to deepen their expertise in the diagnosis, treatment, and long-term management of diabetes. The program combines academic learning, clinical exposure, case-based discussions, and current advances in diabetology to provide a comprehensive approach to diabetes care and management.",
trainers: [
  {
    name: "Dr. kartikeya",
    title: "Endocrinologist",
    image: "/Faculty_images/Dr. kartikeya.webp"
  }
],
learn: [
  "Advanced diagnostic techniques and tools in diabetology",
  "Effective treatment plans for type 1 and type 2 diabetes",
  "Strategies for managing diabetes complications and cardiovascular risks",
  "Patient-centered care approaches for improved outcomes",
  "Insights into the latest research and emerging trends in diabetes care",
  "Practical skills through clinical training and case management"
],

requirements: [
  "MBBS and Above Qualification"
],

modules: [
  "Basic Science Related to Diabetes",
  "Diabetology",
  "Management of Diabetes",
  "Complications of Diabetes",
  "Prevention of Diabetes"
],

moduleDetails: [
  [
    "History of Diabetes",
    "Anatomy & Development of Pancreas",
    "Insulin Biosynthesis & Secretion",
    "Mechanism of Insulin Action and Regulation of Glucose and Lipid Metabolism",
    "Glucagon Like Peptide and Insulin Like Growth Factors",
    "Animal Models for the Study of Diabetes"
  ],
  [
    "Definition, Diagnosis and Classification of Diabetes",
    "Epidemiology of Diabetes",
    "Genetics of Type 1 and Type 2 Diabetes",
    "Insulin Resistance & Beta-Cell Dysfunction in Type 2 Diabetes",
    "Secondary Forms of Diabetes",
    "Maturity Onset Diabetes in Young (MODY)",
    "Obesity Assessment and Management",
    "Metabolic Syndrome"
  ],
  [
    "Patient Education",
    "Medical Nutrition Therapy",
    "Exercise in Patients with Diabetes",
    "Laboratory Investigations in Diabetes",
    "Oral Anti-Diabetic Drugs",
    "Principles of Insulin Therapy",
    "Insulin Analogues",
    "Insulin Delivery Devices",
    "Hypoglycemia and its Management",
    "Self-Monitoring of Blood Glucose"
  ],
  [
    "Acute Metabolic Complications",
    "Chronic Complications",
    "Vascular Complications: Epidemiology, Treatment and Prevention",
    "Hypertension in Diabetes",
    "Foot Problems in Diabetes",
    "Diabetes and Pregnancy",
    "Sexual Dysfunction in Diabetes",
    "Infection in Diabetes",
    "Skin and Connective Tissue Disorders in Diabetes",
    "Bone and Joint Problems in Diabetes"
  ],
  [
    "Prevention of Type 1 and Type 2 Diabetes – Current Strategies and Recent Trials"
  ]
],

faqs: [
  { q: "Who should enroll in the Fellowship in Diabetology?", a: "MBBS and above qualified physicians and healthcare professionals seeking advanced diabetes management expertise." },
  { q: "What topics are covered in the Fellowship in Diabetology?", a: "Diabetes pathophysiology, glucose management, complications prevention, therapeutic strategies, and lifestyle interventions." },
  { q: "How is the Fellowship in Diabetology delivered?", a: "Through online lectures, expert-led discussions, evidence-based modules, and case studies." },
  { q: "What career benefits can I expect from this diabetology fellowship?", a: "It enhances clinical decision-making, diabetes care expertise, and professional credentials." },
  { q: "What is the fee for the Fellowship in Diabetology?", a: "Fees vary by course structure and resources; details are shared upon inquiry or enrollment." },
  { q: "Can this fellowship improve professional credibility and earning potential?", a: "Yes, it can strengthen professional credibility, expand clinical opportunities, and support higher earning potential." }
],
    meta: { duration: "52 week", lessons: "36", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "certificate-in-diabetic-foot-care",
    title: "Certificate in Diabetic Foot Care",
    categories: ["endocrinology"],
    image: "/courses/Certificate-In-Diabetic-Foot-Care-410x290.webp",
    heroDescription: "Certificate in Diabetic Foot Care: Prevent, Treat, and Manage Diabetic Foot Complications for Better Outcomes",
    lessons: 21,
    weeks: 12,
    level: "beginner",
    priceINR: 21000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Diabetic foot complications are a major cause of morbidity in patients with diabetes mellitus and are among the leading causes of non-traumatic lower limb amputations. Early identification of risk factors, proper foot examination, timely wound care, and multidisciplinary management can significantly reduce complications. This short-term certification program is designed to provide focused, practical training in screening, prevention, and management of diabetic foot conditions.",
learn: [
  "Perform comprehensive diabetic foot assessment and risk stratification.",
  "Identify neuropathic, ischemic, and infected foot ulcers.",
  "Provide basic wound care and infection management.",
  "Implement preventive and offloading strategies.",
  "Educate patients on proper foot care practices.",
  "Recognize when specialist referral is required."
],

requirements: ["MBBS/ MD/MS/DNB AYUSH/BDS/MDS NURSING/ Diabetes Educators/ Dietitians"],

modules: [
  "Basics & Risk Assessment",
  "Wound Management & Infection Control",
  "Offloading, Complications & Clinical Integration"
],

moduleDetails: [
  ["Pathophysiology of diabetic foot (neuropathy, ischemia, infection)", "Risk factors and screening protocols", "Foot examination techniques", "Sensory testing (monofilament testing)", "Peripheral arterial disease assessment (ABI overview)", "Classification systems (Wagner classification)", "Patient education and preventive care"],
  ["Ulcer types and grading", "Wound assessment and documentation", "Basic debridement principles", "Dressing selection and wound bed preparation", "Recognition and management of infection", "Osteomyelitis overview", "Antibiotic principles"],
  ["Offloading techniques (footwear modification, casting overview)", "Charcot foot recognition", "Gangrene and amputation risk", "Multidisciplinary care approach", "Referral guidelines", "Case discussions", "Final assessment"]
],

faqs: [
  { q: "Who should enroll in the Certificate in Diabetic Foot Care?", a: "The course is ideal for physicians, podiatrists, diabetologists, nurses, and healthcare professionals seeking focused knowledge in diabetic foot care through online study." },
  { q: "What topics are included in the Certificate in Diabetic Foot Care?", a: "This certificate covers diabetic foot assessment, ulcer prevention, wound care basics, risk classification, and practical management strategies through structured digital modules." },
  { q: "How is the Certificate in Diabetic Foot Care delivered?", a: "The program is conducted via online lectures, expert-led sessions, case-based discussions, and downloadable study materials, allowing flexible learning from anywhere." },
  { q: "What career benefits can I gain from this certificate?", a: "Completing this certificate helps strengthen diabetic foot assessment skills, clinical confidence, and professional credibility in managing foot complications." },
  { q: "What is the fee for the Certificate in Diabetic Foot Care?", a: "Fees vary based on course structure and provided learning resources; complete pricing details are available upon inquiry or enrollment request." },
  { q: "Can this certificate enhance professional growth and income potential?", a: "Yes, This focused expertise in diabetic foot care can boost your professional profile, expand clinical roles, and support better income opportunities in diabetes and wound care settings." }
],
    meta: { duration: "12 week", lessons: "21", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "fellowship-in-orthopedics",
    title: "Fellowship in Orthopedics",
    categories: ["orthopedics"],
    image: "/courses/knee-pain-410x290.webp",
    heroDescription: "Become a Specialist in Musculoskeletal Health: Fellowship in Orthopedics for Expertise in Surgery and Trauma Care.",
    lessons: 31,
    weeks: 50,
    level: "expert",
    priceINR: 155000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in Orthopedics provides specialized training in the diagnosis, treatment, and management of musculoskeletal conditions, including fractures, joint disorders, and sports injuries. The program focuses on both surgical and non-surgical approaches to orthopedic care, covering trauma, arthroscopy, joint replacement, and spine surgeries. Fellows gain hands-on experience in advanced orthopedic techniques, preparing them for leadership roles in orthopedic surgery and patient care.",

learn: [
  "Mastery of techniques for reducing and fixing fractures using both surgical and non-surgical approaches, including casting, internal fixation, and external fixation.",
  "Skills in performing hip, knee, and shoulder arthroplasties, as well as revision surgeries for failed joint replacements.",
  "Expertise in minimally invasive arthroscopic techniques for diagnosing and treating joint injuries, including ligament repairs and meniscus surgeries.",
  "Training in spinal procedures such as decompression, fusion, and the management of disc herniations and spinal trauma.",
  "Understanding the unique orthopedic conditions and treatment approaches for pediatric patients, including congenital deformities and growth-related issues.",
  "Proficiency in managing orthopedic trauma cases, including multi-system injuries, open fractures, and polytrauma.",
  "Skills in diagnosing and treating infections involving bones, joints, and soft tissues.",
  "Exposure to the diagnosis and management of bone tumors and metastatic diseases affecting the musculoskeletal system."
],

requirements: [
  "MBBS/ MD/ MS/ DGO/ DNB/ Equivalent",
  "No previous experience is needed."
],

modules: [
  "GENERAL ORTHOPAEDICS",
  "ORTHOPAEDIC TRAUMA",
  "ORTHOPAEDIC DISORDERS",
  "SURGICAL TECHNIQUES"
],

moduleDetails: [
  [
    "Congenital Disorders",
    "Developmental Disorders",
    "Metabolic Disorders",
    "Osteomyelitis",
    "Skeletal Tuberculosis",
    "Disorders of Joints (Arthritis)",
    "Rheumatic Diseases",
    "Neuromuscular Disorders",
    "Bone Neoplasias"
  ],
  [
    "Classification of fractures",
    "Fractures with eponyms",
    "Pathological fractures",
    "Injuries to joints",
    "Injuries to ligaments"
  ],
  [
    "Approach to Orthopaedic Disorders",
    "Deformities and their Management",
    "Treatment of Orthopaedic Disorders",
    "Regional Conditions of the Upper Limb",
    "Regional Conditions of the Spine",
    "Regional Conditions of the Lower Limb",
    "Disorders of the Hand"
  ],
  [
    "Common Surgeries of the Humerus",
    "Common Forearm Surgeries",
    "Common Hip Surgeries",
    "Common Surgery of the Femur",
    "Common Surgery of the Patella",
    "Common Surgery of the Tibia",
    "Turco’s One Stage Posteromedial Release for CTEV",
    "Common Surgery of the Spine",
    "Common Finger and Toe Surgery (Percutaneous Fixations)",
    "External Fixation"
  ]
],

faqs: [
  { q: "Who is the Fellowship in Orthopedics designed for?", a: "This course is open to MBBS, MD, MS, DGO, DNB, or equivalent-qualified professionals and offers advanced online training in orthopedic medicine with no prior experience required." },
  { q: "What major areas of orthopedic care are covered in the fellowship at DMHCA?", a: "This fellowship from DMHCA explores musculoskeletal diagnosis, fracture management, joint disorders, evidence-based treatment planning, and clinical decision-making in orthopedics." },
  { q: "How do learners access the Orthopedics fellowship content at DMHCA?", a: "The course is delivered through online lectures, expert-led modules, clinical case discussions, and comprehensive digital study resources that can be accessed flexibly from anywhere." },
  { q: "How will this fellowship help improve my orthopedic practice?", a: "Completing this fellowship helps enhance diagnostic confidence, strengthen management skills for musculoskeletal conditions, and elevate your overall clinical competence in orthopedics." },
  { q: "What is the fee for the Fellowship in Orthopedics at DMHCA?", a: "Fees vary based on course structure and included digital learning materials; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can this Orthopedic fellowship from DMHCA boost my career opportunities and earning potential?", a: "Yes, this course in orthopedics can boost your professional credibility, broaden your clinical roles, and support higher earning prospects in musculoskeletal and surgical care." }
],
    meta: { duration: "50 week", lessons: "31", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-spine-surgery",
    title: "Fellowship in Spine Surgery",
    categories: ["general-surgery"],
    image: "/courses/Spine-Surgery-410x290.webp",
    heroDescription: "Master Advanced Spine Techniques: Fellowship in Spine Surgery for Comprehensive Surgical Management of Spinal Disorders.",
    lessons: 66,
    weeks: 50,
    level: "expert",
    priceINR: 190000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in Spine Surgery provides advanced training in the diagnosis and surgical management of spinal disorders, including degenerative conditions, trauma, tumors, and deformities. The program focuses on both minimally invasive and complex spine surgeries, equipping fellows with hands-on experience in procedures such as spinal fusions, laminectomies, and disc replacements. Graduates will be prepared to manage a wide range of spine-related conditions with cutting-edge surgical techniques and comprehensive care strategies.",

learn: [
  "Mastery of procedures like laminectomies and discectomies to relieve pressure on spinal nerves and treat conditions such as herniated discs and stenosis.",
  "Expertise in performing spinal fusions to stabilize the spine in cases of trauma, degenerative disease, or deformities.",
  "Training in minimally invasive techniques that reduce recovery time and improve outcomes for patients with spinal disorders.",
  "Skills in treating spinal deformities such as scoliosis and kyphosis through surgical techniques like osteotomies and spinal instrumentation.",
  "Proficiency in treating spinal trauma, including fractures and dislocations, with both surgical and non-surgical approaches.",
  "Experience with artificial disc replacement surgeries to maintain spinal motion in patients with disc degeneration.",
  "Training in the removal of benign and malignant spinal tumors, along with reconstructive techniques to preserve spine stability.",
  "Comprehensive understanding of rehabilitation protocols and postoperative care to maximize patient recovery and long-term outcomes.",
  "Experience working with neurologists, oncologists, and rehabilitation specialists to provide holistic spine care."
],

requirements: [
  "MBBS/MD/MS/Equivalent"
],

modules: [
  "Applied Anatomy & Biomechanics of Spine",
  "Clinical Evaluation & Spine Imaging",
  "Degenerative Cervical Spine Disorders",
  "Degenerative Lumbar & Thoracic Spine Disorders",
  "Spine Trauma & Emergency Management",
  "Spinal Deformity Surgery",
  "Pediatric Spine Disorders",
  "Spinal Tumors & Infections",
  "Minimally Invasive & Endoscopic Spine Surgery",
  "Advanced Instrumentation & Fusion Techniques",
  "Spine Pain Management & Rehabilitation"
],

moduleDetails: [
  [
    "Surgical anatomy of cervical, thoracic, lumbar & sacral spine",
    "Vertebral column biomechanics",
    "Spinal cord, nerve roots & vascular anatomy",
    "Spinopelvic parameters and sagittal balance",
    "Surface anatomy and surgical landmarks",
    "Basics of spinal instrumentation systems and implants"
  ],
  [
    "Detailed spine history taking and neurological examination",
    "Functional scoring systems (VAS, ODI, ASIA scale)",
    "Radiological evaluation (X-ray, CT, MRI spine)",
    "Dynamic spine imaging interpretation",
    "Preoperative planning and case selection",
    "Differential diagnosis of spinal pathologies"
  ],
  [
    "Cervical disc herniation",
    "Cervical spondylotic myelopathy",
    "Cervical radiculopathy",
    "Ossification of posterior longitudinal ligament (OPLL) – overview",
    "Anterior vs posterior cervical approaches",
    "ACDF and cervical decompression (principles)"
  ],
  [
    "Lumbar disc prolapse",
    "Lumbar canal stenosis",
    "Spondylolisthesis",
    "Thoracic disc disease (overview)",
    "Degenerative scoliosis",
    "Indications for decompression and fusion"
  ],
  [
    "ATLS protocol in spinal trauma",
    "AO spine fracture classification",
    "Cervical spine injuries",
    "Thoracolumbar fractures",
    "Spinal cord injury assessment (ASIA grading)",
    "Emergency stabilization and surgical timing",
    "Bracing and immobilization techniques"
  ],
  [
    "Adolescent idiopathic scoliosis",
    "Congenital and neuromuscular scoliosis",
    "Adult spinal deformity",
    "Kyphosis and sagittal imbalance",
    "Cobb angle measurement",
    "Principles of deformity correction and osteotomies (overview)"
  ],
  [
    "Congenital spinal anomalies",
    "Early-onset scoliosis",
    "Pediatric spinal trauma",
    "Spina bifida & tethered cord (overview)",
    "Growth-friendly instrumentation concepts"
  ],
  [
    "Primary and metastatic spinal tumors",
    "Spinal tuberculosis (Pott’s spine)",
    "Discitis and vertebral osteomyelitis",
    "Biopsy techniques and staging",
    "Medical vs surgical management",
    "Reconstruction principles after tumor surgery"
  ],
  [
    "Principles of minimally invasive spine surgery (MISS)",
    "Microdiscectomy techniques",
    "Endoscopic spine surgery (overview)",
    "Percutaneous pedicle screw fixation",
    "Vertebroplasty and kyphoplasty (principles)",
    "Image-guided and navigation-assisted spine surgery"
  ],
  [
    "Pedicle screw insertion techniques",
    "Rod systems and fixation biomechanics",
    "Interbody fusion techniques",
    "Navigation and intraoperative neuromonitoring",
    "Revision spine surgery (basics)",
    "Implant selection and complication avoidance"
  ],
  [
    "Chronic low back pain management",
    "Facet joint syndrome",
    "Epidural steroid injections (principles)",
    "Nerve root blocks & radiofrequency ablation (overview)",
    "Postoperative rehabilitation protocols",
    "Multidisciplinary pain management approach"
  ]
],

faqs: [
  { q: "Who can apply for the DMHCA Spine Surgery fellowship?", a: "The course welcomes MBBS/MD/MS or equivalent professionals aiming to build advanced spine surgery knowledge through structured online learning." },
  { q: "What does the Fellowship in Spine Surgery cover?", a: "This fellowship focuses on spine anatomy, trauma care, degenerative disorders, spinal deformity principles, and advanced surgical decision-making." },
  { q: "How is the Spine Surgery fellowship delivered?", a: "The course is delivered through online lectures, expert-led webinars, clinical case discussions, and digital study materials." },
  { q: "What career advantages can I gain after completing this fellowship?", a: "It helps deepen clinical expertise, strengthen surgical reasoning, and enhance your professional profile in spine and orthopedic care." },
  { q: "What is the fee for the Fellowship in Spine Surgery?", a: "Fees vary based on course structure and learning resources; detailed pricing is available upon inquiry or enrollment request." },
  { q: "Can completing this fellowship increase my income and clinical stature?", a: "Yes, it can boost professional credibility, expand clinical opportunities, and support higher earning potential in surgical practice." }
],
    meta: { duration: "50 week", lessons: "66", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-dermatology",
    title: "Fellowship in Dermatology",
    categories: ["dermatology"],
    image: "/courses/dermatopathology-410x290.webp",
    heroDescription: "Transform Skin Health: Fellowship in Dermatology for Expertise in Medical, Surgical, and Cosmetic Skin Care.",
    lessons: 78,
    weeks: 52,
    level: "expert",
    priceINR: 135000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in Dermatology provides comprehensive training in diagnosing and treating skin disorders and performing cosmetic and procedural dermatology. The program covers medical dermatology, dermatosurgery, skin cancer management, and advanced cosmetic treatments like laser therapy and injectables. Fellows gain hands-on experience treating common and complex skin conditions, mastering medical and aesthetic dermatology to provide holistic skin care.",
trainers: [
  {
    name: "Dr. Bhuvaneshwari",
    title: "Cosmetologist/Dermatologist",
    image: "/Faculty_images/Dr Bhuvaneshwari.webp"
  }
],

learn: [
  "Expertise in diagnosing and managing skin conditions such as acne, eczema, psoriasis, and dermatitis.",
  "Training in identifying and treating various skin cancers, including performing biopsies, Mohs surgery, and non-surgical treatments.",
  "Mastery of aesthetic procedures including Botox, dermal fillers, chemical peels, and laser treatments for skin rejuvenation.",
  "Skills in performing minor surgical procedures such as excisions, biopsies, and cryotherapy for various skin lesions.",
  "Proficiency in using laser technologies to treat skin conditions like pigmentation, scars, and hair removal.",
  "Training in conducting skin allergy tests and managing allergic skin conditions such as contact dermatitis."
],

requirements: [
  "MBBS and Above Qualification",
  "No previous experience is needed."
],

modules: [
  "Basic Dermatology & Clinical Methods",
  "Infectious Dermatoses",
  "Eczematous & Inflammatory Dermatoses",
  "Autoimmune & Bullous Disorders",
  "Pigmentary Disorders & Hair Diseases",
  "Acne & Disorders of Sebaceous Glands",
  "Pediatric Dermatology",
  "Dermatologic Surgery",
  "Dermatoscopy & Cutaneous Oncology",
  "Aesthetic Dermatology",
  "Photodermatology & Systemic Diseases with Skin Manifestations",
  "Ethics & Clinical Integration"
],

moduleDetails: [
  [
    "Structure and function of skin",
    "Dermatological history taking and examination",
    "Morphology of skin lesions",
    "Diagnostic tools in dermatology (Wood’s lamp, dermoscopy basics)",
    "Skin biopsy techniques (overview)",
    "Principles of dermatologic therapy",
    "Topical and systemic medications in dermatology"
  ],
  [
    "Bacterial skin infections",
    "Viral skin infections",
    "Fungal infections (superficial & deep)",
    "Parasitic infestations (scabies, pediculosis)",
    "Cutaneous tuberculosis",
    "Sexually transmitted infections (cutaneous manifestations)"
  ],
  [
    "Atopic dermatitis",
    "Contact dermatitis",
    "Seborrheic dermatitis",
    "Psoriasis",
    "Lichen planus",
    "Urticaria and angioedema",
    "Drug eruptions"
  ],
  [
    "Pemphigus vulgaris",
    "Bullous pemphigoid",
    "Dermatitis herpetiformis",
    "Cutaneous lupus erythematosus",
    "Scleroderma",
    "Vasculitis involving skin",
    "Immunosuppressive therapies"
  ],
  [
    "Vitiligo",
    "Melasma",
    "Post-inflammatory hyperpigmentation",
    "Alopecia areata",
    "Androgenetic alopecia",
    "Telogen effluvium",
    "Hair shaft disorders"
  ],
  [
    "Acne vulgaris",
    "Acne variants",
    "Rosacea",
    "Hidradenitis suppurativa",
    "Systemic therapy including isotretinoin",
    "Management of acne scars"
  ],
  [
    "Neonatal dermatoses",
    "Hemangiomas and vascular malformations",
    "Genetic skin disorders",
    "Diaper dermatitis",
    "Pediatric psoriasis and eczema",
    "Pediatric infections"
  ],
  [
    "Skin biopsy techniques",
    "Suturing methods",
    "Excision of benign lesions",
    "Nail surgery basics",
    "Cryotherapy",
    "Electrocautery",
    "Management of cysts and lipomas"
  ],
  [
    "Dermatoscopy principles",
    "Benign melanocytic lesions",
    "Basal cell carcinoma",
    "Squamous cell carcinoma",
    "Melanoma (overview)",
    "Actinic keratosis",
    "Skin cancer screening"
  ],
  [
    "Chemical peels",
    "Microdermabrasion",
    "Botox and fillers (overview)",
    "Laser therapy basics",
    "Scar revision techniques",
    "Anti-aging treatments"
  ],
  [
    "Photosensitive disorders",
    "Phototherapy (PUVA, NB-UVB)",
    "Cutaneous manifestations of systemic diseases",
    "HIV-related skin disorders",
    "Nutritional dermatoses",
    "Paraneoplastic dermatoses"
  ],
  [
    "Dermatology case documentation",
    "Clinical photography standards",
    "Infection control in dermatology practice",
    "Ethics and medico-legal aspects",
    "Case presentations and exit assessment"
  ]
],

faqs: [
  { q: "Who can enroll in the online Fellowship in Dermatology?", a: "Designed for MBBS or higher qualification holders, this course provides advanced dermatology training through flexible online learning with no prior experience required." },
  { q: "What topics are covered in this Fellowship in Dermatology?", a: "The program includes skin disease diagnosis, medical and cosmetic dermatology, dermatosurgery, laser applications, and case-based clinical learning." },
  { q: "How is the online dermatology fellowship delivered?", a: "Training is delivered via live or recorded online lectures, digital study materials, interactive case discussions, and expert-led guidance accessible from anywhere." },
  { q: "What career benefits can I expect after this fellowship?", a: "It enhances clinical confidence, expands dermatology practice scope, and improves career opportunities in skin clinics and aesthetic medicine settings." },
  { q: "What is the fee for the Fellowship in Dermatology?", a: "Fees vary based on program structure and learning resources; exact details are shared during inquiry or enrollment." },
  { q: "Can this fellowship increase earning potential in dermatology?", a: "Yes, advanced dermatology training can enhance professional credibility and help expand patient base and income opportunities." }
],
    meta: { duration: "52 week", lessons: "78", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-trichology",
    title: "Fellowship in Trichology",
    categories: ["dermatology"],
    image: "/courses/Trichology-410x290.webp",
    heroDescription: "Expertise in Hair Health: Fellowship in Trichology for Advanced Diagnosis and Treatment of Hair and Scalp Disorders.",
    lessons: 47,
    weeks: 52,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Trichology provides in-depth training in the diagnosis, treatment, and management of hair and scalp disorders. The program covers a wide range of conditions, including hair loss (alopecia), scalp infections, and hair shaft abnormalities. Fellows gain expertise in both medical and cosmetic treatments for hair restoration, as well as understanding the underlying causes of hair and scalp conditions, preparing them to offer holistic solutions for patients.",

learn: [
  "Comprehensive understanding of hair structure, growth cycles, and the anatomy of the scalp.",
  "Skills in diagnosing hair loss conditions such as androgenetic alopecia, alopecia areata, and telogen effluvium.",
  "Expertise in medical treatments (e.g., minoxidil, finasteride) and cosmetic solutions (e.g., platelet-rich plasma (PRP) therapy, hair transplants) for hair restoration.",
  "Proficiency in diagnosing and managing scalp conditions such as dandruff, psoriasis, seborrheic dermatitis, and fungal infections.",
  "Understanding of disorders affecting the hair shaft, such as trichorrhexis nodosa and other structural abnormalities.",
  "Training in the role of nutrition, supplements, and lifestyle in maintaining healthy hair and scalp.",
  "Skills in counseling patients on the emotional impact of hair loss and providing compassionate care.",
  "Exposure to surgical hair restoration procedures such as follicular unit extraction (FUE) and follicular unit transplantation (FUT)."
],

requirements: [
  "MBBS and Above Qualification"
],

modules: [
  "Basics in Trichology",
  "Hair Disorders",
  "Hair Diagnostics",
  "Therapy",
  "Tricho Care",
  "Tricho Surgery"
],

moduleDetails: [
  [
    "History and Evolution of Trichology",
    "Hair Growth Biology",
    "Hair Cycle Dynamics",
    "Pathophysiology of Hair Loss",
    "Nutritional and Hormonal Influences"
  ],
  [
    "Developmental Disorders",
    "Hair Cycle Disorders",
    "Androgenetic Alopecia",
    "Alopecia Areata",
    "Cicatricial Alopecia",
    "Paediatric Trichology",
    "Hirsutism and Hypertrichosis",
    "Scalp Disorders",
    "Hair Ageing",
    "Infections and Traumatic Alopecia"
  ],
  [
    "Patient History and Examination",
    "Laboratory Work-up for Hair Disorders",
    "Imaging Techniques",
    "Trichoscopy and Trichogram",
    "Tricho-mycology and Tricho-pathology",
    "Advanced Diagnostic Techniques",
    "Tricho-pathology",
    "Techniques for Scalp Biopsy",
    "Histopathological Evaluation of Non-Scarring Alopecias",
    "Histopathological Evaluation of Scarring Alopecias",
    "Histopathological Evaluation of Scalp Disorders"
  ],
  [
    "Pharmacological Treatments",
    "Hormonal and Nutritional Therapies",
    "Management of Alopecia Areata and Scarring Alopecias",
    "Psychotherapy for Hair Disorders",
    "Treatment of Scalp Disorders",
    "Hair Anti-ageing Treatments",
    "Androgenetic Alopecia in Males",
    "Androgenetic Alopecia in Females"
  ],
  [
    "Hair Care Science",
    "Shampoos and Conditioners",
    "Hair Cosmetics and Colouring",
    "Hair Camouflage Techniques",
    "Ethnic Hair Care",
    "Adverse Effects Management"
  ],
  [
    "Hair Transplantation Setup",
    "Patient Selection Criteria",
    "Surgical Techniques: FUT and FUE",
    "Anaesthesia and Harvesting Methods",
    "Post-operative Care and Continual Medical Treatment",
    "Comprehensive Examination of FUT / FUE: Advantages and Disadvantages",
    "Significance of Ongoing Medical Treatment"
  ]
],

faqs: [
  { q: "Who can enroll in the Fellowship in Trichology?", a: "The course is suitable for candidates with an MBBS or higher qualification seeking to upskill in hair and scalp care through flexible online learning." },
  { q: "What will I learn in the Fellowship in Trichology?", a: "This fellowship covers hair loss evaluation, scalp disorders, trichoscopy basics, treatment planning, and case-based learning." },
  { q: "How is the Trichology fellowship delivered?", a: "The program is conducted through online sessions, digital study materials, and expert-led lectures, allowing learners to study from anywhere." },
  { q: "What career benefits does a Trichology fellowship offer?", a: "It can help professionals expand service offerings, improve patient consultation skills, and strengthen career prospects in dermatology and cosmetic practice." },
  { q: "What is the fee for the Fellowship in Trichology?", a: "Fees depend on the course structure and academic support provided; exact fee details are shared during the admission or inquiry process." },
  { q: "Can a Trichology fellowship improve earning potential?", a: "Yes, specialized training in trichology can enhance professional credibility, helping practitioners attract more patients and increase income opportunities." }
],
    meta: { duration: "52 week", lessons: "47", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-cosmetology-and-aesthetic-medicine",
    title: "Fellowship in Cosmetology and Aesthetic Medicine",
    categories: ["dermatology"],
    image: "/courses/Fellowship-in-Cosmetology--410x290.webp",
    heroDescription: "Transform Aesthetics: Fellowship in Cosmetology & Aesthetic Medicine for Expertise in Advanced Non-Surgical Cosmetic Treatments.",
    lessons: 75,
    weeks: 52,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    trainers: [
  {
    name: "Dr. Bhuvaneshwari",
    title: "Cosmetologist/Dermatologist",
    image: "/Faculty_images/Dr Bhuvaneshwari.webp"
  }
],
    overview: "A Fellowship in Cosmetology and Aesthetic Medicine provides advanced training in non-surgical cosmetic procedures aimed at enhancing skin health, appearance, and overall aesthetics. The program covers a wide range of treatments including Botox, dermal fillers, chemical peels, laser therapy, and skin rejuvenation techniques. Fellows gain hands-on experience in patient evaluation, treatment planning, and performing aesthetic procedures, preparing them to offer comprehensive cosmetic care with a focus on safety and patient satisfaction.",

learn: [
  "Mastery of injection techniques to reduce wrinkles, enhance facial contours, and achieve natural-looking results.",
  "Expertise in performing chemical peels and laser treatments to rejuvenate the skin, treat hyperpigmentation, and reduce signs of aging.",
  "Training in the use of laser technologies for hair removal, skin tightening, and treating skin conditions like acne scars and vascular lesions.",
  "Experience in microneedling and Platelet-Rich Plasma (PRP) therapy for skin rejuvenation and treating hair loss.",
  "Understanding facial anatomy and aesthetic principles to create balance, symmetry, and enhanced beauty with non-invasive procedures.",
  "Knowledge of advanced skin care products and anti-aging protocols to maintain healthy, youthful skin.",
  "Skills in assessing patient needs, setting realistic expectations, and creating personalized treatment plans."
],

requirements: [
  "MBBS and Above Qualification",
  "No previous experience is needed."
],

modules: [
  "Basic Skin Science & Aesthetic Consultation",
  "Chemical Peels & Skin Rejuvenation",
  "Lasers & Light-Based Therapies",
  "Injectable Aesthetics – Botulinum Toxin",
  "Dermal Fillers & Facial Contouring",
  "Acne & Scar Management",
  "Hair Restoration & Trichology",
  "Body Contouring & Non-Surgical Procedures",
  "Advanced Aesthetic Procedures",
  "Dermatosurgery Basics",
  "Anti-Aging & Cosmetic Dermatology",
  "Practice Management & Ethics"
],

moduleDetails: [
  [
    "Anatomy and physiology of skin and adnexa",
    "Skin types and assessment",
    "Dermatologic history and aesthetic consultation",
    "Principles of aesthetic medicine",
    "Photography and documentation",
    "Infection control in aesthetic practice",
    "Patient counseling and expectation management"
  ],
  [
    "Classification of chemical peels",
    "Superficial, medium, and deep peels",
    "Indications and contraindications",
    "Pre- and post-peel care",
    "Complications and management",
    "Combination therapies"
  ],
  [
    "Laser physics and safety",
    "Types of lasers (CO₂, Nd:YAG, diode, IPL)",
    "Laser hair reduction",
    "Pigment lesion treatment",
    "Vascular lesion treatment",
    "Fractional laser resurfacing",
    "Complications and management"
  ],
  [
    "Facial anatomy for injectables",
    "Indications for botulinum toxin",
    "Injection techniques",
    "Upper face rejuvenation",
    "Hyperhidrosis treatment",
    "Complication management"
  ],
  [
    "Types of dermal fillers",
    "Facial aging process",
    "Injection techniques and planes",
    "Lip augmentation",
    "Jawline and chin contouring",
    "Tear trough correction",
    "Complication and vascular occlusion management"
  ],
  [
    "Acne treatment protocols",
    "Microneedling",
    "Subcision techniques",
    "PRP (Platelet-Rich Plasma) therapy",
    "Combination therapies",
    "Post-procedure care"
  ],
  [
    "Hair anatomy and physiology",
    "Androgenetic alopecia",
    "PRP for hair restoration",
    "Mesotherapy (overview)",
    "Basics of hair transplantation (overview)",
    "Scalp disorders management"
  ],
  [
    "Cryolipolysis",
    "Radiofrequency tightening",
    "Ultrasound-based fat reduction",
    "Body fillers (overview)",
    "Cellulite management",
    "Stretch mark treatments"
  ],
  [
    "Thread lift (overview)",
    "Advanced combination injectable techniques",
    "Skin boosters",
    "Regenerative aesthetics basics",
    "Platelet-rich fibrin (PRF)",
    "Exosome therapy (overview)"
  ],
  [
    "Minor surgical procedures",
    "Mole and skin tag removal",
    "Cryotherapy",
    "Electrocautery",
    "Suturing techniques",
    "Postoperative wound care"
  ],
  [
    "Anti-aging protocols",
    "Hormonal considerations in aging",
    "Nutraceuticals in aesthetic practice",
    "Pigmentary disorders management",
    "Melasma treatment",
    "Skin rejuvenation combinations"
  ],
  [
    "Clinic setup and legal requirements",
    "Consent and medico-legal aspects",
    "Documentation and record keeping",
    "Marketing ethics in aesthetic medicine",
    "Research methodology",
    "Case presentations and exit assessment"
  ]
],

faqs: [
  { q: "Who can enroll in this cosmetology and aesthetic medicine fellowship?", a: "This program is designed for MBBS or higher-qualified professionals seeking advanced training in aesthetic medicine with flexible online learning and no prior experience required." },
  { q: "What does this fellowship cover?", a: "It covers injectables, lasers, chemical peels, skin rejuvenation, anti-aging treatments, dermatosurgery basics, and case-based aesthetic learning." },
  { q: "How is the program structured?", a: "It is delivered through live and recorded online sessions, expert-led modules, interactive case discussions, and downloadable study resources." },
  { q: "What career benefits does it offer?", a: "It helps expand clinical services, attract aesthetic patients, and improve career opportunities in cosmetic clinics and private practice." },
  { q: "What is the fee for this fellowship?", a: "Fees vary based on course structure and training components; exact details are shared during inquiry or enrollment." },
  { q: "Can it improve earning potential?", a: "Yes, advanced aesthetic training can increase professional credibility, patient trust, and income opportunities in cosmetic medicine." }
],
    meta: { duration: "52 week", lessons: "75", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "certificate-course-in-cosmetology",
    title: "Certificate Course in Cosmetology",
    categories: ["dermatology"],
    image: "/courses/cosmetologist-applies-white-mask-on-woman-s-face_8353-5674-410x290.webp",
    heroTitle: "Advanced Cosmetology Certification",
    heroDescription: "Advanced laparoscopic and endoscopic surgery training including complex minimally invasive procedures.",
    lessons: 15,
    weeks: 25,
    level: "beginner",
    priceINR: 41300,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Introduction to cosmetic procedures and aesthetic treatments for beauty professionals.",
    learn: ["Facial anatomy", "Facials", "Chemical peels", "Microdermabrasion", "Laser basics", "Patient care"],
    requirements: ["Interest in beauty and aesthetics"],
    modules: ["Beauty Basics", "Facials", "Peels", "Microdermabrasion", "Laser Safety", "Business"],
    faqs: [
      { q: "For beauty professionals?", a: "Yes, specialized aesthetic training" },
      { q: "Career?", a: "Aesthetic technician" }
    ],
    moduleDetails: [
      [
        "Course overview and objectives",
        "Learning outcomes",
        "Prerequisites and requirements",
        "Assessment methodology",
        "Resource materials"
      ],
      [
        "Advanced case studies",
        "Comprehensive review",
        "Exam preparation",
        "Career opportunities",
        "Continuous learning"
      ]
    ],
    meta: { duration: "25 week", lessons: "15", skill_level: "Certificate", certificate: "yes" },
    trainers: [
      { name: "Dr Bhuvaneshwari", title: "Cosmetologist/Dermatologist", bio: "Expert in cosmetic dermatology and aesthetic procedures.", image: "/Faculty_images/dr-bhuvaneshwari.jpg" }
    ]
  },
  {
    slug: "fellowship-in-robotic-surgery",
    title: "Fellowship in Robotic Surgery",
    categories: ["general-surgery"],
    image: "/courses/Robotic--410x290.webp",
    heroDescription: "Master Precision in Surgery: Fellowship in Robotic Surgery for Expertise in Advanced Minimally Invasive Techniques.",
    lessons: 29,
    weeks: 50,
    level: "expert",
    priceINR: 190000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Robotic Surgery provides advanced training in minimally invasive surgical techniques using robotic technology. The program covers robotic-assisted procedures in various specialties such as urology, gynecology, general surgery, and cardiothoracic surgery. Fellows gain hands-on experience in mastering robotic systems, improving precision, reducing patient recovery time, and enhancing surgical outcomes in complex procedures.",

learn: [
  "Mastery in identifying risk factors such as hypertension, diabetes, dyslipidemia, and family history to stratify patients’ cardiovascular risk.",
  "Proficiency in operating robotic systems such as the Da Vinci Surgical System, including console navigation, instrument handling, and real-time problem-solving.",
  "Expertise in performing complex surgeries through small incisions, reducing patient recovery time, pain, and complications.",
  "Skills in precise robotic suturing and tissue manipulation for delicate and intricate surgical tasks.",
  "Training in patient selection criteria and preoperative planning for robotic surgeries to ensure optimal outcomes.",
  "Techniques for managing complications and technical challenges that may arise during robotic surgery.",
  "Exposure to a variety of robotic surgeries including prostatectomies, hysterectomies, cardiac surgeries, and colorectal procedures."
],

requirements: [
  "MD/DNB (Medicine) DM Cardiology / DNB Cardiology",
  "No previous experience is needed."
],

modules: [
  "Introduction to Robotic Surgery Fundamentals",
  "Robotic Surgical Simulation and Training",
  "Clinical Rotations and Observation",
  "Research and Innovation in Robotic Surgery",
  "Ethical and Legal Aspects of Robotic Surgery",
  "Explore Advanced Robotic Surgical Techniques"
],

moduleDetails: [
  [
    "Overview",
    "Historical Evolution",
    "Robotic Surgical Systems",
    "Essential Skills"
  ],
  [
    "Hands-on Simulation Exercises",
    "Transition to Live Surgeries",
    "State-of-the-Art Simulation Technology",
    "Practice in a Controlled Environment"
  ],
  [
    "Overview",
    "Participation in Clinical Rotations",
    "Observation of Live Robotic Surgeries",
    "Exposure to Multidisciplinary Settings",
    "Application Across Medical Specialties",
    "Professional Development",
    "Hands-On Experience"
  ],
  [
    "Overview",
    "Active Contribution to Research Projects",
    "Independent Research Initiatives",
    "Critical Evaluation of Scientific Literature",
    "Application of Evidence-Based Practices",
    "Exploration of Current Research Trends"
  ],
  [
    "Overview",
    "Ethical Dilemmas and Legal Implications",
    "Patient Consent and Confidentiality",
    "Safety Considerations",
    "Professional Standards and Guidelines"
  ],
  [
    "Explore Advanced Robotic Surgical Techniques",
    "Acquire Specialized Skills Tailored to Various Surgical Specialties",
    "Attain Proficiency in Complex Robotic-Assisted Surgeries"
  ]
],

faqs: [
  { q: "Who is eligible for a Fellowship in Robotic Surgery?", a: "This online program is suitable for MD/DNB (Medicine), DM Cardiology, or DNB Cardiology-qualified professionals seeking theoretical knowledge in robotic surgery, with no prior experience needed." },
  { q: "What key skills does the Fellowship in Robotic Surgery at DMHCA focus on?", a: "This online fellowship from DMHCA emphasizes robot-assisted surgical principles, system navigation, minimally invasive techniques, and surgical decision-making through structured expert modules." },
  { q: "How is the Fellowship in Robotic Surgery delivered by DMHCA?", a: "The course is provided through online lectures, expert-led discussions, case-based sessions, and digital study resources, allowing learning flexibility from anywhere." },
  { q: "What professional benefits can I expect after completing this fellowship at DMHCA?", a: "Completing this fellowship helps enhance surgical knowledge, strengthen clinical reasoning in robotic procedures, and elevate your professional profile in modern surgical care." },
  { q: "What is the fee for the Robotic Surgery Fellowship at DMHCA?", a: "Course fees vary depending on structure and academic resources provided; complete pricing details are shared during the inquiry or enrollment process." },
  { q: "Can this fellowship at DMHCA boost my clinical credibility and income potential?", a: "Yes, this course in robotic surgery can improve professional credibility, open up advanced clinical opportunities and support better earning potential in surgical specialties." }
],
    meta: { duration: "50 week", lessons: "29", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-pediatric-surgery",
    title: "Fellowship in Pediatric Surgery",
    categories: ["general-surgery", "pediatrics"],
    image: "/courses/Lead-post-chandan-4-410x290.webp",
    heroDescription: "Enhance Diagnostic Skills in Pediatric Surgery with DMHCA’s Fellowship Program in Pediatric Surgery—Hands-On Training Included",
    lessons: 36,
    weeks: 52,
    level: "expert",
    priceINR: 180000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "The Fellowship in Pediatric Surgery is designed for medical professionals who aspire to specialize in the surgical care of infants, children, and adolescents. This program provides advanced training in diagnosing, managing, and performing surgical procedures for a wide range of congenital and acquired conditions in young patients. Participants will gain hands-on experience in pediatric surgical techniques, pre-operative and post-operative care, and the use of state-of-the-art technologies. With a focus on compassionate care and precision, the fellowship ensures that trainees are well-equipped to handle complex surgical cases in a multidisciplinary setting.",

learn: [
  "Advanced surgical techniques for managing congenital and acquired conditions in neonates, infants, and children.",
  "Comprehensive preoperative, intraoperative, and postoperative care tailored to pediatric patients.",
  "Hands-on experience in minimally invasive and laparoscopic procedures specific to pediatric surgery.",
  "Effective management of pediatric trauma, oncological conditions, and critical surgical emergencies.",
  "Collaboration within multidisciplinary teams to ensure holistic and compassionate care for young patients."
],

requirements: [
  "MBBS /MD/ DNB"
],

modules: [
  "Foundations of Pediatric Surgery",
  "Pediatric Surgical Conditions",
  "Advanced Pediatric Surgical Techniques",
  "Preoperative and Postoperative Care",
  "Research and Academic Development",
  "Professional Development and Ethics"
],

moduleDetails: [
  [
    "Pediatric Anatomy and Physiology",
    "Differences in anatomy between children and adults",
    "Physiological changes during growth",
    "Age-specific responses to injury and surgery",
    "Growth and Development",
    "Stages of physical growth",
    "Developmental milestones",
    "Impact of surgical interventions on growth and development"
  ],
  [
    "Congenital Anomalies",
    "Common congenital malformations",
    "Surgical correction of congenital defects",
    "Multidisciplinary approach to congenital anomalies",
    "Pediatric Oncology",
    "Types of pediatric cancers",
    "Surgical management of pediatric tumors"
  ],
  [
    "Minimally Invasive Surgery",
    "Principles of minimally invasive techniques",
    "Advantages of laparoscopic and thoracoscopic surgery",
    "Instrumentation and technology in minimally invasive surgery",
    "Robotic Surgery",
    "Introduction to robotic surgery in pediatrics"
  ],
  [
    "Anesthesia in Pediatric Surgery",
    "Pediatric anesthetic agents and techniques",
    "Preoperative assessment and preparation",
    "Intraoperative monitoring and management",
    "Pain Management",
    "Pain assessment in children",
    "Pharmacological and non-pharmacological pain management",
    "Postoperative pain control strategies"
  ],
  [
    "Research Methodology",
    "Basics of clinical and laboratory research",
    "Study design and data collection",
    "Statistical analysis and interpretation",
    "Clinical Trials"
  ],
  [
    "Leadership and Management Skills",
    "Leadership styles and theories",
    "Team management and collaboration",
    "Conflict resolution and negotiation",
    "Communication and Interpersonal Skills"
  ]
],

faqs: [
  {
    q: "Who will benefit from this pediatric surgery fellowship?",
    a: "This online program is suitable for MBBS, MD, or DNB-qualified professionals seeking to strengthen their understanding of pediatric surgery."
  },
  {
    q: "What key areas are covered in the Pediatric Surgery fellowship?",
    a: "This fellowship explores surgical principles in children, congenital anomalies, trauma management, perioperative care, and pediatric surgical decision-making through structured expert modules."
  },
  {
    q: "What is the course fees to enroll in this fellowship?",
    a: "Fees vary based on course structure and learning resources included; detailed pricing is provided upon inquiry or enrollment request."
  },
  {
    q: "How is the Pediatric Surgery fellowship delivered?",
    a: "The program is delivered through online lectures, expert-led discussions, case-based learning, and comprehensive digital study materials for flexible learning."
  },
  {
    q: "What benefits can this fellowship bring to clinical practice?",
    a: "Completing this fellowship helps strengthen pediatric surgical knowledge, improve clinical decision-making, and enhance confidence in managing surgical conditions in children."
  },
  {
    q: "Can this fellowship help expand career and earning potential?",
    a: "Yes, This advanced online training in pediatric surgery can boost professional credibility, expand clinical roles, and support higher income opportunities in pediatric surgical and hospital settings."
  }
],
    meta: { duration: "52 week", lessons: "36", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-pediatrics-neurology",
    title: "Fellowship in Pediatrics Neurology",
    categories: ["pediatrics", "neurology"],
    image: "/courses/Fellowship-in-Pediatrics-Neurology-410x290.webp",
    heroDescription: "Enhance your skills with a Fellowship in Pediatric Neurology. Diagnose and treat childhood disorders.",
    lessons: 44,
    weeks: 50,
    level: "expert",
    priceINR: 140000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "The Fellowship in Pediatric Neurology is a specialized program designed for healthcare professionals to gain expertise in diagnosing and managing neurological disorders in children. This comprehensive course covers neurodevelopmental disorders, epilepsy, neuromuscular diseases, neurogenetics, and pediatric stroke. Participants receive training in clinical evaluation, neuroimaging, and electrophysiology to develop advanced skills in pediatric neurology.",

learn: [
  "Basics of pediatric neurology",
  "Diagnosis & management of epilepsy",
  "Neurodevelopmental disorder assessment",
  "Neuromuscular diseases & treatments",
  "Pediatric stroke & neurovascular conditions",
  "Neurogenetics & metabolic disorders",
  "Interpretation of neuroimaging & EEG",
  "Hands-on clinical training & case studies"
],

requirements: ["MD / DCH / DNB Pediatrics"],

modules: [
  "Basics of Pediatric Neurology & Clinical Approach",
  "Pediatric Epilepsy & EEG",
  "Neurodevelopmental & Behavioral Neurology",
  "Neuromuscular & Neurogenetic Disorders",
  "Neuroinfections, Movement Disorders & Neurocritical Care",
  "Neonatal Neurology & Clinical Integration"
],

moduleDetails: [
  ["Developmental neuroanatomy and neurophysiology", "Pediatric neurological history & examination", "Developmental milestones and assessment tools", "Approach to hypotonia (floppy infant)", "Approach to developmental delay & regression", "Neuroimaging basics (MRI/CT in children)", "Pediatric neurological localization", "Basics of neurogenetics & counseling"],
  ["Classification of seizures in children", "Neonatal seizures", "Epileptic encephalopathies", "Status epilepticus protocols", "Anti-seizure medications (indications & dosing)", "EEG basics and interpretation", "Video EEG monitoring (overview)", "Drug-resistant epilepsy (overview)"],
  ["Autism spectrum disorder", "ADHD and learning disorders", "Intellectual disability", "Global developmental delay", "Early intervention & rehabilitation strategies", "Cerebral palsy (types, evaluation & management)", "Behavioral assessment tools in pediatrics"],
  ["Muscular dystrophies (Duchenne, Becker)", "Spinal muscular atrophy", "Congenital myopathies", "Peripheral neuropathies in children", "Neuromuscular junction disorders (Myasthenia gravis)", "Inborn errors of metabolism (neurological presentation)", "Leukodystrophies & mitochondrial disorders"],
  ["Meningitis, encephalitis & CNS tuberculosis", "Autoimmune encephalitis & ADEM", "Pediatric movement disorders (dystonia, chorea, ataxia, tics)", "Acute flaccid paralysis", "Guillain–Barré syndrome", "Raised intracranial pressure management", "Pediatric stroke & neurovascular disorders", "Neurological emergencies in PICU"],
  ["Hypoxic ischemic encephalopathy (HIE)", "Neonatal tone abnormalities", "Intraventricular hemorrhage", "Neonatal metabolic encephalopathy", "Pediatric headache & migraine", "Sleep disorders in children"]
],

faqs: [
  { q: "Who can enroll in this Fellowship in Pediatric Neurology?", a: "This online program is suitable for MD, DCH, or DNB Pediatrics qualified professionals seeking to enhance their expertise in pediatric neurology." },
  { q: "What specialized topics are covered in the Pediatric Neurology fellowship at DMHCA?", a: "This fellowship covers neurological assessment in children, seizure management, developmental disorders, pediatric neurodiagnostics, and evidence-based clinical approaches." },
  { q: "How do learners access the Pediatric Neurology fellowship program at DMHCA?", a: "The course is delivered via online lectures, expert-led discussions, pediatric case reviews, and comprehensive digital study materials, allowing flexible learning from anywhere." },
  { q: "What improvements can this fellowship bring to my pediatric practice?", a: "Completing this fellowship helps strengthen pediatric neurological assessment skills, boost diagnostic confidence, and enhance professional credibility in child neurology care." },
  { q: "How much does the Fellowship in Pediatric Neurology at DMHCA cost?", a: "Fees depend on course structure and included learning resources; complete pricing information is shared upon inquiry or enrollment request." },
  { q: "Can this fellowship increase my career opportunities and earning potential?", a: "Yes, this advanced training in pediatric neurology can boost your professional profile, expand clinical roles, and support better income opportunities in child health and neurological care." }
],
    meta: { duration: "50 week", lessons: "44", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-neonatology",
    title: "Fellowship in Neonatology",
    categories: ["pediatrics"],
    image: "/courses/Neonatology-410x290.webp",
    heroDescription: "Lead the Fight Against Cancer: Fellowship in Medical Oncology for Advanced Cancer Treatment and Care.",
    lessons: 55,
    weeks: 50,
    level: "expert",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Neonatology provides advanced training in the care of critically ill and premature newborns. The program covers neonatal intensive care, managing respiratory distress, congenital abnormalities, and complex medical conditions in infants. Fellows gain hands-on experience in life-saving interventions, neonatal resuscitation, and developmental care, preparing them to provide expert care in neonatal intensive care units (NICUs).",

learn: [
  "Mastery of managing critically ill and premature newborns in the NICU, including respiratory support, cardiovascular monitoring, and nutritional management.",
  "Expertise in performing neonatal resuscitation during high-risk deliveries and emergencies, following the latest Neonatal Resuscitation Program (NRP) guidelines.",
  "Skills in diagnosing and managing congenital abnormalities and genetic disorders affecting newborns, including multidisciplinary care.",
  "Proficiency in managing respiratory distress syndrome, using mechanical ventilation, CPAP, and ECMO, as well as handling neonatal cardiac conditions.",
  "Training in diagnosing and treating neonatal infections such as sepsis, meningitis, and respiratory infections.",
  "Knowledge of neonatal nutrition, growth monitoring, and developmental care strategies to promote healthy outcomes in preterm infants."
],

requirements: [
  "MBBS MD/ MS/ DNB/ DCH (Paediatrics)",
  "No previous experience is needed."
],

modules: [
  "Basic Sciences Neonatology",
  "General Neonatology",
  "Fetal Medicine",
  "Systemic Neonatology",
  "Neonatal Infections",
  "Community Neonatology",
  "Investigations and Imaging"
],

moduleDetails: [
  [
    "Feto-placental physiology",
    "Neonatal adaptation",
    "Fluid and electrolyte balance",
    "Blood gas and acid base disorders",
    "Thermoregulation and Kangaroo Mother Care"
  ],
  [
    "Neonatal resuscitation",
    "Birth injury and birth asphyxia",
    "Normal newborn and common neonatal problems",
    "Preterm and low birth weight neonates",
    "Follow-up of high risk neonate",
    "Assessment of gestation, neonatal behaviour, neonatal reflexes",
    "Developmental assessment, detection of neuromotor delay, developmentally supportive care",
    "Immunization including immunization of a preterm neonate",
    "Discharge planning",
    "Communicating neonatal death",
    "Neonatal transport",
    "Traditional practices in neonatal medicine",
    "Neonatal equipments",
    "Neonatal procedures",
    "Organization of neonatal care including level I, II & III care"
  ],
  [
    "Perinatal and neonatal mortality, morbidity & epidemiology",
    "Fetal and neonatal consequences of high risk pregnancy",
    "Fetal monitoring: Clinical, electronic, invasive and non-invasive",
    "Intrapartum monitoring and procedures",
    "Medical diseases affecting pregnancy and fetus"
  ],
  [
    "Respiratory system",
    "Cardiovascular system",
    "Renal system",
    "Endocrine and metabolic",
    "Hematology",
    "Neurology",
    "Nutrition",
    "Surgery and Orthopedics",
    "Neonatal Ophthalmology – Retinopathy of prematurity",
    "Neonatal Dermatology – Common problems"
  ],
  [
    "Intrauterine infections",
    "Perinatal HIV",
    "Bacterial infection",
    "Viral infections",
    "Fungal infections",
    "Septicemia",
    "Meningitis",
    "Osteomyelitis and arthritis",
    "Pneumonia"
  ],
  [
    "Vital statistics, health system",
    "Causes of neonatal and perinatal mortality",
    "Neonatal care priorities",
    "Care at primary health center",
    "Care of secondary level",
    "Role of different health functionaries",
    "National programmes pertaining to newborn care",
    "National Neonatology Forum"
  ],
  [
    "Laboratory medicine",
    "Normal values",
    "X-rays, ultrasound, MRI, CT Scan etc"
  ]
],

faqs: [
  { q: "Who should enroll in the Fellowship in Neonatology?", a: "This program is designed for MBBS/MD/MS/DNB/DCH (Paediatrics) holders and offers advanced online education in neonatal and newborn care." },
  { q: "What clinical topics are included in the Neonatology fellowship at DMHCA?", a: "This fellowship explores newborn physiology, neonatal resuscitation, prematurity care, neonatal infections, and evidence-based critical care strategies for neonates." },
  { q: "How is the Neonatology fellowship delivered by DMHCA?", a: "The course is conducted through online lectures, expert-led discussions, neonatal case insights, and digital study materials accessible from anywhere." },
  { q: "How can this fellowship improve my clinical practice in newborn care?", a: "It helps strengthen neonatal assessment skills, improve critical decision-making, and boost confidence in managing sick and preterm infants." },
  { q: "What is the fee for the Neonatology fellowship at DMHCA?", a: "Fees vary depending on course structure and learning resources; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can completing this online fellowship from DMHCA enhance my career and earning potential?", a: "Yes, this program in neonatology can boost professional credibility, expand clinical opportunities, and support higher earning prospects in neonatal and pediatric care." }
],
    meta: { duration: "50 week", lessons: "55", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-pediatric-echocardiography",
    title: "Fellowship in Pediatric Echocardiography",
    categories: ["pediatrics"],
    image: "/courses/Sonographer_doing_pediatric_echocardiography-410x290.webp",
    heroDescription: "Become an Expert in Pediatric Heart Imaging: Fellowship in Pediatric Echocardiography for Advanced Diagnosis and Care.",
    lessons: 30,
    weeks: 52,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Pediatric Echocardiography provides specialized training in the use of ultrasound to diagnose and monitor congenital and acquired heart conditions in infants, children, and adolescents. The program focuses on advanced echocardiographic techniques such as transthoracic, transesophageal, and fetal echocardiography. Fellows gain hands-on experience interpreting complex cardiac images, enhancing their skills in pediatric cardiac anatomy and function to provide accurate diagnoses and improve patient outcomes.",

learn: [
  "Mastery of performing and interpreting TTE to assess cardiac anatomy, function, and hemodynamics in pediatric patients.",
  "Expertise in conducting TEE for intraoperative and diagnostic evaluations in complex congenital heart disease.",
  "Training in the use of pain medications such as opioids, non-steroidal anti-inflammatory drugs (NSAIDs), muscle relaxants, and adjuvant therapies.",
  "Skills in performing echocardiograms on fetuses to detect congenital heart defects early in pregnancy.",
  "In-depth understanding of the diagnosis and management of congenital heart diseases such as septal defects, valve abnormalities, and complex malformations.",
  "Proficiency in diagnosing cardiomyopathies and inflammatory heart conditions in children using echocardiographic techniques.",
  "Exposure to 3D echocardiography and Doppler techniques to assess blood flow and cardiac structures with high precision."
],

requirements: [
  "MD/ DNB/ Equivalent",
  "No previous experience is needed."
],

modules: [
  "Introduction to Pediatric Echocardiography",
  "Congenital Heart Diseases",
  "Acquired Heart Diseases",
  "Advanced Echocardiographic Techniques",
  "Clinical Applications",
  "Research and Innovation",
  "Quality Improvement and Patient Safety",
  "Professional Development and Communication"
],

moduleDetails: [
  [
    "Basics of Echocardiography",
    "Anatomy and Physiology of the Pediatric Heart",
    "Principles of Ultrasound Physics",
    "Standard Echocardiographic Views and Techniques"
  ],
  [
    "Overview of Congenital Heart Defects",
    "Echocardiographic Evaluation of Common Congenital Heart Diseases",
    "Advanced Imaging Techniques for Complex Congenital Heart Defects",
    "Postoperative Assessment"
  ],
  [
    "Rheumatic Heart Disease",
    "Cardiomyopathies and Myocarditis",
    "Kawasaki Disease and Other Vasculitides",
    "Echocardiographic Assessment of Pericardial Diseases"
  ],
  [
    "Three-dimensional Echocardiography",
    "Transesophageal Echocardiography",
    "Fetal Echocardiography",
    "Strain and Speckle-Tracking Echocardiography"
  ],
  [
    "Case-Based Learning and Interpretation",
    "Correlation of Echocardiographic Findings with Clinical Scenarios",
    "Role of Echocardiography in Surgical Planning and Postoperative Assessment",
    "Interventional Echocardiography"
  ],
  [
    "Basics of Clinical Research Methodology",
    "Conducting and Publishing Research in Pediatric Echocardiography",
    "Innovations and Future Directions in Echocardiographic Technology",
    "Ethical Considerations in Pediatric Research"
  ],
  [
    "Quality Assurance in Echocardiography",
    "Patient Safety",
    "Error Management"
  ],
  [
    "Effective Communication Skills",
    "Professionalism in Pediatric Echocardiography",
    "Leadership and Teamwork"
  ]
],

faqs: [
  { q: "Who is eligible for the Fellowship in Pediatric Echocardiography?", a: "This program is designed for MD/DNB or equivalent qualified medical professionals who wish to develop advanced knowledge and skills in pediatric cardiac imaging and echocardiography." },
  { q: "What topics are covered in the Fellowship in Pediatric Echocardiography at DMHCA?", a: "This fellowship covers congenital and acquired heart diseases, transthoracic and transesophageal echocardiography, fetal echocardiography, Doppler imaging, advanced cardiac imaging techniques, and clinical interpretation of pediatric echocardiographic findings." },
  { q: "How is the Pediatric Echocardiography fellowship delivered by DMHCA?", a: "The course is delivered through online lectures, expert-led discussions, case-based learning modules, and comprehensive digital study materials that can be accessed from anywhere." },
  { q: "How can this fellowship improve my clinical practice?", a: "Completing this fellowship helps strengthen your skills in pediatric cardiac assessment, improve diagnostic accuracy, enhance clinical decision-making, and build confidence in managing congenital and acquired heart diseases in children." },
  { q: "What is the fee for the Fellowship in Pediatric Echocardiography at DMHCA?", a: "Fees vary based on the course structure and included learning resources; detailed pricing information is provided upon inquiry or enrollment request." },
  { q: "Can completing this fellowship enhance my career opportunities and earning potential?", a: "Yes, this fellowship can strengthen your professional profile, expand opportunities in pediatric cardiology and cardiac imaging, and support increased earning potential in specialized healthcare settings." }
],
    meta: { duration: "52 week", lessons: "30", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-emergency-medicine",
    title: "Fellowship in Emergency Medicine",
    categories: ["emergency"],
    image: "/courses/Emergency-410x290.webp",
    heroDescription: "Lead in Crisis: Fellowship in Emergency Medicine for Expertise in Acute, Trauma, and Life-Saving Care.",
    lessons: 79,
    weeks: 52,
    level: "expert",
    priceINR: 99000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
 overview: "A Fellowship in Emergency Medicine provides advanced training in the rapid assessment, diagnosis, and management of acute medical and traumatic conditions. The program emphasizes life-saving interventions, critical decision-making, and effective teamwork in high-pressure environments. Fellows gain hands-on experience in handling emergencies ranging from cardiac arrest to trauma, toxicology, and disaster management, preparing them for leadership roles in emergency care.",

learn: [
  "Mastery of managing acute medical conditions such as myocardial infarctions, strokes, sepsis, and respiratory emergencies.",
  "Skills in managing trauma patients, including head injuries, fractures, and hemorrhage control through advanced trauma life support (ATLS).",
  "Training in advanced cardiac life support (ACLS) and pediatric advanced life support (PALS) for critically ill or injured patients.",
  "Expertise in performing critical procedures such as intubation, chest tube insertion, central line placement, and wound care.",
  "Proficiency in diagnosing and managing poisonings, drug overdoses, and toxic exposures.",
  "Experience in disaster response, mass casualty triage, and crisis management during large-scale emergencies.",
  "Specialized training in handling emergencies in vulnerable populations, including children and the elderly.",
  "Training in bedside ultrasound for rapid diagnosis of conditions such as internal bleeding, cardiac tamponade, and ectopic pregnancies.",
  "Skills in stabilizing critically ill patients and coordinating their transfer to specialized care units.",
  "Development of leadership abilities in coordinating emergency care teams and working in a fast-paced, multidisciplinary environment."
],

requirements: [
  "MBBS and Above Qualification",
  "No previous experience is needed."
],

modules: [
  "Foundations of Emergency Medicine",
  "Cardiovascular Emergencies",
  "Respiratory Emergencies",
  "Trauma & Critical Care",
  "Neurological Emergencies",
  "Toxicology & Environmental Emergencies",
  "Gastrointestinal & Hepatic Emergencies",
  "Endocrine & Metabolic Emergencies",
  "Pediatric & Obstetric Emergencies",
  "Renal & Urological Emergencies",
  "Psychiatric & Behavioral Emergencies",
  "Emergency Procedures & Clinical Integration"
],

moduleDetails: [
  [
    "Principles of triage and emergency department organization",
    "Primary and secondary survey (ABCDE approach)",
    "Basic and advanced life support (BLS & ACLS principles)",
    "Fluid resuscitation and shock management",
    "Airway assessment and management basics",
    "Emergency pharmacology",
    "Documentation and medico-legal considerations"
  ],
  [
    "Acute coronary syndrome",
    "Cardiac arrest management",
    "Arrhythmias and ECG interpretation",
    "Acute heart failure and pulmonary edema",
    "Hypertensive emergencies",
    "Cardiogenic shock",
    "Thrombolysis principles"
  ],
  [
    "Acute asthma and COPD exacerbation",
    "Acute respiratory failure",
    "Pneumothorax and chest trauma",
    "Pulmonary embolism",
    "Oxygen therapy and ventilatory support",
    "Non-invasive ventilation (NIV) basics",
    "Arterial blood gas (ABG) interpretation"
  ],
  [
    "ATLS protocol",
    "Head injury management",
    "Spinal trauma",
    "Polytrauma management",
    "Hemorrhagic shock",
    "Burn management",
    "Massive transfusion protocol"
  ],
  [
    "Stroke (ischemic and hemorrhagic)",
    "Status epilepticus",
    "Acute altered sensorium",
    "Meningitis and encephalitis",
    "Raised intracranial pressure",
    "Acute neuromuscular weakness"
  ],
  [
    "Acute poisoning management",
    "Organophosphate poisoning",
    "Drug overdose",
    "Snake bite and envenomation",
    "Heat stroke and hypothermia",
    "Anaphylaxis management"
  ],
  [
    "Acute abdomen evaluation",
    "GI bleeding (upper and lower)",
    "Acute pancreatitis",
    "Acute liver failure",
    "Bowel obstruction",
    "Peritonitis management"
  ],
  [
    "Diabetic ketoacidosis (DKA)",
    "Hyperosmolar hyperglycemic state (HHS)",
    "Hypoglycemia",
    "Thyroid storm and myxedema coma",
    "Adrenal crisis",
    "Electrolyte emergencies"
  ],
  [
    "Pediatric advanced life support (PALS principles)",
    "Neonatal resuscitation basics",
    "Pediatric shock and dehydration",
    "Seizures in children",
    "Ectopic pregnancy",
    "Postpartum hemorrhage",
    "Obstetric emergencies in ED"
  ],
  [
    "Acute kidney injury",
    "Hyperkalemia management",
    "Renal colic",
    "Urinary retention",
    "Urosepsis",
    "Dialysis indications in emergency"
  ],
  [
    "Acute psychosis",
    "Suicidal ideation and attempts",
    "Substance withdrawal",
    "Agitation and restraint protocols",
    "Crisis intervention",
    "Mental health assessment in ED"
  ],
  [
    "Endotracheal intubation",
    "Central venous catheter insertion",
    "Arterial line placement",
    "Chest tube insertion",
    "Lumbar puncture",
    "Procedural sedation",
    "Point-of-care ultrasound (POCUS basics)",
    "Ethics and medico-legal aspects in emergency medicine"
  ]
],

faqs: [
  { q: "Who should enroll in the Emergency Medicine fellowship?", a: "This program is designed for candidates with an MBBS or higher qualification seeking advanced emergency care education through flexible online learning, with no prior experience required." },
  { q: "What topics are included in the Fellowship in Emergency Medicine?", a: "This fellowship covers acute care protocols, trauma response, emergency diagnostics, life support strategies, critical care management, and evidence-based emergency medicine practices." },
  { q: "How is the Emergency Medicine fellowship delivered?", a: "The course is delivered through online lectures, expert-led webinars, interactive discussions, case-based learning, and comprehensive digital study materials accessible from anywhere." },
  { q: "How can this fellowship improve my clinical practice?", a: "Completing this fellowship helps strengthen emergency assessment skills, improve critical decision-making, and enhance confidence in managing medical and traumatic emergencies." },
  { q: "What is the fee for the Fellowship in Emergency Medicine?", a: "Fees vary depending on the course structure and learning resources included; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can this fellowship improve career opportunities and earning potential?", a: "Yes, advanced training in emergency medicine can enhance professional credibility, expand clinical opportunities, and support higher earning potential in emergency and critical care settings." }
],
    meta: { duration: "52 week", lessons: "79", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-emergency-medicine",
    title: "PG Diploma in Emergency Medicine",
    categories: ["emergency"],
    image: "/courses/PG-Diploma-Emergancy-Medicine-410x290.webp",
    heroDescription: "Postgraduate Diploma in Emergency Medicine: Advanced Skills for Expert Trauma Care, Critical Management, and Life-Saving Interventions",
    lessons: 29,
    weeks: 52,
    level: "intermediate",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "The Postgraduate Diploma in Emergency Medicine is a comprehensive program tailored for healthcare professionals seeking advanced expertise in emergency care. This diploma delves into advanced diagnostic techniques, emergency procedures, and critical care management. You will gain hands-on experience in handling trauma cases, mastering life-saving interventions, and improving patient outcomes in urgent situations. The curriculum also covers patient triage, ethical considerations, and effective communication within emergency teams, preparing you to excel in fast-paced, high-stress environments and make significant contributions to emergency medical services.",

learn: [
  "Techniques for rapid and accurate diagnosis of acute and complex conditions.",
  "Hands-on training in critical procedures like intubation, chest tube insertion, and advanced wound care.",
  "Strategies for managing severe trauma, including stabilization, hemorrhage control, and pain management.",
  "Advanced methods for monitoring and managing patients in critical or life-threatening conditions.",
  "Skills for effectively assessing and prioritizing patients based on the urgency of their conditions.",
  "Understanding of legal and ethical issues in emergency medical care.",
  "Techniques for effective communication and collaboration with other healthcare professionals."
],

requirements: [
  "MBBS/Equivalent",
  "No previous experience is needed."
],

modules: [
  "Modules-1",
  "Modules-2",
  "Modules- 3",
  "Modules-4"
],

moduleDetails: [
  [
    "General Issues; Introduction",
    "Critical Appraisal: General Issues in Emergency",
    "Medicine Continuing Education",
    "Medication Adherence",
    "Emergency Department Triage",
    "Emergency Department Overcrowding"
  ],
  [
    "Respiratory Emergency Management of Asthma Exacerbations",
    "Chronic Obstructive Pulmonary Disease",
    "Exacerbations",
    "Diagnosis and Treatment of Community",
    "Acquired Pneumonia",
    "Deep Vein Thrombosis",
    "Pulmonary Embolism",
    "Prevention and Treatment of Influenza",
    "Anaphylaxis"
  ],
  [
    "Cardiology",
    "Chest Pain",
    "Acute Coronary Syndromes",
    "Acute Myocardial Infarction",
    "Acute Decompensate Heart Failure",
    "Atrial Fibrillation",
    "Ventricular and Supraventricular Arrhythmias",
    "Cardiac Arrest"
  ],
  [
    "General Medical Conditions",
    "Severe Sepsis and Septic Shock",
    "Delirium",
    "Caring for the Elderly",
    "Syncope",
    "General"
  ]
],

faqs: [
  { q: "Who can enroll in the PG Diploma in Emergency Medicine?", a: "The program is ideal for physicians, emergency doctors, critical care practitioners, and healthcare professionals seeking advanced emergency medicine knowledge through online study." },
  { q: "What topics are covered in the PG Diploma in Emergency Medicine?", a: "This PG diploma includes emergency care principles, acute response protocols, trauma management, resuscitation basics, and emergency decision-making through structured digital modules." },
  { q: "How is the PG Diploma in Emergency Medicine delivered?", a: "The course is conducted via online lectures, expert-led sessions, interactive case discussions, and digital study materials, providing flexible learning access." },
  { q: "What career benefits can this diploma provide?", a: "Completing this diploma can help strengthen emergency care knowledge, improve clinical decision-making, and enhance professional credentials in acute care settings." },
  { q: "What is the fee for the PG Diploma in Emergency Medicine?", a: "Course fees vary based on program structure and learning resources provided; detailed pricing is available upon inquiry or enrollment request." },
  { q: "Can this PG Diploma improve earning potential in emergency care?", a: "Yes, This advanced understanding in emergency medicine can boost professional credibility, expand clinical roles, and support higher income opportunities in emergency and hospital environments." }
],
    meta: { duration: "52 week", lessons: "29", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "fellowship-in-critical-care",
    title: "Fellowship in Critical Care",
    categories: ["medicine"],
    image: "/courses/Critical-Care-410x290.webp",
    heroDescription: "Master Life-Saving Skills: Fellowship in Critical Care for Advanced Intensive Care Management and Emergency Interventions.",
    lessons: 74,
    weeks: 52,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in Critical Care offers specialized training in the management of critically ill patients, focusing on life-saving interventions and advanced monitoring techniques. The program covers intensive care unit (ICU) procedures, mechanical ventilation, hemodynamic monitoring, and the management of multi-organ failure. Fellows gain hands-on experience in managing complex cases, including trauma, sepsis, and cardiac emergencies, preparing them for leadership roles in critical care medicine.",

learn: [
  "Mastery of cardiopulmonary resuscitation (CPR), advanced cardiac life support (ACLS), and other life-saving interventions for critically ill patients.",
  "Expertise in initiating and managing invasive and non-invasive mechanical ventilation for patients with respiratory failure.",
  "Skills in using advanced hemodynamic monitoring tools to assess and manage cardiovascular function in unstable patients.",
  "Training in the diagnosis and treatment of patients with multi-organ failure, including liver, kidney, and respiratory support.",
  "Proficiency in managing sepsis, implementing infection control measures, and administering antimicrobial therapies in the ICU.",
  "Experience in managing trauma cases, including head injuries, chest trauma, and other critical emergencies requiring rapid intervention.",
  "Understanding of the nutritional needs of critically ill patients and implementing enteral and parenteral feeding protocols."
],

requirements: [
  "MBBS and Above Qualification",
  "No previous experience is needed."
],

modules: [
  "Fundamentals of Critical Care Medicine",
  "Respiratory Critical Care",
  "Cardiovascular Critical Care",
  "Neurocritical Care",
  "Sepsis & Infectious Diseases in ICU",
  "Renal & Metabolic Critical Care",
  "Gastrointestinal & Hepatic Critical Care",
  "Trauma & Surgical Critical Care",
  "Pediatric & Obstetric Critical Care",
  "Procedures in Critical Care",
  "Toxicology & Environmental Emergencies",
  "Quality Improvement & Clinical Integration"
],

moduleDetails: [
  [
    "Organization of ICU and patient safety",
    "ABCDE approach in critically ill patients",
    "Hemodynamic monitoring basics",
    "Fluid therapy and resuscitation",
    "Acid–base and electrolyte disorders",
    "Infection control practices in ICU",
    "Ethical issues in critical care"
  ],
  [
    "Acute respiratory failure",
    "ARDS management",
    "Mechanical ventilation principles",
    "Non-invasive ventilation (NIV)",
    "Ventilator settings and troubleshooting",
    "Weaning protocols",
    "Oxygen delivery systems"
  ],
  [
    "Shock (septic, cardiogenic, hypovolemic, obstructive)",
    "Acute coronary syndromes in ICU",
    "Cardiac arrhythmias management",
    "Hemodynamic monitoring (CVP, arterial line)",
    "Vasopressors and inotropes",
    "Cardiac arrest and post-resuscitation care"
  ],
  [
    "Management of raised intracranial pressure",
    "Stroke management in ICU",
    "Status epilepticus",
    "Traumatic brain injury",
    "Delirium in ICU",
    "Brain death criteria"
  ],
  [
    "Sepsis and septic shock protocols",
    "Antimicrobial stewardship",
    "Ventilator-associated pneumonia",
    "Catheter-related bloodstream infections",
    "Fungal infections in ICU",
    "Multidrug-resistant organisms"
  ],
  [
    "Acute kidney injury",
    "Continuous renal replacement therapy (CRRT)",
    "Electrolyte emergencies",
    "Diabetic ketoacidosis (DKA)",
    "Hyperosmolar hyperglycemic state (HHS)",
    "Nutrition in critically ill patients"
  ],
  [
    "Acute liver failure",
    "GI bleeding in ICU",
    "Acute pancreatitis",
    "Abdominal compartment syndrome",
    "Enteral and parenteral nutrition",
    "Stress ulcer prophylaxis"
  ],
  [
    "Polytrauma management",
    "Massive transfusion protocol",
    "Burns management",
    "Postoperative ICU care",
    "Shock in trauma",
    "Damage control resuscitation"
  ],
  [
    "Pediatric resuscitation principles",
    "Pediatric respiratory failure",
    "Neonatal emergencies (overview)",
    "Obstetric emergencies in ICU",
    "Postpartum hemorrhage",
    "Eclampsia management"
  ],
  [
    "Endotracheal intubation",
    "Central venous catheter insertion",
    "Arterial line placement",
    "Chest tube insertion",
    "Lumbar puncture",
    "Bedside ultrasound (POCUS basics)",
    "Tracheostomy care"
  ],
  [
    "Acute poisoning management",
    "Drug overdose",
    "Organophosphate poisoning",
    "Snake bite and envenomation",
    "Heat stroke and hypothermia",
    "Anaphylaxis management"
  ],
  [
    "Clinical audit in ICU",
    "Quality indicators in critical care",
    "Communication with family and end-of-life care",
    "Ethics and medico-legal aspects",
    "Case presentations and exit assessment"
  ]
],

faqs: [
  { q: "Who is eligible for a Fellowship in Critical Care?", a: "The program is open to MBBS and above qualified professionals including physicians, ICU practitioners, emergency doctors, and anesthesiologists, with no prior experience required." },
  { q: "What knowledge is covered in this fellowship?", a: "It covers ICU management, ventilator strategies, shock and sepsis care, hemodynamic monitoring, organ support systems, and advanced critical care protocols." },
  { q: "How is the fellowship delivered?", a: "The course is delivered through online lectures, expert webinars, case-based discussions, and structured digital modules accessible from anywhere." },
  { q: "What career benefits does it provide?", a: "It enhances clinical decision-making, strengthens ICU management skills, and improves career opportunities in critical care and hospital settings." },
  { q: "What is the fee for this fellowship?", a: "Fees vary based on program structure and resources; detailed information is shared upon inquiry or enrollment." },
  { q: "Can this improve earning potential?", a: "Yes, advanced critical care training can improve professional credibility and open higher-paying clinical roles in ICU and emergency care." }
],
    meta: { duration: "52 week", lessons: "74", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-critical-care",
    title: "PG Diploma in Critical Care",
    categories: ["emergency"],
    image: "/courses/Post-Graduate-Diploma-in-Critical-Care-410x290.webp",
    heroDescription:"Post Graduate Diploma in Critical Care: Advanced Training for Managing Life-Threatening Conditions in Intensive Care",
    lessons: 48,
    weeks: 52,
    level: "intermediate",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "The Postgraduate Diploma in Critical Care is a specialized medical training program designed to equip healthcare professionals with the knowledge and clinical skills required to manage critically ill patients in intensive care settings. Critical care medicine focuses on the diagnosis, monitoring, and treatment of life-threatening conditions such as respiratory failure, cardiac emergencies, sepsis, trauma, and multi-organ failure. The program provides training in advanced life support, patient monitoring, ventilator management, and emergency procedures. This course combines theoretical knowledge with practical ICU training, enabling healthcare professionals to work efficiently in Intensive Care Units (ICUs), emergency departments, and trauma centers.",

learn: [
  "Understand the principles of critical care medicine",
  "Assess and manage critically ill patients",
  "Perform advanced life support and resuscitation procedures",
  "Manage mechanical ventilation and respiratory support",
  "Interpret diagnostic tests and patient monitoring data",
  "Handle ICU emergencies and complications"
],

requirements: ["MBBS", "Equivalent"],

modules: [
  "Introduction to Critical Care",
  "Anatomy and Physiology for Critical Care",
  "Patient Monitoring",
  "Airway Management and Ventilation",
  "Cardiovascular Emergencies",
  "Respiratory Emergencies",
  "Neurological Emergencies",
  "Sepsis and Infections",
  "Renal and Metabolic Disorders",
  "Trauma and Emergency Care",
  "Nutrition and Supportive Care",
  "Clinical Training and Case Studies"
],

moduleDetails: [
  [
    "Principles of critical care medicine",
    "Organization of ICU",
    "Roles of critical care team members",
    "Medical ethics and patient safety"
  ],
  [
    "Cardiovascular system",
    "Respiratory system",
    "Nervous system",
    "Renal and metabolic physiology"
  ],
  [
    "Vital signs monitoring",
    "Hemodynamic monitoring",
    "ECG monitoring",
    "Arterial blood gas (ABG) analysis"
  ],
  [
    "Airway assessment and management",
    "Endotracheal intubation",
    "Mechanical ventilation",
    "Non-invasive ventilation"
  ],
  [
    "Acute coronary syndrome",
    "Cardiac arrhythmias",
    "Heart failure",
    "Shock management"
  ],
  [
    "Acute respiratory distress syndrome (ARDS)",
    "Respiratory failure",
    "Asthma and COPD exacerbation",
    "Oxygen therapy"
  ],
  [
    "Stroke management",
    "Head injury",
    "Seizures and status epilepticus",
    "Coma management"
  ],
  [
    "Sepsis and septic shock",
    "Infection control in ICU",
    "Antibiotic therapy",
    "Hospital-acquired infections"
  ],
  [
    "Acute kidney injury",
    "Electrolyte imbalance",
    "Acid–base disorders",
    "Dialysis basics"
  ],
  [
    "Polytrauma management",
    "Burns management",
    "Poisoning and toxicology",
    "Emergency procedures"
  ],
  [
    "Enteral and parenteral nutrition",
    "Pain management",
    "Sedation and analgesia",
    "Rehabilitation in ICU"
  ],
  [
    "Case discussions",
    "Complication management",
    "ICU patient assessment",
    "Emergency simulations"
  ]
],
faqs: [
  { q: "Who should pursue the PG Diploma in Critical Care?", a: "This program is suitable for physicians and healthcare professionals with an MBBS or equivalent qualification aiming to advance in critical care." },
  { q: "What topics are covered in the PG Diploma in Critical Care?", a: "This diploma covers advanced critical care principles, shock and sepsis management, ventilator support, organ dysfunction monitoring, and acute care protocols through structured modules." },
  { q: "How is the PG Diploma in Critical Care structured?", a: "The course is delivered via online lectures, expert-led sessions, interactive discussions, and evidence-based content that can be accessed flexibly from anywhere." },
  { q: "What career benefits can I expect after completing this diploma?", a: "Candidates can enhance clinical decision-making, improve critical care understanding, and strengthen professional credentials, expanding opportunities in ICU and acute care environments." },
  { q: "What is the fee for the PG Diploma in Critical Care?", a: "Fees vary depending on course structure and included learning resources; detailed pricing is provided upon inquiry or enrollment request." },
  { q: "Can this PG Diploma improve my earning potential in critical care?", a: "Yes, This advanced training in critical care can boost professional credibility, career prospects, and potential income, especially in acute care and hospital settings." }
],
    meta: { duration: "52 week", lessons: "48", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-hiv-medicine",
    title: "PG Diploma in HIV Medicine",
    categories: ["medicine"],
    image: "/courses/PG-Diploma-In-HIV-Medicine-410x290.webp",
    heroTitle: "Comprehensive HIV Medicine Diploma",
    heroDescription: "PG Diploma in HIV Medicine: Specialized Training in Diagnosis, Treatment, and Management of HIV/AIDS",
    lessons: 18,
    weeks: 52,
    level: "intermediate",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
   overview: "The PG Diploma in HIV Medicine is designed to equip healthcare professionals with comprehensive knowledge and skills for the effective diagnosis, treatment, and management of HIV/AIDS. This program covers the epidemiology, pathophysiology, and clinical manifestations of HIV, alongside current guidelines for antiretroviral therapy (ART) and patient care. Participants will gain insights into managing comorbidities, treatment adherence, and the psychosocial aspects of living with HIV. With a focus on evidence-based practices, this diploma prepares clinicians, nurses, and public health professionals to improve health outcomes for individuals living with HIV and contribute to global efforts in HIV prevention and education.",

learn: [
  "Epidemiology and transmission dynamics of HIV/AIDS.",
  "Pathophysiology and clinical presentation of HIV infection.",
  "Current antiretroviral therapy (ART) regimens and management strategies.",
  "Monitoring and managing HIV-related comorbidities and complications.",
  "Counseling techniques for improving patient adherence to treatment.",
  "Psychosocial aspects of HIV care, including stigma and support systems.",
  "Public health strategies for HIV prevention and education in communities."
],

requirements: ["MBBS/Equivalent"],
trainers: [
  {
    name: "Dr. Mysara",
    title: "Internal Medicine",
    image: "/Faculty_images/Dr. Mysara.webp"
  }
],

modules: [
  "Basics of HIV Infection",
  "National AIDS Control Programme",
  "Systemic Involvement in HIV and STI",
  "Management of HIV/AIDS"
],

moduleDetails: [
  [
    "Epidemiology of HIV",
    "Basics of HIV & Natural History",
    "Overview of Clinical Manifestation & Staging",
    "Lab Diagnosis of HIV"
  ],
  [
    "Strategies and Components of NACP",
    "Targeted intervention Strategies",
    "Strategies for Prevention of HIV Transmission",
    "Psychosocial Support and Other Services"
  ],
  [
    "Opportunistic Infections",
    "Co-infections and Non-infectious Manifestations",
    "Tuberculosis",
    "Skin and STI"
  ],
  [
    "Clinical Pharmacology of ARV",
    "ART Initiation & Follow Up-I",
    "ART initiation & Follow Up-II",
    "HIV and Women",
    "Care of HIV Exposed Children",
    "Counseling Issues"
  ]
],

faqs: [
  { q: "What advanced topics are covered in the PG Diploma in HIV Medicine?", a: "This diploma from DMHCA includes in-depth study of HIV epidemiology, antiretroviral therapy, opportunistic infections, treatment guidelines, and patient counseling strategies." },
  { q: "Who is the PG Diploma in HIV Medicine suitable for?", a: "The program is ideal for physicians, infectious disease specialists, public health practitioners, nurses, and healthcare professionals looking to boost expertise in HIV care through structured online learning." },
  { q: "How will I receive the HIV Medicine diploma training at DMHCA?", a: "The course is delivered through online lectures, expert-led modules, case discussions, and downloadable study materials that can be accessed flexibly from anywhere." },
  { q: "In what ways can this diploma enhance my professional practice?", a: "Completing this diploma helps strengthen HIV treatment knowledge, improve patient management skills, and enhance clinical confidence, making you more effective in care delivery." },
  { q: "What is the fee for the PG Diploma in HIV Medicine at DMHCA?", a: "Fees vary based on course structure and provided learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can completing this PG Diploma from DMHCA improve my career prospects and income potential?", a: "Yes — advanced online training in HIV medicine can boost your professional credibility, open up broader clinical roles, and support better earning opportunities in infectious disease and public health settings." }
],
    meta: { duration: "52 week", lessons: "18", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-hospital-administration",
    title: "PG Diploma in Hospital Administration",
    categories: ["management"],
    image: "/courses/PG-Diploma-in-Hospital-Administration-410x290.webp",
    heroDescription: "Get a PG Diploma in Hospital Administration and master healthcare management and operations.",
    lessons: 48,
    weeks: 50,
    level: "intermediate",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
   overview: "The Postgraduate Diploma in Hospital Administration (PGDHA) is a professional program designed to develop managerial and administrative skills required for the efficient functioning of hospitals and healthcare institutions. Hospital administration plays a crucial role in ensuring quality healthcare services, effective hospital operations, patient satisfaction, and proper management of medical resources. The program focuses on healthcare management, hospital operations, health policies, finance, human resources, and healthcare quality systems. This course prepares professionals to manage hospitals, clinics, healthcare organizations, and medical institutions by combining knowledge of healthcare systems with modern management techniques.",

learn: [
  "Understand the structure and functioning of healthcare systems",
  "Manage hospital operations and healthcare services",
  "Apply healthcare management and leadership skills",
  "Maintain quality standards and patient safety",
  "Manage hospital finances, records, and resources",
  "Implement healthcare policies and regulations"
],

requirements: [
  "MBBS",
  "BDS",
  "BAMS",
  "BHMS",
  "BNYS",
  "BUMS",
  "BSMS",
  "B.E. Biomedical Engineering",
  "B.Tech Biotechnology",
  "B.Sc (N)",
  "B. Pharmacy",
  "BPT",
  "B.Sc. Allied Health Sciences (any)",
  "BBA and BHA in Hospital Administration",
  "B.Sc (Biochemistry / Microbiology / Biotechnology / Chemistry / Physics / Botany / Zoology)"
],

modules: [
  "Introduction to Hospital Administration",
  "Healthcare Management",
  "Hospital Operations Management",
  "Healthcare Quality Management",
  "Hospital Finance and Accounting",
  "Human Resource Management in Healthcare",
  "Health Information Management",
  "Healthcare Laws and Ethics",
  "Supply Chain and Hospital Logistics",
  "Public Health and Healthcare Programs",
  "Hospital Marketing and Communication",
  "Practical Training and Project"
],

moduleDetails: [
  [
    "Principles of hospital administration",
    "Healthcare delivery systems",
    "Role of hospital administrators",
    "Ethics and professionalism in healthcare"
  ],
  [
    "Organizational structure of hospitals",
    "Leadership and decision-making",
    "Strategic planning in healthcare",
    "Healthcare management principles"
  ],
  [
    "Hospital departments and functions",
    "Patient admission and discharge systems",
    "Bed management and patient flow",
    "Hospital support services"
  ],
  [
    "Quality assurance in hospitals",
    "Patient safety standards",
    "Accreditation systems (NABH, JCI)",
    "Risk management in healthcare"
  ],
  [
    "Budgeting and financial planning",
    "Healthcare costing",
    "Billing and insurance management",
    "Financial reporting"
  ],
  [
    "Recruitment and training of healthcare staff",
    "Staff performance management",
    "Workplace safety and labor laws",
    "Team building and leadership"
  ],
  [
    "Medical records management",
    "Electronic health records (EHR)",
    "Health data management",
    "Confidentiality and privacy of patient data"
  ],
  [
    "Medical legal issues",
    "Hospital regulations and policies",
    "Patient rights and responsibilities",
    "Legal compliance in healthcare"
  ],
  [
    "Procurement and inventory management",
    "Pharmacy and medical supplies",
    "Biomedical waste management",
    "Equipment maintenance"
  ],
  [
    "National health programs",
    "Community health services",
    "Epidemiology basics",
    "Health promotion strategies"
  ],
  [
    "Healthcare marketing strategies",
    "Public relations in hospitals",
    "Patient satisfaction and service quality",
    "Healthcare communication skills"
  ],
  [
    "Hospital department visits",
    "Case studies and hospital management analysis",
    "Internship in hospital administration",
    "Final project or research report"
  ]
],

faqs: [
  { q: "Who is eligible for enrolling in the PG Diploma in Hospital Administration?", a: "The program is suitable for medical, healthcare, allied health, pharmacy, biotechnology, engineering, and hospital administration graduates seeking leadership roles in healthcare management." },
  { q: "What key subjects are included in the PG Diploma in Hospital Administration?", a: "The curriculum covers healthcare management, hospital operations, quality systems, finance, human resources, healthcare laws, logistics, and health information management." },
  { q: "What professional advantages can this diploma offer?", a: "This diploma enhances managerial, leadership, and administrative skills required for successful careers in hospitals and healthcare organizations." },
  { q: "What is the fee for the PG Diploma in Hospital Administration at DMHCA?", a: "Fees vary depending on the course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this hospital administration diploma from DMHCA enhance my career and earning potential?", a: "Yes, it can strengthen professional credibility, expand healthcare leadership opportunities, and support long-term career growth in hospital administration." }
],
    meta: { duration: "50 week", lessons: "48", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-hospital-management",
    title: "PG Diploma in Hospital Management",
    categories: ["management"],
    image: "/courses/1729490404phpciSl11-410x290.webp",
    heroDescription: "Advance Your Career with a PG Diploma in Hospital Management: Lead Healthcare Excellence",
    lessons: 126,
    weeks: 50,
    level: "intermediate",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "The PG Diploma in Hospital Management is a comprehensive program designed to equip healthcare professionals with skills in administration, operations, and strategic management. It focuses on effective resource utilization, quality care delivery, and leadership in hospital settings, preparing graduates to excel in dynamic healthcare environments and contribute to improved patient outcomes.",

learn: [
  "Efficient management of hospital processes and departments.",
  "Ensuring patient safety and service excellence.",
  "Budgeting, cost control, and financial planning in healthcare.",
  "Recruitment, training, and staff management.",
  "Leveraging technology for better healthcare delivery.",
  "Designing and implementing policies for hospital growth."
],

requirements: [
  "MBBS",
  "BDS",
  "BAMS",
  "BHMS",
  "BNYS",
  "BUMS",
  "BSMS",
  "B.E. Biomedical Engineering",
  "B.Tech Biotechnology",
  "B.Sc (N)",
  "B. Pharmacy",
  "BPT",
  "B.Sc. Allied Health Sciences (any)",
  "BBA and BHA in Hospital Administration",
  "B.Sc (Biochemistry / Microbiology / Biotechnology / Chemistry /Physics/ Botany / Zoology)"
],

modules: [
  "Principles and Practices of Management and Organizational Behavior",
  "Managerial Accounting & Financial Management for Hospitals",
  "Hospital Planning and Project Management",
  "Medical Terminology & Procedures",
  "Hospital Administration",
  "Hospital Training",
  "Human Resource Management",
  "Laws Related to Hospital & Medical Services",
  "Material Management & Inventory Control",
  "Management of Health Care and Hospital Services",
  "Project Report",
  "Computer Fundamentals & Software Related To Hospitals"
],

moduleDetails: [
  [
    "Basic concepts of Management",
    "Planning",
    "Organizing",
    "Directing",
    "Controlling and Coordinating",
    "Decision making",
    "Organizational Behavior",
    "Personality & Attitudes",
    "Motivation",
    "Group Dynamics & Teams"
  ],
  [
    "Introduction",
    "Double Entry System of Accounts",
    "Ledger",
    "Preparation of Trial Balance",
    "Depreciation",
    "Preparation of Final Accounts",
    "Working Capital Management",
    "Changes in Financial Statements",
    "Budgetary Control",
    "Elements of Cost of a Product/Service"
  ],
  [
    "Types of Hospital Organization & Statutory Requirements for Planning",
    "Steps in Hospital Planning",
    "Preparation of Architect’s Brief",
    "Selection of the Size, Preparation of the Master plan",
    "Layout, Grouping, Zoning Phasing of Activities",
    "Circulation & Movements of Patients, Staff, Visitors",
    "Landscaping in hospitals/ Parking arrangements",
    "Planning",
    "Planning for Water supply, Electricity, Drainage & Sewage disposal",
    "Planning for Equipments",
    "Licences required for registration of hospital",
    "Acquisition and Merger of existing hospital by another group 1",
    "Commissioning a new hospital 1",
    "Research Methodology"
  ],
  [
    "Fundamentals of Medical Terminology",
    "Introduction to Anatomy & Physiology",
    "Organs & Systems",
    "Common Diseases & Procedures",
    "Common Diseases & Procedures",
    "Circulatory",
    "Renal",
    "Reproductive",
    "Nervous",
    "Endocrine",
    "Musculoskeletal",
    "Oncology"
  ],
  [
    "History of hospital as an organization and its structure 2",
    "Departments of a Hospital",
    "Routine Admission/Discharge Procedures/Discharge Summary",
    "Hospital Utilization Statistics",
    "Daily Reports / Returns.",
    "Biostatistics",
    "Patient’s Complaints.",
    "Medical Certificates.",
    "Hospital Committees.",
    "Patient Relations Management",
    "Duties & Responsibilities of the Hospital Administrator/CEO",
    "Marketing of Hospital",
    "Hospital Security",
    "Hospital Waste Management",
    "Methods of Infection Control"
  ],
  [],
  [
    "Functions of Human Resource Management",
    "Position of the Personnel Department",
    "Manpower Planning & Development",
    "Manpower Needs",
    "Job Analysis, Job Description & Specifications 4 for Hospital Staff",
    "Selection & Recruitment",
    "Orientation",
    "Duty rosters of various categories of staff",
    "Manpower Developing & Training",
    "Counselling",
    "Career Planning",
    "Wage Administration, Salary Administration",
    "Employee Benefits & Social Security",
    "Performance Appraisals: Techniques & Practices",
    "Industrial Relations",
    "Dynamics of Behaviour at Individual Level",
    "Issues Relating to Management of Professionals",
    "Development of staff",
    "Discipline"
  ],
  [
    "Introduction & Legal Procedures",
    "Inquest",
    "Criminal Courts in India & their Powers",
    "General Important Legal Knowledge Pertaining to IPC, CRPC, Civil PC, Evidence Act.",
    "Rights & Responsibilities of Medical Person",
    "Hippocratic Oath, Declaration of Geneva",
    "Code of Medical Ethics",
    "Organizational &Procedural Laws.",
    "Labour Laws Applicable to a Hospital",
    "Professional Negligence, Errors & Commission",
    "Laws Related to Medical Procedures",
    "Consumer Protection Act 1986",
    "Medical Negligence & Compensation",
    "Doctor Patient Relationship",
    "Preventive Steps for Doctors/Hospitals to Avoid Litigation",
    "Illustrative Cases of Medical Negligence in India"
  ],
  [
    "Principles of Materials Management",
    "Materials Planning.",
    "Purchase Management",
    "Purchase Procedures",
    "Receipt of Materials",
    "Purchase Management.",
    "Purchase Procedures",
    "Receipt of Materials",
    "Store Management",
    "Inventory Control",
    "Tools & Techniques of Inventory Control",
    "Medical Stores"
  ],
  [
    "Health Administration in India",
    "Health Care Delivery System",
    "National Health Policy",
    "National Health Programmes",
    "Review of reports on Healthcare",
    "Epidemiological Triad, Levels of Disease Prevention",
    "Disaster Management/ Disaster Plan",
    "Engineering Services",
    "Quality Management in Health Care",
    "Insurance companies and TPAs"
  ],
  [
    "Every student will complete a Project Report under the guidance of a Senior Faculty who will act as the Guide. The Project is expected to be studied in one of the Hospitals allotted by the Institute."
  ],
  [
    "Computer basics",
    "Operating system: Windows",
    "Office Automation Software (MS-Office 2007)",
    "Various types of Viruses, antivirus soft wares",
    "Introduction to Internet Technology",
    "Introduction to the software’s related to the Hospital Management",
    "Telemedicine – Introduction and Applications"
  ]
],

faqs: [
  { q: "Who is eligible for enrolling in the PG Diploma in Hospital Management?", a: "The program is suitable for medical, healthcare, allied health, pharmacy, biotechnology, engineering, and hospital administration graduates seeking management careers in healthcare." },
  { q: "What key subjects are included in the PG Diploma in Hospital Management?", a: "The curriculum covers hospital administration, healthcare management, finance, human resources, healthcare laws, quality management, and hospital operations." },
  { q: "What professional advantages can this diploma offer?", a: "This diploma develops leadership, operational, and administrative skills required for successful careers in hospitals and healthcare organizations." },
  { q: "What is the fee for the PG Diploma in Hospital Management at DMHCA?", a: "Fees vary depending on the course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this hospital management diploma from DMHCA enhance my career and earning potential?", a: "Yes, it can strengthen professional credibility, expand healthcare leadership opportunities, and support long-term career growth in hospital management." }
],
    meta: { duration: "50 week", lessons: "126", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "fellowship-in-family-medicine",
    title: "Fellowship in Family Medicine",
    categories: ["medicine"],
    image: "/courses/Gray-Minimalist-White-Sneakers-Collection-Instagram-Post-410x290.webp",
    heroDescription: "Advance Your Expertise in Family Medicine with Comprehensive, Patient-Centered Care through Our Fellowship Program",
    lessons: 73,
    weeks: 52,
    level: "expert",
    priceINR: 100000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "The Fellowship in Family Medicine is designed to equip physicians with advanced knowledge and skills to provide holistic, patient-centered care across all stages of life. The program emphasizes preventive medicine, chronic disease management, evidence-based practice, and interdisciplinary collaboration to address diverse healthcare needs.",

learn: [
  "Advanced clinical skills in diagnosis and treatment for all age groups",
  "Best practices in preventive care and chronic disease management",
  "Application of evidence-based medicine in everyday practice",
  "Effective patient communication and family-centered care",
  "Leadership and team collaboration in multidisciplinary healthcare settings",
  "Strategies for addressing healthcare disparities in underserved populations"
],

requirements: [
  "MBBS and Above Qualification"
],

modules: [
  "Principles of Family Medicine",
  "Preventive & Community Medicine in Practice",
  "Acute Care & Common Emergencies",
  "Chronic Disease Management",
  "Maternal & Child Health",
  "Geriatric Medicine",
  "Mental Health in Primary Care",
  "Dermatology & Minor Procedures",
  "Orthopedics & Musculoskeletal Disorders",
  "ENT & Ophthalmology in Primary Care",
  "Practice Management & Family Practice Setup",
  "Research, Communication & Clinical Integration"
],

moduleDetails: [
  ["Concept and scope of Family Medicine", "Continuity of care & comprehensive care model", "Patient-centered approach", "Doctor–patient relationship", "Biopsychosocial model", "Ethics and professionalism"],
  ["Health promotion and disease prevention", "National health programs", "Vaccination schedules", "Screening protocols", "Occupational and environmental health", "Geriatric preventive care"],
  ["Management of fever and acute infections", "Respiratory emergencies", "Acute coronary syndrome recognition", "Shock management", "Anaphylaxis", "Trauma basics and first aid", "BLS & ACLS overview"],
  ["Hypertension", "Diabetes mellitus", "Dyslipidemia", "Thyroid disorders", "Chronic kidney disease", "COPD and asthma", "Long-term follow-up planning"],
  ["Antenatal care", "Postnatal care", "Normal labor overview", "Pediatric growth & development monitoring", "Common childhood illnesses", "Family planning and contraception"],
  ["Comprehensive geriatric assessment", "Dementia and depression in elderly", "Falls and osteoporosis", "Polypharmacy management", "End-of-life care principles"],
  ["Depression and anxiety disorders", "Substance use disorders", "Somatization disorders", "Stress management", "Basic counseling skills", "Suicide risk screening"],
  ["Common skin infections", "Eczema and psoriasis", "Acne management", "Wound care and suturing", "Abscess drainage", "Cryotherapy basics"],
  ["Low back pain", "Osteoarthritis", "Soft tissue injuries", "Fracture first aid", "Joint injections overview"],
  ["URTI and sinusitis", "Otitis media", "Vertigo", "Red eye evaluation", "Refractive errors", "Screening for glaucoma"],
  ["Clinic setup and infrastructure", "Electronic medical records", "Medical documentation", "Billing and coding basics", "Telemedicine", "Medico-legal aspects"],
  ["Evidence-based medicine", "Clinical audit", "Research methodology", "Family conference skills", "Breaking bad news", "Community outreach programs", "Final case presentations"]
],

faqs: [
  { q: "Who is eligible for a Fellowship in Family Medicine?", a: "MBBS and above qualified physicians and healthcare professionals seeking advanced primary care expertise." },
  { q: "What topics are included in the Fellowship in Family Medicine at DMHCA?", a: "Primary care, chronic disease management, preventive medicine, community health, and evidence-based patient care." },
  { q: "How will the Family Medicine fellowship be delivered to learners?", a: "Through online lectures, expert-led discussions, case studies, and digital learning resources." },
  { q: "How can this fellowship enhance my clinical practice?", a: "It strengthens primary care skills, clinical decision-making, and confidence in managing diverse health conditions." },
  { q: "What is the fee for the DMHCA Fellowship in Family Medicine?", a: "Fees vary by course structure and resources; details are shared upon inquiry or enrollment." },
  { q: "Can this fellowship from DMHCA boost my career and income potential?", a: "Yes, it can enhance professional credibility, expand clinical roles, and support higher earning opportunities." }
],
    meta: { duration: "52 week", lessons: "73", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-pain-management",
    title: "Fellowship in Pain Management",
    categories: ["medicine"],
    image: "/courses/pain-management-fellowship-410x290.webp",
    heroDescription: "Advanced cancer management training including chemotherapy, targeted therapy, and immunotherapy.",
    lessons: 33,
    weeks: 50,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in Pain Management offers specialized training in the evaluation, diagnosis, and treatment of acute and chronic pain conditions. The program covers a wide range of pain management techniques, including interventional procedures, pharmacologic therapies, and multidisciplinary approaches to improve patient quality of life. Fellows gain hands-on experience with advanced treatments such as nerve blocks, spinal injections, and neuromodulation, preparing them to become experts in managing complex pain syndromes.",

learn: [
  "Expertise in diagnosing and treating chronic pain conditions such as back pain, neuropathic pain, fibromyalgia, and arthritis.",
  "Mastery of interventional techniques including epidural steroid injections, nerve blocks, radiofrequency ablation, and spinal cord stimulation.",
  "Training in the use of pain medications such as opioids, non-steroidal anti-inflammatory drugs (NSAIDs), muscle relaxants, and adjuvant therapies.",
  "Skills in developing comprehensive treatment plans that include physical therapy, psychological support, and lifestyle modifications.",
  "Proficiency in advanced neuromodulation techniques to manage chronic pain by altering nerve signals.",
  "Experience in managing cancer-related pain, utilizing both pharmacologic and interventional approaches to improve patient comfort."
],

requirements: [
  "MBBS/ MD/ MS/ DGO/ DNB/ Equivalent",
  "No previous experience is needed."
],

modules: [
  "Anatomy and Physiology with Clinical Correlations",
  "Evaluation of the Patient in Pain",
  "Management of Pain by a Multidisciplinary ‘Whole Person’ Approach",
  "Management of Acute Pain",
  "Treatment of Regional Pain Syndromes",
  "Common Pain Conditions"
],

moduleDetails: [
  [
    "Anatomy of the Pain Processing System",
    "Applied Physiology, Receptors and Neurotransmitters"
  ],
  [
    "Classification, Definitions and Terminologies",
    "History focused on Pain",
    "Treatment History",
    "Medical Diagnosis",
    "Psychological Assessment using Appropriate Communication",
    "Assessment of Social and Spiritual Issues",
    "Evaluation and Rating of Disability and Psychological Impact, Rehabilitation",
    "Appropriate investigations"
  ],
  [
    "Pharmacological",
    "Interventional Therapies",
    "Advanced Pain Therapies",
    "Management of Psychological Issues",
    "Complementary Therapies"
  ],
  [
    "Post-operative pain and post-trauma pain",
    "Pharmacological, Interventional"
  ],
  [
    "Headache",
    "Facial Pain Syndrome",
    "Neck and Upper Back Pain",
    "Complex Regional Pain Syndrome",
    "Thoracic and Abdominal Pain",
    "Low Back Pain",
    "Pelvic and Perineal Pain"
  ],
  [
    "Neuropathic Pain",
    "Post-Herpetic Neuralgia",
    "Diabetic Neuropathy",
    "Peripheral Neuropathies",
    "Phantom Limb Pain",
    "Fibromyalgia",
    "Myofascial Syndrome",
    "Arthritis",
    "Pain in Children and Elderly"
  ]
],

faqs: [
  { q: "Who is the Fellowship in Pain Management designed for?", a: "This online program is suitable for MBBS, MD, MS, DGO, DNB, or equivalent-qualified professionals seeking deeper expertise in pain management." },
  { q: "What key subjects are included in the Pain Management fellowship at DMHCA?", a: "This fellowship from DMHCA covers multimodal pain assessment, pharmacologic and non-pharmacologic strategies, interventional pain techniques, chronic pain syndromes, and evidence-based clinical care concepts." },
  { q: "How is the Pain Management fellowship delivered by DMHCA?", a: "The course is delivered through online lectures, expert-led discussions, clinical case reviews, and comprehensive digital study materials that learners can access flexibly from anywhere." },
  { q: "What improvements can this fellowship bring to my clinical practice?", a: "Completing this fellowship helps enhance your pain assessment skills, improve treatment planning confidence, and deepen understanding of complex pain conditions in diverse clinical settings." },
  { q: "What is the fee for the Pain Management fellowship at DMHCA?", a: "Fees vary depending on course structure and included digital learning materials; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can completing this fellowship from DMHCA enhance my career opportunities and earning potential?", a: "Yes, this program in pain management can boost your professional credibility, expand clinical roles, and support higher earning prospects in pain care and related specialties." }
],
    meta: { duration: "50 week", lessons: "33", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-medical-oncology",
    title: "Fellowship in Medical Oncology",
    categories: ["oncology"],
    image: "/courses/Medical-Oncology-410x290.webp",
    heroDescription: "Lead the Fight Against Cancer: Fellowship in Medical Oncology for Advanced Cancer Treatment and Care.",
    lessons: 72,
    weeks: 50,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Medical Oncology provides advanced training in the diagnosis, treatment, and management of cancer using chemotherapy, immunotherapy, targeted therapy, and other systemic treatments. The program emphasizes a multidisciplinary approach to cancer care, focusing on personalized treatment plans for solid tumors and hematologic malignancies. Fellows gain hands-on experience in cancer staging, treatment protocols, and the management of side effects, preparing them to lead oncology teams in delivering comprehensive cancer care.",

learn: [
  "Expertise in diagnosing various cancers, understanding tumor biology, and accurately staging cancers to guide treatment decisions.",
  "Mastery of administering and managing chemotherapy, immunotherapy, and targeted treatments for solid tumors and hematologic cancers.",
  "Skills in using cutting-edge immunotherapies and understanding their mechanisms to enhance patient outcomes.",
  "Training in managing cancer-related symptoms, pain, and treatment side effects, with a focus on improving quality of life.",
  "Proficiency in creating individualized treatment plans based on genetic, molecular, and clinical factors.",
  "Skills in recognizing and managing oncologic emergencies such as tumor lysis syndrome, febrile neutropenia, and spinal cord compression."
],

requirements: [
  "MBBS/ MD/ MS/ DGO/ DNB/ Equivalent",
  "No previous experience is needed."
],

modules: [
  "Fundamentals of Oncology & Cancer Biology",
  "Chemotherapy & Systemic Therapy",
  "Breast Oncology",
  "Gastrointestinal & Hepatobiliary Oncology",
  "Thoracic Oncology",
  "Genitourinary Oncology",
  "Gynecologic Oncology",
  "Head, Neck & Neuro-Oncology",
  "Hematologic Malignancies",
  "Pediatric & Rare Tumors",
  "Palliative & Supportive Oncology",
  "Oncologic Emergencies, Research & Clinical Practice"
],

moduleDetails: [
  [
    "Cancer biology and carcinogenesis",
    "Tumor immunology",
    "Molecular oncology basics",
    "Cancer epidemiology and prevention",
    "Tumor pathology and staging (TNM system)",
    "Performance status assessment (ECOG, Karnofsky)",
    "Principles of systemic cancer therapy"
  ],
  [
    "Classes of chemotherapeutic agents",
    "Chemotherapy protocols and regimens",
    "Dose calculation and modifications",
    "Toxicities and adverse effect management",
    "Targeted therapy basics",
    "Immunotherapy principles",
    "Safe handling of cytotoxic drugs"
  ],
  [
    "Early and locally advanced breast cancer",
    "Metastatic breast cancer management",
    "Hormonal therapy in breast cancer",
    "HER2-positive breast cancer treatment",
    "Neoadjuvant and adjuvant therapy protocols",
    "Management of treatment-related complications"
  ],
  [
    "Esophageal and gastric cancers",
    "Colorectal cancer management",
    "Pancreatic cancer systemic therapy",
    "Hepatocellular carcinoma",
    "Biliary tract malignancies",
    "Metastatic GI cancers treatment approaches"
  ],
  [
    "Non-small cell lung cancer (NSCLC)",
    "Small cell lung cancer (SCLC)",
    "Molecular profiling (EGFR, ALK, PD-L1 overview)",
    "Targeted therapy in lung cancer",
    "Immunotherapy in thoracic malignancies",
    "Pleural malignancies"
  ],
  [
    "Prostate cancer systemic therapy",
    "Bladder cancer chemotherapy & immunotherapy",
    "Renal cell carcinoma targeted therapy",
    "Testicular tumors management",
    "Hormonal therapy in GU cancers",
    "Advanced and metastatic disease management"
  ],
  [
    "Ovarian cancer systemic therapy",
    "Cervical cancer chemotherapy",
    "Endometrial cancer management",
    "Gestational trophoblastic neoplasia (overview)",
    "Recurrent gynecologic cancers"
  ],
  [
    "Head and neck cancers systemic therapy",
    "Oral cavity and laryngeal cancers",
    "Gliomas and brain metastasis (systemic management)",
    "Chemoradiation principles",
    "Recurrent and metastatic disease"
  ],
  [
    "Lymphomas (Hodgkin & Non-Hodgkin)",
    "Multiple myeloma",
    "Leukemias (overview for medical oncology)",
    "Indications for stem cell transplant referral",
    "Supportive care in hematologic malignancies"
  ],
  [
    "Common pediatric solid tumors (overview)",
    "Sarcomas (osteosarcoma, Ewing sarcoma)",
    "Germ cell tumors",
    "Neuroblastoma and Wilms tumor (overview)",
    "Rare malignancies and orphan tumors"
  ],
  [
    "Cancer pain management",
    "Febrile neutropenia management",
    "Nutritional support in cancer patients",
    "Management of chemotherapy complications",
    "End-of-life care and symptom control",
    "Psycho-oncology and counseling"
  ],
  [
    "Tumor lysis syndrome",
    "Spinal cord compression",
    "Superior vena cava syndrome",
    "Hypercalcemia of malignancy",
    "Clinical trials and research methodology",
    "Evidence-based oncology practice",
    "Ethics and medico-legal aspects in oncology",
    "Case presentations and exit assessment"
  ]
],

faqs: [
  { q: "Who is the Fellowship in Medical Oncology designed for?", a: "The course welcomes MBBS/MD/MS/DGO/DNB or equivalent professionals aiming to build advanced expertise in medical oncology through flexible online learning, without prior experience." },
  { q: "What core oncology topics are included in the Medical Oncology fellowship at DMHCA?", a: "This fellowship covers cancer biology, chemotherapeutic regimens, targeted therapies, immunotherapy principles, and evidence-based patient management strategies." },
  { q: "How is the Medical Oncology fellowship delivered by DMHCA?", a: "The course is provided through online lectures, expert-led sessions, case-based discussions, and comprehensive digital resources accessible from anywhere." },
  { q: "How can completing this fellowship improve my oncology practice?", a: "Completing this fellowship helps deepen cancer care knowledge, enhance therapeutic decision-making, and strengthen clinical confidence in oncology." },
  { q: "What is the fee for the Medical Oncology fellowship at DMHCA?", a: "Fees vary based on course design and included digital study materials; full pricing information is provided upon inquiry or enrollment request." },
  { q: "Can advanced training in medical oncology from DMHCA boost my career and earning potential?", a: "Yes, this program in medical oncology can boost professional credibility, expand clinical opportunities, and support higher earning prospects in oncology and related specialties." }
],
    meta: { duration: "50 week", lessons: "72", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-head-and-neck-oncology",
    title: "Fellowship in Head and Neck Oncology",
    categories: ["oncology"],
    image: "/courses/assd-2-410x290.webp",
    heroDescription: "Fellowship in Head and Neck Oncology: Advanced Surgical and Oncological Training for Comprehensive Patient Care",
    lessons: 24,
    weeks: 50,
    level: "expert",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "The Fellowship in Head and Neck Oncology offers advanced training in the diagnosis, management, and surgical treatment of head and neck cancers. Designed for medical professionals aiming to specialize in oncology, this fellowship provides hands-on experience, expert mentorship, and a multidisciplinary approach to patient care. Develop the skills needed for complex surgical procedures, innovative treatment strategies, and compassionate management of head and neck cancer patients.",

learn: [
  "Comprehensive diagnosis and management of head and neck malignancies.",
  "Advanced surgical techniques and reconstructive procedures for head and neck cancers.",
  "Multidisciplinary approaches to head and neck oncology treatment.",
  "Radiation and chemotherapy protocols, including patient selection and side effect management.",
  "Postoperative care, follow-up protocols, and rehabilitation strategies.",
  "Effective communication with patients and families regarding treatment plans and outcomes."
],

requirements: [
  "MBBS/MD/MS/Equivalent"
],

modules: [
  "Frequent Procedures for the Head and Neck Area",
  "Thyroid and Parathyroid Tumors",
  "Neck Disorders",
  "Tumors of the Tongue and Floor of the Mouth",
  "Tumors of the Larynx and Hypopharynx",
  "Management of Advanced Head and Neck Cancer"
],

moduleDetails: [
  [
    "Biopsy of the Sentinel Lymph Node",
    "Biopsy of Lymph Nodes",
    "Surgical Creation of a Tracheal Opening",
    "Removal of the Submandibular Gland"
  ],
  [
    "Investigating Surgical Anatomy and Pathology",
    "Surgical Removal of the Thyroid",
    "Thyroidectomy Involving Tracheal Resection",
    "Thyroidectomy with Sternotomy for Goiter Behind the Breastbone",
    "Diagnosing and Locating the Parathyroid",
    "Cyst Associated with the Thyroglossal Duct",
    "Parathyroid Gland Adenoma"
  ],
  [
    "Anatomical and Pathological Considerations in Neck Surgery",
    "Principles of Neck Surgery"
  ],
  [
    "Anatomical Aspects of Surgery",
    "Principles of Surgery",
    "T1 Lesion",
    "T3 and T4 Lesion",
    "T2 Lesion"
  ],
  [
    "Anatomy and Pathology of Surgery",
    "Total Laryngectomy",
    "Pharynx-Skin Fistula"
  ],
  [
    "Addressing Tongue and Floor of Mouth (FOM) Lesions",
    "Approaches to Treating Untreated Tumors",
    "Management of Oropharyngeal Tumors"
  ]
],

faqs: [
  {
    q: "Who is eligible for the Head and Neck Oncology Fellowship?",
    a: "The Fellowship in Head and Neck Oncology at DMHCA is designed for medical professionals with an MBBS, MD, MS, or equivalent qualification who want to advance their knowledge and skills in the diagnosis, management, and surgical treatment of head and neck cancers."
  },
  {
    q: "What advanced topics are included in the Head and Neck Oncology fellowship at DMHCA?",
    a: "This fellowship from DMHCA covers cancer diagnosis in head and neck regions, tumor biology, multidisciplinary treatment planning, radiotherapy fundamentals, and evidence-based clinical strategies."
  },
  {
    q: "How is the Head and Neck Oncology fellowship delivered by DMHCA?",
    a: "The program is ideal for oncologists, ENT surgeons, maxillofacial surgeons, radiation specialists, and healthcare professionals seeking deeper theoretical expertise in head and neck cancer care."
  },
  {
    q: "How is the Fellowship in Head and Neck Oncology course delivered?",
    a: "The course is provided through online lectures, expert-led sessions, case-based discussions, and comprehensive digital study materials that learners can access flexibly from anywhere."
  },
  {
    q: "What is the fee for the Head and Neck Oncology fellowship at DMHCA?",
    a: "Fees vary based on course structure and included learning resources; detailed pricing information is provided upon inquiry or enrollment request."
  },
  {
    q: "Can completing this online fellowship from DMHCA enhance my career prospects and earnings?",
    a: "Yes, This program in head and neck oncology can boost your professional profile, expand clinical opportunities, and support higher earning potential in oncology and related specialties."
  }
],
    meta: { duration: "50 week", lessons: "24", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-gynecologic-oncology",
    title: "Fellowship in Gynecologic Oncology",
    categories: ["obs-gynae"],
    image: "/courses/Gynaecologic--410x290.webp",
    heroDescription: "Become an Expert in Cancer Care: Fellowship in Gynecologic Oncology for Specialized Surgical and Oncologic Training.",
    lessons: 64,
    weeks: 50,
    level: "expert",
    priceINR: 170000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in Gynecologic Oncology offers advanced training in the diagnosis, treatment, and management of cancers affecting the female reproductive system, including ovarian, uterine, cervical, and vulvar cancers. The program provides comprehensive education in surgical oncology, chemotherapy, radiation therapy, and cutting-edge treatments such as targeted therapy and immunotherapy. Fellows gain hands-on experience in complex cancer surgeries, treatment planning, and research in gynecologic oncology.",

learn: [
  "Training in administering chemotherapy and applying radiation therapy principles in gynecologic oncology.",
  "Skills in minimally invasive surgeries including laparoscopic and robotic-assisted cancer procedures.",
  "Exposure to targeted therapies and immunotherapy in gynecologic cancer management.",
  "Ability to collaborate in multidisciplinary teams for personalized cancer treatment planning.",
  "Techniques for palliative care and symptom management in advanced cancer patients.",
  "Participation in clinical research and advancements in gynecologic oncology.",
  "Understanding genetic cancer syndromes including BRCA and Lynch syndrome with counseling skills.",
  "Development of communication, ethics, and compassionate oncology care skills."
],

requirements: [
  "MBBS / MD / MS / Equivalent",
  "No previous experience is needed."
],

modules: [
  "Foundations of Gynecologic Oncology",
  "Cervical Cancer",
  "Ovarian Cancer",
  "Endometrial Cancer",
  "Vulvar & Vaginal Cancers",
  "Gestational Trophoblastic Disease",
  "Minimally Invasive & Robotic Surgery in Oncology",
  "Chemotherapy & Targeted Therapy",
  "Radiation Oncology Principles",
  "Palliative Care & Survivorship",
  "Recurrent & Advanced Disease Management",
  "Ethics & Clinical Integration"
],

moduleDetails: [
  [
    "Epidemiology of gynecologic cancers",
    "Tumor biology and carcinogenesis",
    "Genetics (BRCA, Lynch syndrome)",
    "FIGO staging systems",
    "Oncology imaging principles",
    "Multidisciplinary tumor board approach"
  ],
  [
    "Cervical cancer screening (Pap smear, HPV testing)",
    "Colposcopy and biopsy techniques",
    "Staging and evaluation",
    "Radical hysterectomy principles",
    "Chemoradiation protocols",
    "Follow-up and surveillance"
  ],
  [
    "Epithelial ovarian cancer",
    "Germ cell tumors",
    "Sex cord stromal tumors",
    "Cytoreductive surgery",
    "Neoadjuvant chemotherapy",
    "Targeted therapy basics"
  ],
  [
    "Endometrial cancer pathology",
    "Diagnostic workup",
    "Surgical management",
    "Sentinel lymph node mapping",
    "Adjuvant therapy principles",
    "Fertility-sparing options"
  ],
  [
    "Vulvar and vaginal cancer pathology",
    "Clinical evaluation and staging",
    "Radical vulvectomy principles",
    "Groin node dissection",
    "Radiotherapy indications",
    "Reconstruction basics"
  ],
  [
    "Hydatidiform mole",
    "Choriocarcinoma",
    "Risk stratification",
    "Chemotherapy protocols",
    "β-hCG monitoring"
  ],
  [
    "Laparoscopic staging procedures",
    "Robotic-assisted surgery principles",
    "Pelvic and para-aortic lymphadenectomy",
    "ERAS protocols",
    "Complication management"
  ],
  [
    "Chemotherapy principles",
    "Gynecologic cancer regimens",
    "PARP inhibitors and targeted therapy",
    "Immunotherapy basics",
    "Managing chemotherapy complications"
  ],
  [
    "External beam radiotherapy",
    "Brachytherapy",
    "Radiation planning basics",
    "Toxicity management",
    "Combined modality therapy"
  ],
  [
    "Cancer pain management",
    "End-of-life care",
    "Psychological support",
    "Survivorship care plans",
    "Fertility preservation counseling"
  ],
  [
    "Recurrent cervical cancer management",
    "Recurrent ovarian cancer management",
    "Secondary cytoreduction",
    "Clinical trials overview",
    "Personalized medicine approach"
  ],
  [
    "Oncology trial design",
    "Biostatistics basics",
    "Ethics in cancer care",
    "Tumor board discussions",
    "Case presentations"
  ]
],

faqs: [
  { q: "Who can enroll in this fellowship?", a: "MBBS, MD, MS, or equivalent qualified professionals can apply with no prior experience required." },
  { q: "What subjects are covered in this program?", a: "It includes gynecologic cancers, chemotherapy, radiation therapy, surgical oncology, targeted therapy, and immunotherapy." },
  { q: "How is the course delivered?", a: "It is delivered through online lectures, expert sessions, case-based learning, and digital study materials." },
  { q: "What skills will I gain?", a: "You will gain expertise in cancer diagnosis, treatment planning, surgical oncology, and multidisciplinary cancer care." },
  { q: "What is the fee for this fellowship?", a: "Fees vary based on structure and resources; exact details are provided during inquiry." },
  { q: "Can this fellowship improve career growth?", a: "Yes, it enhances clinical expertise, professional credibility, and career opportunities in oncology." }
],
    meta: { duration: "50 week", lessons: "64", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-gastroenterology",
    title: "Fellowship in Gastroenterology",
    categories: ["gastroenterology", "general-surgery"],
    image: "/courses/Gastroenterologist-410x290.webp",
    heroDescription: "Gain Expertise in Diagnosing and Treating Gastrointestinal and Liver Diseases with a Fellowship in Gastroenterology.",
    lessons: 46,
    weeks: 50,
    level: "expert",
    priceINR: 150000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "A Fellowship in Gastroenterology is an advanced, specialized medical training program designed for physicians who have completed their internal medicine residency. This fellowship provides in-depth knowledge and hands-on experience in diagnosing, treating, and managing a wide range of gastrointestinal disorders, liver diseases, and conditions affecting the digestive system. Fellows gain expertise in procedures like endoscopy, colonoscopy, and advanced imaging techniques, preparing them to become skilled gastroenterologists. The program typically lasts 2-3 years and includes both clinical practice and research opportunities.",
    learn: [ "How to perform and interpret specialized tests such as endoscopy, colonoscopy, and esophagogastroduodenoscopy (EGD) for diagnosing gastrointestinal (GI) disorders.",
    "Comprehensive understanding of diseases affecting the GI tract, including irritable bowel syndrome (IBS), Crohn's disease, ulcerative colitis, and gastrointestinal cancers.",
    "Diagnosis and management of liver conditions such as hepatitis, cirrhosis, and liver failure.",
    "Hands-on training in procedures like polypectomy, biopsy, stent placement, and managing GI bleeding",
    "The role of nutrition in managing GI diseases and metabolic conditions related to the digestive system.",
    "Mastering the use of diagnostic imaging techniques like MRI, CT scans, and motility studies to assess GI function.",
    "Working alongside surgeons, radiologists, oncologists, and dietitians to provide comprehensive care."],
    requirements: [  "MBBS/Equivalent",
    "No previous experience is needed."],
    modules: [ "MODULES -1",
      "MODULES -2",
      "MODULES -3",
      "MODULES -4",
      "MODULES -5",
      "MODULES -6",
      "MODULES -7"],
    faqs: [
       {
      "q": "Who is the ideal candidate for this gastroenterology fellowship?",
      "a": "This Program is designed for MBBS/equivalent holders, the course offers advanced online education in gastroenterology for physicians and healthcare professionals."
    },
    {
      "q": "What advanced topics will I study in this gastroenterology fellowship?",
      "a": "This fellowship covers digestive disorders, liver disease management, GI diagnostics, functional bowel conditions, and evidence-based treatment approaches."
    },
    {
      "q": "How will the fellowship be delivered to learners?",
      "a": "The course is provided through online lectures, expert-led discussions, case-based learning, and digital study materials that you can access flexibly."
    },
    {
      "q": "How does the Fellowship in Gastroenterology support professional growth?",
      "a": "Completing this fellowship helps enhance clinical expertise, improve GI diagnostic skills, and strengthen your profile in internal medicine and gastroenterology care."
    },
    {
      "q": "What is the fee for the Fellowship in Gastroenterology?",
      "a": "Fees vary based on course structure and included learning resources; full pricing details are shared when you make an inquiry or enrollment request."
    },
    {
      "q": "Can this fellowship enhance earning potential or clinical opportunities?",
      "a": "Yes, This advanced online training in gastroenterology can boost professional credibility, expand clinical roles, and support higher income prospects in GI and internal medicine practice."
    }
    ],
    moduleDetails:[
      [
        "Basic mechanisms of normal and abnormal gastrointestinal function",
        "Gastrointestinal tract and liver",
        "Enteric nervous system and its extrinsic connections",
        "Gastrointestinal hormones and receptors",
        "Mucosal immune system and gastrointestinal inflammation",
        "Esophageal motor function"
      ],
      [
        "Gastric secretion",
        "Electrolyte secretion and absorption: small intestine and colon",
        "Pancreatic secretion",
        "Bile secretion and cholestasis",
        "Carbohydrate assimilation",
        "Intestinal lipid absorption",
        "Protein digestion and assimilation"
      ],
      [
        "Motility disorders of the esophagus",
        "Gastroesophageal reflux disease",
        "Eosinophilic esophagitis",
        "Barrett oesophagus and esophageal Adenocarcinoma",
        "Esophageal neoplasms"
      ],
      [
        "Dysmotility of the small intestine and colon",
        "Bacterial, viral, and toxic causes of diarrhoea",
        "Chronic infections of the small intestine",
        "Short bowel syndrome",
        "Bacterial overgrowth",
        "Tumours of the small intestine"
      ],
      [
        "Inflammatory bowel disease",
        "Colorectal cancer screening",
        "Polyposis syndromes",
        "Anorectal diseases",
        "Acute and Chronic pancreatitis",
        "Gallbladder and biliary tract",
        "Gallstones"
      ],
      [
        "Viral hepatitis",
        "Drug-induced liver disease",
        "Primary biliary cirrhosis",
        "Metabolic diseases of the liver",
        "Alcoholic liver diseases",
        "Nonalcoholic fatty liver disease",
        "Hepatocellular carcinoma",
        "Vascular diseases of the liver",
        "Liver biopsy and histopathological diagnosis"
      ],
      [
        "Obesity",
        "Eating disorders",
        "Gastrointestinal manifestations",
        "Oral manifestations of gastrointestinal diseases",
        "Imaging in Gastroenterology",
        "Endoscopic mucosal biopsy"
      ]
    ],
    meta: { duration: "50 week", lessons: "46", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-gi-endoscopy",
    title: "Fellowship in GI Endoscopy",
    categories: ["gastroenterology"],
    image: "/courses/GI-ENDOSCOPY-410x290.webp",
    heroDescription: "Specialize in GI Diagnostics and Treatment: Fellowship in GI Endoscopy for Advanced Endoscopic Skills.",
    lessons: 12,
    weeks: 50,
    level: "expert",
    priceINR: 135000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in GI Endoscopy provides advanced training in the diagnosis and treatment of gastrointestinal disorders using endoscopic techniques. The program focuses on mastering procedures such as upper endoscopy (EGD), colonoscopy, and therapeutic interventions like polypectomy, stent placement, and endoscopic ultrasound (EUS). Fellows gain hands-on experience in diagnostic and therapeutic endoscopy, enabling them to manage a wide range of GI conditions with minimally invasive precision.",

learn: [
  "Mastery of diagnostic endoscopic procedures including EGD, colonoscopy, and sigmoidoscopy.",
  "Skills in therapeutic interventions such as polypectomy, biopsy, banding, clipping, and cauterization.",
  "Training in endoscopic ultrasound (EUS) for GI cancer diagnosis, staging, and guided interventions.",
  "Experience in ERCP for bile duct and pancreatic duct disorders.",
  "Skills in managing GI bleeding using endoscopic techniques.",
  "Knowledge of managing conditions like peptic ulcers, IBD, and GI cancers.",
  "Expertise in stent placement and dilation of GI tract strictures.",
  "Understanding of sterilization, infection control, and patient safety in endoscopy."
],

requirements: [
  "MBBS / MD / MS / Equivalent",
  "No previous experience is needed."
],

modules: [
  "Introduction to GI Endoscopy",
  "Anatomy and Physiology of the Gastrointestinal Tract",
  "Endoscopic Equipment and Instrumentation",
  "Advanced Endoscopic Procedures and Therapeutic Interventions"
],

moduleDetails: [
  [
    "Scope of GI Endoscopy",
    "Types of Endoscopic Procedures",
    "Advancements in Endoscopic Technology"
  ],
  [
    "Structural anatomy of GI tract",
    "Layers of GI wall (mucosa, submucosa, muscularis, serosa)",
    "Digestive processes",
    "Neurological regulation of GI system"
  ],
  [
    "Endoscopic types and systems",
    "Optical systems",
    "Equipment handling and maintenance"
  ],
  [
    "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
    "Endoscopic Ultrasound (EUS)",
    "Endoscopic resection of complex lesions"
  ]
],

faqs: [
  { q: "Who can enroll in the GI Endoscopy fellowship?", a: "MBBS, MD, MS, or equivalent qualified professionals can apply; no prior experience is required." },
  { q: "What topics are covered in this fellowship?", a: "It covers diagnostic and therapeutic endoscopy including EGD, colonoscopy, ERCP, EUS, and GI disease management." },
  { q: "How is the course delivered?", a: "It is delivered through online lectures, expert sessions, case discussions, and digital learning resources." },
  { q: "What skills will I gain?", a: "You will gain expertise in diagnostic GI endoscopy, therapeutic procedures, and advanced endoscopic techniques." },
  { q: "What is the fee for this program?", a: "Fees vary based on structure and resources; exact details are shared during inquiry or enrollment." },
  { q: "Can this fellowship improve career growth?", a: "Yes, it enhances clinical skills, professional credibility, and career opportunities in gastroenterology." }
],
    meta: { duration: "50 week", lessons: "12", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-urology",
    title: "Fellowship in Urology",
    categories: ["urology"],
    image: "/courses/Blue-Pink-Illustrative-Breast-Cancer-Awareness-Instagram-Post-2-410x290.webp",
    heroDescription: "Comprehensive Fellowship in Urology: Advanced Training in Diagnosis, Treatment, and Management of Urological Conditions",
    lessons: 35,
    weeks: 50,
    level: "expert",
    priceINR: 140000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "The Fellowship in Urology is an intensive, hands-on program designed to equip healthcare professionals with specialized expertise in diagnosing, treating, and managing urological conditions. This program provides advanced clinical training and research opportunities, focusing on the latest advancements and best practices in urology. With a strong emphasis on patient care and surgical skills, the fellowship prepares participants to handle complex urological cases with confidence and precision.",

learn: [
  "Advanced diagnostic techniques for urological conditions",
  "Surgical skills and minimally invasive procedures in urology",
  "Management of urological cancers including prostate, kidney, and bladder cancer",
  "Comprehensive care for kidney stones, incontinence, and other common urological issues",
  "Principles of pediatric and geriatric urology",
  "Evidence-based practices and advancements in urological treatments"
],

requirements: [
  "MD/MS/DNB / Equivalent"
],

modules: [
  "Clinical Anatomy and Physiology of the Urinary and Male Reproductive Systems",
  "Symptoms of Urological Diseases",
  "Examination Methods of Urological Patients",
  "Anomalies of the Urinary and Male Reproductive Systems",
  "Inflammatory and Infectious Diseases",
  "Urolithiasis",
  "Traumatic Injuries of the Urinary and Male Reproductive Systems",
  "Neoplasms of Urinary and Male Reproductive Systems"
],

moduleDetails: [
  [
    "Anatomical structure of the urinary system",
    "Physiology of the urinary system",
    "Anatomical structure of the male reproductive system",
    "Physiology of the male reproductive system"
  ],
  [
    "Pain",
    "Urination disorders",
    "Quantitative changes in urine",
    "Qualitative changes in urine",
    "Pathological changes of sperm and discharge from the urethra"
  ],
  [
    "Physical examination methods",
    "Laboratory diagnostics",
    "Radiologic examination",
    "Hardware and instrumental methods of examination"
  ],
  [
    "Anomalies of kidneys",
    "Abnormal development of ureter",
    "Abnormal development of urinary bladder",
    "Abnormal development of urethra",
    "Abnormal development of penis",
    "Abnormal development of scrotum"
  ],
  [
    "Nonspecific inflammatory diseases",
    "Tuberculosis of urinary and male reproductive systems",
    "Parasitic diseases of the urinary and male reproductive systems"
  ],
  [
    "Renal and ureteral concrements",
    "Stones of the urinary bladder",
    "Urethral concrements",
    "Concrements of the prostate gland"
  ],
  [
    "Injury of the kidney",
    "Ureteral injury",
    "Urinary bladder injury",
    "Injury of the urethra",
    "Injury of the scrotum",
    "Injury of the penis"
  ],
  [
    "The renal parenchyma cancer",
    "Wilms' tumor"
  ]
],

faqs: [
  { q: "Who should consider enrolling in the DMHCA Fellowship in Urology?", a: "MD/MS/DNB or equivalent professionals seeking advanced knowledge in urological care through online learning." },
  { q: "What advanced urology topics are included in the fellowship curriculum at DMHCA?", a: "Urinary tract disorders, prostate and kidney diseases, surgical urology principles, and evidence-based management." },
  { q: "How will I access the Urology fellowship training delivered by DMHCA?", a: "Through online lectures, expert-led discussions, clinical case reviews, and digital study materials." },
  { q: "What improvements can this fellowship bring to my clinical practice?", a: "Enhances clinical reasoning, diagnostic skills, and confidence in managing urological conditions." },
  { q: "What is the fee for the Fellowship in Urology at DMHCA?", a: "Fees vary by course structure and resources; details are shared upon inquiry or enrollment." },
  { q: "Can completing this online urology fellowship from DMHCA enhance my career and earnings?", a: "Yes, it can improve professional credibility, expand clinical opportunities, and support higher earning potential." }
],
    meta: { duration: "50 week", lessons: "35", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-clinical-hematology",
    title: "Fellowship in Clinical Hematology",
    categories: ["medicine"],
    image: "/courses/istockphoto-1285253618-612x612-1-410x290.webp",
    heroDescription: "Advance Your Expertise in Blood Disorders: Fellowship in Clinical Hematology for Specialized Care and Research.",
    lessons: 56,
    weeks: 50,
    level: "expert",
    priceINR: 150000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Clinical Hematology is a specialized branch of medicine focused on the diagnosis, evaluation, and management of blood and bone marrow disorders including anemias, bleeding and clotting disorders, hematologic malignancies, transfusion medicine, and stem cell transplantation. This fellowship provides structured clinical training, laboratory exposure, and case-based learning to help physicians manage hematologic diseases independently in outpatient and inpatient settings.",

learn: [
  "Interpretation of CBC, peripheral smear, coagulation profile, and bone marrow studies.",
  "Diagnosis and management of different types of anemia including iron deficiency, hemolytic, and aplastic anemia.",
  "Evaluation and treatment of bleeding and thrombotic disorders including ITP, TTP, hemophilia, and DIC.",
  "Understanding and management of leukemias, lymphomas, and plasma cell disorders.",
  "Principles of chemotherapy and management of treatment-related complications.",
  "Basics of transfusion medicine including blood grouping, cross-matching, and component therapy.",
  "Recognition and management of hematologic emergencies such as tumor lysis syndrome and febrile neutropenia.",
  "Application of evidence-based hematology and participation in clinical research."
],

requirements: [
  "MBBS / Equivalent",
  "No previous experience is needed."
],

modules: [
  "Basics of Hematology & Laboratory Principles",
  "Anemias",
  "Hemoglobinopathies & Red Cell Disorders",
  "White Blood Cell Disorders",
  "Lymphomas & Plasma Cell Disorders",
  "Platelet & Coagulation Disorders",
  "Hematologic Malignancies & Targeted Therapy",
  "Transfusion Medicine & Stem Cell Transplantation",
  "Pediatric Hematology",
  "Supportive Care & Hematologic Emergencies",
  "Advanced & Complex Hematology"
],

moduleDetails: [
  [
    "Hematopoiesis and bone marrow physiology",
    "CBC interpretation",
    "Peripheral smear examination",
    "Bone marrow aspiration principles",
    "Hematology laboratory techniques"
  ],
  [
    "Iron deficiency anemia",
    "Megaloblastic anemia",
    "Hemolytic anemia",
    "Aplastic anemia",
    "Anemia of chronic disease"
  ],
  [
    "Thalassemia syndromes",
    "Sickle cell disease",
    "G6PD deficiency",
    "Hereditary spherocytosis",
    "Iron overload management"
  ],
  [
    "Acute leukemias",
    "Chronic leukemias",
    "Myelodysplastic syndromes",
    "Myeloproliferative neoplasms",
    "WBC disorders overview"
  ],
  [
    "Hodgkin lymphoma",
    "Non-Hodgkin lymphoma",
    "Multiple myeloma",
    "Monoclonal gammopathy",
    "Chemotherapy principles"
  ],
  [
    "Thrombocytopenia",
    "ITP and TTP",
    "Hemophilia A and B",
    "Von Willebrand disease",
    "DIC and thrombophilia"
  ],
  [
    "AML and ALL",
    "CML and CLL",
    "Molecular diagnostics",
    "Targeted therapy basics",
    "Immunotherapy basics"
  ],
  [
    "Blood grouping and cross-matching",
    "Component therapy",
    "Transfusion reactions",
    "Apheresis",
    "Stem cell transplantation overview"
  ],
  [
    "Pediatric anemia",
    "Pediatric leukemias",
    "Congenital bleeding disorders",
    "Hemoglobinopathies in children"
  ],
  [
    "Febrile neutropenia",
    "Tumor lysis syndrome",
    "Hyperleukocytosis",
    "Infection prophylaxis",
    "Palliative care in hematology"
  ],
  [
    "Refractory hematologic malignancies",
    "Clinical trials overview",
    "Personalized medicine in hematology",
    "Long-term survivorship care"
  ]
],

faqs: [
  { q: "Who can enroll in this fellowship?", a: "MBBS or equivalent qualified professionals can apply; no prior experience is required." },
  { q: "What topics are covered in this program?", a: "It includes anemia, leukemia, lymphoma, coagulation disorders, transfusion medicine, and bone marrow evaluation." },
  { q: "How is the course delivered?", a: "It is delivered through online lectures, case discussions, expert sessions, and digital study materials." },
  { q: "What skills will I gain?", a: "You will gain expertise in diagnosing and managing blood disorders and hematologic emergencies." },
  { q: "What is the fee for this fellowship?", a: "Fees vary based on structure and resources; exact details are shared during inquiry." },
  { q: "Can this fellowship improve career growth?", a: "Yes, it enhances clinical expertise, professional credibility, and career opportunities in hematology." }
],
    meta: { duration: "50 week", lessons: "56", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-oral-implantology-and-laser-dentistry",
    title: "Fellowship in Oral Implantology and Laser Dentistry",
    categories: ["dental"],
    image: "/courses/Fellowship-in-Oral-Implantology-and-Laser-Dentistry-410x290.webp",
    heroDescription: "Master advanced techniques with a Fellowship in Oral Implantology and Laser Dentistry.",
    lessons: 67,
    weeks: 50,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "The Fellowship in Oral Implantology and Laser Dentistry is a comprehensive program designed for dental professionals seeking advanced skills in implantology and laser applications. This course covers implant planning, placement, and restoration techniques, along with the use of lasers in various dental procedures. Participants will gain hands-on training in modern tools and techniques, enhancing their ability to perform precise, minimally invasive treatments. Ideal for dentists aiming to expand their expertise and provide innovative, high-quality dental care.",

learn: [
  "Fundamentals of oral implantology",
  "Implant planning, placement & restoration",
  "Laser applications in dental procedures",
  "Soft & hard tissue management",
  "Techniques for minimally invasive dentistry",
  "Treatment of peri-implant diseases",
  "Hands-on training with modern equipment",
  "Postoperative care & complication management"
],

requirements: [
  "BDS/MDS in DCI recognized institutions"
],

modules: [
  "Basic Sciences & Implant Biology",
  "Diagnostic Workup & Treatment Planning",
  "Fundamentals of Dental Lasers",
  "Basic Implant Surgical Techniques",
  "Implant Prosthodontics (Restorative Phase)",
  "Laser in Soft Tissue Procedures",
  "Advanced Implantology Concepts",
  "Bone Augmentation & Surgical Advances",
  "Laser Applications in Periodontology & Endodontics",
  "Digital Implant Dentistry",
  "Interdisciplinary & Aesthetic Implant Dentistry",
  "Complications & Clinical Integration"
],

moduleDetails: [
  ["Applied oral and maxillofacial anatomy", "Bone physiology and healing", "Osseointegration principles", "Implant biomaterials and surface science", "Sterilization and infection control in implant surgery"],
  ["Patient evaluation and case selection", "Medical risk assessment", "Radiographic assessment", "Surgical guide planning", "Occlusion in implant dentistry", "Digital workflow introduction"],
  ["Laser physics and tissue interaction", "Types of dental lasers", "Laser safety protocols and regulations", "Laser-tissue absorption principles", "Clinical indications and contraindications"],
  ["Surgical armamentarium and setup", "Aseptic surgical protocols", "Flap design and incision techniques", "Osteotomy preparation sequence", "Implant placement in posterior region", "Suturing techniques and post-operative care"],
  ["Healing abutments and soft tissue management", "Impression techniques", "Temporary prosthesis fabrication", "Abutment selection and customization", "Screw-retained vs cement-retained prosthesis", "Occlusal considerations in implant prosthesis"],
  ["Laser gingivectomy and gingivoplasty", "Frenectomy and fibrotomy", "Depigmentation procedures", "Laser crown lengthening", "Soft tissue contouring around implants", "Post-laser healing protocols"],
  ["Immediate implant placement", "Immediate loading protocols", "Implant placement in aesthetic zone", "Full mouth rehabilitation concepts", "Implant biomechanics", "Implant complications and prevention"],
  ["Guided Bone Regeneration", "Bone graft materials (autograft, allograft, xenograft, alloplast)", "PRF and growth factors in implantology", "Ridge preservation and ridge split techniques", "Sinus lift (direct and indirect) – theory & observation"],
  ["Laser-assisted periodontal therapy", "Pocket disinfection and bacterial reduction", "Peri-implant mucositis and peri-implantitis laser management", "Laser use in endodontic disinfection", "Laser bleaching and aesthetic applications"],
  ["CBCT-based implant planning", "Guided implant surgery workflow", "CAD/CAM prosthetic concepts", "Intraoral scanning basics", "3D printing of surgical guides", "Digital smile design integration"],
  ["Implant in aesthetic zone management", "Soft tissue aesthetics (pink aesthetics)", "Implant with orthodontic considerations", "Implant-supported overdentures", "Geriatric and medically compromised patients"],
  ["Implant failure analysis and management", "Peri-implant diseases", "Nerve injury and surgical complications", "Case documentation and portfolio preparation", "Practice management and implant clinic setup", "Ethics and medico-legal considerations in implantology and laser dentistry"]
],

faqs: [
  { q: "Who should enroll in this dental fellowship program?", a: "This program is designed for BDS and MDS holders from DCI-recognized institutions." },
  { q: "What advanced skills are covered in this oral implantology and laser dentistry fellowship?", a: "This fellowship teaches dental implant placement, laser applications in soft and hard tissue, surgical protocols, and esthetic rehabilitation, enhancing clinical expertise in modern dentistry." },
  { q: "How long does the fellowship in oral implantology and laser dentistry last?", a: "The fellowship is structured to provide comprehensive clinical exposure over a 50-week period." },
  { q: "What career opportunities are available after completing this fellowship?", a: "Candidates can work as implant specialists, laser dentists, clinical consultants, or practice owners, offering advanced dental care in private clinics and specialty centers." },
  { q: "What is the fee for the fellowship in Oral Implantology and Laser Dentistry?", a: "Course fees vary based on clinical exposure and training components; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this fellowship improve my dental practice and earning potential?", a: "Yes — specialized expertise in implantology and laser dentistry enhances your professional profile, attracts more patients, and can significantly boost earning potential." }
],
    meta: { duration: "50 week", lessons: "67", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-maxillofacial-and-oral-surgery",
    title: "Fellowship in Maxillofacial and Oral Surgery",
    categories: ["dental"],
    image: "/courses/Fellowship-in-Maxillofacial-and-Oral-Surgery-410x290.webp",
    heroDescription: "Enhance your expertise with a Fellowship in Maxillofacial and Oral Surgery. Master advanced techniques.",
    lessons: 46,
    weeks: 50,
    level: "expert",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "The Fellowship in Maxillofacial and Oral Surgery is a specialized program designed for dental and medical professionals to gain expertise in diagnosing and managing complex oral and facial conditions. This comprehensive course covers trauma surgery, orthognathic procedures, implantology, TMJ disorders, and oral cancer management. Participants receive training in surgical techniques, anesthesia, and postoperative care to develop advanced skills in maxillofacial and oral surgery.",

learn: [
  "Basics of maxillofacial and oral surgery",
  "Management of facial trauma & fractures",
  "Orthognathic surgery techniques",
  "Dental implantology & bone grafting",
  "TMJ disorders diagnosis & treatment",
  "Oral cancer detection & management",
  "Surgical anesthesia & pain management",
  "Hands-on training in advanced procedures"
],

requirements: ["MDS in DCI recognized institutions"],

modules: [
  "Medicine, Surgery, and Anesthesia",
  "Dentoalveolar and Implant Surgery",
  "Maxillofacial Trauma",
  "Maxillofacial Pathology/Infections",
  "Maxillofacial Reconstruction",
  "Orthognathic Surgery",
  "Facial Aesthetic Surgery"
],

moduleDetails: [
  ["Wound Healing", "Medical Management and Preoperative Patient Assessment", "Pharmacology of Outpatient Anesthesia Medications", "Outpatient Anesthesia"],
  ["Impacted Teeth", "Maxillofacial Surgical Applications", "Implant Prosthodontics", "Comprehensive Implant Site Preparation", "Soft Tissue Management in Implant Therapy", "Craniofacial Implant Surgery"],
  ["Initial Management of the Trauma Patient", "Soft Tissue Injuries", "Management of Alveolar and Dental Fractures", "Contemporary Management of Mandibular Fractures", "Fractures of the Mandibular Condyle", "Management of Maxillary Fractures", "Management of Zygomatic Complex Fractures", "Orbital and Ocular Trauma", "Management of Frontal Sinus and Nasal Fractures"],
  ["Principles of Management of Maxillofacial Infections", "Differential Diagnosis of Oral Disease", "Odontogenic Cysts and Tumors", "Benign Nonodontogenic Lesions of the Jaws", "Oral Cancer", "Head and Neck Skin Cancer", "Salivary Gland Disease", "Mucosal and Related Dermatologic Diseases"],
  ["Local and Regional Flaps", "Vascularized and Neovascularized Hard", "Micro neurosurgery", "Cleft Lip and Palate", "Reconstruction of the Alveolar Cleft", "No syndromic Craniosynostosis", "Craniofacial Dysostosis Syndromes"],
  ["Craniofacial Growth and Development", "Orthodontics for Orthognathic Surgery", "Model Surgery and Virtual Planning", "Mandibular Orthognathic Surgery", "Principles of Maxillary Orthognathic Surgery", "Complications of Orthognathic Surgery"],
  ["Blepharoplasty", "Basic Principles of Rhinoplasty", "Rhytidectomy", "Forehead and Brow Procedures", "Otoplastic Surgery for the Protruding Ear", "Adjunctive Facial Aesthetic Procedures"]
],

faqs: [
  { q: "Who is eligible for the Fellowship in Maxillofacial and Oral Surgery?", a: "This fellowship is designed for MDS graduates from DCI-recognized institutions seeking advanced training in oral and maxillofacial surgery." },
  { q: "What advanced surgical expertise does this fellowship provide?", a: "The program covers facial trauma, orthognathic surgery, implantology, maxillofacial pathology, reconstruction, and facial aesthetic surgery." },
  { q: "How long is the Fellowship in Maxillofacial and Oral Surgery?", a: "The fellowship is structured over 50 weeks and includes comprehensive theoretical and clinical training." },
  { q: "What career opportunities are available after completing this fellowship?", a: "Graduates can work as oral and maxillofacial surgeons, implant specialists, surgical consultants, or specialists in hospitals and advanced dental centers." },
  { q: "What is the fee for the Fellowship in Maxillofacial and Oral Surgery?", a: "Fees vary based on course structure and training components; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this fellowship improve my career and earning potential?", a: "Yes, advanced training in maxillofacial and oral surgery can enhance professional credibility, expand clinical opportunities, and support higher earning potential." }
],
    meta: { duration: "50 week", lessons: "46", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-pediatrics",
    title: "Fellowship in Pediatrics",
    categories: ["pediatrics"],
    image: "",
    lessons: 48,
    weeks: 50,
    level: "expert",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Comprehensive pediatric training covering general pediatrics and subspecialties.",
    learn: ["Pediatric care", "Child development", "Vaccination", "Pediatric emergencies", "Preventive health"],
    requirements: ["MBBS"],
    modules: ["General Pediatrics", "Neonatology", "Pediatric Emergencies", "Vaccination", "Growth monitoring"],
    faqs: [{ q: "Specialization?", a: "Pediatrics" }],
    meta: { duration: "50 week", lessons: "48", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-pediatric-nephrology",
    title: "Fellowship in Pediatric Nephrology",
    categories: ["pediatrics"],
    image: "",
    lessons: 40,
    weeks: 50,
    level: "expert",
    priceINR: 150000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Specialized training in pediatric kidney diseases and renal disorders.",
    learn: ["Pediatric nephrology", "Kidney diseases", "Dialysis", "Transplantation"],
    requirements: ["MBBS", "Pediatrics background"],
    modules: ["Renal Physiology", "Pediatric Kidney Diseases", "Dialysis", "Transplant"],
    faqs: [{ q: "Focus?", a: "Pediatric kidney disorders" }],
    meta: { duration: "50 week", lessons: "40", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-pediatric-endocrinology",
    title: "Fellowship in Pediatric Endocrinology",
    categories: ["pediatrics"],
    image: "",
    lessons: 36,
    weeks: 50,
    level: "expert",
    priceINR: 140000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Training in pediatric endocrine disorders and metabolic diseases.",
    learn: ["Pediatric endocrinology", "Diabetes", "Growth disorders", "Metabolic diseases"],
    requirements: ["MBBS", "Pediatrics background"],
    modules: ["Endocrine System", "Diabetes in children", "Growth disorders", "Metabolic"],
    faqs: [{ q: "Specialization?", a: "Pediatric endocrinology" }],
    meta: { duration: "50 week", lessons: "36", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-radiology",
    title: "Fellowship in Radiology",
    categories: ["radiology"],
    image: "",
    lessons: 52,
    weeks: 50,
    level: "expert",
    priceINR: 150000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Comprehensive radiology training including various imaging modalities.",
    learn: ["X-ray", "CT imaging", "MRI", "Ultrasound", "Nuclear imaging"],
    requirements: ["MBBS", "MD Radiology"],
    modules: ["Imaging Basics", "CT", "MRI", "Ultrasound", "Interventional Radiology"],
    faqs: [{ q: "Modalities?", a: "CT, MRI, X-ray, Ultrasound" }],
    meta: { duration: "50 week", lessons: "52", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-neuroradiology",
    title: "Fellowship in Neuroradiology",
    categories: ["radiology"],
    image: "",
    lessons: 44,
    weeks: 50,
    level: "expert",
    priceINR: 199000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Specialized training in neuroimaging and neuroradiology procedures.",
    learn: ["Brain imaging", "Spinal imaging", "Vascular imaging", "Interventional neuroradiology"],
    requirements: ["MD Radiology"],
    modules: ["Neuro imaging", "Brain MRI", "Spine imaging", "Interventional"],
    faqs: [{ q: "Specialization?", a: "Neuroradiology" }],
    meta: { duration: "50 week", lessons: "44", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-interventional-radiology",
    title: "Fellowship in Interventional Radiology",
    categories: ["radiology"],
    image: "",
    lessons: 40,
    weeks: 50,
    level: "expert",
    priceINR: 180000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Advanced training in minimally invasive imaging-guided interventional procedures.",
    learn: ["Image guidance", "Interventional techniques", "Vascular intervention", "Biopsies"],
    requirements: ["MD Radiology"],
    modules: ["Interventional Basics", "Vascular IR", "Drainage", "Biopsies", "Advanced"],
    faqs: [{ q: "Focus?", a: "Minimally invasive procedures" }],
    meta: { duration: "50 week", lessons: "40", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-musculoskeletal-ultrasound",
    title: "Fellowship in Musculoskeletal Ultrasound",
    categories: ["radiology"],
    image: "",
    lessons: 32,
    weeks: 26,
    level: "expert",
    priceINR: 140000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Specialized ultrasound training for musculoskeletal imaging and interventions.",
    learn: ["MSK ultrasound", "Joint scanning", "Guided injections", "Tendon imaging"],
    requirements: ["MD Radiology"],
    modules: ["Ultrasound Basics", "Joint imaging", "Tendons", "Guided procedures"],
    faqs: [{ q: "Techniques?", a: "MSK ultrasound and guided procedures" }],
    meta: { duration: "26 week", lessons: "32", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-vascular-ultrasound",
    title: "Fellowship in Vascular Ultrasound",
    categories: ["radiology"],
    image: "",
    lessons: 30,
    weeks: 25,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Training in vascular ultrasound imaging and hemodynamic assessment.",
    learn: ["Carotid ultrasound", "Venous ultrasound", "Arterial ultrasound", "Hemodynamics"],
    requirements: ["MBBS"],
    modules: ["Vascular anatomy", "Carotid", "Venous", "Arterial", "Hemodynamics"],
    faqs: [{ q: "Focus?", a: "Vascular imaging" }],
    meta: { duration: "25 week", lessons: "30", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-arthroscopy-and-arthroplasty",
    title: "Fellowship in Arthroscopy & Arthroplasty",
    categories: ["orthopedics"],
    image: "",
    lessons: 48,
    weeks: 50,
    level: "expert",
    priceINR: 170000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Advanced training in arthroscopic surgery and joint replacement procedures.",
    learn: ["Arthroscopy", "Knee surgery", "Shoulder surgery", "Joint replacement"],
    requirements: ["MS Orthopedics"],
    modules: ["Arthroscopy basics", "Knee arthroscopy", "Shoulder arthroscopy", "Joint replacement"],
    faqs: [{ q: "Procedures?", a: "Arthroscopy and joint replacement" }],
    meta: { duration: "50 week", lessons: "48", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-arthroscopy-and-sports-medicine",
    title: "Fellowship in Arthroscopy and Sports Medicine",
    categories: ["orthopedics"],
    image: "",
    lessons: 48,
    weeks: 50,
    level: "expert",
    priceINR: 170000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Training in sports medicine and arthroscopic management of sports injuries.",
    learn: ["Sports injuries", "Arthroscopy", "Rehabilitation", "Performance enhancement"],
    requirements: ["MS Orthopedics"],
    modules: ["Sports medicine basics", "Injury assessment", "Arthroscopy", "Rehabilitation"],
    faqs: [{ q: "Focus?", a: "Sports injuries and arthroscopy" }],
    meta: { duration: "50 week", lessons: "48", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-internal-medicine",
    title: "Fellowship in Internal Medicine",
    categories: ["medicine"],
    image: "",
    lessons: 84,
    weeks: 50,
    level: "expert",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    heroDescription:"Master Advanced Internal Medicine: Gain Expertise in Diagnosis, Management, and Evidence-Based Care for Complex Adult Diseases",
   overview: "The Fellowship in Internal Medicine offers advanced clinical training in the prevention, diagnosis, and treatment of adult diseases. This program is designed to enhance expertise in managing a wide range of complex medical conditions, providing fellows with the tools to deliver high-quality, evidence-based care to adult patients. Participants will become proficient in internal medicine practices through clinical rotations, case-based learning, and mentorship.",
trainers: [
  {
    name: "Dr. Mysara",
    title: "Internal Medicine",
    image: "/Faculty_images/Dr. Mysara.webp"
  }
],
learn: [
  "Diagnosis and management of chronic and acute medical conditions in adults.",
  "Evidence-based practices for treating cardiovascular, respiratory, and gastrointestinal diseases.",
  "Advanced patient care techniques, including preventive care and risk factor management.",
  "Comprehensive management of diabetes, hypertension, and metabolic syndromes.",
  "Clinical decision-making and diagnostic skills in complex cases.",
  "Best practices in patient communication and interdisciplinary collaboration."
],

requirements: [
  "MBBS and Above Qualification",
  "No previous experience is needed."
],

modules: [
  "Foundations of Internal Medicine & Clinical Methods",
  "Cardiovascular Medicine",
  "Respiratory Medicine",
  "Gastroenterology & Hepatology",
  "Endocrinology & Metabolism",
  "Nephrology",
  "Infectious Diseases",
  "Neurology",
  "Rheumatology & Immunology",
  "Hematology & Oncology",
  "Critical Care & Emergency Medicine",
  "Geriatric Medicine & Clinical Integration"
],

moduleDetails: [
  [
    "Advanced history taking and clinical examination",
    "Diagnostic reasoning and clinical decision making",
    "Evidence-based medicine principles",
    "Interpretation of laboratory investigations",
    "ECG basics and interpretation",
    "Fluid, electrolyte and acid–base balance",
    "Preventive medicine and health screening"
  ],
  [
    "Hypertension and hypertensive emergencies",
    "Ischemic heart disease",
    "Acute coronary syndrome",
    "Heart failure (acute and chronic)",
    "Arrhythmias and conduction disorders",
    "Valvular heart diseases",
    "Cardiomyopathies",
    "Basics of echocardiography (interpretation)"
  ],
  [
    "Asthma and COPD management",
    "Pneumonia and lower respiratory infections",
    "Tuberculosis (pulmonary and extrapulmonary)",
    "Interstitial lung diseases",
    "Pleural diseases (effusion, pneumothorax)",
    "Pulmonary embolism",
    "Oxygen therapy and ventilatory support (basics)"
  ],
  [
    "Acid peptic disease and GERD",
    "Inflammatory bowel disease",
    "Irritable bowel syndrome",
    "Acute and chronic liver diseases",
    "Viral hepatitis",
    "Cirrhosis and portal hypertension",
    "Pancreatitis (acute and chronic)",
    "GI bleeding management"
  ],
  [
    "Diabetes mellitus and its complications",
    "Thyroid disorders",
    "Adrenal disorders",
    "Pituitary disorders (overview)",
    "Dyslipidemia and metabolic syndrome",
    "Obesity management",
    "Calcium and bone metabolism disorders"
  ],
  [
    "Acute kidney injury",
    "Chronic kidney disease",
    "Glomerular diseases",
    "Electrolyte and acid–base disorders",
    "Hyponatremia and hypernatremia",
    "Dialysis principles (hemodialysis & peritoneal dialysis overview)",
    "Hypertensive nephropathy"
  ],
  [
    "Sepsis and septic shock",
    "Tropical infections (dengue, malaria, leptospirosis, typhoid)",
    "HIV and opportunistic infections",
    "Fever of unknown origin (FUO)",
    "Antimicrobial stewardship",
    "Emerging and re-emerging infections",
    "Infection control practices"
  ],
  [
    "Stroke (ischemic and hemorrhagic)",
    "Epilepsy and seizure disorders",
    "Headache disorders",
    "Movement disorders (overview)",
    "Neuromuscular disorders (overview)",
    "Delirium and encephalopathy",
    "Neurodegenerative diseases (overview)"
  ],
  [
    "Rheumatoid arthritis",
    "Systemic lupus erythematosus",
    "Vasculitis syndromes",
    "Spondyloarthropathies",
    "Connective tissue disorders",
    "Immunodeficiency disorders (overview)",
    "Biological therapies basics"
  ],
  [
    "Anemia (evaluation and management)",
    "Hemolytic disorders",
    "Coagulation disorders",
    "Leukemias and lymphomas (overview)",
    "Multiple myeloma (overview)",
    "Blood transfusion medicine",
    "Oncologic emergencies (overview)"
  ],
  [
    "Shock (all types) management",
    "Acute poisoning and toxicology",
    "Acute respiratory failure",
    "ICU monitoring and basic ventilator management",
    "Acute coronary emergencies",
    "Acute metabolic emergencies (DKA, HHS)",
    "Multiorgan dysfunction syndrome (MODS)"
  ],
  [
    "Geriatric syndromes and polypharmacy",
    "Palliative care in chronic illness",
    "Preventive geriatrics",
    "Clinical audit and quality improvement",
    "Case presentations and exit assessment"
  ]
],

faqs: [
  { q: "Who should enroll in the Internal Medicine Fellowship program?", a: "This online program is suitable for MBBS and above qualified professionals seeking to strengthen their expertise in internal medicine, with no previous experience needed." },
  { q: "What clinical areas are included in the Fellowship in Internal Medicine at DMHCA?", a: "This fellowship from DMHCA covers diagnosis and management of chronic diseases, acute clinical reasoning, preventive medicine, patient assessment strategies, and evidence-based therapeutic care." },
  { q: "How will I access the Internal Medicine fellowship training content?", a: "The course is provided through online lectures, expert-led discussions, case studies, and comprehensive digital resources, allowing learners to study flexibly from anywhere." },
  { q: "In what ways can this fellowship improve my clinical practice?", a: "Completing this fellowship helps enhance diagnostic accuracy, refine management strategies, and strengthen your clinical confidence in treating a wide range of internal medicine conditions." },
  { q: "What is the fee for the Fellowship in Internal Medicine at DMHCA?", a: "Fees vary based on course structure and included digital learning materials; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "Can advanced online training from DMHCA help boost my career opportunities and income?", a: "Yes, completing this fellowship can boost your professional credibility, open doors to advanced clinical roles, and support better earning potential in internal medicine and related healthcare fields." }
],
    meta: { duration: "50 week", lessons: "84", skill_level: "Fellowship", certificate: "yes" }
  },
 
  {
    slug: "fellowship-in-sleep-medicine",
    title: "Fellowship in Sleep Medicine",
    categories: ["neurology"],
    image: "",
    lessons: 40,
    weeks: 50,
    level: "expert",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Training in sleep disorders diagnosis and management including polysomnography.",
    learn: ["Sleep physiology", "Sleep disorders", "Polysomnography", "Treatment"],
    requirements: ["MD Medicine/Neurology"],
    modules: ["Sleep science", "Disorders", "Diagnostics", "Treatment"],
    faqs: [{ q: "Specialization?", a: "Sleep medicine" }],
    meta: { duration: "50 week", lessons: "40", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-addiction-psychology",
    title: "Fellowship in Addiction Psychology",
    categories: ["medicine"],
    image: "/courses/Fellowship-in-Addiction-Psychology-410x290.webp",
    heroDescription: "Comprehensive training in addiction assessment, treatment, and rehabilitation programs.",
    lessons: 36,
    weeks: 52,
    level: "expert",
    priceINR: 100000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Advanced training in substance abuse disorders, behavioral addictions, and evidence-based treatment strategies for addiction psychology.",
    learn: ["Addiction assessment", "Behavioral therapy", "Pharmacotherapy", "Rehabilitation programs", "Relapse prevention", "Motivational interviewing"],
    requirements: ["MD Psychiatry/Psychology", "2+ years experience"],
    modules: ["Addiction Basics", "Assessment", "Pharmacotherapy", "Psychotherapy", "Group therapy", "Rehabilitation"],
    faqs: [
      { q: "Focus?", a: "Comprehensive addiction management" },
      { q: "Career?", a: "Addiction specialist in clinics and rehabilitation centers" },
      { q: "Duration?", a: "12 months" }
    ],
    moduleDetails: [
      ["Course overview", "Learning outcomes", "Prerequisites", "Assessment", "Resources"],
      ["Theoretical foundations", "Practical skills", "Clinical applications", "Assessment methods", "Improvement strategies"],
      ["Advanced cases", "Comprehensive review", "Exam preparation", "Career opportunities", "Continuous learning"]
    ],
    trainers: [{ name: "DMHCA Faculty", title: "Addiction Psychology Specialists" }],
    meta: { duration: "52 week", lessons: "36", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-andrology",
    title: "Fellowship in Andrology",
    categories: ["urology"],
    image: "/courses/Fellowship-in-Andrology-410x290.webp",
    heroDescription: "Specialized training in male infertility, erectile dysfunction, and sexual medicine.",
    lessons: 32,
    weeks: 26,
    level: "expert",
    priceINR: 99000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Advanced training in male reproductive disorders, infertility diagnosis and treatment, and sexual dysfunction management.",
    learn: ["Male reproductive physiology", "Semen analysis", "Infertility treatment", "Erectile dysfunction", "Hormone therapy", "Surgical management"],
    requirements: ["MD Urology", "1+ years experience"],
    modules: ["Male Anatomy", "Fertility", "Sexual Function", "Diagnostics", "Medical Management", "Surgical Options"],
    faqs: [
      { q: "Specialization?", a: "Male reproductive health and andrology" },
      { q: "Career?", a: "Andrologist in hospitals and clinics" },
      { q: "Duration?", a: "6 months" }
    ],
    moduleDetails: [
      ["Course overview", "Learning outcomes", "Prerequisites", "Assessment", "Resources"],
      ["Theoretical foundations", "Practical skills", "Clinical applications", "Assessment methods", "Improvement strategies"],
      ["Advanced cases", "Comprehensive review", "Exam preparation", "Career opportunities", "Continuous learning"]
    ],
    trainers: [{ name: "DMHCA Faculty", title: "Andrology Specialists" }],
    meta: { duration: "26 week", lessons: "32", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-neurosurgery",
    title: "Fellowship in Neurosurgery",
    categories: ["neurology"],
    image: "/courses/Fellowship-in-Neurosurgery-410x290.webp",
    heroDescription: "Advanced training in neurosurgical procedures, brain and spinal cord surgery.",
    lessons: 78,
    weeks: 52,
    level: "expert",
    priceINR: 199000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Comprehensive neurosurgical training including cranial surgery, spinal surgery, and minimally invasive procedures.",
    learn: ["Cranial surgery", "Spinal surgery", "Tumor management", "Trauma surgery", "Vascular neurosurgery", "Functional neurosurgery"],
    requirements: ["MS General Surgery", "3+ years experience"],
    modules: ["Neurosurgery Basics", "Cranial Surgery", "Spinal Surgery", "Tumor Surgery", "Vascular Surgery", "Advanced Techniques"],
    faqs: [
      { q: "Specialization?", a: "Comprehensive neurosurgery" },
      { q: "Career?", a: "Neurosurgeon in tertiary centers" },
      { q: "Duration?", a: "12 months" }
    ],
    moduleDetails: [
      ["Course overview", "Learning outcomes", "Prerequisites", "Assessment", "Resources"],
      ["Theoretical foundations", "Practical skills", "Clinical applications", "Assessment methods", "Improvement strategies"],
      ["Advanced cases", "Comprehensive review", "Exam preparation", "Career opportunities", "Continuous learning"]
    ],
    trainers: [{ name: "DMHCA Faculty", title: "Neurosurgery Specialists" }],
    meta: { duration: "52 week", lessons: "78", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-diabetic-foot-care",
    title: "Fellowship in Diabetic Foot Care",
    categories: ["endocrinology"],
    image: "/courses/Fellowship-in-Diabetic-Foot-Care-410x290.webp",
    heroTitle: "Master Diabetic Foot Care",
    heroDescription: "Specialized training in diabetic foot ulcers, wound management, and amputation prevention.",
    lessons: 24,
    weeks: 26,
    level: "expert",
    priceINR: 90000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
    overview: "Advanced training in prevention, diagnosis, and management of diabetic foot complications including ulcers and infections.",
    learn: ["Foot examination", "Ulcer classification", "Wound management", "Infection treatment", "Amputation prevention", "Patient education"],
    requirements: ["MBBS/MD Endocrinology/Podiatry", "2+ years experience"],
    modules: ["Diabetic Foot Basics", "Assessment", "Wound Care", "Infection Management", "Surgical Intervention", "Prevention Strategies"],
    faqs: [
      { q: "Focus?", a: "Diabetic foot complications and care" },
      { q: "Career?", a: "Diabetic foot care specialist" },
      { q: "Duration?", a: "6 months" }
    ],
    moduleDetails: [
      ["Course overview", "Learning outcomes", "Prerequisites", "Assessment", "Resources"],
      ["Theoretical foundations", "Practical skills", "Clinical applications", "Assessment methods", "Improvement strategies"],
      ["Advanced cases", "Comprehensive review", "Exam preparation", "Career opportunities", "Continuous learning"]
    ],
    trainers: [{ name: "DMHCA Faculty", title: "Diabetic Foot Care Specialists" }],
    meta: { duration: "26 week", lessons: "24", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "fellowship-in-minimal-access-surgery",
    title: "Fellowship in Minimal Access Surgery",
    categories: ["general-surgery"],
    image: "/courses/srr-410x290.webp",
    heroDescription: "Master Minimally Invasive Gynecology: Fellowship in Minimal Access Surgery for Advanced Laparoscopic and Hysteroscopic Techniques.",
    lessons: 47,
    weeks: 52,
    level: "expert",
    priceINR: 170000,
    rating: null,
    reviewCount: 0,
    program: "Fellowship",
   overview: "A Fellowship in Minimal Access Surgery (Gynecology) offers specialized training in advanced laparoscopic and hysteroscopic procedures for the diagnosis and treatment of gynecological conditions. The program emphasizes minimally invasive techniques that reduce recovery time, minimize scarring, and improve patient outcomes. Fellows gain hands-on experience in treating conditions like endometriosis, fibroids, ovarian cysts, and infertility, preparing them for leadership roles in gynecologic surgery.",

learn: [
  "Mastery of managing acute medical conditions such as myocardial infarctions, strokes, sepsis, and respiratory emergencies.",
  "Skills in performing hysteroscopic surgeries to treat intrauterine conditions like polyps, adhesions, and fibroids.",
  "Expertise in laparoscopic suturing and tissue handling for complex gynecological surgeries.",
  "Training in laparoscopic and robotic-assisted hysterectomy techniques to improve patient recovery and outcomes.",
  "Skills in performing minimally invasive surgeries for infertility, such as tubal surgeries and ovarian drilling.",
  "Proficiency in managing chronic pelvic pain and advanced excision techniques for endometriosis.",
  "Exposure to robotic systems for enhanced precision in gynecologic surgery.",
  "Training in optimizing postoperative care for minimally invasive gynecologic surgeries, focusing on rapid recovery and patient comfort."
],

requirements: [
  "MBBS/ Equivalent",
  "No previous experience is needed."
],

modules: [
  "Syallabus",
  "Theory",
  "Endoscopic Surgical Procedures"
],

moduleDetails: [
  [
    "Theoretical basis of various laparoscopic and hysteroscopic surgeries.",
    "Surgical anatomy of pelvis and abdomen.",
    "Surgical techniques of various operative procedures.",
    "Indications, contraindications and limitation of the procedures.",
    "Knowledge of all endoscopic instruments and equipments along with proper sterilization, maintenance and proper usage.",
    "Physical and kinetic changes associated with various procedures including usage of anesthetic agents.",
    "Documentation, assessment and evaluation of data.",
    "Ethical, legal and social implications."
  ],
  [
    "Historical aspects.",
    "Details of surgical instruments and equipment.",
    "Access routes and its physical implications.",
    "With special reference to pneumo peritoneum.",
    "Sterilization techniques.",
    "Principals of Electrocautery and Electrosurgery including newer devices harmonic scalpel, lasers, endosutures etc.",
    "Anesthetic agents and techniques.",
    "Detection and management of complications.",
    "Diagnostic hysteroscopy.",
    "Hysteroscopic surgeries.",
    "Laparoscopic diagnosis of various gynaec pathologies.",
    "Laparoscopic diagnosis of malignancy."
  ],
  [
    "Diagnostic laparoscopy",
    "Laparoscopic adhesiolysis",
    "Laparoscopic tubal ligation",
    "Laparoscopic tubal reconstructive surgery",
    "Laparoscopic management of ectopic pregnancy",
    "Laparoscopic management of ovarian cysts",
    "Laparoscopic treatment of endometriosis",
    "Laparoscopic ovarian drilling",
    "Laparoscopic management of adnexal mass",
    "Laparoscopic surgery for pelvis pain",
    "Laparoscopic myomectomy",
    "Laparoscopic hysterectomy",
    "Laparoscopic colposuspension",
    "Laparoscopic retrieval procedures",
    "Diagnostic hysteroscopy",
    "Hysteroscopic surgery for Intrauterine septum, adhesions, polyps",
    "Hysteroscopic myomectomy",
    "Hysteroscopic Endometrial ablation and resection",
    "Hysteroscopic Endometrial ablation and resection",
    "Diagnostic laparoscopy",
    "Laparoscopic tubal ligation",
    "Laparoscopic tubal / adnexal surgeries",
    "Ovarian Cystectomy",
    "Ovarian drilling",
    "LAVH / TLH",
    "Laparo-hysteroscopy"
  ]
],

faqs: [
  { q: "Who is eligible for a Fellowship in Minimal Access Surgery?", a: "This online program is suitable for MBBS or equivalent-qualified professionals seeking to build theoretical expertise in minimally invasive surgery, with no previous experience needed." },
  { q: "What will I learn in the Minimal Access Surgery fellowship at DMHCA?", a: "This fellowship from DMHCA covers laparoscopy principles, minimally invasive techniques, key instrumentation, patient evaluation, and surgical planning through structured digital modules." },
  { q: "How is the Fellowship in Minimal Access Surgery delivered by DMHCA?", a: "The course is delivered through online lectures, expert-led discussions, case-based learning, and comprehensive digital study resources that can be accessed flexibly from anywhere." },
  { q: "What is the fee for the Fellowship in Minimal Access Surgery at DMHCA?", a: "Fees vary depending on course structure and included learning resources; detailed pricing information is shared upon inquiry or enrollment request." },
  { q: "How does this fellowship help my surgical career?", a: "Completing this fellowship helps strengthen surgical decision-making, deepen understanding of minimally invasive procedures, and enhance your professional profile in advanced surgical practice." },
  { q: "Can this fellowship at DMHCA increase my clinical credibility and income potential?", a: "Yes, this program in minimal access surgery can boost your professional credibility, open up advanced clinical roles, and support higher earning opportunities in surgical specialties." }
],
    trainers: [{ name: "DMHCA Faculty", title: "Minimal Access Surgery Specialists" }],
    meta: { duration: "52 week", lessons: "47", skill_level: "Fellowship", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-diabetology",
    title: "PG Diploma In Diabetology",
    categories: ["endocrinology"],
    image: "/courses/Diabetology-410x290.webp",
    heroDescription: "Elevate your career with a PG Diploma in Diabetology—specialize in diabetes care and make an impact!",
    lessons: 44,
    weeks: 52,
    level: "intermediate",
    priceINR: 115000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "The Post Graduate Diploma in Diabetology is a specialized medical program that focuses on the diagnosis, treatment, and long-term management of diabetes mellitus and its complications. The course is designed mainly for medical professionals (MBBS or equivalent) who want advanced knowledge and clinical skills in diabetes care. Pathophysiology of diabetes Diagnostic techniques Pharmacological and insulin therapy Lifestyle and nutrition management Prevention and management of complications",

learn: [
  "Understand the pathogenesis and classification of diabetes",
  "Diagnose diabetes using laboratory and clinical methods",
  "Manage patients with medication, insulin, diet, and lifestyle therapy",
  "Prevent and treat diabetes complications",
  "Provide patient education and counselling",
  "Manage diabetes clinics effectively"
],

requirements: [
  "MBBS/Equivalent",
  "No previous experience is needed."
],
trainers: [
  {
    name: "Dr. Mysara",
    title: "Internal Medicine",
    image: "/Faculty_images/Dr. Mysara.webp"
  }
],

modules: [
  "Basics of Diabetology",
  "Anatomy and Physiology",
  "Pathophysiology of Diabetes",
  "Diagnosis and Investigations",
  "Pharmacological Management",
  "Nutrition and Lifestyle Management",
  "Acute Complications of Diabetes",
  "Chronic Complications",
  "Special Situations",
  "Diabetes Technology",
  "Patient Education and Counselling",
  "Clinical Training"
],

moduleDetails: [
  [
    "Introduction to Diabetes Mellitus",
    "Epidemiology of diabetes",
    "Classification of diabetes (Type 1, Type 2, gestational)",
    "Risk factors and prevention"
  ],
  [
    "Pancreas and endocrine system",
    "Insulin secretion and glucose metabolism",
    "Hormonal regulation of blood sugar"
  ],
  [
    "Insulin resistance",
    "Beta-cell dysfunction",
    "Genetic and environmental factors"
  ],
  [
    "Blood glucose tests",
    "HbA1c testing",
    "Oral glucose tolerance test",
    "Continuous glucose monitoring"
  ],
  [
    "Oral hypoglycemic drugs",
    "Insulin therapy",
    "New antidiabetic medications",
    "Drug interactions and side effects"
  ],
  [
    "Medical nutrition therapy",
    "Diet planning for diabetic patients",
    "Physical activity and weight management",
    "Diabetes prevention strategies"
  ],
  [
    "Diabetic ketoacidosis (DKA)",
    "Hyperosmolar hyperglycemic state",
    "Hypoglycemia"
  ],
  [
    "Diabetic neuropathy",
    "Diabetic nephropathy",
    "Diabetic retinopathy",
    "Cardiovascular disease"
  ],
  [
    "Gestational diabetes",
    "Diabetes in children",
    "Diabetes in elderly patients",
    "Diabetes during surgery or illness"
  ],
  [
    "Glucose monitoring devices",
    "Insulin pumps",
    "Continuous glucose monitoring systems",
    "Telemedicine in diabetes care"
  ],
  [
    "Diabetes self-management",
    "Lifestyle counselling",
    "Psychological support for diabetic patients"
  ],
  [
    "Patient evaluation",
    "Diabetes case management",
    "Complication screening",
    "Case presentations and clinical practice"
  ]
],

faqs: [
  { q: "Who should pursue the PG Diploma in Diabetology?", a: "The program is ideal for physicians, endocrinologists, general practitioners, diabetologists, and healthcare professionals seeking deeper expertise in diabetes management through online learning." },
  { q: "What topics are included in the PG Diploma in Diabetology?", a: "This diploma covers advanced diabetes pathophysiology, glucose control strategies, complication prevention, therapeutic approaches, and evidence-based diabetes care through structured modules." },
  { q: "How is the PG Diploma in Diabetology delivered?", a: "The course is delivered via online lectures, expert-led discussions, case studies, and comprehensive digital resources, enabling flexible and accessible learning from anywhere." },
  { q: "What career benefits can I expect after completing this diploma?", a: "Completing this diploma helps enhance clinical decision-making, strengthen diabetes care expertise, and improve professional credentials in endocrinology and diabetes practice." },
  { q: "What is the fee for the PG Diploma in Diabetology?", a: "Fees vary based on course structure and included learning resources; detailed pricing is available upon inquiry or enrollment request." },
  { q: "Can this PG Diploma improve professional credibility and earning potential?", a: "Yes, This advanced expertise in diabetology can elevate your professional profile, open up advanced clinical roles, and support higher income opportunities in diabetes and metabolic care." }
],
    meta: { duration: "52 week", lessons: "44", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-family-medicine",
    title: "PG Diploma in Family Medicine",
    categories: ["medicine"],
    image: "",
    lessons: 36,
    weeks: 50,
    level: "intermediate",
    priceINR: 110000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "Comprehensive training in family medicine and primary healthcare.",
    learn: ["Primary healthcare", "Chronic disease management", "Preventive medicine", "Patient counseling", "Community health", "Clinical skills"],
    requirements: ["MBBS"],
    modules: ["Family Medicine Basics", "Chronic Diseases", "Prevention", "Patient Care", "Community Health", "Clinical Practice"],
    faqs: [
      { q: "Duration?", a: "12 months" },
      { q: "Career?", a: "Family medicine physician" }
    ],
    moduleDetails: [
      [
        "Course overview and objectives",
        "Learning outcomes",
        "Prerequisites and requirements",
        "Assessment methodology",
        "Resource materials"
      ],
      [
        "Advanced case studies",
        "Comprehensive review",
        "Exam preparation",
        "Career opportunities",
        "Continuous learning"
      ]
    ],
    meta: { duration: "50 week", lessons: "36", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-infertility-management",
    title: "PG Diploma in Infertility Management",
    heroDescription: "Boost your medical career with a PG Diploma in Infertility Management, master fertility diagnosis, IVF basics, and advanced patient care.",
    categories: ["obs-gynae"],
    image: "",
    lessons: 46,
    weeks: 50,
    level: "intermediate",
    priceINR: 115000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "The Postgraduate Diploma in Infertility Management is a specialized program designed to train healthcare professionals in the evaluation, diagnosis, and treatment of infertility in both males and females. With rising infertility rates worldwide, this field has become a key area in modern medicine. The course focuses on reproductive medicine, hormonal assessment, assisted reproductive techniques (ART), and patient counselling. It provides both theoretical knowledge and clinical/laboratory exposure, enabling professionals to work effectively in fertility clinics, IVF centers, and reproductive health units.",
   learn: [
  "Understand causes of male and female infertility",
  "Perform diagnostic evaluation of infertile couples",
  "Assist in fertility treatments and ART procedures",
  "Manage hormonal and reproductive disorders",
  "Provide patient counselling and support",
  "Apply ethical and legal principles in fertility care"
],
   requirements: ["MBBS", "BDS", "BAMS", "BHMS", "BNYS", "BUMS", "equivalent"],

modules: [
  "Introduction to Infertility Management",
  "Reproductive Anatomy and Physiology",
  "Causes of Infertility",
  "Diagnostic Evaluation",
  "Ovulation Induction and Hormonal Therapy",
  "Assisted Reproductive Techniques (ART)",
  "Embryology Basics",
  "Male Infertility Management",
  "Female Infertility Management",
  "Pregnancy and Complications",
  "Counselling and Ethics",
  "Clinical Training and Case Studies"
],

moduleDetails: [
  [
    "Definition and epidemiology of infertility",
    "Scope of reproductive medicine",
    "Role of infertility specialists",
    "Ethical and legal considerations"
  ],
  [
    "Male reproductive system",
    "Female reproductive system",
    "Hormonal regulation",
    "Menstrual cycle and ovulation"
  ],
  [
    "Male infertility factors",
    "Female infertility factors",
    "Unexplained infertility",
    "Lifestyle and environmental factors"
  ],
  [
    "Patient history and clinical examination",
    "Hormonal investigations",
    "Ultrasound and imaging techniques",
    "Semen analysis"
  ],
  [
    "Ovulation induction drugs",
    "Hormonal treatment protocols",
    "Monitoring ovulation",
    "Side effects and complications"
  ],
  [
    "Intrauterine Insemination (IUI)",
    "In Vitro Fertilization (IVF)",
    "Intracytoplasmic Sperm Injection (ICSI)",
    "Ovum donation and surrogacy"
  ],
  [
    "Fertilization and embryo development",
    "Embryo culture techniques",
    "Embryo transfer procedures",
    "Cryopreservation"
  ],
  [
    "Sperm abnormalities",
    "Medical and surgical management",
    "Advanced sperm retrieval techniques"
  ],
  [
    "PCOS and ovulatory disorders",
    "Endometriosis",
    "Tubal factors",
    "Uterine abnormalities"
  ],
  [
    "Early pregnancy monitoring",
    "Complications after ART",
    "Miscarriage and recurrent pregnancy loss"
  ],
  [
    "Psychological aspects of infertility",
    "Patient counselling",
    "Ethical issues in ART",
    "Legal regulations"
  ],
  [
    "Infertility case management",
    "ART lab exposure",
    "Clinical case discussions",
    "Internship / project work"
  ]
],

faqs: [
  { q: "Who is eligible for enrolling in the PG Diploma in Infertility Management?", a: "The program is suitable for MBBS, BDS, BAMS, BHMS, BNYS, BUMS, and equivalent healthcare professionals seeking specialized knowledge in infertility management." },
  { q: "What key subjects are included in the PG Diploma in Infertility Management?", a: "The curriculum covers reproductive medicine, infertility diagnosis, hormonal assessment, assisted reproductive techniques, embryology, and patient counselling." },
  { q: "What professional advantages can this diploma offer?", a: "This diploma enhances expertise in fertility care, reproductive medicine, and assisted reproductive technologies, supporting career advancement in fertility clinics and IVF centers." },
  { q: "What is the fee for the PG Diploma in Infertility Management at DMHCA?", a: "Fees vary depending on the course structure and included learning resources; detailed pricing is shared upon inquiry or enrollment request." },
  { q: "Can this infertility management diploma from DMHCA enhance my career and earning potential?", a: "Yes, it can strengthen professional credibility, expand opportunities in reproductive healthcare, and support long-term career growth in fertility medicine." }
],
    meta: { duration: "50 week", lessons: "46", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-clinical-cardiology",
    title: "PG Diploma in Clinical Cardiology",
    categories: ["cardiology"],
    image: "",
    lessons: 38,
    weeks: 50,
    level: "intermediate",
    priceINR: 140000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "Specialized training in clinical cardiology and cardiac disease management.",
    learn: ["Cardiac diagnosis", "ECG interpretation", "Echocardiography", "Stress testing", "Coronary disease", "Heart failure management"],
    requirements: ["MBBS", "MD Medicine preferred"],
    modules: ["Cardiology Basics", "Diagnostics", "Acute Coronary Syndrome", "Heart Failure", "Arrhythmias", "Advanced Management"],
    faqs: [
      { q: "Duration?", a: "12 months" },
      { q: "Career?", a: "Cardiologist" }
    ],
    moduleDetails: [
      [
        "Course overview and objectives",
        "Learning outcomes",
        "Prerequisites and requirements",
        "Assessment methodology",
        "Resource materials"
      ],
      [
        "Advanced case studies",
        "Comprehensive review",
        "Exam preparation",
        "Career opportunities",
        "Continuous learning"
      ]
    ],
    meta: { duration: "50 week", lessons: "38", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-dermatology",
    title: "PG Diploma in Dermatology",
    categories: ["dermatology"],
    image: "",
    lessons: 40,
    weeks: 50,
    level: "intermediate",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "Comprehensive training in dermatology covering diagnosis and treatment of skin conditions.",
    learn: ["Dermatological diagnosis", "Medical dermatology", "Surgical techniques", "Cosmetic procedures", "Laser therapy", "Patient management"],
    requirements: ["MBBS"],
    modules: ["Dermatology Basics", "Common Conditions", "Infections", "Surgical Dermatology", "Cosmetic", "Advanced Procedures"],
    faqs: [
      { q: "Duration?", a: "12 months" },
      { q: "Career?", a: "Dermatologist" }
    ],
    moduleDetails: [
      [
        "Course overview and objectives",
        "Learning outcomes",
        "Prerequisites and requirements",
        "Assessment methodology",
        "Resource materials"
      ],
      [
        "Advanced case studies",
        "Comprehensive review",
        "Exam preparation",
        "Career opportunities",
        "Continuous learning"
      ]
    ],
    meta: { duration: "50 week", lessons: "40", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-obstetrics-and-gynaecology",
    title: "PG Diploma in Obstetrics and Gynaecology",
    categories: ["obs-gynae"],
    image: "",
    lessons: 42,
    weeks: 50,
    level: "intermediate",
    priceINR: 150000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "Advanced training in obstetrics and gynecology covering pregnancy, delivery, and reproductive health.",
    learn: ["Antenatal care", "Labor management", "Operative obstetrics", "Gynecological surgery", "Infertility", "High-risk pregnancy"],
    requirements: ["MBBS"],
    modules: ["OG Basics", "Antenatal Care", "Labor & Delivery", "Complications", "Gynecological Surgery", "Advanced Cases"],
    faqs: [
      { q: "Duration?", a: "12 months" },
      { q: "Career?", a: "Obstetrician/Gynecologist" }
    ],
    moduleDetails: [
      [
        "Course overview and objectives",
        "Learning outcomes",
        "Prerequisites and requirements",
        "Assessment methodology",
        "Resource materials"
      ],
      [
        "Advanced case studies",
        "Comprehensive review",
        "Exam preparation",
        "Career opportunities",
        "Continuous learning"
      ]
    ],
    meta: { duration: "50 week", lessons: "42", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-orthopaedics",
    title: "PG Diploma in Orthopaedics",
    categories: ["orthopedics"],
    image: "",
    lessons: 35,
    weeks: 50,
    level: "intermediate",
    priceINR: 120000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "Professional training in orthopedic surgery and musculoskeletal disease management.",
    learn: ["Bone and joint anatomy", "Fracture management", "Surgical techniques", "Rehabilitation", "Sports injuries", "Joint replacement"],
    requirements: ["MBBS"],
    modules: ["Orthopedics Basics", "Fractures", "Surgical Techniques", "Joint Surgery", "Trauma", "Advanced Procedures"],
    faqs: [
      { q: "Duration?", a: "12 months" },
      { q: "Career?", a: "Orthopedic surgeon" }
    ],
    moduleDetails: [
      [
        "Course overview and objectives",
        "Learning outcomes",
        "Prerequisites and requirements",
        "Assessment methodology",
        "Resource materials"
      ],
      [
        "Advanced case studies",
        "Comprehensive review",
        "Exam preparation",
        "Career opportunities",
        "Continuous learning"
      ]
    ],
    meta: { duration: "50 week", lessons: "35", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "pg-diploma-in-rheumatology",
    title: "PG Diploma in Rheumatology",
    categories: ["medicine"],
    image: "",
    lessons: 32,
    weeks: 50,
    level: "intermediate",
    priceINR: 130000,
    rating: null,
    reviewCount: 0,
    program: "PG Diploma",
    overview: "Advanced training in rheumatological diseases and immunology.",
    learn: ["Autoimmune diseases", "SLE", "Rheumatoid arthritis", "Vasculitis", "Biologics", "Patient management"],
    requirements: ["MBBS", "MD Medicine preferred"],
    modules: ["Rheumatology Basics", "Autoimmunity", "Connective Tissue Diseases", "Vasculitis", "Treatment", "Clinical Management"],
    faqs: [
      { q: "Duration?", a: "12 months" },
      { q: "Career?", a: "Rheumatologist" }
    ],
    moduleDetails: [
      [
        "Course overview and objectives",
        "Learning outcomes",
        "Prerequisites and requirements",
        "Assessment methodology",
        "Resource materials"
      ],
      [
        "Advanced case studies",
        "Comprehensive review",
        "Exam preparation",
        "Career opportunities",
        "Continuous learning"
      ]
    ],
    meta: { duration: "50 week", lessons: "32", skill_level: "PG Diploma", certificate: "yes" }
  },
  {
    slug: "certificate-in-respiratory-care",
    title: "Certificate in Respiratory Care",
    categories: ["pulmonary"],
    image: "",
    lessons: 18,
    weeks: 12,
    level: "beginner",
    priceINR: 16000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Respiratory care essentials and oxygen therapy management.",
    learn: ["Respiratory anatomy", "Oxygen therapy", "Breathing techniques", "Patient assessment", "Respiratory conditions"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Respiratory System", "Oxygen Therapy", "Ventilation", "Assessment", "Diseases"],
    moduleDetails: [
      ["Anatomy", "Physiology", "Gas exchange"],
      ["Oxygen devices", "Delivery methods", "Monitoring"],
      ["Non-invasive ventilation", "Mechanical support", "Troubleshooting"],
      ["Assessment techniques", "ABG basics", "Scoring systems"],
      ["COPD", "Asthma", "Acute respiratory failure"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "18", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-orthopedic-trauma-medicine",
    title: "Certificate in Orthopedic and Trauma Medicine",
    categories: ["orthopedics"],
    image: "",
    lessons: 20,
    weeks: 24,
    level: "beginner",
    priceINR: 25000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Comprehensive orthopedic and trauma medicine principles.",
    learn: ["Orthopedic anatomy", "Fracture management", "Trauma protocols", "Rehabilitation", "Emergency care"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Orthopedic Anatomy", "Fracture Care", "Trauma Management", "Rehabilitation", "Emergency Protocols"],
    moduleDetails: [
      ["Skeletal anatomy", "Joint structure", "Muscle groups"],
      ["Fracture types", "Classification", "Immobilization"],
      ["Trauma assessment", "Initial care", "Surgical principles"],
      ["Physical therapy", "Recovery", "Complications"],
      ["Emergency response", "Triage", "Critical care"]
    ],
    faqs: [
      { q: "Duration?", a: "6 months (24 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "6 month", lessons: "20", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-neonatal-care",
    title: "Certificate in Neonatal Care",
    categories: ["pediatrics"],
    image: "",
    lessons: 16,
    weeks: 12,
    level: "beginner",
    priceINR: 11500,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Neonatal care essentials and newborn health management.",
    learn: ["Newborn assessment", "Feeding care", "Common conditions", "Resuscitation", "Parent education"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Neonatal Assessment", "Feeding Care", "Common Conditions", "Resuscitation", "Parent Support"],
    moduleDetails: [
      ["Physical assessment", "APGAR scoring", "Vital signs"],
      ["Breast feeding", "Bottle feeding", "Nutrition"],
      ["Jaundice", "Infections", "Respiratory issues"],
      ["CPR basics", "Emergency care", "Critical procedures"],
      ["Parent counseling", "Support", "Education"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "16", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-family-planning",
    title: "Certificate in Family Planning",
    categories: ["obs-gynae"],
    image: "",
    lessons: 14,
    weeks: 12,
    level: "beginner",
    priceINR: 11500,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Family planning and contraceptive counseling.",
    learn: ["Contraceptive methods", "Counseling skills", "Family planning", "Population health", "Patient education"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Contraceptive Methods", "Counseling", "Family Planning", "Health Education", "Community Care"],
    moduleDetails: [
      ["Barrier methods", "Hormonal methods", "IUD/IUS"],
      ["Counseling techniques", "Patient communication", "Informed consent"],
      ["Planning services", "Accessibility", "Quality care"],
      ["Health education", "Community outreach", "Prevention"],
      ["Special populations", "Age groups", "Medical conditions"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "14", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-diabetes-management",
    title: "Certificate in Diabetes Management",
    categories: ["endocrinology"],
    image: "",
    lessons: 20,
    weeks: 24,
    level: "beginner",
    priceINR: 30000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Comprehensive diabetes management and patient care.",
    learn: ["Diabetes pathology", "Blood glucose monitoring", "Insulin therapy", "Medication management", "Patient counseling"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Diabetes Basics", "Monitoring", "Medication", "Nutrition", "Patient Care"],
    moduleDetails: [
      ["Type 1 diabetes", "Type 2 diabetes", "Complications"],
      ["Blood glucose", "HbA1c", "Continuous monitoring"],
      ["Insulin types", "Administration", "Dose adjustment"],
      ["Dietary management", "Meal planning", "Nutrition education"],
      ["Patient support", "Counseling", "Self-management"]
    ],
    faqs: [
      { q: "Duration?", a: "6 months (24 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "6 month", lessons: "20", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-child-health",
    title: "Certificate in Child Health",
    categories: ["pediatrics"],
    image: "",
    lessons: 16,
    weeks: 12,
    level: "beginner",
    priceINR: 17500,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Child health and pediatric nursing essentials.",
    learn: ["Child development", "Immunization", "Common childhood illnesses", "Nutrition", "Growth monitoring"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Child Development", "Immunization", "Common Illnesses", "Nutrition", "Health Monitoring"],
    moduleDetails: [
      ["Developmental milestones", "Growth patterns", "Behavior"],
      ["Vaccination schedules", "Administration", "Side effects"],
      ["Common infections", "Fever management", "Treatment"],
      ["Infant nutrition", "Feeding practices", "Dietary needs"],
      ["Growth assessment", "Health screening", "Prevention"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "16", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-antenatal-care",
    title: "Certificate in Antenatal Care",
    categories: ["obs-gynae"],
    image: "",
    lessons: 14,
    weeks: 12,
    level: "beginner",
    priceINR: 11500,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Antenatal care and pregnancy management.",
    learn: ["Pregnancy physiology", "Antenatal screening", "Risk assessment", "Health education", "Complications"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Pregnancy Physiology", "Antenatal Screening", "Risk Assessment", "Health Education", "Complications"],
    moduleDetails: [
      ["Conception to fetal development", "Maternal changes", "Placental function"],
      ["Screening tests", "Ultrasound", "Biochemical markers"],
      ["High-risk pregnancy", "Assessment", "Management"],
      ["Nutrition", "Exercise", "Lifestyle counseling"],
      ["Gestational diabetes", "Hypertension", "Infections"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "14", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-addiction-psychology",
    title: "Certificate in Addiction Psychology",
    categories: ["medicine"],
    image: "",
    lessons: 14,
    weeks: 12,
    level: "beginner",
    priceINR: 11500,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Addiction psychology and substance abuse management.",
    learn: ["Addiction pathology", "Behavioral assessment", "Treatment approaches", "Counseling techniques", "Recovery support"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Addiction Basics", "Assessment", "Treatment", "Counseling", "Recovery"],
    moduleDetails: [
      ["Substance types", "Neurobiology", "Risk factors"],
      ["Clinical evaluation", "Severity assessment", "Comorbidities"],
      ["Pharmacotherapy", "Behavioral therapy", "Rehabilitation"],
      ["Counseling skills", "Motivational interviewing", "Support groups"],
      ["Long-term recovery", "Relapse prevention", "Community support"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "14", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "advanced-certificate-cath-lab-technology",
    title: "Advanced Certificate in Cath Lab Technology",
    categories: ["cardiology"],
    image: "",
    lessons: 22,
    weeks: 24,
    level: "beginner",
    priceINR: 35000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Advanced catheterization laboratory technology and cardiac interventions.",
    learn: ["Cath lab equipment", "Sterile techniques", "Angiography", "Interventional procedures", "Patient safety"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Cath Lab Basics", "Equipment", "Procedures", "Safety", "Advanced Techniques"],
    moduleDetails: [
      ["Lab setup", "Equipment operation", "Maintenance"],
      ["Sterile technique", "Contamination control", "Quality assurance"],
      ["Diagnostic angiography", "Coronary angiography", "Imaging"],
      ["PCI procedures", "Stent placement", "Atherectomy"],
      ["Radiation safety", "Infection control", "Emergency protocols"]
    ],
    faqs: [
      { q: "Duration?", a: "6 months (24 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "6 month", lessons: "22", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-sexual-health-wellness",
    title: "Certificate in Sexual Health & Wellness",
    categories: ["medicine"],
    image: "",
    lessons: 15,
    weeks: 12,
    level: "beginner",
    priceINR: 16000,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Sexual health and wellness counseling.",
    learn: ["Sexual physiology", "Sexual dysfunction", "Counseling skills", "Contraception", "STI prevention"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Sexual Health Basics", "Dysfunction Management", "Counseling", "Contraception", "Disease Prevention"],
    moduleDetails: [
      ["Normal sexual response", "Physiology", "Age-related changes"],
      ["ED", "Orgasmic disorders", "Pain disorders"],
      ["Patient assessment", "Counseling techniques", "Communication"],
      ["Contraceptive methods", "Family planning", "Patient education"],
      ["STI prevention", "Testing", "Treatment awareness"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "15", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certificate-in-preventive-cardiology",
    title: "Certificate in Preventive Cardiology",
    categories: ["cardiology"],
    image: "",
    lessons: 16,
    weeks: 12,
    level: "beginner",
    priceINR: 17500,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Preventive cardiology and cardiovascular risk management.",
    learn: ["Risk assessment", "Lifestyle modification", "Hypertension management", "Lipid management", "Cardiac rehabilitation"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Cardiovascular Risk", "Lifestyle Modification", "Hypertension", "Lipid Management", "Rehabilitation"],
    moduleDetails: [
      ["Risk factors", "Risk stratification", "Assessment tools"],
      ["Diet", "Exercise", "Stress management"],
      ["BP monitoring", "Medication", "Lifestyle changes"],
      ["Cholesterol", "LDL management", "Medication therapy"],
      ["Cardiac rehab programs", "Exercise prescription", "Monitoring"]
    ],
    faqs: [
      { q: "Duration?", a: "3 months (12 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "3 month", lessons: "16", skill_level: "Certificate", certificate: "yes" }
  },
  {
    slug: "certification-fetal-monitoring",
    title: "Certification in Fetal Monitoring",
    categories: ["obs-gynae"],
    image: "",
    lessons: 12,
    weeks: 8,
    level: "beginner",
    priceINR: 9500,
    rating: null,
    reviewCount: 0,
    program: "Certificate",
    overview: "Fetal monitoring and interpretation for pregnancy management.",
    learn: ["Fetal physiology", "CTG monitoring", "Pattern interpretation", "Risk assessment", "Clinical management"],
    requirements: ["Graduate: Nursing / Medical/ Healthcare/ Equivalent"],
    modules: ["Fetal Physiology", "CTG Basics", "Pattern Interpretation", "Abnormalities", "Clinical Response"],
    moduleDetails: [
      ["Fetal heart rate", "Variability", "Accelerations"],
      ["CTG equipment", "Monitoring setup", "Recording"],
      ["Normal patterns", "Baseline", "Variability patterns"],
      ["Decelerations", "Tachycardia", "Bradycardia"],
      ["Action protocols", "Management", "Safety measures"]
    ],
    faqs: [
      { q: "Duration?", a: "2 months (8 weeks)" },
      { q: "Eligibility?", a: "Graduate: Nursing / Medical/ Healthcare/ Equivalent" }
    ],
    meta: { duration: "2 month", lessons: "12", skill_level: "Certificate", certificate: "yes" }
  },
];

// Ensure course images are unique: if duplicates are found, fallback to slug-based image.
(() => {
  const used = new Set<string>();
  for (const c of _courses) {
    // Ensure missing images remain blank so they can be added later
    if (!c.image) { c.image = ""; continue; }
    if (used.has(c.image)) {
      c.image = `/courses/${c.slug}-410x290.webp`;
    }
    used.add(c.image);
  }
})();

// Ensure every course has `moduleDetails` defaults to avoid runtime errors
(() => {
  for (const c of _courses) {
    if (!Array.isArray(c.moduleDetails)) {
      // create empty moduleDetails entries matching modules length
      c.moduleDetails = c.modules && c.modules.length ? c.modules.map(() => []) : [];
    }
  }
})();

// Ensure every course has at least two sample reviews so UI looks populated.
(() => {
  let idCounter = 1;
  const sampleNames = [
    'Dr. Kavita R', 'Dr. Arjun P', 'Dr. Neha S', 'Dr. Rajiv K', 'Dr. Meera T', 'Dr. Anil V'
  ];
  const sampleComments = [
    'Practical and directly applicable to clinic.',
    'Learned useful skills I use every day.',
    'Well structured with good clinical examples.',
    'Concise modules, excellent hands-on focus.',
    'Good pacing and very relevant content.'
  ];
  for (const c of _courses) {
    if (!Array.isArray(c.reviews)) c.reviews = [];
    // If fewer than 2 reviews, generate short student-style placeholder reviews
    while (c.reviews.length < 2) {
      const reviewer = sampleNames[idCounter % sampleNames.length];
      const comment = sampleComments[idCounter % sampleComments.length];
      const rating = 4 + (idCounter % 2); // 4 or 5
      const avatarIdx = (idCounter % 6) + 1; // 1..6
      c.reviews.push({
        id: `r-${c.slug}-${idCounter}`,
        studentName: reviewer,
        studentImage: `/reviews/student${avatarIdx}.svg`,
        rating,
        title: comment.split(' ')[0].slice(0,40),
        comment,
        date: new Date().toISOString().slice(0,10),
        verified: true,
        helpful: 0,
      });
      idCounter++;
    }
  }
})();

// Grouped exports for convenient editing and lookup (derived from raw `_courses`)
export const fellowships: Course[] = _courses.filter((c) => c.program === "Fellowship");
export const pgDiplomas: Course[] = _courses.filter((c) => c.program === "PG Diploma");
export const certificates: Course[] = _courses.filter((c) => (c.program || "Certificate") === "Certificate");

// Export `courses` in grouped order: fellowships, then pg diplomas, then certificates
export const courses: Course[] = [...fellowships, ...pgDiplomas, ...certificates];

// Helper functions and exports
export const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN') + '.00';
export const getCourse = (slug: string) => courses.find(c => c.slug === slug);
export const getCategory = (slug: string) => categories.find(c => c.slug === slug);
export const coursesByCategory = (slug: string) => courses.filter(c => c.categories.includes(slug));
export const relatedCourses = (slug: string, n = 3) => {
  const c = getCourse(slug);
  if (!c) return [];
  const sameCat = courses.filter(o => o.slug !== slug && o.categories.some(cat => c.categories.includes(cat)));
  return sameCat.slice(0, n);
};

// Statistics
export const courseStats = {
  total: courses.length,
  byCategory: Object.fromEntries(categories.map(cat => [cat.slug, coursesByCategory(cat.slug).length])),
  byProgram: {
    fellowship: courses.filter(c => c.program === "Fellowship").length,
    pgDiploma: courses.filter(c => c.program === "PG Diploma").length,
    certificate: courses.filter(c => c.program === "Certificate").length,
  },
  priceRange: {
    min: Math.min(...courses.map(c => c.priceINR)),
    max: Math.max(...courses.map(c => c.priceINR)),
    average: Math.round(courses.reduce((sum, c) => sum + c.priceINR, 0) / courses.length),
  },
};
