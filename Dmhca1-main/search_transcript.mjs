import fs from 'fs';
import readline from 'readline';

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

let results = [];

const readStream = fs.createReadStream(transcriptFile, { encoding: 'utf8' });
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  try {
    const data = JSON.parse(line);
    
    // Try multiple fields that might contain code
    let content = '';
    if (data.data && data.data.content) {
      content = data.data.content;
    } else if (data.newContent) {
      content = data.newContent;
    } else if (data.arguments) {
      const argsStr = JSON.stringify(data.arguments);
      content = argsStr;
    }
    
    // Check if this looks like admin courses code
    if (content && content.includes('admin.courses.tsx') && content.length > 2000) {
      results.push({
        size: content.length,
        content: content.substring(0, 500)
      });
    }
    if (content && content.includes('export const Route = createFileRoute') && content.includes('AdminCourses') && content.length > 3000) {
      results.push({
        size: content.length,
        content: content.substring(0, 500),
        found: 'full component'
      });
    }
  } catch (e) {
    // Ignore parse errors
  }
});

rl.on('close', () => {
  console.log(`Found ${results.length} potential matches:`);
  results.forEach((r, i) => {
    console.log(`${i+1}. Size: ${r.size}, Type: ${r.found || 'unknown'}`);
  });
});
