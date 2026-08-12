const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const cheerio = require('cheerio')

async function fetchPage(url){
  const res = await fetch(url)
  if(!res.ok) throw new Error('fetch failed '+url)
  return res.text()
}

function parseEntries(html){
  const $ = cheerio.load(html)
  const items = []
  // select course headings/links in the listing
  $('a').each((i, el)=>{
    const href = $(el).attr('href') || ''
    const text = $(el).text().trim()
    if(href.includes('/courses/') && text.length>5){
      // try to infer program from nearby text
      const parent = $(el).closest('article, .course, .entry, li, .course-item')
      let context = parent.text() || ''
      context = context.replace(/\s+/g,' ')
      let program = null
      if(/\bCertificate\b/i.test(context)) program = 'Certificate'
      else if(/\bPG Diploma\b/i.test(context) || /\bPG\.? Diploma\b/i.test(context)) program = 'PG Diploma'
      else if(/\bFellowship\b/i.test(context)) program = 'Fellowship'
      try{
        const u = new URL(href)
        const parts = u.pathname.split('/').filter(Boolean)
        const slug = parts[parts.length-1]
        if(program) items.push({slug, title:text, program})
      }catch(e){/* ignore */}
    }
  })
  return items
}

;(async ()=>{
  try{
    const base = 'https://dmhca.in/top-medical-courses/'
    let page = 1
    const all = []
    while(true){
      const url = page===1? base : base+'page/'+page+'/'
      let html = null
      try{
        html = await fetchPage(url)
      }catch(err){
        break
      }
      const entries = parseEntries(html)
      if(entries.length===0) break
      for(const e of entries) all.push(e)
      page++
      if(page>20) break
    }

    console.log('live entries fetched:', all.length)

    const coursesPath = path.join(__dirname,'..','src','data','courses.tsx')
    let coursesSrc = fs.readFileSync(coursesPath,'utf8')

    function escapeRegExp(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') }
    let updated = 0
    for(const live of all){
      const slug = live.slug.replace(/\/.*/,'')
      const esc = escapeRegExp(slug)
      const re = new RegExp("(slug:\\s*'"+esc+"'[\\s\\S]*?program:\\s*')([A-Za-z ]+)(')", 'm')
      if(re.test(coursesSrc)){
        coursesSrc = coursesSrc.replace(re, (m,p,old,qq)=>{
          if(old !== live.program){ updated++; return p+live.program+qq }
          return m
        })
      } else {
        const re2 = new RegExp('(slug:\\s*"'+esc+'"[\\s\\S]*?program:\\s*\\\")([A-Za-z ]+)(\\\")', 'm')
        if(re2.test(coursesSrc)){
          coursesSrc = coursesSrc.replace(re2, (m,p,old,qq)=>{
            if(old !== live.program){ updated++; return p+live.program+qq }
            return m
          })
        }
      }
    }

    if(updated>0){
      fs.writeFileSync(coursesPath, coursesSrc, 'utf8')
      console.log('updated', updated, 'courses in', coursesPath)
    } else console.log('no updates needed')

    const {execSync} = require('child_process')
    execSync('node scripts/classifyCourses.cjs', {stdio:'inherit'})
    execSync('npm run build --silent', {stdio:'inherit'})

  }catch(err){
    console.error(err)
    process.exit(1)
  }
})()
