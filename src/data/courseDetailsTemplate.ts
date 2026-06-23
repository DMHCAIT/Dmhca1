/**
 * COURSE DETAILS STRUCTURE - IMPLEMENTATION GUIDE
 * 
 * This template shows the proper structure for adding complete course details
 * including overview, learning outcomes, curriculum, instructors, and FAQs.
 * 
 * Every course should follow this structure to provide comprehensive information
 * to students.
 */

import { Course } from './courses';

/**
 * TEMPLATE: Complete Course Details Structure
 * Copy this template and fill in the details for each course
 */

export const courseDetailTemplate: Partial<Course> = {
  slug: "course-slug-here",
  title: "Course Title Here",
  
  // ============================================
  // 1. COURSE OVERVIEW SECTION
  // ============================================
  overview: `Brief description of the course in 2-3 sentences explaining what the course covers and its relevance.`,
  
  // ============================================
  // 2. WHAT YOU WILL LEARN SECTION
  // ============================================
  learn: [
    "Key learning outcome 1 - describe what students will be able to do",
    "Key learning outcome 2 - describe what students will be able to do",
    "Key learning outcome 3 - describe what students will be able to do",
    "Key learning outcome 4 - describe what students will be able to do",
    "Key learning outcome 5 - describe what students will be able to do",
    "Key learning outcome 6 - describe what students will be able to do",
  ],
  
  // ============================================
  // 3. REQUIREMENTS/PREREQUISITES SECTION
  // ============================================
  requirements: [
    "MBBS or equivalent medical qualification",
    "Minimum 2 years clinical experience",
    "Basic knowledge of relevant subject",
    "English language proficiency",
  ],
  
  // ============================================
  // 4. CURRICULUM WITH MODULES AND SUB-MODULES
  // ============================================
  // Module titles (simplified display)
  modules: [
    "Module 1: Foundation & Basics",
    "Module 2: Clinical Theory",
    "Module 3: Practical Applications",
    "Module 4: Advanced Topics",
    "Module 5: Case Studies & Practice",
    "Module 6: Assessment & Certification",
  ],
  
  // Detailed sub-topics/lessons for each module
  moduleDetails: [
    // Module 1 Sub-topics
    [
      "Introduction to the subject",
      "Historical perspective and evolution",
      "Current trends and developments",
      "Key terminology and concepts",
      "Fundamentals and core principles",
    ],
    // Module 2 Sub-topics
    [
      "Clinical theory foundation",
      "Diagnostic methods and approaches",
      "Treatment modalities",
      "Evidence-based practice",
      "Clinical guidelines and protocols",
    ],
    // Module 3 Sub-topics
    [
      "Hands-on practical sessions",
      "Case analysis and discussions",
      "Simulation and scenario-based learning",
      "Real-world application examples",
      "Best practices and techniques",
    ],
    // Module 4 Sub-topics
    [
      "Advanced theoretical concepts",
      "Research and recent discoveries",
      "Complex case management",
      "Emerging technologies",
      "Future perspectives",
    ],
    // Module 5 Sub-topics
    [
      "Case review and analysis",
      "Problem-solving exercises",
      "Group discussions",
      "Practical demonstrations",
      "Performance assessment",
    ],
    // Module 6 Sub-topics
    [
      "Final examination preparation",
      "Certification requirements",
      "Assessment criteria",
      "Passing standards",
      "Post-certification support",
    ],
  ],
  
  // ============================================
  // 5. INSTRUCTORS/FACULTY SECTION
  // ============================================
  trainers: [
    {
      name: "Dr. Instructor Name 1",
      title: "Professor & Course Lead",
      specialization: "Specialization Area",
      bio: "Brief biography with years of experience, achievements, and expertise. 2-3 sentences maximum.",
      image: "/instructors/instructor1.jpg",
      qualifications: [
        "MD/DNB in Specialization",
        "Fellowship in Advanced Studies",
        "Board Certification",
      ],
      experience: "20+ years of clinical and teaching experience",
    },
    {
      name: "Dr. Instructor Name 2",
      title: "Associate Professor",
      specialization: "Specialization Area",
      bio: "Brief biography highlighting their expertise and teaching approach.",
      image: "/instructors/instructor2.jpg",
      qualifications: [
        "MD in Specialization",
        "Post-doctoral fellowship",
      ],
      experience: "15+ years of clinical experience",
    },
    {
      name: "Dr. Instructor Name 3",
      title: "Guest Faculty",
      specialization: "Specific Topic Area",
      bio: "Brief biography about their expertise in their specific area.",
      image: "/instructors/instructor3.jpg",
      qualifications: [
        "DNB in Specialization",
      ],
      experience: "10+ years of clinical practice",
    },
  ],
  
  // ============================================
  // 6. FREQUENTLY ASKED QUESTIONS SECTION
  // ============================================
  faqs: [
    {
      q: "Who is eligible to enroll in this course?",
      a: "The course is designed for MBBS graduates, MD/DNB specialists, and other healthcare professionals with relevant qualifications. Specific prerequisites include: [List specific requirements]. Prior experience in [relevant area] is beneficial but not mandatory.",
      category: "Eligibility",
    },
    {
      q: "What is the total duration of the course?",
      a: "The course spans [X weeks/months] and includes [X weeks of] classroom sessions, practical training, case studies, and final assessment. Students are expected to complete [X hours per week] of study including both supervised and self-directed learning.",
      category: "Duration",
    },
    {
      q: "What is the course fee and are there payment options?",
      a: "The total course fee is [Amount]. We offer flexible payment options including: full payment upfront with [discount], installment plan over [duration], and corporate batch discounts. Please contact our enrollment team for specific details.",
      category: "Fees",
    },
    {
      q: "Will I receive a certificate upon completion?",
      a: "Yes, upon successful completion of the course and passing the final assessment, you will receive a [type of] Certificate from DMHCA. The certificate is recognized and valued by [relevant bodies/institutions].",
      category: "Certificate",
    },
    {
      q: "What is the course delivery method?",
      a: "The course combines [Online/In-person/Hybrid] learning. Sessions include live interactive lectures, recorded content for flexible learning, practical demonstrations, case discussions, and [other teaching methods]. All materials are accessible via our learning management system.",
      category: "Format",
    },
    {
      q: "Can I study at my own pace?",
      a: "The course follows a structured schedule with live sessions on [specific days/times]. While some content is available on-demand, core teaching sessions are conducted live to ensure interaction with faculty and peers. Course completion timeline: [Duration].",
      category: "Learning Style",
    },
    {
      q: "What are the career prospects after completion?",
      a: "Graduates can pursue careers as: [List career options]. The course opens doors to [opportunities], positions in [type of institutions], and [other career paths]. Alumni have successfully transitioned to [specific roles/institutions].",
      category: "Career",
    },
    {
      q: "What technical requirements do I need?",
      a: "For online/hybrid sessions, you will need: [List requirements]. Minimum system specifications: [OS, RAM, internet speed]. We recommend using a laptop/desktop for optimal learning experience. Technical support is available from our team.",
      category: "Technical",
    },
    {
      q: "Is there a job placement assistance?",
      a: "Yes, DMHCA provides [career support/job placement services]. We maintain relationships with [institutions/employers] and actively assist graduates with [specific support]. Career counseling is available throughout and after the course.",
      category: "Placement",
    },
    {
      q: "Can I defer my admission?",
      a: "Course deferment may be available based on specific circumstances. Please contact our admissions team to discuss deferment options. Standard deferment period is [duration]. Refund and transfer policies apply as per our terms.",
      category: "Admission",
    },
  ],
  
  // ============================================
  // 7. REVIEWS & TESTIMONIALS
  // ============================================
  reviews: [
    {
      studentName: "Dr. Amit Singh",
      studentImage: "/reviews/student1.jpg",
      rating: 5,
      title: "Exceptional Learning Experience",
      comment: "This fellowship program exceeded all my expectations. The faculty were incredibly knowledgeable and supportive. The practical hands-on training with real cases was invaluable. Highly recommend to anyone looking to master this specialty.",
      date: "June 2024",
      verified: true,
      helpful: 24,
    },
    {
      studentName: "Dr. Priya Verma",
      studentImage: "/reviews/student2.jpg",
      rating: 5,
      title: "Best Professional Development Investment",
      comment: "The curriculum is well-structured and the instructors bring real-world experience to every session. I felt well-prepared after completing the course. The support team was responsive to all queries. Worth every penny!",
      date: "May 2024",
      verified: true,
      helpful: 18,
    },
    {
      studentName: "Dr. Rajesh Kumar",
      rating: 4,
      title: "Great Content, Highly Recommended",
      comment: "Comprehensive course with excellent faculty. The modules are well-organized and the learning material is current. Some topics could use more practical examples but overall a solid program.",
      date: "April 2024",
      verified: true,
      helpful: 12,
    },
    {
      studentName: "Dr. Neha Sharma",
      rating: 5,
      title: "Life-Changing Program",
      comment: "This course transformed my career. The knowledge and skills I gained have been instrumental in my professional growth. The networking opportunities with fellow students and faculty are invaluable.",
      date: "March 2024",
      verified: true,
      helpful: 15,
    },
  ],
  
  // ============================================
  // 8. METADATA
  // ============================================
  meta: {
    duration: "52 weeks / 12 months",
    level: "Advanced / Intermediate / Beginner",
    language: "English",
    certificate: "yes",
    maxStudents: "25",
    startDate: "Month, Year",
    batchType: "Online / In-person / Hybrid",
    creditsIfApplicable: "Yes",
  },
};

/**
 * INSTRUCTIONS FOR IMPLEMENTATION:
 * 
 * 1. OVERVIEW SECTION:
 *    - Write a compelling 2-3 sentence overview of what the course covers
 *    - Focus on the main learning objectives and relevance
 * 
 * 2. LEARNING OUTCOMES (learn array):
 *    - List 5-8 key things students will learn
 *    - Use action verbs (learn, understand, apply, analyze, etc.)
 *    - Make each point specific and measurable
 * 
 * 3. REQUIREMENTS:
 *    - List educational prerequisites (MBBS, MD, etc.)
 *    - Experience requirements (years of practice)
 *    - Knowledge prerequisites
 *    - Any other requirements
 * 
 * 4. CURRICULUM STRUCTURE:
 *    - Create 5-8 main modules with clear titles
 *    - For each module, list 5-8 specific topics/sub-modules
 *    - Organize from foundational to advanced concepts
 *    - Ensure progressive learning path
 * 
 * 5. INSTRUCTORS:
 *    - Add 2-4 main faculty members
 *    - Include name, title, specialization
 *    - Write brief bio (2-3 sentences)
 *    - List qualifications and experience
 *    - Add professional photo if available
 * 
 * 6. FREQUENTLY ASKED QUESTIONS:
 *    - Include 8-10 most common questions
 *    - Provide comprehensive, helpful answers
 *    - Categorize questions (Eligibility, Duration, Fees, etc.)
 *    - Address student concerns and uncertainties
 * 
 * 7. REVIEWS & TESTIMONIALS:
 *    - Include 3-5 genuine student reviews
 *    - Each review should include: name, rating (1-5), title, comment
 *    - Add verification status if student completed the course
 *    - Include student images if available
 *    - Reviews build trust and credibility
 *    - Display average rating and rating distribution
 * 
 * 8. METADATA:
 *    - Fill in all relevant course information
 *    - Duration, level, language, certificate status
 *    - Maximum students, start dates, batch type
 * 
 * TIPS FOR BETTER CONTENT:
 * - Be specific: Use concrete examples and numbers
 * - Use clear language: Avoid jargon, explain technical terms
 * - Be comprehensive: Cover what, who, why, when, how
 * - Update regularly: Keep information current and accurate
 * - Use formatting: Break long text into bullets and paragraphs
 * - Be consistent: Follow the same style across all courses
 * - Collect real reviews: Use genuine student testimonials
 * - Encourage feedback: Make review submission easy for students
 */

/**
 * QUICK CHECKLIST FOR EACH COURSE:
 * 
 * Course Overview:
 * ☐ Clear and compelling description
 * ☐ Mentions main topics
 * ☐ Highlights relevance and value
 * 
 * Learning Outcomes:
 * ☐ 5-8 specific outcomes
 * ☐ Action-oriented language
 * ☐ Covers theory and practice
 * 
 * Requirements:
 * ☐ Educational prerequisites
 * ☐ Experience requirements
 * ☐ Any prerequisites mentioned
 * 
 * Curriculum:
 * ☐ 5-8 modules
 * ☐ Clear progression
 * ☐ 5-8 topics per module
 * ☐ Balance of theory and practice
 * 
 * Instructors:
 * ☐ 2-4 faculty members
 * ☐ Relevant qualifications
 * ☐ Professional bios
 * ☐ Profile photos
 * 
 * FAQs:
 * ☐ 8-10 questions
 * ☐ Comprehensive answers
 * ☐ Addresses key concerns
 * ☐ Organized by category
 * 
 * Metadata:
 * ☐ All fields completed
 * ☐ Accurate information
 * ☐ Consistent with content
 */
