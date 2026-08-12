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
    
    // Look for data.toolRequests (nested in assistant messages)
    if (data.data && data.data.toolRequests && Array.isArray(data.data.toolRequests)) {
      data.data.toolRequests.forEach((req) => {
        if (req.name === 'replace_string_in_file' && req.arguments) {
          let args = req.arguments;
          
          // Arguments might be a JSON string that needs parsing
          if (typeof args === 'string') {
            try {
              args = JSON.parse(args);
            } catch (e) {
              return;
            }
          }
          
          if (args.filePath && args.filePath.includes('admin.courses.tsx') && args.newString) {
            let code = args.newString;
            
            // newString might also be escaped
            if (typeof code === 'string' && code.includes('\\n')) {
              code = code.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"');
            }
            
            if (code && code.length > 100) {
              codeBlocks.push({
                size: code.length,
                code: code,
                hasFunction: code.includes('function ') || code.includes('useState')
              });
              console.log(`Found block: ${code.length} chars, hasFunction: ${code.includes('function ')}`);
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
  console.log(`\nTotal blocks found: ${codeBlocks.length}`);
  codeBlocks.sort((a, b) => b.size - a.size);
  
  if (codeBlocks.length > 0) {
    // The biggest with functions is probably closest to complete
    const best = codeBlocks.find(b => b.hasFunction) || codeBlocks[0];
    console.log(`Using best block: ${best.size} chars`);
    
    if (best.code.length > 5000) {
      fs.writeFileSync('extracted_admin_courses.tsx', best.code, 'utf8');
      const numLines = best.code.split('\n').length;
      console.log(`✅ Saved ${numLines} lines to extracted_admin_courses.tsx`);
    } else {
      console.log('❌ Best block too short, need to combine multiple blocks');
    }
  }
});
