const fs = require('fs')

const src = fs.readFileSync('./src/data/courses.tsx', 'utf8')
const mismatched = [
  'fellowship-in-clinical-cardiology-v2',
  'certificate-course-in-tuberculosis', 
  'certificate-course-in-diabetic-foot-care',
  'certificate-course-in-cosmetology',
  'fellowship-in-general-surgery',
  'certificate-course-in-clinical-nutrition',
  'certificate-course-in-obesity-management'
]

console.log('=== MISMATCHED COURSES ===\n')
mismatched.forEach(slug => {
  const re = new RegExp(`slug:\\s*['"]${slug.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}['"]([\\s\\S]*?)program:\\s*['"]([^'"]+)['"]`, 's')
  const m = src.match(re)
  if(m){
    console.log(`${slug}`)
    console.log(`  Program: ${m[2]}`)
  }
})
