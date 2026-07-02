import fs from 'fs';
import readline from 'readline';

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

let matches = [];

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
    
    // Look in multiple possible fields
    const fields = [
      data.data?.content,
      data.newContent,
      data.message?.content,
      data.arguments?.filePath,
      data.arguments?.content
    ];
    
    for (const field of fields) {
      if (!field) continue;
      const str = typeof field === 'string' ? field : JSON.stringify(field);
      if (str && str.includes('admin.courses.tsx') && str.includes('showEditModal')) {
        console.log(`Found at line ${lineNum}, size: ${str.length}`);
        matches.push({ lineNum, size: str.length, raw: line });
      }
    }
  } catch (e) {
    // Ignore
  }
});

rl.on('close', () => {
  matches.sort((a, b) => b.size - a.size);
  console.log(`\nTotal matches: ${matches.length}`);
  
  if (matches.length > 0) {
    const best = matches[0];
    console.log(`Best match: Line ${best.lineNum}, Size: ${best.size}`);
    
    // Parse the JSON
    const data = JSON.parse(best.raw);
    
    // Try to extract code
    let code = data.data?.content || data.newContent || '';
    
    if (code && code.length > 1000) {
      // Look for code block markers
      const match1 = code.match(/```(?:tsx|jsx)?\n([\s\S]{500,}?)\n```/);
      const match2 = code.match(/```\n([\s\S]{500,}?)\n```/);
      
      if (match1?.[1]) {
        code = match1[1];
        console.log(`Extracted from code block: ${code.length} chars`);
      } else if (match2?.[1]) {
        code = match2[1];
        console.log(`Extracted from code block: ${code.length} chars`);
      } else {
        console.log(`No code block markers found, trying to extract from content...`);
        // Maybe it's just embedded in the message
        const lines = code.split('\n');
        const startIdx = lines.findIndex(l => l.includes('export const Route') || l.includes('function CoursesManagement'));
        if (startIdx >= 0) {
          code = lines.slice(startIdx).join('\n');
          console.log(`Found export at line ${startIdx}, extracted: ${code.length} chars`);
        }
      }
      
      if (code && code.length > 2000) {
        fs.writeFileSync('extracted_admin_courses.tsx', code, 'utf8');
        const numLines = code.split('\n').length;
        console.log(`✅ Saved to extracted_admin_courses.tsx (${numLines} lines, ${code.length} chars)`);
      } else {
        console.log(`Code too short (${code.length} chars), skipping`);
      }
    }
  }
});
