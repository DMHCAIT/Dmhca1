import fs from 'fs';
import readline from 'readline';

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

let codeInMessages = [];

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
    
    // Look for message content with large code blocks
    if (data.type === 'assistant.message' && data.data && data.data.content) {
      const content = data.data.content;
      
      // Look for code blocks with ```
      const matches = content.match(/```(?:tsx|jsx)?\n([\s\S]{1000,}?)\n```/g);
      if (matches) {
        matches.forEach(m => {
          const code = m.replace(/^```(?:tsx|jsx)?\n/, '').replace(/\n```$/, '');
          if (code.length > 2000 && code.includes('function')) {
            codeInMessages.push({
              lineNum,
              size: code.length,
              code
            });
          }
        });
      }
    }
  } catch (e) {
    // Ignore
  }
});

rl.on('close', () => {
  codeInMessages.sort((a, b) => b.size - a.size);
  
  console.log(`Found ${codeInMessages.length} large code blocks in messages`);
  if (codeInMessages.length > 0) {
    codeInMessages.slice(0, 3).forEach((c, i) => {
      const lines = c.code.split('\n').length;
      console.log(`${i+1}. Line ${c.lineNum}: ${c.size} chars, ${lines} lines`);
    });
    
    const best = codeInMessages[0];
    if (best.size > 5000) {
      fs.writeFileSync('extracted_admin_courses.tsx', best.code, 'utf8');
      console.log(`\n✅ Saved ${best.code.split('\n').length} lines from line ${best.lineNum}`);
    }
  }
});
