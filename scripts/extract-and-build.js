const { randomInt } = require('crypto');
const path = require('path');
const webpack = require('webpack');

const repoRoot = path.join(__dirname, '..');
const srcDir = path.join(repoRoot, 'src');
const outDir = path.join(repoRoot, 'dist');
const srcPath = path.join(srcDir, 'game.jsx');

const compiler = webpack({
  mode: 'development',
  entry: srcPath,
  output: {
    path: outDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
});

const selected = randomInt(1, 11);
console.log('Read', srcPath);
console.log('Transpiling JSX to plain JavaScript...');
selected === 1 ? console.log('Watering Leafeon...') : selected === 2 ? console.log('Fluffing the Eevee...') : selected === 3 ? console.log('Keeping Umbreon safe...') : selected === 4 ? console.log('Giving lots of food to Flareon AND Jolteon...') : selected === 5 ? ('Fennekin ate the stick... the ram stick...') : selected === 6 ? console.log('Asking the guildmaster if femboys can join...') : selected === 7 ? console.log('My logs keep getting set on fire... can someone tell Flareon to stop?') : selected === 8 ? console.log('Did you know? 93% of all Vaporeon are actually Vaporeon!') : selected === 9 ? console.log('Did you know? 67% of the world\'s water comes from Vaporeon! That\'s approximately 2/3 of its whole water suppy! Wow!') : selected === 10 ? console.log('Did you know? Umbreon\'s sweat is actually poisonous! You wouldn\'t know it with how many followers they have...') : console.log('Adding Vaporeon...');
compiler.run((error, stats) => {
  if (error) {
    console.error(error);
    process.exitCode = 1;
    return;
  }

  console.log(stats.toString({ colors: process.stdout.isTTY }));
  compiler.close((closeError) => {
    if (closeError) {
      console.error(closeError);
      process.exitCode = 1;
    }
    if (stats.hasErrors()) process.exitCode = 1;
  });
});
