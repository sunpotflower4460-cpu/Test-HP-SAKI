import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const indexHtml = join(dist, 'index.html');
const routeNames = ['about', 'works', 'news'];

if (!existsSync(indexHtml)) {
  throw new Error('dist/index.html was not found.');
}

for (const routeName of routeNames) {
  const target = join(dist, routeName, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(indexHtml, target);
}

copyFileSync(indexHtml, join(dist, '404.html'));
writeFileSync(join(dist, '.nojekyll'), '');

console.log('Pages route files created.');
