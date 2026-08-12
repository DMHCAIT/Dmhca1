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
    
    let content = '';
    if (data.data && data.data.content) {
      content = data.data.content;
    } else if (data.newContent) {
      content = data.newContent;
    } else if (data.arguments) {
      const argsStr = JSON.stringify(data.arguments);
      content = argsStr;
    }
    
    if (content && content.includes('admin.courses.tsx') && content.length > 2000) {
      matches.push({ lineNum, size: content.length, content });
    }
  } catch (e) {
    // Ignore
  }
});

rl.on('close', () => {
  // Sort by size descending
  matches.sort((a, b) => b.size - a.size);
  
  console.log(`Found ${matches.length} matches, sorting by size...`);
  
  // Extract the largest one
  if (matches.length > 0) {
    const largest = matches[0];
    console.log(`Extracting largest: ${largest.size} chars from line ${largest.lineNum}`);
    
    // Try to extract code - look for filePath and content structure
    let code = largest.content;
    
    // Try to find the actual code content
    const pathMatch = code.match(/"filePath":\s*"([^"]*admin\.courses[^"]*)"/);
    const contentMatch = code.match(/"content":\s*"([\s\S]{100,}?)(?:"|\\n")/);
    
    if (pathMatch) {
      console.log(`Found file path: ${pathMatch[1]}`);
    }
    
    // Extract between quotes if it's a JSON string
    const jsonContentMatch = code.match(/"content":\s*"([\\s\\S]{1000,}?)"\s*[,}]/);
    if (jsonContentMatch) {
      let extracted = jsonContentMatch[1];
      // Unescape the string
      extracted = extracted.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      
      console.log(`Extracted ${extracted.length} chars of actual code`);
      
      // Write it
      fs.writeFileSync('extracted_admin_courses.tsx', extracted, 'utf8');
      console.log('Saved!');
      
      // Show first and last lines
      const lines = extracted.split('\n');
      console.log(`First line: ${lines[0]}`);
      console.log(`Last line: ${lines[lines.length-1]}`);
      console.log(`Total lines: ${lines.length}`);
    } else {
      console.log('Could not find JSON content structure');
    }
  }
});
