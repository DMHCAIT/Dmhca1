import fs from 'fs';
import readline from 'readline';

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

let allCode = '';
let codeBlocks = [];

const readStream = fs.createReadStream(transcriptFile, { encoding: 'utf8' });
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

let lineNum = 0;

rl.on('line', (line) => {
  lineNum++;
  
  try {
    const data = JSON.parse(line);
    
    // Look for replace_string_in_file operations
    if (data.toolRequests) {
      data.toolRequests.forEach((req) => {
        if (req.name === 'replace_string_in_file' && req.arguments) {
          const args = typeof req.arguments === 'string' ? JSON.parse(req.arguments) : req.arguments;
          if (args.filePath && args.filePath.includes('admin.courses.tsx')) {
            if (args.newString && args.newString.length > 100) {
              codeBlocks.push({
                lineNum,
                size: args.newString.length,
                code: args.newString
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
  codeBlocks.sort((a, b) => a.lineNum - b.lineNum);
  
  console.log(`Found ${codeBlocks.length} code blocks`);
  codeBlocks.forEach((b, i) => {
    console.log(`${i+1}. Line ${b.lineNum}: ${b.size} chars`);
  });
  
  // The first block should be the start (imports)
  // Try to assemble them
  if (codeBlocks.length > 0) {
    // Get the biggest block (probably the complete component)
    const biggest = codeBlocks.reduce((a, b) => a.size > b.size ? a : b);
    console.log(`\nUsing largest block from line ${biggest.lineNum} (${biggest.size} chars)`);
    
    if (biggest.code.length > 2000) {
      fs.writeFileSync('extracted_admin_courses.tsx', biggest.code, 'utf8');
      const numLines = biggest.code.split('\n').length;
      console.log(`✅ Saved ${numLines} lines to extracted_admin_courses.tsx`);
    }
  }
});
