const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const repoRoot = path.join(__dirname, '..');
const htmlPath = path.join(repoRoot, 'mainVersion.html');
const srcDir = path.join(repoRoot, 'src');
const outDir = path.join(repoRoot, 'dist');

if (!fs.existsSync(htmlPath)) {
  console.error('mainVersion.html not found at', htmlPath);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const match = html.match(/<script\s+type=["']text\/babel["'][^>]*>([\s\S]*?)<\/script>/i);
if (!match) {
  console.error('No <script type="text/babel"> block found in mainVersion.html');
  process.exit(1);
}

const jsx = match[1];
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const srcPath = path.join(srcDir, 'game.jsx');
fs.writeFileSync(srcPath, jsx, 'utf8');
console.log('Wrote', srcPath);

// Transpile to plain JS bundle (single-file) using Babel programmatically
const transformed = babel.transformSync(jsx, {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  filename: 'game.jsx',
  sourceMaps: false,
});

const outPath = path.join(outDir, 'bundle.js');
fs.writeFileSync(outPath, transformed.code, 'utf8');
console.log('Built', outPath);
