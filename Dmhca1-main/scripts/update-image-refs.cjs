const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const publicDir = path.join(repoRoot, 'public');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : [p];
  });
}

const codeFiles = walk(repoRoot).filter((p) => /\.(js|ts|tsx|jsx|html|css)$/.test(p));
const publicFiles = walk(publicDir).map((p) => path.basename(p));

let totalReplacements = 0;
for (const cf of codeFiles) {
  let content = fs.readFileSync(cf, 'utf8');
  let changed = false;
  content = content.replace(/([\w\-\. %()!,]+)\.(png|jpg|jpeg)/gi, (match, name, ext) => {
    const base = path.basename(name) + '.webp';
    if (publicFiles.includes(base)) {
      changed = true;
      totalReplacements++;
      return name + '.webp';
    }
    return match;
  });

  if (changed) fs.writeFileSync(cf, content, 'utf8');
}

console.log('Total replacements:', totalReplacements);
