/**
 * Comprehensive Course Details Structure
 * This file defines the complete structure for all course detail sections
 */

export interface CourseOverview {
  title: string;
  description: string;
  keyHighlights?: string[];
}

export interface LearningOutcome {
  title: string;
  description: string;
  icon?: string;
}

export interface SubModule {
  title: string;
  description?: string;
  topics?: string[];
  duration?: string;
}

export interface CurriculumModule {
  moduleNumber: number;
  title: string;
  description?: string;
  duration?: string;
  topics?: string[];
  subModules?: SubModule[];
}

export interface Instructor {
  id?: string;
  name: string;
  title?: string;
  specialization?: string;
  bio?: string;
  image?: string;
  qualifications?: string[];
  experience?: string;
  email?: string;
  phone?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CourseRequirement {
  title: string;
  description?: string;
}

export interface CourseReview {
  id?: string;
  studentName: string;
  studentImage?: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  date: string; // ISO date or formatted date
  verified?: boolean; // Whether student completed course
  helpful?: number; // Number of helpful votes
}

export interface CourseDetails {
  // Basic Information
  slug: string;
  title: string;
  shortDescription?: string;
  longDescription?: string;
  
  // Overview Section
  overview: CourseOverview;
  
  // What You Will Learn Section
  learningOutcomes: LearningOutcome[];
  
  // Requirements
  prerequisites?: CourseRequirement[];
  
  // Curriculum Section
  curriculum: CurriculumModule[];
  
  // Instructors Section
  instructors: Instructor[];
  
  // FAQs Section
  faqs: FAQItem[];
  
  // Reviews Section
  reviews?: CourseReview[];
  
  // Meta Information
  meta?: {
    duration?: string;
    level?: string;
    language?: string;
    certificate?: boolean;
    price?: number;
    currency?: string;
    startDate?: string;
    endDate?: string;
    maxStudents?: number;
    tags?: string[];
    [key: string]: any;
  };
}

export interface CourseDetailsSections {
  overview: CourseOverview;
  learningOutcomes: LearningOutcome[];
  curriculum: CurriculumModule[];
  instructors: Instructor[];
  faqs: FAQItem[];
  prerequisites?: CourseRequirement[];
}
