// Development-only artwork renderer. Run with: npm run render:meme
const fs = require('node:fs');
const path = require('node:path');
const { Resvg } = require('@resvg/resvg-js');

const root = __dirname;
const svg = fs.readFileSync(path.join(root, 'meme.svg'), 'utf8');
const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
fs.writeFileSync(path.join(root, 'meme.png'), png);
console.log('Rendered meme.png at 1200 × 1200.');
