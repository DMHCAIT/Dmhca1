// City-wise courses data for dynamic page generation
export interface CityWiseCourse {
  specialty: string;
  city: string;
  slug: string;
  description: string;
  fees: string;
}

export const cityWiseCourses: CityWiseCourse[] = [
  // Radiology Courses
  { specialty: "Radiology", city: "Delhi", slug: "radiology-courses/delhi", description: "Delhi is home to some of India's best medical colleges and hospitals, making it ideal for pursuing radiology courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Kerala", slug: "radiology-courses/kerala", description: "Kerala offers excellent opportunities for students aspiring to specialize in radiology with its advanced healthcare infrastructure.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Assam", slug: "radiology-courses/assam", description: "Assam has emerged as a hub for medical education with quality radiology programs and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Tamilnadu", slug: "radiology-courses/tamilnadu", description: "Tamilnadu offers comprehensive radiology courses with state-of-the-art diagnostic equipment and training.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Coimbatore", slug: "radiology-courses/coimbatore", description: "Coimbatore is known for its quality medical education and excellent radiology training programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Odisha", slug: "radiology-courses/odisha", description: "Odisha provides quality radiology courses with hands-on training and modern medical facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Bangalore", slug: "radiology-courses/bangalore", description: "Bangalore is a leading hub for radiology education with advanced technology and experienced professionals.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Guwahati", slug: "radiology-courses/guwahati", description: "Guwahati offers excellent radiology courses with modern diagnostic imaging facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Kolkata", slug: "radiology-courses/kolkata", description: "Kolkata has a strong tradition in medical education with quality radiology programs and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Hyderabad", slug: "radiology-courses/hyderabad", description: "Hyderabad is a major center for medical education offering comprehensive radiology specialization courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Patna", slug: "radiology-courses/patna", description: "Patna provides quality radiology education with modern equipment and skilled instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Bhubaneswar", slug: "radiology-courses/bhubaneswar", description: "Bhubaneswar offers excellent radiology training programs with modern diagnostic centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Dehradun", slug: "radiology-courses/dehradun", description: "Dehradun is home to quality medical institutions offering comprehensive radiology courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Lucknow", slug: "radiology-courses/lucknow", description: "Lucknow provides excellent opportunities for radiology specialization with modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Raipur", slug: "radiology-courses/raipur", description: "Raipur offers quality radiology courses with hands-on training and modern equipment.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "West Bengal", slug: "radiology-courses/west-bengal", description: "West Bengal has established medical institutions offering radiology specialization courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Jaipur", slug: "radiology-courses/jaipur", description: "Jaipur is an emerging hub for medical education with quality radiology programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Chennai", slug: "radiology-courses/chennai", description: "Chennai offers world-class radiology courses with advanced diagnostic imaging technology.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Calicut", slug: "radiology-courses/calicut", description: "Calicut provides quality radiology education with experienced faculty and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Chhattisgarh", slug: "radiology-courses/chhattisgarh", description: "Chhattisgarh offers comprehensive radiology training programs with modern equipment.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Madurai", slug: "radiology-courses/madurai", description: "Madurai provides quality radiology courses with experienced professionals and modern facilities.", fees: "₹50,000 to ₹3,00,000" },

  // Cardiology Courses
  { specialty: "Cardiology", city: "Delhi", slug: "cardiology-courses/delhi", description: "Delhi is home to some of India's best medical colleges, universities, and hospitals, making it an ideal location for pursuing cardiology.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Kerala", slug: "cardiology-courses/kerala", description: "Kerala offers excellent opportunities for students aspiring to specialize in cardiology with world-class healthcare infrastructure.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Chennai", slug: "cardiology-courses/chennai", description: "Chennai is a leading center for cardiology education and training with advanced cardiac facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Bangalore", slug: "cardiology-courses/bangalore", description: "Bangalore offers comprehensive cardiology courses with state-of-the-art cardiac care centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Hyderabad", slug: "cardiology-courses/hyderabad", description: "Hyderabad is known for its advanced cardiac institutes and quality cardiology training programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Mumbai", slug: "cardiology-courses/mumbai", description: "Mumbai offers excellent cardiology specialization with access to leading cardiac hospitals.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Kolkata", slug: "cardiology-courses/kolkata", description: "Kolkata has established cardiology centers offering quality training and education.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Tamilnadu", slug: "cardiology-courses/tamilnadu", description: "Tamilnadu provides comprehensive cardiology courses with modern diagnostic and treatment facilities.", fees: "₹50,000 to ₹3,00,000" },

  // Cosmetology Courses
  { specialty: "Cosmetology", city: "Delhi", slug: "cosmetology-courses/delhi", description: "Delhi offers diverse cosmetology courses with state-of-the-art training facilities and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Mumbai", slug: "cosmetology-courses/mumbai", description: "Mumbai is a leading hub for cosmetology education with world-class training programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Bangalore", slug: "cosmetology-courses/bangalore", description: "Bangalore offers comprehensive cosmetology courses with modern techniques and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Chennai", slug: "cosmetology-courses/chennai", description: "Chennai provides quality cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Pune", slug: "cosmetology-courses/pune", description: "Pune offers excellent cosmetology training with experienced professionals and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Kerala", slug: "cosmetology-courses/kerala", description: "Kerala provides quality cosmetology courses with emphasis on natural and advanced techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Hyderabad", slug: "cosmetology-courses/hyderabad", description: "Hyderabad offers comprehensive cosmetology training with modern equipment and skilled instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Kolkata", slug: "cosmetology-courses/kolkata", description: "Kolkata provides professional cosmetology courses with practical experience and certification.", fees: "₹50,000 to ₹3,00,000" },

  // Emergency Medicine Courses
  { specialty: "Emergency Medicine", city: "Delhi", slug: "emergency-medicine-courses/delhi", description: "Delhi offers comprehensive emergency medicine courses with training in leading trauma centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Mumbai", slug: "emergency-medicine-courses/mumbai", description: "Mumbai provides quality emergency medicine training with exposure to diverse patient populations.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Bangalore", slug: "emergency-medicine-courses/bangalore", description: "Bangalore offers excellent emergency medicine courses with hands-on clinical experience.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Hyderabad", slug: "emergency-medicine-courses/hyderabad", description: "Hyderabad provides comprehensive emergency medicine training with modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Chennai", slug: "emergency-medicine-courses/chennai", description: "Chennai offers quality emergency medicine education with experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Kolkata", slug: "emergency-medicine-courses/kolkata", description: "Kolkata provides emergency medicine courses with practical training in emergency departments.", fees: "₹50,000 to ₹3,00,000" },
];

export function getCoursesBySpecialty(specialty: string): CityWiseCourse[] {
  return cityWiseCourses.filter(
    (course) => course.specialty.toLowerCase() === specialty.toLowerCase()
  );
}

export function getCourseBySlug(slug: string): CityWiseCourse | undefined {
  return cityWiseCourses.find((course) => course.slug === slug);
}

export function getAllSpecialties(): string[] {
  const specialties = new Set(cityWiseCourses.map((course) => course.specialty));
  return Array.from(specialties).sort();
}

export function getCoursesByCity(city: string): CityWiseCourse[] {
  return cityWiseCourses.filter(
    (course) => course.city.toLowerCase() === city.toLowerCase()
  );
}
