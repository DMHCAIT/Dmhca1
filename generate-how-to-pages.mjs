import fs from 'fs';
import path from 'path';

const specialties = [
  {
    route: 'how-to-become-a-radiologist',
    title: 'How to Become a Radiologist',
    image: 'How-to-Become-a-Radiologist.webp',
    color: 'indigo',
    description: 'Step-by-step guide to becoming a radiologist in India',
    durationText: '9.5-10.5 years',
    steps: [
      { num: 1, title: 'Complete 12th Standard', content: 'Complete your 12th with Science (Physics, Chemistry, Biology) from a recognized board. Strong foundation in Physics essential for understanding imaging technologies.' },
      { num: 2, title: 'Qualify NEET-UG and Secure MBBS Seat', content: 'Appear for NEET-UG examination and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study comprehensive medical curriculum covering anatomy, physiology, pathology, and clinical subjects. Develop strong fundamentals, especially in anatomy and physics.' },
      { num: 4, title: 'Complete Mandatory Internship (1 year)', content: 'Perform one year of clinical rotations across various departments. Gain exposure to radiology and diagnostic imaging during clinical postings.' },
      { num: 5, title: 'Prepare and Qualify NEET-PG', content: 'Dedicate 10-12 months for dedicated NEET-PG preparation focusing on radiology content. Score well to secure a radiology seat in your preferred institute.' },
      { num: 6, title: 'Complete MD Radiology (3 years)', content: 'Undergo comprehensive 3-year training in diagnostic radiology. Master all imaging modalities including X-ray, CT, MRI, Ultrasound, and nuclear medicine.' },
      { num: 7, title: 'Pursue Super-Specialization or Practice (Optional)', content: 'Optionally pursue DM in Neuroradiology, Cardiothoracic Imaging, or Fellowship in Interventional Radiology. Alternatively, start practice in hospitals or diagnostic centers.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1 year | MD Radiology: 3 years | Total: 9.5-10.5 years',
    faqs: [
      { q: 'What are the eligibility criteria to become a radiologist?', a: 'Pass 12th with Physics, Chemistry, Biology; qualify NEET-UG for MBBS; complete 5.5-year MBBS; complete 1-year internship; qualify NEET-PG for MD in Radiology.' },
      { q: 'How competitive is radiology in NEET-PG?', a: 'Radiology is moderately competitive. You need top 3-5% ranking to secure radiology seats in premier institutes. Competition level varies between government and private colleges.' },
      { q: 'What are the costs involved in pursuing radiology?', a: 'MBBS costs vary (₹0-25 lakhs for government, ₹15-50 lakhs private). MD Radiology costs approximately ₹10-20 lakhs in private institutes and nominal fees in government colleges.' },
      { q: 'Which imaging modalities do radiologists work with?', a: 'X-ray, Computed Tomography (CT), Magnetic Resonance Imaging (MRI), Ultrasound, Positron Emission Tomography (PET), Fluoroscopy, and interventional imaging modalities.' },
      { q: 'Can I practice radiology abroad?', a: 'Yes, Indian radiologists practice internationally. You may need to qualify additional exams like FRCR (UK), ABR (USA), or equivalent in your target country. International experience enhances career prospects.' },
      { q: 'What is the job market like for radiologists?', a: 'Excellent job prospects! Growing demand in diagnostic centers, hospitals, research institutions, and private practice. Shortage of radiologists in India creates good employment opportunities.' },
    ],
    tips: [
      '✓ Start NEET-PG preparation during MBBS clinical years',
      '✓ Develop interest in radiology during clinical rotations',
      '✓ Master anatomy and physics fundamentals',
      '✓ Practice image interpretation using online resources',
      '✓ Stay updated with latest imaging technologies',
      '✓ Consider fellowship in subspecialties for better prospects',
    ]
  },
  {
    route: 'how-to-become-a-cardiologist',
    title: 'How to Become a Cardiologist',
    image: 'How-to-Become-a-Cardiologist.webp',
    color: 'rose',
    description: 'Complete pathway to becoming a cardiologist in India',
    durationText: '12-13 years',
    steps: [
      { num: 1, title: 'Complete 12th with Science', content: 'Pass 12th standard with Physics, Chemistry, and Biology from a recognized board. Strong foundation in these subjects is essential for medical studies.' },
      { num: 2, title: 'Qualify NEET-UG and Join MBBS', content: 'Appear for NEET-UG entrance examination and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study comprehensive medical curriculum including anatomy, physiology, pathology, internal medicine, and clinical subjects. Develop understanding of cardiovascular pathology and diagnostics.' },
      { num: 4, title: 'Complete Mandatory Internship (1 year)', content: 'Perform one year of mandatory clinical rotations. Gain exposure to cardiology and internal medicine departments during clinical postings.' },
      { num: 5, title: 'Prepare for and Clear NEET-PG', content: 'Dedicate 10-14 months for intensive NEET-PG preparation focusing on internal medicine. Score high to secure admission to MD Internal Medicine in a reputable institute.' },
      { num: 6, title: 'Complete MD in Internal Medicine (3 years)', content: 'Undergo comprehensive 3-year training in general internal medicine. Develop expertise in medical management, diagnosis, and patient care across all internal organs.' },
      { num: 7, title: 'Complete DM Cardiology (3 years) and Practice', content: 'Pursue 3-year DM (Diplomate of National Board) in Cardiology for specialized cardiac training. Learn interventional procedures, echocardiography, and advanced cardiac care.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1.5 years | MD Internal Medicine: 3 years | DM Cardiology: 3 years | Total: 12-13 years',
    faqs: [
      { q: 'What is the total duration to become a cardiologist?', a: 'Total duration is 12-13 years: 5.5 years MBBS, 1 year internship, 1.5 years preparation and NEET-PG, 3 years MD Internal Medicine, and 3 years DM Cardiology.' },
      { q: 'Is cardiology a competitive specialization?', a: 'Yes, cardiology is highly competitive due to high demand and prestige. You need top 1-2% ranking in both NEET-PG and entrance for DM Cardiology seats.' },
      { q: 'What are the career prospects after DM Cardiology?', a: 'Excellent prospects! Cardiologists are in high demand in hospitals, cardiac care centers, private practice, teaching institutions, and research. International opportunities also available.' },
      { q: 'Which superspecialities are available after DM Cardiology?', a: 'Interventional cardiology, Non-invasive cardiology, Cardiac imaging, Electrophysiology, Heart failure management, and Pediatric cardiology fellowships are available.' },
      { q: 'What skills should a cardiologist develop?', a: 'Proficiency in echocardiography, coronary angiography, percutaneous coronary intervention, arrhythmia management, advanced cardiac life support, and excellent communication for patient counseling.' },
      { q: 'Can I start private practice after DM Cardiology?', a: 'Yes, many cardiologists establish private practice in cardiac care centers or super-specialty hospitals. Government positions in medical colleges and cardiac institutes also available.' },
    ],
    tips: [
      '✓ Develop interest in cardiovascular pathology early',
      '✓ Take active interest during internal medicine rotations',
      '✓ Score well in NEET-PG to secure MD Internal Medicine seat',
      '✓ Excel in MD to qualify for competitive DM Cardiology entrance',
      '✓ Develop clinical acumen and patient management skills',
      '✓ Consider fellowship in interventional cardiology for better prospects',
    ]
  },
  {
    route: 'how-to-become-a-cosmetologist',
    title: 'How to Become a Cosmetologist',
    image: 'How-to-Become-a-Cosmetologist.webp',
    color: 'amber',
    description: 'Step-by-step guide to becoming a cosmetologist in India',
    durationText: '8.5-9.5 years',
    steps: [
      { num: 1, title: 'Complete 12th with Science', content: 'Pass 12th standard with Physics, Chemistry, and Biology. Strong foundation in medical sciences is important for cosmetic medicine practice.' },
      { num: 2, title: 'Qualify NEET-UG for MBBS Admission', content: 'Appear for NEET-UG entrance exam and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study complete medical curriculum with special attention to dermatology content. Develop understanding of skin physiology, pharmacology, and surgical techniques.' },
      { num: 4, title: 'Complete 1-Year Internship', content: 'Perform mandatory clinical internship with rotation in dermatology department. Gain exposure to common skin conditions and dermatological procedures.' },
      { num: 5, title: 'Prepare and Qualify NEET-PG', content: 'Prepare for 10-12 months focusing on dermatology content for NEET-PG. Score well to secure MD Dermatology seat in your preferred institute.' },
      { num: 6, title: 'Complete MD Dermatology (3 years)', content: 'Undergo comprehensive 3-year training in general dermatology. Learn diagnosis and management of common dermatological conditions and basic surgical skills.' },
      { num: 7, title: 'Pursue Cosmetic Dermatology Fellowship & Practice', content: 'Complete 1-2 year fellowship in cosmetic dermatology and aesthetic medicine. Master non-invasive and minimally invasive cosmetic procedures for private practice.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1 year | MD Dermatology: 3 years | Cosmetic Fellowship: 1-1.5 years | Total: 8.5-9.5 years (MD alone) or 10-11 years with fellowship',
    faqs: [
      { q: 'Is MD Dermatology required to become a cosmetologist?', a: 'Yes, MD (Doctor of Medicine) in Dermatology is the primary qualification. You must complete MBBS followed by MD Dermatology to legally practice cosmetic dermatology in India.' },
      { q: 'Can I practice cosmetic procedures after MD Dermatology?', a: 'Yes, after MD Dermatology you can immediately start cosmetic practice. Additional fellowships in aesthetic medicine enhance expertise but are optional.' },
      { q: 'What are popular cosmetic procedures?', a: 'Botox injections, dermal fillers, laser treatments, chemical peels, micro-needling, radiofrequency therapy, liposuction, and dermal implants are popular procedures.' },
      { q: 'Is there good income potential in cosmetic dermatology?', a: 'Yes, excellent income potential through private practice. Cosmetic procedures command high fees, making it one of the most lucrative medical specialties.' },
      { q: 'What are the costs of cosmetic dermatology fellowship?', a: 'Cosmetic fellowship costs range from ₹5-15 lakhs depending on the institute. Some hospitals in metropolitan cities charge higher fees. Government fellowships are also available.' },
      { q: 'Can I practice cosmetic dermatology internationally?', a: 'Yes, Indian cosmetic dermatologists are recognized globally. You may need to register and qualify additional exams in your target country.' },
    ],
    tips: [
      '✓ Develop passion for aesthetics during MBBS',
      '✓ Excel in dermatology during MD program',
      '✓ Pursue cosmetic fellowship for advanced training',
      '✓ Stay updated with latest cosmetic technologies',
      '✓ Develop good patient communication skills',
      '✓ Build strong portfolio and online presence for practice',
    ]
  },
  {
    route: 'how-to-become-an-oncologist',
    title: 'How to Become an Oncologist',
    image: 'How-to-Become-an-Oncologist.webp',
    color: 'red',
    description: 'Complete pathway to becoming an oncologist in India',
    durationText: '12-13 years',
    steps: [
      { num: 1, title: 'Complete 12th with Science', content: 'Pass 12th standard with Physics, Chemistry, and Biology. Strong scientific foundation is crucial for understanding cancer biology and treatment.' },
      { num: 2, title: 'Qualify NEET-UG and Get MBBS Admission', content: 'Appear for NEET-UG entrance examination and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study comprehensive medical curriculum with focus on cancer biology, pathology, and pharmacology. Develop understanding of systemic diseases and their treatment.' },
      { num: 4, title: 'Complete 1-Year Mandatory Internship', content: 'Perform clinical rotations across departments with exposure to pathology, medicine, and surgery. Gain foundational knowledge in cancer management.' },
      { num: 5, title: 'Prepare for and Clear NEET-PG', content: 'Prepare for 10-14 months focusing on internal medicine and cancer pathology. Score high in NEET-PG to secure MD Internal Medicine seat.' },
      { num: 6, title: 'Complete MD Internal Medicine (3 years)', content: 'Undergo 3-year comprehensive training in internal medicine. Develop expertise in managing complex medical conditions and systemic diseases.' },
      { num: 7, title: 'Complete DM Medical Oncology (3 years) & Establish Practice', content: 'Pursue 3-year DM in Medical Oncology for specialized cancer treatment training. Learn chemotherapy, targeted therapy, immunotherapy, and palliative care.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1.5 years | MD Internal Medicine: 3 years | DM Medical Oncology: 3 years | Total: 12-13 years',
    faqs: [
      { q: 'What is the educational pathway to become an oncologist?', a: 'MBBS (5.5 years) → Internship (1 year) → MD Internal Medicine (3 years) → DM Medical Oncology (3 years). Total duration is approximately 12-13 years.' },
      { q: 'How competitive is DM Medical Oncology?', a: 'DM Medical Oncology is highly competitive due to limited seats and high demand. You need excellent performance in MD exams and top ranking in DM entrance exam.' },
      { q: 'What are the types of oncology specializations?', a: 'Medical Oncology (chemotherapy), Surgical Oncology (cancer surgery), Radiation Oncology (radiotherapy), Pediatric Oncology (childhood cancers), and Palliative Medicine.' },
      { q: 'What is the job market for oncologists in India?', a: 'Excellent job prospects! High demand in cancer hospitals, medical colleges, research institutes. Private cancer care centers are rapidly expanding in India.' },
      { q: 'What are the research opportunities in oncology?', a: 'Extensive research opportunities in cancer biology, drug development, clinical trials, immunotherapy, and precision medicine. Many institutions offer research fellowship.' },
      { q: 'Can oncologists establish independent practice?', a: 'Yes, many oncologists establish private practice in cancer care centers and super-specialty hospitals. Government positions in medical colleges also available.' },
    ],
    tips: [
      '✓ Develop interest in cancer biology early',
      '✓ Excel in internal medicine during MD program',
      '✓ Stay updated with cancer treatment advances',
      '✓ Develop empathy and patient communication skills',
      '✓ Consider research during DM program',
      '✓ Pursue additional fellowship in subspecialties if interested',
    ]
  },
  {
    route: 'how-to-become-a-neurologist',
    title: 'How to Become a Neurologist',
    image: 'How-to-Become-a-Neurologist.webp',
    color: 'violet',
    description: 'Complete pathway to becoming a neurologist in India',
    durationText: '12-13 years',
    steps: [
      { num: 1, title: 'Complete 12th Standard with Science', content: 'Pass 12th with Physics, Chemistry, and Biology. Strong foundation in neurosciences and general sciences is beneficial.' },
      { num: 2, title: 'Qualify NEET-UG and Secure MBBS Seat', content: 'Appear for NEET-UG entrance exam and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study complete medical curriculum with special focus on neuroanatomy and neuropharmacology. Develop understanding of nervous system diseases.' },
      { num: 4, title: 'Complete Mandatory Clinical Internship (1 year)', content: 'Perform clinical rotations including neurology, psychiatry, and general medicine. Gain practical exposure to neurological examination and diagnosis.' },
      { num: 5, title: 'Prepare and Qualify NEET-PG Exam', content: 'Dedicate 10-14 months for comprehensive NEET-PG preparation focusing on neurology content. Score well to secure MD Neurology seat in a reputable institute.' },
      { num: 6, title: 'Complete MD Neurology (3 years)', content: 'Undergo intensive 3-year training in general neurology. Master diagnosis and management of common neurological disorders, neuroimaging interpretation.' },
      { num: 7, title: 'Pursue Super-Specialization and Establish Practice', content: 'Optionally pursue fellowship in stroke neurology, neuroimmunology, epilepsy, or movement disorders. Start practice in hospitals, medical colleges, or private clinics.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1.5 years | MD Neurology: 3 years | Optional Fellowship: 1-2 years | Total: 12-13 years (MD alone)',
    faqs: [
      { q: 'What is the complete pathway to become a neurologist?', a: 'Complete MBBS (5.5 years), internship (1 year), prepare and qualify NEET-PG (1.5 years), complete MD Neurology (3 years). Total duration approximately 12-13 years.' },
      { q: 'Is MD Neurology different from neurosurgery?', a: 'Yes, MD Neurology deals with medical management of neurological disorders while neurosurgery (MS) involves surgical intervention. Both require different training paths.' },
      { q: 'How competitive is NEET-PG for neurology?', a: 'Neurology is moderately competitive. You need top 5-10% ranking in NEET-PG to secure neurology seats in premier institutes. Competition varies by state.' },
      { q: 'What diagnostic tools do neurologists use?', a: 'EEG, MRI, CT scan, EMG-NCS, LP, CSF analysis, neurosonography, PET scan, and advanced neuroimaging. Expertise in interpretation is crucial.' },
      { q: 'What are career options for neurologists?', a: 'Teaching in medical colleges, private practice, working in government hospitals, research in neurology, pharmaceutical companies, and international opportunities.' },
      { q: 'What is the earning potential for neurologists?', a: 'Good earning potential through private practice and consultations. Government positions offer stable income. Private neuro-centers and super-specialty hospitals offer competitive packages.' },
    ],
    tips: [
      '✓ Develop strong interest in neurosciences early',
      '✓ Engage actively in neurology rotations during clinical years',
      '✓ Master neurological examination techniques',
      '✓ Stay updated with neurological advancements',
      '✓ Develop good diagnostic and analytical skills',
      '✓ Consider fellowship for subspecialization and better career prospects',
    ]
  },
  {
    route: 'how-to-become-a-diabetologist',
    title: 'How to Become a Diabetologist',
    image: 'How-to-Become-a-Diabetologist.webp',
    color: 'emerald',
    description: 'Step-by-step guide to becoming a diabetologist in India',
    durationText: '12-13 years',
    steps: [
      { num: 1, title: 'Complete 12th with Science Subjects', content: 'Pass 12th standard with Physics, Chemistry, and Biology. Strong foundation in biology and chemistry helps in understanding metabolism.' },
      { num: 2, title: 'Qualify NEET-UG and Join MBBS', content: 'Appear for NEET-UG entrance examination and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study complete medical curriculum with focus on internal medicine and endocrinology. Develop understanding of metabolic disorders and hormonal regulation.' },
      { num: 4, title: 'Complete Mandatory Internship (1 year)', content: 'Perform one year of clinical rotations including internal medicine and endocrinology. Gain exposure to diabetic patient management.' },
      { num: 5, title: 'Prepare for and Clear NEET-PG', content: 'Dedicate 10-14 months for intensive NEET-PG preparation focusing on internal medicine and metabolic disorders. Score well to secure MD Internal Medicine seat.' },
      { num: 6, title: 'Complete MD Internal Medicine (3 years)', content: 'Undergo comprehensive 3-year training in internal medicine. Develop expertise in managing complex metabolic and endocrine disorders.' },
      { num: 7, title: 'Complete DM Endocrinology (3 years) and Practice', content: 'Pursue 3-year DM in Endocrinology for specialized training in diabetes and hormonal disorders. Learn diabetes management, insulin therapy, and metabolic syndrome treatment.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1.5 years | MD Internal Medicine: 3 years | DM Endocrinology: 3 years | Total: 12-13 years',
    faqs: [
      { q: 'What is the educational path to become a diabetologist?', a: 'MBBS (5.5 years) → Internship (1 year) → MD Internal Medicine (3 years) → DM Endocrinology (3 years). Total duration is 12-13 years.' },
      { q: 'Is there a direct diploma in diabetology?', a: 'There is no direct diploma in diabetes management. You must pursue MD Internal Medicine followed by DM Endocrinology for formal qualification.' },
      { q: 'What is the difference between diabetologist and endocrinologist?', a: 'Endocrinologists specialize in all hormonal disorders while diabetologists specialize in diabetes management. DM Endocrinology covers both diabetes and endocrine disorders.' },
      { q: 'How is diabetes prevalence in India?', a: 'India has over 70-80 million diabetic patients and growing. Excellent job prospects for diabetologists due to high disease prevalence and increasing awareness.' },
      { q: 'What is the income potential for diabetologists?', a: 'Good earning potential through private practice, consultations, and diabetes care centers. Government positions in medical colleges offer stable income.' },
      { q: 'Can I establish a diabetes care center?', a: 'Yes, many diabetologists establish standalone diabetes care centers with allied services like nutrition, foot care, and ophthalmology consultation.' },
    ],
    tips: [
      '✓ Develop interest in metabolic disorders early',
      '✓ Excel in internal medicine during MD',
      '✓ Stay updated with diabetes treatment guidelines',
      '✓ Develop patient counseling and lifestyle modification skills',
      '✓ Consider diabetes educator certification',
      '✓ Build network with other health professionals for holistic care',
    ]
  },
  {
    route: 'how-to-become-an-endocrinologist',
    title: 'How to Become an Endocrinologist',
    image: 'How-to-Become-an-Endocrinologist.webp',
    color: 'indigo',
    description: 'Complete pathway to becoming an endocrinologist in India',
    durationText: '12-13 years',
    steps: [
      { num: 1, title: 'Complete 12th with Science', content: 'Pass 12th standard with Physics, Chemistry, and Biology. Foundation in biology and chemistry is essential for understanding hormonal systems.' },
      { num: 2, title: 'Qualify NEET-UG for MBBS Admission', content: 'Appear for NEET-UG entrance exam and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study comprehensive medical curriculum with special emphasis on endocrinology and biochemistry. Develop understanding of hormonal regulation and metabolic pathways.' },
      { num: 4, title: 'Complete 1-Year Mandatory Internship', content: 'Perform clinical rotations including internal medicine and endocrinology departments. Gain hands-on experience in managing endocrine disorders.' },
      { num: 5, title: 'Prepare and Qualify NEET-PG Exam', content: 'Dedicate 10-14 months for comprehensive NEET-PG preparation focusing on internal medicine and endocrinology. Score high to secure MD Internal Medicine seat.' },
      { num: 6, title: 'Complete MD Internal Medicine (3 years)', content: 'Undergo intensive 3-year training in general and specialized internal medicine. Master management of complex metabolic and endocrine conditions.' },
      { num: 7, title: 'Complete DM Endocrinology (3 years) and Establish Practice', content: 'Pursue 3-year DM in Endocrinology for specialized training in all endocrine glands and hormonal disorders. Gain expertise in diabetes, thyroid, pituitary, adrenal disorders.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1.5 years | MD Internal Medicine: 3 years | DM Endocrinology: 3 years | Total: 12-13 years',
    faqs: [
      { q: 'What is the complete pathway to become an endocrinologist?', a: 'Complete MBBS (5.5 years), internship (1 year), qualify NEET-PG (1.5 years), MD Internal Medicine (3 years), DM Endocrinology (3 years). Total: 12-13 years.' },
      { q: 'What endocrine disorders do endocrinologists treat?', a: 'Diabetes, thyroid disorders, PCOS, hypogonadism, growth disorders, pituitary and adrenal disorders, osteoporosis, and metabolic syndrome.' },
      { q: 'How many DM Endocrinology seats are available in India?', a: 'Limited seats available, approximately 50-70 seats annually across government and private institutions. Highly competitive entrance exam required.' },
      { q: 'What is the job market for endocrinologists?', a: 'Excellent job market! High demand due to rising diabetes and thyroid disorder prevalence. Opportunities in hospitals, medical colleges, research, and private practice.' },
      { q: 'Can endocrinologists pursue research?', a: 'Yes, extensive research opportunities in endocrinology. Many institutions offer research positions and PhD programs in hormonal and metabolic research.' },
      { q: 'What is the average income for endocrinologists?', a: 'Good earning potential through private consultancy and corporate health programs. Government positions offer stable income with pension benefits.' },
    ],
    tips: [
      '✓ Develop strong interest in hormonal physiology',
      '✓ Excel in biochemistry and pharmacology',
      '✓ Score well in NEET-PG to get MD seat',
      '✓ Pursue DM with research interest',
      '✓ Stay updated with endocrinology guidelines',
      '✓ Consider international fellowship for enhanced expertise',
    ]
  },
  {
    route: 'how-to-become-an-embryologist',
    title: 'How to Become an Embryologist',
    image: 'How-to-Become-an-Embryologist.webp',
    color: 'cyan',
    description: 'Step-by-step guide to becoming a reproductive embryologist in India',
    durationText: '10.5-11 years',
    steps: [
      { num: 1, title: 'Complete 12th with Science (Biology, Chemistry, Physics)', content: 'Pass 12th standard with strong foundation in Biology, Chemistry, and Physics. Excellent grades in Biology important for medical entrance.' },
      { num: 2, title: 'Qualify NEET-UG and Secure MBBS Seat', content: 'Appear for NEET-UG entrance exam and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study comprehensive medical curriculum with focus on anatomy, physiology, and pathology. Develop understanding of reproductive system and developmental biology.' },
      { num: 4, title: 'Complete Internship (1 year)', content: 'Perform one year clinical internship with emphasis on obstetrics and gynecology. Gain exposure to reproductive health and assisted reproduction.' },
      { num: 5, title: 'Pursue MS Obstetrics & Gynecology (3 years)', content: 'Complete 3-year MS in OB-GYN specialization. Develop expertise in obstetric and gynecological conditions and reproductive health management.' },
      { num: 6, title: 'Complete MSc in Reproductive Embryology (2 years)', content: 'Pursue dedicated 2-year MSc in Reproductive Embryology offered by universities. Master lab techniques, embryo culture, and ART procedures.' },
      { num: 7, title: 'Specialize and Establish Practice', content: 'Gain hands-on experience in IVF centers and assisted reproductive centers. Join fertility clinics or establish your own embryology laboratory.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | MS OB-GYN: 3 years | MSc Embryology: 2 years | Total: 10.5-11 years',
    faqs: [
      { q: 'What is the educational pathway to become an embryologist?', a: 'MBBS (5.5 years) → Internship (1 year) → MS OB-GYN (3 years) → MSc Reproductive Embryology (2 years). Total: 10.5-11 years.' },
      { q: 'Can I do MSc Embryology without MS OB-GYN?', a: 'Some institutes offer MSc Embryology after MBBS. However, MS OB-GYN provides better clinical understanding and better career prospects.' },
      { q: 'What is the difference between embryologist and OB-GYN?', a: 'OB-GYN doctors manage pregnancy and gynecological conditions. Embryologists specialize in laboratory work, embryo manipulation, and assisted reproduction techniques.' },
      { q: 'Is the job market good for embryologists in India?', a: 'Yes, excellent opportunities! Growing fertility clinics and IVF centers across India create high demand for qualified embryologists.' },
      { q: 'What are the major responsibilities of an embryologist?', a: 'Oocyte collection and culture, sperm processing, fertilization, embryo culture, embryo transfer, cryopreservation, and genetic testing of embryos.' },
      { q: 'Can embryologists work abroad?', a: 'Yes, Indian embryologists are recognized internationally. You may need additional certifications or exams in your target country.' },
    ],
    tips: [
      '✓ Develop interest in reproductive medicine early',
      '✓ Excel in biology and anatomy during MBBS',
      '✓ Score well in MS OB-GYN entrance exams',
      '✓ Pursue MSc from recognized university',
      '✓ Gain laboratory experience during studies',
      '✓ Stay updated with ART technologies',
    ]
  },
  {
    route: 'how-to-become-a-pediatrician',
    title: 'How to Become a Pediatrician',
    image: 'How-to-Become-a-Pediatrician.webp',
    color: 'sky',
    description: 'Complete pathway to becoming a pediatrician in India',
    durationText: '12-13 years',
    steps: [
      { num: 1, title: 'Complete 12th Standard with Science', content: 'Pass 12th with Physics, Chemistry, and Biology. Strong foundation in science subjects is essential for medical studies.' },
      { num: 2, title: 'Qualify NEET-UG and Join MBBS', content: 'Appear for NEET-UG entrance examination and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study comprehensive medical curriculum including pediatrics. Develop understanding of child health, development, and common pediatric diseases.' },
      { num: 4, title: 'Complete Mandatory Internship (1 year)', content: 'Perform one year clinical internship including rotation in pediatrics department. Gain practical experience in child care and clinical management.' },
      { num: 5, title: 'Prepare for and Clear NEET-PG', content: 'Dedicate 10-14 months for comprehensive NEET-PG preparation focusing on pediatrics. Score high to secure MD Pediatrics seat in a reputable institute.' },
      { num: 6, title: 'Complete MD Pediatrics (3 years)', content: 'Undergo intensive 3-year training in pediatric medicine and child health. Master diagnosis and management of childhood diseases and developmental disorders.' },
      { num: 7, title: 'Pursue DCH or DM Subspecialty and Practice', content: 'Optionally pursue DCH (Diploma in Child Health) or DM in pediatric subspecialties like neonatology, pediatric cardiology. Establish private practice or join hospitals.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1.5 years | MD Pediatrics: 3 years | Optional DCH/DM: 1-2 years | Total: 12-13 years (MD alone)',
    faqs: [
      { q: 'What is the complete pathway to become a pediatrician?', a: 'MBBS (5.5 years) → Internship (1 year) → NEET-PG preparation & exam (1.5 years) → MD Pediatrics (3 years). Total: 12-13 years.' },
      { q: 'Is MD Pediatrics competitive in NEET-PG?', a: 'Yes, pediatrics is competitive. You need good ranking in NEET-PG. Competition varies, but top 5-8% ranking typically needed for premier institutes.' },
      { q: 'What are pediatric subspecialties available?', a: 'Neonatology, Pediatric cardiology, Pediatric neurology, Pediatric oncology, Pediatric gastroenterology, Pediatric pulmonology, and Pediatric nephrology.' },
      { q: 'Is pediatric practice lucrative?', a: 'Good earning potential in private practice through consultations and treatments. Government positions offer stable income. Corporate hospitals offer competitive packages.' },
      { q: 'What qualities are important for pediatricians?', a: 'Patience with children, excellent communication with parents, empathy, observational skills, and ability to handle medical emergencies in children.' },
      { q: 'What are career opportunities for pediatricians?', a: 'Private practice, teaching in medical colleges, work in government hospitals, NGOs, pediatric research, pharmaceutical companies, and international opportunities.' },
    ],
    tips: [
      '✓ Develop passion for child health and development',
      '✓ Excel in pediatrics during clinical rotations',
      '✓ Score well in NEET-PG for good institute selection',
      '✓ Develop excellent communication with parents',
      '✓ Stay updated with pediatric guidelines',
      '✓ Consider subspecialty fellowship for better career prospects',
    ]
  },
  {
    route: 'how-to-become-an-obstetrician-gynecologist',
    title: 'How to Become an Obstetrician-Gynecologist',
    image: 'How-to-Become-an-Obstetrician-Gynecologist.webp',
    color: 'pink',
    description: 'Step-by-step guide to becoming an OB-GYN in India',
    durationText: '9.5-10 years',
    steps: [
      { num: 1, title: 'Complete 12th with Science', content: 'Pass 12th standard with Physics, Chemistry, and Biology from a recognized board. Science foundation is crucial for medical education.' },
      { num: 2, title: 'Qualify NEET-UG and Get MBBS Admission', content: 'Appear for NEET-UG entrance exam and secure admission to a recognized medical college for 5.5-year MBBS program.' },
      { num: 3, title: 'Complete MBBS (4.5 years)', content: 'Study comprehensive medical curriculum including obstetrics and gynecology. Develop understanding of female reproductive health, pregnancy, and delivery.' },
      { num: 4, title: 'Complete 1-Year Mandatory Internship', content: 'Perform clinical internship with mandatory rotation in obstetrics and gynecology department. Gain hands-on experience in OB-GYN procedures.' },
      { num: 5, title: 'Prepare for and Clear NEET-PG', content: 'Dedicate 10-12 months for NEET-PG preparation focusing on obstetrics and gynecology content. Score well to secure MS OB-GYN seat.' },
      { num: 6, title: 'Complete MS OB-GYN (3 years)', content: 'Undergo comprehensive 3-year Master\'s degree in Obstetrics & Gynecology. Master obstetric care, delivery management, gynecological procedures, and women\'s health.' },
      { num: 7, title: 'Establish Practice or Pursue Fellowship', content: 'Start private practice as OB-GYN doctor or join government institutions. Optionally pursue 2-year fellowship in maternal-fetal medicine or gynecological oncology.' },
    ],
    duration: '12th to MBBS: 5.5 years | MBBS to Internship: 1 year | Preparation & NEET-PG: 1 year | MS OB-GYN: 3 years | Total: 9.5-10 years',
    faqs: [
      { q: 'What is the educational pathway to become an OB-GYN?', a: 'MBBS (5.5 years) → Internship (1 year) → NEET-PG preparation (1 year) → MS OB-GYN (3 years). Total: 9.5-10 years.' },
      { q: 'How competitive is MS OB-GYN in NEET-PG?', a: 'OB-GYN is highly competitive due to limited seats and high demand. You need top 2-3% ranking in NEET-PG to secure seats in premier institutes.' },
      { q: 'What procedures do OB-GYNs perform?', a: 'Normal and cesarean deliveries, hysterectomy, fibroid removal, laparoscopic procedures, colposcopy, D&C, and management of obstetric complications.' },
      { q: 'Is there good job market for OB-GYNs?', a: 'Excellent job market! High demand in hospitals, maternity centers, government institutions. Maternal health programs across India create abundant opportunities.' },
      { q: 'What is the earning potential for OB-GYNs?', a: 'Very good earning potential through private practice and consultations. Government positions offer stable income. Private nursing homes offer high earning potential.' },
      { q: 'Can OB-GYNs establish independent practice?', a: 'Yes, many OB-GYNs establish private maternity centers or nursing homes. Gynecology clinics with delivery facilities are popular in metro cities.' },
    ],
    tips: [
      '✓ Develop passion for women\'s health',
      '✓ Excel in OB-GYN during clinical rotations',
      '✓ Score well in NEET-PG for premium institute selection',
      '✓ Master both obstetric and gynecologic skills',
      '✓ Stay updated with maternal-fetal medicine advances',
      '✓ Develop excellent patient rapport and communication',
    ]
  },
];

const colorClasses = {
  indigo: {
    hero: 'from-indigo-600/95 to-purple-600/95 dark:from-indigo-700 dark:to-purple-700',
    text: 'text-indigo-900 dark:text-indigo-100',
    lightBg: 'from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30',
    button: 'from-indigo-600/95 to-purple-600/95 dark:from-indigo-700 dark:to-purple-700',
    textDark: 'text-indigo-700 dark:text-indigo-300',
  }
};

const generateFile = (specialty) => {
  const colorClass = colorClasses[specialty.color];
  
  const content = `import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/${specialty.route}")({
  head: () => ({
    meta: [
      { title: "${specialty.title} — DMHCA" },
      { name: "description", content: "${specialty.description}" },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b ${colorClass.hero}"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-500/20 border border-indigo-300/50 rounded-full text-indigo-200 text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              ${specialty.title}
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              ${specialty.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-3 pt-3 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Read Time</div>
                <div className="font-bold text-sm sm:text-lg">8 min</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Users className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Steps</div>
                <div className="font-bold text-sm sm:text-lg">7</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Duration</div>
                <div className="font-bold text-sm sm:text-lg">9-10 yrs</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Job Market</div>
                <div className="font-bold text-sm sm:text-lg">Excellent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/${specialty.image}" alt="${specialty.title}" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8">Path to ${specialty.title.replace('How to Become a ', '')}</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-8 text-sm sm:text-base">Becoming ${specialty.title.replace('How to Become a ', 'a ').toLowerCase()} in India requires a systematic approach combining academic excellence, competitive entrance exams, and clinical experience. This guide outlines the complete pathway to help you navigate your journey into this rewarding medical specialty.</p>
              
              <div className="space-y-8">
                ${specialty.steps.map(step => {
                  if (step.bullets) {
                    return \`
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold">\${step.num}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">\${step.title}</h3>
                        <ul className="space-y-2">
                          \${step.bullets.map(bullet => \`<li className="flex items-start gap-2 text-sm sm:text-base text-slate-700 dark:text-slate-300"><span className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">•</span><span>\${bullet}</span></li>\`).join('')}
                        </ul>
                      </div>
                    </div>
                    \`;
                  } else {
                    return \`
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold">\${step.num}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">\${step.title}</h3>
                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">\${step.content}</p>
                      </div>
                    </div>
                    \`;
                  }
                }).join('')}
              </div>
            </div>

            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Duration Summary</h2>
              <div className="bg-slate-100 dark:bg-slate-700/50 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">${specialty.duration}</p>
              </div>
            </div>

            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Key Tips for Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${specialty.tips.map(tip => \`<div className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg"><p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ \${tip}</p></div>\`).join('')}
              </div>
            </div>

            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                ${specialty.faqs.map((faq, idx) => \`
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                    <details className="group">
                      <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                        <span className="flex-1 text-left pr-4">\${faq.q}</span>
                        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </span>
                      </summary>
                      <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">\${faq.a}</p>
                    </details>
                  </div>
                \`).join('')}
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r ${colorClass.button} rounded-2xl border border-indigo-400/20 dark:border-indigo-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Explore ${specialty.title.replace('How to Become a ', '')}</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">Discover specialized training programs for your medical career.</p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                    Explore Programs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
`;
  
  return content;
};

// Generate and write all files
specialties.forEach(specialty => {
  const fileName = path.join('src', 'routes', \`\${specialty.route}.tsx\`);
  const content = generateFile(specialty);
  fs.writeFileSync(fileName, content, 'utf-8');
  console.log(\`✓ Generated \${fileName}\`);
});

console.log('\\nAll "how to become" pages generated successfully!');
