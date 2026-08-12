import fs from 'fs';
import readline from 'readline';

const transcriptFile = 'c:\\Users\\john\\AppData\\Roaming\\Code\\User\\workspaceStorage\\63e64f3523d8f17852f08381b21a7b74\\GitHub.copilot-chat\\transcripts\\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl';

const searchTerms = ['showEditModal', 'deleteConfirmId', 'fetchCourses', 'CoursesManagement'];

let results = {};
searchTerms.forEach(term => results[term] = []);

const readStream = fs.createReadStream(transcriptFile, { encoding: 'utf8' });
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

let lineNum = 0;

rl.on('line', (line) => {
  lineNum++;
  
  searchTerms.forEach(term => {
    if (line.includes(term)) {
      results[term].push(lineNum);
    }
  });
});

rl.on('close', () => {
  console.log('Search results:');
  searchTerms.forEach(term => {
    console.log(`${term}: ${results[term].length} matches at lines: ${results[term].slice(0, 5).join(', ')}`);
  });
});
