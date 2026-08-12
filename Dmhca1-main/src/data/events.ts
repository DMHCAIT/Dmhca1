export interface EventSpeaker {
  name: string;
  title: string;
  image?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  shortDescription: string;
  description: string;
  objectives?: string[];
  whatYouLearn?: string[];
  eventContent?: string[];
  speakers: EventSpeaker[];
  price?: {
    original: number;
    current: number;
  };
}

export const events: Event[] = [
  {
    id: "ultrasound-workshop",
    slug: "join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program",
    title: "Join our 3 Day Master Workshop in Ultrasound with Hands-On Training Program",
    date: "23/01/2026",
    location: "In-person",
    image: "/events&webinars/ultrasound-workshop.webp",
    shortDescription: "Hands-on ultrasound training program designed for medical professionals",
    description: `DMHCA is organizing a Hands-On Ultrasound Training Program designed for medical professionals who want practical experience and better confidence in ultrasound practice. This workshop focuses on learning by doing. Participants will work directly on ultrasound machines under the guidance of experienced faculty.`,
    whatYouLearn: [
      "Learn basic and advanced ultrasound techniques",
      "Understand correct probe handling and image orientation",
      "Practice scanning on models in a supervised environment",
      "Improve diagnostic confidence through real-time demonstrations"
    ],
    eventContent: [
      "Introduction to Ultrasound basics",
      "Probe handling and image orientation",
      "Hands-on scanning practice",
      "Advanced techniques and applications"
    ],
    speakers: [
      {
        name: "VASA Academy",
        title: "Expert Faculty",
        image: "/events&webinars/vasa-academy.webp"
      }
    ]
  },
  {
    id: "hiv-awareness-webinar",
    slug: "webinar-what-to-expect-at-the-hiv-awareness-webinar-2025",
    title: "Webinar: What to Expect at the HIV Awareness Webinar 2025",
    date: "01/12/2025",
    location: "Zoom Meeting",
    image: "/events&webinars/hiv-awareness.webp",
    shortDescription: "HIV Awareness Webinar 2025 bringing together health experts and community advocates",
    description: `The HIV Awareness Webinar 2025 is set to bring together health experts, community advocates, educators, and individuals passionate about HIV prevention and empowerment. This year's webinar focuses on delivering practical knowledge, breaking stigma, and highlighting the latest advancements in treatment and prevention.`,
    speakers: [
      {
        name: "Dr. Abhishek S. Lachyan",
        title: "Consultant & Scientist, Dept. of Obstetric & Gynae, VMMC & Safdarjung Hospital",
        image: "/events&webinars/Dr.Abhishek-Lachyan.webp"
      },
      {
        name: "Dr. Azra Khan",
        title: "Assistant Professor, Noida International University",
        image: "/events&webinars/Dr_Azra khan.webp"
      },
      {
        name: "Dr. Abbas Kazim",
        title: "Consultant - NCDC, Ministry of Health and Family Welfare",
        image: "/events&webinars/Dr_Abbas kazim.webp"
      }
    ]
  },
  {
    id: "cervical-cancer-webinar",
    slug: "webinar-cervical-cancer-awareness-diagnosis-and-treatment",
    title: "Webinar : Cervical Cancer Awareness, Diagnosis, and Treatment",
    date: "14/11/2024",
    location: "Zoom meeting",
    image: "/events&webinars/cervical-cancer.webp",
    shortDescription: "Comprehensive webinar on cervical cancer prevention, diagnosis, and treatment",
    description: `Join us for an insightful webinar on cervical cancer, one of the most preventable yet impactful cancers affecting women worldwide. This event is designed for healthcare professionals, students, and anyone keen on deepening their understanding of cervical cancer prevention, diagnosis, and treatment options.`,
    whatYouLearn: [
      "Prevention strategies and HPV vaccine importance",
      "Screening methods: Pap smears, HPV testing, and colposcopy",
      "Different stages of cervical cancer and early diagnosis",
      "Treatment options based on cancer stages",
      "Emerging therapies and supportive care approaches"
    ],
    eventContent: [
      "Prevention: Screening and health education",
      "Diagnosis: Screening methods and interpretation",
      "Treatment: Surgery, radiation therapy, and chemotherapy"
    ],
    speakers: [
      {
        name: "Dr. Renuka Gupta",
        title: "Gynaecologist",
        image: "/events&webinars/Renuka gupta.webp"
      }
    ],
    price: {
      original: 0,
      current: 0
    }
  },
  {
    id: "cardiology-conclave",
    slug: "using-laptop-and-pc-working-at-home",
    title: "Event : Cardiology Conclave",
    date: "06/04/2024",
    location: "Hyderabad, India",
    image: "/events&webinars/cardiology-conclave.webp",
    shortDescription: "Prestigious event gathering top cardiologists for cardiovascular care advancement",
    description: `The Cardiology Conclave is a prestigious event that gathers top cardiologists, researchers, and healthcare professionals to explore the latest advancements in cardiovascular care. The event features expert sessions, panel discussions, and hands-on workshops.`,
    whatYouLearn: [
      "Latest Cardiovascular Treatments",
      "Advanced Diagnostic Techniques",
      "Preventive Cardiology",
      "Case Studies and Real-World Applications",
      "Research & Future Trends"
    ],
    eventContent: [
      "Expert Sessions on emerging trends in cardiology",
      "Panel Discussions on critical cardiovascular health issues",
      "Workshops & Case Studies on real-world applications",
      "Networking Opportunities with healthcare leaders"
    ],
    speakers: [
      {
        name: "Sai Ravi Shanker",
        title: "MBBS-MD-DM (Cardiology)",
        image: "/events&webinars/A.-Sai-Ravi-Shanker.webp"
      },
      {
        name: "Dr. Pramod Kumar Dhar",
        title: "MBBS-MD-General Medicine",
        image: "/events&webinars/Pramod kumar Dhar.webp"
      }
    ],
    price: {
      original: 1200,
      current: 999
    }
  },
  {
    id: "high-risk-pregnancies",
    slug: "business-people-working-together-conference",
    title: "Webinar : Management of High-Risk Pregnancies",
    date: "12/05/2024",
    location: "Online On Zoom",
    image: "/events&webinars/high-risk-pregnancies.webp",
    shortDescription: "In-depth understanding of high-risk pregnancies and evidence-based management practices",
    description: `This webinar aims to provide an in-depth understanding of high-risk pregnancies, their management, and the latest evidence-based practices. Participants will learn to identify risk factors, monitor pregnancy progression, and implement management strategies.`,
    objectives: [
      "Understand the key risk factors associated with high-risk pregnancies",
      "Be familiar with diagnostic tools for monitoring maternal and fetal health",
      "Gain knowledge on specific management strategies for high-risk pregnancy conditions",
      "Develop a comprehensive care plan, including delivery and postpartum management"
    ],
    eventContent: [
      "Introduction to High-Risk Pregnancies",
      "Common Risk Factors for High-Risk Pregnancies",
      "Diagnostic Tools and Screening",
      "Management Strategies for Specific High-Risk Conditions",
      "Fetal Surveillance and Monitoring",
      "Delivery Planning in High-Risk Pregnancies",
      "Postpartum Care and Follow-up"
    ],
    speakers: [
      {
        name: "Dr Prabhdeep Kaur",
        title: "Gyneacologist",
        image: "/events&webinars/Dr-Prabhdeep-Kaur.webp"
      }
    ],
    price: {
      original: 1200,
      current: 999
    }
  },
  {
    id: "trauma-fracture-management",
    slug: "young-tutor-home-teaching-online-courses",
    title: "Trauma and Fracture Management",
    date: "26/05/2024",
    location: "Online on Zoom",
    image: "/events&webinars/trauma-fracture.webp",
    shortDescription: "Comprehensive understanding of trauma and fracture management approaches",
    description: `The objective of this webinar is to provide healthcare professionals with a comprehensive understanding of trauma and fracture management, from initial assessment and diagnosis to treatment. Participants will explore both surgical and non-surgical approaches.`,
    whatYouLearn: [
      "Understand the importance of a systematic approach to trauma care and fracture management",
      "Be familiar with both surgical and non-surgical treatment options for fractures",
      "Gain insights into managing complex fractures, including pelvic and long bone fractures",
      "Learn best practices for infection control and rehabilitation after trauma surgery"
    ],
    eventContent: [
      "Introduction to Trauma and Fracture Management",
      "Initial Trauma Assessment and Stabilization",
      "Fracture Classification and Treatment Planning",
      "Surgical vs. Non-Surgical Management of Fractures",
      "Management of Complex Fractures",
      "Infection Control and Post-Trauma Complications",
      "Rehabilitation and Post-Operative Care"
    ],
    speakers: [
      {
        name: "Dr. Sandeep Gupta",
        title: "Arthroplasty/Arthroscopy",
        image: "/events&webinars/sandeep_gupta.webp"
      }
    ],
    price: {
      original: 1200,
      current: 999
    }
  },
  {
    id: "musculoskeletal-ultrasound",
    slug: "startup-business-team-meeting-modern",
    title: "Musculoskeletal Ultrasound – Applications and Techniques",
    date: "08/06/2024",
    location: "Online on Zoom",
    image: "/events&webinars/msk-ultrasound.webp",
    shortDescription: "Practical knowledge about musculoskeletal ultrasound applications and techniques",
    description: `This webinar aims to provide orthopedic professionals with practical knowledge about the applications, techniques, and benefits of musculoskeletal ultrasound (MSK-US). It will cover the diagnostic and interventional uses of ultrasound for musculoskeletal conditions.`,
    whatYouLearn: [
      "Gain a foundational understanding of how musculoskeletal ultrasound works and its applications in orthopedic practice",
      "Learn to identify common musculoskeletal conditions using ultrasound",
      "Understand how to use ultrasound for guided interventional procedures",
      "Acquire practical knowledge of scanning techniques for various joints and soft tissues"
    ],
    eventContent: [
      "Introduction to Musculoskeletal Ultrasound",
      "Basic Ultrasound Physics and Technology",
      "Applications of Musculoskeletal Ultrasound",
      "Hands-on Techniques: A Step-by-Step Approach",
      "Common Clinical Scenarios and Case Studies",
      "Advances in Musculoskeletal Ultrasound"
    ],
    speakers: [
      {
        name: "Dr Sandeep Gupta",
        title: "Orthopaedic/Arthroplasty & Arthroscopy",
        image: "/events&webinars/sandeep_gupta.webp"
      }
    ],
    price: {
      original: 1200,
      current: 999
    }
  }
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(event => event.slug === slug);
}

export function getAllEvents(): Event[] {
  return events;
}
