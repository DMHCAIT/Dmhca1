const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;
  const out = filePath.replace(ext, '.webp');
  await sharp(filePath).webp({ quality: 80 }).toFile(out);
  await fs.promises.unlink(filePath);
  return { from: path.relative(process.cwd(), filePath), to: path.relative(process.cwd(), out) };
}

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const results = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...(await walk(p)));
    } else {
      results.push(p);
    }
  }
  return results;
}

async function main() {
  const files = await walk(PUBLIC_DIR);
  const converted = [];
  for (const f of files) {
    try {
      const r = await convertFile(f);
      if (r) converted.push(r);
    } catch (err) {
      console.error('Failed to convert', f, err);
    }
  }

  // Update code references
  if (converted.length) {
    const repoFiles = await walk(process.cwd());
    const textFiles = repoFiles.filter((p) => /\.(js|ts|tsx|jsx|html|css)$/.test(p));
    for (const tf of textFiles) {
      let content = await fs.promises.readFile(tf, 'utf8');
      let changed = false;
      for (const { from, to } of converted) {
        const fromName = path.basename(from);
        const toName = path.basename(to);
        if (content.includes(fromName)) {
          content = content.split(fromName).join(toName);
          changed = true;
        }
      }
      if (changed) await fs.promises.writeFile(tf, content, 'utf8');
    }
  }

  console.log('Converted files:', converted);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
