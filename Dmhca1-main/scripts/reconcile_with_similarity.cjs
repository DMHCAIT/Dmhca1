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
  $('a').each((i, el)=>{
    const href = $(el).attr('href') || ''
    const text = $(el).text().trim()
    if(href.includes('/courses/') && text.length>5){
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

function levenshteinDistance(a, b){
  const an = a.length, bn = b.length
  const dp = Array(bn+1).fill(null).map(()=>Array(an+1).fill(0))
  for(let i=0;i<=an;i++) dp[0][i]=i
  for(let j=0;j<=bn;j++) dp[j][0]=j
  for(let j=1;j<=bn;j++){
    for(let i=1;i<=an;i++){
      if(a[i-1]===b[j-1]) dp[j][i]=dp[j-1][i-1]
      else dp[j][i]=1+Math.min(dp[j-1][i],dp[j][i-1],dp[j-1][i-1])
    }
  }
  return dp[bn][an]
}

function titleSimilarity(t1, t2){
  const n1 = t1.toLowerCase().replace(/[^a-z0-9]/g,' ').trim()
  const n2 = t2.toLowerCase().replace(/[^a-z0-9]/g,' ').trim()
  const dist = levenshteinDistance(n1, n2)
  const maxLen = Math.max(n1.length, n2.length)
  return 1 - (dist / Math.max(maxLen, 10))
}

;(async ()=>{
  try{
    const base = 'https://dmhca.in/top-medical-courses/'
    let page = 1
    const live = []
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
      for(const e of entries) live.push(e)
      page++
      if(page>20) break
    }

    console.log('live entries fetched:', live.length)

    const coursesPath = path.join(__dirname,'..','src','data','courses.tsx')
    let coursesSrc = fs.readFileSync(coursesPath,'utf8')

    // extract current local courses
    const localCourses = []
    const courseRegex = /slug:\s*['"]([^'"]+)['"][^}]*?program:\s*['"]([^'"]+)['"]/g
    let m
    while((m = courseRegex.exec(coursesSrc))){
      localCourses.push({slug: m[1], program: m[2]})
    }
    console.log('local courses found:', localCourses.length)

    // find unmapped courses
    const mapped = new Set(live.map(e=>e.slug))
    const unmapped = localCourses.filter(c => !mapped.has(c.slug))
    console.log('unmapped local courses:', unmapped.length)

    let updated = 0
    for(const local of unmapped){
      let best = null
      let bestScore = 0.65  // min threshold
      for(const liveEntry of live){
        const score = titleSimilarity(local.slug, liveEntry.slug)
        if(score > bestScore){
          bestScore = score
          best = liveEntry
        }
      }
      if(best){
        console.log(`  matched ${local.slug} -> ${best.slug} (${best.program}, score ${bestScore.toFixed(2)})`)
        const esc = local.slug.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')
        const re = new RegExp("(slug:\\s*'"+esc+"'[\\s\\S]*?program:\\s*')([A-Za-z ]+)(')", 'm')
        if(re.test(coursesSrc)){
          coursesSrc = coursesSrc.replace(re, (match, p, old, q)=>{
            if(old !== best.program){ updated++; return p+best.program+q }
            return match
          })
        }
      }
    }

    if(updated>0){
      fs.writeFileSync(coursesPath, coursesSrc, 'utf8')
      console.log('\nupdated', updated, 'courses in', coursesPath)
    } else console.log('\nno additional updates from similarity matching')

    const {execSync} = require('child_process')
    execSync('node scripts/classifyCourses.cjs', {stdio:'inherit'})
    execSync('npm run build --silent', {stdio:'inherit'})

  }catch(err){
    console.error(err)
    process.exit(1)
  }
})()
