//#region src/data/courses.tsx
var categories = [
	{
		slug: "cardiology",
		name: "Cardiology",
		tagline: "Heart and cardiovascular medicine"
	},
	{
		slug: "radiology",
		name: "Radiology",
		tagline: "Diagnostic and interventional imaging"
	},
	{
		slug: "medicine",
		name: "Medicine",
		tagline: "Internal and family medicine"
	},
	{
		slug: "obs-gynae",
		name: "Obs & Gynae",
		tagline: "Obstetrics and gynaecology"
	},
	{
		slug: "emergency",
		name: "Emergency",
		tagline: "Emergency and critical care medicine"
	},
	{
		slug: "orthopedics",
		name: "Orthopedics",
		tagline: "Musculoskeletal and pain medicine"
	},
	{
		slug: "dermatology",
		name: "Dermatology",
		tagline: "Skin, cosmetic and aesthetic medicine"
	},
	{
		slug: "general-surgery",
		name: "General Surgery",
		tagline: "Surgical specialties and endoscopy"
	},
	{
		slug: "oncology",
		name: "Oncology",
		tagline: "Cancer care across specialties"
	},
	{
		slug: "endocrinology",
		name: "Endocrinology",
		tagline: "Diabetes, hormones, and metabolism"
	},
	{
		slug: "neurology",
		name: "Neurology",
		tagline: "Neurological and neurosurgical disorders"
	},
	{
		slug: "pediatrics",
		name: "Pediatrics",
		tagline: "Child health and pediatric specialties"
	},
	{
		slug: "reproductive",
		name: "Reproductive",
		tagline: "Infertility and reproductive medicine"
	},
	{
		slug: "pulmonary",
		name: "Pulmonary",
		tagline: "Respiratory and chest diseases"
	},
	{
		slug: "nutrition",
		name: "Nutrition",
		tagline: "Nutrition, dietetics, and wellness"
	},
	{
		slug: "dental",
		name: "Dental",
		tagline: "Dentistry and oral surgery"
	},
	{
		slug: "gastroenterology",
		name: "Gastroenterology",
		tagline: "GI tract and hepatology"
	},
	{
		slug: "urology",
		name: "Urology",
		tagline: "Urological and renal disorders"
	},
	{
		slug: "management",
		name: "Management",
		tagline: "Healthcare management and administration"
	}
];
var _courses = [
	{
		slug: "fellowship-in-echocardiography",
		title: "Fellowship in Echocardiography",
		categories: ["cardiology"],
		image: "/courses/assd-410x290.webp",
		lessons: 41,
		weeks: 52,
		level: "expert",
		priceINR: 11e4,
		rating: 4.8,
		reviewCount: 6,
		program: "Fellowship",
		overview: "Advanced training in cardiac imaging techniques using echocardiographic modalities for diagnosing and managing cardiovascular diseases.",
		learn: [
			"Transthoracic and transesophageal echocardiography techniques",
			"2D, 3D, and Doppler image interpretation",
			"Valve disease and cardiomyopathy evaluation",
			"Stress echocardiography and intraoperative applications",
			"Advanced hemodynamic assessment"
		],
		requirements: ["MBBS", "MD/DNB Cardiology or equivalent"],
		modules: [
			"Module 1: Introduction & Basics",
			"Module 2: Ultrasound Physics",
			"Module 3: Examination Techniques",
			"Module 4: Echocardiographic Modalities",
			"Module 5: Quantitative Measurements",
			"Module 6: Doppler Echocardiography",
			"Module 7: Functional Assessment",
			"Module 8: Cardiac Diseases",
			"Module 9: Stress Echocardiography",
			"Module 10: TEE",
			"Module 11: Interventional Echo",
			"Module 12: Clinical Application",
			"Module 13: Quality Assurance"
		],
		faqs: [
			{
				q: "Who is eligible?",
				a: "MBBS, MD/DNB (Medicine), DM Cardiology, or relevant clinical backgrounds"
			},
			{
				q: "Duration?",
				a: "10-12 months depending on training structure"
			},
			{
				q: "Career opportunities?",
				a: "Echo Specialists, Cardiac Imaging Consultants in hospitals and diagnostic centers"
			}
		],
		meta: {
			duration: "52 week",
			lessons: "41",
			skill_level: "Fellowship",
			certificate: "yes"
		},
		trainers: [{
			name: "Dr. DMHCA Expert Faculty",
			title: "Echocardiography Specialist"
		}]
	},
	{
		slug: "certificate-in-hypertension",
		title: "Certificate Course in Hypertension",
		categories: ["cardiology"],
		image: "/courses/Certificate-In-Hypertension-410x290.webp",
		lessons: 35,
		weeks: 50,
		level: "beginner",
		priceINR: 3e4,
		rating: 5,
		reviewCount: 1,
		program: "Certificate",
		overview: "Hypertension is one of the most prevalent cardiovascular risk factors and a leading cause of morbidity and mortality worldwide. Effective diagnosis, risk stratification, and long-term management of hypertension are critical in preventing complications such as stroke, myocardial infarction, heart failure, and chronic kidney disease. This certificate course is designed to equip physicians with updated knowledge and practical skills in the comprehensive evaluation and management of patients with hypertension, including resistant and secondary hypertension.",
		learn: [
			"Understand the pathophysiology and classification of hypertension",
			"Perform accurate blood pressure measurement and interpretation",
			"Evaluate cardiovascular risk and target organ damage",
			"Identify and manage primary and secondary hypertension",
			"Manage hypertensive emergencies and urgencies",
			"Prescribe appropriate pharmacological and non-pharmacological therapies",
			"Interpret ambulatory and home blood pressure monitoring reports",
			"Apply evidence-based guidelines in hypertension management"
		],
		requirements: ["MBBS", "MD/MS/DGO/DNB"],
		modules: [
			"Module 1: Fundamentals of Hypertension - Epidemiology and burden of hypertension, Pathophysiology and classification, Accurate BP measurement techniques, White coat and masked hypertension, Cardiovascular risk assessment, Lifestyle modifications",
			"Module 2: Primary (Essential) Hypertension",
			"Module 3: Secondary & Resistant Hypertension",
			"Module 4: Hypertension in Special Populations",
			"Module 5: Hypertensive Emergencies & Complications",
			"Module 6: Monitoring, Prevention & Clinical Integration"
		],
		faqs: [
			{
				q: "Who is eligible for the Certificate in Hypertension?",
				a: "MBBS, MD, MS, DGO, DNB holders and other healthcare professionals with a clinical background are eligible"
			},
			{
				q: "What is the duration?",
				a: "50 weeks"
			},
			{
				q: "What are the career opportunities?",
				a: "Hospitals, clinics, preventive care settings, and cardiovascular centers"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "35",
			skill_level: "Certificate",
			certificate: "yes"
		},
		trainers: [{ name: "DMHCA Faculty" }]
	},
	{
		slug: "fellowship-in-interventional-cardiology",
		title: "Fellowship in Interventional Cardiology",
		categories: ["cardiology"],
		image: "/courses/Cardiac-Surgeons-410x290.webp",
		lessons: 37,
		weeks: 50,
		level: "expert",
		priceINR: 19e4,
		rating: 5,
		reviewCount: 4,
		program: "Fellowship",
		overview: "The Fellowship in Interventional Cardiology is designed to provide specialized training in advanced cardiac procedures, including catheter-based treatments for heart disease. This program equips fellows with the skills needed to perform complex interventions like angioplasty, stent placement, and more, preparing them to manage critical cardiac conditions and improve patient outcomes.",
		learn: [
			"Mastery of catheter-based interventions, including angioplasty, stenting, and valve repairs",
			"Techniques for diagnosing and treating coronary artery disease and other cardiac disorders",
			"Advanced imaging and hemodynamic monitoring for precise cardiac interventions",
			"Management of acute coronary syndromes and heart failure",
			"Post-procedural care and long-term management of cardiac patients",
			"Best practices in cardiovascular risk reduction and patient safety during interventions"
		],
		requirements: ["MD/MS/DNB/DM", "5+ Years Experienced Cardiologist"],
		modules: [
			"Basic Science and Pharmacology - Arterial Disease Atherosclerosis, Restenosis Platelet Inhibitor Agents, Anticoagulant and Fibrinolytic Agents, Vasoactive and Antiarrhythmic Drugs",
			"Fundamentals of Interventions",
			"PERIPHERAL VASCULAR INTERVENTION",
			"INTRACARDIAC INTERVENTION",
			"EVALUATION OF INTERVENTIONAL TECHNIQUES",
			"INTERVENTIONAL CARDIOLOGY"
		],
		faqs: [
			{
				q: "Who is eligible?",
				a: "Candidates with MD/MS/DM/DNB in Cardiology with 5+ years experience are eligible"
			},
			{
				q: "Duration?",
				a: "50 weeks"
			},
			{
				q: "Career opportunities?",
				a: "Interventional cardiologist positions in top hospitals and cardiac centers worldwide"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "37",
			skill_level: "Fellowship",
			certificate: "yes"
		},
		trainers: [{
			name: "DMHCA Faculty",
			title: "Interventional Cardiology Specialists"
		}]
	},
	{
		slug: "fellowship-in-clinical-cardiology",
		title: "Fellowship in Clinical Cardiology",
		categories: ["cardiology"],
		image: "/courses/21003304_cardio_onc_og-410x290.webp",
		lessons: 70,
		weeks: 52,
		level: "expert",
		priceINR: 135e3,
		rating: 5,
		reviewCount: 3,
		program: "Fellowship",
		overview: "A Fellowship in Clinical Cardiology offers specialized training in diagnosing, managing, and treating a wide range of cardiovascular diseases. The program focuses on non-invasive and invasive cardiac procedures, patient care, and the latest advancements in cardiology. Fellows gain hands-on experience in echocardiography, cardiac catheterization, stress testing, and management of heart failure, preparing them for leadership roles in clinical cardiology and patient-centered cardiovascular care.",
		learn: [
			"In-depth knowledge of diagnosing and managing coronary artery disease, heart failure, arrhythmias, and valvular heart diseases",
			"Mastery of non-invasive diagnostic tools such as echocardiography, stress testing, and Holter monitoring",
			"Hands-on training in performing cardiac catheterization for diagnostic and therapeutic purposes",
			"Expertise in advanced heart failure therapies including medication management and device therapy",
			"Exposure to advanced cardiac imaging techniques like CT angiography and cardiac MRI",
			"Skills in managing arrhythmias including pharmacologic treatment and device-based therapies",
			"Training in lifestyle modification and preventive strategies for cardiovascular diseases"
		],
		requirements: ["MBBS and Above Qualification"],
		modules: [
			"Module 1: Basic Cardiovascular Sciences & Clinical Evaluation",
			"Module 2: Electrocardiography & Cardiac Monitoring",
			"Module 3: Ischemic Heart Disease",
			"Module 4: Heart Failure & Cardiomyopathies",
			"Module 5: Valvular Heart Disease",
			"Module 6: Hypertension & Preventive Cardiology",
			"Module 7: Echocardiography & Cardiac Imaging",
			"Module 8: Arrhythmias & Electrophysiology",
			"Module 9: Congenital & Structural Heart Disease",
			"Module 10: Peripheral Vascular & Aortic Diseases",
			"Module 11: Cardiac Emergencies & Critical Care Cardiology",
			"Module 12: Ethics & Clinical Integration"
		],
		faqs: [
			{
				q: "Who is eligible?",
				a: "MBBS and Above Qualification or relevant clinical experience"
			},
			{
				q: "Duration?",
				a: "52 weeks"
			},
			{
				q: "Career opportunities?",
				a: "Cardiologist positions in top hospitals, diagnostic centers, and academic institutions"
			}
		],
		meta: {
			duration: "52 week",
			lessons: "70",
			skill_level: "Fellowship",
			certificate: "yes"
		},
		trainers: [{
			name: "DMHCA Faculty",
			title: "Clinical Cardiology Specialists"
		}]
	},
	{
		slug: "fellowship-in-cardiothoracic-surgery",
		title: "Fellowship in Cardiothoracic Surgery",
		categories: ["cardiology"],
		image: "/courses/Robotic--410x290.webp",
		lessons: 18,
		weeks: 50,
		level: "expert",
		priceINR: 18e4,
		rating: 5,
		reviewCount: 1,
		program: "Fellowship",
		overview: "A Fellowship in Cardiothoracic Surgery provides advanced training in surgical procedures for the heart, lungs, and other thoracic organs. This program offers comprehensive hands-on experience in complex surgeries such as coronary artery bypass grafting, heart valve repair and replacement, and lung resections. Fellows develop expertise in both open and minimally invasive techniques, including robotic-assisted surgery. The fellowship emphasizes clinical excellence, research, and leadership skills to prepare surgeons for advanced roles in cardiothoracic surgery.",
		learn: [
			"Mastery of complex procedures such as coronary artery bypass grafting (CABG), heart valve repair and replacement, and lung resections",
			"Skills in performing and managing minimally invasive and robotic-assisted thoracic surgeries",
			"Comprehensive management of patients before, during, and after cardiothoracic surgery",
			"In-depth understanding of the anatomy and diseases affecting the heart and thoracic organs",
			"Utilization of the latest surgical technologies and techniques, including advanced imaging and robotic systems",
			"Developing expertise in making critical surgical decisions and managing complications",
			"Engaging in clinical research to contribute to advancements in cardiothoracic surgery",
			"Working closely with multidisciplinary teams for comprehensive patient care",
			"Training in ethical considerations, leadership skills, and communication strategies"
		],
		requirements: ["MBBS/MD/MS/Equivalent"],
		modules: [
			"Ischaemic Heart Disease",
			"Heart Valve Disease",
			"Aortovascular Disease",
			"Congenital Heart Disease",
			"Cardiothoracic Trauma",
			"Critical Care and Postoperative Management",
			"Cardiopulmonary Bypass, Myocardial Protection and Circulatory Support",
			"General Management of a Patient Undergoing Thoracic Surgery",
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
		faqs: [
			{
				q: "Who is eligible?",
				a: "MBBS, MD, MS, or equivalent qualifications with no previous experience required"
			},
			{
				q: "Duration?",
				a: "50 weeks"
			},
			{
				q: "Career opportunities?",
				a: "Cardiothoracic surgeon positions in leading hospitals and academic medical centers"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "18",
			skill_level: "Fellowship",
			certificate: "yes"
		},
		trainers: [{
			name: "DMHCA Faculty",
			title: "Cardiothoracic Surgery Specialists"
		}]
	},
	{
		slug: "fellowship-in-cardio-oncology",
		title: "Fellowship in Cardio-Oncology",
		categories: ["cardiology", "oncology"],
		image: "/courses/Lead-post-chandan-4-410x290.webp",
		lessons: 17,
		weeks: 50,
		level: "expert",
		priceINR: 15e4,
		rating: 5,
		reviewCount: 2,
		program: "Fellowship",
		overview: "A Fellowship in Cardio-Oncology is an advanced training program designed for physicians to specialize in the intersection of cardiology and oncology. The program focuses on the cardiovascular effects of cancer treatments, such as chemotherapy and radiation, and the management of heart conditions in cancer patients. Fellows gain expertise in diagnosing, preventing, and treating cardiovascular complications related to cancer therapies, ensuring comprehensive care for patients with both cancer and heart disease. The fellowship combines clinical practice with research opportunities to advance knowledge in this emerging field.",
		learn: [
			"How cancer treatments like chemotherapy, immunotherapy, and radiation can impact heart health",
			"Techniques for assessing cardiovascular risk in cancer patients",
			"Monitoring heart function during and after cancer therapy",
			"Mastery of diagnostic tools such as echocardiography, cardiac MRI, and biomarkers",
			"Strategies for preventing, diagnosing, and managing cardiovascular complications",
			"Working closely with oncologists and other specialists for comprehensive care",
			"Conducting and contributing to research on effects of cancer treatments on cardiovascular health",
			"Developing long-term management plans for cancer survivors at risk of late-onset cardiovascular diseases"
		],
		requirements: ["MBBS/MD/MS/Equivalent"],
		modules: [
			"Introduction to Cardiology Oncology - Pathophysiology of Cardiac Complications, Risk Factors, Cardiac Monitoring Strategies, Psychosocial Aspects",
			"Basic Principles of Cardiology in Cancer Patients",
			"Cardiotoxicity of Cancer Therapies",
			"Cardiovascular Imaging in Oncology",
			"Management of Cardiovascular Complications in Cancer Patients"
		],
		faqs: [
			{
				q: "Who is eligible?",
				a: "MBBS, MD, MS, or equivalent qualifications with no previous experience required"
			},
			{
				q: "Duration?",
				a: "50 weeks"
			},
			{
				q: "Career opportunities?",
				a: "Cardio-oncology specialist positions in cancer centers and tertiary care hospitals"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "17",
			skill_level: "Fellowship",
			certificate: "yes"
		},
		trainers: [{
			name: "DMHCA Faculty",
			title: "Cardio-Oncology Specialists"
		}]
	},
	{
		slug: "fellowship-in-clinical-cardiology-v2",
		title: "Fellowship in Clinical Cardiology",
		categories: ["cardiology"],
		image: "/courses/21003304_cardio_onc_og-410x290.webp",
		lessons: 70,
		weeks: 52,
		level: "expert",
		priceINR: 135e3,
		rating: 5,
		reviewCount: 3,
		program: "PG Diploma",
		overview: "Advanced training in diagnosing, managing, and treating cardiovascular diseases with emphasis on non-invasive and invasive cardiac procedures.",
		learn: [
			"Coronary artery disease, heart failure, and arrhythmia management",
			"Echocardiography, stress testing, and Holter monitoring",
			"Cardiac catheterization techniques",
			"Angiography and coronary interventions",
			"Patient-centered cardiovascular care",
			"Advanced diagnostic techniques",
			"Clinical decision-making in cardiology"
		],
		requirements: ["MBBS", "MD/DNB or equivalent"],
		modules: [
			"Fundamentals of Clinical Cardiology",
			"Diagnostic Techniques",
			"CAD Management",
			"Heart Failure and Arrhythmias",
			"Valvular Heart Disease",
			"Advanced Clinical Applications"
		],
		faqs: [
			{
				q: "Eligibility?",
				a: "MBBS, MD, MS, DGO, DNB holders"
			},
			{
				q: "Duration?",
				a: "12-24 months depending on program"
			},
			{
				q: "Opportunities?",
				a: "Cardiology consultant, hospital specialist, private practice"
			}
		],
		meta: {
			duration: "52 week",
			lessons: "70",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-cardiothoracic-surgery",
		title: "Fellowship in Cardiothoracic Surgery",
		categories: ["cardiology"],
		image: "/courses/Cardiac-Surgeons-410x290.webp",
		lessons: 18,
		weeks: 50,
		level: "expert",
		priceINR: 18e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized surgical training in cardiothoracic procedures, coronary bypass, valve surgery, and advanced cardiac interventions.",
		learn: [
			"Open heart surgery techniques",
			"Coronary artery bypass grafting",
			"Valve replacement procedures",
			"Cardiac transplantation",
			"Hemodynamic monitoring",
			"Post-operative management",
			"Surgical complications"
		],
		requirements: ["MS General Surgery", "3+ years surgical experience"],
		modules: [
			"Cardiac Anatomy",
			"Surgical Techniques",
			"CABG Procedures",
			"Valve Surgery",
			"Advanced Procedures",
			"Complication Management"
		],
		faqs: [
			{
				q: "Prerequisites?",
				a: "MS General Surgery with surgical experience"
			},
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Career?",
				a: "Cardiothoracic Surgeon in super-specialty hospitals"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "18",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-cardio-oncology",
		title: "Fellowship in Cardio Oncology",
		categories: ["cardiology"],
		image: "/courses/21003304_cardio_onc_og-410x290.webp",
		lessons: 17,
		weeks: 50,
		level: "expert",
		priceINR: 15e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Training in managing cardiac complications in cancer patients including cardiotoxicity and cancer therapy effects on the heart.",
		learn: [
			"Chemotherapy-induced cardiotoxicity",
			"Cancer therapy effects on cardiovascular system",
			"Risk stratification in cancer patients",
			"Preventive strategies",
			"Management of cardiac complications",
			"Multidisciplinary cancer care",
			"Follow-up protocols"
		],
		requirements: ["MD Cardiology", "Oncology background preferred"],
		modules: [
			"Introduction to Cardio-Oncology",
			"Chemotherapy Cardiotoxicity",
			"Radiation Effects",
			"Assessment & Monitoring",
			"Prevention & Treatment",
			"Advanced Management"
		],
		faqs: [
			{
				q: "Who should apply?",
				a: "Cardiologists interested in cancer-related cardiac care"
			},
			{
				q: "Duration?",
				a: "10-12 months"
			},
			{
				q: "Career?",
				a: "Cardio-oncology specialist in comprehensive cancer centers"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "17",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-abdominal-imaging",
		title: "Fellowship in Abdominal Imaging",
		categories: ["radiology"],
		image: "/courses/Fellowship-Course-in-Abdominal-Imaging-410x290.webp",
		lessons: 28,
		weeks: 25,
		level: "expert",
		priceINR: 11e4,
		rating: 5,
		reviewCount: 1,
		program: "Fellowship",
		overview: "Advanced training in imaging of abdominal organs using ultrasound, Doppler, CT, and MRI with focus on oncologic and emergency imaging.",
		learn: [
			"Abdominal ultrasound, CT, and MRI interpretation",
			"Hepatobiliary and pancreatic imaging",
			"GI tract assessment",
			"Genitourinary imaging",
			"Abdominal oncology imaging",
			"Emergency abdominal imaging",
			"Protocol optimization"
		],
		requirements: ["MD/MS/DNB Radiology", "MBBS with 6 months PCPNDT"],
		modules: [
			"Module 1: Foundations",
			"Module 2: Hepatobiliary",
			"Module 3: GI Tract",
			"Module 4: Genitourinary",
			"Module 5: Oncology",
			"Module 6: Emergency Imaging"
		],
		faqs: [
			{
				q: "Eligibility?",
				a: "Radiology PG, MBBS sonologists, experienced residents"
			},
			{
				q: "Focus?",
				a: "Multimodality imaging and diagnostic expertise"
			},
			{
				q: "Career?",
				a: "Radiologist in imaging centers and hospitals"
			}
		],
		meta: {
			duration: "25 week",
			lessons: "28",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-breast-imaging",
		title: "Fellowship in Breast Imaging",
		categories: ["radiology"],
		image: "/courses/Fellowship-Course-in-Breast-Imaging-410x290.webp",
		lessons: 23,
		weeks: 25,
		level: "expert",
		priceINR: 9e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized training in breast imaging including mammography, ultrasound, MRI, and image-guided interventions.",
		learn: [
			"Mammography techniques and interpretation",
			"Breast ultrasound expertise",
			"Breast MRI protocols",
			"BI-RADS classification",
			"Image-guided biopsies",
			"Density assessment",
			"Cancer screening"
		],
		requirements: ["MD/MS/DNB Radiology", "2+ years radiology experience"],
		modules: [
			"Mammography Basics",
			"Breast Ultrasound",
			"Breast MRI",
			"Interventional Procedures",
			"Cancer Detection",
			"Quality Assurance"
		],
		faqs: [
			{
				q: "Duration?",
				a: "6 months intensive"
			},
			{
				q: "Certification?",
				a: "Yes, DMHCA certification"
			},
			{
				q: "Career?",
				a: "Breast imaging specialist"
			}
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
		categories: ["radiology"],
		image: "/courses/Fellowship-in-Womens-Imaging-410x290.webp",
		lessons: 27,
		weeks: 50,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive imaging training for women's health including breast, gynecological, and pelvic imaging.",
		learn: [
			"Breast imaging comprehensive",
			"Gynecological ultrasound",
			"Pelvic MRI",
			"Obstetric imaging",
			"Image-guided interventions",
			"Screening protocols",
			"Clinical correlation"
		],
		requirements: ["MD/DNB Radiology", "Sonography background helpful"],
		modules: [
			"Breast Imaging",
			"Gynecological Imaging",
			"Obstetric Ultrasound",
			"Pelvic MRI",
			"Interventional Techniques",
			"Advanced Applications"
		],
		faqs: [
			{
				q: "Focus?",
				a: "Complete women's imaging specialization"
			},
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Skills gained?",
				a: "Comprehensive women's health imaging expertise"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "27",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-in-nuclear-medicine",
		title: "Certificate in Nuclear Medicine",
		categories: ["radiology"],
		image: "/courses/Nuclear-medicine-certificate-course.webp",
		lessons: 15,
		weeks: 25,
		level: "beginner",
		priceINR: 4e4,
		rating: 5,
		reviewCount: 2,
		program: "Certificate",
		overview: "Introduction to nuclear medicine imaging techniques, radiopharmaceuticals, and clinical applications.",
		learn: [
			"Nuclear medicine principles",
			"Radiopharmaceutical handling",
			"SPECT imaging",
			"PET imaging basics",
			"Clinical applications",
			"Safety protocols",
			"Report generation"
		],
		requirements: ["MBBS", "Allied health background"],
		modules: [
			"Module 1: Nuclear Medicine Basics",
			"Module 2: Radiopharmaceuticals",
			"Module 3: Imaging Techniques",
			"Module 4: Clinical Applications",
			"Module 5: Safety"
		],
		faqs: [
			{
				q: "Prerequisites?",
				a: "Basic medical knowledge"
			},
			{
				q: "Hands-on?",
				a: "Yes, practical training included"
			},
			{
				q: "Certification?",
				a: "DMHCA certified"
			}
		],
		meta: {
			duration: "25 week",
			lessons: "15",
			skill_level: "Certificate",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-cosmetology-and-aesthetic-medicine",
		title: "PG Diploma in Cosmetology and Aesthetic Medicine",
		categories: ["dermatology", "radiology"],
		image: "/courses/dermatopathology-410x290.webp",
		lessons: 46,
		weeks: 50,
		level: "intermediate",
		priceINR: 12e4,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Advanced training in cosmetic and aesthetic procedures including lasers, injectables, and minimally invasive techniques.",
		learn: [
			"Laser physics and applications",
			"Chemical peels",
			"Botox and fillers",
			"Microdermabrasion",
			"Patient assessment",
			"Complication management",
			"Business aspects"
		],
		requirements: ["MBBS", "MD Dermatology preferred"],
		modules: [
			"Aesthetic Basics",
			"Laser Procedures",
			"Injectable Techniques",
			"Skin Rejuvenation",
			"Advanced Procedures",
			"Practice Management"
		],
		faqs: [
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Hands-on training?",
				a: "Extensive practical sessions"
			},
			{
				q: "Career?",
				a: "Aesthetic physician, cosmetic dermatologist"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "46",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-infectious-diseases",
		title: "PG Diploma in Infectious Diseases",
		categories: ["medicine"],
		image: "/courses/infecTITIOUS-PGD.webp",
		lessons: 29,
		weeks: 50,
		level: "intermediate",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Comprehensive training in infectious disease diagnosis, management, and antimicrobial therapy.",
		learn: [
			"Infectious disease pathophysiology",
			"Diagnostic microbiology",
			"Antimicrobial stewardship",
			"Tropical infections",
			"HIV/AIDS management",
			"Sepsis and shock",
			"Infection control"
		],
		requirements: ["MBBS", "MD Medicine or equivalent"],
		modules: [
			"Infectious Disease Basics",
			"Bacterial Infections",
			"Viral Infections",
			"Parasitic Infections",
			"Antibiotic Stewardship",
			"Clinical Management"
		],
		faqs: [
			{
				q: "Eligibility?",
				a: "MBBS with medical background"
			},
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Career?",
				a: "Infectious disease specialist"
			}
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
		lessons: 25,
		weeks: 25,
		level: "beginner",
		priceINR: 4e4,
		rating: 5,
		reviewCount: 2,
		program: "Certificate",
		overview: "Introduction to clinical psychology, psychological assessment, and therapeutic interventions.",
		learn: [
			"Psychological assessment techniques",
			"Mental health disorders",
			"Therapeutic approaches",
			"Behavioral interventions",
			"Counseling skills",
			"Ethical practices",
			"Documentation"
		],
		requirements: ["Bachelor's degree", "Interest in psychology"],
		modules: [
			"Psychology Basics",
			"Assessment Techniques",
			"Mental Health Disorders",
			"Therapeutic Methods",
			"Counseling Skills",
			"Ethics and Practice"
		],
		faqs: [
			{
				q: "Background required?",
				a: "Basic education, psychology interest"
			},
			{
				q: "Practical training?",
				a: "Yes, included"
			},
			{
				q: "Career?",
				a: "Clinical psychology assistant, counselor"
			}
		],
		meta: {
			duration: "25 week",
			lessons: "25",
			skill_level: "Certificate",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-course-in-hiv-medicine",
		title: "Certificate Course in HIV Medicine",
		categories: ["medicine"],
		image: "/courses/Certificate-Course-in-HIV-Medicine-410x290.webp",
		lessons: 42,
		weeks: 25,
		level: "beginner",
		priceINR: 3e4,
		rating: null,
		reviewCount: 0,
		program: "Certificate",
		overview: "Comprehensive HIV/AIDS diagnosis, antiretroviral therapy, and patient management.",
		learn: [
			"HIV virology and immunology",
			"CD4 count monitoring",
			"Antiretroviral regimens",
			"Opportunistic infections",
			"Viral load assessment",
			"Patient counseling",
			"Prevention strategies"
		],
		requirements: ["MBBS", "Medical background"],
		modules: [
			"HIV Basics",
			"Diagnostic Methods",
			"ART Regimens",
			"OI Management",
			"Patient Care",
			"Prevention"
		],
		faqs: [
			{
				q: "Duration?",
				a: "6 weeks intensive"
			},
			{
				q: "Focus?",
				a: "HIV/AIDS comprehensive management"
			},
			{
				q: "Certificate?",
				a: "Yes, internationally recognized"
			}
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
		categories: ["medicine"],
		image: "/courses/Certificate-In-Tuberculosis-410x290.webp",
		lessons: 27,
		weeks: 50,
		level: "beginner",
		priceINR: 15e3,
		rating: null,
		reviewCount: 0,
		program: "Certificate",
		overview: "TB diagnosis, management, drug-resistant TB, and public health approach to tuberculosis control.",
		learn: [
			"TB pathophysiology",
			"Diagnostic techniques",
			"Anti-TB drug regimens",
			"MDR-TB management",
			"Side effects management",
			"Patient adherence",
			"Public health approach"
		],
		requirements: ["MBBS", "Healthcare professional"],
		modules: [
			"TB Basics",
			"Diagnosis",
			"Drug Therapy",
			"MDR-TB",
			"Comorbidities",
			"Public Health"
		],
		faqs: [
			{
				q: "Duration?",
				a: "12 weeks"
			},
			{
				q: "Cost?",
				a: "Very affordable"
			},
			{
				q: "Who should take?",
				a: "Doctors, healthcare workers"
			}
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
		lessons: 48,
		weeks: 50,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced training in kidney disease, dialysis management, transplantation, and renal pathology.",
		learn: [
			"Acute kidney injury",
			"Chronic kidney disease",
			"Dialysis modalities",
			"Kidney transplantation",
			"Glomerulonephritis",
			"Hypertension management",
			"Mineral bone disorders"
		],
		requirements: ["MD Medicine", "2+ years experience"],
		modules: [
			"Kidney Physiology",
			"AKI Management",
			"CKD Progression",
			"Dialysis Therapy",
			"Transplantation",
			"Glomerular Diseases"
		],
		faqs: [
			{
				q: "Career?",
				a: "Nephrologist in hospitals and dialysis centers"
			},
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Salary prospects?",
				a: "Very good in dialysis and transplant units"
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
		slug: "fellowship-in-intensive-care-medicine",
		title: "Fellowship in Intensive Care Medicine",
		categories: ["medicine"],
		image: "/courses/Fellowship-in-Intensive-Care-Medicine-410x290.webp",
		lessons: 77,
		weeks: 52,
		level: "expert",
		priceINR: 195e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive ICU management including critical care protocols, mechanical ventilation, and emergency procedures.",
		learn: [
			"Mechanical ventilation modes",
			"Hemodynamic monitoring",
			"Sepsis management",
			"ARDS protocols",
			"Airway management",
			"Organ failure",
			"Sedation strategies"
		],
		requirements: ["MD Medicine", "3+ years medical experience"],
		modules: [
			"ICU Basics",
			"Ventilation",
			"Hemodynamics",
			"Sepsis",
			"Multi-organ Failure",
			"Advanced Procedures"
		],
		faqs: [
			{
				q: "Most intensive course?",
				a: "Yes, highest level training"
			},
			{
				q: "Salary?",
				a: "Among highest in medicine"
			},
			{
				q: "Duration?",
				a: "12 months"
			}
		],
		meta: {
			duration: "52 week",
			lessons: "77",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-rheumatology",
		title: "Fellowship in Rheumatology",
		categories: ["medicine"],
		image: "/courses/assd-3-410x290.webp",
		lessons: 24,
		weeks: 50,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced training in autoimmune and rheumatic diseases including RA, SLE, and vasculitis management.",
		learn: [
			"Autoimmune pathophysiology",
			"Immunologic testing",
			"RA management",
			"SLE treatment",
			"Vasculitis",
			"Biologics therapy",
			"Joint aspirations"
		],
		requirements: ["MD Medicine", "2+ years experience"],
		modules: [
			"Autoimmunity Basics",
			"Diagnostic Testing",
			"RA Management",
			"SLE Treatment",
			"Vasculitis",
			"Biologics"
		],
		faqs: [
			{
				q: "Specialty focus?",
				a: "Rheumatic and autoimmune diseases"
			},
			{
				q: "Career?",
				a: "Rheumatologist in hospitals and private practice"
			},
			{
				q: "Duration?",
				a: "12 months"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "24",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-psychiatric-medicine",
		title: "Fellowship in Psychiatric Medicine",
		categories: ["medicine"],
		image: "/courses/Gray-Minimalist-White-Sneakers-Collection-Instagram-Post-2-410x290.webp",
		lessons: 72,
		weeks: 52,
		level: "expert",
		priceINR: 12e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced psychiatric training including psychopharmacology, psychotherapy, and mental health management.",
		learn: [
			"Depression and anxiety disorders",
			"Psychopharmacology",
			"Psychotherapy techniques",
			"Substance abuse",
			"Suicide prevention",
			"Community psychiatry",
			"Forensic psychiatry"
		],
		requirements: ["MD Psychiatry", "2+ years experience"],
		modules: [
			"Psychiatric Disorders",
			"Pharmacotherapy",
			"Psychotherapy",
			"Substance Use",
			"Community Psychiatry",
			"Advanced Topics"
		],
		faqs: [
			{
				q: "Focus?",
				a: "Comprehensive psychiatry management"
			},
			{
				q: "Career?",
				a: "Psychiatrist in hospitals and clinics"
			},
			{
				q: "Skills?",
				a: "Clinical expertise in mental health"
			}
		],
		meta: {
			duration: "52 week",
			lessons: "72",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-in-obstetrics-gynecology-nursing",
		title: "Certificate in Obstetrics & Gynecology Nursing",
		categories: ["obs-gynae"],
		image: "/courses/Obstetrics-Gynecology-Nursing.webp",
		lessons: 36,
		weeks: 25,
		level: "beginner",
		priceINR: 3e4,
		rating: null,
		reviewCount: 0,
		program: "Certificate",
		overview: `The Certification in Obstetrics and Gynecology Nursing program is designed to provide nurses with specialized knowledge and practical skills required for comprehensive maternal and reproductive healthcare. The course focuses on the care of women during pregnancy, childbirth, the postpartum period, and management of common gynecological conditions. It also emphasizes patient safety, early detection of complications, and effective support during obstetric procedures. This program prepares nurses to work efficiently in maternity wards, labor rooms, gynecology departments, and community maternal health services.`,
		learn: [
			"To provide in-depth knowledge of obstetric and gynecological nursing practices.",
			"To develop competencies in antenatal, intranatal, and postnatal care.",
			"To enhance skills in monitoring maternal and fetal health.",
			"To train nurses in assisting obstetric and gynecological procedures.",
			"To improve the ability to identify and manage obstetric emergencies.",
			"To promote women’s health, family planning, and reproductive health education."
		],
		requirements: ["Garduate: Nursing / Medical/ Healthcare/ Equivalent"],
		modules: [
			"Module 1: Fundamentals of Obstetrics and Gynecology Nursing - 3 lessons",
			"Module 2: Antenatal Care - 5 lessons",
			"Module 3: Labor and Delivery (Intranatal Care) - 5 lessons",
			"Module 4: Postnatal Care - 4 lessons",
			"Module 5: Neonatal Care - 4 lessons",
			"Module 6: Gynecological Nursing - 4 lessons",
			"Module 7: Family Planning and Reproductive Health - 3 lessons",
			"Module 8: Obstetric and Gynecological Emergencies - 4 lessons",
			"Module 9: Clinical Training / Practical Exposure - 4 lessons"
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
			{
				q: "Who is this for?",
				a: "Nurses seeking specialization in obstetrics and gynecology nursing."
			},
			{
				q: "Duration?",
				a: "25 weeks with clinical postings."
			},
			{
				q: "Practical training?",
				a: "Includes antenatal clinic, labor room and postnatal ward postings."
			}
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
		categories: ["obs-gynae"],
		image: "/courses/PG-Diploma-in-Maternal-Child-Health.webp",
		lessons: 48,
		weeks: 50,
		level: "intermediate",
		priceINR: 1e5,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Comprehensive program in maternal health, child development, and primary healthcare with public health focus.",
		learn: [
			"Maternal mortality reduction",
			"Child nutrition",
			"Immunization programs",
			"Public health strategies",
			"Community health",
			"Disease prevention",
			"Health advocacy"
		],
		requirements: ["MBBS", "Nursing background"],
		modules: [
			"Maternal Health",
			"Child Health",
			"Nutrition",
			"Public Health",
			"Community Programs",
			"Health Systems"
		],
		faqs: [
			{
				q: "Focus?",
				a: "Maternal and child health improvement"
			},
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Career?",
				a: "Public health specialist, MCH coordinator"
			}
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
		lessons: 0,
		weeks: 50,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced training in management of complicated pregnancies including preeclampsia, gestational diabetes, and intrauterine growth restriction.",
		learn: [
			"Preeclampsia management",
			"Gestational diabetes",
			"IUGR",
			"Multiple pregnancy",
			"Placental disorders",
			"Fetal monitoring",
			"Maternal complications"
		],
		requirements: ["MD/DNB OBG", "2+ years experience"],
		modules: [
			"High-risk Assessment",
			"Preeclampsia",
			"Metabolic Disorders",
			"Fetal Growth",
			"Multiple Pregnancy",
			"Perinatal Management"
		],
		faqs: [
			{
				q: "Specialization?",
				a: "Complicated pregnancy management"
			},
			{
				q: "Career?",
				a: "Maternal-fetal medicine specialist"
			},
			{
				q: "Duration?",
				a: "12 months"
			}
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
		lessons: 28,
		weeks: 50,
		level: "expert",
		priceINR: 15e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Focused training in fetal assessment, ultrasound screening, and prenatal diagnosis of fetal abnormalities.",
		learn: [
			"Fetal ultrasound",
			"Anomaly screening",
			"Doppler assessment",
			"Invasive testing",
			"Genetic screening",
			"Fetal therapy",
			"Delivery planning"
		],
		requirements: ["MD OBG", "Obstetric imaging experience"],
		modules: [
			"Fetal Assessment",
			"Ultrasound Scanning",
			"Anomaly Detection",
			"Genetic Disorders",
			"Invasive Procedures",
			"Management Planning"
		],
		faqs: [
			{
				q: "Specialization?",
				a: "Maternal-fetal medicine, ultrasound"
			},
			{
				q: "Career?",
				a: "Fetal medicine specialist"
			},
			{
				q: "Salary?",
				a: "Very good in diagnostic centers"
			}
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
		categories: ["obs-gynae"],
		image: "/courses/Fellowship-in-Obstetrics-Ultrasound-410x290.webp",
		lessons: 24,
		weeks: 25,
		level: "expert",
		priceINR: 8e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized training in obstetrical ultrasound including first, second, and third trimester scanning protocols.",
		learn: [
			"First trimester scanning",
			"Nuchal translucency",
			"Anomaly screening",
			"Biometry measurement",
			"Doppler assessment",
			"Twin pregnancy",
			"Abnormal findings"
		],
		requirements: ["MBBS", "Ultrasound experience"],
		modules: [
			"Ultrasound Basics",
			"First Trimester",
			"Anomaly Scan",
			"Growth Assessment",
			"Doppler",
			"Advanced Scanning"
		],
		faqs: [
			{
				q: "Duration?",
				a: "6 weeks intensive"
			},
			{
				q: "Hands-on?",
				a: "100% practical scanning"
			},
			{
				q: "Career?",
				a: "Obstetric ultrasound specialist"
			}
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
		lessons: 35,
		weeks: 50,
		level: "expert",
		priceINR: 19e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced minimal invasive gynecological surgery training including laparoscopy and hysteroscopy procedures.",
		learn: [
			"Laparoscopic techniques",
			"Hysteroscopic procedures",
			"Endometriosis treatment",
			"Myoma management",
			"Infertility surgery",
			"Troubleshooting complications",
			"Advanced endoscopy"
		],
		requirements: ["MD/DNB OBG", "3+ years surgical experience"],
		modules: [
			"Basic Endoscopy",
			"Laparoscopic Surgery",
			"Hysteroscopic Surgery",
			"Advanced Procedures",
			"Complication Management",
			"Case Studies"
		],
		faqs: [
			{
				q: "Skill level?",
				a: "Advanced surgical training"
			},
			{
				q: "Hands-on?",
				a: "Extensive surgical experience"
			},
			{
				q: "Career?",
				a: "Gynecological surgeon in hospitals"
			}
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
		lessons: 23,
		weeks: 50,
		level: "expert",
		priceINR: 14e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Training in cosmetic gynecological procedures including labiaplasty, vaginoplasty, and other aesthetic gynecology.",
		learn: [
			"Cosmetic gynecology anatomy",
			"Surgical procedures",
			"Non-surgical treatments",
			"Patient counseling",
			"Complication prevention",
			"Aesthetic outcomes",
			"Ethics in cosmetic surgery"
		],
		requirements: ["MD/DNB OBG", "2+ years experience"],
		modules: [
			"Cosmetic Anatomy",
			"Surgical Techniques",
			"Non-surgical Options",
			"Patient Selection",
			"Outcomes",
			"Business Aspects"
		],
		faqs: [
			{
				q: "Niche specialization?",
				a: "Yes, cosmetic gynecology"
			},
			{
				q: "Career?",
				a: "Cosmetic gynecologist"
			},
			{
				q: "Salary?",
				a: "High earnings potential"
			}
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
		lessons: 68,
		weeks: 50,
		level: "expert",
		priceINR: 135e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive OBG training covering normal and high-risk obstetrics, gynecological diseases, and surgical skills.",
		learn: [
			"Normal pregnancy management",
			"Complicated deliveries",
			"Gynecological diseases",
			"Surgical procedures",
			"Patient management",
			"Emergency obstetrics",
			"Clinical decision-making"
		],
		requirements: ["MBBS", "MD/DNB OBG"],
		modules: [
			"Obstetrics Basics",
			"High-risk OB",
			"Gynecology",
			"Surgical Skills",
			"Emergency Management",
			"Advanced Topics"
		],
		faqs: [
			{
				q: "Comprehensive training?",
				a: "Yes, complete OBG specialization"
			},
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Career?",
				a: "OBG specialist in hospitals"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "68",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-neurology",
		title: "Fellowship in Neurology",
		categories: ["neurology"],
		image: "/courses/FELLOWSHIP-IN-NEUROLOGY-410x290.webp",
		lessons: 0,
		weeks: 50,
		level: "expert",
		priceINR: 19e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced neurology training covering neurological disorders, diagnostics, and therapeutic management.",
		learn: [
			"Neurological disorders",
			"EEG interpretation",
			"Imaging analysis",
			"Stroke management",
			"Movement disorders",
			"Seizure management"
		],
		requirements: ["MD Neurology", "2+ years experience"],
		modules: [
			"Neurology Basics",
			"Stroke",
			"Epilepsy",
			"Movement Disorders",
			"Dementia",
			"Advanced Neurology"
		],
		faqs: [
			{
				q: "Specialization?",
				a: "Neurology comprehensive"
			},
			{
				q: "Career?",
				a: "Neurologist in hospitals"
			},
			{
				q: "Salary?",
				a: "Very competitive"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "0",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-pediatric-rheumatology",
		title: "Fellowship in Pediatric Rheumatology",
		categories: ["pediatrics"],
		image: "/courses/fellowship-in-pediatric-rheumatology.webp",
		lessons: 42,
		weeks: 50,
		level: "expert",
		priceINR: 145e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized training in pediatric autoimmune and rheumatic diseases.",
		learn: [
			"JIA",
			"SLE in children",
			"Vasculitis",
			"Biologics",
			"Immunosuppression",
			"Long-term management"
		],
		requirements: ["MD Pediatrics", "1+ years experience"],
		modules: [
			"Pediatric Autoimmunity",
			"JIA",
			"SLE",
			"Vasculitis",
			"Biologics",
			"Clinical Management"
		],
		faqs: [{
			q: "Target group?",
			a: "Pediatricians interested in rheumatology"
		}, {
			q: "Career?",
			a: "Pediatric rheumatology specialist"
		}],
		meta: {
			duration: "50 week",
			lessons: "42",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-nutrition-and-dietetics",
		title: "PG Diploma in Nutrition and Dietetics",
		categories: ["nutrition"],
		image: "/courses/PG-Diploma-in-Nutrition-and-Dietetics-410x290.webp",
		lessons: 32,
		weeks: 50,
		level: "intermediate",
		priceINR: 1e5,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Comprehensive nutrition and dietetics training for clinical and public health applications.",
		learn: [
			"Nutritional assessment",
			"Diet planning",
			"Disease nutrition",
			"Sports nutrition",
			"Public health nutrition",
			"Food safety"
		],
		requirements: ["Bachelors in Nutrition/Home Science", "Interest in dietetics"],
		modules: [
			"Nutrition Basics",
			"Clinical Nutrition",
			"Diet Planning",
			"Public Health Nutrition",
			"Advanced Nutrition",
			"Practice"
		],
		faqs: [
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Career?",
				a: "Nutritionist, dietitian"
			},
			{
				q: "Salary?",
				a: "Growing field with good opportunities"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "32",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-in-clinical-embryology",
		title: "Certificate in Clinical Embryology",
		categories: ["reproductive"],
		image: "/courses/clinical-embryology-certificate.webp",
		lessons: 26,
		weeks: 25,
		level: "beginner",
		priceINR: 35e3,
		rating: 5,
		reviewCount: 1,
		program: "Certificate",
		overview: "Introduction to embryo culture, selection, and laboratory management for ART programs.",
		learn: [
			"Embryo biology",
			"Culture techniques",
			"Embryo selection",
			"Quality control",
			"ICSI",
			"Embryo transfer"
		],
		requirements: ["BSc Life Sciences", "Lab experience preferred"],
		modules: [
			"Embryology Basics",
			"Culture Techniques",
			"ART Lab",
			"Embryo Assessment",
			"Quality",
			"Ethics"
		],
		faqs: [{
			q: "For lab technicians?",
			a: "Yes, specialized training"
		}, {
			q: "Career?",
			a: "Embryologist in ART centers"
		}],
		meta: {
			duration: "25 week",
			lessons: "26",
			skill_level: "Certificate",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-clinical-embryology",
		title: "PG Diploma in Clinical Embryology",
		categories: ["reproductive"],
		image: "/courses/Post-Graduate-Diploma-in-Clinical-Embryology-410x290.webp",
		lessons: 73,
		weeks: 50,
		level: "intermediate",
		priceINR: 115e3,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Advanced embryology including advanced ART techniques, genetic screening, and laboratory management.",
		learn: [
			"Advanced embryo culture",
			"Genetic screening",
			"Preimplantation testing",
			"Lab management",
			"Quality assurance",
			"IVF protocols"
		],
		requirements: ["BSc/MSc", "Lab embryology experience"],
		modules: [
			"Advanced Embryology",
			"ART Techniques",
			"Genetic Screening",
			"Lab Management",
			"Troubleshooting",
			"Advanced Cases"
		],
		faqs: [{
			q: "Advanced training?",
			a: "Yes, comprehensive embryology"
		}, {
			q: "Career?",
			a: "Senior embryologist"
		}],
		meta: {
			duration: "50 week",
			lessons: "73",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-reproductive-medicine",
		title: "Fellowship in Reproductive Medicine",
		categories: ["reproductive"],
		image: "/courses/mn-IVF-410x290.webp",
		lessons: 77,
		weeks: 50,
		level: "expert",
		priceINR: 135e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Complete reproductive medicine training including IVF, embryo transfer, and infertility management.",
		learn: [
			"Infertility evaluation",
			"Ovarian stimulation",
			"Oocyte retrieval",
			"Embryo transfer",
			"ICSI",
			"Freezing techniques"
		],
		requirements: ["MD OBG", "2+ years experience"],
		modules: [
			"Infertility Basics",
			"Ovulation Induction",
			"IVF Cycle",
			"Embryo Transfer",
			"Cryopreservation",
			"Advanced Cases"
		],
		faqs: [
			{
				q: "Highest level?",
				a: "Yes, fellowship training"
			},
			{
				q: "Career?",
				a: "Reproductive endocrinologist"
			},
			{
				q: "Salary?",
				a: "Excellent earnings potential"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "77",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-reproductive-endocrinology",
		title: "Fellowship in Reproductive Endocrinology",
		categories: ["reproductive"],
		image: "/courses/Fellowship-in-Reproductive-Endocrinology-410x290.webp",
		lessons: 27,
		weeks: 50,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced training in hormonal aspects of reproduction including infertility and ART.",
		learn: [
			"Reproductive physiology",
			"Hormone assessment",
			"Stimulation protocols",
			"Embryo transfer",
			"Pregnancy support",
			"PCOS management"
		],
		requirements: ["MD OBG", "Endocrinology background helpful"],
		modules: [
			"Reproductive Endocrinology",
			"Hormone Testing",
			"Stimulation",
			"IVF",
			"PCOS",
			"Ovarian Reserve"
		],
		faqs: [{
			q: "Focus?",
			a: "Hormonal aspects of reproduction"
		}, {
			q: "Career?",
			a: "Reproductive endocrinologist"
		}],
		meta: {
			duration: "50 week",
			lessons: "27",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-in-infertility",
		title: "Certificate in Infertility Management",
		categories: ["reproductive"],
		image: "/courses/Certificate-Infertility-410x290.webp",
		lessons: 28,
		weeks: 25,
		level: "beginner",
		priceINR: 26e3,
		rating: null,
		reviewCount: 0,
		program: "Certificate",
		overview: "Introduction to infertility evaluation, basic ART procedures, and patient counseling.",
		learn: [
			"Infertility evaluation",
			"Semen analysis",
			"Ovulation tracking",
			"IUI basics",
			"ART overview",
			"Counseling"
		],
		requirements: ["MBBS", "Basic medical knowledge"],
		modules: [
			"Infertility Basics",
			"Diagnosis",
			"Treatment Options",
			"IUI",
			"ART Introduction",
			"Patient Care"
		],
		faqs: [{
			q: "Beginner course?",
			a: "Yes, introductory level"
		}, {
			q: "Career?",
			a: "Infertility specialist assistant"
		}],
		meta: {
			duration: "25 week",
			lessons: "28",
			skill_level: "PG Diploma",
			certificate: "yes"
		},
		trainers: [{
			name: "Dr. Prabhdeep Kaur",
			title: "Obs & Gynea Specialist",
			bio: "Specialist in reproductive health and infertility management.",
			image: "/Faculty_images/dr-prabhdeep-kaur.jpg"
		}]
	},
	{
		slug: "fellowship-in-clinical-embryology",
		title: "Fellowship in Clinical Embryology",
		categories: ["reproductive"],
		image: "/courses/aceorg_home_banner-410x290.webp",
		lessons: 55,
		weeks: 50,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Expert training in embryology, embryo selection, and laboratory management for ART programs.",
		learn: [
			"Embryo development",
			"Selection criteria",
			"Vitrification",
			"Thawing protocols",
			"Blastocyst culture",
			"Lab QC"
		],
		requirements: ["Masters Embryology", "Lab experience"],
		modules: [
			"Advanced Embryology",
			"Culture Systems",
			"Embryo Assessment",
			"Cryopreservation",
			"Lab Management",
			"Research"
		],
		faqs: [{
			q: "Highest embryology training?",
			a: "Yes, fellowship level"
		}, {
			q: "Career?",
			a: "Senior embryologist, lab director"
		}],
		meta: {
			duration: "50 week",
			lessons: "55",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-endocrinology",
		title: "Fellowship in Endocrinology",
		categories: ["endocrinology"],
		image: "/courses/Endocrinology-Fellowship-410x290.webp",
		lessons: 16,
		weeks: 52,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive endocrinology training covering diabetes, thyroid, and hormonal disorders.",
		learn: [
			"Diabetes management",
			"Thyroid disorders",
			"Adrenal disease",
			"Pituitary disorders",
			"Hormone testing",
			"Hormone replacement"
		],
		requirements: ["MD Medicine", "2+ years experience"],
		modules: [
			"Endocrinology Basics",
			"Diabetes",
			"Thyroid",
			"Adrenal",
			"Pituitary",
			"Advanced Cases"
		],
		faqs: [{
			q: "Specialization?",
			a: "Comprehensive endocrinology"
		}, {
			q: "Career?",
			a: "Endocrinologist"
		}],
		meta: {
			duration: "52 week",
			lessons: "16",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-diabetology",
		title: "Fellowship in Diabetology",
		categories: ["endocrinology"],
		image: "/courses/Gray-Minimalist-White-Sneakers-Collection-Instagram-Post-1-410x290.webp",
		lessons: 36,
		weeks: 52,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized diabetes management training including Type 1 and Type 2 diabetes, complications, and newer therapies.",
		learn: [
			"Diabetes pathophysiology",
			"Blood glucose monitoring",
			"Insulin therapy",
			"GLP-1 agonists",
			"Complications",
			"Patient education"
		],
		requirements: ["MD Medicine", "Endocrinology interest"],
		modules: [
			"Diabetes Basics",
			"Type 1",
			"Type 2",
			"Insulin Therapy",
			"GLP-1 Agents",
			"Complications"
		],
		faqs: [{
			q: "Specialization?",
			a: "Diabetes focused"
		}, {
			q: "Career?",
			a: "Diabetologist"
		}],
		meta: {
			duration: "52 week",
			lessons: "36",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-course-in-diabetic-foot-care",
		title: "Certificate Course in Diabetic Foot Care",
		categories: ["endocrinology"],
		image: "/courses/Certificate-In-Diabetic-Foot-Care-410x290.webp",
		lessons: 21,
		weeks: 12,
		level: "beginner",
		priceINR: 21e3,
		rating: null,
		reviewCount: 0,
		program: "Certificate",
		overview: "Training in diabetic foot care, ulcer prevention, and treatment strategies.",
		learn: [
			"Foot anatomy",
			"Neuropathy assessment",
			"Vascular assessment",
			"Ulcer care",
			"Infection management",
			"Prevention"
		],
		requirements: ["Medical/paramedical background"],
		modules: [
			"Diabetes & Foot",
			"Assessment",
			"Ulcer Management",
			"Infection Control",
			"Prevention",
			"Patient Education"
		],
		faqs: [{
			q: "Short duration?",
			a: "Yes, only 12 weeks"
		}, {
			q: "Career?",
			a: "Diabetes foot care specialist"
		}],
		meta: {
			duration: "12 week",
			lessons: "21",
			skill_level: "Certificate",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-orthopedics",
		title: "Fellowship in Orthopedics",
		categories: ["orthopedics"],
		image: "/courses/knee-pain-410x290.webp",
		lessons: 31,
		weeks: 50,
		level: "expert",
		priceINR: 155e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive orthopedic surgery training including trauma, arthroscopy, and joint replacement.",
		learn: [
			"Fracture management",
			"Arthroscopy",
			"Joint replacement",
			"Sports medicine",
			"Trauma protocols",
			"Advanced techniques"
		],
		requirements: ["MS Orthopedics", "3+ years experience"],
		modules: [
			"Orthopedics Basics",
			"Fractures",
			"Arthroscopy",
			"Joint Replacement",
			"Sports Medicine",
			"Advanced Surgery"
		],
		faqs: [{
			q: "Career?",
			a: "Orthopedic surgeon"
		}, {
			q: "Salary?",
			a: "Very competitive"
		}],
		meta: {
			duration: "50 week",
			lessons: "31",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-spine-surgery",
		title: "Fellowship in Spine Surgery",
		categories: ["orthopedics"],
		image: "/courses/Spine-Surgery-410x290.webp",
		lessons: 66,
		weeks: 50,
		level: "expert",
		priceINR: 19e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced spine surgery training including minimal invasive and complex spinal procedures.",
		learn: [
			"Spinal anatomy",
			"Discectomy",
			"Fusion surgery",
			"MIS techniques",
			"Tumor surgery",
			"Trauma"
		],
		requirements: ["MS Orthopedics", "3+ years experience"],
		modules: [
			"Spine Anatomy",
			"Discectomy",
			"Fusion",
			"MIS",
			"Tumors",
			"Trauma"
		],
		faqs: [
			{
				q: "Advanced specialty?",
				a: "Yes, highly specialized"
			},
			{
				q: "Career?",
				a: "Spine surgeon"
			},
			{
				q: "Salary?",
				a: "Highest in orthopedics"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "66",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-dermatology",
		title: "Fellowship in Dermatology",
		categories: ["dermatology"],
		image: "/courses/dermatopathology-410x290.webp",
		lessons: 78,
		weeks: 52,
		level: "expert",
		priceINR: 135e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive dermatology training including clinical, cosmetic, and surgical dermatology.",
		learn: [
			"Skin diseases",
			"Laser therapy",
			"Surgical techniques",
			"Cosmetic procedures",
			"Pathology",
			"Advanced treatments"
		],
		requirements: ["MD Dermatology", "2+ years experience"],
		modules: [
			"Dermatology Basics",
			"Clinical",
			"Surgical",
			"Cosmetic",
			"Laser",
			"Advanced Topics"
		],
		faqs: [{
			q: "Comprehensive?",
			a: "Yes, all areas of dermatology"
		}, {
			q: "Career?",
			a: "Dermatologist"
		}],
		meta: {
			duration: "52 week",
			lessons: "78",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-trichology",
		title: "Fellowship in Trichology",
		categories: ["dermatology"],
		image: "/courses/Trichology-410x290.webp",
		lessons: 47,
		weeks: 52,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized training in hair and scalp disorders including medical and surgical treatments.",
		learn: [
			"Hair physiology",
			"Alopecia types",
			"Scalp diseases",
			"Hair transplantation",
			"Medications",
			"Procedures"
		],
		requirements: ["MD Dermatology", "1+ years experience"],
		modules: [
			"Hair Biology",
			"Alopecia",
			"Scalp Diseases",
			"Transplantation",
			"Medical Therapy",
			"Advanced Cases"
		],
		faqs: [{
			q: "Niche specialization?",
			a: "Yes, hair and scalp focused"
		}, {
			q: "Career?",
			a: "Trichologist"
		}],
		meta: {
			duration: "52 week",
			lessons: "47",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-cosmetology-and-aesthetic-medicine",
		title: "Fellowship in Cosmetology and Aesthetic Medicine",
		categories: ["dermatology"],
		image: "/courses/Fellowship-in-Cosmetology--410x290.webp",
		lessons: 75,
		weeks: 52,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced cosmetic and aesthetic medicine including lasers, injectables, and advanced procedures.",
		learn: [
			"Cosmetic assessment",
			"Laser procedures",
			"Botox/fillers",
			"Chemical peels",
			"Radiofrequency",
			"Business"
		],
		requirements: ["MBBS", "MD Dermatology preferred"],
		modules: [
			"Cosmetic Basics",
			"Lasers",
			"Injectables",
			"Peels",
			"RF Therapy",
			"Business Management"
		],
		faqs: [{
			q: "Career earnings?",
			a: "Very high in cosmetic practice"
		}, {
			q: "Business aspect?",
			a: "Yes, practice management included"
		}],
		meta: {
			duration: "52 week",
			lessons: "75",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-course-in-cosmetology",
		title: "Certificate Course in Cosmetology",
		categories: ["dermatology"],
		image: "/courses/cosmetologist-applies-white-mask-on-woman-s-face_8353-5674-410x290.webp",
		lessons: 15,
		weeks: 25,
		level: "beginner",
		priceINR: 5e4,
		rating: null,
		reviewCount: 0,
		program: "Certificate",
		overview: "Introduction to cosmetic procedures and aesthetic treatments for beauty professionals.",
		learn: [
			"Facial anatomy",
			"Facials",
			"Chemical peels",
			"Microdermabrasion",
			"Laser basics",
			"Patient care"
		],
		requirements: ["Interest in beauty and aesthetics"],
		modules: [
			"Beauty Basics",
			"Facials",
			"Peels",
			"Microdermabrasion",
			"Laser Safety",
			"Business"
		],
		faqs: [{
			q: "For beauty professionals?",
			a: "Yes, specialized aesthetic training"
		}, {
			q: "Career?",
			a: "Aesthetic technician"
		}],
		meta: {
			duration: "25 week",
			lessons: "15",
			skill_level: "Certificate",
			certificate: "yes"
		},
		trainers: [{
			name: "Dr Bhuvaneshwari",
			title: "Cosmetologist/Dermatologist",
			bio: "Expert in cosmetic dermatology and aesthetic procedures.",
			image: "/Faculty_images/dr-bhuvaneshwari.jpg"
		}]
	},
	{
		slug: "fellowship-in-general-surgery",
		title: "Fellowship in Minimal Access Surgery",
		categories: ["general-surgery"],
		image: "/courses/srr-410x290.webp",
		lessons: 47,
		weeks: 50,
		level: "expert",
		priceINR: 17e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced laparoscopic and endoscopic surgery training including complex minimally invasive procedures.",
		learn: [
			"Laparoscopic surgery",
			"Endoscopy",
			"Advanced techniques",
			"Complication management",
			"Equipment",
			"Ergonomics"
		],
		requirements: ["MS Surgery", "3+ years experience"],
		modules: [
			"MAS Basics",
			"Laparoscopy",
			"Endoscopy",
			"Advanced Cases",
			"Troubleshooting",
			"Equipment"
		],
		faqs: [
			{
				q: "Specialization?",
				a: "Minimal access surgery"
			},
			{
				q: "Career?",
				a: "MAS surgeon"
			},
			{
				q: "Salary?",
				a: "Very competitive"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "47",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-robotic-surgery",
		title: "Fellowship in Robotic Surgery",
		categories: ["general-surgery"],
		image: "/courses/Robotic--410x290.webp",
		lessons: 29,
		weeks: 50,
		level: "expert",
		priceINR: 19e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Training in robotic-assisted surgical procedures for general and specialized surgery.",
		learn: [
			"Robotic system",
			"Console operation",
			"Robotic procedures",
			"Advanced techniques",
			"Troubleshooting",
			"Clinical outcomes"
		],
		requirements: ["MS Surgery", "3+ years experience"],
		modules: [
			"Robotic Basics",
			"Console Training",
			"Procedures",
			"Advanced Cases",
			"Maintenance",
			"Research"
		],
		faqs: [
			{
				q: "Most advanced?",
				a: "Yes, robotic surgery"
			},
			{
				q: "Career?",
				a: "Robotic surgeon"
			},
			{
				q: "Salary?",
				a: "Highest in surgery"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "29",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-pediatric-surgery",
		title: "Fellowship in Pediatric Surgery",
		categories: ["general-surgery"],
		image: "/courses/Lead-post-chandan-4-410x290.webp",
		lessons: 36,
		weeks: 52,
		level: "expert",
		priceINR: 18e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized pediatric surgical training including neonatal and congenital surgery.",
		learn: [
			"Congenital anomalies",
			"Neonatal surgery",
			"Pediatric trauma",
			"Minimally invasive",
			"Pediatric anesthesia",
			"Long-term outcomes"
		],
		requirements: ["MS Surgery", "3+ years experience"],
		modules: [
			"Pediatric Surgery Basics",
			"Congenital",
			"Neonatal",
			"Trauma",
			"MAS",
			"Advanced Cases"
		],
		faqs: [{
			q: "Specialization?",
			a: "Pediatric surgery"
		}, {
			q: "Career?",
			a: "Pediatric surgeon"
		}],
		meta: {
			duration: "52 week",
			lessons: "36",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-pediatric-rheumatology",
		title: "Fellowship in Pediatrics Neurology",
		categories: ["pediatrics"],
		image: "/courses/Fellowship-in-Pediatrics-Neurology-410x290.webp",
		lessons: 44,
		weeks: 50,
		level: "expert",
		priceINR: 14e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized training in pediatric neurology including seizures, developmental delays, and neurological disorders.",
		learn: [
			"Seizure management",
			"Developmental assessment",
			"Neuroimaging",
			"EEG interpretation",
			"Medications",
			"Long-term care"
		],
		requirements: ["MD Pediatrics", "1+ years experience"],
		modules: [
			"Pediatric Neurology",
			"Seizures",
			"Development",
			"Imaging",
			"Medications",
			"Advanced Cases"
		],
		faqs: [{
			q: "Focus?",
			a: "Child neurology"
		}, {
			q: "Career?",
			a: "Pediatric neurologist"
		}],
		meta: {
			duration: "50 week",
			lessons: "44",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-neonatology",
		title: "Fellowship in Neonatology",
		categories: ["pediatrics"],
		image: "/courses/Neonatology-410x290.webp",
		lessons: 55,
		weeks: 50,
		level: "expert",
		priceINR: 12e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced neonatal care training including preterm management, resuscitation, and intensive care.",
		learn: [
			"Preterm care",
			"Resuscitation",
			"Ventilation",
			"Sepsis management",
			"Nutrition",
			"Complications"
		],
		requirements: ["MD Pediatrics", "1+ years experience"],
		modules: [
			"Neonatal Basics",
			"Preterm",
			"Resuscitation",
			"ICU",
			"Nutrition",
			"Chronic Complications"
		],
		faqs: [{
			q: "Career?",
			a: "Neonatologist in NICU"
		}, {
			q: "Salary?",
			a: "Good earning potential"
		}],
		meta: {
			duration: "50 week",
			lessons: "55",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-pediatric-echocardiography",
		title: "Fellowship in Pediatric Echocardiography",
		categories: ["pediatrics"],
		image: "/courses/Sonographer_doing_pediatric_echocardiography-410x290.webp",
		lessons: 30,
		weeks: 52,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized pediatric cardiac imaging training including congenital heart disease evaluation.",
		learn: [
			"Pediatric echo",
			"Congenital heart disease",
			"Normal variants",
			"Doppler assessment",
			"Fetal echo",
			"Advanced imaging"
		],
		requirements: ["MD Pediatrics", "Cardiology background"],
		modules: [
			"Pediatric Echo Basics",
			"Congenital",
			"Doppler",
			"Fetal Echo",
			"Advanced Cases",
			"Research"
		],
		faqs: [{
			q: "Specialization?",
			a: "Pediatric cardiac imaging"
		}, {
			q: "Career?",
			a: "Pediatric echocardiographer"
		}],
		meta: {
			duration: "52 week",
			lessons: "30",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-emergency-medicine",
		title: "Fellowship in Emergency Medicine",
		categories: ["emergency"],
		image: "/courses/Emergency-410x290.webp",
		lessons: 79,
		weeks: 52,
		level: "expert",
		priceINR: 99e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive emergency medicine training covering trauma, resuscitation, and acute management.",
		learn: [
			"Trauma management",
			"ACLS",
			"Resuscitation",
			"Acute syndromes",
			"Toxicology",
			"Critical procedures"
		],
		requirements: ["MBBS", "MD Medicine preferred"],
		modules: [
			"EM Basics",
			"Trauma",
			"ACLS",
			"Acute Syndromes",
			"Procedures",
			"Toxicology"
		],
		faqs: [{
			q: "Career?",
			a: "Emergency physician"
		}, {
			q: "Shifts?",
			a: "Variable shift work"
		}],
		meta: {
			duration: "52 week",
			lessons: "79",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-emergency-medicine",
		title: "PG Diploma in Emergency Medicine",
		categories: ["emergency"],
		image: "/courses/PG-Diploma-Emergancy-Medicine-410x290.webp",
		lessons: 29,
		weeks: 52,
		level: "intermediate",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Intermediate emergency medicine training for emergency department management.",
		learn: [
			"Emergency assessment",
			"Resuscitation",
			"Common emergencies",
			"Toxicology",
			"Procedures",
			"Documentation"
		],
		requirements: ["MBBS", "1+ years experience"],
		modules: [
			"EM Basics",
			"Assessment",
			"Resuscitation",
			"Common EM",
			"Procedures",
			"Documentation"
		],
		faqs: [{
			q: "Duration?",
			a: "12 months"
		}, {
			q: "Career?",
			a: "Emergency medicine specialist"
		}],
		meta: {
			duration: "52 week",
			lessons: "29",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-critical-care",
		title: "Fellowship in Critical Care",
		categories: ["medicine"],
		image: "/courses/Critical-Care-410x290.webp",
		lessons: 74,
		weeks: 52,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced critical care training for intensive care unit management.",
		learn: [
			"Mechanical ventilation",
			"Hemodynamics",
			"Sepsis",
			"ARDS",
			"Multi-organ failure",
			"Procedures"
		],
		requirements: ["MD Medicine", "2+ years experience"],
		modules: [
			"ICU Basics",
			"Ventilation",
			"Hemodynamics",
			"Sepsis",
			"Organ Failure",
			"Advanced Procedures"
		],
		faqs: [{
			q: "Career?",
			a: "Critical care specialist"
		}, {
			q: "Salary?",
			a: "Excellent prospects"
		}],
		meta: {
			duration: "52 week",
			lessons: "74",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-critical-care",
		title: "PG Diploma in Critical Care",
		categories: ["medicine"],
		image: "/courses/Post-Graduate-Diploma-in-Critical-Care-410x290.webp",
		lessons: 48,
		weeks: 52,
		level: "intermediate",
		priceINR: 12e4,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Intermediate critical care training for ICU management.",
		learn: [
			"ICU basics",
			"Ventilation",
			"Hemodynamics",
			"Common ICU scenarios",
			"Procedures",
			"Communication"
		],
		requirements: ["MBBS", "1+ years experience"],
		modules: [
			"ICU Basics",
			"Ventilation",
			"Hemodynamics",
			"Common Cases",
			"Procedures",
			"Management"
		],
		faqs: [{
			q: "Duration?",
			a: "12 months"
		}, {
			q: "Career?",
			a: "ICU physician"
		}],
		meta: {
			duration: "52 week",
			lessons: "48",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-hiv-medicine",
		title: "PG Diploma in HIV Medicine",
		categories: ["medicine"],
		image: "/courses/PG-Diploma-In-HIV-Medicine-410x290.webp",
		lessons: 18,
		weeks: 52,
		level: "intermediate",
		priceINR: 12e4,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "HIV/AIDS management at intermediate level including ART and complications.",
		learn: [
			"HIV epidemiology",
			"CD4 assessment",
			"ART regimens",
			"OI management",
			"Adherence",
			"Prevention"
		],
		requirements: ["MBBS", "MD Medicine"],
		modules: [
			"HIV Basics",
			"Assessment",
			"ART",
			"OI",
			"Complications",
			"Prevention"
		],
		faqs: [{
			q: "Career?",
			a: "HIV medicine specialist"
		}, {
			q: "Duration?",
			a: "12 months"
		}],
		meta: {
			duration: "52 week",
			lessons: "18",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-hospital-administration",
		title: "PG Diploma in Hospital Administration",
		categories: ["management"],
		image: "/courses/PG-Diploma-in-Hospital-Administration-410x290.webp",
		lessons: 48,
		weeks: 50,
		level: "intermediate",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Hospital and healthcare management training including administration, finance, and quality.",
		learn: [
			"Hospital operations",
			"Finance management",
			"Quality assurance",
			"HR management",
			"Compliance",
			"Leadership"
		],
		requirements: ["Bachelor's degree", "Healthcare interest"],
		modules: [
			"Hospital Basics",
			"Management",
			"Finance",
			"Quality",
			"HR",
			"Compliance"
		],
		faqs: [{
			q: "Career?",
			a: "Hospital administrator"
		}, {
			q: "Duration?",
			a: "12 months"
		}],
		meta: {
			duration: "50 week",
			lessons: "48",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-hospital-management",
		title: "PG Diploma in Hospital Management",
		categories: ["management"],
		image: "/courses/1729490404phpciSl11-410x290.webp",
		lessons: 126,
		weeks: 50,
		level: "intermediate",
		priceINR: 12e4,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Comprehensive healthcare management including strategy, operations, and innovation.",
		learn: [
			"Strategic management",
			"Operations",
			"Healthcare IT",
			"Finance",
			"Quality",
			"Innovation",
			"Leadership"
		],
		requirements: ["Bachelor's degree", "Business/healthcare interest"],
		modules: [
			"Management Basics",
			"Strategy",
			"Operations",
			"IT",
			"Finance",
			"Quality",
			"Leadership"
		],
		faqs: [
			{
				q: "Comprehensive?",
				a: "Yes, 126 lessons"
			},
			{
				q: "Duration?",
				a: "12 months"
			},
			{
				q: "Career?",
				a: "Hospital CEO, healthcare manager"
			}
		],
		meta: {
			duration: "50 week",
			lessons: "126",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-family-medicine",
		title: "Fellowship in Family Medicine",
		categories: ["medicine"],
		image: "/courses/Gray-Minimalist-White-Sneakers-Collection-Instagram-Post-410x290.webp",
		lessons: 73,
		weeks: 52,
		level: "expert",
		priceINR: 1e5,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced family medicine training including comprehensive family-centered care.",
		learn: [
			"Family assessment",
			"Chronic disease management",
			"Preventive care",
			"Mental health",
			"Geriatric care",
			"Community medicine"
		],
		requirements: ["MD Medicine", "1+ years family medicine"],
		modules: [
			"Family Medicine Basics",
			"Chronic Diseases",
			"Prevention",
			"Mental Health",
			"Geriatrics",
			"Community Health"
		],
		faqs: [{
			q: "Career?",
			a: "Family medicine specialist"
		}, {
			q: "Work type?",
			a: "Usually in clinics and community health"
		}],
		meta: {
			duration: "52 week",
			lessons: "73",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-pain-management",
		title: "Fellowship in Pain Management",
		categories: ["medicine"],
		image: "/courses/pain-management-fellowship-410x290.webp",
		lessons: 33,
		weeks: 50,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized training in acute and chronic pain management including procedures and pharmacotherapy.",
		learn: [
			"Pain physiology",
			"Assessment techniques",
			"Medications",
			"Interventional procedures",
			"Counseling",
			"Multidisciplinary approach"
		],
		requirements: ["MD Anesthesiology", "2+ years experience"],
		modules: [
			"Pain Basics",
			"Assessment",
			"Pharmacotherapy",
			"Interventional",
			"Multidisciplinary",
			"Advanced Cases"
		],
		faqs: [{
			q: "Specialization?",
			a: "Pain medicine"
		}, {
			q: "Career?",
			a: "Pain management specialist"
		}],
		meta: {
			duration: "50 week",
			lessons: "33",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-medical-oncology",
		title: "Fellowship in Medical Oncology",
		categories: ["oncology"],
		image: "/courses/Medical-Oncology-410x290.webp",
		lessons: 72,
		weeks: 50,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced cancer management training including chemotherapy, targeted therapy, and immunotherapy.",
		learn: [
			"Cancer biology",
			"Chemotherapy",
			"Targeted therapy",
			"Immunotherapy",
			"Supportive care",
			"Clinical trials"
		],
		requirements: ["MD Medicine", "2+ years experience"],
		modules: [
			"Oncology Basics",
			"Chemotherapy",
			"Targeted Therapy",
			"Immunotherapy",
			"Supportive Care",
			"Advanced Cases"
		],
		faqs: [{
			q: "Career?",
			a: "Medical oncologist"
		}, {
			q: "Salary?",
			a: "Very competitive"
		}],
		meta: {
			duration: "50 week",
			lessons: "72",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-head-and-neck-oncology",
		title: "Fellowship in Head and Neck Oncology",
		categories: ["oncology"],
		image: "/courses/assd-2-410x290.webp",
		lessons: 24,
		weeks: 50,
		level: "expert",
		priceINR: 12e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized training in head and neck cancer management including surgery, radiation, and chemotherapy.",
		learn: [
			"HNC anatomy",
			"Surgery techniques",
			"Radiation",
			"Chemotherapy",
			"Multidisciplinary approach",
			"Reconstruction"
		],
		requirements: ["MD Oncology/Surgery", "2+ years experience"],
		modules: [
			"HNC Basics",
			"Surgery",
			"Radiation",
			"Chemotherapy",
			"Multidisciplinary",
			"Advanced Cases"
		],
		faqs: [{
			q: "Specialization?",
			a: "Head and neck cancers"
		}, {
			q: "Career?",
			a: "Head and neck oncologist"
		}],
		meta: {
			duration: "50 week",
			lessons: "24",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-gynecologic-oncology",
		title: "Fellowship in Gynecologic Oncology",
		categories: ["oncology"],
		image: "/courses/Gynaecologic--410x290.webp",
		lessons: 64,
		weeks: 50,
		level: "expert",
		priceINR: 17e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced gynecologic cancer management including surgical and medical oncology approaches.",
		learn: [
			"GYN cancer surgery",
			"Chemotherapy",
			"Radiation",
			"Targeted therapy",
			"Multidisciplinary",
			"Palliative care"
		],
		requirements: ["MD/DNB OBG", "2+ years experience"],
		modules: [
			"GYN Oncology Basics",
			"Surgery",
			"Chemotherapy",
			"Radiation",
			"Multidisciplinary",
			"Palliative Care"
		],
		faqs: [{
			q: "Specialization?",
			a: "Gynecologic cancers"
		}, {
			q: "Career?",
			a: "Gynecologic oncologist"
		}],
		meta: {
			duration: "50 week",
			lessons: "64",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-gastroenterology",
		title: "Fellowship in Gastroenterology",
		categories: ["gastroenterology"],
		image: "/courses/Gastroenterologist-410x290.webp",
		lessons: 46,
		weeks: 50,
		level: "expert",
		priceINR: 15e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced GI training including endoscopy, diagnostic, and interventional gastroenterology.",
		learn: [
			"GI physiology",
			"Endoscopy",
			"Colonoscopy",
			"ERCP",
			"Ultrasound",
			"Motility disorders"
		],
		requirements: ["MD Medicine", "2+ years experience"],
		modules: [
			"GI Basics",
			"Upper Endoscopy",
			"Colonoscopy",
			"ERCP",
			"Ultrasound",
			"Advanced Cases"
		],
		faqs: [{
			q: "Career?",
			a: "Gastroenterologist"
		}, {
			q: "Salary?",
			a: "Very good"
		}],
		meta: {
			duration: "50 week",
			lessons: "46",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-gi-endoscopy",
		title: "Fellowship in GI Endoscopy",
		categories: ["gastroenterology"],
		image: "/courses/GI-ENDOSCOPY-410x290.webp",
		lessons: 12,
		weeks: 50,
		level: "expert",
		priceINR: 135e3,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized endoscopy training including advanced therapeutic procedures.",
		learn: [
			"Upper endoscopy",
			"Colonoscopy",
			"ERCP",
			"Therapeutic procedures",
			"Complications",
			"Quality"
		],
		requirements: ["MD/DNB Medicine", "Gastroenterology background"],
		modules: [
			"Endoscopy Basics",
			"Upper GI",
			"Lower GI",
			"ERCP",
			"Therapeutic",
			"Advanced Cases"
		],
		faqs: [{
			q: "Hands-on?",
			a: "100% procedural training"
		}, {
			q: "Career?",
			a: "Endoscopist"
		}],
		meta: {
			duration: "50 week",
			lessons: "12",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-urology",
		title: "Fellowship in Urology",
		categories: ["urology"],
		image: "/courses/Blue-Pink-Illustrative-Breast-Cancer-Awareness-Instagram-Post-2-410x290.webp",
		lessons: 35,
		weeks: 50,
		level: "expert",
		priceINR: 14e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Comprehensive urology training including oncology, endourology, and general urology.",
		learn: [
			"Urological diseases",
			"Prostate cancer",
			"Kidney cancer",
			"Endourology",
			"Stones",
			"Reconstruction"
		],
		requirements: ["MS/MCh Urology", "2+ years experience"],
		modules: [
			"Urology Basics",
			"Oncology",
			"Endourology",
			"Stones",
			"Reconstruction",
			"Advanced Cases"
		],
		faqs: [{
			q: "Career?",
			a: "Urologist"
		}, {
			q: "Salary?",
			a: "Very competitive"
		}],
		meta: {
			duration: "50 week",
			lessons: "35",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-clinical-hematology",
		title: "Fellowship in Clinical Hematology",
		categories: ["medicine"],
		image: "/courses/istockphoto-1285253618-612x612-1-410x290.webp",
		lessons: 56,
		weeks: 50,
		level: "expert",
		priceINR: 15e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced training in blood disorders, transfusion medicine, and hemato-oncology.",
		learn: [
			"Anemia",
			"Leukemia",
			"Lymphoma",
			"Bleeding disorders",
			"Transfusion",
			"Bone marrow",
			"Stem cell"
		],
		requirements: ["MD Medicine", "2+ years experience"],
		modules: [
			"Hematology Basics",
			"Anemias",
			"Leukemias",
			"Lymphomas",
			"Bleeding Disorders",
			"Advanced Cases"
		],
		faqs: [{
			q: "Career?",
			a: "Hematologist"
		}, {
			q: "Subspecialties?",
			a: "Hemato-oncology, BMT"
		}],
		meta: {
			duration: "50 week",
			lessons: "56",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-oral-implantology-and-laser-dentistry",
		title: "Fellowship in Oral Implantology and Laser Dentistry",
		categories: ["dental"],
		image: "/courses/Fellowship-in-Oral-Implantology-and-Laser-Dentistry-410x290.webp",
		lessons: 67,
		weeks: 50,
		level: "expert",
		priceINR: 13e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Specialized dental training in implantology and laser-assisted dental procedures.",
		learn: [
			"Implant anatomy",
			"Placement techniques",
			"Prosthodontics",
			"Laser therapy",
			"Soft tissue",
			"Advanced procedures"
		],
		requirements: ["BDS", "Dental background"],
		modules: [
			"Implant Basics",
			"Placement",
			"Prosthodontics",
			"Laser",
			"Soft Tissue",
			"Advanced Cases"
		],
		faqs: [{
			q: "Specialization?",
			a: "Implants and laser dentistry"
		}, {
			q: "Career?",
			a: "Implant dentist"
		}],
		meta: {
			duration: "50 week",
			lessons: "67",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "fellowship-in-maxillofacial-and-oral-surgery",
		title: "Fellowship in Maxillofacial and Oral Surgery",
		categories: ["dental"],
		image: "/courses/Fellowship-in-Maxillofacial-and-Oral-Surgery-410x290.webp",
		lessons: 46,
		weeks: 50,
		level: "expert",
		priceINR: 11e4,
		rating: null,
		reviewCount: 0,
		program: "Fellowship",
		overview: "Advanced oral and maxillofacial surgery training including trauma, reconstruction, and pathology.",
		learn: [
			"Oral surgery",
			"Facial trauma",
			"Reconstruction",
			"Pathology",
			"Implants",
			"Advanced procedures"
		],
		requirements: ["BDS", "Oral Surgery background"],
		modules: [
			"OMFS Basics",
			"Trauma",
			"Reconstruction",
			"Pathology",
			"Implants",
			"Advanced Cases"
		],
		faqs: [{
			q: "Career?",
			a: "Oral and maxillofacial surgeon"
		}, {
			q: "Specialization?",
			a: "Trauma and reconstruction"
		}],
		meta: {
			duration: "50 week",
			lessons: "46",
			skill_level: "Fellowship",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-course-in-clinical-nutrition",
		title: "Certificate Course in Clinical Nutrition",
		categories: ["nutrition"],
		image: "/courses/fjg.webp",
		lessons: 36,
		weeks: 25,
		level: "beginner",
		priceINR: 28e3,
		rating: null,
		reviewCount: 0,
		program: "Certificate",
		overview: "Introduction to clinical nutrition including medical nutrition therapy and therapeutic diets.",
		learn: [
			"Nutrition basics",
			"Assessment",
			"Diet planning",
			"Therapeutic diets",
			"Counseling",
			"Documentation"
		],
		requirements: ["Medical or Allied Health background"],
		modules: [
			"Nutrition Basics",
			"Assessment",
			"Therapeutic Diets",
			"Clinical Cases",
			"Counseling",
			"Documentation"
		],
		faqs: [{
			q: "For healthcare workers?",
			a: "Yes, clinical nutrition focus"
		}, {
			q: "Career?",
			a: "Clinical nutritionist assistant"
		}],
		meta: {
			duration: "25 week",
			lessons: "36",
			skill_level: "Certificate",
			certificate: "yes"
		}
	},
	{
		slug: "certificate-course-in-obesity-management",
		title: "Certificate in Obesity Management",
		categories: ["nutrition"],
		image: "/courses/Certificate-in-Obesity-Management-410x290.webp",
		lessons: 50,
		weeks: 24,
		level: "beginner",
		priceINR: 35e3,
		rating: 5,
		reviewCount: 1,
		program: "Certificate",
		overview: "Comprehensive obesity management training including dietary, behavioral, and medical approaches.",
		learn: [
			"Obesity physiology",
			"Diet planning",
			"Behavior modification",
			"Exercise",
			"Medications",
			"Support programs"
		],
		requirements: ["Medical or nutrition background"],
		modules: [
			"Obesity Basics",
			"Assessment",
			"Dietary Management",
			"Behavior",
			"Exercise",
			"Medications"
		],
		faqs: [{
			q: "Duration?",
			a: "Very short - 6 weeks"
		}, {
			q: "Career?",
			a: "Obesity management counselor"
		}],
		meta: {
			duration: "24 week",
			lessons: "50",
			skill_level: "Certificate",
			certificate: "yes"
		}
	},
	{
		slug: "pg-diploma-in-diabetology",
		title: "PG Diploma In Diabetology",
		categories: ["endocrinology"],
		image: "/courses/assd-410x290.webp",
		lessons: 44,
		weeks: 52,
		level: "intermediate",
		priceINR: 115e3,
		rating: null,
		reviewCount: 0,
		program: "PG Diploma",
		overview: "Intermediate diabetology training for comprehensive diabetes management.",
		learn: [
			"Diabetes types",
			"Blood glucose monitoring",
			"Insulin therapy",
			"Complications",
			"Patient education",
			"Prevention"
		],
		requirements: ["MBBS", "MD Medicine"],
		modules: [
			"Diabetes Basics",
			"Type 1",
			"Type 2",
			"Monitoring",
			"Insulin",
			"Complications"
		],
		faqs: [{
			q: "Duration?",
			a: "12 months"
		}, {
			q: "Career?",
			a: "Diabetologist"
		}],
		meta: {
			duration: "52 week",
			lessons: "44",
			skill_level: "PG Diploma",
			certificate: "yes"
		}
	}
];
(() => {
	const used = /* @__PURE__ */ new Set();
	for (const c of _courses) {
		if (!c.image) {
			c.image = "";
			continue;
		}
		if (used.has(c.image)) c.image = `/courses/${c.slug}-410x290.webp`;
		used.add(c.image);
	}
})();
(() => {
	for (const c of _courses) if (!Array.isArray(c.moduleDetails)) c.moduleDetails = c.modules && c.modules.length ? c.modules.map(() => []) : [];
})();
var fellowships = _courses.filter((c) => c.program === "Fellowship");
var pgDiplomas = _courses.filter((c) => c.program === "PG Diploma");
var certificates = _courses.filter((c) => (c.program || "Certificate") === "Certificate");
var courses = [
	...fellowships,
	...pgDiplomas,
	...certificates
];
var formatINR = (n) => "₹" + n.toLocaleString("en-IN") + ".00";
var getCourse = (slug) => courses.find((c) => c.slug === slug);
var getCategory = (slug) => categories.find((c) => c.slug === slug);
var coursesByCategory = (slug) => courses.filter((c) => c.categories.includes(slug));
var relatedCourses = (slug, n = 3) => {
	const c = getCourse(slug);
	if (!c) return [];
	return courses.filter((o) => o.slug !== slug && o.categories.some((cat) => c.categories.includes(cat))).slice(0, n);
};
courses.length, Object.fromEntries(categories.map((cat) => [cat.slug, coursesByCategory(cat.slug).length])), courses.filter((c) => c.program === "Fellowship").length, courses.filter((c) => c.program === "PG Diploma").length, courses.filter((c) => c.program === "Certificate").length, Math.min(...courses.map((c) => c.priceINR)), Math.max(...courses.map((c) => c.priceINR)), Math.round(courses.reduce((sum, c) => sum + c.priceINR, 0) / courses.length);
//#endregion
export { getCategory as a, formatINR as i, courses as n, getCourse as o, coursesByCategory as r, relatedCourses as s, categories as t };
