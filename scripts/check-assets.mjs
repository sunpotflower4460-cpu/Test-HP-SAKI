import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';

const root = process.cwd();

const requiredAssets = [
  'public/media/hero/hero-01.jpg',
  'public/media/works/work-01.jpg',
  'public/media/works/work-02.jpg',
  'public/media/members/member-01.jpg',
  'public/media/members/member-02.jpg',
  'public/media/members/member-03.jpg',
  'public/media/members/member-04.jpg',
  'public/media/logo/logo.png',
];

const optionalAssets = [
  'public/media/hero/hero-02.jpg',
  'public/media/hero/hero-03.mp4',
  'public/media/hero/hero-03-poster.jpg',
  'public/media/hero/hero-04.jpg',
  'public/media/hero/hero-05.jpg',
  'public/media/logo/logo-mark.png',
];

const check = (path) => {
  const absolutePath = join(root, path);

  if (!existsSync(absolutePath)) {
    return { path, exists: false, size: 0 };
  }

  const size = statSync(absolutePath).size;
  return { path, exists: true, size };
};

const requiredResults = requiredAssets.map(check);
const optionalResults = optionalAssets.map(check);
const missing = requiredResults.filter((item) => !item.exists);
const empty = requiredResults.filter((item) => item.exists && item.size === 0);

console.log('\nAsset check');
console.log('===========\n');

for (const item of requiredResults) {
  const mark = item.exists && item.size > 0 ? 'ok' : 'missing';
  console.log(`[required:${mark}] ${item.path}${item.exists ? ` (${item.size} bytes)` : ''}`);
}

console.log('');

for (const item of optionalResults) {
  const mark = item.exists && item.size > 0 ? 'ok' : 'not-set';
  console.log(`[optional:${mark}] ${item.path}${item.exists ? ` (${item.size} bytes)` : ''}`);
}

if (missing.length > 0 || empty.length > 0) {
  console.error('\nRequired assets are missing or empty. See docs/asset-manifest.md.');
  process.exit(1);
}

console.log('\nAll required assets are present.');
