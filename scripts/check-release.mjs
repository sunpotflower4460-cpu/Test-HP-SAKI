import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');
const exists = (path) => existsSync(join(root, path));

const errors = [];
const notes = [];

const requireFile = (path) => {
  if (!exists(path)) {
    errors.push(`Missing required file: ${path}`);
    return '';
  }

  return read(path);
};

const requireIncludes = (label, content, needles) => {
  for (const needle of needles) {
    if (!content.includes(needle)) {
      errors.push(`${label} is missing: ${needle}`);
    }
  }
};

const indexHtml = requireFile('index.html');
const packageJsonText = requireFile('package.json');
const siteData = requireFile('src/data/siteData.ts');
const appTsx = requireFile('src/App.tsx');
const vercelJson = requireFile('vercel.json');
const robots = requireFile('public/robots.txt');
const sitemap = requireFile('public/sitemap.xml');

requireFile('docs/qa.md');
requireFile('docs/release-checklist.md');
requireFile('docs/release-operation.md');
requireFile('docs/final-status.md');
requireFile('src/pages/NotFound/NotFound.tsx');
requireFile('src/pages/NotFound/NotFound.module.css');

if (exists('public/_redirects')) {
  errors.push('public/_redirects must not exist for Cloudflare Workers assets deploy because it causes an infinite redirect validation error.');
}

let packageJson = null;
try {
  packageJson = JSON.parse(packageJsonText);
} catch (error) {
  errors.push(`package.json is not valid JSON: ${error.message}`);
}

if (packageJson) {
  const scripts = packageJson.scripts ?? {};

  if (scripts['check:assets'] !== 'node scripts/check-assets.mjs') {
    errors.push('package.json script check:assets is missing or unexpected.');
  }

  if (scripts['check:release'] !== 'node scripts/check-release.mjs') {
    errors.push('package.json script check:release is missing or unexpected.');
  }

  const buildScript = scripts.build ?? '';
  for (const requiredPart of ['npm run check:assets', 'tsc', 'vite build']) {
    if (!buildScript.includes(requiredPart)) {
      errors.push(`package.json build script is missing: ${requiredPart}`);
    }
  }
}

requireIncludes('index.html', indexHtml, [
  '<html lang="ja">',
  '<meta name="description"',
  '<title>Liminarium Lab. | 物語体験を制作する小さなラボ</title>',
  '<link rel="canonical" href="https://test-hp-saki.vercel.app/"',
  '<meta property="og:title" content="Liminarium Lab. | 物語体験を制作する小さなラボ"',
  '<meta property="og:url" content="https://test-hp-saki.vercel.app/"',
  '<meta property="og:image" content="https://test-hp-saki.vercel.app/media/hero/hero-01.jpg"',
  '<meta name="twitter:title" content="Liminarium Lab. | 物語体験を制作する小さなラボ"',
  '<meta name="twitter:image" content="https://test-hp-saki.vercel.app/media/hero/hero-01.jpg"',
]);

requireIncludes('App.tsx', appTsx, [
  "<Route path=\"/\" element={<Home />} />",
  "<Route path=\"/about\" element={<About />} />",
  "<Route path=\"/works\" element={<Works />} />",
  "<Route path=\"/news\" element={<News />} />",
  "<Route path=\"*\" element={<NotFound />} />",
]);

requireIncludes('vercel.json', vercelJson, [
  '"source": "/(.*)"',
  '"destination": "/"',
]);

requireIncludes('robots.txt', robots, [
  'User-agent: *',
  'Allow: /',
  'Sitemap: https://test-hp-saki.vercel.app/sitemap.xml',
]);

requireIncludes('sitemap.xml', sitemap, [
  '<loc>https://test-hp-saki.vercel.app/</loc>',
  '<loc>https://test-hp-saki.vercel.app/about</loc>',
  '<loc>https://test-hp-saki.vercel.app/works</loc>',
  '<loc>https://test-hp-saki.vercel.app/news</loc>',
]);

const forbiddenLinkPatterns = [
  "link: '#'",
  'link: "#"',
  "href: '#'",
  'href: "#"',
];

for (const pattern of forbiddenLinkPatterns) {
  if (siteData.includes(pattern)) {
    errors.push(`siteData.ts still contains placeholder hash link: ${pattern}`);
  }
}

const intentionalDisabledMarkers = [
  "link: ''",
  "href: ''",
];

for (const marker of intentionalDisabledMarkers) {
  if (siteData.includes(marker)) {
    notes.push(`Intentional disabled link marker found: ${marker}`);
  }
}

console.log('\nRelease check');
console.log('=============\n');

if (notes.length > 0) {
  for (const note of notes) {
    console.log(`[note] ${note}`);
  }
  console.log('');
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`[error] ${error}`);
  }
  console.error('\nRelease validation failed.');
  process.exit(1);
}

console.log('Release validation passed.');
