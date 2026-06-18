const fs = require('fs')
const path = require('path')

async function fetchPage(url){
  const res = await fetch(url)
  if(!res.ok) throw new Error('fetch failed '+url)
  return res.text()
}

function parseEntries(html){
  const entries = []
  const regex = /### \s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g
  let m
  while((m = regex.exec(html))){
    const title = m[1].trim()
    const url = m[2]
    try{
      const u = new URL(url)
      const parts = u.pathname.split('/').filter(Boolean)
      const slug = parts[parts.length-1]
      // derive program from title start
      let program = null
      if(/^Certificate/i.test(title)) program = 'Certificate'
      else if(/^PG Diploma/i.test(title)) program = 'PG Diploma'
      else if(/^Fellowship/i.test(title)) program = 'Fellowship'
      else {
        if(title.toLowerCase().includes('certificate')) program = 'Certificate'
        else if(title.toLowerCase().includes('pg diploma')) program = 'PG Diploma'
        else if(title.toLowerCase().includes('fellowship')) program = 'Fellowship'
      }
      if(program) entries.push({slug, title, program})
    }catch(e){/* ignore */}
  }
  return entries
}

;(async ()=>{
  try{
    const base = 'https://dmhca.in/top-medical-courses/'
    let page = 1
    const all = []
    while(true){
      const url = page===1? base : base+'page/'+page+'/'
      const html = await fetchPage(url)
      const entries = parseEntries(html)
      if(entries.length===0) break
      for(const e of entries) all.push(e)
      page++
      if(page>20) break
    }

    console.log('live entries fetched:', all.length)

    const coursesPath = path.join(__dirname,'..','src','data','courses.tsx')
    let coursesSrc = fs.readFileSync(coursesPath,'utf8')

    let updated = 0
    for(const live of all){
      const slug = live.slug.replace(/\/.*/,'')
      const re = new RegExp("(slug:\s*'"+slug+"'[\s\S]*?program:\s*')([A-Za-z ]+)('", 'm')
      if(re.test(coursesSrc)){
        coursesSrc = coursesSrc.replace(re, (m,p,old,qq)=>{
          if(old !== live.program){ updated++; return p+live.program+qq }
          return m
        })
      } else {
        const re2 = new RegExp('(slug:\\s*"'+slug+'"[\\\\s\\\\S]*?program:\\s*\\\")([A-Za-z ]+)(\\\")', 'm')
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
