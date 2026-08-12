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
  { specialty: "Radiology", city: "Kannur", slug: "radiology-courses/kannur", description: "kannur offers excellent radiology training programs with hands-on experience and modern diagnostic tools.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Kolhapur", slug: "radiology-courses/kolhapur", description: "kolhapur is known for its quality medical education and offers comprehensive radiology courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Nashik", slug: "radiology-courses/nashik", description: "Nashik provides quality radiology education with modern diagnostic imaging facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Mangalore", slug: "radiology-courses/mangalore", description: "Mangalore is a leading center for medical education offering comprehensive radiology specialization courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Aurangabad", slug: "radiology-courses/aurangabad", description: "Aurangabad offers excellent radiology courses with hands-on training and modern medical facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Ernakulam", slug: "radiology-courses/ernakulam", description: "Ernakulam provides quality radiology education with experienced faculty and modern diagnostic tools.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Goa", slug: "radiology-courses/goa", description: "Goa is known for its quality medical institutions offering comprehensive radiology courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Gorakhpur", slug: "radiology-courses/gorakhpur", description: "Gorakhpur offers excellent radiology training programs with hands-on experience and modern diagnostic facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Jabalpur", slug: "radiology-courses/jabalpur", description: "Jabalpur provides quality radiology education with modern diagnostic imaging technology and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Indore", slug: "radiology-courses/indore", description: "Indore is a leading hub for medical education offering comprehensive radiology specialization courses.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Jamshedpur", slug: "radiology-courses/jamshedpur", description: "Jamshedpur provides quality radiology courses with hands-on training and modern diagnostic facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Thrissur", slug: "radiology-courses/thrissur", description: "Thrissur offers excellent radiology training programs with experienced faculty and modern diagnostic tools.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Ranchi", slug: "radiology-courses/ranchi", description: "Ranchi provides quality radiology education with modern diagnostic imaging technology and skilled instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Bhopal", slug: "radiology-courses/bhopal", description: "Bhopal is known for its quality medical institutions offering comprehensive radiology courses with hands-on training.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Kollam", slug: "radiology-courses/kollam", description: "Kollam offers excellent radiology training programs with modern diagnostic facilities and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Faridabad", slug: "radiology-courses/faridabad", description: "Faridabad provides quality radiology education with hands-on training and modern diagnostic imaging technology.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Kottayam", slug: "radiology-courses/kottayam", description: "Kottayam is a leading center for medical education offering comprehensive radiology specialization courses with modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Kozhikode", slug: "radiology-courses/kozhikode", description: "Vellore offers excellent radiology training programs with hands-on experience and modern diagnostic tools.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Malappuram", slug: "radiology-courses/malappuram", description: "Malappuram provides quality radiology education with modern diagnostic imaging technology and skilled instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Mysore", slug: "radiology-courses/mysore", description: "Mysore is known for its quality medical institutions offering comprehensive radiology courses with hands-on training.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Radiology", city: "Pondicherry", slug: "radiology-courses/pondicherry", description: "Pondicherry offers excellent radiology training programs with modern diagnostic facilities and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  // Cardiology Courses
  { specialty: "Cardiology", city: "Delhi", slug: "cardiology-courses/delhi", description: "Delhi is home to some of India's best medical colleges, universities, and hospitals, making it an ideal location for pursuing cardiology.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Kerala", slug: "cardiology-courses/kerala", description: "Kerala offers excellent opportunities for students aspiring to specialize in cardiology with world-class healthcare infrastructure.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Chennai", slug: "cardiology-courses/chennai", description: "Chennai is a leading center for cardiology education and training with advanced cardiac facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Bangalore", slug: "cardiology-courses/bangalore", description: "Bangalore offers comprehensive cardiology courses with state-of-the-art cardiac care centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Hyderabad", slug: "cardiology-courses/hyderabad", description: "Hyderabad is known for its advanced cardiac institutes and quality cardiology training programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Mumbai", slug: "cardiology-courses/mumbai", description: "Mumbai offers excellent cardiology specialization with access to leading cardiac hospitals.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Kolkata", slug: "cardiology-courses/kolkata", description: "Kolkata has established cardiology centers offering quality training and education.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Tamilnadu", slug: "cardiology-courses/tamilnadu", description: "Tamilnadu provides comprehensive cardiology courses with modern diagnostic and treatment facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Karnataka", slug: "cardiology-courses/karnataka", description: "Karnataka is a leading hub for cardiology education with advanced cardiac care centers and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Ghaziabad", slug: "cardiology-courses/ghaziabad", description: "Ghaziabad offers quality cardiology courses with hands-on training in leading cardiac hospitals.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Mangaluru", slug: "cardiology-courses/mangaluru", description: "Mangaluru provides excellent cardiology training programs with modern diagnostic and treatment facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Tirunelveli", slug: "cardiology-courses/tirunelveli", description: "Tirunelveli is known for its quality medical institutions offering comprehensive cardiology courses with hands-on training.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Salem", slug: "cardiology-courses/salem", description: "Salem offers excellent cardiology training programs with modern diagnostic facilities and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Madurai", slug: "cardiology-courses/madurai", description: "Madurai provides quality cardiology education with modern diagnostic imaging technology and skilled instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Tiruchirappalli", slug: "cardiology-courses/Tiruchurappalli", description: "Tiruchurappalli is a leading center for medical education offering comprehensive cardiology specialization courses with modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "Kolkata", slug: "cardiology-courses/kolkata", description: "Kolkata offers excellent cardiology training programs with hands-on experience and modern diagnostic tools.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cardiology", city: "West Bengal", slug: "cardiology-courses/west-bengal", description: "West Bengal provides quality cardiology education with modern diagnostic imaging technology and skilled instructors.", fees: "₹50,000 to ₹3,00,000" },
  // Cosmetology Courses
  { specialty: "Cosmetology", city: "Delhi", slug: "cosmetology-courses/delhi", description: "Delhi offers diverse cosmetology courses with state-of-the-art training facilities and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Mumbai", slug: "cosmetology-courses/mumbai", description: "Mumbai is a leading hub for cosmetology education with world-class training programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Bangalore", slug: "cosmetology-courses/bangalore", description: "Bangalore offers comprehensive cosmetology courses with modern techniques and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Chennai", slug: "cosmetology-courses/chennai", description: "Chennai provides quality cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Pune", slug: "cosmetology-courses/pune", description: "Pune offers excellent cosmetology training with experienced professionals and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Kerala", slug: "cosmetology-courses/kerala", description: "Kerala provides quality cosmetology courses with emphasis on natural and advanced techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Hyderabad", slug: "cosmetology-courses/hyderabad", description: "Hyderabad offers comprehensive cosmetology training with modern equipment and skilled instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Kolkata", slug: "cosmetology-courses/kolkata", description: "Kolkata provides professional cosmetology courses with practical experience and certification.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Chandigarh", slug: "cosmetology-courses/chandigarh", description: "Chandigarh offers quality cosmetology education with hands-on training and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Coimbatore", slug: "cosmetology-courses/coimbatore", description: "Coimbatore provides excellent cosmetology training programs with experienced faculty and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Indore", slug: "cosmetology-courses/indore", description: "Indore is known for its quality cosmetology courses with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Cosmetology", city: "Nagpur", slug: "cosmetology-courses/nagpur", description: "Nagpur offers comprehensive cosmetology education with modern techniques and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Amritsar", slug: "cosmetology-courses/amritsar", description: "Amritsar provides quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Bhopal", slug: "cosmetology-courses/bhopal", description: "Bhopal offers excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Jaipur", slug: "cosmetology-courses/jaipur", description: "Jaipur provides comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Jalandhar", slug: "cosmetology-courses/jalandhar", description: "Jalandhar offers quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Kochi", slug: "cosmetology-courses/kochi", description: "Kochi provides excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Lucknow", slug: "cosmetology-courses/lucknow", description: "Lucknow offers comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Noida", slug: "cosmetology-courses/noida", description: "Noida provides quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Ludhiana", slug: "cosmetology-courses/ludhiana", description: "Ludhiana offers excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Surat", slug: "cosmetology-courses/surat", description: "Surat provides comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Gujarat", slug: "cosmetology-courses/gujarat", description: "Gujarat offers quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Gurugram", slug: "cosmetology-courses/gurugram", description: "Gurugram provides excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Calicut", slug: "cosmetology-courses/calicut", description: "Calicut offers comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Dehradun", slug: "cosmetology-courses/dehradun", description: "Dehradun provides quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Nashik", slug: "cosmetology-courses/nashik", description: "Nashik offers excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Tamilnadu", slug: "cosmetology-courses/tamilnadu", description: "Tamilnadu provides comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Thane", slug: "cosmetology-courses/thane", description: "Thane offers quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Dilsukhnagar", slug: "cosmetology-courses/dilsukhnagar", description: "Dilsukhnagar provides excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Kolhapur", slug: "cosmetology-courses/kolhapur", description: "Kolhapur offers comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Raipur", slug: "cosmetology-courses/raipur", description: "Raipur provides quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Silchar", slug: "cosmetology-courses/silchar", description: "Silchar offers excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Kapurthala", slug: "cosmetology-courses/kapurthala", description: "Kapurthala provides comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Patiala", slug: "cosmetology-courses/patiala", description: "Patiala offers quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Patna", slug: "cosmetology-courses/patna", description: "Patna provides excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Uttarakhand", slug: "cosmetology-courses/uttarakhand", description: "Uttarakhand offers comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Vijayawada", slug: "cosmetology-courses/vijayawada", description: "Vijayawada provides quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Vadodara", slug: "cosmetology-courses/vadodara", description: "Vadodara offers excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Goa", slug: "cosmetology-courses/goa", description: "Goa provides comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Guwahati", slug: "cosmetology-courses/guwahati", description: "Guwahati offers quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Kollam", slug: "cosmetology-courses/kollam", description: "Kollam provides excellent cosmetology training programs with experienced faculty and modern techniques.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Visakhapatnam", slug: "cosmetology-courses/visakhapatnam", description: "Visakhapatnam offers comprehensive cosmetology education with practical training and certification programs.", fees: "₹50,000 to ₹3,00,000" },
  {specialty: "Cosmetology", city: "Dombivli", slug: "cosmetology-courses/dombivli", description: "Dombivli provides quality cosmetology courses with hands-on training and modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  // Emergency Medicine Courses
  { specialty: "Emergency Medicine", city: "Delhi", slug: "emergency-medicine-courses/delhi", description: "Delhi offers comprehensive emergency medicine courses with training in leading trauma centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Mumbai", slug: "emergency-medicine-courses/mumbai", description: "Mumbai provides quality emergency medicine training with exposure to diverse patient populations.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Bangalore", slug: "emergency-medicine-courses/bangalore", description: "Bangalore offers excellent emergency medicine courses with hands-on clinical experience.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Hyderabad", slug: "emergency-medicine-courses/hyderabad", description: "Hyderabad provides comprehensive emergency medicine training with modern facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Chennai", slug: "emergency-medicine-courses/chennai", description: "Chennai offers quality emergency medicine education with experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Kolkata", slug: "emergency-medicine-courses/kolkata", description: "Kolkata provides emergency medicine courses with practical training in emergency departments.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Kerala", slug: "emergency-medicine-courses/kerala", description: "Kerala offers comprehensive emergency medicine training with exposure to trauma care and critical care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Ahmedabad", slug: "emergency-medicine-courses/ahmedabad", description: "Ahmedabad provides quality emergency medicine courses with hands-on experience in emergency care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Karnataka", slug: "emergency-medicine-courses/karnataka", description: "Karnataka offers excellent emergency medicine training programs with modern facilities and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Pune", slug: "emergency-medicine-courses/pune", description: "Pune provides comprehensive emergency medicine education with practical training in trauma centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Nashik", slug: "emergency-medicine-courses/nashik", description: "Nashik offers quality emergency medicine courses with hands-on training in emergency departments.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Calicut", slug: "emergency-medicine-courses/calicut", description: "Calicut provides excellent emergency medicine training programs with exposure to trauma care and critical care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Ghaziabad", slug: "emergency-medicine-courses/ghaziabad", description: "Ghaziabad offers comprehensive emergency medicine education with practical training in emergency departments.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Telangana", slug: "emergency-medicine-courses/telangana", description: "Telangana provides quality emergency medicine courses with hands-on experience in trauma centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Tamilnadu", slug: "emergency-medicine-courses/tamilnadu", description: "Tamilnadu offers excellent emergency medicine training programs with modern facilities and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Andhra Pradesh", slug: "emergency-medicine-courses/andhra-pradesh", description: "Andhra Pradesh provides comprehensive emergency medicine education with practical training in emergency departments.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Mysuru", slug: "emergency-medicine-courses/mysuru", description: "Mysuru offers quality emergency medicine courses with hands-on experience in trauma care and critical care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Nagpur", slug: "emergency-medicine-courses/nagpur", description: "Nagpur provides excellent emergency medicine training programs with exposure to emergency care and critical care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Vijayawada", slug: "emergency-medicine-courses/vijayawada", description: "Vijayawada offers comprehensive emergency medicine education with practical training in trauma centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Emergency Medicine", city: "Kottayam", slug: "emergency-medicine-courses/kottayam", description: "Kottayam provides quality emergency medicine courses with hands-on experience in emergency departments.", fees: "₹50,000 to ₹3,00,000" },
// Embryology Courses
  { specialty: "Embryology", city: "Delhi", slug: "embryology-courses/delhi", description: "Delhi offers comprehensive embryology courses with training in leading research centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Mumbai", slug: "embryology-courses/mumbai", description: "Mumbai provides quality embryology training with exposure to advanced laboratory techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Bangalore", slug: "embryology-courses/bangalore", description: "Bangalore offers excellent embryology courses with hands-on laboratory experience.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Hyderabad", slug: "embryology-courses/hyderabad", description: "Hyderabad provides comprehensive embryology training with modern laboratory facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Chennai", slug: "embryology-courses/chennai", description: "Chennai offers quality embryology education with experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Kolkata", slug: "embryology-courses/kolkata", description: "Kolkata provides embryology courses with practical training in advanced laboratories.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Kerala", slug: "embryology-courses/kerala", description: "Kerala offers comprehensive embryology training with exposure to cutting-edge research and laboratory techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Ahmedabad", slug: "embryology-courses/ahmedabad", description: "Ahmedabad provides quality embryology courses with hands-on experience in advanced laboratory settings.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Mysore", slug: "embryology-courses/mysore", description: "Mysore offers excellent embryology training programs with modern laboratory facilities and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Pune", slug: "embryology-courses/pune", description: "Pune provides comprehensive embryology education with practical training in advanced research laboratories.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Jaipur", slug: "embryology-courses/jaipur", description: "Jaipur offers quality embryology courses with hands-on training in advanced laboratory techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Chettinad", slug: "embryology-courses/chettinad", description: "Chettinad provides excellent embryology training programs with exposure to cutting-edge research and laboratory facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Kolhapur", slug: "embryology-courses/kolhapur", description: "Kolhapur offers comprehensive embryology education with practical training in advanced research laboratories.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Tamilnadu", slug: "embryology-courses/tamilnadu", description: "Tamilnadu provides quality embryology courses with hands-on experience in advanced laboratory settings.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Lucknow", slug: "embryology-courses/lucknow", description: "Lucknow offers excellent embryology training programs with modern laboratory facilities and experienced faculty.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Chengalpattu", slug: "embryology-courses/chengalpattu", description: "Chengalpattu provides comprehensive embryology education with practical training in advanced research laboratories.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Gujarat", slug: "embryology-courses/gujarat", description: "Gujarat offers quality embryology courses with hands-on experience in advanced laboratory techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Maharashtra", slug: "embryology-courses/maharashtra", description: "Maharashtra provides excellent embryology training programs with exposure to cutting-edge research and laboratory facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Kochi", slug: "embryology-courses/kochi", description: "Kochi offers comprehensive embryology education with practical training in advanced research laboratories.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Surat", slug: "embryology-courses/surat", description: "Surat provides quality embryology courses with hands-on experience in advanced laboratory settings.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Coimbatore", slug: "embryology-courses/coimbatore", description: "Coimbatore offers excellent embryology training programs with modern laboratory facilities and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Embryology", city: "Goa", slug: "embryology-courses/goa", description: "Goa provides comprehensive embryology education with practical training in advanced research laboratories.", fees: "₹50,000 to ₹3,00,000" },
// Oncology Courses
  { specialty: "Oncology", city: "Delhi", slug: "oncology-courses/delhi", description: "Delhi offers comprehensive oncology courses with training in leading cancer research centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Mumbai", slug: "oncology-courses/mumbai", description: "Mumbai provides quality oncology training with exposure to advanced cancer treatment techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Nagpur", slug: "oncology-courses/nagpur", description: "Nagpur offers excellent oncology courses with hands-on clinical experience in cancer care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Chandigarh", slug: "oncology-courses/chandigarh", description: "Chandigarh provides comprehensive oncology training with modern cancer treatment facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Chennai", slug: "oncology-courses/chennai", description: "Chennai offers quality oncology education with experienced faculty and access to leading cancer hospitals.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Kolkata", slug: "oncology-courses/kolkata", description: "Kolkata provides oncology courses with practical training in advanced cancer treatment centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Kerala", slug: "oncology-courses/kerala", description: "Kerala offers comprehensive oncology training with exposure to cutting-edge cancer research and treatment techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Tamilnadu", slug: "oncology-courses/tamilnadu", description: "Tamilnadu provides quality oncology courses with hands-on experience in advanced cancer care facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Bangalore", slug: "oncology-courses/bangalore", description: "Bangalore offers excellent oncology training programs with modern cancer treatment facilities and experienced instructors.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Oncology", city: "Karnataka", slug: "oncology-courses/karnataka", description: "Karnataka provides comprehensive oncology education with practical training in advanced cancer research laboratories.", fees: "₹50,000 to ₹3,00,000" },
//Clinical Cardiology Courses
  { specialty: "Clinical Cardiology", city: "Delhi", slug: "clinical-cardiology-courses/delhi", description: "Delhi offers comprehensive clinical cardiology courses with training in leading cardiac centers.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Clinical Cardiology", city: "Mumbai", slug: "clinical-cardiology-courses/mumbai", description: "Mumbai provides quality clinical cardiology training with exposure to advanced cardiac treatment techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Clinical Cardiology", city: "Kolkata", slug: "clinical-cardiology-courses/kolkata", description: "Kolkata offers excellent clinical cardiology courses with hands-on clinical experience in cardiac care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Clinical Cardiology", city: "Jaipur", slug: "clinical-cardiology-courses/jaipur", description: "Jaipur provides comprehensive clinical cardiology training with modern cardiac facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Clinical Cardiology", city: "Kerala", slug: "clinical-cardiology-courses/kerala", description: "Kerala offers quality clinical cardiology education with experienced faculty and access to leading cardiac hospitals.", fees: "₹50,000 to ₹3,00,000" },
// Critical Care Medicine Courses
  { specialty: "Critical Care Medicine", city: "Lucknow", slug: "critical-care-medicine-courses/lucknow", description: "Lucknow offers comprehensive critical care medicine courses with training in leading intensive care units.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Critical Care Medicine", city: "Kerala", slug: "critical-care-medicine-courses/kerala", description: "Kerala provides quality critical care medicine training with exposure to advanced life support techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Critical Care Medicine", city: "West Bengal", slug: "critical-care-medicine-courses/west-bengal", description: "West Bengal offers excellent critical care medicine courses with hands-on clinical experience in intensive care units.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Critical Care Medicine", city: "Hyderabad", slug: "critical-care-medicine-courses/hyderabad", description: "Hyderabad provides comprehensive critical care medicine training with modern intensive care facilities.", fees: "₹50,000 to ₹3,00,000" },
// Paediatrics Courses
  { specialty: "Paediatrics", city: "Delhi", slug: "paediatrics-courses/delhi", description: "Delhi offers comprehensive paediatrics courses with training in leading children's hospitals.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Paediatrics", city: "Mumbai", slug: "paediatrics-courses/mumbai", description: "Mumbai provides quality paediatrics training with exposure to advanced child healthcare techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Paediatrics", city: "Tamilnadu", slug: "paediatrics-courses/tamilnadu", description: "Tamilnadu offers excellent paediatrics courses with hands-on clinical experience in child care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Paediatrics", city: "Vijayawada", slug: "paediatrics-courses/vijayawada", description: "Vijayawada provides comprehensive paediatrics training with modern child healthcare facilities.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Paediatrics", city: "Kolkata", slug: "paediatrics-courses/kolkata", description: "Kolkata offers quality paediatrics education with experienced faculty and access to leading children's hospitals.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Paediatrics", city: "Kerala", slug: "paediatrics-courses/kerala", description: "Kerala provides comprehensive paediatrics training with exposure to advanced child healthcare techniques.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Paediatrics", city: "Telangana", slug: "paediatrics-courses/telangana", description: "Telangana offers excellent paediatrics courses with hands-on clinical experience in child care.", fees: "₹50,000 to ₹3,00,000" },
  // Obstetrics and Gynecology Courses - Only Tamilnadu and Hyderabad
  { specialty: "Obstetrics and Gynecology", city: "Tamilnadu", slug: "obstetrics-and-gynecology-courses/tamilnadu", description: "Tamilnadu offers excellent obstetrics and gynecology courses with hands-on clinical experience in maternal care.", fees: "₹50,000 to ₹3,00,000" },
  { specialty: "Obstetrics and Gynecology", city: "Hyderabad", slug: "obstetrics-and-gynecology-courses/hyderabad", description: "Hyderabad offers excellent obstetrics and gynecology courses with hands-on clinical experience in maternity care.", fees: "₹50,000 to ₹3,00,000" },
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
