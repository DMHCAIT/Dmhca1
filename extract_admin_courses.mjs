import fs from 'fs';
import readline from 'readline';

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

let latestCode = null;
let lineCount = 0;

const readStream = fs.createReadStream(transcriptFile, { encoding: 'utf8' });
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  lineCount++;
  try {
    const data = JSON.parse(line);
    if (data.data && data.data.content) {
      const content = data.data.content;
      if (content.includes('export const Route = createFileRoute') && content.includes('admin.courses')) {
        if (content.length > 5000) {
          console.log(`Found at line ${lineCount} with ${content.length} chars`);
          latestCode = content;
        }
      }
    }
  } catch (e) {
    // Ignore JSON parse errors
  }
});

rl.on('close', () => {
  console.log(`Read ${lineCount} lines`);
  if (latestCode) {
    console.log(`\nExtracting code...`);
    const codeBlockRegex = /```[a-z]*\n([\s\S]*?)\n```/g;
    let match;
    let largestBlock = '';
    let blockCount = 0;
    
    while ((match = codeBlockRegex.exec(latestCode)) !== null) {
      blockCount++;
      if (match[1].length > largestBlock.length) {
        largestBlock = match[1];
      }
    }
    
    if (largestBlock) {
      console.log(`Found ${blockCount} code blocks, largest: ${largestBlock.length} chars`);
      fs.writeFileSync('extracted_admin_courses.tsx', largestBlock, 'utf8');
      console.log('Saved to extracted_admin_courses.tsx');
    } else {
      console.log('No code blocks found with expected format');
    }
  } else {
    console.log('No matching content found');
  }
});
