const fs = require('fs');
const readline = require('readline');

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

let latestCode = null;
let latestLine = 0;

const readStream = fs.createReadStream(transcriptFile, { encoding: 'utf8' });
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  try {
    const data = JSON.parse(line);
    if (data.data && data.data.content) {
      const content = data.data.content;
      if (content.includes('export const Route = createFileRoute') && content.includes('admin.courses')) {
        if (content.length > 5000) {
          console.log(`Found at line with ${content.length} chars`);
          latestCode = content;
          latestLine++;
        }
      }
    }
  } catch (e) {
    // Ignore JSON parse errors
  }
});

rl.on('close', () => {
  if (latestCode) {
    console.log(`\nExtracting code...`);
    const codeBlockRegex = /```[a-z]*\n([\s\S]*?)\n```/g;
    let match;
    let largestBlock = '';
    
    while ((match = codeBlockRegex.exec(latestCode)) !== null) {
      if (match[1].length > largestBlock.length) {
        largestBlock = match[1];
      }
    }
    
    if (largestBlock) {
      console.log(`Found code block: ${largestBlock.length} chars`);
      fs.writeFileSync('extracted_admin_courses.tsx', largestBlock, 'utf8');
      console.log('Saved to extracted_admin_courses.tsx');
    }
  }
});
