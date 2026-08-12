const fs = require('fs')
const courses = require('./src/data/courses.tsx')

// Manually defined list of mismatched course slugs the similarity matcher found
const mismatched = [
  'fellowship-in-clinical-cardiology-v2',
  'certificate-course-in-tuberculosis',
  'certificate-course-in-diabetic-foot-care',
  'certificate-course-in-cosmetology',
  'fellowship-in-general-surgery',
  'certificate-course-in-clinical-nutrition',
  'certificate-course-in-obesity-management'
]

const src = fs.readFileSync('./src/data/courses.tsx', 'utf8')

console.log('=== MISMATCHED COURSES IN LOCAL DATA ===\n')

mismatched.forEach(slug => {
  const regex = new RegExp(`slug:\\s*['"](${slug.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})['"](.*?)program:\\s*['"](.*?)['"]`, 's')
  const m = src.match(regex)
  if(m){
    console.log(`${slug}`)
    console.log(`  Title: ${m[0].match(/title:\\s*['"]([^'"]+)['"]/)?.[1] || 'N/A'}`)
    console.log(`  Program: ${m[3]}`)
  } else {
    console.log(`${slug} - NOT FOUND IN FILE`)
  }
  console.log()
})
