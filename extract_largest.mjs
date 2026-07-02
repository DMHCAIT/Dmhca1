import fs from 'fs';
import readline from 'readline';

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

let codeBlocks = [];

const readStream = fs.createReadStream(transcriptFile, { encoding: 'utf8' });
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  try {
    const data = JSON.parse(line);
    
    if (data.data && data.data.toolRequests && Array.isArray(data.data.toolRequests)) {
      data.data.toolRequests.forEach((req) => {
        if (req.name === 'replace_string_in_file' && req.arguments) {
          let args = req.arguments;
          
          if (typeof args === 'string') {
            try {
              args = JSON.parse(args);
            } catch (e) {
              return;
            }
          }
          
          if (args.filePath && args.filePath.includes('admin.courses.tsx') && args.newString) {
            let code = args.newString;
            
            if (typeof code === 'string' && code.includes('\\n')) {
              code = code.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"');
            }
            
            if (code && code.length > 100) {
              codeBlocks.push({
                size: code.length,
                code: code
              });
            }
          }
        }
      });
    }
  } catch (e) {
    // Ignore
  }
});

rl.on('close', () => {
  codeBlocks.sort((a, b) => b.size - a.size);
  
  console.log(`Found ${codeBlocks.length} blocks`);
  codeBlocks.slice(0, 5).forEach((b, i) => {
    const lines = b.code.split('\n').length;
    console.log(`${i+1}. ${b.size} chars, ${lines} lines`);
  });
  
  if (codeBlocks.length > 0) {
    const largest = codeBlocks[0];
    fs.writeFileSync('extracted_admin_courses.tsx', largest.code, 'utf8');
    const numLines = largest.code.split('\n').length;
    console.log(`\n✅ Saved largest block: ${numLines} lines (${largest.size} chars) to extracted_admin_courses.tsx`);
  }
});
