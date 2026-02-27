const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

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
console.log('Read', srcPath);

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
console.log('Built', outPath);

console.log('Build complete. Note: this script no longer modifies mainVersion.html.');
