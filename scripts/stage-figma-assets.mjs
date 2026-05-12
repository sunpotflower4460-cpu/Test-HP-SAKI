import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const sourceDir = process.argv[2];
const stagingDir = process.argv[3] || '_asset-staging';

if (!sourceDir) {
  console.error('Usage: node scripts/stage-figma-assets.mjs <extracted-figma-folder> [staging-folder]');
  process.exit(1);
}

const mappings = [
  {
    source: 'image 4.png',
    target: 'public/media/hero/hero-01.jpg',
  },
  {
    source: 'Remove_ONLY_the_maple_leaf_decorations_from_this_i-1777218403497 2.png',
    target: 'public/media/works/work-01.jpg',
  },
  {
    source: 'あったかくて甘くて潰れた_イラスト合わせ 2.png',
    target: 'public/media/works/work-02.jpg',
  },
  {
    source: 'よしの 1.png',
    target: 'public/media/members/member-01.jpg',
  },
  {
    source: 'IMG_2532 2 1.png',
    target: 'public/media/members/member-02.jpg',
  },
  {
    source: 'S__3252226 1.png',
    target: 'public/media/members/member-03.jpg',
  },
  {
    source: 'IMG_2532 3.png',
    target: 'public/media/members/member-04.jpg',
  },
  {
    source: 'Liminarium Lab.  4.png',
    target: 'public/media/logo/logo.png',
  },
];

const missing = [];
const copied = [];

for (const item of mappings) {
  const sourcePath = join(root, sourceDir, item.source);
  const targetPath = join(root, stagingDir, item.target);

  if (!existsSync(sourcePath) || statSync(sourcePath).size === 0) {
    missing.push(item.source);
    continue;
  }

  mkdirSync(dirname(targetPath), { recursive: true });
  copyFileSync(sourcePath, targetPath);
  copied.push({ source: item.source, target: join(stagingDir, item.target) });
}

console.log('\nFigma asset staging');
console.log('===================\n');

for (const item of copied) {
  console.log(`[staged] ${item.source} -> ${item.target}`);
}

if (missing.length > 0) {
  console.error('\nMissing source assets:');
  for (const name of missing) {
    console.error(`- ${name}`);
  }
  console.error('\nCheck the extracted Figma folder path and filenames.');
  process.exit(1);
}

console.log('\nAll Figma assets staged. Run npm run import:assets next.');
console.log('Note: this script copies source files to target names only; optimize or convert formats if needed before final commit.');
