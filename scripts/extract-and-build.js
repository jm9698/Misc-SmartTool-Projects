const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const { randomInt } = require('crypto');

const repoRoot = path.join(__dirname, '..');
const srcDir = path.join(repoRoot, 'src');
const outDir = path.join(repoRoot, 'dist');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
if (!fs.existsSync(srcDir)) {
  console.error('src directory not found at', srcDir);
  process.exit(1);
}

// Prefer using an explicit source file `src/game.jsx` if present.
const srcPath = path.join(srcDir, 'game.jsx');
if (!fs.existsSync(srcPath)) {
  console.error('Source file not found:', srcPath);
  console.error('Please ensure src/game.jsx exists or restore the <script type="text/babel"> block in mainVersion.html');
  process.exit(1);
}

const jsx = fs.readFileSync(srcPath, 'utf8');
const selected = randomInt(1, 11);
console.log('Read', srcPath);
console.log('Transpiling JSX to plain JavaScript...');
selected === 1 ? console.log('Watering Leafeon...') : selected === 2 ? console.log('Fluffing the Eevee...') : selected === 3 ? console.log('Keeping Umbreon safe...') : selected === 4 ? console.log('Giving lots of food to Flareon AND Jolteon...') : selected === 5 ? ('Fennekin ate the stick... the ram stick...') : selected === 6 ? console.log('Asking the guildmaster if femboys can join...') : selected === 7 ? console.log('My logs keep getting set on fire... can someone tell Flareon to stop?') : selected === 8 ? console.log('Did you know? 93% of all Vaporeon are actually Vaporeon!') : selected === 9 ? console.log('Did you know? 67% of the world\'s water comes from Vaporeon! That\'s approximately 2/3 of its whole water suppy! Wow!') : selected === 10 ? console.log('Did you know? Umbreon\'s sweat is actually poisonous! You wouldn\'t know it with how many followers they have...') : console.log('Adding Vaporeon...');

// Transpile to plain JS bundle (single-file) using Babel programmatically
let transformed;
try {
  transformed = babel.transformSync(jsx, {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    filename: 'game.jsx',
    sourceMaps: false,
  });
} catch (err) {
  console.error('Babel transform failed:', err);
  process.exit(1);
}

const outPath = path.join(outDir, 'bundle.js');
fs.writeFileSync(outPath, transformed.code, 'utf8');
console.log('                                                                                                                                                                                                                                                Praise thy Vaporeon, for the following file hast built successfully:', outPath);
