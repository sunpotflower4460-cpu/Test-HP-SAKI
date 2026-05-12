import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const stagingDir = process.argv[2] || '_asset-staging';

const assets = [
  ['public/media/hero/hero-01.jpg', 'public/media/hero/hero-01.jpg'],
  ['public/media/works/work-01.jpg', 'public/media/works/work-01.jpg'],
  ['public/media/works/work-02.jpg', 'public/media/works/work-02.jpg'],
  ['public/media/members/member-01.jpg', 'public/media/members/member-01.jpg'],
  ['public/media/members/member-02.jpg', 'public/media/members/member-02.jpg'],
  ['public/media/members/member-03.jpg', 'public/media/members/member-03.jpg'],
  ['public/media/members/member-04.jpg', 'public/media/members/member-04.jpg'],
  ['public/media/logo/logo.png', 'public/media/logo/logo.png'],
];

const missing = [];
const copied = [];

for (const [sourceRelativePath, targetRelativePath] of assets) {
  const source = join(root, stagingDir, sourceRelativePath);
  const target = join(root, targetRelativePath);

  if (!existsSync(source) || statSync(source).size === 0) {
    missing.push(join(stagingDir, sourceRelativePath));
    continue;
  }

  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
  copied.push(targetRelativePath);
}

console.log('\nAsset import');
console.log('============\n');

for (const path of copied) {
  console.log(`[copied] ${path}`);
}

if (missing.length > 0) {
  console.error('\nMissing staging assets:');
  for (const path of missing) {
    console.error(`- ${path}`);
  }
  console.error('\nPlace optimized assets in the staging folder first. See docs/asset-import-guide.md.');
  process.exit(1);
}

console.log('\nAll assets copied. Run npm run check:assets next.');
