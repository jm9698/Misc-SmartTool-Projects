
// ========== SPRITE ATLAS SYSTEM ==========
// Organized by category for future sprite sheet consolidation.
// Each entry includes: url (current individual sprite), and atlas metadata (x, y, w, h) for future sheet consolidation.
const atlasCache = {};
const itemAtlasUrl = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/atlas/ItemAtlasTest.png';
const pokemonAtlasUrl = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/atlas/PokemonAtlas.png';
const vfxAtlasUrl = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/atlas/VfxAtlas.png';
const DMGAtlasUrl = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/DMG/atlas/DMG%20Atlas.png';
const textAtlasUrl = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Lang/Atlas/TextAtlas.png';

const loadAtlasImage = (atlasUrl) => {
  if (!atlasCache[atlasUrl]) {
    atlasCache[atlasUrl] = new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load atlas: ${atlasUrl}`));
      img.src = atlasUrl;
    });
  }
  return atlasCache[atlasUrl];
};

const TextAtlas = {
  Black: {
    // Accent
    accentE: { atlas: { sheet: textAtlasUrl, x: 1, y: 1, w: 32, h: 32 } },
    // Numbers
    '0': { atlas: { sheet: textAtlasUrl, x: 341, y: 1, w: 32, h: 32 } },
    '1': { atlas: { sheet: textAtlasUrl, x: 511, y: 1, w: 32, h: 32 } },
    '2': { atlas: { sheet: textAtlasUrl, x: 681, y: 1, w: 32, h: 32 } },
    '3': { atlas: { sheet: textAtlasUrl, x: 851, y: 1, w: 32, h: 32 } },
    '4': { atlas: { sheet: textAtlasUrl, x: 1, y: 35, w: 32, h: 32 } },
    '5': { atlas: { sheet: textAtlasUrl, x: 171, y: 35, w: 32, h: 32 } },
    '6': { atlas: { sheet: textAtlasUrl, x: 341, y: 35, w: 32, h: 32 } },
    '7': { atlas: { sheet: textAtlasUrl, x: 511, y: 35, w: 32, h: 32 } },
    '8': { atlas: { sheet: textAtlasUrl, x: 681, y: 35, w: 32, h: 32 } },
    '9': { atlas: { sheet: textAtlasUrl, x: 851, y: 35, w: 32, h: 32 } },
    // Uppercase letters
    A: { atlas: { sheet: textAtlasUrl, x: 1, y: 69, w: 32, h: 32 } },
    B: { atlas: { sheet: textAtlasUrl, x: 341, y: 69, w: 32, h: 32 } },
    C: { atlas: { sheet: textAtlasUrl, x: 681, y: 69, w: 32, h: 32 } },
    D: { atlas: { sheet: textAtlasUrl, x: 1, y: 137, w: 32, h: 32 } },
    E: { atlas: { sheet: textAtlasUrl, x: 341, y: 137, w: 32, h: 32 } },
    F: { atlas: { sheet: textAtlasUrl, x: 1, y: 171, w: 32, h: 32 } },
    G: { atlas: { sheet: textAtlasUrl, x: 341, y: 171, w: 32, h: 32 } },
    H: { atlas: { sheet: textAtlasUrl, x: 681, y: 171, w: 32, h: 32 } },
    I: { atlas: { sheet: textAtlasUrl, x: 1, y: 205, w: 32, h: 32 } },
    J: { atlas: { sheet: textAtlasUrl, x: 341, y: 205, w: 32, h: 32 } },
    K: { atlas: { sheet: textAtlasUrl, x: 681, y: 205, w: 32, h: 32 } },
    L: { atlas: { sheet: textAtlasUrl, x: 1, y: 239, w: 32, h: 32 } },
    M: { atlas: { sheet: textAtlasUrl, x: 341, y: 239, w: 32, h: 32 } },
    N: { atlas: { sheet: textAtlasUrl, x: 851, y: 239, w: 32, h: 32 } },
    O: { atlas: { sheet: textAtlasUrl, x: 171, y: 273, w: 32, h: 32 } },
    P: { atlas: { sheet: textAtlasUrl, x: 511, y: 273, w: 32, h: 32 } },
    Q: { atlas: { sheet: textAtlasUrl, x: 171, y: 307, w: 32, h: 32 } },
    R: { atlas: { sheet: textAtlasUrl, x: 681, y: 307, w: 32, h: 32 } },
    S: { atlas: { sheet: textAtlasUrl, x: 1, y: 341, w: 32, h: 32 } },
    T: { atlas: { sheet: textAtlasUrl, x: 341, y: 341, w: 32, h: 32 } },
    U: { atlas: { sheet: textAtlasUrl, x: 681, y: 341, w: 32, h: 32 } },
    V: { atlas: { sheet: textAtlasUrl, x: 1, y: 375, w: 32, h: 32 } },
    W: { atlas: { sheet: textAtlasUrl, x: 341, y: 375, w: 32, h: 32 } },
    X: { atlas: { sheet: textAtlasUrl, x: 681, y: 375, w: 32, h: 32 } },
    Y: { atlas: { sheet: textAtlasUrl, x: 1, y: 409, w: 32, h: 32 } },
    Z: { atlas: { sheet: textAtlasUrl, x: 341, y: 409, w: 32, h: 32 } },
    // Lowercase letters
    a: { atlas: { sheet: textAtlasUrl, x: 171, y: 69, w: 32, h: 32 } },
    b: { atlas: { sheet: textAtlasUrl, x: 511, y: 69, w: 32, h: 32 } },
    c: { atlas: { sheet: textAtlasUrl, x: 851, y: 69, w: 32, h: 32 } },
    d: { atlas: { sheet: textAtlasUrl, x: 171, y: 137, w: 32, h: 32 } },
    e: { atlas: { sheet: textAtlasUrl, x: 511, y: 137, w: 32, h: 32 } },
    f: { atlas: { sheet: textAtlasUrl, x: 171, y: 171, w: 32, h: 32 } },
    g: { atlas: { sheet: textAtlasUrl, x: 511, y: 171, w: 32, h: 32 } },
    h: { atlas: { sheet: textAtlasUrl, x: 851, y: 171, w: 32, h: 32 } },
    i: { atlas: { sheet: textAtlasUrl, x: 171, y: 205, w: 32, h: 32 } },
    j: { atlas: { sheet: textAtlasUrl, x: 511, y: 205, w: 32, h: 32 } },
    k: { atlas: { sheet: textAtlasUrl, x: 851, y: 205, w: 32, h: 32 } },
    l: { atlas: { sheet: textAtlasUrl, x: 171, y: 239, w: 32, h: 32 } },
    m: { atlas: { sheet: textAtlasUrl, x: 681, y: 239, w: 32, h: 32 } },
    n: { atlas: { sheet: textAtlasUrl, x: 1, y: 273, w: 32, h: 32 } },
    o: { atlas: { sheet: textAtlasUrl, x: 341, y: 273, w: 32, h: 32 } },
    p: { atlas: { sheet: textAtlasUrl, x: 1, y: 307, w: 32, h: 32 } },
    q: { atlas: { sheet: textAtlasUrl, x: 341, y: 307, w: 32, h: 32 } },
    r: { atlas: { sheet: textAtlasUrl, x: 851, y: 307, w: 32, h: 32 } },
    s: { atlas: { sheet: textAtlasUrl, x: 171, y: 341, w: 32, h: 32 } },
    t: { atlas: { sheet: textAtlasUrl, x: 511, y: 341, w: 32, h: 32 } },
    u: { atlas: { sheet: textAtlasUrl, x: 851, y: 341, w: 32, h: 32 } },
    v: { atlas: { sheet: textAtlasUrl, x: 171, y: 375, w: 32, h: 32 } },
    w: { atlas: { sheet: textAtlasUrl, x: 511, y: 375, w: 32, h: 32 } },
    x: { atlas: { sheet: textAtlasUrl, x: 851, y: 375, w: 32, h: 32 } },
    y: { atlas: { sheet: textAtlasUrl, x: 171, y: 409, w: 32, h: 32 } },
    z: { atlas: { sheet: textAtlasUrl, x: 511, y: 409, w: 32, h: 32 } },
    // Symbols
    '!': { atlas: { sheet: textAtlasUrl, x: 171, y: 1, w: 32, h: 32 } },
    '(': { atlas: { sheet: textAtlasUrl, x: 1, y: 103, w: 32, h: 32 } },
    ')': { atlas: { sheet: textAtlasUrl, x: 171, y: 103, w: 32, h: 32 } },
    '"': { atlas: { sheet: textAtlasUrl, x: 341, y: 103, w: 32, h: 32 } },
    "'": { atlas: { sheet: textAtlasUrl, x: 511, y: 103, w: 32, h: 32 } },
    ':': { atlas: { sheet: textAtlasUrl, x: 681, y: 103, w: 32, h: 32 } },
    ',': { atlas: { sheet: textAtlasUrl, x: 851, y: 103, w: 32, h: 32 } },
    '.': { atlas: { sheet: textAtlasUrl, x: 681, y: 273, w: 32, h: 32 } },
    '?': { atlas: { sheet: textAtlasUrl, x: 511, y: 307, w: 32, h: 32 } },
    '-': { atlas: { sheet: textAtlasUrl, x: 511, y: 239, w: 32, h: 32 } },
    '+': { atlas: { sheet: textAtlasUrl, x: 851, y: 273, w: 32, h: 32 } },
    '...': { atlas: { sheet: textAtlasUrl, x: 681, y: 137, w: 32, h: 32 } },
    '...2': { atlas: { sheet: textAtlasUrl, x: 851, y: 137, w: 32, h: 32 } }
  },
  Blue: {
    // Accent
    accentE: { atlas: { sheet: textAtlasUrl, x: 35, y: 1, w: 32, h: 32 } },
    // Numbers
    '0': { atlas: { sheet: textAtlasUrl, x: 375, y: 1, w: 32, h: 32 } },
    '1': { atlas: { sheet: textAtlasUrl, x: 545, y: 1, w: 32, h: 32 } },
    '2': { atlas: { sheet: textAtlasUrl, x: 715, y: 1, w: 32, h: 32 } },
    '3': { atlas: { sheet: textAtlasUrl, x: 885, y: 1, w: 32, h: 32 } },
    '4': { atlas: { sheet: textAtlasUrl, x: 35, y: 35, w: 32, h: 32 } },
    '5': { atlas: { sheet: textAtlasUrl, x: 205, y: 35, w: 32, h: 32 } },
    '6': { atlas: { sheet: textAtlasUrl, x: 375, y: 35, w: 32, h: 32 } },
    '7': { atlas: { sheet: textAtlasUrl, x: 545, y: 35, w: 32, h: 32 } },
    '8': { atlas: { sheet: textAtlasUrl, x: 715, y: 35, w: 32, h: 32 } },
    '9': { atlas: { sheet: textAtlasUrl, x: 885, y: 35, w: 32, h: 32 } },
    // Uppercase letters
    A: { atlas: { sheet: textAtlasUrl, x: 35, y: 69, w: 32, h: 32 } },
    B: { atlas: { sheet: textAtlasUrl, x: 375, y: 69, w: 32, h: 32 } },
    C: { atlas: { sheet: textAtlasUrl, x: 715, y: 69, w: 32, h: 32 } },
    D: { atlas: { sheet: textAtlasUrl, x: 35, y: 137, w: 32, h: 32 } },
    E: { atlas: { sheet: textAtlasUrl, x: 375, y: 137, w: 32, h: 32 } },
    F: { atlas: { sheet: textAtlasUrl, x: 35, y: 171, w: 32, h: 32 } },
    G: { atlas: { sheet: textAtlasUrl, x: 375, y: 171, w: 32, h: 32 } },
    H: { atlas: { sheet: textAtlasUrl, x: 715, y: 171, w: 32, h: 32 } },
    I: { atlas: { sheet: textAtlasUrl, x: 35, y: 205, w: 32, h: 32 } },
    J: { atlas: { sheet: textAtlasUrl, x: 375, y: 205, w: 32, h: 32 } },
    K: { atlas: { sheet: textAtlasUrl, x: 715, y: 205, w: 32, h: 32 } },
    L: { atlas: { sheet: textAtlasUrl, x: 35, y: 239, w: 32, h: 32 } },
    M: { atlas: { sheet: textAtlasUrl, x: 375, y: 239, w: 32, h: 32 } },
    N: { atlas: { sheet: textAtlasUrl, x: 885, y: 239, w: 32, h: 32 } },
    O: { atlas: { sheet: textAtlasUrl, x: 205, y: 273, w: 32, h: 32 } },
    P: { atlas: { sheet: textAtlasUrl, x: 545, y: 273, w: 32, h: 32 } },
    Q: { atlas: { sheet: textAtlasUrl, x: 205, y: 307, w: 32, h: 32 } },
    R: { atlas: { sheet: textAtlasUrl, x: 715, y: 307, w: 32, h: 32 } },
    S: { atlas: { sheet: textAtlasUrl, x: 35, y: 341, w: 32, h: 32 } },
    T: { atlas: { sheet: textAtlasUrl, x: 375, y: 341, w: 32, h: 32 } },
    U: { atlas: { sheet: textAtlasUrl, x: 715, y: 341, w: 32, h: 32 } },
    V: { atlas: { sheet: textAtlasUrl, x: 35, y: 375, w: 32, h: 32 } },
    W: { atlas: { sheet: textAtlasUrl, x: 375, y: 375, w: 32, h: 32 } },
    X: { atlas: { sheet: textAtlasUrl, x: 715, y: 375, w: 32, h: 32 } },
    Y: { atlas: { sheet: textAtlasUrl, x: 35, y: 409, w: 32, h: 32 } },
    Z: { atlas: { sheet: textAtlasUrl, x: 375, y: 409, w: 32, h: 32 } },
    // Lowercase letters
    a: { atlas: { sheet: textAtlasUrl, x: 205, y: 69, w: 32, h: 32 } },
    b: { atlas: { sheet: textAtlasUrl, x: 545, y: 69, w: 32, h: 32 } },
    c: { atlas: { sheet: textAtlasUrl, x: 885, y: 69, w: 32, h: 32 } },
    d: { atlas: { sheet: textAtlasUrl, x: 205, y: 137, w: 32, h: 32 } },
    e: { atlas: { sheet: textAtlasUrl, x: 545, y: 137, w: 32, h: 32 } },
    f: { atlas: { sheet: textAtlasUrl, x: 205, y: 171, w: 32, h: 32 } },
    g: { atlas: { sheet: textAtlasUrl, x: 545, y: 171, w: 32, h: 32 } },
    h: { atlas: { sheet: textAtlasUrl, x: 885, y: 171, w: 32, h: 32 } },
    i: { atlas: { sheet: textAtlasUrl, x: 205, y: 205, w: 32, h: 32 } },
    j: { atlas: { sheet: textAtlasUrl, x: 545, y: 205, w: 32, h: 32 } },
    k: { atlas: { sheet: textAtlasUrl, x: 885, y: 205, w: 32, h: 32 } },
    l: { atlas: { sheet: textAtlasUrl, x: 205, y: 239, w: 32, h: 32 } },
    m: { atlas: { sheet: textAtlasUrl, x: 715, y: 239, w: 32, h: 32 } },
    n: { atlas: { sheet: textAtlasUrl, x: 35, y: 273, w: 32, h: 32 } },
    o: { atlas: { sheet: textAtlasUrl, x: 375, y: 273, w: 32, h: 32 } },
    p: { atlas: { sheet: textAtlasUrl, x: 35, y: 307, w: 32, h: 32 } },
    q: { atlas: { sheet: textAtlasUrl, x: 375, y: 307, w: 32, h: 32 } },
    r: { atlas: { sheet: textAtlasUrl, x: 885, y: 307, w: 32, h: 32 } },
    s: { atlas: { sheet: textAtlasUrl, x: 205, y: 341, w: 32, h: 32 } },
    t: { atlas: { sheet: textAtlasUrl, x: 545, y: 341, w: 32, h: 32 } },
    u: { atlas: { sheet: textAtlasUrl, x: 885, y: 341, w: 32, h: 32 } },
    v: { atlas: { sheet: textAtlasUrl, x: 205, y: 375, w: 32, h: 32 } },
    w: { atlas: { sheet: textAtlasUrl, x: 545, y: 375, w: 32, h: 32 } },
    x: { atlas: { sheet: textAtlasUrl, x: 885, y: 375, w: 32, h: 32 } },
    y: { atlas: { sheet: textAtlasUrl, x: 205, y: 409, w: 32, h: 32 } },
    z: { atlas: { sheet: textAtlasUrl, x: 545, y: 409, w: 32, h: 32 } },
    // Symbols
    '!': { atlas: { sheet: textAtlasUrl, x: 205, y: 1, w: 32, h: 32 } },
    '(': { atlas: { sheet: textAtlasUrl, x: 35, y: 103, w: 32, h: 32 } },
    ')': { atlas: { sheet: textAtlasUrl, x: 205, y: 103, w: 32, h: 32 } },
    '"': { atlas: { sheet: textAtlasUrl, x: 375, y: 103, w: 32, h: 32 } },
    "'": { atlas: { sheet: textAtlasUrl, x: 545, y: 103, w: 32, h: 32 } },
    ':': { atlas: { sheet: textAtlasUrl, x: 715, y: 103, w: 32, h: 32 } },
    ',': { atlas: { sheet: textAtlasUrl, x: 885, y: 103, w: 32, h: 32 } },
    '.': { atlas: { sheet: textAtlasUrl, x: 715, y: 273, w: 32, h: 32 } },
    '?': { atlas: { sheet: textAtlasUrl, x: 545, y: 307, w: 32, h: 32 } },
    '-': { atlas: { sheet: textAtlasUrl, x: 545, y: 239, w: 32, h: 32 } },
    '+': { atlas: { sheet: textAtlasUrl, x: 885, y: 273, w: 32, h: 32 } },
    '...': { atlas: { sheet: textAtlasUrl, x: 715, y: 137, w: 32, h: 32 } },
    '...2': { atlas: { sheet: textAtlasUrl, x: 885, y: 137, w: 32, h: 32 } }
  },
  Red: {
    // Accent
    accentE: { atlas: { sheet: textAtlasUrl, x: 69, y: 1, w: 32, h: 32 } },
    // Numbers
    '0': { atlas: { sheet: textAtlasUrl, x: 409, y: 1, w: 32, h: 32 } },
    '1': { atlas: { sheet: textAtlasUrl, x: 579, y: 1, w: 32, h: 32 } },
    '2': { atlas: { sheet: textAtlasUrl, x: 749, y: 1, w: 32, h: 32 } },
    '3': { atlas: { sheet: textAtlasUrl, x: 919, y: 1, w: 32, h: 32 } },
    '4': { atlas: { sheet: textAtlasUrl, x: 69, y: 35, w: 32, h: 32 } },
    '5': { atlas: { sheet: textAtlasUrl, x: 239, y: 35, w: 32, h: 32 } },
    '6': { atlas: { sheet: textAtlasUrl, x: 409, y: 35, w: 32, h: 32 } },
    '7': { atlas: { sheet: textAtlasUrl, x: 579, y: 35, w: 32, h: 32 } },
    '8': { atlas: { sheet: textAtlasUrl, x: 749, y: 35, w: 32, h: 32 } },
    '9': { atlas: { sheet: textAtlasUrl, x: 919, y: 35, w: 32, h: 32 } },
    // Uppercase letters
    A: { atlas: { sheet: textAtlasUrl, x: 69, y: 69, w: 32, h: 32 } },
    B: { atlas: { sheet: textAtlasUrl, x: 409, y: 69, w: 32, h: 32 } },
    C: { atlas: { sheet: textAtlasUrl, x: 749, y: 69, w: 32, h: 32 } },
    D: { atlas: { sheet: textAtlasUrl, x: 69, y: 137, w: 32, h: 32 } },
    E: { atlas: { sheet: textAtlasUrl, x: 409, y: 137, w: 32, h: 32 } },
    F: { atlas: { sheet: textAtlasUrl, x: 69, y: 171, w: 32, h: 32 } },
    G: { atlas: { sheet: textAtlasUrl, x: 409, y: 171, w: 32, h: 32 } },
    H: { atlas: { sheet: textAtlasUrl, x: 749, y: 171, w: 32, h: 32 } },
    I: { atlas: { sheet: textAtlasUrl, x: 69, y: 205, w: 32, h: 32 } },
    J: { atlas: { sheet: textAtlasUrl, x: 409, y: 205, w: 32, h: 32 } },
    K: { atlas: { sheet: textAtlasUrl, x: 749, y: 205, w: 32, h: 32 } },
    L: { atlas: { sheet: textAtlasUrl, x: 69, y: 239, w: 32, h: 32 } },
    M: { atlas: { sheet: textAtlasUrl, x: 409, y: 239, w: 32, h: 32 } },
    N: { atlas: { sheet: textAtlasUrl, x: 919, y: 239, w: 32, h: 32 } },
    O: { atlas: { sheet: textAtlasUrl, x: 239, y: 273, w: 32, h: 32 } },
    P: { atlas: { sheet: textAtlasUrl, x: 579, y: 273, w: 32, h: 32 } },
    Q: { atlas: { sheet: textAtlasUrl, x: 239, y: 307, w: 32, h: 32 } },
    R: { atlas: { sheet: textAtlasUrl, x: 749, y: 307, w: 32, h: 32 } },
    S: { atlas: { sheet: textAtlasUrl, x: 69, y: 341, w: 32, h: 32 } },
    T: { atlas: { sheet: textAtlasUrl, x: 409, y: 341, w: 32, h: 32 } },
    U: { atlas: { sheet: textAtlasUrl, x: 749, y: 341, w: 32, h: 32 } },
    V: { atlas: { sheet: textAtlasUrl, x: 69, y: 375, w: 32, h: 32 } },
    W: { atlas: { sheet: textAtlasUrl, x: 409, y: 375, w: 32, h: 32 } },
    X: { atlas: { sheet: textAtlasUrl, x: 749, y: 375, w: 32, h: 32 } },
    Y: { atlas: { sheet: textAtlasUrl, x: 69, y: 409, w: 32, h: 32 } },
    Z: { atlas: { sheet: textAtlasUrl, x: 409, y: 409, w: 32, h: 32 } },
    // Lowercase letters
    a: { atlas: { sheet: textAtlasUrl, x: 239, y: 69, w: 32, h: 32 } },
    b: { atlas: { sheet: textAtlasUrl, x: 579, y: 69, w: 32, h: 32 } },
    c: { atlas: { sheet: textAtlasUrl, x: 919, y: 69, w: 32, h: 32 } },
    d: { atlas: { sheet: textAtlasUrl, x: 239, y: 137, w: 32, h: 32 } },
    e: { atlas: { sheet: textAtlasUrl, x: 579, y: 137, w: 32, h: 32 } },
    f: { atlas: { sheet: textAtlasUrl, x: 239, y: 171, w: 32, h: 32 } },
    g: { atlas: { sheet: textAtlasUrl, x: 579, y: 171, w: 32, h: 32 } },
    h: { atlas: { sheet: textAtlasUrl, x: 919, y: 171, w: 32, h: 32 } },
    i: { atlas: { sheet: textAtlasUrl, x: 239, y: 205, w: 32, h: 32 } },
    j: { atlas: { sheet: textAtlasUrl, x: 579, y: 205, w: 32, h: 32 } },
    k: { atlas: { sheet: textAtlasUrl, x: 919, y: 205, w: 32, h: 32 } },
    l: { atlas: { sheet: textAtlasUrl, x: 239, y: 239, w: 32, h: 32 } },
    m: { atlas: { sheet: textAtlasUrl, x: 749, y: 239, w: 32, h: 32 } },
    n: { atlas: { sheet: textAtlasUrl, x: 69, y: 273, w: 32, h: 32 } },
    o: { atlas: { sheet: textAtlasUrl, x: 409, y: 273, w: 32, h: 32 } },
    p: { atlas: { sheet: textAtlasUrl, x: 69, y: 307, w: 32, h: 32 } },
    q: { atlas: { sheet: textAtlasUrl, x: 409, y: 307, w: 32, h: 32 } },
    r: { atlas: { sheet: textAtlasUrl, x: 919, y: 307, w: 32, h: 32 } },
    s: { atlas: { sheet: textAtlasUrl, x: 239, y: 341, w: 32, h: 32 } },
    t: { atlas: { sheet: textAtlasUrl, x: 579, y: 341, w: 32, h: 32 } },
    u: { atlas: { sheet: textAtlasUrl, x: 919, y: 341, w: 32, h: 32 } },
    v: { atlas: { sheet: textAtlasUrl, x: 239, y: 375, w: 32, h: 32 } },
    w: { atlas: { sheet: textAtlasUrl, x: 579, y: 375, w: 32, h: 32 } },
    x: { atlas: { sheet: textAtlasUrl, x: 919, y: 375, w: 32, h: 32 } },
    y: { atlas: { sheet: textAtlasUrl, x: 239, y: 409, w: 32, h: 32 } },
    z: { atlas: { sheet: textAtlasUrl, x: 579, y: 409, w: 32, h: 32 } },
    // Symbols
    '!': { atlas: { sheet: textAtlasUrl, x: 239, y: 1, w: 32, h: 32 } },
    '(': { atlas: { sheet: textAtlasUrl, x: 69, y: 103, w: 32, h: 32 } },
    ')': { atlas: { sheet: textAtlasUrl, x: 239, y: 103, w: 32, h: 32 } },
    '"': { atlas: { sheet: textAtlasUrl, x: 409, y: 103, w: 32, h: 32 } },
    "'": { atlas: { sheet: textAtlasUrl, x: 579, y: 103, w: 32, h: 32 } },
    ':': { atlas: { sheet: textAtlasUrl, x: 749, y: 103, w: 32, h: 32 } },
    ',': { atlas: { sheet: textAtlasUrl, x: 919, y: 103, w: 32, h: 32 } },
    '.': { atlas: { sheet: textAtlasUrl, x: 749, y: 273, w: 32, h: 32 } },
    '?': { atlas: { sheet: textAtlasUrl, x: 579, y: 307, w: 32, h: 32 } },
    '-': { atlas: { sheet: textAtlasUrl, x: 579, y: 239, w: 32, h: 32 } },
    '+': { atlas: { sheet: textAtlasUrl, x: 919, y: 273, w: 32, h: 32 } },
    '...': { atlas: { sheet: textAtlasUrl, x: 749, y: 137, w: 32, h: 32 } },
    '...2': { atlas: { sheet: textAtlasUrl, x: 919, y: 137, w: 32, h: 32 } }
  },
  White: {
    // Accent
    accentE: { atlas: { sheet: textAtlasUrl, x: 103, y: 1, w: 32, h: 32 } },
    // Numbers
    '0': { atlas: { sheet: textAtlasUrl, x: 443, y: 1, w: 32, h: 32 } },
    '1': { atlas: { sheet: textAtlasUrl, x: 613, y: 1, w: 32, h: 32 } },
    '2': { atlas: { sheet: textAtlasUrl, x: 783, y: 1, w: 32, h: 32 } },
    '3': { atlas: { sheet: textAtlasUrl, x: 953, y: 1, w: 32, h: 32 } },
    '4': { atlas: { sheet: textAtlasUrl, x: 103, y: 35, w: 32, h: 32 } },
    '5': { atlas: { sheet: textAtlasUrl, x: 273, y: 35, w: 32, h: 32 } },
    '6': { atlas: { sheet: textAtlasUrl, x: 443, y: 35, w: 32, h: 32 } },
    '7': { atlas: { sheet: textAtlasUrl, x: 613, y: 35, w: 32, h: 32 } },
    '8': { atlas: { sheet: textAtlasUrl, x: 783, y: 35, w: 32, h: 32 } },
    '9': { atlas: { sheet: textAtlasUrl, x: 953, y: 35, w: 32, h: 32 } },
    // Uppercase letters
    A: { atlas: { sheet: textAtlasUrl, x: 103, y: 69, w: 32, h: 32 } },
    B: { atlas: { sheet: textAtlasUrl, x: 443, y: 69, w: 32, h: 32 } },
    C: { atlas: { sheet: textAtlasUrl, x: 783, y: 69, w: 32, h: 32 } },
    D: { atlas: { sheet: textAtlasUrl, x: 103, y: 137, w: 32, h: 32 } },
    E: { atlas: { sheet: textAtlasUrl, x: 443, y: 137, w: 32, h: 32 } },
    F: { atlas: { sheet: textAtlasUrl, x: 103, y: 171, w: 32, h: 32 } },
    G: { atlas: { sheet: textAtlasUrl, x: 443, y: 171, w: 32, h: 32 } },
    H: { atlas: { sheet: textAtlasUrl, x: 783, y: 171, w: 32, h: 32 } },
    I: { atlas: { sheet: textAtlasUrl, x: 103, y: 205, w: 32, h: 32 } },
    J: { atlas: { sheet: textAtlasUrl, x: 443, y: 205, w: 32, h: 32 } },
    K: { atlas: { sheet: textAtlasUrl, x: 783, y: 205, w: 32, h: 32 } },
    L: { atlas: { sheet: textAtlasUrl, x: 103, y: 239, w: 32, h: 32 } },
    M: { atlas: { sheet: textAtlasUrl, x: 443, y: 239, w: 32, h: 32 } },
    N: { atlas: { sheet: textAtlasUrl, x: 953, y: 239, w: 32, h: 32 } },
    O: { atlas: { sheet: textAtlasUrl, x: 273, y: 273, w: 32, h: 32 } },
    P: { atlas: { sheet: textAtlasUrl, x: 613, y: 273, w: 32, h: 32 } },
    Q: { atlas: { sheet: textAtlasUrl, x: 273, y: 307, w: 32, h: 32 } },
    R: { atlas: { sheet: textAtlasUrl, x: 783, y: 307, w: 32, h: 32 } },
    S: { atlas: { sheet: textAtlasUrl, x: 103, y: 341, w: 32, h: 32 } },
    T: { atlas: { sheet: textAtlasUrl, x: 443, y: 341, w: 32, h: 32 } },
    U: { atlas: { sheet: textAtlasUrl, x: 783, y: 341, w: 32, h: 32 } },
    V: { atlas: { sheet: textAtlasUrl, x: 103, y: 375, w: 32, h: 32 } },
    W: { atlas: { sheet: textAtlasUrl, x: 443, y: 375, w: 32, h: 32 } },
    X: { atlas: { sheet: textAtlasUrl, x: 783, y: 375, w: 32, h: 32 } },
    Y: { atlas: { sheet: textAtlasUrl, x: 103, y: 409, w: 32, h: 32 } },
    Z: { atlas: { sheet: textAtlasUrl, x: 443, y: 409, w: 32, h: 32 } },
    // Lowercase letters
    a: { atlas: { sheet: textAtlasUrl, x: 273, y: 69, w: 32, h: 32 } },
    b: { atlas: { sheet: textAtlasUrl, x: 613, y: 69, w: 32, h: 32 } },
    c: { atlas: { sheet: textAtlasUrl, x: 953, y: 69, w: 32, h: 32 } },
    d: { atlas: { sheet: textAtlasUrl, x: 273, y: 137, w: 32, h: 32 } },
    e: { atlas: { sheet: textAtlasUrl, x: 613, y: 137, w: 32, h: 32 } },
    f: { atlas: { sheet: textAtlasUrl, x: 273, y: 171, w: 32, h: 32 } },
    g: { atlas: { sheet: textAtlasUrl, x: 613, y: 171, w: 32, h: 32 } },
    h: { atlas: { sheet: textAtlasUrl, x: 953, y: 171, w: 32, h: 32 } },
    i: { atlas: { sheet: textAtlasUrl, x: 273, y: 205, w: 32, h: 32 } },
    j: { atlas: { sheet: textAtlasUrl, x: 613, y: 205, w: 32, h: 32 } },
    k: { atlas: { sheet: textAtlasUrl, x: 953, y: 205, w: 32, h: 32 } },
    l: { atlas: { sheet: textAtlasUrl, x: 273, y: 239, w: 32, h: 32 } },
    m: { atlas: { sheet: textAtlasUrl, x: 783, y: 239, w: 32, h: 32 } },
    n: { atlas: { sheet: textAtlasUrl, x: 103, y: 273, w: 32, h: 32 } },
    o: { atlas: { sheet: textAtlasUrl, x: 443, y: 273, w: 32, h: 32 } },
    p: { atlas: { sheet: textAtlasUrl, x: 103, y: 307, w: 32, h: 32 } },
    q: { atlas: { sheet: textAtlasUrl, x: 443, y: 307, w: 32, h: 32 } },
    r: { atlas: { sheet: textAtlasUrl, x: 953, y: 307, w: 32, h: 32 } },
    s: { atlas: { sheet: textAtlasUrl, x: 273, y: 341, w: 32, h: 32 } },
    t: { atlas: { sheet: textAtlasUrl, x: 613, y: 341, w: 32, h: 32 } },
    u: { atlas: { sheet: textAtlasUrl, x: 953, y: 341, w: 32, h: 32 } },
    v: { atlas: { sheet: textAtlasUrl, x: 273, y: 375, w: 32, h: 32 } },
    w: { atlas: { sheet: textAtlasUrl, x: 613, y: 375, w: 32, h: 32 } },
    x: { atlas: { sheet: textAtlasUrl, x: 953, y: 375, w: 32, h: 32 } },
    y: { atlas: { sheet: textAtlasUrl, x: 273, y: 409, w: 32, h: 32 } },
    z: { atlas: { sheet: textAtlasUrl, x: 613, y: 409, w: 32, h: 32 } },
    // Symbols
    '!': { atlas: { sheet: textAtlasUrl, x: 273, y: 1, w: 32, h: 32 } },
    '(': { atlas: { sheet: textAtlasUrl, x: 103, y: 103, w: 32, h: 32 } },
    ')': { atlas: { sheet: textAtlasUrl, x: 273, y: 103, w: 32, h: 32 } },
    '"': { atlas: { sheet: textAtlasUrl, x: 443, y: 103, w: 32, h: 32 } },
    "'": { atlas: { sheet: textAtlasUrl, x: 613, y: 103, w: 32, h: 32 } },
    ':': { atlas: { sheet: textAtlasUrl, x: 783, y: 103, w: 32, h: 32 } },
    ',': { atlas: { sheet: textAtlasUrl, x: 953, y: 103, w: 32, h: 32 } },
    '.': { atlas: { sheet: textAtlasUrl, x: 783, y: 273, w: 32, h: 32 } },
    '?': { atlas: { sheet: textAtlasUrl, x: 613, y: 307, w: 32, h: 32 } },
    '-': { atlas: { sheet: textAtlasUrl, x: 613, y: 239, w: 32, h: 32 } },
    '+': { atlas: { sheet: textAtlasUrl, x: 953, y: 273, w: 32, h: 32 } },
    '...': { atlas: { sheet: textAtlasUrl, x: 783, y: 137, w: 32, h: 32 } },
    '...2': { atlas: { sheet: textAtlasUrl, x: 953, y: 137, w: 32, h: 32 } }
  },
  Yellow: {
    // Accent
    accentE: { atlas: { sheet: textAtlasUrl, x: 137, y: 1, w: 32, h: 32 } },
    // Numbers
    '0': { atlas: { sheet: textAtlasUrl, x: 477, y: 1, w: 32, h: 32 } },
    '1': { atlas: { sheet: textAtlasUrl, x: 647, y: 1, w: 32, h: 32 } },
    '2': { atlas: { sheet: textAtlasUrl, x: 817, y: 1, w: 32, h: 32 } },
    '3': { atlas: { sheet: textAtlasUrl, x: 987, y: 1, w: 32, h: 32 } },
    '4': { atlas: { sheet: textAtlasUrl, x: 137, y: 35, w: 32, h: 32 } },
    '5': { atlas: { sheet: textAtlasUrl, x: 307, y: 35, w: 32, h: 32 } },
    '6': { atlas: { sheet: textAtlasUrl, x: 477, y: 35, w: 32, h: 32 } },
    '7': { atlas: { sheet: textAtlasUrl, x: 647, y: 35, w: 32, h: 32 } },
    '8': { atlas: { sheet: textAtlasUrl, x: 817, y: 35, w: 32, h: 32 } },
    '9': { atlas: { sheet: textAtlasUrl, x: 987, y: 35, w: 32, h: 32 } },
    // Uppercase letters
    A: { atlas: { sheet: textAtlasUrl, x: 137, y: 69, w: 32, h: 32 } },
    B: { atlas: { sheet: textAtlasUrl, x: 477, y: 69, w: 32, h: 32 } },
    C: { atlas: { sheet: textAtlasUrl, x: 817, y: 69, w: 32, h: 32 } },
    D: { atlas: { sheet: textAtlasUrl, x: 137, y: 137, w: 32, h: 32 } },
    E: { atlas: { sheet: textAtlasUrl, x: 477, y: 137, w: 32, h: 32 } },
    F: { atlas: { sheet: textAtlasUrl, x: 137, y: 171, w: 32, h: 32 } },
    G: { atlas: { sheet: textAtlasUrl, x: 477, y: 171, w: 32, h: 32 } },
    H: { atlas: { sheet: textAtlasUrl, x: 817, y: 171, w: 32, h: 32 } },
    I: { atlas: { sheet: textAtlasUrl, x: 137, y: 205, w: 32, h: 32 } },
    J: { atlas: { sheet: textAtlasUrl, x: 477, y: 205, w: 32, h: 32 } },
    K: { atlas: { sheet: textAtlasUrl, x: 817, y: 205, w: 32, h: 32 } },
    L: { atlas: { sheet: textAtlasUrl, x: 137, y: 239, w: 32, h: 32 } },
    M: { atlas: { sheet: textAtlasUrl, x: 477, y: 239, w: 32, h: 32 } },
    N: { atlas: { sheet: textAtlasUrl, x: 987, y: 239, w: 32, h: 32 } },
    O: { atlas: { sheet: textAtlasUrl, x: 307, y: 273, w: 32, h: 32 } },
    P: { atlas: { sheet: textAtlasUrl, x: 647, y: 273, w: 32, h: 32 } },
    Q: { atlas: { sheet: textAtlasUrl, x: 307, y: 307, w: 32, h: 32 } },
    R: { atlas: { sheet: textAtlasUrl, x: 817, y: 307, w: 32, h: 32 } },
    S: { atlas: { sheet: textAtlasUrl, x: 137, y: 341, w: 32, h: 32 } },
    T: { atlas: { sheet: textAtlasUrl, x: 477, y: 341, w: 32, h: 32 } },
    U: { atlas: { sheet: textAtlasUrl, x: 817, y: 341, w: 32, h: 32 } },
    V: { atlas: { sheet: textAtlasUrl, x: 137, y: 375, w: 32, h: 32 } },
    W: { atlas: { sheet: textAtlasUrl, x: 477, y: 375, w: 32, h: 32 } },
    X: { atlas: { sheet: textAtlasUrl, x: 817, y: 375, w: 32, h: 32 } },
    Y: { atlas: { sheet: textAtlasUrl, x: 137, y: 409, w: 32, h: 32 } },
    Z: { atlas: { sheet: textAtlasUrl, x: 477, y: 409, w: 32, h: 32 } },
    // Lowercase letters
    a: { atlas: { sheet: textAtlasUrl, x: 307, y: 69, w: 32, h: 32 } },
    b: { atlas: { sheet: textAtlasUrl, x: 647, y: 69, w: 32, h: 32 } },
    c: { atlas: { sheet: textAtlasUrl, x: 987, y: 69, w: 32, h: 32 } },
    d: { atlas: { sheet: textAtlasUrl, x: 307, y: 137, w: 32, h: 32 } },
    e: { atlas: { sheet: textAtlasUrl, x: 647, y: 137, w: 32, h: 32 } },
    f: { atlas: { sheet: textAtlasUrl, x: 307, y: 171, w: 32, h: 32 } },
    g: { atlas: { sheet: textAtlasUrl, x: 647, y: 171, w: 32, h: 32 } },
    h: { atlas: { sheet: textAtlasUrl, x: 987, y: 171, w: 32, h: 32 } },
    i: { atlas: { sheet: textAtlasUrl, x: 307, y: 205, w: 32, h: 32 } },
    j: { atlas: { sheet: textAtlasUrl, x: 647, y: 205, w: 32, h: 32 } },
    k: { atlas: { sheet: textAtlasUrl, x: 987, y: 205, w: 32, h: 32 } },
    l: { atlas: { sheet: textAtlasUrl, x: 307, y: 239, w: 32, h: 32 } },
    m: { atlas: { sheet: textAtlasUrl, x: 817, y: 239, w: 32, h: 32 } },
    n: { atlas: { sheet: textAtlasUrl, x: 137, y: 273, w: 32, h: 32 } },
    o: { atlas: { sheet: textAtlasUrl, x: 477, y: 273, w: 32, h: 32 } },
    p: { atlas: { sheet: textAtlasUrl, x: 137, y: 307, w: 32, h: 32 } },
    q: { atlas: { sheet: textAtlasUrl, x: 477, y: 307, w: 32, h: 32 } },
    r: { atlas: { sheet: textAtlasUrl, x: 987, y: 307, w: 32, h: 32 } },
    s: { atlas: { sheet: textAtlasUrl, x: 307, y: 341, w: 32, h: 32 } },
    t: { atlas: { sheet: textAtlasUrl, x: 647, y: 341, w: 32, h: 32 } },
    u: { atlas: { sheet: textAtlasUrl, x: 987, y: 341, w: 32, h: 32 } },
    v: { atlas: { sheet: textAtlasUrl, x: 307, y: 375, w: 32, h: 32 } },
    w: { atlas: { sheet: textAtlasUrl, x: 647, y: 375, w: 32, h: 32 } },
    x: { atlas: { sheet: textAtlasUrl, x: 987, y: 375, w: 32, h: 32 } },
    y: { atlas: { sheet: textAtlasUrl, x: 307, y: 409, w: 32, h: 32 } },
    z: { atlas: { sheet: textAtlasUrl, x: 647, y: 409, w: 32, h: 32 } },
    // Symbols
    '!': { atlas: { sheet: textAtlasUrl, x: 307, y: 1, w: 32, h: 32 } },
    '(': { atlas: { sheet: textAtlasUrl, x: 137, y: 103, w: 32, h: 32 } },
    ')': { atlas: { sheet: textAtlasUrl, x: 307, y: 103, w: 32, h: 32 } },
    '"': { atlas: { sheet: textAtlasUrl, x: 477, y: 103, w: 32, h: 32 } },
    "'": { atlas: { sheet: textAtlasUrl, x: 647, y: 103, w: 32, h: 32 } },
    ':': { atlas: { sheet: textAtlasUrl, x: 817, y: 103, w: 32, h: 32 } },
    ',': { atlas: { sheet: textAtlasUrl, x: 987, y: 103, w: 32, h: 32 } },
    '.': { atlas: { sheet: textAtlasUrl, x: 817, y: 273, w: 32, h: 32 } },
    '?': { atlas: { sheet: textAtlasUrl, x: 647, y: 307, w: 32, h: 32 } },
    '-': { atlas: { sheet: textAtlasUrl, x: 647, y: 239, w: 32, h: 32 } },
    '+': { atlas: { sheet: textAtlasUrl, x: 987, y: 273, w: 32, h: 32 } },
    '...': { atlas: { sheet: textAtlasUrl, x: 817, y: 137, w: 32, h: 32 } },
    '...2': { atlas: { sheet: textAtlasUrl, x: 987, y: 137, w: 32, h: 32 } }
  }
}

const DMGAtlas = {
  DMG1: {
    1: { atlas: { sheet: DMGAtlasUrl, x: 169, y: 60, w: 40, h: 57 } },
    2: { atlas: { sheet: DMGAtlasUrl, x: 127, y: 60, w: 40, h: 57 } },
    3: { atlas: { sheet: DMGAtlasUrl, x: 85, y: 60, w: 40, h: 57 } },
    4: { atlas: { sheet: DMGAtlasUrl, x: 43, y: 60, w: 40, h: 57 } },
    5: { atlas: { sheet: DMGAtlasUrl, x: 1, y: 60, w: 40, h: 57 } },
    6: { atlas: { sheet: DMGAtlasUrl, x: 211, y: 1, w: 40, h: 57 } },
    7: { atlas: { sheet: DMGAtlasUrl, x: 169, y: 1, w: 40, h: 57 } },
    8: { atlas: { sheet: DMGAtlasUrl, x: 127, y: 1, w: 40, h: 57 } },
    9: { atlas: { sheet: DMGAtlasUrl, x: 85, y: 1, w: 40, h: 57 } },
    10: { atlas: { sheet: DMGAtlasUrl, x: 43, y: 1, w: 40, h: 57 } },
    11: { atlas: { sheet: DMGAtlasUrl, x: 1, y: 1, w: 40, h: 57 } }
  }
}
const ItemAtlas = {

  // Seeds
  Reviverseed: { atlas: { sheet: itemAtlasUrl, x: 107, y: 37, w: 16, h: 16 } },
  
  // Food
  Apple: { atlas: { sheet: itemAtlasUrl, x: 27, y: 37, w: 18, h: 18 } },
  Bigapple: { atlas: { sheet: itemAtlasUrl, x: 47, y: 37, w: 18, h: 18 } },
  Goldenapple: { atlas: { sheet: itemAtlasUrl, x: 67, y: 37, w: 18, h: 18 } },
  Grimyfood: { atlas: { sheet: itemAtlasUrl, x: 87, y: 37, w: 18, h: 18 } },
  
  // Drinks
  Maxether: { atlas: { sheet: itemAtlasUrl, x: 41, y: 17, w: 18, h: 18 } },
  Maxelixir: { atlas: { sheet: itemAtlasUrl, x: 1, y: 37, w: 24, h: 24 } },
  Protein: { atlas: { sheet: itemAtlasUrl, x: 81, y: 17, w: 18, h: 18 } },
  Calcium: { atlas: { sheet: itemAtlasUrl, x: 1, y: 17, w: 18, h: 18 } },
  Iron: { atlas: { sheet: itemAtlasUrl, x: 61, y: 17, w: 18, h: 18 } },
  Zinc: { atlas: { sheet: itemAtlasUrl, x: 101, y: 17, w: 18, h: 18 } },
  Carbos: { atlas: { sheet: itemAtlasUrl, x: 21, y: 17, w: 18, h: 18 } },
  
  // Equipment
  Scarf: { atlas: { sheet: itemAtlasUrl, x: 8, y: 7, w: 16, h: 14 } },
  
  // Orbs
  Orb: { atlas: { sheet: itemAtlasUrl, x: 19, y: 1, w: 16, h: 14 } },
  
  // Throwables
  GeoPebble: { atlas: { sheet: itemAtlasUrl, x: 51, y: 1, w: 12, h: 9 } }
};
const PokemonAtlas = {
  Vaporeon: {
  idle: {
    down: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 169, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 211, y: 217, w: 40, h: 56 } } 
    },
    left: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 253, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 295, y: 217, w: 40, h: 56 } } 
    },
    right: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 337, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 379, y: 217, w: 40, h: 56 } } 
    },
    up: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 589, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 631, y: 217, w: 40, h: 56 } } 
    },
    downleft: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 1, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 43, y: 217, w: 40, h: 56 } } 
    },
    downright: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 85, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 127, y: 217, w: 40, h: 56 } } 
    },
    upleft: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 421, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 463, y: 217, w: 40, h: 56 } } 
    },
    upright: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 505, y: 217, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 547, y: 217, w: 40, h: 56 } } 
    }
  },
  walk: {
    down: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 337, y: 1, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 379, y: 1, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 421, y: 1, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 463, y: 1, w: 40, h: 56 } } 
    },
    up: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 169, y: 59, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 211, y: 59, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 253, y: 59, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 295, y: 59, w: 40, h: 56 } } 
    },
    right: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 673, y: 1, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 715, y: 1, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 757, y: 1, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 799, y: 1, w: 40, h: 56 } } 
    },
    left: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 505, y: 1, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 547, y: 1, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 589, y: 1, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 631, y: 1, w: 40, h: 56 } } 
    },
    downleft: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 1, y: 1, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 43, y: 1, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 85, y: 1, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 127, y: 1, w: 40, h: 56 } } 
    },
    downright: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 169, y: 1, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 211, y: 1, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 253, y: 1, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 295, y: 1, w: 40, h: 56 } } 
    },
    upleft: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 841, y: 1, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 883, y: 1, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 925, y: 1, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 967, y: 1, w: 40, h: 56 } } 
    },
    upright: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 1, y: 59, w: 40, h: 56 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 43, y: 59, w: 40, h: 56 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 85, y: 59, w: 40, h: 56 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 127, y: 59, w: 40, h: 56 } } 
    }
  },
  spin:
    {
    down: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 915, y: 59, w: 32, h: 48 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 949, y: 59, w: 32, h: 48 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 983, y: 59, w: 32, h: 48 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 1, y: 117, w: 32, h: 48 } }, 
    5: { atlas: { sheet: pokemonAtlasUrl, x: 35, y: 117, w: 32, h: 48 } }, 
    6: { atlas: { sheet: pokemonAtlasUrl, x: 69, y: 117, w: 32, h: 48 } }, 
    7: { atlas: { sheet: pokemonAtlasUrl, x: 103, y: 117, w: 32, h: 48 } }, 
    8: { atlas: { sheet: pokemonAtlasUrl, x: 137, y: 117, w: 32, h: 48 } }, 
    9: { atlas: { sheet: pokemonAtlasUrl, x: 171, y: 117, w: 32, h: 48 } } 
    },
    up: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 409, y: 167, w: 32, h: 48 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 443, y: 167, w: 32, h: 48 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 477, y: 167, w: 32, h: 48 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 511, y: 167, w: 32, h: 48 } }, 
    5: { atlas: { sheet: pokemonAtlasUrl, x: 545, y: 167, w: 32, h: 48 } }, 
    6: { atlas: { sheet: pokemonAtlasUrl, x: 579, y: 167, w: 32, h: 48 } }, 
    7: { atlas: { sheet: pokemonAtlasUrl, x: 613, y: 167, w: 32, h: 48 } }, 
    8: { atlas: { sheet: pokemonAtlasUrl, x: 647, y: 167, w: 32, h: 48 } }, 
    9: { atlas: { sheet: pokemonAtlasUrl, x: 681, y: 167, w: 32, h: 48 } } 
    },
    left: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 205, y: 117, w: 32, h: 48 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 239, y: 117, w: 32, h: 48 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 273, y: 117, w: 32, h: 48 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 307, y: 117, w: 32, h: 48 } }, 
    5: { atlas: { sheet: pokemonAtlasUrl, x: 341, y: 117, w: 32, h: 48 } }, 
    6: { atlas: { sheet: pokemonAtlasUrl, x: 375, y: 117, w: 32, h: 48 } }, 
    7: { atlas: { sheet: pokemonAtlasUrl, x: 409, y: 117, w: 32, h: 48 } }, 
    8: { atlas: { sheet: pokemonAtlasUrl, x: 443, y: 117, w: 32, h: 48 } }, 
    9: { atlas: { sheet: pokemonAtlasUrl, x: 477, y: 117, w: 32, h: 48 } } 
    },
    right: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 511, y: 117, w: 32, h: 48 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 545, y: 117, w: 32, h: 48 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 579, y: 117, w: 32, h: 48 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 613, y: 117, w: 32, h: 48 } }, 
    5: { atlas: { sheet: pokemonAtlasUrl, x: 647, y: 117, w: 32, h: 48 } }, 
    6: { atlas: { sheet: pokemonAtlasUrl, x: 681, y: 117, w: 32, h: 48 } }, 
    7: { atlas: { sheet: pokemonAtlasUrl, x: 715, y: 117, w: 32, h: 48 } }, 
    8: { atlas: { sheet: pokemonAtlasUrl, x: 749, y: 117, w: 32, h: 48 } }, 
    9: { atlas: { sheet: pokemonAtlasUrl, x: 783, y: 117, w: 32, h: 48 } } 
    },
    downleft: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 783, y: 167, w: 32, h: 48 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 715, y: 167, w: 32, h: 48 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 749, y: 167, w: 32, h: 48 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 405, y: 59, w: 32, h: 48 } }, 
    5: { atlas: { sheet: pokemonAtlasUrl, x: 439, y: 59, w: 32, h: 48 } }, 
    6: { atlas: { sheet: pokemonAtlasUrl, x: 473, y: 59, w: 32, h: 48 } }, 
    7: { atlas: { sheet: pokemonAtlasUrl, x: 507, y: 59, w: 32, h: 48 } }, 
    8: { atlas: { sheet: pokemonAtlasUrl, x: 541, y: 59, w: 32, h: 48 } }, 
    9: { atlas: { sheet: pokemonAtlasUrl, x: 575, y: 59, w: 32, h: 48 } } 
    },
    downright: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 609, y: 59, w: 32, h: 48 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 643, y: 59, w: 32, h: 48 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 677, y: 59, w: 32, h: 48 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 711, y: 59, w: 32, h: 48 } }, 
    5: { atlas: { sheet: pokemonAtlasUrl, x: 745, y: 59, w: 32, h: 48 } }, 
    6: { atlas: { sheet: pokemonAtlasUrl, x: 779, y: 59, w: 32, h: 48 } }, 
    7: { atlas: { sheet: pokemonAtlasUrl, x: 813, y: 59, w: 32, h: 48 } }, 
    8: { atlas: { sheet: pokemonAtlasUrl, x: 847, y: 59, w: 32, h: 48 } }, 
    9: { atlas: { sheet: pokemonAtlasUrl, x: 881, y: 59, w: 32, h: 48 } } 
    },
    upleft: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 817, y: 117, w: 32, h: 48 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 851, y: 117, w: 32, h: 48 } }, 
    3: { atlas: { sheet: pokemonAtlasUrl, x: 885, y: 117, w: 32, h: 48 } }, 
    4: { atlas: { sheet: pokemonAtlasUrl, x: 919, y: 117, w: 32, h: 48 } }, 
    5: { atlas: { sheet: pokemonAtlasUrl, x: 953, y: 117, w: 32, h: 48 } }, 
    6: { atlas: { sheet: pokemonAtlasUrl, x: 987, y: 117, w: 32, h: 48 } }, 
    7: { atlas: { sheet: pokemonAtlasUrl, x: 1, y: 167, w: 32, h: 48 } }, 
    8: { atlas: { sheet: pokemonAtlasUrl, x: 35, y: 167, w: 32, h: 48 } }, 
    9: { atlas: { sheet: pokemonAtlasUrl, x: 69, y: 167, w: 32, h: 48 } } 
    },
    upright: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 103, y: 167, w: 32, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 137, y: 167, w: 32, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 171, y: 167, w: 32, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 205, y: 167, w: 32, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 239, y: 167, w: 32, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 273, y: 167, w: 32, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 307, y: 167, w: 32, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 341, y: 167, w: 32, h: 48 } },
      9: { atlas: { sheet: pokemonAtlasUrl, x: 375, y: 167, w: 32, h: 48 } }
    },
  },
  sleep: { 
  none: { 
    1: { atlas: { sheet: pokemonAtlasUrl, x: 337, y: 59, w: 32, h: 40 } }, 
    2: { atlas: { sheet: pokemonAtlasUrl, x: 371, y: 59, w: 32, h: 40 } } 
  } 
}
},
Lunatone: {
  idle: {
    down: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 817, y: 167, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 843, y: 167, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 869, y: 167, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 895, y: 167, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 921, y: 167, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 947, y: 167, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 973, y: 167, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 999, y: 167, w: 24, h: 48 } }
    },
    up: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 495, y: 275, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 521, y: 275, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 547, y: 275, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 573, y: 275, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 599, y: 275, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 625, y: 275, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 651, y: 275, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 677, y: 275, w: 24, h: 48 } }
    },
    left: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 79, y: 275, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 105, y: 275, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 131, y: 275, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 157, y: 275, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 183, y: 275, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 209, y: 275, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 235, y: 275, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 261, y: 275, w: 24, h: 48 } }
    },
    right: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 287, y: 275, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 313, y: 275, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 339, y: 275, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 365, y: 275, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 391, y: 275, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 417, y: 275, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 443, y: 275, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 469, y: 275, w: 24, h: 48 } }
    },
    downLeft: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 673, y: 217, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 699, y: 217, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 725, y: 217, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 751, y: 217, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 777, y: 217, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 803, y: 217, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 829, y: 217, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 855, y: 217, w: 24, h: 48 } }
    },
    downRight: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 881, y: 217, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 907, y: 217, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 933, y: 217, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 959, y: 217, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 985, y: 217, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 1, y: 275, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 27, y: 275, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 53, y: 275, w: 24, h: 48 } }
    },
    upLeft: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 703, y: 275, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 729, y: 275, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 755, y: 275, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 781, y: 275, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 807, y: 275, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 833, y: 275, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 859, y: 275, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 885, y: 275, w: 24, h: 48 } }
    },
    upRight: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 911, y: 275, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 937, y: 275, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 963, y: 275, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 989, y: 275, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 1, y: 325, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 27, y: 325, w: 24, h: 48 } },
      7: { atlas: { sheet: pokemonAtlasUrl, x: 53, y: 325, w: 24, h: 48 } },
      8: { atlas: { sheet: pokemonAtlasUrl, x: 79, y: 325, w: 24, h: 48 } }
    }
},
sleep: {
  none: {
      1: { atlas: { sheet: pokemonAtlasUrl, x: 209, y: 325, w: 24, h: 48 } },
      2: { atlas: { sheet: pokemonAtlasUrl, x: 235, y: 325, w: 24, h: 48 } },
      3: { atlas: { sheet: pokemonAtlasUrl, x: 261, y: 325, w: 24, h: 48 } },
      4: { atlas: { sheet: pokemonAtlasUrl, x: 287, y: 325, w: 24, h: 48 } },
      5: { atlas: { sheet: pokemonAtlasUrl, x: 313, y: 325, w: 24, h: 48 } },
      6: { atlas: { sheet: pokemonAtlasUrl, x: 339, y: 325, w: 24, h: 48 } }
    }
}
}
};

const vfxAtlas = {
  AquaTail: {
    down: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 149, y: 371, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 75, y: 371, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 371, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 889, y: 297, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 815, y: 297, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 445, y: 371, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 371, y: 371, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 297, y: 371, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 223, y: 371, w: 72, h: 72 } }
    },
    up: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 667, y: 75, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 593, y: 75, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 519, y: 75, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 445, y: 75, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 371, y: 75, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 149, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 889, y: 75, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 815, y: 75, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 741, y: 75, w: 72, h: 72 } }
    },
    left: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 75, y: 223, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 223, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 889, y: 149, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 815, y: 149, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 741, y: 149, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 371, y: 223, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 297, y: 223, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 223, y: 223, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 149, y: 223, w: 72, h: 72 } }
    },
    right: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 371, y: 149, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 297, y: 149, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 223, y: 149, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 149, y: 149, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 75, y: 149, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 667, y: 149, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 593, y: 149, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 519, y: 149, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 445, y: 149, w: 72, h: 72 } }
    },
    downleft: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 445, y: 297, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 371, y: 297, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 297, y: 297, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 223, y: 297, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 149, y: 297, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 741, y: 297, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 667, y: 297, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 593, y: 297, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 519, y: 297, w: 72, h: 72 } }
    },
    downright: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 741, y: 223, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 667, y: 223, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 593, y: 223, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 519, y: 223, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 445, y: 223, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 75, y: 297, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 297, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 889, y: 223, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 815, y: 223, w: 72, h: 72 } }
    },
    upleft: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 75, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 889, y: 1, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 815, y: 1, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 741, y: 1, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 667, y: 1, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 297, y: 75, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 223, y: 75, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 149, y: 75, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 75, y: 75, w: 72, h: 72 } }
    },
    upright: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 297, y: 1, w: 72, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 223, y: 1, w: 72, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 149, y: 1, w: 72, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 75, y: 1, w: 72, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 1, w: 72, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 593, y: 1, w: 72, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 519, y: 1, w: 72, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 445, y: 1, w: 72, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 371, y: 1, w: 72, h: 72 } }
    }
  },
  RockThrow: {
    none: {
      1: { atlas: { sheet: vfxAtlasUrl, x: 519, y: 371, w: 64, h: 72 } },
      2: { atlas: { sheet: vfxAtlasUrl, x: 585, y: 371, w: 64, h: 72 } },
      3: { atlas: { sheet: vfxAtlasUrl, x: 651, y: 371, w: 64, h: 72 } },
      4: { atlas: { sheet: vfxAtlasUrl, x: 717, y: 371, w: 64, h: 72 } },
      5: { atlas: { sheet: vfxAtlasUrl, x: 783, y: 371, w: 64, h: 72 } },
      6: { atlas: { sheet: vfxAtlasUrl, x: 849, y: 371, w: 64, h: 72 } },
      7: { atlas: { sheet: vfxAtlasUrl, x: 915, y: 371, w: 64, h: 72 } },
      8: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 445, w: 64, h: 72 } },
      9: { atlas: { sheet: vfxAtlasUrl, x: 67, y: 445, w: 64, h: 72 } },
      10: { atlas: { sheet: vfxAtlasUrl, x: 133, y: 445, w: 64, h: 72 } },
      11: { atlas: { sheet: vfxAtlasUrl, x: 199, y: 445, w: 64, h: 72 } },
      12: { atlas: { sheet: vfxAtlasUrl, x: 265, y: 445, w: 64, h: 72 } },
      13: { atlas: { sheet: vfxAtlasUrl, x: 331, y: 445, w: 64, h: 72 } },
      14: { atlas: { sheet: vfxAtlasUrl, x: 397, y: 445, w: 64, h: 72 } },
      15: { atlas: { sheet: vfxAtlasUrl, x: 463, y: 445, w: 64, h: 72 } },
      16: { atlas: { sheet: vfxAtlasUrl, x: 529, y: 445, w: 64, h: 72 } },
      17: { atlas: { sheet: vfxAtlasUrl, x: 595, y: 445, w: 64, h: 72 } },
      18: { atlas: { sheet: vfxAtlasUrl, x: 661, y: 445, w: 64, h: 72 } },
      19: { atlas: { sheet: vfxAtlasUrl, x: 727, y: 445, w: 64, h: 72 } },
      20: { atlas: { sheet: vfxAtlasUrl, x: 793, y: 445, w: 64, h: 72 } },
      21: { atlas: { sheet: vfxAtlasUrl, x: 859, y: 445, w: 64, h: 72 } },
      22: { atlas: { sheet: vfxAtlasUrl, x: 925, y: 445, w: 64, h: 72 } },
      23: { atlas: { sheet: vfxAtlasUrl, x: 1, y: 519, w: 64, h: 72 } },
      24: { atlas: { sheet: vfxAtlasUrl, x: 67, y: 519, w: 64, h: 72 } },
      25: { atlas: { sheet: vfxAtlasUrl, x: 133, y: 519, w: 64, h: 72 } },
      26: { atlas: { sheet: vfxAtlasUrl, x: 199, y: 519, w: 64, h: 72 } },
      27: { atlas: { sheet: vfxAtlasUrl, x: 265, y: 519, w: 64, h: 72 } },
      28: { atlas: { sheet: vfxAtlasUrl, x: 331, y: 519, w: 64, h: 72 } },
      29: { atlas: { sheet: vfxAtlasUrl, x: 397, y: 519, w: 64, h: 72 } },
      30: { atlas: { sheet: vfxAtlasUrl, x: 463, y: 519, w: 64, h: 72 } }
  }
  }
};

// Helper function to get sprite URL (returns individual URL for backward compatibility)
const getItemSprite = (itemName) => {
  const itemdata = ItemAtlas[itemName];
  if (!itemdata) return null;
  return itemdata.url;
};
const getDMGSprite = (dmgSprite, frame) => {
  const spriteData = DMGAtlas[dmgSprite];
  if (!spriteData) return null;
  const frameData = spriteData[frame];
  if (!frameData) return null;
  return frameData.url;
};
const getPokemonSprite = (pokemon, animation, direction, frame) => {
  const pokemonData = PokemonAtlas[pokemon];
  if (!pokemonData) return null;
  const animData = PokemonAtlas[animation];
  if (!animData) return null;
  const dirData = animData[direction];
  if (!dirData) return null;
  const frameData = dirData[frame];
  if (!frameData) return null;
  return frameData.url;
}
const getVfxSprite = (sprite, direction, frame) => {
const spriteData = vfxAtlas[sprite];
if (!spriteData) return null;
const dirData = spriteData[direction];
if (!dirData) return null;
const frameData = dirData[frame];
if (!frameData) return null;
return frameData.url;
}
const getTextSprite = (color, text) => {
  const colorData = TextAtlas[color];
  if (!colorData) return null;
  const textData = colorData[text];
  if (!textData) return null;
  return textData.url;
}

// Get atlas metadata for a specific item key
const getItemAtlasData = (itemName) => {
  const item = ItemAtlas[itemName];
  return item ? item.atlas : null;
};
const getPokemonAtlasData = (pokemon, animation, direction, frame) => {
  const pokemonData = PokemonAtlas[pokemon];
  if (!pokemonData) return null;
  const animData = pokemonData[animation];
  if (!animData) return null;
  const dirData = animData[direction];
  if (!dirData) return null;
  const frameData = dirData[frame];
  return frameData ? frameData.atlas : null;
};
const getVfxAtlasData = (sprite, direction, frame) => {
  const spriteData = vfxAtlas[sprite];
  if (!spriteData) return null;
  const dirData = spriteData[direction];
  if (!dirData) return null;
  const frameData = dirData[frame];
  return frameData ? frameData.atlas : null;
};
const getDMGAtlasData = (dmgSprite, frame) => {
  const spriteData = DMGAtlas[dmgSprite];
  if (!spriteData) return null;
  const frameData = spriteData[frame];
  return frameData ? frameData.atlas : null;
};
const getTextAtlasData = (color, text) => {
  const colorData = TextAtlas[color];
  if (!colorData) return null;
  const textData = colorData[text];
  return textData ? textData.atlas : null;
};

// Map ItemDef name to ItemAtlas key for rendering
const getAtlasKeyForItemName = (itemDefName) => {
  const nameMap = {
    'Reviver Seed': 'Reviverseed',
    'Stun Seed': 'Reviverseed',
    'Tiny Reviver Seed': 'Reviverseed',
    'Sleep Seed': 'Reviverseed',
    'Warp Seed': 'Reviverseed',
    'Life Seed': 'Reviverseed',
    'Pure Seed': 'Reviverseed',
    'Joy Seed': 'Reviverseed',
    'Apple': 'Apple',
    'Big Apple': 'Bigapple',
    'Golden Apple': 'Goldenapple',
    'Grimy Food': 'Grimyfood',
    'Max Ether': 'Maxether',
    'Max Elixir': 'Maxelixir',
    'Protein': 'Protein',
    'Calcium': 'Calcium',
    'Iron': 'Iron',
    'Zinc': 'Zinc',
    'Carbos': 'Carbos',
    'Scarf': 'Scarf',
    'Luminous Orb': 'Orb',
    'Warp Orb': 'Orb',
    'Geo Pebble': 'GeoPebble'
  };
  return nameMap[itemDefName] || null;
};

// Create compatibility aliases for existing code
const Reviverseed = getItemSprite('Reviverseed');
const Apple = getItemSprite('Apple');
const Bigapple = getItemSprite('Bigapple');
const Goldenapple = getItemSprite('Goldenapple');
const Grimyfood = getItemSprite('Grimyfood');
const Maxether = getItemSprite('Maxether');
const Maxelixir = getItemSprite('Maxelixir');
const Protein = getItemSprite('Protein');
const Calcium = getItemSprite('Calcium');
const Iron = getItemSprite('Iron');
const Zinc = getItemSprite('Zinc');
const Carbos = getItemSprite('Carbos');
const Scarf = getItemSprite('Scarf');
const Orb = getItemSprite('Orb');
const GeoPebble = getItemSprite('GeoPebble');

// ========== SPRITE CANVAS COMPONENT ==========
// Renders a single sprite from an atlas using canvas drawImage
const SpriteCanvas = React.memo(({ pokemon, atlasKey, sprite, animation, direction, frame, color, text, width = 40, height = 40, style = {}, className }) => {
  const canvasRef = React.useRef(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    let atlasData;
    if (atlasKey) {
      // Item atlas
      atlasData = getItemAtlasData(atlasKey);
    } else if (animation && direction && frame !== undefined) {
      // Vaporeon atlas
      atlasData = getPokemonAtlasData(pokemon, animation, direction, frame);
    }
    else if (sprite && direction && frame !== undefined){
      atlasData = getVfxAtlasData(sprite, direction, frame);
    }
    else if (sprite === 'DMG1' && frame !== undefined){
      atlasData = getDMGAtlasData(sprite, frame);
    }
    else if (color && text){
      atlasData = getTextAtlasData(color, text);
    }

    if (!atlasData) {
      console.log('SpriteCanvas missing atlasData', { color, text });
      return;
    }
    
    const render = async () => {
      try {
        const atlasImg = await loadAtlasImage(atlasData.sheet);
        const ctx = canvas.getContext('2d', { willReadFrequently: false });
        
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        
        // Draw the sprite from atlas using drawImage with source and destination rects
        ctx.drawImage(
          atlasImg,
          atlasData.x,      // source x
          atlasData.y,      // source y
          atlasData.w,      // source width
          atlasData.h,      // source height
          0,                // destination x
          0,                // destination y
          width,            // destination width
          height            // destination height
        );
      } catch (err) {
        console.error('Error rendering sprite:', err);
      }
    };
    
    render();
  }, [atlasKey, pokemon, sprite, animation, direction, frame, width, height, color, text]);
  
  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        imageRendering: 'smooth',
        imageResolution: 'from-image 300dpi',
        objectFit: 'contain',
        zIndex: 20,
        ...style
      }}
    />
  );
});
const VaporeonShouting = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_000.png';
const EeveeCrying = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_025.png';

const MOVE_DEFS = {
  "Acid Armor": {
    name: "Acid Armor",
    type: "Poison",
    power: 0,
    range: "Self",
    accuracy: 100,
    ppmax: 30,
    ppcurr: 30,
    effect: "Raises user's Defense by 2 stages.",
  },
  "Aqua Tail": {
    name: "Aqua Tail",
    type: "Water",
    range: "1",
    alignment: "radial",
    power: 90,
    accuracy: 90,
    ppmax: 10,
    ppcurr: 10,
    effect: "Has a high critical hit ratio.",
  },
  "Aurora Beam": {
    name: "Aurora Beam",
    type: "Ice",
    range: "6",
    alignment: "same-direction",
    power: 65,
    accuracy: 100,
    pp: 20,
    effect: "May lower the target's Attack by 1 stage.",
  },
  "Bite": {
    name: "Bite",
    type: "Dark",
    range: "1",
    alignment: "same-direction",
    power: 60,
    accuracy: 100,
    pp: 25,
    effect: "May cause the target to flinch.",
  },
  "Bubble Beam": {
    name: "Bubble Beam",
    type: "Water",
    range: "6",
    alignment: "same-direction",
    power: 65,
    accuracy: 100,
    pp: 20,
    effect: "May lower the target's Speed by 1 stage.",
  },
  "Hydro Pump": {
    name: "Hydro Pump",
    type: "Water",
    range: "10",
    alignment: "same-direction",
    power: 110,
    accuracy: 80,
    pp: 5,
    effect: "No additional effect.",
  },
  "Ice Beam": {
    name: "Ice Beam",
    type: "Ice",
    range: "6",
    alignment: "same-direction",
    power: 90,
    accuracy: 100,
    pp: 10,
    effect: "May freeze."
  },
  "Muddy Water": {
    name: "Muddy Water",
    type: "Water",
    range: "6",
    alignment: "radial",
    power: 90,
    accuracy: 85,
    pp: 10,
    effect: "May lower the target's accuracy by 1 stage.",
  },
  'Refresh': {
    name: 'Refresh',
    type: 'Normal',
    power: 0,
    range: 'Self + Allies',
    accuracy: 100,
    ppmax: 20,
    ppcurr: 20,
    effect: "Heals the user if it is poisoned, burned, or paralyzed.",
  },
  "Water Pulse": {
    name: "Water Pulse",
    type: "Water",
    power: 60,
    range: "6",
    alignment: "same-direction",
    accuracy: 100,
    ppmax: 20,
    ppcurr: 20,
    effect: "May confuse the target.",
  },
  "Rock Throw": {
    name: "Rock Throw",
    type: "Rock",
    power: 50,
    range: "2",
    alignment: "same-direction",
    accuracy: 100,
    ppmax: 15,
    ppcurr: 15,
    effect: "No additional effect.",
  }
};
const ITEM_DEFS = {
  "Reviver Seed": {
    name: "Reviver Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Stun Seed": {
    name: "Stun Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Tiny Reviver Seed": {
    name: "Tiny Reviver Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Sleep Seed": {
    name: "Sleep Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  }
  ,"Warp Seed": {
    name: "Warp Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Life Seed": {
    name: "Life Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Pure Seed": {
    name: "Pure Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 3
  },
  "Joy Seed": {
    name: "Joy Seed",
    sprite: Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Apple": {
    name: "Apple",
    sprite: Apple,
    stackSize: 1,
    tier: 1
  },
  "Big Apple": {
    name: "Big Apple",
    sprite: Bigapple,
    stackSize: 1,
    tier: 2
  },
  "Golden Apple": {
    name: "Golden Apple",
    sprite: Goldenapple,
    stackSize: 1,
    tier: 3
  },
  "Grimy Food": {
    name: "Grimy Food",
    sprite: Grimyfood,
    stackSize: 1,
    tier: 1
  },
  "Max Ether": {
    name: "Max Ether",
    sprite: Maxether,
    stackSize: 1,
    tier: 1
  },
  "Max Elixir": {
    name: "Max Elixir",
    sprite: Maxelixir,
    stackSize: 1,
    tier: 2
  },
  "Protein": {
    name: "Protein",
    sprite: Protein,
    stackSize: 1,
    tier: 2
  },
  "Calcium": {
    name: "Calcium",
    sprite: Calcium,
    stackSize: 1,
    tier: 2
  },
  "Iron": {
    name: "Iron",
    sprite: Iron,
    stackSize: 1,
    tier: 2
  },
  "Zinc": {
    name: "Zinc",
    sprite: Zinc,
    stackSize: 1,
    tier: 2
  },
  "Carbos": {
    name: "Carbos",
    sprite: Carbos,
    stackSize: 1,
    tier: 2
  },
  "Zinc Band": {
    name: "Zinc Band",
    sprite: Scarf,
    stackSize: 1,
    tier: 4
  },
  "Special Band": {
    name: "Special Band",
    sprite: Scarf,
    stackSize: 1,
    tier: 4
  },
  "Warp Scarf": {
    name: "Warp Scarf",
    sprite: Scarf,
    stackSize: 1,
    tier: 4
  },
  "Luminous Orb": {
    name: "Luminous Orb",
    sprite: Orb,
    stackSize: 1,
    tier: 4
  },
  "Warp Orb": {
    name: "Warp Orb",
    sprite: Orb,
    stackSize: 1,
    tier: 1
  }
};
const ENEMY_DEFS = {
  //Note: Lunatone is a levitating Pokemon and does not reasonably need walk sprites
  'Lunatone': {
    name: 'Lunatone',
    type: 'Rock/Psychic',
    maxHp: 150,
    hp: 150,
    attack: 80,
    specialAttack: 95,
    specialDefense: 90,
    defense: 90,
    speed: 60,
    moves: [MOVE_DEFS['Rock Throw'],
      MOVE_DEFS['Aurora Beam'],
      MOVE_DEFS['Bite'],
      MOVE_DEFS['Moonblast']
    ],
    sprites: {
      downIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDown8.png'
      },
      upIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUp8.png'
      },
      leftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleLeft8.png'
      },
      rightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleRight8.png'
      },
      upRightIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpRight8.png'
      },
      upLeftIdle: {
        frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft1.png',
        frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft2.png',
        frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft3.png',
        frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft4.png',
        frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft5.png',
        frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft6.png',
        frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft7.png',
        frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleUpLeft8.png'
      },
      downLeftIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft2.png',
      frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft3.png',
      frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft4.png',
      frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft5.png',
      frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft6.png',
      frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft7.png',
      frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownLeft8.png'
      },
      downRightIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight2.png',
      frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight3.png',
      frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight4.png',
      frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight5.png',
      frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight6.png',
      frame7: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight7.png',
      frame8: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/idle/lunatoneIdleDownRight8.png'
    },
      sleep: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep000.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep001.png',
      frame3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep002.png',
      frame4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep003.png',
      frame5: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep004.png',
      frame6: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Lunatone/animations/frames/sleep/LunatoneSleep005.png'
    }
  },
},
/*
  'Vaporeon': {
    name: 'Vaporeon',
    type: 'Water',
    maxHp: 130,
    hp: 130,
    attack: 65,
    specialAttack: 110,
    specialDefense: 95,
    defense: 60,
    speed: 65,
    moves: [MOVE_DEFS['Bubble Beam'], MOVE_DEFS['Hydro Pump'], MOVE_DEFS['Ice Beam'], MOVE_DEFS['Water Pulse']],
    sprites: {
      downIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimD1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimD2.png',
      },
      upIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimU1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimU2.png',
      },
      leftIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimL1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimL2.png',
      },
      rightIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimR1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimR2.png',
      },
      downLeftIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBL1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBL2.png',
      },
      downRightIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBR1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimBR2.png',
      },
      upLeftIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTL1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTL2.png',
      },
      upRightIdle: {
      frame1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTR1.png',
      frame2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/idle/IdleanimTR2.png',
      }
    }
  }
    */

}
const MAX_INVENTORY_SLOTS = 10;
// Enemy moves
const rockThrowVfxFrames = [
getVfxSprite('RockThrow', 'none', 1),
getVfxSprite('RockThrow', 'none', 2),
getVfxSprite('RockThrow', 'none', 3),
getVfxSprite('RockThrow', 'none', 4),
getVfxSprite('RockThrow', 'none', 5),
getVfxSprite('RockThrow', 'none', 6),
getVfxSprite('RockThrow', 'none', 7),
getVfxSprite('RockThrow', 'none', 8),
getVfxSprite('RockThrow', 'none', 9),
getVfxSprite('RockThrow', 'none', 10),
getVfxSprite('RockThrow', 'none', 11),
getVfxSprite('RockThrow', 'none', 12),
getVfxSprite('RockThrow', 'none', 13),
getVfxSprite('RockThrow', 'none', 14),
getVfxSprite('RockThrow', 'none', 15),
getVfxSprite('RockThrow', 'none', 16),
getVfxSprite('RockThrow', 'none', 17),
getVfxSprite('RockThrow', 'none', 18),
getVfxSprite('RockThrow', 'none', 19),
getVfxSprite('RockThrow', 'none', 20),
getVfxSprite('RockThrow', 'none', 21),
getVfxSprite('RockThrow', 'none', 22),
getVfxSprite('RockThrow', 'none', 23),
getVfxSprite('RockThrow', 'none', 24),
getVfxSprite('RockThrow', 'none', 25),
getVfxSprite('RockThrow', 'none', 26),
getVfxSprite('RockThrow', 'none', 27),
getVfxSprite('RockThrow', 'none', 28),
getVfxSprite('RockThrow', 'none', 29),
getVfxSprite('RockThrow', 'none', 30),
];

// Enemy sprite URLs
  //Lunatone
    // Idle animation
const lunatoneSprites = [
  getPokemonSprite('Lunatone', 'idle', 'down', 1),
  getPokemonSprite('Lunatone', 'idle', 'down', 2),
  getPokemonSprite('Lunatone', 'idle', 'down', 3),
  getPokemonSprite('Lunatone', 'idle', 'down', 4),
  getPokemonSprite('Lunatone', 'idle', 'down', 5),
  getPokemonSprite('Lunatone', 'idle', 'down', 6),
  getPokemonSprite('Lunatone', 'idle', 'down', 7),
  getPokemonSprite('Lunatone', 'idle', 'down', 8)
];
const lunatoneUpSprites = [
  getPokemonSprite('Lunatone', 'idle', 'up', 1),
  getPokemonSprite('Lunatone', 'idle', 'up', 2),
  getPokemonSprite('Lunatone', 'idle', 'up', 3),
  getPokemonSprite('Lunatone', 'idle', 'up', 4),
  getPokemonSprite('Lunatone', 'idle', 'up', 5),
  getPokemonSprite('Lunatone', 'idle', 'up', 6),
  getPokemonSprite('Lunatone', 'idle', 'up', 7),
  getPokemonSprite('Lunatone', 'idle', 'up', 8)
];
const lunatoneLeftSprites = [
  getPokemonSprite('Lunatone', 'idle', 'left', 1),
  getPokemonSprite('Lunatone', 'idle', 'left', 2),
  getPokemonSprite('Lunatone', 'idle', 'left', 3),
  getPokemonSprite('Lunatone', 'idle', 'left', 4),
  getPokemonSprite('Lunatone', 'idle', 'left', 5),
  getPokemonSprite('Lunatone', 'idle', 'left', 6),
  getPokemonSprite('Lunatone', 'idle', 'left', 7),
  getPokemonSprite('Lunatone', 'idle', 'left', 8)
];
const lunatoneRightSprites = [
  getPokemonSprite('Lunatone', 'idle', 'right', 1),
  getPokemonSprite('Lunatone', 'idle', 'right', 2),
  getPokemonSprite('Lunatone', 'idle', 'right', 3),
  getPokemonSprite('Lunatone', 'idle', 'right', 4),
  getPokemonSprite('Lunatone', 'idle', 'right', 5),
  getPokemonSprite('Lunatone', 'idle', 'right', 6),
  getPokemonSprite('Lunatone', 'idle', 'right', 7),
  getPokemonSprite('Lunatone', 'idle', 'right', 8)
];
const lunatoneUpRightSprites = [
  getPokemonSprite('Lunatone', 'idle', 'upright', 1),
  getPokemonSprite('Lunatone', 'idle', 'upright', 2),
  getPokemonSprite('Lunatone', 'idle', 'upright', 3),
  getPokemonSprite('Lunatone', 'idle', 'upright', 4),
  getPokemonSprite('Lunatone', 'idle', 'upright', 5),
  getPokemonSprite('Lunatone', 'idle', 'upright', 6),
  getPokemonSprite('Lunatone', 'idle', 'upright', 7),
  getPokemonSprite('Lunatone', 'idle', 'upright', 8)
];
const lunatoneUpLeftSprites = [
  getPokemonSprite('Lunatone', 'idle', 'upleft', 1),
  getPokemonSprite('Lunatone', 'idle', 'upleft', 2),
  getPokemonSprite('Lunatone', 'idle', 'upleft', 3),
  getPokemonSprite('Lunatone', 'idle', 'upleft', 4),
  getPokemonSprite('Lunatone', 'idle', 'upleft', 5),
  getPokemonSprite('Lunatone', 'idle', 'upleft', 6),
  getPokemonSprite('Lunatone', 'idle', 'upleft', 7),
  getPokemonSprite('Lunatone', 'idle', 'upleft', 8)
];
const lunatoneDownLeftSprites = [
  getPokemonSprite('Lunatone', 'idle', 'downleft', 1),
  getPokemonSprite('Lunatone', 'idle', 'downleft', 2),
  getPokemonSprite('Lunatone', 'idle', 'downleft', 3),
  getPokemonSprite('Lunatone', 'idle', 'downleft', 4),
  getPokemonSprite('Lunatone', 'idle', 'downleft', 5),
  getPokemonSprite('Lunatone', 'idle', 'downleft', 6),
  getPokemonSprite('Lunatone', 'idle', 'downleft', 7),
  getPokemonSprite('Lunatone', 'idle', 'downleft', 8)
];
const lunatoneDownRightSprites = [
  getPokemonSprite('Lunatone', 'idle', 'downright', 1),
  getPokemonSprite('Lunatone', 'idle', 'downright', 2),
  getPokemonSprite('Lunatone', 'idle', 'downright', 3),
  getPokemonSprite('Lunatone', 'idle', 'downright', 4),
  getPokemonSprite('Lunatone', 'idle', 'downright', 5),
  getPokemonSprite('Lunatone', 'idle', 'downright', 6),
  getPokemonSprite('Lunatone', 'idle', 'downright', 7),
  getPokemonSprite('Lunatone', 'idle', 'downright', 8)
]
const lunatoneSleepSprites = [
  getPokemonSprite('Lunatone', 'sleep', 'none', 1),
  getPokemonSprite('Lunatone', 'sleep', 'none', 2),
  getPokemonSprite('Lunatone', 'sleep', 'none', 3),
  getPokemonSprite('Lunatone', 'sleep', 'none', 4),
  getPokemonSprite('Lunatone', 'sleep', 'none', 5),
  getPokemonSprite('Lunatone', 'sleep', 'none', 6)
]
// Vaporeon sprite URLs
  // Idle animations

const vaporeonSprites = [
getPokemonSprite('Vaporeon', 'idle', 'down', 1),
getPokemonSprite('Vaporeon', 'idle', 'down', 2),
];

const vaporeonLeftSprites = [
getPokemonSprite('Vaporeon', 'idle', 'left', 1),
getPokemonSprite('Vaporeon', 'idle', 'left', 2),
];

const vaporeonRightSprites = [
getPokemonSprite('Vaporeon', 'idle', 'right', 1),
getPokemonSprite('Vaporeon', 'idle', 'right', 2),
];

const vaporeonUpSprites = [
getPokemonSprite('Vaporeon', 'idle', 'up', 1),
getPokemonSprite('Vaporeon', 'idle', 'up', 2),
];

const vaporeonDownLeftSprites = [
getPokemonSprite('Vaporeon', 'idle', 'downleft', 1),
getPokemonSprite('Vaporeon', 'idle', 'downleft', 2),
];

const vaporeonDownRightSprites = [
getPokemonSprite('Vaporeon', 'idle', 'downright', 1),
getPokemonSprite('Vaporeon', 'idle', 'downright', 2),
];

const vaporeonUpLeftSprites = [
getPokemonSprite('Vaporeon', 'idle', 'upleft', 1),
getPokemonSprite('Vaporeon', 'idle', 'upleft', 2),
];

const vaporeonUpRightSprites = [
getPokemonSprite('Vaporeon', 'idle', 'upright', 1),
getPokemonSprite('Vaporeon', 'idle', 'upright', 2),
];
  // Walking animations
const vaporeonDownWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'down', 1),
getPokemonSprite('Vaporeon', 'walk', 'down', 2),
getPokemonSprite('Vaporeon', 'walk', 'down', 3),
getPokemonSprite('Vaporeon', 'walk', 'down', 4),
]

const vaporeonUpWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'up', 1),
getPokemonSprite('Vaporeon', 'walk', 'up', 2),
getPokemonSprite('Vaporeon', 'walk', 'up', 3),
getPokemonSprite('Vaporeon', 'walk', 'up', 4),
]

const vaporeonLeftWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'left', 1),
getPokemonSprite('Vaporeon', 'walk', 'left', 2),
getPokemonSprite('Vaporeon', 'walk', 'left', 3),
getPokemonSprite('Vaporeon', 'walk', 'left', 4),
]

const vaporeonRightWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'right', 1),
getPokemonSprite('Vaporeon', 'walk', 'right', 2),
getPokemonSprite('Vaporeon', 'walk', 'right', 3),
getPokemonSprite('Vaporeon', 'walk', 'right', 4),
]

const vaporeonUpLeftWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'upleft', 1),
getPokemonSprite('Vaporeon', 'walk', 'upleft', 2),
getPokemonSprite('Vaporeon', 'walk', 'upleft', 3),
getPokemonSprite('Vaporeon', 'walk', 'upleft', 4),
]

const vaporeonUpRightWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'upright', 1),
getPokemonSprite('Vaporeon', 'walk', 'upright', 2),
getPokemonSprite('Vaporeon', 'walk', 'upright', 3),
getPokemonSprite('Vaporeon', 'walk', 'upright', 4),
]

const vaporeonDownLeftWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'downleft', 1),
getPokemonSprite('Vaporeon', 'walk', 'downleft', 2),
getPokemonSprite('Vaporeon', 'walk', 'downleft', 3),
getPokemonSprite('Vaporeon', 'walk', 'downleft', 4),
]

const vaporeonDownRightWalkSprites = [
getPokemonSprite('Vaporeon', 'walk', 'downright', 1),
getPokemonSprite('Vaporeon', 'walk', 'downright', 2),
getPokemonSprite('Vaporeon', 'walk', 'downright', 3),
getPokemonSprite('Vaporeon', 'walk', 'downright', 4),

]
  // Spin animations
const vaporeonUpSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'up', 1),
  getPokemonSprite('Vaporeon', 'spin', 'up', 2),
  getPokemonSprite('Vaporeon', 'spin', 'up', 3),
  getPokemonSprite('Vaporeon', 'spin', 'up', 4),
  getPokemonSprite('Vaporeon', 'spin', 'up', 5),
  getPokemonSprite('Vaporeon', 'spin', 'up', 6),
  getPokemonSprite('Vaporeon', 'spin', 'up', 7),
  getPokemonSprite('Vaporeon', 'spin', 'up', 8),
  getPokemonSprite('Vaporeon', 'spin', 'up', 9),
]
const vaporeonUpRightSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'upright', 1),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 2),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 3),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 4),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 5),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 6),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 7),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 8),
  getPokemonSprite('Vaporeon', 'spin', 'upright', 9)
]
const vaporeonRightSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'right', 1),
  getPokemonSprite('Vaporeon', 'spin', 'right', 2),
  getPokemonSprite('Vaporeon', 'spin', 'right', 3),
  getPokemonSprite('Vaporeon', 'spin', 'right', 4),
  getPokemonSprite('Vaporeon', 'spin', 'right', 5),
  getPokemonSprite('Vaporeon', 'spin', 'right', 6),
  getPokemonSprite('Vaporeon', 'spin', 'right', 7),
  getPokemonSprite('Vaporeon', 'spin', 'right', 8),
  getPokemonSprite('Vaporeon', 'spin', 'right', 9)
]
const vaporeonDownRightSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'downright', 1),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 2),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 3),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 4),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 5),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 6),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 7),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 8),
  getPokemonSprite('Vaporeon', 'spin', 'downright', 9)
]
const vaporeonDownSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'down', 1),
  getPokemonSprite('Vaporeon', 'spin', 'down', 2),
  getPokemonSprite('Vaporeon', 'spin', 'down', 3),
  getPokemonSprite('Vaporeon', 'spin', 'down', 4),
  getPokemonSprite('Vaporeon', 'spin', 'down', 5),
  getPokemonSprite('Vaporeon', 'spin', 'down', 6),
  getPokemonSprite('Vaporeon', 'spin', 'down', 7),
  getPokemonSprite('Vaporeon', 'spin', 'down', 8),
  getPokemonSprite('Vaporeon', 'spin', 'down', 9)
]
const vaporeonDownLeftSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 1),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 2),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 3),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 4),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 5),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 6),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 7),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 8),
  getPokemonSprite('Vaporeon', 'spin', 'downleft', 9)
]
const vaporeonLeftSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'left', 1),
  getPokemonSprite('Vaporeon', 'spin', 'left', 2),
  getPokemonSprite('Vaporeon', 'spin', 'left', 3),
  getPokemonSprite('Vaporeon', 'spin', 'left', 4),
  getPokemonSprite('Vaporeon', 'spin', 'left', 5),
  getPokemonSprite('Vaporeon', 'spin', 'left', 6),
  getPokemonSprite('Vaporeon', 'spin', 'left', 7),
  getPokemonSprite('Vaporeon', 'spin', 'left', 8),
  getPokemonSprite('Vaporeon', 'spin', 'left', 9)
]
const vaporeonUpLeftSpinSprites = [
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 1),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 2),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 3),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 4),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 5),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 6),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 7),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 8),
  getPokemonSprite('Vaporeon', 'spin', 'upleft', 9)
]
// Aqua Tail vfx
 //up
 //4 -> 0; 8 -> 5
 const vaporeonAquaTailUpSprites = [
  getVfxSprite('AquaTail', 'up', 1),
  getVfxSprite('AquaTail', 'up', 2),
  getVfxSprite('AquaTail', 'up', 3),
  getVfxSprite('AquaTail', 'up', 4),
  getVfxSprite('AquaTail', 'up', 5),
  getVfxSprite('AquaTail', 'up', 6),
  getVfxSprite('AquaTail', 'up', 7),
  getVfxSprite('AquaTail', 'up', 8),
  getVfxSprite('AquaTail', 'up', 9)
]
 //down
 const vaporeonAquaTailDownSprites = [
  getVfxSprite('AquaTail', 'down', 1),
  getVfxSprite('AquaTail', 'down', 2),
  getVfxSprite('AquaTail', 'down', 3),
  getVfxSprite('AquaTail', 'down', 4),
  getVfxSprite('AquaTail', 'down', 5),
  getVfxSprite('AquaTail', 'down', 6),
  getVfxSprite('AquaTail', 'down', 7),
  getVfxSprite('AquaTail', 'down', 8),
  getVfxSprite('AquaTail', 'down', 9)
]
 //left
 const vaporeonAquaTailLeftSprites = [
  getVfxSprite('AquaTail', 'left', 1),
  getVfxSprite('AquaTail', 'left', 2),
  getVfxSprite('AquaTail', 'left', 3),
  getVfxSprite('AquaTail', 'left', 4),
  getVfxSprite('AquaTail', 'left', 5),
  getVfxSprite('AquaTail', 'left', 6),
  getVfxSprite('AquaTail', 'left', 7),
  getVfxSprite('AquaTail', 'left', 8),
  getVfxSprite('AquaTail', 'left', 9)
]
 //right
 const vaporeonAquaTailRightSprites = [
  getVfxSprite('AquaTail', 'right', 1),
  getVfxSprite('AquaTail', 'right', 2),
  getVfxSprite('AquaTail', 'right', 3),
  getVfxSprite('AquaTail', 'right', 4),
  getVfxSprite('AquaTail', 'right', 5),
  getVfxSprite('AquaTail', 'right', 6),
  getVfxSprite('AquaTail', 'right', 7),
  getVfxSprite('AquaTail', 'right', 8),
  getVfxSprite('AquaTail', 'right', 9)
]
 //up-right
 const vaporeonAquaTailUpRightSprites = [
  getVfxSprite('AquaTail', 'upright', 1),
  getVfxSprite('AquaTail', 'upright', 2),
  getVfxSprite('AquaTail', 'upright', 3),
  getVfxSprite('AquaTail', 'upright', 4),
  getVfxSprite('AquaTail', 'upright', 5),
  getVfxSprite('AquaTail', 'upright', 6),
  getVfxSprite('AquaTail', 'upright', 7),
  getVfxSprite('AquaTail', 'upright', 8),
  getVfxSprite('AquaTail', 'upright', 9)
]
 //up-left
 const vaporeonAquaTailUpLeftSprites = [
  getVfxSprite('AquaTail', 'upleft', 1),
  getVfxSprite('AquaTail', 'upleft', 2),
  getVfxSprite('AquaTail', 'upleft', 3),
  getVfxSprite('AquaTail', 'upleft', 4),
  getVfxSprite('AquaTail', 'upleft', 5),
  getVfxSprite('AquaTail', 'upleft', 6),
  getVfxSprite('AquaTail', 'upleft', 7),
  getVfxSprite('AquaTail', 'upleft', 8),
  getVfxSprite('AquaTail', 'upleft', 9)
]
 //down-right
 const vaporeonAquaTailDownRightSprites = [
  getVfxSprite('AquaTail', 'downright', 1),
  getVfxSprite('AquaTail', 'downright', 2),
  getVfxSprite('AquaTail', 'downright', 3),
  getVfxSprite('AquaTail', 'downright', 4),
  getVfxSprite('AquaTail', 'downright', 5),
  getVfxSprite('AquaTail', 'downright', 6),
  getVfxSprite('AquaTail', 'downright', 7),
  getVfxSprite('AquaTail', 'downright', 8),
  getVfxSprite('AquaTail', 'downright', 9)
]
 //down-left
 const vaporeonAquaTailDownLeftSprites = [
  getVfxSprite('AquaTail', 'downleft', 1),
  getVfxSprite('AquaTail', 'downleft', 2),
  getVfxSprite('AquaTail', 'downleft', 3),
  getVfxSprite('AquaTail', 'downleft', 4),
  getVfxSprite('AquaTail', 'downleft', 5),
  getVfxSprite('AquaTail', 'downleft', 6),
  getVfxSprite('AquaTail', 'downleft', 7),
  getVfxSprite('AquaTail', 'downleft', 8),
  getVfxSprite('AquaTail', 'downleft', 9)
]

// Sleep animations
const vaporeonSleepSprites = [
  getPokemonSprite('Vaporeon', 'sleep', 'none', 1),
  getPokemonSprite('Vaporeon', 'sleep', 'none', 2)
]
// VFX animations

const DMG1VfxFrames = [
  getDMGSprite('DMG1', 1),
  getDMGSprite('DMG1', 2),
  getDMGSprite('DMG1', 3),
  getDMGSprite('DMG1', 4),
  getDMGSprite('DMG1', 5),
  getDMGSprite('DMG1', 6),
  getDMGSprite('DMG1', 7),
  getDMGSprite('DMG1', 8),
  getDMGSprite('DMG1', 9),
  getDMGSprite('DMG1', 10),
  getDMGSprite('DMG1', 11)
]
const Text = {
  Black: {
    A: getTextSprite('Black', 'A'),
    B: getTextSprite('Black', 'B'),
    C: getTextSprite('Black', 'C'),
    D: getTextSprite('Black', 'D'),
    E: getTextSprite('Black', 'E'),
    F: getTextSprite('Black', 'F'),
    G: getTextSprite('Black', 'G'),
    H: getTextSprite('Black', 'H'),
    I: getTextSprite('Black', 'I'),
    J: getTextSprite('Black', 'J'),
    K: getTextSprite('Black', 'K'),
    L: getTextSprite('Black', 'L'),
    M: getTextSprite('Black', 'M'),
    N: getTextSprite('Black', 'N'),
    O: getTextSprite('Black', 'O'),
    P: getTextSprite('Black', 'P'),
    Q: getTextSprite('Black', 'Q'),
    R: getTextSprite('Black', 'R'),
    S: getTextSprite('Black', 'S'),
    T: getTextSprite('Black', 'T'),
    U: getTextSprite('Black', 'U'),
    V: getTextSprite('Black', 'V'),
    W: getTextSprite('Black', 'W'),
    X: getTextSprite('Black', 'X'),
    Y: getTextSprite('Black', 'Y'),
    Z: getTextSprite('Black', 'Z'),
    a: getTextSprite('Black', 'a'),
    b: getTextSprite('Black', 'b'),
    c: getTextSprite('Black', 'c'),
    d: getTextSprite('Black', 'd'),
    e: getTextSprite('Black', 'e'),
    f: getTextSprite('Black', 'f'),
    g: getTextSprite('Black', 'g'),
    h: getTextSprite('Black', 'h'),
    i: getTextSprite('Black', 'i'),
    j: getTextSprite('Black', 'j'),
    k: getTextSprite('Black', 'k'),
    l: getTextSprite('Black', 'l'),
    m: getTextSprite('Black', 'm'),
    n: getTextSprite('Black', 'n'),
    o: getTextSprite('Black', 'o'),
    p: getTextSprite('Black', 'p'),
    q: getTextSprite('Black', 'q'),
    r: getTextSprite('Black', 'r'),
    s: getTextSprite('Black', 's'),
    t: getTextSprite('Black', 't'),
    u: getTextSprite('Black', 'u'),
    v: getTextSprite('Black', 'v'),
    w: getTextSprite('Black', 'w'),
    x: getTextSprite('Black', 'x'),
    y: getTextSprite('Black', 'y'),
    z: getTextSprite('Black', 'z'),
    0: getTextSprite('Black', '0'),
    1: getTextSprite('Black', '1'),
    2: getTextSprite('Black', '2'),
    3: getTextSprite('Black', '3'),
    4: getTextSprite('Black', '4'),
    5: getTextSprite('Black', '5'),
    6: getTextSprite('Black', '6'),
    7: getTextSprite('Black', '7'),
    8: getTextSprite('Black', '8'),
    9: getTextSprite('Black', '9'),
    plus: getTextSprite('Black', '+'),
    minus: getTextSprite('Black', '-'),
    rightDoubleQuote: getTextSprite('Black', '"'),
    rightSingleQuote: getTextSprite('Black', "'"),
    leftDoubleQuote: getTextSprite('Black', '"'),
    leftSingleQuote: getTextSprite('Black', "'"),
    leftParenthesis: getTextSprite('Black', '('),
    rightParenthesis: getTextSprite('Black', ')'),
    comma: getTextSprite('Black', ','),
    period: getTextSprite('Black', '.'),
    colon: getTextSprite('Black', ':'),
    questionMark: getTextSprite('Black', '?'),
    exclamationPoint: getTextSprite('Black', '!'),
    accentE: getTextSprite('Black', 'é'),
    elipse: getTextSprite('Black', '...'),
    altElipse: getTextSprite('Black', '...2')
  },
  White: {
    A: getTextSprite('White', 'A'),
    B: getTextSprite('White', 'B'),
    C: getTextSprite('White', 'C'),
    D: getTextSprite('White', 'D'),
    E: getTextSprite('White', 'E'),
    F: getTextSprite('White', 'F'),
    G: getTextSprite('White', 'G'),
    H: getTextSprite('White', 'H'),
    I: getTextSprite('White', 'I'),
    J: getTextSprite('White', 'J'),
    K: getTextSprite('White', 'K'),
    L: getTextSprite('White', 'L'),
    M: getTextSprite('White', 'M'),
    N: getTextSprite('White', 'N'),
    O: getTextSprite('White', 'O'),
    P: getTextSprite('White', 'P'),
    Q: getTextSprite('White', 'Q'),
    R: getTextSprite('White', 'R'),
    S: getTextSprite('White', 'S'),
    T: getTextSprite('White', 'T'),
    U: getTextSprite('White', 'U'),
    V: getTextSprite('White', 'V'),
    W: getTextSprite('White', 'W'),
    X: getTextSprite('White', 'X'),
    Y: getTextSprite('White', 'Y'),
    Z: getTextSprite('White', 'Z'),
    a: getTextSprite('White', 'a'),
    b: getTextSprite('White', 'b'),
    c: getTextSprite('White', 'c'),
    d: getTextSprite('White', 'd'),
    e: getTextSprite('White', 'e'),
    f: getTextSprite('White', 'f'),
    g: getTextSprite('White', 'g'),
    h: getTextSprite('White', 'h'),
    i: getTextSprite('White', 'i'),
    j: getTextSprite('White', 'j'),
    k: getTextSprite('White', 'k'),
    l: getTextSprite('White', 'l'),
    m: getTextSprite('White', 'm'),
    n: getTextSprite('White', 'n'),
    o: getTextSprite('White', 'o'),
    p: getTextSprite('White', 'p'),
    q: getTextSprite('White', 'q'),
    r: getTextSprite('White', 'r'),
    s: getTextSprite('White', 's'),
    t: getTextSprite('White', 't'),
    u: getTextSprite('White', 'u'),
    v: getTextSprite('White', 'v'),
    w: getTextSprite('White', 'w'),
    x: getTextSprite('White', 'x'),
    y: getTextSprite('White', 'y'),
    z: getTextSprite('White', 'z'),
    0: getTextSprite('White', '0'),
    1: getTextSprite('White', '1'),
    2: getTextSprite('White', '2'),
    3: getTextSprite('White', '3'),
    4: getTextSprite('White', '4'),
    5: getTextSprite('White', '5'),
    6: getTextSprite('White', '6'),
    7: getTextSprite('White', '7'),
    8: getTextSprite('White', '8'),
    9: getTextSprite('White', '9'),
    plus: getTextSprite('White', '+'),
    minus: getTextSprite('White', '-'),
    rightDoubleQuote: getTextSprite('White', '"'),
    rightSingleQuote: getTextSprite('White', "'"),
    leftDoubleQuote: getTextSprite('White', '"'),
    leftSingleQuote: getTextSprite('White', "'"),
    leftParenthesis: getTextSprite('White', '('),
    rightParenthesis: getTextSprite('White', ')'),
    comma: getTextSprite('White', ','),
    period: getTextSprite('White', '.'),
    colon: getTextSprite('White', ':'),
    questionMark: getTextSprite('White', '?'),
    exclamationPoint: getTextSprite('White', '!'),
    accentE: getTextSprite('White', 'é'),
    elipse: getTextSprite('White', '...'),
    altElipse: getTextSprite('White', '...2')
  },
  Red: {
    A: getTextSprite('Red', 'A'),
    B: getTextSprite('Red', 'B'),
    C: getTextSprite('Red', 'C'),
    D: getTextSprite('Red', 'D'),
    E: getTextSprite('Red', 'E'),
    F: getTextSprite('Red', 'F'),
    G: getTextSprite('Red', 'G'),
    H: getTextSprite('Red', 'H'),
    I: getTextSprite('Red', 'I'),
    J: getTextSprite('Red', 'J'),
    K: getTextSprite('Red', 'K'),
    L: getTextSprite('Red', 'L'),
    M: getTextSprite('Red', 'M'),
    N: getTextSprite('Red', 'N'),
    O: getTextSprite('Red', 'O'),
    P: getTextSprite('Red', 'P'),
    Q: getTextSprite('Red', 'Q'),
    R: getTextSprite('Red', 'R'),
    S: getTextSprite('Red', 'S'),
    T: getTextSprite('Red', 'T'),
    U: getTextSprite('Red', 'U'),
    V: getTextSprite('Red', 'V'),
    W: getTextSprite('Red', 'W'),
    X: getTextSprite('Red', 'X'),
    Y: getTextSprite('Red', 'Y'),
    Z: getTextSprite('Red', 'Z'),
    a: getTextSprite('Red', 'a'),
    b: getTextSprite('Red', 'b'),
    c: getTextSprite('Red', 'c'),
    d: getTextSprite('Red', 'd'),
    e: getTextSprite('Red', 'e'),
    f: getTextSprite('Red', 'f'),
    g: getTextSprite('Red', 'g'),
    h: getTextSprite('Red', 'h'),
    i: getTextSprite('Red', 'i'),
    j: getTextSprite('Red', 'j'),
    k: getTextSprite('Red', 'k'),
    l: getTextSprite('Red', 'l'),
    m: getTextSprite('Red', 'm'),
    n: getTextSprite('Red', 'n'),
    o: getTextSprite('Red', 'o'),
    p: getTextSprite('Red', 'p'),
    q: getTextSprite('Red', 'q'),
    r: getTextSprite('Red', 'r'),
    s: getTextSprite('Red', 's'),
    t: getTextSprite('Red', 't'),
    u: getTextSprite('Red', 'u'),
    v: getTextSprite('Red', 'v'),
    w: getTextSprite('Red', 'w'),
    x: getTextSprite('Red', 'x'),
    y: getTextSprite('Red', 'y'),
    z: getTextSprite('Red', 'z'),
    0: getTextSprite('Red', '0'),
    1: getTextSprite('Red', '1'),
    2: getTextSprite('Red', '2'),
    3: getTextSprite('Red', '3'),
    4: getTextSprite('Red', '4'),
    5: getTextSprite('Red', '5'),
    6: getTextSprite('Red', '6'),
    7: getTextSprite('Red', '7'),
    8: getTextSprite('Red', '8'),
    9: getTextSprite('Red', '9'),
    plus: getTextSprite('Red', '+'),
    minus: getTextSprite('Red', '-'),
    rightDoubleQuote: getTextSprite('Red', '"'),
    rightSingleQuote: getTextSprite('Red', "'"),
    leftDoubleQuote: getTextSprite('Red', '"'),
    leftSingleQuote: getTextSprite('Red', "'"),
    leftParenthesis: getTextSprite('Red', '('),
    rightParenthesis: getTextSprite('Red', ')'),
    comma: getTextSprite('Red', ','),
    period: getTextSprite('Red', '.'),
    colon: getTextSprite('Red', ':'),
    questionMark: getTextSprite('Red', '?'),
    exclamationPoint: getTextSprite('Red', '!'),
    accentE: getTextSprite('Red', 'é'),
    elipse: getTextSprite('Red', '...'),
    altElipse: getTextSprite('Red', '...2')
  },
  Blue: {
    A: getTextSprite('Blue', 'A'),
    B: getTextSprite('Blue', 'B'),
    C: getTextSprite('Blue', 'C'),
    D: getTextSprite('Blue', 'D'),
    E: getTextSprite('Blue', 'E'),
    F: getTextSprite('Blue', 'F'),
    G: getTextSprite('Blue', 'G'),
    H: getTextSprite('Blue', 'H'),
    I: getTextSprite('Blue', 'I'),
    J: getTextSprite('Blue', 'J'),
    K: getTextSprite('Blue', 'K'),
    L: getTextSprite('Blue', 'L'),
    M: getTextSprite('Blue', 'M'),
    N: getTextSprite('Blue', 'N'),
    O: getTextSprite('Blue', 'O'),
    P: getTextSprite('Blue', 'P'),
    Q: getTextSprite('Blue', 'Q'),
    R: getTextSprite('Blue', 'R'),
    S: getTextSprite('Blue', 'S'),
    T: getTextSprite('Blue', 'T'),
    U: getTextSprite('Blue', 'U'),
    V: getTextSprite('Blue', 'V'),
    W: getTextSprite('Blue', 'W'),
    X: getTextSprite('Blue', 'X'),
    Y: getTextSprite('Blue', 'Y'),
    Z: getTextSprite('Blue', 'Z'),
    a: getTextSprite('Blue', 'a'),
    b: getTextSprite('Blue', 'b'),
    c: getTextSprite('Blue', 'c'),
    d: getTextSprite('Blue', 'd'),
    e: getTextSprite('Blue', 'e'),
    f: getTextSprite('Blue', 'f'),
    g: getTextSprite('Blue', 'g'),
    h: getTextSprite('Blue', 'h'),
    i: getTextSprite('Blue', 'i'),
    j: getTextSprite('Blue', 'j'),
    k: getTextSprite('Blue', 'k'),
    l: getTextSprite('Blue', 'l'),
    m: getTextSprite('Blue', 'm'),
    n: getTextSprite('Blue', 'n'),
    o: getTextSprite('Blue', 'o'),
    p: getTextSprite('Blue', 'p'),
    q: getTextSprite('Blue', 'q'),
    r: getTextSprite('Blue', 'r'),
    s: getTextSprite('Blue', 's'),
    t: getTextSprite('Blue', 't'),
    u: getTextSprite('Blue', 'u'),
    v: getTextSprite('Blue', 'v'),
    w: getTextSprite('Blue', 'w'),
    x: getTextSprite('Blue', 'x'),
    y: getTextSprite('Blue', 'y'),
    z: getTextSprite('Blue', 'z'),
    0: getTextSprite('Blue', '0'),
    1: getTextSprite('Blue', '1'),
    2: getTextSprite('Blue', '2'),
    3: getTextSprite('Blue', '3'),
    4: getTextSprite('Blue', '4'),
    5: getTextSprite('Blue', '5'),
    6: getTextSprite('Blue', '6'),
    7: getTextSprite('Blue', '7'),
    8: getTextSprite('Blue', '8'),
    9: getTextSprite('Blue', '9'),
    plus: getTextSprite('Blue', '+'),
    minus: getTextSprite('Blue', '-'),
    rightDoubleQuote: getTextSprite('Blue', '"'),
    rightSingleQuote: getTextSprite('Blue', "'"),
    leftDoubleQuote: getTextSprite('Blue', '"'),
    leftSingleQuote: getTextSprite('Blue', "'"),
    leftParenthesis: getTextSprite('Blue', '('),
    rightParenthesis: getTextSprite('Blue', ')'),
    comma: getTextSprite('Blue', ','),
    period: getTextSprite('Blue', '.'),
    colon: getTextSprite('Blue', ':'),
    questionMark: getTextSprite('Blue', '?'),
    exclamationPoint: getTextSprite('Blue', '!'),
    accentE: getTextSprite('Blue', 'é'),
    elipse: getTextSprite('Blue', '...'),
    altElipse: getTextSprite('Blue', '...2')
  },
  Yellow: {
    A: getTextSprite('Yellow', 'A'),
    B: getTextSprite('Yellow', 'B'),
    C: getTextSprite('Yellow', 'C'),
    D: getTextSprite('Yellow', 'D'),
    E: getTextSprite('Yellow', 'E'),
    F: getTextSprite('Yellow', 'F'),
    G: getTextSprite('Yellow', 'G'),
    H: getTextSprite('Yellow', 'H'),
    I: getTextSprite('Yellow', 'I'),
    J: getTextSprite('Yellow', 'J'),
    K: getTextSprite('Yellow', 'K'),
    L: getTextSprite('Yellow', 'L'),
    M: getTextSprite('Yellow', 'M'),
    N: getTextSprite('Yellow', 'N'),
    O: getTextSprite('Yellow', 'O'),
    P: getTextSprite('Yellow', 'P'),
    Q: getTextSprite('Yellow', 'Q'),
    R: getTextSprite('Yellow', 'R'),
    S: getTextSprite('Yellow', 'S'),
    T: getTextSprite('Yellow', 'T'),
    U: getTextSprite('Yellow', 'U'),
    V: getTextSprite('Yellow', 'V'),
    W: getTextSprite('Yellow', 'W'),
    X: getTextSprite('Yellow', 'X'),
    Y: getTextSprite('Yellow', 'Y'),
    Z: getTextSprite('Yellow', 'Z'),
    a: getTextSprite('Yellow', 'a'),
    b: getTextSprite('Yellow', 'b'),
    c: getTextSprite('Yellow', 'c'),
    d: getTextSprite('Yellow', 'd'),
    e: getTextSprite('Yellow', 'e'),
    f: getTextSprite('Yellow', 'f'),
    g: getTextSprite('Yellow', 'g'),
    h: getTextSprite('Yellow', 'h'),
    i: getTextSprite('Yellow', 'i'),
    j: getTextSprite('Yellow', 'j'),
    k: getTextSprite('Yellow', 'k'),
    l: getTextSprite('Yellow', 'l'),
    m: getTextSprite('Yellow', 'm'),
    n: getTextSprite('Yellow', 'n'),
    o: getTextSprite('Yellow', 'o'),
    p: getTextSprite('Yellow', 'p'),
    q: getTextSprite('Yellow', 'q'),
    r: getTextSprite('Yellow', 'r'),
    s: getTextSprite('Yellow', 's'),
    t: getTextSprite('Yellow', 't'),
    u: getTextSprite('Yellow', 'u'),
    v: getTextSprite('Yellow', 'v'),
    w: getTextSprite('Yellow', 'w'),
    x: getTextSprite('Yellow', 'x'),
    y: getTextSprite('Yellow', 'y'),
    z: getTextSprite('Yellow', 'z'),
    0: getTextSprite('Yellow', '0'),
    1: getTextSprite('Yellow', '1'),
    2: getTextSprite('Yellow', '2'),
    3: getTextSprite('Yellow', '3'),
    4: getTextSprite('Yellow', '4'),
    5: getTextSprite('Yellow', '5'),
    6: getTextSprite('Yellow', '6'),
    7: getTextSprite('Yellow', '7'),
    8: getTextSprite('Yellow', '8'),
    9: getTextSprite('Yellow', '9'),
    plus: getTextSprite('Yellow', '+'),
    minus: getTextSprite('Yellow', '-'),
    rightDoubleQuote: getTextSprite('Yellow', '"'),
    rightSingleQuote: getTextSprite('Yellow', "'"),
    leftDoubleQuote: getTextSprite('Yellow', '"'),
    leftSingleQuote: getTextSprite('Yellow', "'"),
    leftParenthesis: getTextSprite('Yellow', '('),
    rightParenthesis: getTextSprite('Yellow', ')'),
    comma: getTextSprite('Yellow', ','),
    period: getTextSprite('Yellow', '.'),
    colon: getTextSprite('Yellow', ':'),
    questionMark: getTextSprite('Yellow', '?'),
    exclamationPoint: getTextSprite('Yellow', '!'),
    accentE: getTextSprite('Yellow', 'é'),
    elipse: getTextSprite('Yellow', '...'),
    altElipse: getTextSprite('Yellow', '...2')
  }
}
  // Level up VFX
const levelVfxFrames = [
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame1.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame2.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame3.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame4.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame5.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame6.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame7.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame8.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame9.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame10.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame11.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame12.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame13.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame14.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/level/levelFrame15.png'
]
  // Buff VFX
const buffVfxFrames = [
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame1.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame2.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame3.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame4.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame5.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame6.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame7.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame8.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame9.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame10.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/animations/frames/buff/buffFrame11.png'
]
const vaporeonPortraitNormal = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/Vaporeon/portraits/VaporeonPortrait_Normal.png';

const Pokedollar = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Currency/Pokedollar.png'; // Replace with your sprite URL

// Wall sprites
/*
const wallSpriteLeft = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet164l.png';
const wallSpriteRight = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet167r.png';
const wallSpriteUp = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet001u.png';
const wallSpriteDown = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet186d.png';
const cornerSpriteTopLeft = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet000tl.png'; // Updated to new top left corner sprite
const cornerSpriteTopRight = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet003tr.png'; // Updated to new top right corner sprite
const cornerSpriteBottomLeft = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet124bl.png'; // Updated to new bottom left corner sprite
*/
const Sprites = {
  tiles: {
    wallSpriteLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    wallSpriteRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    wallSpriteDown: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    wallSpriteUp: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    cornerSpriteTopLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    cornerSpriteTopRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    cornerSpriteBottomLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    cornerSpriteBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    enclosedWallSprite1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    enclosedWallSprite2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    enclosedWallSprite3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    enclosedWallSprite4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    innerCornerTopRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    innerCornerTopLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    innerCornerBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    innerCornerBottomLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%231.png',
    /*
    cornerSpriteBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedwallSpritesheet159br.png',
    enclosedWallSprite1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full1.png',
    enclosedWallSprite2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full2.png',
    enclosedWallSprite3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full3.png',
    enclosedWallSprite4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick%20Wall%20Full4.png',
    innerCornerTopRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_topright.png',
    innerCornerTopLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_topleft.png',
    innerCornerBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_bottomright.png',
    innerCornerBottomLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Brick_Wall_inner_corner_bottomleft.png',
    */
  }
};
const wallSpriteLeft = Sprites.tiles.wallSpriteLeft;
const wallSpriteRight = Sprites.tiles.wallSpriteRight;
const wallSpriteDown = Sprites.tiles.wallSpriteDown;
const wallSpriteUp = Sprites.tiles.wallSpriteUp;
const cornerSpriteTopLeft = Sprites.tiles.cornerSpriteTopLeft;
const cornerSpriteTopRight = Sprites.tiles.cornerSpriteTopRight;
const cornerSpriteBottomLeft = Sprites.tiles.cornerSpriteBottomLeft;
const cornerSpriteBottomRight = Sprites.tiles.cornerSpriteBottomRight;
const enclosedWallSprite1 = Sprites.tiles.enclosedWallSprite1;
const enclosedWallSprite2 = Sprites.tiles.enclosedWallSprite2;
const enclosedWallSprite3 = Sprites.tiles.enclosedWallSprite3;
const enclosedWallSprite4 = Sprites.tiles.enclosedWallSprite4;
const innerCornerTopRight = Sprites.tiles.innerCornerTopRight;
const innerCornerTopLeft = Sprites.tiles.innerCornerTopLeft;
const innerCornerBottomRight = Sprites.tiles.innerCornerBottomRight;
const innerCornerBottomLeft = Sprites.tiles.innerCornerBottomLeft;
// Helper function to generate bar component URLs on demand
const generateBarComponents = (category, formatFn) => {
  const urls = {};
  for (let i = 0; i <= 100; i++) {
    urls[i] = `https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/${category}/${formatFn(i)}.png`;
  }
  return urls;
};
// Hunger components
const hungerBarComponent = generateBarComponents(
  'hungerComponent',
  (i) => `Hunger%20Bar%20Component%20${i < 10 ? '0' + i : i}%25`
);
// Health bar components
const healthBarComponent = generateBarComponents(
  'healthComponent',
  (i) => `HealthBarComponent${i}%25`
);

// Experience bar components
const expBarComponent = generateBarComponents(
  'expComponent',
  (i) => `expBar${i}%25`
);
// Item Selection indicator (proto)
// Item Selection indicator (proto)
const itemSelector = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/itemSelector.png';

// Floor Sprites (random rotation) and sound effects grouped
Sprites.floor = [
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet068%231.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet070%232.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet116%233.png',
  'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/EditedfloorSpritesheet117%234.png'
];

Sprites.sfx = {
  select: new Audio('https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/sfx/general/Select1sfx.mp3'),
  decline: new Audio('https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/sfx/general/Decline1sfx.mp3'),
  affirmative: new Audio('https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/sfx/general/Affirmative1sfx.mp3')
};

// compatibility aliases
const floorSprites = Sprites.floor;
const selectsfx = Sprites.sfx.select;
const declinesfx = Sprites.sfx.decline;
const affirmativesfx = Sprites.sfx.affirmative;

// Stair Sprite (proto)
const stairSprite = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/StairsWithTile.png';
const turnIntervalMs = 500;

const Game = () => {
// Start React state declarations here
const fpsRef = React.useRef(null);
  React.useEffect(() => {
    let rafId = 0;
    let frames = 0;
    let lastMeasure = performance.now();
    const measureIntervalMs = 500; // update every 0.5s

    function tick(now) {
      frames++;
      if (now - lastMeasure >= measureIntervalMs) {
        const fps = Math.round((frames * 1000) / (now - lastMeasure));
        if (fpsRef.current) fpsRef.current.textContent = `FPS: ${fps}`;
        frames = 0;
        lastMeasure = now;
      }
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);
const [audio, setAudio] = React.useState(null);
const audioRef = React.useRef(audio);
const [dungeon, setDungeon] = React.useState([]);
const dungeonRef = React.useRef(null);
const VIEW_RADIUS = 15; // 15 tiles each direction -> 31x31 viewport
const minHeight = 65;
const maxHeight = 75;
const minWidth = 65;
const maxWidth = 75;
const height = randInt(minHeight, maxHeight + 1);
const width = randInt(minWidth, maxWidth + 1);
const [stairs, setStairs] = React.useState({ x: 0, y: 0 });
const [floor, setFloor] = React.useState(1);
const [zoomLevel, setZoomLevel] = React.useState(1);

//DMG VFX
const [DMGVfx0, setDMGVfx0] = React.useState({ DMG: null, Active: false });
const DMGVfx0Ref = React.useRef(DMGVfx0);
const [DMGVfx1, setDMGVfx1] = React.useState({ DMG: null, Active: false });
const DMGVfx1Ref = React.useRef(DMGVfx1);
const [DMGVfx2, setDMGVfx2] = React.useState({ DMG: null, Active: false });
const DMGVfx2Ref = React.useRef(DMGVfx2);
const [DMGVfx3, setDMGVfx3] = React.useState({ DMG: null, Active: false });
const DMGVfx3Ref = React.useRef(DMGVfx3);
const [DMGVfx4, setDMGVfx4] = React.useState({ DMG: null, Active: false });
const DMGVfx4Ref = React.useRef(DMGVfx4);
const [DMGVfx5, setDMGVfx5] = React.useState({ DMG: null, Active: false });
const DMGVfx5Ref = React.useRef(DMGVfx5);
const [DMGVfx6, setDMGVfx6] = React.useState({ DMG: null, Active: false });
const DMGVfx6Ref = React.useRef(DMGVfx6);
const [DMGVfx7, setDMGVfx7] = React.useState({ DMG: null, Active: false });
const DMGVfx7Ref = React.useRef(DMGVfx7);
const [DMGVfx8, setDMGVfx8] = React.useState({ DMG: null, Active: false });
const DMGVfx8Ref = React.useRef(DMGVfx8);
  //Indexes
const [DMGVfx0Index, setDMGVfx0Index] = React.useState(0);
const [DMGVfx1Index, setDMGVfx1Index] = React.useState(0);
const [DMGVfx2Index, setDMGVfx2Index] = React.useState(0);
const [DMGVfx3Index, setDMGVfx3Index] = React.useState(0);
const [DMGVfx4Index, setDMGVfx4Index] = React.useState(0);
const [DMGVfx5Index, setDMGVfx5Index] = React.useState(0);
const [DMGVfx6Index, setDMGVfx6Index] = React.useState(0);
const [DMGVfx7Index, setDMGVfx7Index] = React.useState(0);
const [DMGVfx8Index, setDMGVfx8Index] = React.useState(0);
// Level params
const [level, setLevel] = React.useState(1);
const [exp, setExp] = React.useState(0);
const [maxExp, setMaxExp] = React.useState(100);

// Base Player Stats
const [basePlayerHP, setBasePlayerHP] = React.useState(100);
const [baseMaxPlayerHP, setBaseMaxPlayerHP] = React.useState(100);
const [basePlayerAttack, setBasePlayerAttack] = React.useState(10);
const [basePlayerSpecialAttack, setBasePlayerSpecialAttack] = React.useState(20);
const [basePlayerDefense, setBasePlayerDefense] = React.useState(5);
const [basePlayerSpecialDefense, setBasePlayerSpecialDefense] = React.useState(10);
const [basePlayerSpeed, setBasePlayerSpeed] = React.useState(5);
// Player stats
const [playerHP, setPlayerHP] = React.useState(basePlayerHP);
const [maxPlayerHP, setMaxPlayerHP] = React.useState(baseMaxPlayerHP);
const [playerAttack, setPlayerAttack] = React.useState(basePlayerAttack);
const [playerSpecialAttack, setPlayerSpecialAttack] = React.useState(basePlayerSpecialAttack);
const [playerDefense, setPlayerDefense] = React.useState(basePlayerDefense);
const [playerSpecialDefense, setPlayerSpecialDefense] = React.useState(basePlayerSpecialDefense);
const [playerSpeed, setPlayerSpeed] = React.useState(basePlayerSpeed);

// Hunger params
const [playerHunger, setPlayerHunger] = React.useState(100);
const [maxPlayerHunger, setMaxPlayerHunger] = React.useState(100);
const [hungerTicks, setHungerTicks] = React.useState(0);
const [hungry, setHungry] = React.useState(false);
const [isStarving, setIsStarving] = React.useState(false);
const [warned, setWarned] = React.useState(false);

// Enemy params
const [enemies, setEnemies] = React.useState([]);
const enemiesRef = React.useRef(enemies); 
const enemyCount = randInt(1, 2); // 1 to 2 enemies per room
const [enemyTypes, setEnemyTypes] = React.useState(Object.keys(ENEMY_DEFS));
const [enemyType, setEnemyType] = React.useState(enemyTypes[randInt(0, enemyTypes.length)]);
const [enemyType1, setEnemyType1] = React.useState(null);
const [enemyType2, setEnemyType2] = React.useState(null);
const [enemyType3, setEnemyType3] = React.useState(null);
const [enemyType4, setEnemyType4] = React.useState(null);
const [enemyType5, setEnemyType5] = React.useState(null);
const [enemyType6, setEnemyType6] = React.useState(null);
const [enemyType7, setEnemyType7] = React.useState(null);
const [enemyType8, setEnemyType8] = React.useState(null);
const [enemyHere, setEnemyHere] = React.useState(null);
const [enemyHereTiles, setEnemyHereTiles] = React.useState([]);
const enemyHereTilesRef = React.useRef([]);
const [enemiesState, setEnemiesState] = React.useState([])
const [enemy1, setEnemy1] = React.useState(false);
const [enemy2, setEnemy2] = React.useState(false);
const [enemy3, setEnemy3] = React.useState(false);
const [enemy4, setEnemy4] = React.useState(false);
const [enemy5, setEnemy5] = React.useState(false);
const [enemy6, setEnemy6] = React.useState(false);
const [enemy7, setEnemy7] = React.useState(false);
const [enemy8, setEnemy8] = React.useState(false);
const [enemy1Pos, setEnemy1Pos] = React.useState({ x: 0, y: 0 });
const [enemy2Pos, setEnemy2Pos] = React.useState({ x: 0, y: 0 });
const [enemy3Pos, setEnemy3Pos] = React.useState({ x: 0, y: 0 });
const [enemy4Pos, setEnemy4Pos] = React.useState({ x: 0, y: 0 });
const [enemy5Pos, setEnemy5Pos] = React.useState({ x: 0, y: 0 });
const [enemy6Pos, setEnemy6Pos] = React.useState({ x: 0, y: 0 });
const [enemy7Pos, setEnemy7Pos] = React.useState({ x: 0, y: 0 });
const [enemy8Pos, setEnemy8Pos] = React.useState({ x: 0, y: 0 });
  // position refs
const enemy1PosRef = React.useRef(enemy1Pos);
const enemy2PosRef = React.useRef(enemy2Pos);
const enemy3PosRef = React.useRef(enemy3Pos);
const enemy4PosRef = React.useRef(enemy4Pos);
const enemy5PosRef = React.useRef(enemy5Pos);
const enemy6PosRef = React.useRef(enemy6Pos);
const enemy7PosRef = React.useRef(enemy7Pos);
const enemy8PosRef = React.useRef(enemy8Pos);
  // anims
const [enemy1IdleAnimIndex, setEnemy1IdleAnimIndex] = React.useState(0);
const [enemy2IdleAnimIndex, setEnemy2IdleAnimIndex] = React.useState(0);
const [enemy3IdleAnimIndex, setEnemy3IdleAnimIndex] = React.useState(0);
const [enemy4IdleAnimIndex, setEnemy4IdleAnimIndex] = React.useState(0);
const [enemy5IdleAnimIndex, setEnemy5IdleAnimIndex] = React.useState(0);
const [enemy6IdleAnimIndex, setEnemy6IdleAnimIndex] = React.useState(0);
const [enemy7IdleAnimIndex, setEnemy7IdleAnimIndex] = React.useState(0);
const [enemy8IdleAnimIndex, setEnemy8IdleAnimIndex] = React.useState(0);
  // stats (placeholder)
const [enemy1HP, setEnemy1HP] = React.useState(2);
const [enemy1MaxHP, setEnemy1MaxHP] = React.useState(2);
const [enemy1Attack, setEnemy1Attack] = React.useState(0);
const [enemy1Defense, setEnemy1Defense] = React.useState(0);
const [enemy1SpecialDefense, setEnemy1SpecialDefense] = React.useState(0);
const [enemy1Speed, setEnemy1Speed] = React.useState(0);
const [enemy2HP, setEnemy2HP] = React.useState(2);
const [enemy2MaxHP, setEnemy2MaxHP] = React.useState(2);
const [enemy2Attack, setEnemy2Attack] = React.useState(0);
const [enemy2Defense, setEnemy2Defense] = React.useState(0);
const [enemy2SpecialDefense, setEnemy2SpecialDefense] = React.useState(0);
const [enemy2Speed, setEnemy2Speed] = React.useState(0);
const [enemy3HP, setEnemy3HP] = React.useState(2);
const [enemy3MaxHP, setEnemy3MaxHP] = React.useState(2);
const [enemy3Attack, setEnemy3Attack] = React.useState(0);
const [enemy3Defense, setEnemy3Defense] = React.useState(0);
const [enemy3SpecialDefense, setEnemy3SpecialDefense] = React.useState(0);
const [enemy3Speed, setEnemy3Speed] = React.useState(0);
const [enemy4HP, setEnemy4HP] = React.useState(2);
const [enemy4MaxHP, setEnemy4MaxHP] = React.useState(2);
const [enemy4Attack, setEnemy4Attack] = React.useState(0);
const [enemy4Defense, setEnemy4Defense] = React.useState(0);
const [enemy4SpecialDefense, setEnemy4SpecialDefense] = React.useState(0);
const [enemy4Speed, setEnemy4Speed] = React.useState(0);
const [enemy5HP, setEnemy5HP] = React.useState(2);
const [enemy5MaxHP, setEnemy5MaxHP] = React.useState(2);
const [enemy5Attack, setEnemy5Attack] = React.useState(0);
const [enemy5Defense, setEnemy5Defense] = React.useState(0);
const [enemy5SpecialDefense, setEnemy5SpecialDefense] = React.useState(0);
const [enemy5Speed, setEnemy5Speed] = React.useState(0);
const [enemy6HP, setEnemy6HP] = React.useState(2);
const [enemy6MaxHP, setEnemy6MaxHP] = React.useState(2);
const [enemy6Attack, setEnemy6Attack] = React.useState(0);
const [enemy6Defense, setEnemy6Defense] = React.useState(0);
const [enemy6SpecialDefense, setEnemy6SpecialDefense] = React.useState(0);
const [enemy6Speed, setEnemy6Speed] = React.useState(0);
const [enemy7HP, setEnemy7HP] = React.useState(2);
const [enemy7MaxHP, setEnemy7MaxHP] = React.useState(2);
const [enemy7Attack, setEnemy7Attack] = React.useState(0);
const [enemy7Defense, setEnemy7Defense] = React.useState(0);
const [enemy7SpecialDefense, setEnemy7SpecialDefense] = React.useState(0);
const [enemy7Speed, setEnemy7Speed] = React.useState(0);
const [enemy8HP, setEnemy8HP] = React.useState(2);
const [enemy8MaxHP, setEnemy8MaxHP] = React.useState(2);
const [enemy8Attack, setEnemy8Attack] = React.useState(0);
const [enemy8Defense, setEnemy8Defense] = React.useState(0);
const [enemy8SpecialDefense, setEnemy8SpecialDefense] = React.useState(0);
const [enemy8Speed, setEnemy8Speed] = React.useState(0);
  // configure AI
  const [enemy1MoveBehavior, setEnemy1MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy1MoveBehaviorRef = React.useRef(enemy1MoveBehavior);
  const [enemy1AttackBehavior, setEnemy1AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy1AttackBehaviorRef = React.useRef(enemy1AttackBehavior);
  const [enemy2MoveBehavior, setEnemy2MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy2MoveBehaviorRef = React.useRef(enemy2MoveBehavior);
  const [enemy2AttackBehavior, setEnemy2AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy2AttackBehaviorRef = React.useRef(enemy2AttackBehavior);
  const [enemy3MoveBehavior, setEnemy3MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy3MoveBehaviorRef = React.useRef(enemy3MoveBehavior);
  const [enemy3AttackBehavior, setEnemy3AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy3AttackBehaviorRef = React.useRef(enemy3AttackBehavior);
  const [enemy4MoveBehavior, setEnemy4MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy4MoveBehaviorRef = React.useRef(enemy4MoveBehavior);
  const [enemy4AttackBehavior, setEnemy4AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy4AttackBehaviorRef = React.useRef(enemy4AttackBehavior);
  const [enemy5MoveBehavior, setEnemy5MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy5MoveBehaviorRef = React.useRef(enemy5MoveBehavior);
  const [enemy5AttackBehavior, setEnemy5AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy5AttackBehaviorRef = React.useRef(enemy5AttackBehavior);
  const [enemy6MoveBehavior, setEnemy6MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy6MoveBehaviorRef = React.useRef(enemy6MoveBehavior);
  const [enemy6AttackBehavior, setEnemy6AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy6AttackBehaviorRef = React.useRef(enemy6AttackBehavior);
  const [enemy7MoveBehavior, setEnemy7MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy7MoveBehaviorRef = React.useRef(enemy7MoveBehavior);
  const [enemy7AttackBehavior, setEnemy7AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy7AttackBehaviorRef = React.useRef(enemy7AttackBehavior);
  const [enemy8MoveBehavior, setEnemy8MoveBehavior] = React.useState(true); // Whether enemies move
  const enemy8MoveBehaviorRef = React.useRef(enemy8MoveBehavior);
  const [enemy8AttackBehavior, setEnemy8AttackBehavior] = React.useState(false); // Whether enemies attack
  const enemy8AttackBehaviorRef = React.useRef(enemy8AttackBehavior);
  //Designated States to block movement
  const [enemy1Attacking, setEnemy1Attacking] = React.useState(false);
  const enemy1AttackingRef = React.useRef(enemy1Attacking);
  const [enemy2Attacking, setEnemy2Attacking] = React.useState(false);
  const enemy2AttackingRef = React.useRef(enemy2Attacking);
  const [enemy3Attacking, setEnemy3Attacking] = React.useState(false);
  const enemy3AttackingRef = React.useRef(enemy3Attacking);
  const [enemy4Attacking, setEnemy4Attacking] = React.useState(false);
  const enemy4AttackingRef = React.useRef(enemy4Attacking);
  const [enemy5Attacking, setEnemy5Attacking] = React.useState(false);
  const enemy5AttackingRef = React.useRef(enemy5Attacking);
  const [enemy6Attacking, setEnemy6Attacking] = React.useState(false);
  const enemy6AttackingRef = React.useRef(enemy6Attacking);
  const [enemy7Attacking, setEnemy7Attacking] = React.useState(false);
  const enemy7AttackingRef = React.useRef(enemy7Attacking);
  const [enemy8Attacking, setEnemy8Attacking] = React.useState(false);
  const enemy8AttackingRef = React.useRef(enemy8Attacking);
  // Last direction faced
  const [enemy1LastDirection, setEnemy1LastDirection] = React.useState('down');
  const [enemy2LastDirection, setEnemy2LastDirection] = React.useState('down');
  const [enemy3LastDirection, setEnemy3LastDirection] = React.useState('down');
  const [enemy4LastDirection, setEnemy4LastDirection] = React.useState('down');
  const [enemy5LastDirection, setEnemy5LastDirection] = React.useState('down');
  const [enemy6LastDirection, setEnemy6LastDirection] = React.useState('down');
  const [enemy7LastDirection, setEnemy7LastDirection] = React.useState('down');
  const [enemy8LastDirection, setEnemy8LastDirection] = React.useState('down');
  const [enemy1Sleeping, setEnemy1Sleeping] = React.useState(false);
  const enemy1SleepingRef = React.useRef(enemy1Sleeping);
  const [enemy2Sleeping, setEnemy2Sleeping] = React.useState(false);
  const enemy2SleepingRef = React.useRef(enemy2Sleeping);
  const [enemy3Sleeping, setEnemy3Sleeping] = React.useState(false);
  const enemy3SleepingRef = React.useRef(enemy3Sleeping);
  const [enemy4Sleeping, setEnemy4Sleeping] = React.useState(false);
  const enemy4SleepingRef = React.useRef(enemy4Sleeping);
  const [enemy5Sleeping, setEnemy5Sleeping] = React.useState(false);
  const enemy5SleepingRef = React.useRef(enemy5Sleeping);
  const [enemy6Sleeping, setEnemy6Sleeping] = React.useState(false);
  const enemy6SleepingRef = React.useRef(enemy6Sleeping);
  const [enemy7Sleeping, setEnemy7Sleeping] = React.useState(false);
  const enemy7SleepingRef = React.useRef(enemy7Sleeping);
  const [enemy8Sleeping, setEnemy8Sleeping] = React.useState(false);
  const enemy8SleepingRef = React.useRef(enemy8Sleeping);
  const [validOptions, setValidOptions] = React.useState(null);
  const [chosen, setChosen] = React.useState(0);
  // Attack booleans
  const [rockThrow, setRockThrow] = React.useState(false);
  const rockThrowRef = React.useRef(rockThrow);
  const [rockThrowTransform, setRockThrowTransform] = React.useState('translatex(65%) translateY(-615%)'); // Store transform to prevent flickering
  // Projectile continuous position for smooth rendering
  const [projectilePos, setProjectilePos] = React.useState({1: {x: 0, y: 0}, 2: {x: 0, y: 0}, 3: {x: 0, y: 0}, 4: {x: 0, y: 0}, 5: {x: 0, y: 0}, 6: {x: 0, y: 0}, 7: {x: 0, y: 0}, 8: {x: 0, y: 0}});
  const projectilePosRef = React.useRef(projectilePos);
// Menu states
const [isPaused, setIsPaused] = React.useState(false); // New paused state
const [showOptions, setShowOptions] = React.useState(false); // State for options menu
const [showStatus, setShowStatus] = React.useState(false); // State for status menu
const [showMoves, setShowMoves] = React.useState(false); // State for moves menu
const [showToolbox, setShowToolbox] = React.useState(false); // State for toolbox menu
const isPausedRef = React.useRef(isPaused);

// Currency
const [currencyTiles, setCurrencyTiles] = React.useState([]);
const [currency, setCurrency] = React.useState(0);
const currencyTilesRef = React.useRef(currencyTiles);

// Item tiles and inventory
const [itemTiles, setItemTiles] = React.useState([]);
const itemTilesRef = React.useRef(itemTiles);
const [itemTilesIndex, setItemTilesIndex] = React.useState([]); // Index for cycling through item tiles
const [itemTilesIndexRef, setItemTilesIndexRef] = React.useState([]);
const [natItemOrder, setNatItemOrder] = React.useState(0); // Natural item order for cycling through items
const [itemOrder, setItemOrder] = React.useState(0);
const [itemSelected, setItemSelected] = React.useState(null); // Index of selected item in inventory
const [inventoryIndex, setInventoryIndex] = React.useState([]); // Index for navigating inventory
const [flickerFrame, setFlickerFrame] = React.useState(0);
const [inventory, setInventory] = React.useState([]);
const inventoryRef = React.useRef(inventory);
const [itemEquipped, setItemEquipped] = React.useState(null);
const [itemEquippedId, setItemEquippedId] = React.useState(null);
const [selectedAction, setSelectedAction] = React.useState('');
const [selectedItemSprite, setSelectedItemSprite] = React.useState(null);
const selectedItemSpriteRef = React.useRef(selectedItemSprite);
const [willConsumeItemInventory, setWillConsumeItemInventory] = React.useState(false);
const willConsumeItemInventoryRef = React.useRef(willConsumeItemInventory);
const [inventoryFull, setInventoryFull] = React.useState(false);
const getInventoryIndex = (inventory, ITEM_DEFS) => {
  return inventory.map((item, position) => ({
    item,
    itemDef: ITEM_DEFS[item.name],
    position
  }));
};
  // States for tracking thrown item behavior
const [targeted, setTargeted] = React.useState('');
const targetedRef = React.useRef(targeted);
const [willConsumeItem, setWillConsumeItem] = React.useState(false);
const willConsumeItemRef = React.useRef(willConsumeItem);

// Move selection
const [showItemActionMenu, setShowItemActionMenu] = React.useState(false);
const showItemActionMenuRef = React.useRef(showItemActionMenu);
const [showMoveSelector, setShowMoveSelector] = React.useState(false);
const [usingEther, setUsingEther] = React.useState(false); // Track if using Ether
const [selectedMove, setSelectedMove] = React.useState(0);
const moves = [
  { name: "Water Pulse", pp: `${MOVE_DEFS["Water Pulse"].ppcurr}/${MOVE_DEFS["Water Pulse"].ppmax}` },
  { name: "Aqua Tail", pp: `${MOVE_DEFS["Aqua Tail"].ppcurr}/${MOVE_DEFS["Aqua Tail"].ppmax}` },
  { name: "Acid Armor", pp: `${MOVE_DEFS["Acid Armor"].ppcurr}/${MOVE_DEFS["Acid Armor"].ppmax}` },
  { name: "Refresh", pp: `${MOVE_DEFS["Refresh"].ppcurr}/${MOVE_DEFS["Refresh"].ppmax}` }
];

// Item action selection
const [itemActionIndex, setItemActionIndex] = React.useState(0);
const itemActionsNormal = ["Use", "Throw", "Discard"];
const itemActionsEquip = ["Equip", "Throw", "Discard"];

// Checkboxes for options (proto)
const [checkBox1, setCheckBox1] = React.useState(false);
const [checkBox2, setCheckBox2] = React.useState(false);
const [checkBox3, setCheckBox3] = React.useState(false);

// Scene params
const [textArray, setTextArray] = React.useState([]); // Array of text segments for dialog
const textArrayRef = React.useRef(textArray);
const topLineCapacity = 415 //Amount of pixel space on the top line
const [selectedPortrait, setSelectedPortrait] = React.useState('Vaporeon_Shouting')
const [dialogSpeed, setDialogSpeed] = React.useState(125); //100 ms for fast, 125 ms for normal, and 150 ms for slow
const selectedPortraitRef = React.useRef(selectedPortrait)
const verticalTranslationArray = {'a': '0px', 'b': '-0.7px', 'c': '0px', 'd': '-0.7px', 'e': '0px', 'f': '-0.7px', 'g': '0.5px', 'h': '-0.7px', 'i': '-0.75px', 'j': '-1.05px', 'k': '-0.35px', 'l': '-0.7px', 'm': '0px', 'n': '0px', 'o': '0px', 'p': '-0.35px', 'q': '-0.35px', 'r': '0px', 's': '0px', 't': '-0.7px', 'u': '0px', 'v': '0px', 'w': '0px', 'x': '0px', 'y': '0.35px', 'z': '0px'};
const dimensionArray = {'Width': {'a': '8.378px', 'b': '8.378px', 'c': '8.378px', 'd': '8.378px', 'e': '8.378px', 'f': '8.378px', 'g': '8.378px', 'h': '8.378px', 'i': '4.378px', 'j': '4.378px', 'k': '8.378px', 'l': '4.378px', 'm': '14.378px', 'n': '8.378px', 'o': '8.378px', 'p': '8.378px', 'q': '8.378px', 'r': '8.378px', 's': '8.378px', 't': '6.378px', 'u': '8.378px', 'v': '10.378px', 'w': '14.378px', 'x': '10.378px', 'y': '8.378px', 'z': '8.378px', 'A': '10.378px', 'B': '10.378px', 'C': '10.378px', 'D': '10.378px', 'E': '8.378px', 'F': '8.378px', 'G': '10.378px', 'H': '10.378px', 'I': '6.378px', 'J': '10.378px', 'K': '10.378px', 'L': '8.378px', 'M': '14.378px', 'N': '10.378px', 'O': '10.378px', 'P': '10.378px', 'Q': '10.378px', 'R': '10.378px', 'S': '10.378px', 'T': '10.378px', 'U': '10.378px', 'V': '10.378px', 'W': '18.378px', 'X': '10.378px', 'Y': '10.378px', 'Z': '10.378px', ' ': textSpacing, '': '0px'}, 'Height': {'a': '12.378px', 'b': '16.378px', 'c': '12.378px', 'd': '16.378px', 'e': '12.378px', 'f': '16.378px', 'g': '14.378px', 'h': '16.378px', 'i': '16.378px', 'j': '18.378px', 'k': '16.378px', 'l': '16.378px', 'm': '12.378px', 'n': '12.378px', 'o': '12.378px', 'p': '14.378px', 'q': '14.378px', 'r': '12.378px', 's': '12.378px', 't': '16.378px', 'u': '12.378px', 'v': '12.378px', 'w': '12.378px', 'x': '12.378px', 'y': '14.378px', 'z': '12.378px', ' ': textSpacing, '': '0px'} }
const textSpacing = '8px';
const [space1, setSpace1] = React.useState(''); // States for all possible locations of text to store characters
const space1Ref = React.useRef(space1);
const [space2, setSpace2] = React.useState('');
const space2Ref = React.useRef(space2);
const [space3, setSpace3] = React.useState('');
const space3Ref = React.useRef(space3);
const [space4, setSpace4] = React.useState('');
const space4Ref = React.useRef(space4);
const [space5, setSpace5] = React.useState('');
const space5Ref = React.useRef(space5);
const [space6, setSpace6] = React.useState('');
const space6Ref = React.useRef(space6);
const [space7, setSpace7] = React.useState('');
const space7Ref = React.useRef(space7);
const [space8, setSpace8] = React.useState('');
const space8Ref = React.useRef(space8);
const [space9, setSpace9] = React.useState('');
const space9Ref = React.useRef(space9);
const [space10, setSpace10] = React.useState('');
const space10Ref = React.useRef(space10);
const [space11, setSpace11] = React.useState('');
const space11Ref = React.useRef(space11);
const [space12, setSpace12] = React.useState('');
const space12Ref = React.useRef(space12);
const [space13, setSpace13] = React.useState('');
const space13Ref = React.useRef(space13);
const [space14, setSpace14] = React.useState('');
const space14Ref = React.useRef(space14);
const [space15, setSpace15] = React.useState('');
const space15Ref = React.useRef(space15);
const [space16, setSpace16] = React.useState('');
const space16Ref = React.useRef(space16);
const [space17, setSpace17] = React.useState('');
const space17Ref = React.useRef(space17);
const [space18, setSpace18] = React.useState('');
const space18Ref = React.useRef(space18);
const [space19, setSpace19] = React.useState('');
const space19Ref = React.useRef(space19);
const [space20, setSpace20] = React.useState('');
const space20Ref = React.useRef(space20);
const [space21, setSpace21] = React.useState('');
const space21Ref = React.useRef(space21);
const [space22, setSpace22] = React.useState('');
const space22Ref = React.useRef(space22);
const [space23, setSpace23] = React.useState('');
const space23Ref = React.useRef(space23);
const [space24, setSpace24] = React.useState('');
const space24Ref = React.useRef(space24);
const [space25, setSpace25] = React.useState('');
const space25Ref = React.useRef(space25);
const [space26, setSpace26] = React.useState('');
const space26Ref = React.useRef(space26);
const [space27, setSpace27] = React.useState('');
const space27Ref = React.useRef(space27);
const [space28, setSpace28] = React.useState('');
const space28Ref = React.useRef(space28);
const [space29, setSpace29] = React.useState('');
const space29Ref = React.useRef(space29);
const [space30, setSpace30] = React.useState('');
const space30Ref = React.useRef(space30);
const [space31, setSpace31] = React.useState('');
const space31Ref = React.useRef(space31);
const [space32, setSpace32] = React.useState('');
const space32Ref = React.useRef(space32);
const [space33, setSpace33] = React.useState('');
const space33Ref = React.useRef(space33);
const [space34, setSpace34] = React.useState('');
const space34Ref = React.useRef(space34);
const [space35, setSpace35] = React.useState('');
const space35Ref = React.useRef(space35);
const [space36, setSpace36] = React.useState('');
const space36Ref = React.useRef(space36);
const [space37, setSpace37] = React.useState('');
const space37Ref = React.useRef(space37);
const [space38, setSpace38] = React.useState('');
const space38Ref = React.useRef(space38);
const [space39, setSpace39] = React.useState('');
const space39Ref = React.useRef(space39);
const [space40, setSpace40] = React.useState('');
const space40Ref = React.useRef(space40);
const [space41, setSpace41] = React.useState('');
const space41Ref = React.useRef(space41);
const [space42, setSpace42] = React.useState('');
const space42Ref = React.useRef(space42);
const [space43, setSpace43] = React.useState('');
const space43Ref = React.useRef(space43);
const [space44, setSpace44] = React.useState('');
const space44Ref = React.useRef(space44);
const [space45, setSpace45] = React.useState('');
const space45Ref = React.useRef(space45);
const [space46, setSpace46] = React.useState('');
const space46Ref = React.useRef(space46);
const [space47, setSpace47] = React.useState('');
const space47Ref = React.useRef(space47);
const [space48, setSpace48] = React.useState('');
const space48Ref = React.useRef(space48);
const [space49, setSpace49] = React.useState('');
const space49Ref = React.useRef(space49);
const [space50, setSpace50] = React.useState('');
const space50Ref = React.useRef(space50);
const [dialogIndex, setDialogIndex] = React.useState(0); // Index for dialog progression
const [showDialog, setShowDialog] = React.useState(false); // State to show
const [dialogKey, setDialogKey] = React.useState(0); // Key for dialog content
const [textSkipped, setTextSkipped] = React.useState(false); // Track if text was skipped
const [textAdvance, setTextAdvance] = React.useState(false); // Track if text should advance
const [textStopped, setTextStopped] = React.useState(false); // Track if text advancement is stopped

// Add a ref + helper to keep rAF callback in sync immediately
const textAdvanceRef = React.useRef(false);
const setTextAdvanceAndRef = (val) => {
  textAdvanceRef.current = val;
  setTextAdvance(val);
};
const showDialogRef = React.useRef(showDialog);
const textSkippedRef = React.useRef(textSkipped);
React.useEffect(() => { textSkippedRef.current = textSkipped; }, [textSkipped]);
const textStoppedRef = React.useRef(textStopped);
React.useEffect(() => { textStoppedRef.current = textStopped; }, [textStopped]);
  //debug
  const debugStops = {
  firstStop: 25,
  secondStop: 84,
  thirdStop: 124,
  fourtHPtop: 181
};
// Action log
const [actionLog, setActionLog] = React.useState([]); // [{msg, id}]

// Aiming and diagonal mode (proto)
const [isAiming, setIsAiming] = React.useState(false); // Track whether player is aiming
const [inDiagonalMode, setInDiagonalMode] = React.useState(false); // Track whether player is using diagonal mode
const [showIndicators, setShowIndicators] = React.useState(false); // State to track indicator visibility

//Animation booleans
const [isWalking, setIsWalking] = React.useState(false);
const isWalkingRef = React.useRef(isWalking);
const [isSleeping, setIsSleeping] = React.useState(false);
const [isLevelingUp, setIsLevelingUp] = React.useState(false); // State to track if leveling up
const [isBuffing, setIsBuffing] = React.useState(false); // State to track if buffing
const [isSpinning, setIsSpinning] = React.useState(false); // State to track if spinning
const [usingAquaTail, setUsingAquaTail] = React.useState(false); // State to track if using Aqua Tail
  // Indexes
const [idleSpriteIndex, setIdleSpriteIndex] = React.useState(0); // Index for idle animation
const [walkSpriteIndex, setWalkSpriteIndex] = React.useState(0); // Index for walk animation
const [spinSpriteIndex, setSpinSpriteIndex] = React.useState(0); // Index for spin animation
const [sleepSpriteIndex, setSleepSpriteIndex] = React.useState(0); // Index for sleep animation
const [levelVfxIndex, setLevelVfxIndex] = React.useState(0); // Index for level up VFX animation
const [buffVfxIndex, setBuffVfxIndex] = React.useState(0); // Index for buff VFX animation
const [aquaTailIndex, setAquaTailIndex] = React.useState(0); // Index for Aqua Tail animation
  // Enemy vfx indexes
  const [rockThrowIndex, setRockThrowIndex] = React.useState(0); // Index for rock throw animation
  // Other
const walkCooldownRef = React.useRef(null);

//Location and map tracking
const [playerPos, setPlayerPos] = React.useState({ x: 15, y: 15 });
const playerPosRef = React.useRef(playerPos); // Special ref for enemy <-> player comparison
const [roomsState, setRoomsState] = React.useState([]); // rooms returned from generator
const [exploredTiles, setExploredTiles] = React.useState(() => new Set()); // "x,y" keys
const minimapCanvasRef = React.useRef(null);
const [minimapSize, setMinimapSize] = React.useState(200)

// helper for keys
const tileKey = (x, y) => `${x},${y}`;

// Camera params
const [cameraTransform, setCameraTransform] = React.useState('');
const cameraTargetRef = React.useRef({ x: playerPos.x, y: playerPos.y });
const cameraPosRef = React.useRef({ x: playerPos.x, y: playerPos.y });
const cameraRafRef = React.useRef(null);

// Movement and key states
const [lastDirection, setLastDirection] = React.useState('down'); // Default direction
const lastDirectionRef = React.useRef(lastDirection);
const [keyState, setKeyState] = React.useState({
  w: false, a: false, s: false, d: false, q: false, e: false, z: false, c: false,
  wHeld: false, aHeld: false, sHeld: false, dHeld: false,
  shift: false, qHeld: false, eHeld: false, zHeld: false, cHeld: false
});
const ks = React.useRef(keyState); // For easier access

// Thrown item projectiles
const [projectiles, setProjectiles] = React.useState([]);
const projectilesRef = React.useRef([]);
projectilesRef.current = projectiles;

// Auto-cleanup for stuck projectiles to prevent memory leaks
React.useEffect(() => {
  const cleanupInterval = setInterval(() => {
    setProjectiles(prev => {
      // Keep only projectiles created within the last 5 seconds to prevent memory buildup
      const now = Date.now();
      const MAX_AGE = 5000;
      return prev.filter(p => {
        const projAge = parseInt(p.id.split('_')[1]) || 0;
        return (now - projAge) < MAX_AGE;
      });
    });
  }, 1000);
  
  return () => clearInterval(cleanupInterval);
}, []);

//effects to update refs
React.useEffect(() => { ks.current = keyState; }, [keyState]);
React.useEffect(() => { itemTilesRef.current = itemTiles; }, [itemTiles]);
React.useEffect(() => { currencyTilesRef.current = currencyTiles; }, [currencyTiles]);
React.useEffect(() => { inventoryRef.current = inventory; }, [inventory]);
React.useEffect(() => { textAdvanceRef.current = textAdvance; }, [textAdvance]);
React.useEffect(() => { showDialogRef.current = showDialog; }, [showDialog]);
React.useEffect(() => { enemy1PosRef.current = enemy1Pos ; }, [enemy1Pos]);
React.useEffect(() => { enemy2PosRef.current = enemy2Pos ; }, [enemy2Pos]);
React.useEffect(() => { enemy3PosRef.current = enemy3Pos ; }, [enemy3Pos]);
React.useEffect(() => { enemy4PosRef.current = enemy4Pos ; }, [enemy4Pos]);
React.useEffect(() => { enemy5PosRef.current = enemy5Pos ; }, [enemy5Pos]);
React.useEffect(() => { enemy6PosRef.current = enemy6Pos ; }, [enemy6Pos]);
React.useEffect(() => { enemy7PosRef.current = enemy7Pos ; }, [enemy7Pos]);
React.useEffect(() => { enemy8PosRef.current = enemy8Pos ; }, [enemy8Pos]);
React.useEffect(() => { playerPosRef.current = playerPos ; }, [playerPos]);
React.useEffect(() => { willConsumeItemRef.current = willConsumeItem ; }, [willConsumeItem]);
React.useEffect(() => { targetedRef.current = targeted ; }, [targeted]);
React.useEffect(() => { selectedItemSpriteRef.current = selectedItemSprite ; }, [selectedItemSprite]);
React.useEffect(() => { willConsumeItemInventoryRef.current = willConsumeItemInventory ; }, [willConsumeItemInventory]);
React.useEffect(() => { enemy1MoveBehaviorRef.current = enemy1MoveBehavior ; }, [enemy1MoveBehavior]);
React.useEffect(() => { enemy1AttackBehaviorRef.current = enemy1AttackBehavior ; }, [enemy1AttackBehavior]);
React.useEffect(() => { enemy2MoveBehaviorRef.current = enemy2MoveBehavior ; }, [enemy2MoveBehavior]);
React.useEffect(() => { enemy2AttackBehaviorRef.current = enemy2AttackBehavior ; }, [enemy2AttackBehavior]);
React.useEffect(() => { enemy3MoveBehaviorRef.current = enemy3MoveBehavior ; }, [enemy3MoveBehavior]);
React.useEffect(() => { enemy3AttackBehaviorRef.current = enemy3AttackBehavior ; }, [enemy3AttackBehavior]);
React.useEffect(() => { enemy4MoveBehaviorRef.current = enemy4MoveBehavior ; }, [enemy4MoveBehavior]);
React.useEffect(() => { enemy4AttackBehaviorRef.current = enemy4AttackBehavior ; }, [enemy4AttackBehavior]);
React.useEffect(() => { enemy5MoveBehaviorRef.current = enemy5MoveBehavior ; }, [enemy5MoveBehavior]);
React.useEffect(() => { enemy5AttackBehaviorRef.current = enemy5AttackBehavior ; }, [enemy5AttackBehavior]);
React.useEffect(() => { enemy6MoveBehaviorRef.current = enemy6MoveBehavior ; }, [enemy6MoveBehavior]);
React.useEffect(() => { enemy6AttackBehaviorRef.current = enemy6AttackBehavior ; }, [enemy6AttackBehavior]);
React.useEffect(() => { enemy7MoveBehaviorRef.current = enemy7MoveBehavior ; }, [enemy7MoveBehavior]);
React.useEffect(() => { enemy7AttackBehaviorRef.current = enemy7AttackBehavior ; }, [enemy7AttackBehavior]);
React.useEffect(() => { enemy8MoveBehaviorRef.current = enemy8MoveBehavior ; }, [enemy8MoveBehavior]);
React.useEffect(() => { enemy8AttackBehaviorRef.current = enemy8AttackBehavior ; }, [enemy8AttackBehavior]);
React.useEffect(() => { enemy1AttackingRef.current = enemy1Attacking ; }, [enemy1Attacking]);
React.useEffect(() => { enemy2AttackingRef.current = enemy2Attacking ; }, [enemy2Attacking]);
React.useEffect(() => { enemy3AttackingRef.current = enemy3Attacking ; }, [enemy3Attacking]);
React.useEffect(() => { enemy4AttackingRef.current = enemy4Attacking ; }, [enemy4Attacking]);
React.useEffect(() => { enemy5AttackingRef.current = enemy5Attacking ; }, [enemy5Attacking]);
React.useEffect(() => { enemy6AttackingRef.current = enemy6Attacking ; }, [enemy6Attacking]);
React.useEffect(() => { enemy7AttackingRef.current = enemy7Attacking ; }, [enemy7Attacking]);
React.useEffect(() => { enemy8AttackingRef.current = enemy8Attacking ; }, [enemy8Attacking]);
React.useEffect(() => { enemy1SleepingRef.current = enemy1Sleeping ; }, [enemy1Sleeping]);
React.useEffect(() => { enemy2SleepingRef.current = enemy2Sleeping ; }, [enemy2Sleeping]);
React.useEffect(() => { enemy3SleepingRef.current = enemy3Sleeping ; }, [enemy3Sleeping]);
React.useEffect(() => { enemy4SleepingRef.current = enemy4Sleeping ; }, [enemy4Sleeping]);
React.useEffect(() => { enemy5SleepingRef.current = enemy5Sleeping ; }, [enemy5Sleeping]);
React.useEffect(() => { enemy6SleepingRef.current = enemy6Sleeping ; }, [enemy6Sleeping]);
React.useEffect(() => { enemy7SleepingRef.current = enemy7Sleeping ; }, [enemy7Sleeping]);
React.useEffect(() => { enemy8SleepingRef.current = enemy8Sleeping ; }, [enemy8Sleeping]);
React.useEffect(() => { DMGVfx0Ref.current = DMGVfx0 ; }, [DMGVfx0]);
React.useEffect(() => { DMGVfx1Ref.current = DMGVfx1 ; }, [DMGVfx1]);
React.useEffect(() => { DMGVfx2Ref.current = DMGVfx2 ; }, [DMGVfx2]);
React.useEffect(() => { DMGVfx3Ref.current = DMGVfx3 ; }, [DMGVfx3]);
React.useEffect(() => { DMGVfx4Ref.current = DMGVfx4 ; }, [DMGVfx4]);
React.useEffect(() => { DMGVfx5Ref.current = DMGVfx5 ; }, [DMGVfx5]);
React.useEffect(() => { DMGVfx6Ref.current = DMGVfx6 ; }, [DMGVfx6]);
React.useEffect(() => { DMGVfx7Ref.current = DMGVfx7 ; }, [DMGVfx7]);
React.useEffect(() => { DMGVfx8Ref.current = DMGVfx8 ; }, [DMGVfx8]);
React.useEffect(() => { textArrayRef.current = textArray ; }, [textArray]);
React.useEffect(() => { space1Ref.current = space1 ; }, [space1]);
React.useEffect(() => { space2Ref.current = space2 ; }, [space2]);
React.useEffect(() => { space3Ref.current = space3 ; }, [space3]);
React.useEffect(() => { space4Ref.current = space4 ; }, [space4]);
React.useEffect(() => { space5Ref.current = space5 ; }, [space5]);
React.useEffect(() => { space6Ref.current = space6 ; }, [space6]);
React.useEffect(() => { space7Ref.current = space7 ; }, [space7]);
React.useEffect(() => { space8Ref.current = space8 ; }, [space8]);
React.useEffect(() => { space9Ref.current = space9 ; }, [space9]);
React.useEffect(() => { space10Ref.current = space10 ; }, [space10]);
React.useEffect(() => { space11Ref.current = space11 ; }, [space11]);
React.useEffect(() => { space12Ref.current = space12 ; }, [space12]);
React.useEffect(() => { space13Ref.current = space13 ; }, [space13]);
React.useEffect(() => { space14Ref.current = space14 ; }, [space14]);
React.useEffect(() => { space15Ref.current = space15 ; }, [space15]);
React.useEffect(() => { space16Ref.current = space16 ; }, [space16]);
React.useEffect(() => { space17Ref.current = space17 ; }, [space17]);
React.useEffect(() => { space18Ref.current = space18 ; }, [space18]);
React.useEffect(() => { space19Ref.current = space19 ; }, [space19]);
React.useEffect(() => { space20Ref.current = space20 ; }, [space20]);
React.useEffect(() => { space21Ref.current = space21 ; }, [space21]);
React.useEffect(() => { space22Ref.current = space22 ; }, [space22]);
React.useEffect(() => { space23Ref.current = space23 ; }, [space23]);
React.useEffect(() => { space24Ref.current = space24 ; }, [space24]);
React.useEffect(() => { space25Ref.current = space25 ; }, [space25]);
React.useEffect(() => { space26Ref.current = space26 ; }, [space26]);
React.useEffect(() => { space27Ref.current = space27 ; }, [space27]);
React.useEffect(() => { space28Ref.current = space28 ; }, [space28]);
React.useEffect(() => { space29Ref.current = space29 ; }, [space29]);
React.useEffect(() => { space30Ref.current = space30 ; }, [space30]);
React.useEffect(() => { space31Ref.current = space31 ; }, [space31]);
React.useEffect(() => { space32Ref.current = space32 ; }, [space32]);
React.useEffect(() => { space33Ref.current = space33 ; }, [space33]);
React.useEffect(() => { space34Ref.current = space34 ; }, [space34]);
React.useEffect(() => { space35Ref.current = space35 ; }, [space35]);
React.useEffect(() => { space36Ref.current = space36 ; }, [space36]);
React.useEffect(() => { space37Ref.current = space37 ; }, [space37]);
React.useEffect(() => { space38Ref.current = space38 ; }, [space38]);
React.useEffect(() => { space39Ref.current = space39 ; }, [space39]);
React.useEffect(() => { space40Ref.current = space40 ; }, [space40]);
React.useEffect(() => { space41Ref.current = space41 ; }, [space41]);
React.useEffect(() => { space42Ref.current = space42 ; }, [space42]);
React.useEffect(() => { space43Ref.current = space43 ; }, [space43]);
React.useEffect(() => { space44Ref.current = space44 ; }, [space44]);
React.useEffect(() => { space45Ref.current = space45 ; }, [space45]);
React.useEffect(() => { space46Ref.current = space46 ; }, [space46]);
React.useEffect(() => { space47Ref.current = space47 ; }, [space47]);
React.useEffect(() => { space48Ref.current = space48 ; }, [space48]);
React.useEffect(() => { space49Ref.current = space49 ; }, [space49]);
React.useEffect(() => { space50Ref.current = space50 ; }, [space50]);
React.useEffect(() => { selectedPortraitRef.current = selectedPortrait ; }, [selectedPortrait])
React.useEffect(() => { rockThrowRef.current = rockThrow ; }, [rockThrow]);
React.useEffect(() => { projectilePosRef.current = projectilePos ; }, [projectilePos]);
React.useEffect(() => { 
  setPlayerHP(basePlayerHP);
  setMaxPlayerHP(baseMaxPlayerHP);
  setPlayerAttack(basePlayerAttack);
  itemEquipped === 'Special Band' ? setPlayerSpecialAttack(Math.round(basePlayerSpecialAttack * 1.3)) : setPlayerSpecialAttack(basePlayerSpecialAttack);
  setPlayerDefense(basePlayerDefense);
  itemEquipped === 'Zinc Band' ? setPlayerSpecialDefense(Math.round(basePlayerSpecialDefense * 1.3)) : setPlayerSpecialDefense(basePlayerSpecialDefense);
  setPlayerSpeed(basePlayerSpeed);
  }, [basePlayerHP, baseMaxPlayerHP, basePlayerSpecialAttack, basePlayerAttack, basePlayerDefense, basePlayerSpecialDefense, basePlayerSpeed, itemEquipped])
React.useEffect(() => {
  if (itemEquipped === 'Warp Scarf'){
    const key = randInt(0, 10);
    if (key === 9){
      const floorPositions = [];
      for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== playerPos.x || y !== playerPos.y) && (itemTiles.some(itemTiles => itemTiles.x === x && itemTiles.y === y) === false) && (currencyTiles.some(currencyTiles => currencyTiles.x === x && currencyTiles.y === y) === false) && (enemy1 ? (enemy1Pos.x !== x || enemy1Pos.y !== y) : true) && (enemy2 ? (enemy2Pos.x !== x || enemy2Pos.y !== y) : true) && (enemy3 ? (enemy3Pos.x !== x || enemy3Pos.y !== y) : true) && (enemy4 ? (enemy4Pos.x !== x || enemy4Pos.y !== y) : true) && (enemy5 ? (enemy5Pos.x !== x || enemy5Pos.y !== y) : true) && (enemy6 ? (enemy6Pos.x !== x || enemy6Pos.y !== y) : true) && (enemy7 ? (enemy7Pos.x !== x || enemy7Pos.y !== y) : true) && (enemy8 ? (enemy8Pos.x !== x || enemy8Pos.y !== y) : true)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setPlayerPos({ x: newPos.x, y: newPos.y });
      cameraTargetRef.current = { x: newPos.x, y: newPos.y };
      startCameraLoop();
      addLogMessage('Vaporeon warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
  }

}, [playerPos]);

//React effect to constantly compute selectedItemSprite

React.useEffect(() =>
{
  if (itemSelected !== null && inventory[itemOrder - 1] !== null && inventory[itemOrder - 1] !== undefined)
  {
  setSelectedItemSprite(inventory[itemOrder - 1].sprite);
  }
}, [itemOrder, inventory, showToolbox]);


//Function declarations start here
function getWallTileType(x, y, dungeon) {
    // Get neighbors (W = wall)
    let up = y > 0 && dungeon[y-1][x] === 'W';
    let down = y < dungeon.length-1 && dungeon[y+1][x] === 'W';
    let left = x > 0 && dungeon[y][x-1] === 'W';
    let right = x < dungeon[0].length-1 && dungeon[y][x+1] === 'W';

    // Corners (optional, for fancy tilesets)
    let upLeft = y > 0 && x > 0 && dungeon[y-1][x-1] === 'W';
    let upRight = y > 0 && x < dungeon[0].length-1 && dungeon[y-1][x+1] === 'W';
    let downLeft = y < dungeon.length-1 && x > 0 && dungeon[y+1][x-1] === 'W';
    let downRight = y < dungeon.length-1 && x < dungeon[0].length-1 && dungeon[y+1][x+1] === 'W';
if (!up && !left && right && down) return 'wall_corner_topleft';
    if (!up && !right && left && down) return 'wall_corner_topright';
    if (!down && !left && right && up) return 'wall_corner_bottomleft';
    if (!down && !right && left && up) return 'wall_corner_bottomright';
    if (up && down && !left && !right) return 'wall_vertical';
    if (!up && !down && left && right) return 'wall_horizontal';
    if (up && !down && left && right) return 'wall_horizontal_topcap';
    if (!up && down && left && right) return 'wall_horizontal_bottomcap';
    if (up && down && !left && right) return 'wall_left_vertical'
    if (up && down && !right && left) return 'wall_right_vertical'
    if (!up && down && !right && !left) return 'wall_isolated_down'
    if (up && !down && !right && !left) return 'wall_isolated_up'
    if (!up && !down && right && !left) return 'wall_isolated_right'
    if (!up && !down && !right && left) return 'wall_isolated_left'
    if (up && down && left && right && !upLeft) return 'wall_inner_corner_topleft'
    if (up && down && left && right && !upRight) return 'wall_inner_corner_topright'
    if (up && down && left && right && !downLeft) return 'wall_inner_corner_bottomleft'
    if (up && down && left && right && !downRight) return 'wall_inner_corner_bottomright'

    // ...continue for other combinations...
   else return 'wall_full'; // fallback
}
const wallSpriteMap = {
  wall_corner_topleft: cornerSpriteTopLeft,
  wall_corner_topright: cornerSpriteTopRight,
  wall_corner_bottomleft: cornerSpriteBottomLeft,
  wall_corner_bottomright: cornerSpriteBottomRight,
  wall_vertical: wallSpriteLeft,
  wall_left_vertical: wallSpriteLeft,
  wall_right_vertical: wallSpriteRight,
  wall_horizontal: wallSpriteUp,
  wall_horizontal_topcap: wallSpriteDown,
  wall_horizontal_bottomcap: wallSpriteUp,
  wall_full: enclosedWallSprite4, //placeholder
  wall_isolated_down: wallSpriteLeft,
  wall_isolated_up: wallSpriteLeft,
  wall_isolated_right: wallSpriteUp,
  wall_isolated_left: wallSpriteUp,
  wall_inner_corner_topleft: innerCornerTopLeft,
  wall_inner_corner_topright: innerCornerTopRight,
  wall_inner_corner_bottomleft: innerCornerBottomLeft,
  wall_inner_corner_bottomright: innerCornerBottomRight
  // ...etc...
};

// Throttling function
function throttle(func, delay) {
  let lastCall =  0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

function updateKeyState(key, value) {
  setKeyState(prev => ({ ...prev, [key]: value }));
}

//const throttledUpdateKeyState = throttle(updateKeyState, 200); // 200ms throttle

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function triggerWalkCooldown() {
  // Clear any existing cooldown
  if (walkCooldownRef.current) clearTimeout(walkCooldownRef.current);
  walkCooldownRef.current = setTimeout(() => {
    setIsWalking(false);
    walkCooldownRef.current = null;
  }, 1500); // 1500ms for 5 frames at 300ms/frame
}
let logCounter = 0;
function addLogMessage(msg) {
  const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
  setActionLog(logs => [...logs, { msg, id }]);
  setTimeout(() => {
    setActionLog(logs => logs.filter(entry => entry.id !== id));
  }, 10000);
}
function makeRoom(x, y, w, h) {
  return { x, y, w, h, center: { x: Math.floor(x + w / 2), y: Math.floor(y + h / 2) } };
}
function roomsOverlap(a, b) {
  const overlapBuffer = -2;
  return (
    Math.abs(a.x + overlapBuffer) < Math.abs(b.x + b.w) &&
    Math.abs(a.x + a.w) > Math.abs(b.x + overlapBuffer) &&
    Math.abs(a.y + overlapBuffer) < Math.abs(b.y + b.h) &&
    Math.abs(a.y + a.h) > Math.abs(b.y + overlapBuffer)
  );
}
function carveRoom(dungeon, room) {
  for (let y = room.y; y < room.y + room.h; y++) {
    for (let x = room.x; x < room.x + room.w; x++) {
      dungeon[y][x] = 'F'; // Mark as floor (will be replaced with random floor tile later)
    }
  }
}
function carveCorridor(dungeon, from, to) {
  let x = from.x, y = from.y;
  while (x !== to.x) {
    dungeon[y][x] = 'F';
    x += x < to.x ? 1 : -1;
  }
  while (y !== to.y) {
    dungeon[y][x] = 'F';
    y += y < to.y ? 1 : -1;
  }
}
function generateCurrencyTiles(dungeon, minAmount, maxAmount, currencyCount = 5) {
  let cLocations = [];
  let height = dungeon.length;
  let width = dungeon[0].length;

  // Collect all floor tile positions
  let floorPositions = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && dungeon[y][x] !== playerPos.x && dungeon[y][x] !== playerPos.y && !enemyHereTilesRef.current.find(tile => tile.x === x && tile.y === y && !itemTilesRef.current.find(tile => tile.x === x && tile.y === y))){
        floorPositions.push({ x, y });
      }
    }
  }

  // Shuffle and pick currencyCount locations
  for (let i = 0; i < currencyCount && floorPositions.length > 0; i++) {
    floorPositions.splice(floorPositions.findIndex(pos => pos.x === playerPos.x && pos.y === playerPos.y), 1); // Ensure player position is not included
    floorPositions = floorPositions.filter(pos => !enemyHereTilesRef.current.find(tile => tile.x === pos.x && tile.y === pos.y)); // Ensure enemy positions are not included
    floorPositions = floorPositions.filter(pos => !itemTilesRef.current.find(tile => tile.x === pos.x && tile.y === pos.y)); // Ensure item positions are not included
    let idx = randInt(0, floorPositions.length);
    let loc = floorPositions.splice(idx, 1)[0];
    cLocations.push({
      ...loc,
      amount: randInt(minAmount, maxAmount + 1)
    });
  }

  return cLocations;
}
function generateSingleItem(position, item) {
  let iLocations = [];
  const itemNames = Object.keys(ITEM_DEFS);
  const itemSprites = Object.values(ITEM_DEFS).map(def => def.sprite);
  const itemName = item.name;
  const itemSprite = itemSprites[1];
  iLocations.push({
      ...position,
      itemName,
      sprite: ITEM_DEFS[itemName].sprite
    });
    return iLocations;
}
function beginItemTilesIndex(itemAdded) {
  setItemTilesIndex(itemAdded);
}

function playSound(soundFile) {
  if (soundFile instanceof HTMLAudioElement) {
    soundFile.currentTime = 0; // Restart from beginning
    soundFile.play().catch((err) => {
      console.error("Audio play failed:", err);
    });
  } else {
    console.error("Invalid sound file passed to playSound()");
  }
}

function updateItemTilesIndex(newIndex) {
  setItemTilesIndex(prev => [...prev, newIndex]);
  return newIndex;
}
React.useEffect(() => {
  setItemTilesIndexRef(itemTilesIndex);
}, [itemTilesIndex]);
function generateItemTiles(dungeon, minCount = 5, maxCount = 10, itemCount = randInt(minCount, maxCount)) {
  let iLocations = []
  let height = dungeon.length;
  let width = dungeon[0].length;
  
  let floorPositions = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && !enemyHereTilesRef.current.find(tile => tile.x === x && tile.y === y) && !currencyTilesRef.current.find(tile => tile.x === x && tile.y === y) && dungeon[y][x] !== playerPos.x && dungeon[y][x] !== playerPos.y) {
        floorPositions.push({ x, y });
      }
    }
  }
  const itemNamesTier1 = Object.keys(ITEM_DEFS).filter(name => ITEM_DEFS[name].tier === 1);
  const itemNamesTier2 = Object.keys(ITEM_DEFS).filter(name => ITEM_DEFS[name].tier === 2);
  const itemNamesTier3 = Object.keys(ITEM_DEFS).filter(name => ITEM_DEFS[name].tier === 3);
  const itemNamesTier4 = Object.keys(ITEM_DEFS).filter(name => ITEM_DEFS[name].tier === 4);

  for (let i = 0; i < itemCount && floorPositions.length > 0; i++) {
    floorPositions.splice(floorPositions.findIndex(pos => pos.x === playerPos.x && pos.y === playerPos.y), 1); // Ensure player position is not included
    floorPositions = floorPositions.filter(pos => !enemyHereTilesRef.current.find(tile => tile.x === pos.x && tile.y === pos.y)); // Ensure enemy positions are not included
    floorPositions = floorPositions.filter(pos => !currencyTilesRef.current.find(tile => tile.x === pos.x && tile.y === pos.y)); // Ensure currency positions are not included
    let idx = randInt(0, floorPositions.length);
    let loc = floorPositions.splice(idx, 1)[0];
    let tierchosen = randInt(1, 100);
    let itemName;
    if (tierchosen <= 50 && itemNamesTier1.length > 0) {
      itemName = itemNamesTier1[randInt(0, itemNamesTier1.length)];
    } else if (tierchosen <= 75 && itemNamesTier2.length > 0) {
      itemName = itemNamesTier2[randInt(0, itemNamesTier2.length)];
    } else if (tierchosen <= 90 && itemNamesTier3.length > 0) {
      itemName = itemNamesTier3[randInt(0, itemNamesTier3.length)];
    }
      else if (tierchosen <= 100 && itemNamesTier4.length > 0) {
      itemName = itemNamesTier4[randInt(0, itemNamesTier4.length)];
    }
    iLocations.push({
      ...loc,
      itemName,
      sprite: ITEM_DEFS[itemName].sprite
    });
  }
  return iLocations;
}
function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", cx, cy,
    "L", start.x, start.y,
    "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
    "Z"
  ].join(" ");
}
function polarToCartesian(cx, cy, r, angle) {
  const rad = (angle - 90) * Math.PI / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}
function dealDMG(DMG, target, targetWillDie) {
  if (target === 'player') {
    setPlayerHP(prev => Math.max(prev - DMG, 0));
    setDMGVfx0({DMG: DMG, Active: true, X: playerPosRef.current.x, Y: playerPosRef.current.y - 1});
  }
  if (target === 'enemy1') {
    setEnemy1HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx1({DMG: DMG, Active: true, X: enemy1PosRef.current.x, Y: enemy1PosRef.current.y - 1});
    console.log('Enemy1HP:', enemy1HP);
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType1].name + ' fainted!');
      setEnemy1Pos({x: 2, y: 2});
    }
  }
  if (target === 'enemy2') {
    setEnemy2HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx2({DMG: DMG, Active: true, X: enemy2PosRef.current.x, Y: enemy2PosRef.current.y - 1});
    console.log('Enemy2HP:', DMGVfx2Ref.current);
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType2].name + ' fainted!');
      setEnemy2Pos({x: 2, y: 2});
    }
  }
  if (target === 'enemy3') {
    setEnemy3HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx3({DMG: DMG, Active: true, X: enemy3PosRef.current.x, Y: enemy3PosRef.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType3].name + ' fainted!');
      setEnemy3Pos({x: 2, y: 2});
    }
  }
  if (target === 'enemy4') {
    setEnemy4HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx4({DMG: DMG, Active: true, X: enemy4PosRef.current.x, Y: enemy4PosRef.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType4].name + ' fainted!');
      setEnemy4Pos({x: 2, y: 2});
    }
  }
  if (target === 'enemy5') {
    setEnemy5HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx5({DMG: DMG, Active: true, X: enemy5PosRef.current.x, Y: enemy5PosRef.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType5].name + ' fainted!');
      setEnemy5Pos({x: 2, y: 2});
    }
  }
  if (target === 'enemy6') {
    setEnemy6HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx6({DMG: DMG, Active: true, X: enemy6PosRef.current.x, Y: enemy6PosRef.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType6].name + ' fainted!');
      setEnemy6Pos({x: 2, y: 2});
    }
  }
  if (target === 'enemy7') {
    setEnemy7HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx7({DMG: DMG, Active: true, X: enemy7PosRef.current.x, Y: enemy7PosRef.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType7].name + ' fainted!');
      setEnemy7Pos({x: 2, y: 2});
    }
  }
  if (target === 'enemy8') {
    setEnemy8HP(prev => Math.max(prev - DMG, 0));
    setDMGVfx8({DMG: DMG, Active: true, X: enemy8PosRef.current.x, Y: enemy8PosRef.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemyType8].name + ' fainted!');
      setEnemy8Pos({x: 2, y: 2});
    }
  }
  setTimeout(() => {
      setDMGVfx0(prev => ({ ...prev, Active: false }));
      setDMGVfx1(prev => ({ ...prev, Active: false }));
      setDMGVfx2(prev => ({ ...prev, Active: false }));
      setDMGVfx3(prev => ({ ...prev, Active: false }));
      setDMGVfx4(prev => ({ ...prev, Active: false }));
      setDMGVfx5(prev => ({ ...prev, Active: false }));
      setDMGVfx6(prev => ({ ...prev, Active: false }));
      setDMGVfx7(prev => ({ ...prev, Active: false }));
      setDMGVfx8(prev => ({ ...prev, Active: false }));
    }, 1400); // DMG numbers last for 1400ms
}
function enemyUseMove(move, key){
  key === 1 ? setEnemy1AttackBehavior(true) : key === 2 ? setEnemy2AttackBehavior(true) : key === 3 ? setEnemy3AttackBehavior(true) : key === 4 ? setEnemy4AttackBehavior(true) : key === 5 ? setEnemy5AttackBehavior(true) : key === 6 ? setEnemy6AttackBehavior(true) : key === 7 ? setEnemy7AttackBehavior(true) : key === 8 ? setEnemy8AttackBehavior(true) : null;
  setTimeout(() => {
  if (move.name === 'Rock Throw'){
    setRockThrow(true);
    setProjectilePos(prev => ({ ...prev, [key]: { x: 0, y: 0 } })); // Reset projectile position at start
    // Set transform based on current player position at the moment of casting
    const transformValue = playerPosRef.current.x < width/3 ? 'translatex(80%) translateY(-615%)' : 'translatex(65%) translateY(-615%)';
    setRockThrowTransform(transformValue);
    key === 1 ? addLogMessage(ENEMY_DEFS[enemyType1].name + ' used Rock Throw!') : key === 2 ? addLogMessage(ENEMY_DEFS[enemyType2].name + ' used Rock Throw!') : key === 3 ? addLogMessage(ENEMY_DEFS[enemyType3].name + ' used Rock Throw!') : key === 4 ? addLogMessage(ENEMY_DEFS[enemyType4].name + ' used Rock Throw!') : key === 5 ? addLogMessage(ENEMY_DEFS[enemyType5].name + ' used Rock Throw!') : key === 6 ? addLogMessage(ENEMY_DEFS[enemyType6].name + ' used Rock Throw!') : key === 7 ? addLogMessage(ENEMY_DEFS[enemyType7].name + ' used Rock Throw!') : key === 8 ? addLogMessage(ENEMY_DEFS[enemyType8].name + ' used Rock Throw!') : null;
    console.log(`Enemy ${key} used Rock Throw!`);
  }
  if (key === 1){
    if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y){
      setEnemy1LastDirection('right');
    } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y){
      setEnemy1LastDirection('left');
    } else if (enemy1PosRef.current.y < playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x){
      setEnemy1LastDirection('down');
    } else if (enemy1PosRef.current.y > playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x){
      setEnemy1LastDirection('up');
    }
      else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y){
      setEnemy1LastDirection('downRight');
    }
      else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y){
      setEnemy1LastDirection('downLeft');
    }
      else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y){
      setEnemy1LastDirection('upRight');
    }
      else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y){
      setEnemy1LastDirection('upLeft');
    }
  }
  else if (key === 2){
    if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y){
      setEnemy2LastDirection('right');
    } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y){
      setEnemy2LastDirection('left');
    } else if (enemy2PosRef.current.y < playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x){
      setEnemy2LastDirection('down');
    } else if (enemy2PosRef.current.y > playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x){
      setEnemy2LastDirection('up');
    }
      else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y){
      setEnemy2LastDirection('downRight');
    }
      else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y){
      setEnemy2LastDirection('downLeft');
    }
      else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y){
      setEnemy2LastDirection('upRight');
    }
      else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y){
      setEnemy2LastDirection('upLeft');
    }
  }
  else if (key === 3){
    if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y){
      setEnemy3LastDirection('right');
    } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y){
      setEnemy3LastDirection('left');
    } else if (enemy3PosRef.current.y < playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x){
      setEnemy3LastDirection('down');
    } else if (enemy3PosRef.current.y > playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x){
      setEnemy3LastDirection('up');
    }
      else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y){
      setEnemy3LastDirection('downRight');
    }
      else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y){
      setEnemy3LastDirection('downLeft');
    }
      else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y){
      setEnemy3LastDirection('upRight');
    }
      else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y){
      setEnemy3LastDirection('upLeft');
    }
  }
  else if (key === 4){
    if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y){
      setEnemy4LastDirection('right');
    } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y){
      setEnemy4LastDirection('left');
    } else if (enemy4PosRef.current.y < playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x){
      setEnemy4LastDirection('down');
    } else if (enemy4PosRef.current.y > playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x){
      setEnemy4LastDirection('up');
    }
      else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y){
      setEnemy4LastDirection('downRight');
    }
      else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y){
      setEnemy4LastDirection('downLeft');
    }
      else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y){
      setEnemy4LastDirection('upRight');
    }
      else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y){
      setEnemy4LastDirection('upLeft');
    }
  }
  else if (key === 5){
    if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y){
      setEnemy5LastDirection('right');
    } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y){
      setEnemy5LastDirection('left');
    } else if (enemy5PosRef.current.y < playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x){
      setEnemy5LastDirection('down');
    } else if (enemy5PosRef.current.y > playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x){
      setEnemy5LastDirection('up');
    }
      else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y){
      setEnemy5LastDirection('downRight');
    }
      else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y){
      setEnemy5LastDirection('downLeft');
    }
      else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y){
      setEnemy5LastDirection('upRight');
    }
      else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y){
      setEnemy5LastDirection('upLeft');
    }
  }
  else if (key === 6){
    if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y){
      setEnemy6LastDirection('right');
    } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y){
      setEnemy6LastDirection('left');
    } else if (enemy6PosRef.current.y < playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x){
      setEnemy6LastDirection('down');
    } else if (enemy6PosRef.current.y > playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x){
      setEnemy6LastDirection('up');
    }
      else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y){
      setEnemy6LastDirection('downRight');
    }
      else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y){
      setEnemy6LastDirection('downLeft');
    }
      else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y){
      setEnemy6LastDirection('upRight');
    }
      else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y){
      setEnemy6LastDirection('upLeft');
    }
  }
  else if (key === 7){
    if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y){
      setEnemy7LastDirection('right');
    } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y){
      setEnemy7LastDirection('left');
    } else if (enemy7PosRef.current.y < playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x){
      setEnemy7LastDirection('down');
    } else if (enemy7PosRef.current.y > playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x){
      setEnemy7LastDirection('up');
    }
      else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y){
      setEnemy7LastDirection('downRight');
    }
      else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y){
      setEnemy7LastDirection('downLeft');
    }
      else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y){
      setEnemy7LastDirection('upRight');
    }
      else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y){
      setEnemy7LastDirection('upLeft');
    }
  }
  else if (key === 8){
    if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y){
      setEnemy8LastDirection('right');
    } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y){
      setEnemy8LastDirection('left');
    } else if (enemy8PosRef.current.y < playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x){
      setEnemy8LastDirection('down');
    } else if (enemy8PosRef.current.y > playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x){
      setEnemy8LastDirection('up');
    }
      else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y){
      setEnemy8LastDirection('downRight');
    }
      else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y){
      setEnemy8LastDirection('downLeft');
    }
      else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y){
      setEnemy8LastDirection('upRight');
    }
      else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y){
      setEnemy8LastDirection('upLeft');
    }
  }
  }, turnIntervalMs);
  setTimeout(() => {
    key === 1 ? setEnemy1AttackBehavior(false) : key === 2 ? setEnemy2AttackBehavior(false) : key === 3 ? setEnemy3AttackBehavior(false) : key === 4 ? setEnemy4AttackBehavior(false) : key === 5 ? setEnemy5AttackBehavior(false) : key === 6 ? setEnemy6AttackBehavior(false) : key === 7 ? setEnemy7AttackBehavior(false) : key === 8 ? setEnemy8AttackBehavior(false) : null;
    key === 1 ? setEnemy1Attacking(false) : key === 2 ? setEnemy2Attacking(false) : key === 3 ? setEnemy3Attacking(false) : key === 4 ? setEnemy4Attacking(false) : key === 5 ? setEnemy5Attacking(false) : key === 6 ? setEnemy6Attacking(false) : key === 7 ? setEnemy7Attacking(false) : key === 8 ? setEnemy8Attacking(false) : null;
    if (move.name === 'Rock Throw'){
      setRockThrow(false);
      setProjectilePos(prev => ({ ...prev, [key]: { x: 0, y: 0 } })); // Reset projectile position at end
    }
  }, 4600 + turnIntervalMs); // Duration of attack animation (Slighty longer than animation frame duration to ensure it completes)
}
React.useEffect(() => {
  if (rockThrowRef.current === false) {
    return;
  }
  
  let animationFrameId1 = null;
  let animationFrameId2 = null;
  let animationFrameId3 = null;
  let animationFrameId4 = null;
  let animationFrameId5 = null;
  let animationFrameId6 = null;
  let animationFrameId7 = null;
  let animationFrameId8 = null;
  
  function updateProjectilePosition1() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy1PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy1PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[1].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[1].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[1].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[1].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 1: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        1: {
        x: prev[1].x + dx,
        y: prev[1].y + dy
        }
      }));
    }
    
    animationFrameId1 = requestAnimationFrame(updateProjectilePosition1);
  }

  function updateProjectilePosition2() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy2PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy2PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[2].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[2].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[2].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[2].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 2: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        2: {
        x: prev[2].x + dx,
        y: prev[2].y + dy
        }
      }));
    }
    
    animationFrameId2 = requestAnimationFrame(updateProjectilePosition2);
  }

  function updateProjectilePosition3() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy3PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy3PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[3].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[3].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[3].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[3].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 3: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        3: {
        x: prev[3].x + dx,
        y: prev[3].y + dy
        }
      }));
    }
    
    animationFrameId3 = requestAnimationFrame(updateProjectilePosition3);
  }

  function updateProjectilePosition4() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy4PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy4PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[4].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[4].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[4].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[4].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 4: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        4: {
        x: prev[4].x + dx,
        y: prev[4].y + dy
        }
      }));
    }
    
    animationFrameId4 = requestAnimationFrame(updateProjectilePosition4);
  }

  function updateProjectilePosition5() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy5PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy5PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[5].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[5].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[5].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[5].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 5: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        5: {
        x: prev[5].x + dx,
        y: prev[5].y + dy
        }
      }));
    }
    
    animationFrameId5 = requestAnimationFrame(updateProjectilePosition5);
  }

  function updateProjectilePosition6() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy6PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy6PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[6].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[6].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[6].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[6].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 6: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        6: {
        x: prev[6].x + dx,
        y: prev[6].y + dy
        }
      }));
    }
    
    animationFrameId6 = requestAnimationFrame(updateProjectilePosition6);
  }

  function updateProjectilePosition7() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy7PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy7PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[7].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[7].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[7].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[7].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 7: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        7: {
        x: prev[7].x + dx,
        y: prev[7].y + dy
        }
      }));
    }
    
    animationFrameId7 = requestAnimationFrame(updateProjectilePosition7);
  }

  function updateProjectilePosition8() {
    if (rockThrowRef.current === false) return;
    
    // Update position towards target
    const targetX = (enemy8PosRef.current.x - playerPosRef.current.x);
    const targetY = (enemy8PosRef.current.y - playerPosRef.current.y);
    
    // Calculate position-based correction to counteract camera shift artifacts
    const distancex = playerPosRef.current.x / (width) - 0.5;
    const distancey = playerPosRef.current.y / (height) - 0.5;
    
    // Apply directional offset correction
    // When player is off-center, projectiles shift in the opposite direction of player position
    // So we counteract by adding a correction proportional to how far off-center the player is
    const correctionX = distancex * 0.45; // Adjust this value to tune X-axis correction (0.45 recommended)
    const correctionY = distancey * 0.5; // Adjust this value to tune Y-axis correction (0.25 recommended)
    const adjustedTargetX = targetX + correctionX;
    const adjustedTargetY = targetY + correctionY;
    
    if (Math.abs(projectilePosRef.current[8].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[8].y) > Math.abs(adjustedTargetY) && targetY !== 0){ 
      return;
    }
    const dt = 0.04; // Approx. 60 FPS
    const dx = adjustedTargetX * dt/3; // So it takes 3 seconds to reach target
    const dy = adjustedTargetY * dt/3;
    if (Math.abs(projectilePosRef.current[8].x) > Math.abs(adjustedTargetX) && targetX !== 0 || Math.abs(projectilePosRef.current[8].y) > Math.abs(adjustedTargetY) && targetY !== 0) {
      //Reached target
      setProjectilePos(prev => ({ ...prev, 8: { x: adjustedTargetX, y: adjustedTargetY } }));
      return;
    } 
    else {
      setProjectilePos(prev => ({
        ...prev,
        8: {
        x: prev[8].x + dx,
        y: prev[8].y + dy
        }
      }));
    }
    
    animationFrameId8 = requestAnimationFrame(updateProjectilePosition8);
  }

  if (enemy1AttackBehaviorRef.current === true){
  animationFrameId1 = requestAnimationFrame(updateProjectilePosition1);
  }
  if (enemy2AttackBehaviorRef.current === true){
  animationFrameId2 = requestAnimationFrame(updateProjectilePosition2);
  }
  if (enemy3AttackBehaviorRef.current === true){
  animationFrameId3 = requestAnimationFrame(updateProjectilePosition3);
  }
  if (enemy4AttackBehaviorRef.current === true){
  animationFrameId4 = requestAnimationFrame(updateProjectilePosition4);
  }
  if (enemy5AttackBehaviorRef.current === true){
  animationFrameId5 = requestAnimationFrame(updateProjectilePosition5);
  }
  if (enemy6AttackBehaviorRef.current === true){
  animationFrameId6 = requestAnimationFrame(updateProjectilePosition6);
  }
  if (enemy7AttackBehaviorRef.current === true){
  animationFrameId7 = requestAnimationFrame(updateProjectilePosition7);
  }
  if (enemy8AttackBehaviorRef.current === true){
  animationFrameId8 = requestAnimationFrame(updateProjectilePosition8);
  }

  return () => {
    if (animationFrameId1 !== null) {
      cancelAnimationFrame(animationFrameId1);
    }
    if (animationFrameId2 !== null) {
      cancelAnimationFrame(animationFrameId2);
    }
    if (animationFrameId3 !== null) {
    cancelAnimationFrame(animationFrameId3);
    }
    if (animationFrameId4 !== null) {
    cancelAnimationFrame(animationFrameId4);
    }
    if (animationFrameId5 !== null) {
    cancelAnimationFrame(animationFrameId5);
    }
    if (animationFrameId6 !== null) {
    cancelAnimationFrame(animationFrameId6);
    }
    if (animationFrameId7 !== null) {
    cancelAnimationFrame(animationFrameId7);
    }
    if (animationFrameId8 !== null) {
    cancelAnimationFrame(animationFrameId8);
    }
  };
}, [rockThrow]);

function useMove(moveIndex) {
  const move = moves[moveIndex];
  let specialDefenceGain = 10; // TODO: Add an initial state variable for this
  let buffState = playerSpecialDefense/specialDefenceGain;
  if (!move) return;
  MOVE_DEFS[move.name].ppcurr = Math.max(0, MOVE_DEFS[move.name].ppcurr - 1);
  if (move.name === 'Acid Armor' && buffState === 1) {
    setPlayerSpecialDefense(prev => prev + specialDefenceGain);
    setIsBuffing(true);
    setTimeout(() => {
      confirmEnemyBehavior(1, 0);
      advanceTicks();
      depleteHungerAfterTicks(hungerTicks);
      setIsBuffing(false);
    }, 1650);
    addLogMessage('Vaporeon used Acid Armor! Special Defense increased!');
  } else if (move.name === 'Acid Armor' && buffState < 4) {
    setPlayerSpecialDefense(prev => prev + specialDefenceGain);
    setIsBuffing(true);
    setTimeout(() => {
      confirmEnemyBehavior(1, 0);
      advanceTicks();
      depleteHungerAfterTicks(hungerTicks);
      setIsBuffing(false);
    }, 1650);
    addLogMessage('Vaporeon used Acid Armor! Special Defense increased!');
  } else if (move.name === 'Acid Armor' && buffState >= 4) {
    setIsBuffing(true);
    setTimeout(() => {
      confirmEnemyBehavior(1, 0);
      advanceTicks();
      depleteHungerAfterTicks(hungerTicks);
      setIsBuffing(false);
    }, 1650);
    addLogMessage('Vaporeon used Acid Armor, but her Special Defense can\'t go any higher!');
    return;
  }

  if (move.name === 'Aqua Tail') {
    setIsWalking(false);
    const moveRange = 1
    const target = 'null'
    const targetWillDie = 'null';
    const DMG = 'null'
    setTimeout(() => setUsingAquaTail(true), 0);
    setTimeout(() => setUsingAquaTail(false), 1500); // Duration of Aqua Tail animation
    setTimeout(() => { 
    if (enemy1 && Math.abs(playerPosRef.current.x - enemy1PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy1PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy1' : 'enemy1';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy1HP - DMG <= 0 ? 'enemy1' : 'null';
    dealDMG(DMG, 'enemy1', targetWillDie === 'enemy1' ? true : false);
   }
    if (enemy2 && Math.abs(playerPosRef.current.x - enemy2PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy2PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy2' : 'enemy2';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy2HP - DMG <= 0 ? 'enemy2' : 'null';
    dealDMG(DMG, 'enemy2', targetWillDie === 'enemy2' ? true : false);
   }
    if (enemy3 && Math.abs(playerPosRef.current.x - enemy3PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy3PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy3' : 'enemy3';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy3HP - DMG <= 0 ? 'enemy3' : 'null';
    dealDMG(DMG, 'enemy3', targetWillDie === 'enemy3' ? true : false);
   }
    if (enemy4 && Math.abs(playerPosRef.current.x - enemy4PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy4PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy4' : 'enemy4';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy4HP - DMG <= 0 ? 'enemy4' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy4' ? true : false);
   }
   if (enemy5 && Math.abs(playerPosRef.current.x - enemy5PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy5PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy5' : 'enemy5';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy5HP - DMG <= 0 ? 'enemy5' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy5' ? true : false);
   }
   if (enemy6 && Math.abs(playerPosRef.current.x - enemy6PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy6PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy6' : 'enemy6';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy6HP - DMG <= 0 ? 'enemy6' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy6' ? true : false);
   }
   if (enemy7 && Math.abs(playerPosRef.current.x - enemy7PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy7PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy7' : 'enemy7';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy7HP - DMG <= 0 ? 'enemy7' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy7' ? true : false);
   }
   if (enemy8 && Math.abs(playerPosRef.current.x - enemy8PosRef.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemy8PosRef.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy8' : 'enemy8';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemy8HP - DMG <= 0 ? 'enemy8' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy8' ? true : false);
   }
    }, 1501)
    setTimeout(() => {
      /*
      if (targetWillDie === 'enemy1'){
        dealDMG(DMG, enemy1, true);
      }
      else if (target === 'enemy1'){
        dealDMG(DMG, enemy1, false);
      }
      else {
        dealDMG(DMG, enemy1, false);
      }
      if (targetWillDie === 'enemy2'){
        dealDMG(DMG, enemy2, true);
      }
      else if (target === 'enemy2'){
        dealDMG(DMG, enemy2, false)
      }
      if (targetWillDie === 'enemy3'){
        dealDMG(DMG, enemy3, true);
      }
      else if (target === 'enemy3'){
        dealDMG(DMG, enemy3, false)
      }
      if (targetWillDie === 'enemy4'){
        dealDMG(DMG, enemy4, true);
      }
      else if (target === 'enemy4'){
        dealDMG(DMG, enemy4, false)
      }
      if (targetWillDie === 'enemy5'){
        dealDMG(DMG, enemy5, true);
      }
      else if (target === 'enemy5'){
        dealDMG(DMG, enemy5, false)
      }
      if (targetWillDie === 'enemy6'){
        dealDMG(DMG, enemy6, true);
      }
      else if (target === 'enemy6'){
        dealDMG(DMG, enemy6, false)
      }
      if (targetWillDie === 'enemy7'){
        dealDMG(DMG, enemy7, true);
      }
      else if (target === 'enemy7'){
        dealDMG(DMG, enemy7, false)
      }
      if (targetWillDie === 'enemy8'){
        dealDMG(DMG, enemy8, true);
      }
      else if (target === 'enemy8'){
        dealDMG(DMG, enemy8, false)
      }
      */
      targetWillDie !== 'enemy1' ? confirmEnemyBehavior(1, 0) : confirmEnemyBehavior (2, 0);
      advanceTicks();
      depleteHungerAfterTicks(hungerTicks);
    }, 2000); // After Aqua Tail animation completes
    addLogMessage('Vaporeon used Aqua Tail!');
  }
}
function addItemToInventory(itemName) {
  const itemDef = ITEM_DEFS[itemName];

  // Safely update item order inside inventory update logic
  setInventory(prev => {
    let newInventory = [...prev];
    let itemSelected = newInventory.find(item => item.name === itemName);
    // Removed invalid itemOrder property access

    // Find stacks of this item that are not full
    let stackIndexes = [];
    newInventory.forEach((stack, idx) => {
      if (stack.name === itemName && stack.count < itemDef.stackSize) stackIndexes.push(idx);
    });

    let updatedInventory;
    // Try to add to an existing stack
    if (stackIndexes.length) {
      // There is at least one stack with space
      const updated = [...newInventory];
      updated[stackIndexes[0]].count += 1;
      updatedInventory = updated;
      // Do NOT increment item order when adding to existing stack
    } else if (newInventory.length < MAX_INVENTORY_SLOTS) {
      if (newInventory.length === MAX_INVENTORY_SLOTS - 1) {
        setInventoryFull(true);
      }
      updatedInventory = [...newInventory, { ...itemDef, count: 1 }];
      // Increment item order ONLY when a new stack is created
  setNatItemOrder(updatedInventory.length);
  setItemOrder(updatedInventory.length);
    } else if (newInventory.length === MAX_INVENTORY_SLOTS && inventoryFull) {
      updatedInventory = prev;
    } else {
      updatedInventory = newInventory;
    }
    return updatedInventory;
  });
}

//AI functions
function patrol(enemyx, enemyy, key){
if (key === 1){
if (enemy1Sleeping === true){
  return;
}
}
if (key === 2){
if (enemy2Sleeping === true){
  return;
}
}
if (key === 3){
if (enemy3Sleeping === true){
  return;
}
}
if (key === 4){
if (enemy4Sleeping === true){
  return;
}
}
if (key === 5){
if (enemy5Sleeping === true){
  return;
}
}
if (key === 6){
if (enemy6Sleeping === true){
  return;
}
}
if (key === 7){
if (enemy7Sleeping === true){
  return;
}
}
if (key === 8){
if (enemy8Sleeping === true){
  return;
}
}
const tileUp = dungeon[enemyy - 1][enemyx]
const tileDown = dungeon[enemyy + 1][enemyx]
const tileRight = dungeon[enemyy][enemyx + 1]
const tileLeft = dungeon[enemyy][enemyx - 1]
const tileUpRight = dungeon[enemyy - 1][enemyx + 1]
const tileUpLeft = dungeon[enemyy - 1][enemyx - 1]
const tileDownRight = dungeon[enemyy + 1][enemyx + 1]
const tileDownLeft = dungeon[enemyy + 1][enemyx - 1]

const newPosx = enemyx
const newPosy = enemyy
const validOptions = []
const directions = {
up: null,
down: null,
left: null,
right: null,
upLeft: null,
upRight: null,
downLeft: null,
downRight: null
}

if (tileUp !== 'W'){
const up = true
validOptions.push('up')
}
if (tileDown !== 'W'){
const down = true
validOptions.push('down')
const chosen = randInt(0, validOptions.length)
}
if (tileLeft !== 'W'){
const left = true
validOptions.push('left')
const chosen = randInt(0, validOptions.length)
}
if (tileRight !== 'W'){
const right = true
validOptions.push('right')
const chosen = randInt(0, validOptions.length)
}
if (tileDownLeft !== 'W'){
const downLeft = true
validOptions.push('downLeft')
const chosen = randInt(0, validOptions.length)
}
if (tileDownRight !== 'W'){
const downRight = true
validOptions.push('downRight')
const chosen = randInt(0, validOptions.length)
}
if (tileUpLeft !== 'W'){
const upLeft = true
validOptions.push('upLeft')
const chosen = randInt(0, validOptions.length)
}
if (tileUpRight !== 'W'){
const upRight = true
validOptions.push('upRight')
const chosen = randInt(0, validOptions.length)
}

setChosen(randInt(1, validOptions.length))

if ((validOptions[chosen] === 'up')){
    const newPosx = enemyx
    const newPosy = enemyy - 1
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('up')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('up')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('up')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('up')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('up')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('up')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('up')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('up')
}
}
if (validOptions[chosen] === 'down'){
    const newPosx = enemyx
    const newPosy = enemyy + 1
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('down')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('down')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('down')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('down')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('down')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('down')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('down')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('down')
}
}
if (validOptions[chosen] === 'left'){
    const newPosx = enemyx - 1
    const newPosy = enemyy
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('left')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('left')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('left')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('left')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('left')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('left')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('left')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('left')
}
}
if (validOptions[chosen] === 'right'){
    const newPosx = enemyx + 1
    const newPosy = enemyy
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('right')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('right')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('right')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('right')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('right')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('right')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('right')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('right')
}
}
if (validOptions[chosen] === 'downLeft'){
    const newPosx = enemyx - 1
    const newPosy = enemyy + 1
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('downLeft')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('downLeft')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('downLeft')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('downLeft')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('downLeft')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('downLeft')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('downLeft')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('downLeft')
}
}
if (validOptions[chosen] === 'downRight'){
    const newPosx = enemyx + 1
    const newPosy = enemyy + 1
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('downRight')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('downRight')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('downRight')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('downRight')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('downRight')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('downRight')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('downRight')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('downRight')
}
}
if (validOptions[chosen] === 'upLeft'){
    const newPosx = enemyx - 1
    const newPosy = enemyy - 1
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('upLeft')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('upLeft')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('upLeft')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('upLeft')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('upLeft')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('upLeft')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('upLeft')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('upLeft')
}
}
if (validOptions[chosen] === 'upRight'){
    const newPosx = enemyx + 1
    const newPosy = enemyy - 1
    if (key === 1){
    setEnemy1Pos( {x: newPosx, y: newPosy} )
    setEnemy1LastDirection('upRight')
}
    if (key === 2){
    setEnemy2Pos( {x: newPosx, y: newPosy} )
    setEnemy2LastDirection('upRight')
}
    if (key === 3){
    setEnemy3Pos( {x: newPosx, y: newPosy} )
    setEnemy3LastDirection('upRight')
}
    if (key === 4){
    setEnemy4Pos( {x: newPosx, y: newPosy} )
    setEnemy4LastDirection('upRight')
}
    if (key === 5){
    setEnemy5Pos( {x: newPosx, y: newPosy} )
    setEnemy5LastDirection('upRight')
}
    if (key === 6){
    setEnemy6Pos( {x: newPosx, y: newPosy} )
    setEnemy6LastDirection('upRight')
}
    if (key === 7){
    setEnemy7Pos( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('upRight')
}
    if (key === 8){
    setEnemy8Pos( {x: newPosx, y: newPosy} )
    setEnemy8LastDirection('upRight')
}
}
return
}

function verifyPlayerPosition(playerx, playery){
  if (playerx === playerPosRef.current.x && playery === playerPosRef.current.y){
    //console.log(playerx, 'is the same as', playerPosRef.current.x, 'and', playery, 'is the same as', playerPosRef.current.y)
  }
  else {
      //console.log(playerx, 'is not the same as', playerPosRef.current.x, 'or', playery, 'is not the same as', playerPosRef.current.y)
      setPlayerPos( {x: playerx, y: playery} );
      //console.log('Correct after state change:', playerx === playerPosRef.current.x && playery === playerPosRef.current.y)
  }
}
function verifyEnemyPosition(enemyx, enemyy, key){
  if (key === 1){
    if (enemyx === enemy1PosRef.current.x && enemyy === enemy1PosRef.current.y){
    //console.log('Case 1:', enemyx, 'is the same as', enemy1PosRef.current.x, 'and', enemyy, 'is the same as', enemy1PosRef.current.y)
    return enemy1Pos
    }
    else {
      //console.log('Case 1:', enemyx, 'is not the same as', enemy1PosRef.current.x, 'or', enemyy, 'is not the same as', enemy1PosRef.current.y)
      setEnemy1Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy1PosRef.current.x && enemyy === enemy1PosRef.current.y)
      return enemy1Pos
    }
  }
  if (key === 2){
    if (enemyx === enemy2PosRef.current.x && enemyy === enemy2PosRef.current.y){
    //console.log('Case 2:', enemyx, 'is the same as', enemy2PosRef.current.x, 'and', enemyy, 'is the same as', enemy2PosRef.current.y)
    return enemy2Pos
    }
    else {
      //console.log('Case 2:', enemyx, 'is not the same as', enemy2PosRef.current.x, 'or', enemyy, 'is not the same as', enemy2PosRef.current.y)
      setEnemy2Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy2PosRef.current.x && enemyy === enemy2PosRef.current.y)
      return enemy2Pos
    }
  }
  if (key === 3){
    if (enemyx === enemy3PosRef.current.x && enemyy === enemy3PosRef.current.y){
    //console.log('Case 3:', enemyx, 'is the same as', enemy3PosRef.current.x, 'and', enemyy, 'is the same as', enemy3PosRef.current.y)
    return enemy3Pos
    }
    else {
      //console.log('Case 3:', enemyx, 'is not the same as', enemy3PosRef.current.x, 'or', enemyy, 'is not the same as', enemy3PosRef.current.y)
      setEnemy3Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy3PosRef.current.x && enemyy === enemy3PosRef.current.y)
      return enemy3Pos
    }
  }
  if (key === 4){
    if (enemyx === enemy4PosRef.current.x && enemyy === enemy4PosRef.current.y){
    //console.log('Case 4:', enemyx, 'is the same as', enemy4PosRef.current.x, 'and', enemyy, 'is the same as', enemy4PosRef.current.y)
    return enemy4Pos
    }
    else {
      //console.log('Case 4:', enemyx, 'is not the same as', enemy4PosRef.current.x, 'or', enemyy, 'is not the same as', enemy4PosRef.current.y)
      setEnemy4Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy4PosRef.current.x && enemyy === enemy4PosRef.current.y)
      return enemy4Pos
    }
  }
  if (key === 5){
    if (enemyx === enemy5PosRef.current.x && enemyy === enemy5PosRef.current.y){
    //console.log('Case 5:', enemyx, 'is the same as', enemy5PosRef.current.x, 'and', enemyy, 'is the same as', enemy5PosRef.current.y)
    return enemy5Pos
    }
    else {
      //console.log('Case 5:', enemyx, 'is not the same as', enemy5PosRef.current.x, 'or', enemyy, 'is not the same as', enemy5PosRef.current.y)
      setEnemy5Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy5PosRef.current.x && enemyy === enemy5PosRef.current.y)
      return enemy5Pos
    }
  }
  if (key === 6){
    if (enemyx === enemy6PosRef.current.x && enemyy === enemy6PosRef.current.y){
    //console.log('Case 6:', enemyx, 'is the same as', enemy6PosRef.current.x, 'and', enemyy, 'is the same as', enemy6PosRef.current.y)
    return enemy6Pos
    }
    else {
      //console.log('Case 6:', enemyx, 'is not the same as', enemy6PosRef.current.x, 'or', enemyy, 'is not the same as', enemy6PosRef.current.y)
      setEnemy6Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy6PosRef.current.x && enemyy === enemy6PosRef.current.y)
      return enemy6Pos
    }
  }
  if (key === 7){
    if (enemyx === enemy7PosRef.current.x && enemyy === enemy7PosRef.current.y){
    //console.log('Case 7:', enemyx, 'is the same as', enemy7PosRef.current.x, 'and', enemyy, 'is the same as', enemy7PosRef.current.y)
    return enemy7Pos
    }
    else {
      //console.log('Case 7:', enemyx, 'is not the same as', enemy7PosRef.current.x, 'or', enemyy, 'is not the same as', enemy7PosRef.current.y)
      setEnemy7Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy7PosRef.current.x && enemyy === enemy7PosRef.current.y)
      return enemy7Pos
    }
  }
  if (key === 8){
    if (enemyx === enemy8PosRef.current.x && enemyy === enemy8PosRef.current.y){
    //console.log('Case 8:', enemyx, 'is the same as', enemy8PosRef.current.x, 'and', enemyy, 'is the same as', enemy8PosRef.current.y)
    return enemy8Pos
    }
    else {
      //console.log('Case 8:', enemyx, 'is not the same as', enemy8PosRef.current.x, 'or', enemyy, 'is not the same as', enemy8PosRef.current.y)
      setEnemy8Pos( {x: enemyx, y: enemyy} )
      //console.log('Correct after state change:', enemyx === enemy8PosRef.current.x && enemyy === enemy8PosRef.current.y)
      return enemy8Pos
    }
  }
}

function pursue(enemyx, enemyy, key){

if (key === 1){
if (enemy1Sleeping === true){
  return;
}
}
if (key === 2){
if (enemy2Sleeping === true){
  return;
}
}
if (key === 3){
if (enemy3Sleeping === true){
  return;
}
}
if (key === 4){
if (enemy4Sleeping === true){
  return;
}
}
if (key === 5){
if (enemy5Sleeping === true){
  return;
}
}
if (key === 6){
if (enemy6Sleeping === true){
  return;
}
}
if (key === 7){
if (enemy7Sleeping === true){
  return;
}
}
if (key === 8){
if (enemy8Sleeping === true){
  return;
}
}
const tileUp = dungeon[enemyy - 1][enemyx]
const tileDown = dungeon[enemyy + 1][enemyx]
const tileRight = dungeon[enemyy][enemyx + 1]
const tileLeft = dungeon[enemyy][enemyx - 1]
const tileUpRight = dungeon[enemyy - 1][enemyx + 1]
const tileUpLeft = dungeon[enemyy - 1][enemyx - 1]
const tileDownRight = dungeon[enemyy + 1][enemyx + 1]
const tileDownLeft = dungeon[enemyy + 1][enemyx - 1]

//player cases
const playerUp = playerPosRef.current.y === enemyy - 1 && playerPosRef.current.x === enemyx
const playerDown = playerPosRef.current.y === enemyy + 1 && playerPosRef.current.x === enemyx
const playerLeft = playerPosRef.current.y === enemyy && playerPosRef.current.x === enemyx - 1
const playerRight = playerPosRef.current.y === enemyy && playerPosRef.current.x === enemyx + 1
const playerUpRight = playerPosRef.current.y === enemyy - 1 && playerPosRef.current.x === enemyx + 1
const playerUpLeft = playerPosRef.current.y === enemyy - 1 && playerPosRef.current.x === enemyx - 1
const playerDownRight = playerPosRef.current.y === enemyy + 1 && playerPosRef.current.x === enemyx + 1
const playerDownLeft = playerPosRef.current.y === enemyy + 1 && playerPosRef.current.x === enemyx - 1
//enemy1 cases
const enemy1Up = enemy1 ? enemy1PosRef.current.y === enemyy - 1 && enemy1PosRef.current.x === enemyx : false
const enemy1Down = enemy1 ? enemy1PosRef.current.y === enemyy + 1 && enemy1PosRef.current.x === enemyx : false
const enemy1Left = enemy1 ? enemy1PosRef.current.y === enemyy && enemy1PosRef.current.x === enemyx - 1 : false
const enemy1Right = enemy1 ? enemy1PosRef.current.y === enemyy && enemy1PosRef.current.x === enemyx + 1 : false
const enemy1UpRight = enemy1 ? enemy1PosRef.current.y === enemyy - 1 && enemy1PosRef.current.x === enemyx + 1 : false
const enemy1UpLeft = enemy1 ? enemy1PosRef.current.y === enemyy - 1 && enemy1PosRef.current.x === enemyx - 1 : false
const enemy1DownRight = enemy1 ? enemy1PosRef.current.y === enemyy + 1 && enemy1PosRef.current.x === enemyx + 1 : false
const enemy1DownLeft = enemy1 ? enemy1PosRef.current.y === enemyy + 1 && enemy1PosRef.current.x === enemyx - 1 : false
//enemy2 cases
const enemy2Up = enemy2 ? enemy2PosRef.current.y === enemyy - 1 && enemy2PosRef.current.x === enemyx : false
const enemy2Down = enemy2 ? enemy2PosRef.current.y === enemyy + 1 && enemy2PosRef.current.x === enemyx : false
const enemy2Left = enemy2 ? enemy2PosRef.current.y === enemyy && enemy2PosRef.current.x === enemyx - 1 : false
const enemy2Right = enemy2 ? enemy2PosRef.current.y === enemyy && enemy2PosRef.current.x === enemyx + 1 : false
const enemy2UpRight = enemy2 ? enemy2PosRef.current.y === enemyy - 1 && enemy2PosRef.current.x === enemyx + 1 : false
const enemy2UpLeft = enemy2 ? enemy2PosRef.current.y === enemyy - 1 && enemy2PosRef.current.x === enemyx - 1 : false
const enemy2DownRight = enemy2 ? enemy2PosRef.current.y === enemyy + 1 && enemy2PosRef.current.x === enemyx + 1 : false
const enemy2DownLeft = enemy2 ? enemy2PosRef.current.y === enemyy + 1 && enemy2PosRef.current.x === enemyx - 1 : false
//enemy3 cases
const enemy3Up = enemy3 ? enemy3PosRef.current.y === enemyy - 1 && enemy3PosRef.current.x === enemyx : false
const enemy3Down = enemy3 ? enemy3PosRef.current.y === enemyy + 1 && enemy3PosRef.current.x === enemyx : false
const enemy3Left = enemy3 ? enemy3PosRef.current.y === enemyy && enemy3PosRef.current.x === enemyx - 1 : false
const enemy3Right = enemy3 ? enemy3PosRef.current.y === enemyy && enemy3PosRef.current.x === enemyx + 1 : false
const enemy3UpRight = enemy3 ? enemy3PosRef.current.y === enemyy - 1 && enemy3PosRef.current.x === enemyx + 1 : false
const enemy3UpLeft = enemy3 ? enemy3PosRef.current.y === enemyy - 1 && enemy3PosRef.current.x === enemyx - 1 : false
const enemy3DownRight = enemy3 ? enemy3PosRef.current.y === enemyy + 1 && enemy3PosRef.current.x === enemyx + 1 : false
const enemy3DownLeft = enemy3 ? enemy3PosRef.current.y === enemyy + 1 && enemy3PosRef.current.x === enemyx - 1 : false
//enemy4 cases
const enemy4Up = enemy4 ? enemy4PosRef.current.y === enemyy - 1 && enemy4PosRef.current.x === enemyx : false
const enemy4Down = enemy4 ? enemy4PosRef.current.y === enemyy + 1 && enemy4PosRef.current.x === enemyx : false
const enemy4Left = enemy4 ? enemy4PosRef.current.y === enemyy && enemy4PosRef.current.x === enemyx - 1 : false
const enemy4Right = enemy4 ? enemy4PosRef.current.y === enemyy && enemy4PosRef.current.x === enemyx + 1 : false
const enemy4UpRight = enemy4 ? enemy4PosRef.current.y === enemyy - 1 && enemy4PosRef.current.x === enemyx + 1 : false
const enemy4UpLeft = enemy4 ? enemy4PosRef.current.y === enemyy - 1 && enemy4PosRef.current.x === enemyx - 1 : false
const enemy4DownRight = enemy4 ? enemy4PosRef.current.y === enemyy + 1 && enemy4PosRef.current.x === enemyx + 1 : false
const enemy4DownLeft = enemy4 ? enemy4PosRef.current.y === enemyy + 1 && enemy4PosRef.current.x === enemyx - 1 : false
//enemy5 cases
const enemy5Up = enemy5 ? enemy5PosRef.current.y === enemyy - 1 && enemy5PosRef.current.x === enemyx : false
const enemy5Down = enemy5 ? enemy5PosRef.current.y === enemyy + 1 && enemy5PosRef.current.x === enemyx : false
const enemy5Left = enemy5 ? enemy5PosRef.current.y === enemyy && enemy5PosRef.current.x === enemyx - 1 : false
const enemy5Right = enemy5 ? enemy5PosRef.current.y === enemyy && enemy5PosRef.current.x === enemyx + 1 : false
const enemy5UpRight = enemy5 ? enemy5PosRef.current.y === enemyy - 1 && enemy5PosRef.current.x === enemyx + 1 : false
const enemy5UpLeft = enemy5 ? enemy5PosRef.current.y === enemyy - 1 && enemy5PosRef.current.x === enemyx - 1 : false
const enemy5DownRight = enemy5 ? enemy5PosRef.current.y === enemyy + 1 && enemy5PosRef.current.x === enemyx + 1 : false
const enemy5DownLeft = enemy5 ? enemy5PosRef.current.y === enemyy + 1 && enemy5PosRef.current.x === enemyx - 1 : false
//enemy6 cases
const enemy6Up = enemy6 ? enemy6PosRef.current.y === enemyy - 1 && enemy6PosRef.current.x === enemyx : false
const enemy6Down = enemy6 ? enemy6PosRef.current.y === enemyy + 1 && enemy6PosRef.current.x === enemyx : false
const enemy6Left = enemy6 ? enemy6PosRef.current.y === enemyy && enemy6PosRef.current.x === enemyx - 1 : false
const enemy6Right = enemy6 ? enemy6PosRef.current.y === enemyy && enemy6PosRef.current.x === enemyx + 1 : false
const enemy6UpRight = enemy6 ? enemy6PosRef.current.y === enemyy - 1 && enemy6PosRef.current.x === enemyx + 1 : false
const enemy6UpLeft = enemy6 ? enemy6PosRef.current.y === enemyy - 1 && enemy6PosRef.current.x === enemyx - 1 : false
const enemy6DownRight = enemy6 ? enemy6PosRef.current.y === enemyy + 1 && enemy6PosRef.current.x === enemyx + 1 : false
const enemy6DownLeft = enemy6 ? enemy6PosRef.current.y === enemyy + 1 && enemy6PosRef.current.x === enemyx - 1 : false
//enemy7 cases
const enemy7Up = enemy7 ? enemy7PosRef.current.y === enemyy - 1 && enemy7PosRef.current.x === enemyx : false
const enemy7Down = enemy7 ? enemy7PosRef.current.y === enemyy + 1 && enemy7PosRef.current.x === enemyx : false
const enemy7Left = enemy7 ? enemy7PosRef.current.y === enemyy && enemy7PosRef.current.x === enemyx - 1 : false
const enemy7Right = enemy7 ? enemy7PosRef.current.y === enemyy && enemy7PosRef.current.x === enemyx + 1 : false
const enemy7UpRight = enemy7 ? enemy7PosRef.current.y === enemyy - 1 && enemy7PosRef.current.x === enemyx + 1 : false
const enemy7UpLeft = enemy7 ? enemy7PosRef.current.y === enemyy - 1 && enemy7PosRef.current.x === enemyx - 1 : false
const enemy7DownRight = enemy7 ? enemy7PosRef.current.y === enemyy + 1 && enemy7PosRef.current.x === enemyx + 1 : false
const enemy7DownLeft = enemy7 ? enemy7PosRef.current.y === enemyy + 1 && enemy7PosRef.current.x === enemyx - 1 : false
//enemy8 cases
const enemy8Up = enemy8 ? enemy8PosRef.current.y === enemyy - 1 && enemy8PosRef.current.x === enemyx : false
const enemy8Down = enemy8 ? enemy8PosRef.current.y === enemyy + 1 && enemy8PosRef.current.x === enemyx : false
const enemy8Left = enemy8 ? enemy8PosRef.current.y === enemyy && enemy8PosRef.current.x === enemyx - 1 : false
const enemy8Right = enemy8 ? enemy8PosRef.current.y === enemyy && enemy8PosRef.current.x === enemyx + 1 : false
const enemy8UpRight = enemy8 ? enemy8PosRef.current.y === enemyy - 1 && enemy8PosRef.current.x === enemyx + 1 : false
const enemy8UpLeft = enemy8 ? enemy8PosRef.current.y === enemyy - 1 && enemy8PosRef.current.x === enemyx - 1 : false
const enemy8DownRight = enemy8 ? enemy8PosRef.current.y === enemyy + 1 && enemy8PosRef.current.x === enemyx + 1 : false
const enemy8DownLeft = enemy8 ? enemy8PosRef.current.y === enemyy + 1 && enemy8PosRef.current.x === enemyx - 1 : false


let newPosx = enemyx
let newPosy = enemyy

if (enemyx < playerPos.x && enemyy < playerPos.y && tileDownRight !== 'W' && !playerDownRight && !enemy1DownRight && !enemy2DownRight && !enemy3DownRight && !enemy4DownRight && !enemy5DownRight && !enemy6DownRight && !enemy7DownRight && !enemy8DownRight){
const newPosx = enemyx + 1
const newPosy = enemyy + 1
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('downRight')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('downRight')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('downRight')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('downRight')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('downRight')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('downRight')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('downRight')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('downRight')
}
}
else if (enemyx < playerPos.x && enemyy > playerPos.y && tileUpRight !== 'W' && !playerUpRight && !enemy1UpRight && !enemy2UpRight && !enemy3UpRight && !enemy4UpRight && !enemy5UpRight && !enemy6UpRight && !enemy7UpRight && !enemy8UpRight){
const newPosx = enemyx + 1
const newPosy = enemyy - 1
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('upRight')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('upRight')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('upRight')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('upRight')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('upRight')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('upRight')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('upRight')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('upRight')
}
}
else if (enemyx > playerPos.x && enemyy < playerPos.y && tileDownLeft !== 'W' && !playerDownLeft && !enemy1DownLeft && !enemy2DownLeft && !enemy3DownLeft && !enemy4DownLeft && !enemy5DownLeft && !enemy6DownLeft && !enemy7DownLeft && !enemy8DownLeft){
const newPosx = enemyx - 1
const newPosy = enemyy + 1
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('downLeft')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('downLeft')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('downLeft')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('downLeft')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('downLeft')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('downLeft')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('downLeft')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('downLeft')
}
}
else if (enemyx > playerPos.x && enemyy > playerPos.y && tileUpLeft !== 'W' && !playerUpLeft && !enemy1UpLeft && !enemy2UpLeft && !enemy3UpLeft && !enemy4UpLeft && !enemy5UpLeft && !enemy6UpLeft && !enemy7UpLeft && !enemy8UpLeft){
const newPosx = enemyx - 1
const newPosy = enemyy - 1
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('upLeft')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('upLeft')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('upLeft')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('upLeft')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('upLeft')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('upLeft')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('upLeft')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('upLeft')
}
}
else if (enemyx < playerPos.x && tileRight !== 'W' && !playerRight && !enemy1Right && !enemy2Right && !enemy3Right && !enemy4Right && !enemy5Right && !enemy6Right && !enemy7Right && !enemy8Right){
const newPosx = enemyx + 1
const newPosy = enemyy 
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('right')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('right')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('right')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('right')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('right')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('right')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('right')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('right')
}
}
else if (enemyx > playerPos.x && tileLeft !== 'W' && !playerLeft && !enemy1Left && !enemy2Left && !enemy3Left && !enemy4Left && !enemy5Left && !enemy6Left && !enemy7Left && !enemy8Left ){
const newPosx = enemyx - 1
const newPosy = enemyy
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('left')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('left')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('left')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('left')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('left')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('left')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('left')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('left')
}
}
else if (enemyy < playerPos.y && tileDown !== 'W' && !playerDown && !enemy1Down && !enemy2Down && !enemy3Down && !enemy4Down && !enemy5Down && !enemy6Down && !enemy7Down && !enemy8Down){
const newPosx = enemyx
const newPosy = enemyy + 1
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('down')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('down')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('down')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('down')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('down')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('down')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('down')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('down')
}
}
else if (enemyy > playerPos.y && tileUp !== 'W' && !playerUp && !enemy1Up && !enemy2Up && !enemy3Up && !enemy4Up && !enemy5Up && !enemy6Up && !enemy7Up && !enemy8Up){
const newPosx = enemyx
const newPosy = enemyy - 1
if (key === 1){
setEnemy1Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy1LastDirection('up')
}
if (key === 2){
setEnemy2Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy2LastDirection('up')
}
if (key === 3){
setEnemy3Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy3LastDirection('up')
}
if (key === 4){
setEnemy4Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy4LastDirection('up')
}
if (key === 5){
setEnemy5Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy5LastDirection('up')
}
if (key === 6){
setEnemy6Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy6LastDirection('up')
}
if (key === 7){
setEnemy7Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('up')
}
if (key === 8){
setEnemy8Pos( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy8LastDirection('up')
}
}
return
}
function waitUntil(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function checkAttackPath(key) {
  console.log('checking attack path for enemy', key);
  const enemy1Move1 = enemy1 ? ENEMY_DEFS[enemyType1].moves[0] : null;
  const enemy2Move1 = enemy2 ? ENEMY_DEFS[enemyType2].moves[0] : null;
  const enemy3Move1 = enemy3 ? ENEMY_DEFS[enemyType3].moves[0] : null;
  const enemy4Move1 = enemy4 ? ENEMY_DEFS[enemyType4].moves[0] : null;
  const enemy5Move1 = enemy5 ? ENEMY_DEFS[enemyType5].moves[0] : null;
  const enemy6Move1 = enemy6 ? ENEMY_DEFS[enemyType6].moves[0] : null;
  const enemy7Move1 = enemy7 ? ENEMY_DEFS[enemyType7].moves[0] : null;
  const enemy8Move1 = enemy8 ? ENEMY_DEFS[enemyType8].moves[0] : null;
  const range1 = enemy1Move1 ? enemy1Move1.range : 0;
  const range2 = enemy2Move1 ? enemy2Move1.range : 0;
  const range3 = enemy3Move1 ? enemy3Move1.range : 0;
  const range4 = enemy4Move1 ? enemy4Move1.range : 0;
  const range5 = enemy5Move1 ? enemy5Move1.range : 0;
  const range6 = enemy6Move1 ? enemy6Move1.range : 0;
  const range7 = enemy7Move1 ? enemy7Move1.range : 0;
  const range8 = enemy8Move1 ? enemy8Move1.range : 0;
  const attackDirection = 'none';
if (key === 1){
  if (enemy1Move1.alignment === 'same-direction') {
    if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking right1 at', enemy1PosRef.current.x + i, enemy1PosRef.current.y);
    if (enemy1PosRef.current.x + i === playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y][enemy1PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking left1 at', enemy1PosRef.current.x - i, enemy1PosRef.current.y);
    if (enemy1PosRef.current.x - i === playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y][enemy1PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy1PosRef.current.y < playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x){
    for (let i = 1; i <= range1; i++){
    console.log('checking down1 at', enemy1PosRef.current.x, enemy1PosRef.current.y + i);
    if (enemy1PosRef.current.x === playerPosRef.current.x && enemy1PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y + i][enemy1PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy1PosRef.current.y > playerPosRef.current.y && enemy1PosRef.current.x === playerPosRef.current.x){
    for (let i = 1; i <= range1; i++){
    console.log('checking up1 at', enemy1PosRef.current.x, enemy1PosRef.current.y - i);
    if (enemy1PosRef.current.x === playerPosRef.current.x && enemy1PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y - i][enemy1PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking downright1 at', enemy1PosRef.current.x + i, enemy1PosRef.current.y + i);
    if (enemy1PosRef.current.x + i === playerPosRef.current.x && enemy1PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y + i][enemy1PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y < playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking downleft1 at', enemy1PosRef.current.x - i, enemy1PosRef.current.y + i);
    if (enemy1PosRef.current.x - i === playerPosRef.current.x && enemy1PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y + i][enemy1PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy1PosRef.current.x < playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking upright1 at', enemy1PosRef.current.x + i, enemy1PosRef.current.y - i);
    if (enemy1PosRef.current.x + i === playerPosRef.current.x && enemy1PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y - i][enemy1PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy1PosRef.current.x > playerPosRef.current.x && enemy1PosRef.current.y > playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking upleft1 at', enemy1PosRef.current.x - i, enemy1PosRef.current.y - i);
    if (enemy1PosRef.current.x - i === playerPosRef.current.x && enemy1PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy1PosRef.current.y - i][enemy1PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 2){
  if (enemy2Move1.alignment === 'same-direction') {
    if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range2; i++){
    console.log('checking right2 at', enemy2PosRef.current.x + i, enemy2PosRef.current.y);
    if (enemy2PosRef.current.x + i === playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y][enemy2PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking left2 at', enemy2PosRef.current.x - i, enemy2PosRef.current.y);
    if (enemy2PosRef.current.x - i === playerPosRef.current.x && enemy2PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y][enemy2PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy2PosRef.current.y < playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range2; i++){
    console.log('checking down2 at', enemy2PosRef.current.x, enemy2PosRef.current.y + i);
    if (enemy2PosRef.current.x === playerPosRef.current.x && enemy2PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y + i][enemy2PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy2PosRef.current.y > playerPosRef.current.y && enemy2PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range2; i++){
    console.log('checking up2 at', enemy2PosRef.current.x, enemy2PosRef.current.y - i);
    if (enemy2PosRef.current.x === playerPosRef.current.x && enemy2PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y - i][enemy2PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking downright2 at', enemy2PosRef.current.x + i, enemy2PosRef.current.y + i);
    if (enemy2PosRef.current.x + i === playerPosRef.current.x && enemy2PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y + i][enemy2PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking downleft2 at', enemy2PosRef.current.x - i, enemy2PosRef.current.y + i);
    if (enemy2PosRef.current.x - i === playerPosRef.current.x && enemy2PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y + i][enemy2PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy2PosRef.current.x < playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking upright2 at', enemy2PosRef.current.x + i, enemy2PosRef.current.y - i);
    if (enemy2PosRef.current.x + i === playerPosRef.current.x && enemy2PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y - i][enemy2PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy2PosRef.current.x > playerPosRef.current.x && enemy2PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking upleft2 at', enemy2PosRef.current.x - i, enemy2PosRef.current.y - i);
    if (enemy2PosRef.current.x - i === playerPosRef.current.x && enemy2PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy2PosRef.current.y - i][enemy2PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 3){
  if (enemy3Move1.alignment === 'same-direction') {
    if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range3; i++){
    console.log('checking right3 at', enemy3PosRef.current.x + i, enemy3PosRef.current.y);
    if (enemy3PosRef.current.x + i === playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y][enemy3PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking left3 at', enemy3PosRef.current.x - i, enemy3PosRef.current.y);
    if (enemy3PosRef.current.x - i === playerPosRef.current.x && enemy3PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y][enemy3PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy3PosRef.current.y < playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range3; i++){
    console.log('checking down3 at', enemy3PosRef.current.x, enemy3PosRef.current.y + i);
    if (enemy3PosRef.current.x === playerPosRef.current.x && enemy3PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y + i][enemy3PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy3PosRef.current.y > playerPosRef.current.y && enemy3PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range3; i++){
    console.log('checking up3 at', enemy3PosRef.current.x, enemy3PosRef.current.y - i);
    if (enemy3PosRef.current.x === playerPosRef.current.x && enemy3PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y - i][enemy3PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking downright3 at', enemy3PosRef.current.x + i, enemy3PosRef.current.y + i);
    if (enemy3PosRef.current.x + i === playerPosRef.current.x && enemy3PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y + i][enemy3PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking downleft3 at', enemy3PosRef.current.x - i, enemy3PosRef.current.y + i);
    if (enemy3PosRef.current.x - i === playerPosRef.current.x && enemy3PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y + i][enemy3PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy3PosRef.current.x < playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking upright3 at', enemy3PosRef.current.x + i, enemy3PosRef.current.y - i);
    if (enemy3PosRef.current.x + i === playerPosRef.current.x && enemy3PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y - i][enemy3PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy3PosRef.current.x > playerPosRef.current.x && enemy3PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking upleft3 at', enemy3PosRef.current.x - i, enemy3PosRef.current.y - i);
    if (enemy3PosRef.current.x - i === playerPosRef.current.x && enemy3PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy3PosRef.current.y - i][enemy3PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 4){
  if (enemy4Move1.alignment === 'same-direction') {
    if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range4; i++){
    console.log('checking right4 at', enemy4PosRef.current.x + i, enemy4PosRef.current.y);
    if (enemy4PosRef.current.x + i === playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y][enemy4PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking left4 at', enemy4PosRef.current.x - i, enemy4PosRef.current.y);
    if (enemy4PosRef.current.x - i === playerPosRef.current.x && enemy4PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y][enemy4PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy4PosRef.current.y < playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range4; i++){
    console.log('checking down4 at', enemy4PosRef.current.x, enemy4PosRef.current.y + i);
    if (enemy4PosRef.current.x === playerPosRef.current.x && enemy4PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y + i][enemy4PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy4PosRef.current.y > playerPosRef.current.y && enemy4PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range4; i++){
    console.log('checking up4 at', enemy4PosRef.current.x, enemy4PosRef.current.y - i);
    if (enemy4PosRef.current.x === playerPosRef.current.x && enemy4PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y - i][enemy4PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking downright4 at', enemy4PosRef.current.x + i, enemy4PosRef.current.y + i);
    if (enemy4PosRef.current.x + i === playerPosRef.current.x && enemy4PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y + i][enemy4PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking downleft4 at', enemy4PosRef.current.x - i, enemy4PosRef.current.y + i);
    if (enemy4PosRef.current.x - i === playerPosRef.current.x && enemy4PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y + i][enemy4PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy4PosRef.current.x < playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking upright4 at', enemy4PosRef.current.x + i, enemy4PosRef.current.y - i);
    if (enemy4PosRef.current.x + i === playerPosRef.current.x && enemy4PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y - i][enemy4PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy4PosRef.current.x > playerPosRef.current.x && enemy4PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking upleft4 at', enemy4PosRef.current.x - i, enemy4PosRef.current.y - i);
    if (enemy4PosRef.current.x - i === playerPosRef.current.x && enemy4PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy4PosRef.current.y - i][enemy4PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 5){
  if (enemy5Move1.alignment === 'same-direction') {
    if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking right5 at', enemy5PosRef.current.x + i, enemy5PosRef.current.y);
    if (enemy5PosRef.current.x + i === playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y][enemy5PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking left5 at', enemy5PosRef.current.x - i, enemy5PosRef.current.y);
    if (enemy5PosRef.current.x - i === playerPosRef.current.x && enemy5PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y][enemy5PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy5PosRef.current.y < playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range5; i++){
    console.log('checking down5 at', enemy5PosRef.current.x, enemy5PosRef.current.y + i);
    if (enemy5PosRef.current.x === playerPosRef.current.x && enemy5PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y + i][enemy5PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy5PosRef.current.y > playerPosRef.current.y && enemy5PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range5; i++){
    console.log('checking up5 at', enemy5PosRef.current.x, enemy5PosRef.current.y - i);
    if (enemy5PosRef.current.x === playerPosRef.current.x && enemy5PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y - i][enemy5PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking downright5 at', enemy5PosRef.current.x + i, enemy5PosRef.current.y + i);
    if (enemy5PosRef.current.x + i === playerPosRef.current.x && enemy5PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y + i][enemy5PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking downleft5 at', enemy5PosRef.current.x - i, enemy5PosRef.current.y + i);
    if (enemy5PosRef.current.x - i === playerPosRef.current.x && enemy5PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y + i][enemy5PosRef.current.x - i]  === 'W'){
      return false;
    }
  }
    }
      else if (enemy5PosRef.current.x < playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking upright5 at', enemy5PosRef.current.x + i, enemy5PosRef.current.y - i);
    if (enemy5PosRef.current.x + i === playerPosRef.current.x && enemy5PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y - i][enemy5PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy5PosRef.current.x > playerPosRef.current.x && enemy5PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking upleft5 at', enemy5PosRef.current.x - i, enemy5PosRef.current.y - i);
    if (enemy5PosRef.current.x - i === playerPosRef.current.x && enemy5PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy5PosRef.current.y - i][enemy5PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 6){
  if (enemy6Move1.alignment === 'same-direction') {
    if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking right6 at', enemy6PosRef.current.x + i, enemy6PosRef.current.y);
    if (enemy6PosRef.current.x + i === playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y][enemy6PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking left6 at', enemy6PosRef.current.x - i, enemy6PosRef.current.y);
    if (enemy6PosRef.current.x - i === playerPosRef.current.x && enemy6PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y][enemy6PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy6PosRef.current.y < playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range6; i++){
    console.log('checking down6 at', enemy6PosRef.current.x, enemy6PosRef.current.y + i);
    if (enemy6PosRef.current.x === playerPosRef.current.x && enemy6PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y + i][enemy6PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy6PosRef.current.y > playerPosRef.current.y && enemy6PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range6; i++){
    console.log('checking up6 at', enemy6PosRef.current.x, enemy6PosRef.current.y - i);
    if (enemy6PosRef.current.x === playerPosRef.current.x && enemy6PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y - i][enemy6PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking downright6 at', enemy6PosRef.current.x + i, enemy6PosRef.current.y + i);
    if (enemy6PosRef.current.x + i === playerPosRef.current.x && enemy6PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y + i][enemy6PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking downleft6 at', enemy6PosRef.current.x - i, enemy6PosRef.current.y + i);
    if (enemy6PosRef.current.x - i === playerPosRef.current.x && enemy6PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y + i][enemy6PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy6PosRef.current.x < playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking upright6 at', enemy6PosRef.current.x + i, enemy6PosRef.current.y - i);
    if (enemy6PosRef.current.x + i === playerPosRef.current.x && enemy6PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y - i][enemy6PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy6PosRef.current.x > playerPosRef.current.x && enemy6PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking upleft6 at', enemy6PosRef.current.x - i, enemy6PosRef.current.y - i);
    if (enemy6PosRef.current.x - i === playerPosRef.current.x && enemy6PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy6PosRef.current.y - i][enemy6PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 7){
  if (enemy7Move1.alignment === 'same-direction') {
    if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
      console.log('checking right7 at', enemy7PosRef.current.x + i, enemy7PosRef.current.y);
      if (enemy7PosRef.current.x + i === playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y){
      return true;
    }
      if (dungeon[enemy7PosRef.current.y][enemy7PosRef.current.x + i] === 'W'){
        return false;
      }
    }
    } else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking left7 at', enemy7PosRef.current.x - i, enemy7PosRef.current.y);
    if (enemy7PosRef.current.x - i === playerPosRef.current.x && enemy7PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy7PosRef.current.y][enemy7PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy7PosRef.current.y < playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range7; i++){
    console.log('checking down7 at', enemy7PosRef.current.x, enemy7PosRef.current.y + i);
    if (enemy7PosRef.current.x === playerPosRef.current.x && enemy7PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy7PosRef.current.y + i][enemy7PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy7PosRef.current.y > playerPosRef.current.y && enemy7PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range7; i++){
    console.log('checking up7 at', enemy7PosRef.current.x, enemy7PosRef.current.y - i);
    if (enemy7PosRef.current.x === playerPosRef.current.x && enemy7PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy7PosRef.current.y - i][enemy7PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking downright7 at', enemy7PosRef.current.x + i, enemy7PosRef.current.y + i);
    if (enemy7PosRef.current.x + i === playerPosRef.current.x && enemy7PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy7PosRef.current.y + i][enemy7PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking downleft7 at', enemy7PosRef.current.x - i, enemy7PosRef.current.y + i);
    if (enemy7PosRef.current.x - i === playerPosRef.current.x && enemy7PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy7PosRef.current.y + i][enemy7PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy7PosRef.current.x < playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking upright7 at', enemy7PosRef.current.x + i, enemy7PosRef.current.y - i);
    if (enemy7PosRef.current.x + i === playerPosRef.current.x && enemy7PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy7PosRef.current.y - i][enemy7PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy7PosRef.current.x > playerPosRef.current.x && enemy7PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking upleft7 at', enemy7PosRef.current.x - i, enemy7PosRef.current.y - i);
    if (enemy7PosRef.current.x - i === playerPosRef.current.x && enemy7PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy7PosRef.current.y - i][enemy7PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 8){
  if (enemy8Move1.alignment === 'same-direction') {
    if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking right8 at', enemy8PosRef.current.x + i, enemy8PosRef.current.y);
    if (enemy8PosRef.current.x + i === playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y][enemy8PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking left8 at', enemy8PosRef.current.x - i, enemy8PosRef.current.y);
    if (enemy8PosRef.current.x - i === playerPosRef.current.x && enemy8PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y][enemy8PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemy8PosRef.current.y < playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range8; i++){
    console.log('checking down8 at', enemy8PosRef.current.x, enemy8PosRef.current.y + i);
    if (enemy8PosRef.current.x === playerPosRef.current.x && enemy8PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y + i][enemy8PosRef.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemy8PosRef.current.y > playerPosRef.current.y && enemy8PosRef.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range8; i++){
    console.log('checking up8 at', enemy8PosRef.current.x, enemy8PosRef.current.y - i);
    if (enemy8PosRef.current.x === playerPosRef.current.x && enemy8PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y - i][enemy8PosRef.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking downright8 at', enemy8PosRef.current.x + i, enemy8PosRef.current.y + i);
    if (enemy8PosRef.current.x + i === playerPosRef.current.x && enemy8PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y + i][enemy8PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking downleft8 at', enemy8PosRef.current.x - i, enemy8PosRef.current.y + i);
    if (enemy8PosRef.current.x - i === playerPosRef.current.x && enemy8PosRef.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y + i][enemy8PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy8PosRef.current.x < playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking upright8 at', enemy8PosRef.current.x + i, enemy8PosRef.current.y - i);
    if (enemy8PosRef.current.x + i === playerPosRef.current.x && enemy8PosRef.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y - i][enemy8PosRef.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemy8PosRef.current.x > playerPosRef.current.x && enemy8PosRef.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking upleft8 at', enemy8PosRef.current.x - i, enemy8PosRef.current.y - i);
    if (enemy1PosRef.current.x - i === playerPosRef.current.x && enemy1PosRef.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemy8PosRef.current.y - i][enemy8PosRef.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}

return true;
}
function confirmEnemyBehavior(key, move) {
  console.log('confirming behavior for enemy', key)
  if (key === 1 && enemy1 && enemy1SleepingRef.current === false){
    const wallCheck = checkAttackPath(1);
    console.log('wallcheck for enemy 1:', wallCheck)
    const enemy1Move1 = ENEMY_DEFS[enemyType1].moves[0]
    if (enemy1Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) <= enemy1Move1.range && Math.abs(enemy1PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy1PosRef.current.y - playerPosRef.current.y) <= enemy1Move1.range || Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) <= enemy1Move1.range && Math.abs(enemy1PosRef.current.y - playerPosRef.current.y) <= enemy1Move1.range && Math.abs(enemy1PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy1PosRef.current.y - playerPosRef.current.y))) {
        setEnemy1Attacking(true);
        setTimeout(() => enemyUseMove(enemy1Move1, 1), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy1PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy1PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy1Move1.range)
        console.log('triggered with key', key);
        confirmEnemyBehavior(2, move + 1);
        return;
      }
    }
    if (Math.abs(enemy1PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy1PosRef.current.y - playerPos.y) < 15 && enemy1MoveBehaviorRef.current === true){
      pursue(enemy1PosRef.current.x, enemy1PosRef.current.y, 1)
    }
    else if (Math.abs(enemy1PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy1PosRef.current.y - playerPos.y) >= 15 && enemy1MoveBehaviorRef.current === true){
      patrol(enemy1PosRef.current.x, enemy1PosRef.current.y, 1)
    }
    confirmEnemyBehavior(2, move);
  }
  else if (key === 1 && enemy1 && enemy1SleepingRef.current === true){
    confirmEnemyBehavior(2, move);
    return;
  }
    if (key === 2 && enemy2 && enemy2SleepingRef.current === false){
    const enemy2Move1 = ENEMY_DEFS[enemyType2].moves[0]
    const wallCheck = checkAttackPath(2);
    console.log('wallcheck for enemy 2:', wallCheck)
    if (enemy2Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) <= enemy2Move1.range && Math.abs(enemy2PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy2PosRef.current.y - playerPosRef.current.y) <= enemy2Move1.range || Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) <= enemy2Move1.range && Math.abs(enemy2PosRef.current.y - playerPosRef.current.y) <= enemy2Move1.range && Math.abs(enemy2PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy2PosRef.current.y - playerPosRef.current.y))) {
        setEnemy2Attacking(true);
        setTimeout(() => enemyUseMove(enemy2Move1, 2), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy2PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy2PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy2Move1.range)
        confirmEnemyBehavior(3, move + 1);
        return;
      }
    }
    if (Math.abs(enemy2PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy2PosRef.current.y - playerPos.y) < 15 && enemy2MoveBehaviorRef.current === true){
      pursue(enemy2PosRef.current.x, enemy2PosRef.current.y, 2)
    }
    else if (Math.abs(enemy2PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy2PosRef.current.y - playerPos.y) >= 15 && enemy2MoveBehaviorRef.current === true){
      patrol(enemy2PosRef.current.x, enemy2PosRef.current.y, 2)  
    }
  confirmEnemyBehavior(3, move);
  }
  else if (key === 2 && enemy2 && enemy2SleepingRef.current === true){
    confirmEnemyBehavior(3, move);
    return;
  }

    if (key === 3 && enemy3 && enemy3SleepingRef.current === false){
    const enemy3Move1 = ENEMY_DEFS[enemyType3].moves[0]
    const wallCheck = checkAttackPath(3);
    console.log('wallcheck for enemy 3:', wallCheck)
    if (enemy3Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) <= enemy3Move1.range && Math.abs(enemy3PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy3PosRef.current.y - playerPosRef.current.y) <= enemy3Move1.range || Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) <= enemy3Move1.range && Math.abs(enemy3PosRef.current.y - playerPosRef.current.y) <= enemy3Move1.range && Math.abs(enemy3PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy3PosRef.current.y - playerPosRef.current.y))) {
        setEnemy3Attacking(true);
        setTimeout(() => enemyUseMove(enemy3Move1, 3), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy3PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy3PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy3Move1.range)
        confirmEnemyBehavior(4, move + 1);
        return;
      }
    }
    if (Math.abs(enemy3PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy3PosRef.current.y - playerPos.y) < 15 && enemy3MoveBehaviorRef.current === true){
      pursue(enemy3PosRef.current.x, enemy3PosRef.current.y, 3)
    }
    else if (Math.abs(enemy3PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy3PosRef.current.y - playerPos.y) >= 15 && enemy3MoveBehaviorRef.current === true){
      patrol(enemy3PosRef.current.x, enemy3PosRef.current.y, 3)  
    }
    confirmEnemyBehavior(4, move);
  }
  else if (key === 3 && enemy3 && enemy3SleepingRef.current === true){
    confirmEnemyBehavior(4, move);
    return;
  }

    if (key === 4 && enemy4 && enemy4SleepingRef.current === false){
    const enemy4Move1 = ENEMY_DEFS[enemyType4].moves[0]
    const wallCheck = checkAttackPath(4);
    console.log('wallcheck for enemy 4:', wallCheck)
    if (enemy4Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) <= enemy4Move1.range && Math.abs(enemy4PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy4PosRef.current.y - playerPosRef.current.y) <= enemy4Move1.range || Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) <= enemy4Move1.range && Math.abs(enemy4PosRef.current.y - playerPosRef.current.y) <= enemy4Move1.range && Math.abs(enemy4PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy4PosRef.current.y - playerPosRef.current.y))) {
        setEnemy4Attacking(true);
        setTimeout(() => enemyUseMove(enemy4Move1, 4), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy4PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy4PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy4Move1.range)
        confirmEnemyBehavior(5, move + 1);
        return;
      }
    }
    if (Math.abs(enemy4PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy4PosRef.current.y - playerPos.y) < 15 && enemy4MoveBehaviorRef.current === true){
      pursue(enemy4PosRef.current.x, enemy4PosRef.current.y, 4)
    }
    else if (Math.abs(enemy4PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy4PosRef.current.y - playerPos.y) >= 15 && enemy4MoveBehaviorRef.current === true){
      patrol(enemy4PosRef.current.x, enemy4PosRef.current.y, 4)  
    }
    confirmEnemyBehavior(5, move);
  } 
  else if (key === 4 && enemy4 && enemy4SleepingRef.current === true){
    confirmEnemyBehavior(5, move);
    return;
  }

    if (key === 5 && enemy5 && enemy5SleepingRef.current === false){
    const enemy5Move1 = ENEMY_DEFS[enemyType5].moves[0]
    const wallCheck = checkAttackPath(5);
    console.log('wallcheck for enemy 5:', wallCheck)
    if (enemy5Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) <= enemy5Move1.range && Math.abs(enemy5PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy5PosRef.current.y - playerPosRef.current.y) <= enemy5Move1.range || Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) <= enemy5Move1.range && Math.abs(enemy5PosRef.current.y - playerPosRef.current.y) <= enemy5Move1.range && Math.abs(enemy5PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy5PosRef.current.y - playerPosRef.current.y))) {
        setEnemy5Attacking(true);
        setTimeout(() => enemyUseMove(enemy5Move1, 5), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy5PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy5PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy5Move1.range)
        confirmEnemyBehavior(6, move + 1);
        return;
      }
    }
    if (Math.abs(enemy5PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy5PosRef.current.y - playerPos.y) < 15 && enemy5MoveBehaviorRef.current === true){
      pursue(enemy5PosRef.current.x, enemy5PosRef.current.y, 5)
    }
    else if (Math.abs(enemy5PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy5PosRef.current.y - playerPos.y) >= 15 && enemy5MoveBehaviorRef.current === true){
      patrol(enemy5PosRef.current.x, enemy5PosRef.current.y, 5)  
    }
    confirmEnemyBehavior(6, move);
  }
  else if (key === 5 && enemy5 && enemy5SleepingRef.current === true){
    confirmEnemyBehavior(6, move);
    return;
  }

  if (key === 6 && enemy6 && enemy6SleepingRef.current === false){
    const enemy6Move1 = ENEMY_DEFS[enemyType6].moves[0]
    const wallCheck = checkAttackPath(6);
    console.log('wallcheck for enemy 6:', wallCheck)
    if (enemy6Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) <= enemy6Move1.range && Math.abs(enemy6PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy6PosRef.current.y - playerPosRef.current.y) <= enemy6Move1.range || Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) <= enemy6Move1.range && Math.abs(enemy6PosRef.current.y - playerPosRef.current.y) <= enemy6Move1.range && Math.abs(enemy6PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy6PosRef.current.y - playerPosRef.current.y))) {
        setEnemy6Attacking(true);
        setTimeout(() => enemyUseMove(enemy6Move1, 6), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy6PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy6PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy6Move1.range)
        confirmEnemyBehavior(7, move + 1);
        return;
      }
    }
    if (Math.abs(enemy6PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy6PosRef.current.y - playerPos.y) < 15 && enemy6MoveBehaviorRef.current === true){
      pursue(enemy6PosRef.current.x, enemy6PosRef.current.y, 6)
    }
    else if (Math.abs(enemy6PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy6PosRef.current.y - playerPos.y) >= 15 && enemy6MoveBehaviorRef.current === true){
      patrol(enemy6PosRef.current.x, enemy6PosRef.current.y, 6) 
    }
    confirmEnemyBehavior(7, move);
  }
  else if (key === 6 && enemy6 && enemy6SleepingRef.current === true){
    confirmEnemyBehavior(7, move);
    return;
  }

    if (key === 7 && enemy7 && enemy7SleepingRef.current === false){
    const enemy7Move1 = ENEMY_DEFS[enemyType7].moves[0]
    const wallCheck = checkAttackPath(7);
    console.log('wallcheck for enemy 7:', wallCheck)
    if (enemy7Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) <= enemy7Move1.range && Math.abs(enemy7PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy7PosRef.current.y - playerPosRef.current.y) <= enemy7Move1.range || Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) <= enemy7Move1.range && Math.abs(enemy7PosRef.current.y - playerPosRef.current.y) <= enemy7Move1.range && Math.abs(enemy7PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy7PosRef.current.y - playerPosRef.current.y))) {
        setEnemy7Attacking(true);
        setTimeout(() => enemyUseMove(enemy7Move1, 7), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy7PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy7PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy7Move1.range)
        confirmEnemyBehavior(8, move + 1);
        return;
      }
    }
    if (Math.abs(enemy7PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy7PosRef.current.y - playerPos.y) < 15 && enemy7MoveBehaviorRef.current === true){
      pursue(enemy7PosRef.current.x, enemy7PosRef.current.y, 7)
    }
    else if (Math.abs(enemy7PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy7PosRef.current.y - playerPos.y) >= 15 && enemy7MoveBehaviorRef.current === true){
      patrol(enemy7PosRef.current.x, enemy7PosRef.current.y, 7)  
    }
    confirmEnemyBehavior(8, move);
  }
  else if (key === 7 && enemy7 && enemy7SleepingRef.current === true){
    confirmEnemyBehavior(8, move);
    return;
  }

   if (key === 8 && enemy8 && enemy8SleepingRef.current === false){
    const enemy8Move1 = ENEMY_DEFS[enemyType8].moves[0]
    const wallCheck = checkAttackPath(8);
    console.log('wallcheck for enemy 8:', wallCheck)
    if (enemy8Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) <= enemy8Move1.range && Math.abs(enemy8PosRef.current.y - playerPosRef.current.y) === 0 || Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) === 0 && Math.abs(enemy8PosRef.current.y - playerPosRef.current.y) <= enemy8Move1.range || Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) <= enemy8Move1.range && Math.abs(enemy8PosRef.current.y - playerPosRef.current.y) <= enemy8Move1.range && Math.abs(enemy8PosRef.current.x - playerPosRef.current.x) === Math.abs(enemy8PosRef.current.y - playerPosRef.current.y))) {
        setEnemy8Attacking(true);
        setTimeout(() => enemyUseMove(enemy8Move1, 8), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemy8PosRef.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemy8PosRef.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy8Move1.range)
        return;
      }
    }
    if (Math.abs(enemy8PosRef.current.x - playerPos.x) < 15 && Math.abs(enemy8PosRef.current.y - playerPos.y) < 15 && enemy8MoveBehaviorRef.current === true){
      pursue(enemy8PosRef.current.x, enemy8PosRef.current.y, 8)
    }
    else if (Math.abs(enemy8PosRef.current.x - playerPos.x) >= 15 && Math.abs(enemy8PosRef.current.y - playerPos.y) >= 15 && enemy8MoveBehaviorRef.current === true){
      patrol(enemy8PosRef.current.x, enemy8PosRef.current.y, 8)  
    }
  }
}


function spawnEnemy(dungeonLocal, room, enemy) {
  // validate dungeonLocal
  if (!Array.isArray(dungeonLocal) || dungeonLocal.length === 0 || !Array.isArray(dungeonLocal[0])) {
    console.warn('spawnEnemy: invalid dungeonLocal, skipping spawn');
    return null;
  }

  const cols = dungeonLocal[0].length;
  const rows = dungeonLocal.length;

  // clamp room bounds to dungeon bounds
  const minX = Math.max(0, room.x + 1);
  const maxX = Math.min(cols - 1, room.x + room.w - 1);
  const minY = Math.max(0, room.y + 1);
  const maxY = Math.min(rows - 1, room.y + room.h - 1);

  // collect all valid floor tiles INSIDE the room first
  const roomFloorTiles = [];
  for (let yy = minY; yy <= maxY; yy++) {
    if (!dungeonLocal[yy]) continue;
    for (let xx = minX; xx <= maxX; xx++) {
    if (room.center.x === xx && room.center.y === yy) continue; // skip room center to avoid blocking player spawn
      const c = dungeonLocal[yy][xx];
      if (typeof c !== 'undefined' && c !== 'W' && c !== 'S' && c !== playerPos.x && c !== playerPos.y && !enemyHereTilesRef.current.find(tile => tile.x === xx && tile.y === yy && !itemTilesRef.current.find(tile => tile.x === xx && tile.y === yy))) roomFloorTiles.push({ x: xx, y: yy });
    }
  }

  let spawnX = null, spawnY = null;

  if (roomFloorTiles.length) {
    const pick = roomFloorTiles[randInt(0, roomFloorTiles.length)];
    spawnX = pick.x;
    spawnY = pick.y;
  } else {
    // fallback: try random attempts within clamped box (keeps previous behavior but only within room bounds)
    const maxAttempts = 200;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const tx = randInt(minX, maxX + 1);
      const ty = randInt(minY, maxY + 1);
      if (!dungeonLocal[ty] || typeof dungeonLocal[ty][tx] === 'undefined') continue;
      const cell = dungeonLocal[ty][tx];
      if (cell !== 'W' && cell !== 'S') {
        spawnX = tx;
        spawnY = ty;
        break;
      }
    }
  }

  // last resort: scan whole dungeon for any floor tile (only if room interior had none)
  if (spawnX === null) {
    for (let yy = 0; yy < rows && spawnX === null; yy++) {
      for (let xx = 0; xx < cols; xx++) {
        const c = dungeonLocal[yy][xx];
        if (typeof c !== 'undefined' && c !== 'W' && c !== 'S') {
          spawnX = xx;
          spawnY = yy;
          break;
        }
      }
    }
    console.warn('spawnEnemy: no free tile found in room, scanning whole dungeon, found at', spawnX, spawnY);
  }

    // final fallback to room center clamped
  if (spawnX === null) {
    spawnX = Math.min(Math.max(room.center.x, 0), cols - 1);
    spawnY = Math.min(Math.max(room.center.y, 0), rows - 1);
    console.warn('spawnEnemy: could not find free tile, using room center', spawnX, spawnY);
  }

  const def = ENEMY_DEFS[enemy] || {};
  const enemyObj = {
    key: enemy,
    name: def.name || String(enemy),
    type: def.type || 'Unknown',
    pos: { x: spawnX, y: spawnY },
    hp: def.maxHp || def.hp || 0,
    maxHp: def.maxHp || def.hp || 0,
    attack: def.attack || 0,
    defense: def.defense || 0,
    speed: def.speed || 0,
    specialAttack: def.specialAttack || 0,
    specialDefense: def.specialDefense || 0,
    sprites: def.sprites || {},
    roomId: typeof room.id !== 'undefined' ? room.id : null
  };

  // push into the shared enemies array (keep existing behavior)

  return enemyObj;
}
function updateEnemyPosition(tilex, tiley) {
  const enemy = enemiesRef.current.find(enemy => enemy.posx.x === tilex && enemy.posy.y === tiley);
  if (enemy) {
    setEnemyHere(enemy);
  } else {
    setEnemyHere(null);
  }
}
function verifyEnemyGeneration (enemyCount) {
  if (enemyCount < 1) return;
  else if (enemyCount < 2) {
    setEnemy1(true);
  }
  else if (enemyCount < 3) {
    setEnemy1(true);
    setEnemy2(true);
}
else if (enemyCount < 4) {
    setEnemy1(true);
    setEnemy2(true);
    setEnemy3(true);
}
else if (enemyCount < 5) {
    setEnemy1(true);
    setEnemy2(true);
    setEnemy3(true);
    setEnemy4(true);
}
else if (enemyCount < 6) {
    setEnemy1(true);
    setEnemy2(true);
    setEnemy3(true);
    setEnemy4(true);
    setEnemy5(true);
  }
else if (enemyCount < 7) {
    setEnemy1(true);
    setEnemy2(true);
    setEnemy3(true);
    setEnemy4(true);
    setEnemy5(true);
    setEnemy6(true);
  }
else if (enemyCount < 8) {
    setEnemy1(true);
    setEnemy2(true);
    setEnemy3(true);
    setEnemy4(true);
    setEnemy5(true);
    setEnemy6(true);
    setEnemy7(true);
  }
else if (enemyCount < 9) {
    setEnemy1(true);
    setEnemy2(true);
    setEnemy3(true);
    setEnemy4(true);
    setEnemy5(true);
    setEnemy6(true);
    setEnemy7(true);
    setEnemy8(true);
  }
  return;
}

React.useEffect(() => {
  enemiesRef.current = enemies;
  enemyHereTilesRef.current = enemies.map(enemy => ({ x: enemy.pos.x, y: enemy.pos.y, sprite: enemy.sprite }));
}, [enemies]);
function useSelectedItem(target, item, id) {
  playSound(affirmativesfx);
  if (item === 'Life Seed') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setMaxPlayerHP(prev => prev + 5);
    setPlayerHunger(prev => Math.min(prev + 3, maxPlayerHunger));
    addLogMessage('Used Life Seed! Max HP increased!');
    }
  }
  else if (item === 'Sleep Seed') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setIsSleeping(true);
    setPlayerHunger(prev => Math.min(prev + 3, maxPlayerHunger));
    addLogMessage('Vaporeon fell asleep!');
    setTimeout(() => {
      setIsSleeping(false);
      addLogMessage('Vaporeon woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy1'){
    setEnemy1Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType1].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy1Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType1].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy2'){
    setEnemy2Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType2].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy2Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType2].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy3'){
    setEnemy3Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType3].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy3Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType3].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy4'){
    setEnemy4Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType4].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy4Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType4].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy5'){
    setEnemy5Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType5].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy5Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType5].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy6'){
    setEnemy6Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType6].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy6Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType6].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy7'){
    setEnemy7Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType7].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy7Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType7].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy8'){
    setEnemy8Sleeping(true);
    addLogMessage(ENEMY_DEFS[enemyType8].name + ' fell asleep!');
  setTimeout(() => {
      setEnemy8Sleeping(false);
      addLogMessage(ENEMY_DEFS[enemyType8].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  } 
  else if (item === 'Warp Seed') {
    console.log(target);
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    const floorPositions = [];
    setPlayerHunger(prev => Math.min(prev + 3, maxPlayerHunger));
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== playerPos.x || y !== playerPos.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setPlayerPos({ x: newPos.x, y: newPos.y });
      cameraTargetRef.current = { x: newPos.x, y: newPos.y };
      startCameraLoop();
      addLogMessage('Used Warp Seed! Teleported to a random location!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
  }
    else if (target === 'enemy1'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy1PosRef.current.x || y !== enemy1PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy1Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType1].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy2'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy2PosRef.current.x || y !== enemy2PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy2Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType2].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy3'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy3PosRef.current.x || y !== enemy3PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy3Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType3].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy4'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy4PosRef.current.x || y !== enemy4PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy4Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType4].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy5'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy5PosRef.current.x || y !== enemy5PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy5Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType5].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy6'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy6PosRef.current.x || y !== enemy6PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy6Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType6].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy7'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy7PosRef.current.x || y !== enemy7PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy7Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType7].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy8'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemy8PosRef.current.x || y !== enemy8PosRef.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setEnemy8Pos({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemyType8].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
  }
  else if (item === 'Joy Seed') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setExp(maxExp);
    setPlayerHunger(prev => Math.min(prev + 3, maxPlayerHunger));
    addLogMessage('Used Joy Seed! Level increased!');
    }
  }
  else if (item === 'Pure Seed') {
    if (target === 'player') {
    setWillConsumeItemInventory(true);
    const floorPositions = [];
    setPlayerHunger(prev => Math.min(prev + 3, maxPlayerHunger));
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S') {
          if (dungeon[y - 1][x] === 'S' || dungeon[y + 1][x] === 'S' || dungeon[y][x - 1] === 'S' || dungeon[y][x + 1] === 'S' ||
              dungeon[y - 1][x - 1] === 'S' || dungeon[y - 1][x + 1] === 'S' || dungeon[y + 1][x - 1] === 'S' || dungeon[y + 1][x + 1] === 'S') {
          floorPositions.push({ x, y });
        }
      }
    }
  }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      setPlayerPos({ x: newPos.x, y: newPos.y });
      cameraTargetRef.current = { x: newPos.x, y: newPos.y };
      startCameraLoop();
      addLogMessage('Used Pure Seed! Teleported to the stairs!');
    } else {
      return;
    }
  }
  }
  else if (item === 'Protein') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setBasePlayerAttack(prev => prev + 2);
    addLogMessage('Used Protein! Attack increased!');
    }
  }
  else if (item === 'Calcium') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setBasePlayerSpecialAttack(prev => prev + 2);
    addLogMessage('Used Calcium! Special Attack increased!');
    }
  }
  else if (item === 'Iron') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setBasePlayerDefense(prev => prev + 2);
    addLogMessage('Used Iron! Defense increased!');
    }
  }
  else if (item === 'Zinc') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setBasePlayerSpecialDefense(prev => prev + 2);
    addLogMessage('Used Zinc! Special Defense increased!');
    }
  }
  else if (item === 'Carbos') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setBasePlayerSpeed(prev => prev + 2);
    addLogMessage('Used Carbos! Speed increased!');
    }
  }
  else if (item === 'Max Ether') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setShowMoveSelector(true);
    setUsingEther(true);
    addLogMessage('Used Max Ether!');
    }
  }
  else if (item === 'Max Elixir') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    // Restore all moves' PP to max
    Object.keys(MOVE_DEFS).forEach(moveName => {
      MOVE_DEFS[moveName].ppcurr = MOVE_DEFS[moveName].ppmax;
    });
    addLogMessage('Used Max Elixir! All move PP restored!');
  }
  }
  else if (item === 'Apple') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setPlayerHunger(prev => Math.min(prev + 50, maxPlayerHunger));
    addLogMessage('Ate an Apple! Hunger restored.');
    }
  }
  else if (item === 'Big Apple') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setPlayerHunger(prev => Math.min(prev + 80, maxPlayerHunger));
    addLogMessage('Ate a Big Apple! Hunger restored.');
    }
  }
  else if (item === 'Golden Apple') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setMaxPlayerHunger(prev => Math.min(prev + 20, 200));
    setPlayerHunger(prev => Math.min(prev + 100, maxPlayerHunger));
    addLogMessage('Ate a Golden Apple! Hunger restored and max hunger increased.');
    }
  }
  else if (item === 'Grimy Food') {
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setPlayerHunger(prev => Math.min(prev + 30, maxPlayerHunger));
    addLogMessage('Ate Grimy Food! Hunger restored.');
    //TODO: Implement Grimy Food effects
    }
  }
  //equips
  else if (item === 'Special Band') {
    if (target === 'player'){
      setWillConsumeItemInventory(false);
      if (itemEquipped !== 'Special Band') {
      setItemEquipped('Special Band');
      setItemEquippedId(id);
      addLogMessage('Vaporeon equipped the Special Band!')
      }
      else if (itemEquipped === 'Special Band') {
      setItemEquipped('');
      setItemEquippedId(null);
      addLogMessage('Vaporeon unequipped the Special Band!')
      }
    }
  }
  else if (item === 'Zinc Band') {
    if (target === 'player'){
      setWillConsumeItemInventory(false);
      if (itemEquipped !== 'Zinc Band') {
      setItemEquipped('Zinc Band');
      addLogMessage('Vaporeon equipped the Zinc Band!')
      setItemEquippedId(id);
      }
      else if (itemEquipped === 'Zinc Band') {
      setItemEquipped('');
      setItemEquippedId(null);
      addLogMessage('Vaporeon unequipped the Zinc Band!')
      }
    }
  }
  else if (item === 'Warp Scarf') {
    if (target === 'player') {
      setWillConsumeItemInventory(false);
      if (itemEquipped !== 'Warp Scarf'){
        setItemEquipped('Warp Scarf');
        setItemEquippedId(id);
        addLogMessage('Vaporeon equipped the Warp Scarf');
      }
      else if (itemEquipped === 'Warp Scarf'){
        setItemEquipped('');
        setItemEquippedId(null);
        addLogMessage('Vaporeon unequipped the Warp Scarf');
      }
    }
  }
  else if (item === 'Luminous Orb'){
    if (target === 'player'){
    setWillConsumeItemInventory(true);
    setExploredTiles(prev => {
    const next = new Set(prev);
    for (let yy = 0; yy < dungeon.length; yy++) {
      for (let xx = 0; xx < dungeon[0].length; xx++) {
        next.add(tileKey(xx, yy));
      }
    }
    return next;
  })
  }
}
else if (item === 'Warp Orb'){
  if (target === 'player'){
    setWillConsumeItemInventory(true);
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== playerPos.x || y !== playerPos.y)) {
          floorPositions.push({ x, y });
        }
      }
  }

  if (floorPositions.length > 0) {
      const randIndexPlayer = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexPlayer, 1); // Remove player's new position to avoid warping enemy there
      const randIndexEnemy1 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy1, 1); // Remove enemy1's new position
      const randIndexEnemy2 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy2, 1); // Remove enemy2's new position
      const randIndexEnemy3 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy3, 1); // Remove enemy3's new position
      const randIndexEnemy4 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy4, 1); // Remove enemy4's new position
      const randIndexEnemy5 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy5, 1); // Remove enemy5's new position
      const randIndexEnemy6 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy6, 1); // Remove enemy6's new position
      const randIndexEnemy7 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy7, 1); // Remove enemy7's new position
      const randIndexEnemy8 = randInt(0, floorPositions.length);
      floorPositions.splice(randIndexEnemy8, 1); // Remove enemy8's new position
      const newPosPlayer = floorPositions[randIndexPlayer];
      const newPosEnemy1 = floorPositions[randIndexEnemy1];
      const newPosEnemy2 = floorPositions[randIndexEnemy2];
      const newPosEnemy3 = floorPositions[randIndexEnemy3];
      const newPosEnemy4 = floorPositions[randIndexEnemy4];
      const newPosEnemy5 = floorPositions[randIndexEnemy5];
      const newPosEnemy6 = floorPositions[randIndexEnemy6];
      const newPosEnemy7 = floorPositions[randIndexEnemy7];
      const newPosEnemy8 = floorPositions[randIndexEnemy8];
      setPlayerPos({ x: newPosPlayer.x, y: newPosPlayer.y });
      enemy1.x !== 2 ? setEnemy1Pos({ x: newPosEnemy1.x, y: newPosEnemy1.y }) : null;
      enemy2.x !== 2 ? setEnemy2Pos({ x: newPosEnemy2.x, y: newPosEnemy2.y }) : null;
      enemy3.x !== 2 ? setEnemy3Pos({ x: newPosEnemy3.x, y: newPosEnemy3.y }) : null;
      enemy4.x !== 2 ? setEnemy4Pos({ x: newPosEnemy4.x, y: newPosEnemy4.y }) : null;
      enemy5.x !== 2 ? setEnemy5Pos({ x: newPosEnemy5.x, y: newPosEnemy5.y }) : null;
      enemy6.x !== 2 ? setEnemy6Pos({ x: newPosEnemy6.x, y: newPosEnemy6.y }) : null;
      enemy7.x !== 2 ? setEnemy7Pos({ x: newPosEnemy7.x, y: newPosEnemy7.y }) : null;
      enemy8.x !== 2 ? setEnemy8Pos({ x: newPosEnemy8.x, y: newPosEnemy8.y }) : null;
      addLogMessage('All Pokemon on the floor warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
}
}
  else {
    console.log('Item use not implemented for:', inventory[itemOrder - 1].name);
    return;
  }
  if (willConsumeItemInventoryRef.current === true){
  setInventory(prev => {
    const idx = itemOrder - 1;
    if (idx < 0 || idx >= prev.length) return prev;
    const updated = [...prev];
    if (updated[idx].count > 1) {
      updated[idx].count -= 1;
    } else {
      updated.splice(idx, 1);
      setNatItemOrder(updated.length);
      setItemOrder(Math.max(1, updated.length));
    }
    if (updated.length < MAX_INVENTORY_SLOTS) {
      setInventoryFull(false);
    }
    return updated;
  });
}
  setShowItemActionMenu(false);
  confirmEnemyBehavior(1, 0);
  advanceTicks();
  depleteHungerAfterTicks(hungerTicks);
  setTargeted('');
}

function discardSelectedItem(item, id) {
  playSound(declinesfx);
  if (itemEquipped === item && itemEquippedId === id) {
    setItemEquipped('');
    setItemEquippedId(null);
    console.log('Item unequipped because it was discarded', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
  }
  else {
    console.log('Item not unequipped because it was discarded', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
  }
  setInventory(prev => {
    const idx = itemOrder - 1; // itemOrder is 1-based
    if (idx < 0 || idx >= prev.length) return prev;
    const updated = [...prev];
    if (updated[idx].count > 1) {
      updated[idx].count -= 1;
    } else {
      updated.splice(idx, 1);
      setNatItemOrder(updated.length);
      setItemOrder(Math.max(1, updated.length));
    }
    if (updated.length < MAX_INVENTORY_SLOTS) {
      setInventoryFull(false);
    }
    return updated;
  });
  setShowItemActionMenu(false);
}
function addItemTile(item) {
  if (willConsumeItemRef.current === true){
  setWillConsumeItem(false) 
  useSelectedItem(targetedRef.current, item.itemName, itemOrder);
  return;
  }
  setItemTiles(prev => [...prev, item]);
  const itemAdded = { ...item };
  setItemTilesIndex(prev => [...prev, itemAdded]);
}
function startCameraLoop() {
  if (cameraRafRef.current) return;
  const lerp = (a, b, t) => a + (b - a) * t;
  function step() {
    const cur = cameraPosRef.current;
    const tgt = cameraTargetRef.current;
    const dist = Math.hypot(tgt.x - cur.x, tgt.y - cur.y);
    const t = Math.min(0.2, 0.05 + dist * 0.05);
    const nx = lerp(cur.x, tgt.x, t);
    const ny = lerp(cur.y, tgt.y, t);
    cameraPosRef.current = { x: nx, y: ny };

    // compute pixel offsets like original logic but use current lerped pos
    const offsetX = (20 - nx) * 0.5 + 20;   //1
    const offsetY = (-20 - ny) * 0.5 - 225;  //-8.5
    const newTransform = `translate(${offsetX}px, ${offsetY}px) scale(${zoomLevel})`;


    if (dungeonRef.current && dungeonRef.current.style.transform !== newTransform) {
      dungeonRef.current.style.transform = newTransform;
      setCameraTransform(newTransform);
    }

    // stop when close enough
    if (Math.abs(tgt.x - nx) > 0.01 || Math.abs(tgt.y - ny) > 0.01) {
      cameraRafRef.current = requestAnimationFrame(step);
    } else {
      cameraRafRef.current = null;
    }
  }
  cameraRafRef.current = requestAnimationFrame(step);
}
function stopCameraLoop() {
  if (cameraRafRef.current) {
    cancelAnimationFrame(cameraRafRef.current);
    cameraRafRef.current = null;
  }
}

function revealTile(x, y) {
  setExploredTiles(prev => {
    const next = new Set(prev);
    next.add(tileKey(Math.floor(x), Math.floor(y)));
    return next;
  });
}

// reveal every tile inside a room rectangle
function revealRoom(room) {
  if (!room) return;
  setExploredTiles(prev => {
    const next = new Set(prev);
    for (let yy = room.y; yy < room.y + room.h; yy++) {
      for (let xx = room.x; xx < room.x + room.w; xx++) {
        next.add(tileKey(xx, yy));
      }
    }
    return next;
  });
}

// if player enters a room, reveal the whole room
function revealRoomIfEntered(pos) {
  if (!roomsState || roomsState.length === 0) return;
  const r = roomsState.find(room =>
    pos.x >= room.x && pos.x < room.x + room.w &&
    pos.y >= room.y && pos.y < room.y + room.h
  );
  if (r) revealRoom(r);
}

// draw minimap to canvas (simple, fast)
function drawMinimap() {
  const canvas = minimapCanvasRef.current;
  if (!canvas || !dungeon || dungeon.length === 0) return;
  const ctx = canvas.getContext('2d');
  const rows = dungeon.length;
  const cols = dungeon[0].length;
  canvas.width = minimapSize;
  canvas.height = minimapSize;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // compute tile size and center offset to fit dungeon into canvas
  const tileW = Math.max(1, Math.floor(minimapSize / cols));
  const tileH = Math.max(1, Math.floor(minimapSize / rows));
  const t = Math.max(1, Math.min(tileW, tileH));
  const mapW = t * cols;
  const mapH = t * rows;
  const offX = Math.floor((canvas.width - mapW) / 2);
  const offY = Math.floor((canvas.height - mapH) / 2);
// draw explored tiles, walls and floors
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const k = tileKey(x, y);
      const explored = exploredTiles.has(k);
      const px = offX + x * t;
      const py = offY + y * t;

      if (!explored) {
        // fog (semi-transparent dark)
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(px, py, t, t);
        continue;
      }

      const cell = dungeon[y][x];
      if (cell === 'W') {
        ctx.fillStyle = 'rgba(80,80,80,0.95)'; // wall color
      } else if (cell === 'S') {
        ctx.fillStyle = 'rgba(220,200,50,0.95)'; // stairs color
      } else {
        ctx.fillStyle = 'rgba(170,200,220,0.95)'; // floor color
      }
      ctx.fillRect(px, py, t, t);
    }
  }

  // draw items / currency (optional small dots)
  if (itemTiles && itemTiles.length) {
    ctx.fillStyle = 'rgba(255,200,0,0.95)';
    itemTiles.forEach(it => {
      const k = tileKey(Math.floor(it.x), Math.floor(it.y));
      if (!exploredTiles.has(k)) return;
      const px = offX + Math.floor(it.x) * t;
      const py = offY + Math.floor(it.y) * t;
      ctx.fillRect(px + Math.floor(t/3), py + Math.floor(t/3), Math.max(1, Math.floor(t/3)), Math.max(1, Math.floor(t/3)));
    });
  }

  // draw stairs prominently if explored
  if (stairs) {
    const k = tileKey(stairs.x, stairs.y);
    if (exploredTiles.has(k)) {
      ctx.fillStyle = 'rgba(255,220,100,1)';
      ctx.fillRect(offX + stairs.x * t, offY + stairs.y * t, t, t);
    }
  }

  // draw player as a small circle on top
  if (playerPos) {
    const px = offX + Math.floor(playerPos.x) * t + t/2;
    const py = offY + Math.floor(playerPos.y) * t + t/2;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(220,60,60,1)';
    ctx.arc(px, py, Math.max(1, t/2.2), 0, Math.PI * 2);
    ctx.fill();
  }

  // subtle border
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.strokeRect(offX + 0.5, offY + 0.5, mapW - 1, mapH - 1);
}

// ensure minimap redraws when relevant state changes
React.useEffect(() => {
  drawMinimap();
}, [dungeon, exploredTiles, playerPos, stairs, itemTiles, minimapSize]);

// when player moves, reveal tile and possibly whole room
React.useEffect(() => {
  if (!dungeon || dungeon.length === 0) return;
  revealTile(playerPos.x, playerPos.y);
  revealRoomIfEntered(playerPos);
}, [playerPos, roomsState]);

// Insert spawnProjectile helper (adds and animates a projectile using rAF)
function lerp(a, b, t) { return a + (b - a) * t; }
function arcOffset(t, arcHeight) { return 4 * arcHeight * t * (1 - t); }

function spawnProjectile(opts) {
  const { start, end, sprite, duration = 700, arcHeight = 2 } = opts;
  const id = 'proj_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);
  const startTs = performance.now();
  let animFrameId = null;
  let timeoutId = null;
  
  // add initial projectile
  setProjectiles(prev => [...prev, { id, sprite, x: playerPos.x + 0.25, y: playerPos.y + 0.25 }]);
  
  function step(now) {
    const elapsed = now - startTs;
    const t = Math.min(1, elapsed / duration);
    const x = lerp(start.x, end.x, t);
    const y = lerp(start.y, end.y, t) - arcOffset(t, arcHeight);

    // Only update the specific projectile using findIndex for efficiency
    setProjectiles(prev => {
      const idx = prev.findIndex(p => p.id === id);
      if (idx === -1) return prev;
      const updated = [...prev];
      updated[idx] = { ...updated[idx], x, y };
      return updated;
    });

    if (t < 1) {
      animFrameId = requestAnimationFrame(step);
    } else {
      // remove after a short delay
      timeoutId = setTimeout(() => setProjectiles(prev => prev.filter(p => p.id !== id)), 50);
    }
  }

  animFrameId = requestAnimationFrame(step);
  
  // Return cleanup function
  return () => {
    if (animFrameId !== null) cancelAnimationFrame(animFrameId);
    if (timeoutId !== null) clearTimeout(timeoutId);
  };
}

function itemThrown(item, id) {
  playSound(affirmativesfx);
  if (item.name === itemEquipped && itemEquippedId === id) {
    setItemEquipped('');
    setItemEquippedId(null);
    console.log('Item unequipped because it was thrown', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
  }
  else {
    console.log('Item not unequipped because it was thrown', 'Id:', id, 'Itemequipped', itemEquipped, 'ItemequippedId:', itemEquippedId);
  }
    const startPos = { x: playerPos.x + 0.25, y: playerPos.y}; // center of player's tile
    const dir = lastDirectionRef.current || 'right';
    const dirMap = {
      up: { x: 0, y: -6 },
      down: { x: 0, y: 6 },
      left: { x: -6, y: 0 },
      right: { x: 6, y: 0 },
      'up-left': { x: -4, y: -4 },
      'up-right': { x: 4, y: -4 },
      'down-left': { x: -4, y: 4 },
      'down-right': { x: 4, y: 4 }
    };
    const wallChecks = {
      up: { x: 0, y: -1 },
      down: { x: 0, y: 1 },
      left: { x: -1, y: 0 },
      right: { x: 1, y: 0 },
      'up-left': { x: -1, y: -1 },
      'up-right': { x: 1, y: -1 },
      'down-left': { x: -1, y: 1 },
      'down-right': { x: 1, y: 1 }
    };
    const delta = dirMap[dir] || dirMap.right;
    const wallCheck1 = wallChecks[dir] || wallChecks.right;
    const wallCheck2 = { x: wallCheck1.x * 2, y: wallCheck1.y * 2 };
    const wallCheck3 = { x: wallCheck1.x * 3, y: wallCheck1.y * 3 };
    const wallCheck4 = { x: wallCheck1.x * 4, y: wallCheck1.y * 4 };
    const wallCheck5 = { x: wallCheck1.x * 5, y: wallCheck1.y * 5 };
    const wallCheck6 = { x: wallCheck1.x * 6, y: wallCheck1.y * 6 };
    verifyPlayerPosition(playerPosRef.current.x, playerPosRef.current.y)
    enemy1 ? verifyEnemyPosition(enemy1PosRef.current.x, enemy1PosRef.current.y, 1) : 0
    enemy2 ? verifyEnemyPosition(enemy2PosRef.current.x, enemy2PosRef.current.y, 2) : 0
    enemy3 ? verifyEnemyPosition(enemy3PosRef.current.x, enemy3PosRef.current.y, 3) : 0
    enemy4 ? verifyEnemyPosition(enemy4PosRef.current.x, enemy4PosRef.current.y, 4) : 0
    enemy5 ? verifyEnemyPosition(enemy5PosRef.current.x, enemy5PosRef.current.y, 5) : 0
    enemy6 ? verifyEnemyPosition(enemy6PosRef.current.x, enemy6PosRef.current.y, 6) : 0
    enemy7 ? verifyEnemyPosition(enemy7PosRef.current.x, enemy7PosRef.current.y, 7) : 0
    enemy8 ? verifyEnemyPosition(enemy8PosRef.current.x, enemy8PosRef.current.y, 8) : 0
    // Adjust delta if there's a wall in the way
    if (dungeon[playerPos.y + wallCheck1.y][playerPos.x + wallCheck1.x] === 'W') {
      delta.x = wallCheck1.x - wallCheck1.x;
      delta.y = wallCheck1.y - wallCheck1.y;
    }

    else if (enemy1 && playerPos.y + wallCheck1.y === enemy1PosRef.current.y && playerPos.x + wallCheck1.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck1.y === enemy2PosRef.current.y && playerPos.x + wallCheck1.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck1.y === enemy3PosRef.current.y && playerPos.x + wallCheck1.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck1.y === enemy4PosRef.current.y && playerPos.x + wallCheck1.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck1.y === enemy5PosRef.current.y && playerPos.x + wallCheck1.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck1.y === enemy6PosRef.current.y && playerPos.x + wallCheck1.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck1.y === enemy7PosRef.current.y && playerPos.x + wallCheck1.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck1.y === enemy8PosRef.current.y && playerPos.x + wallCheck1.x === enemy8PosRef.current.x){
      delta.x = wallCheck1.x;
      delta.y = wallCheck1.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck2.y][playerPos.x + wallCheck2.x] === 'W') {
      delta.x = wallCheck2.x - wallCheck1.x;
      delta.y = wallCheck2.y - wallCheck1.y;
    }

    else if (enemy1 && playerPos.y + wallCheck2.y === enemy1PosRef.current.y && playerPos.x + wallCheck2.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck2.y === enemy2PosRef.current.y && playerPos.x + wallCheck2.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck2.y === enemy3PosRef.current.y && playerPos.x + wallCheck2.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck2.y === enemy4PosRef.current.y && playerPos.x + wallCheck2.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck2.y === enemy5PosRef.current.y && playerPos.x + wallCheck2.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck2.y === enemy6PosRef.current.y && playerPos.x + wallCheck2.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck2.y === enemy7PosRef.current.y && playerPos.x + wallCheck2.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck2.y === enemy8PosRef.current.y && playerPos.x + wallCheck2.x === enemy8PosRef.current.x){
      delta.x = wallCheck2.x;
      delta.y = wallCheck2.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck3.y][playerPos.x + wallCheck3.x] === 'W') {
      delta.x = wallCheck3.x - wallCheck1.x;
      delta.y = wallCheck3.y - wallCheck1.y;
    }

    else if (enemy1 && playerPos.y + wallCheck3.y === enemy1PosRef.current.y && playerPos.x + wallCheck3.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck3.y === enemy2PosRef.current.y && playerPos.x + wallCheck3.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck3.y === enemy3PosRef.current.y && playerPos.x + wallCheck3.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck3.y === enemy4PosRef.current.y && playerPos.x + wallCheck3.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck3.y === enemy5PosRef.current.y && playerPos.x + wallCheck3.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck3.y === enemy6PosRef.current.y && playerPos.x + wallCheck3.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck3.y === enemy7PosRef.current.y && playerPos.x + wallCheck3.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck3.y === enemy8PosRef.current.y && playerPos.x + wallCheck3.x === enemy8PosRef.current.x){
      delta.x = wallCheck3.x;
      delta.y = wallCheck3.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck4.y][playerPos.x + wallCheck4.x] === 'W') {
      delta.x = wallCheck4.x - wallCheck1.x;
      delta.y = wallCheck4.y - wallCheck1.y;
    }

    else if (enemy1 && playerPos.y + wallCheck4.y === enemy1PosRef.current.y && playerPos.x + wallCheck4.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck4.y === enemy2PosRef.current.y && playerPos.x + wallCheck4.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck4.y === enemy3PosRef.current.y && playerPos.x + wallCheck4.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck4.y === enemy4PosRef.current.y && playerPos.x + wallCheck4.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck4.y === enemy5PosRef.current.y && playerPos.x + wallCheck4.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck4.y === enemy6PosRef.current.y && playerPos.x + wallCheck4.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck4.y === enemy7PosRef.current.y && playerPos.x + wallCheck4.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck4.y === enemy8PosRef.current.y && playerPos.x + wallCheck4.x === enemy8PosRef.current.x){
      delta.x = wallCheck4.x;
      delta.y = wallCheck4.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck5.y][playerPos.x + wallCheck5.x] === 'W') {
      delta.x = wallCheck5.x - wallCheck1.x;
      delta.y = wallCheck5.y - wallCheck1.y;
    }

    else if (enemy1 && playerPos.y + wallCheck5.y === enemy1PosRef.current.y && playerPos.x + wallCheck5.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck5.y === enemy2PosRef.current.y && playerPos.x + wallCheck5.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck5.y === enemy3PosRef.current.y && playerPos.x + wallCheck5.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck5.y === enemy4PosRef.current.y && playerPos.x + wallCheck5.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck5.y === enemy5PosRef.current.y && playerPos.x + wallCheck5.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck5.y === enemy6PosRef.current.y && playerPos.x + wallCheck5.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck5.y === enemy7PosRef.current.y && playerPos.x + wallCheck5.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck5.y === enemy8PosRef.current.y && playerPos.x + wallCheck5.x === enemy8PosRef.current.x){
      delta.x = wallCheck5.x;
      delta.y = wallCheck5.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck6.y][playerPos.x + wallCheck6.x] === 'W') {
      delta.x = wallCheck6.x - wallCheck1.x;
      delta.y = wallCheck6.y - wallCheck1.y;
    }

    else if (enemy1 && playerPos.y + wallCheck6.y === enemy1PosRef.current.y && playerPos.x + wallCheck6.x === enemy1PosRef.current.x || enemy2 && playerPos.y + wallCheck6.y === enemy2PosRef.current.y && playerPos.x + wallCheck6.x === enemy2PosRef.current.x || enemy3 && playerPos.y + wallCheck6.y === enemy3PosRef.current.y && playerPos.x + wallCheck6.x === enemy3PosRef.current.x || enemy4 && playerPos.y + wallCheck6.y === enemy4PosRef.current.y && playerPos.x + wallCheck6.x === enemy4PosRef.current.x || enemy5 && playerPos.y + wallCheck6.y === enemy5PosRef.current.y && playerPos.x + wallCheck6.x === enemy5PosRef.current.x || enemy6 && playerPos.y + wallCheck6.y === enemy6PosRef.current.y && playerPos.x + wallCheck6.x === enemy6PosRef.current.x || enemy7 && playerPos.y + wallCheck6.y === enemy7PosRef.current.y && playerPos.x + wallCheck6.x === enemy7PosRef.current.x || enemy8 && playerPos.y + wallCheck6.y === enemy8PosRef.current.y && playerPos.x + wallCheck6.x === enemy8PosRef.current.x){
      delta.x = wallCheck6.x;
      delta.y = wallCheck6.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemy1PosRef.current.x && playerPos.y + delta.y === enemy1PosRef.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemy2PosRef.current.x && playerPos.y + delta.y === enemy2PosRef.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemy3PosRef.current.x && playerPos.y + delta.y === enemy3PosRef.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemy4PosRef.current.x && playerPos.y + delta.y === enemy4PosRef.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemy5PosRef.current.x && playerPos.y + delta.y === enemy5PosRef.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemy6PosRef.current.x && playerPos.y + delta.y === enemy6PosRef.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemy7PosRef.current.x && playerPos.y + delta.y === enemy7PosRef.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemy8PosRef.current.x && playerPos.y + delta.y === enemy8PosRef.current.y){
        setTargeted('enemy8')
      }

    }


    const endPos = { x: startPos.x + delta.x, y: startPos.y + delta.y + 0.25 }; // slight y offset for better arc

    // avoid optional chaining (Babel inline): use safe access instead
    const spriteSrc = item.sprite || (ITEM_DEFS[item.name] && ITEM_DEFS[item.name].sprite) || Reviverseed;
    spawnProjectile({
      start: startPos,
      end: endPos,
      sprite: spriteSrc,
      duration: 1250,
      arcHeight: 2.2
    });

      setTimeout(() => addItemTile({ itemName: item.name, x: endPos.x - 0.25, y: endPos.y - 0.25 }), 1250);
    if (targetedRef.current !== 'enemy1' && targetedRef.current !== 'enemy2' && targetedRef.current !== 'enemy3' && targetedRef.current !== 'enemy4' && targetedRef.current !== 'enemy5' && targetedRef.current !== 'enemy6' && targetedRef.current !== 'enemy7' && targetedRef.current !== 'enemy8') {
      confirmEnemyBehavior(1, 0);
      console.log('Throwcase triggered');
    }
    else {
      console.log('Throwcase not triggered')
    }

  }
  function waitUntil(conditionFn, interval = 100) {
    return new Promise((resolve) => {
     const timer = setInterval(() => {
       if (conditionFn()) {
          clearInterval(timer);
          resolve();
        }
      }, interval);
   });
  }
  function generateText(text, color, text2, color2, skip) {
    const segments = Array.from(text).map(char => ({ char, color }));
    const segments2 = text2 !== null ? Array.from(text2).map(char2 => ({ char2, color2 })) : null 
    if (skip !== true){
    for (let i = 0; i < segments.length; i++){
      setTimeout(() => i === 0 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 1 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 2 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 3 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 4 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 5 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 6 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 7 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 8 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 9 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 10 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 11 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 12 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 13 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 14 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 15 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 16 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 17 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 18 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 19 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 20 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 21 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 22 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 23 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 24 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 25 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 26 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 27 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 28 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 29 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 30 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 31 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 32 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 33 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 34 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 35 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 36 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 37 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 38 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 39 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 40 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 41 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 42 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 43 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 44 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 45 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 46 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 47 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 48 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 49 ? setTextArray(prev => [...prev, segments[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === segments.length - 1 && text2 !== null && color2 !== null ? generateText("", "Black", text2, color2, true) : null, dialogSpeed * (i+1));
    }
  }
  else if (skip === true){
    for (let i = 0; i < segments2.length; i++){
      console.log('loop:', i, 'segments2:', segments2);
      setTimeout(() => i === 0 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 1 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 2 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 3 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 4 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 5 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 6 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 7 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 8 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 9 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 10 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 11 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 12 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 13 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 14 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 15 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 16 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 17 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 18 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 19 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 20 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 21 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 22 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 23 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 24 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 25 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 26 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 27 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 28 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 29 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 30 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 31 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 32 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 33 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 34 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 35 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 36 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 37 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 38 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 39 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 40 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 41 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 42 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 43 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 44 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 45 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 46 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 47 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 48 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 49 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 50 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 51 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 52 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 53 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 54 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 55 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 56 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 57 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 58 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 59 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 60 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 61 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 62 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 63 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 64 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 65 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 66 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 67 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 68 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 69 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 70 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 71 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 72 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 73 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 74 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 75 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 76 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 77 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 78 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 79 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 80 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 81 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 82 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 83 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 84 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 85 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 86 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 87 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 88 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 89 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 90 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 91 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 92 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 93 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 94 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 95 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 96 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 97 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 98 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 99 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 100 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 101 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 102 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 103 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 104 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 105 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 106 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 107 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 108 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 109 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 110 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 111 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 112 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 113 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 114 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 115 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 116 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 117 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 118 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 119 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 120 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 121 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 122 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 123 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 124 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 125 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 126 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 127 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 128 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 129 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 130 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 131 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 132 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 133 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 134 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 135 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 136 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 137 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 138 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 139 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 140 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 141 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 142 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 143 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 144 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 145 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 146 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 147 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 148 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 149 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
      setTimeout(() => i === 150 ? setTextArray(prev => [...prev, segments2[i]]) : null, dialogSpeed * (i+1));
  }
  }
  return segments
}
function getDialogLine(text){
  const spacing = parseFloat(textSpacing) || 0;
  let charArray = Array.from(text).map(char => ({ char }));
  let spaces = {count: charArray.filter(c => c.char === ' ').length, indices: charArray.map((c, i) => c.char === ' ' ? i : -1).filter(i => i !== -1)};
  let wordArray = [];
  let left = 0;
  let line = 1;
  for (let i = 0; i < spaces.count + 1; i++) {
  i === 0 ? wordArray.push(charArray.slice(0, spaces.indices[i]).map(c => c.char).join(''), { 'line': line }) : wordArray.push(charArray.slice(spaces.indices[i - 1] + 1, spaces.indices[i]).map(c => c.char).join(''), { 'line': 1 });
  }
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    let chars = Array.from(word).map(char => ({ char }));
    let wordWidth = chars.reduce((acc, c) => acc + (parseFloat(dimensionArray.Width[c.char] || '0') || 0) / 2 + spacing, 0);
    left += wordWidth;
    console.log(`Word: ${word}, Width: ${wordWidth}, Left: ${left}, Line: ${line}`);
    if (left >= topLineCapacity + 130 && line === 2) {
      wordArray = wordArray.slice(i).concat(wordArray.slice(0, i).map(w => ({ ...w, line: 3 })));
      line = 3;
    }
    else if (left >= topLineCapacity) {
      wordArray = wordArray.slice(i)
      line = 2;
    }
  }
  return {wordArray, charArray, spaces, left};
}
  function getDialogLeft(index, checkLeft, checkLine, returnLeft, returnLine, lines) {
    const spacing = parseFloat(textSpacing) || 0;
    let left = 0;
    let line = lines ? lines : 1;
    for (let i = 0; i < index; i++) {
      const char = textArray[i]?.char || textArray[i]?.char2 || '';
      const width = parseFloat(dimensionArray.Width[char] || '0') || 0;
      left += width / 2 + spacing;
      if (left >= topLineCapacity && line === 2){
      console.log("Reached Line 3")
      left -= topLineCapacity + 130
      line = 3
      if (returnLine === true && returnLeft === true) return [ lineRef.current, left + (topLineCapacity + 125) ]
      if (returnLine === true) return line
      if (returnLeft === true) return left + (topLineCapacity + 125)
      }
      else if (left >= topLineCapacity){
      left -= topLineCapacity + 130
      line = 2
      if (returnLine === true && returnLeft === true) return [ lineRef.current, left + (topLineCapacity + 125) ]
      if (returnLine === true) return line
      if (returnLeft === true) return left + (topLineCapacity + 125)
      }
    }
    if (returnLeft === true) return left
    if (returnLine === true) return line
    return `${left}px`;
  }

  function getLengthSummation(index) {
    const spacing = parseFloat(textSpacing) || 0;
    let totalLength = 0;
    for (let i = 0; i < index; i++) {
      const char = textArray[i]?.char || '';
      const width = parseFloat(dimensionArray.Width[char] || '0') || 0;
      totalLength += width / 2 + spacing;
    }
    return totalLength;
  }

  function getDialogTop(char) {
    const offset = verticalTranslationArray[char];
    return offset != null ? offset : '0px';
  }

React.useEffect(() => {
  setInventoryIndex(getInventoryIndex(inventory, ITEM_DEFS));
}, [inventory]);

// Flicker effect: toggle flickerFrame every 500ms if itemSelected is not null
  React.useEffect(() => {
  if (itemSelected === null) return;
  const interval = setInterval(() => {
    setFlickerFrame(prev => (prev === 0 ? 1 : 0));
  }, 500); // Flicker every 500ms
  return () => clearInterval(interval);
}, [itemSelected]);

function itemSelectDown() {
  if (natItemOrder > 1) {
    let newOrder = itemOrder + 1;
    if (newOrder > natItemOrder) newOrder = 1;
    setItemOrder(newOrder);
    playSound(selectsfx);
  }
}
function itemSelectUp() {
  if (natItemOrder > 1) {
    let newOrder = itemOrder - 1;
    if (newOrder < 1) newOrder = natItemOrder;
    setItemOrder(newOrder);
    playSound(selectsfx);
  }
}
function takeStarvationDamage() {
  setPlayerHP(prev => Math.max(prev - 1, 0));
}
function advanceTicks(){
  setHungerTicks(prev => prev + randInt(1, 3));
}
function depleteHungerAfterTicks(ticks){
  if (playerHunger/maxPlayerHunger < 0.2){
    setHungry(true);
    if (!warned){
      addLogMessage("Vaporeon is starting to get hungry...");
      setWarned(true);
    }
    if (playerHunger === 0){
      setIsStarving(true);
    }
  }
  else {
    setHungry(false);
    setWarned(false);
    setIsStarving(false);
  }
  if (ticks > 5) {
    if (isStarving){
      addLogMessage("Vaporeon is starving!");
      takeStarvationDamage();
      setHungerTicks(0);
    }
    else {
      depleteHunger(1);
      setHungerTicks(0);
    }
  }
}
function depleteHunger(amount) {
  setPlayerHunger(prev => Math.max(prev - amount, 0));
}
function handleUnderneath(newX, newY) {
const pickedCurrency = currencyTiles.find(tile => tile.x === newX && tile.y === newY);
        if (pickedCurrency) {
          setCurrency(curr => curr + pickedCurrency.amount);
          setCurrencyTiles(tiles => tiles.filter(tile => !(tile.x === newX && tile.y === newY)));
          addLogMessage(`Picked up ${pickedCurrency.amount} Pokedollars!`);
          return;
        }
        const itemHere = itemTiles.find(tile => tile.x === newX && tile.y === newY);
        if (itemHere) {
          if (!inventoryFull){
            addItemToInventory(itemHere.itemName || "Reviver Seed");
            setItemTiles(tiles => tiles.filter(tile => !(tile.x === newX && tile.y === newY)));
            setItemSelected(itemHere.id);
            setSelectedItemSprite(itemHere.sprite);
            addLogMessage(`Picked up ${itemHere.itemName || "Reviver Seed"}!`);
          }
          else if (inventoryFull){
            if (inventory.length < MAX_INVENTORY_SLOTS){
              setInventoryFull(false);
              addItemToInventory(itemHere.itemName || "Reviver Seed");
              setItemTiles(tiles => tiles.filter(tile => !(tile.x === newX && tile.y === newY)));
              setItemSelected(itemHere.id);
              addLogMessage(`Picked up ${itemHere.itemName || "Reviver Seed"}!`);
              return;
            }
            addLogMessage('Inventory full!');
          }
        }
      }

function increaseLevel(){
  setLevel(prev => prev + 1);
  setBaseMaxPlayerHP(prev => prev + 10);
  setBasePlayerHP(prev => Math.min(prev + 10, maxPlayerHP));
  setBasePlayerAttack(prev => prev + 2);
  setBasePlayerSpecialAttack(prev => prev + 3);
  setBasePlayerDefense(prev => prev + 2);
  setBasePlayerSpecialDefense(prev => prev + 3);
  setBasePlayerSpeed(prev => prev + 1);
  setLevelVfxIndex(0);
  setIsLevelingUp(true);
  setTimeout(() => {
    setIsLevelingUp(false);
  }, 2250); // Show level up for 2.25 seconds
  // Increase maxExp based on level
  const newMaxExp = Math.floor(100 * Math.pow(1.2, level - 1));
  setMaxExp(newMaxExp);
}
if (exp >= maxExp) {
  const overflow = exp - maxExp;
  setExp(overflow);
  increaseLevel();
}
function generateProceduralDungeon(width, height, options = {}) {
  const {
    roomAttempts = 120,
    minRoomSize = 5,
    maxRoomSize = 8,
    maxRooms = 8,
    minRooms = 4
  } = options;
  const dungeon = Array.from({ length: height }, () => Array(width).fill('W'));
  const rooms = [];
//*

for (let i = 0; i < roomAttempts && rooms.length < randInt(minRooms, maxRooms + 1); i++) {
    const w = randInt(minRoomSize, maxRoomSize + 1);
    const h = randInt(minRoomSize, maxRoomSize + 1);
    const x = randInt(6, width - w - 6);
    const y = randInt(6, height - h - 6);
    const newRoom = makeRoom(x, y, w, h);
    newRoom.id = rooms.length;
if (rooms.every(room => !roomsOverlap(newRoom, room))) {
      carveRoom(dungeon, newRoom);
      rooms.push(newRoom);
    }
  }
for (let i = 1; i < rooms.length; i++) {
    carveCorridor(dungeon, rooms[i - 1].center, rooms[i].center);
  }

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (dungeon[y][x] === 'F') dungeon[y][x] = getRandomFloorTile();
    }
  }
const lastRoom = rooms[rooms.length - 1];
  if (lastRoom) dungeon[lastRoom.center.y][lastRoom.center.x] = 'S';
const firstRoom = rooms[0] || { center: { x: Math.floor(width/2), y: Math.floor(height/2) } };
return {
    dungeon,
    playerStart: { x: firstRoom.center.x, y: firstRoom.center.y },
    rooms // <-- return rooms so caller can reveal whole rooms when entered
  };
}
React.useEffect(() => {
  generateDungeon();
}, [floor]);

React.useEffect(() => {
  lastDirectionRef.current = lastDirection;
  isPausedRef.current = isPaused;
  isWalkingRef.current = isWalking;
}, [lastDirection, isPaused, isWalking]);

React.useEffect(() => {
  setIdleSpriteIndex(0);
  setWalkSpriteIndex(0);
}, [lastDirection, isWalking]);

React.useEffect(() => {
const handleKeyDown = (e) => {
  if (showDialog && dialogKey === 0){
    if (e.key === 'Enter') {
          if (dialogIndex < debugStops.firstStop - 1 && !textSkippedRef.current && !textStoppedRef.current){
          setDialogIndex(debugStops.firstStop - 1);
          setTextSkipped(true);
          setTextStopped(true);
          }
          else if (dialogIndex === debugStops.firstStop - 1){
            setTextSkipped(false);
            setTextAdvanceAndRef(true);
          }
          else if (dialogIndex > debugStops.firstStop - 1 && dialogIndex < debugStops.secondStop - 1 && !textSkippedRef.current && !textStoppedRef.current){
            setDialogIndex(debugStops.secondStop - 1);
            setTextSkipped(true);
            setTextStopped(true);
          }
          else if (dialogIndex === debugStops.secondStop - 1){
            setTextSkipped(false);
            setTextAdvanceAndRef(true);
          }
          else if (dialogIndex > debugStops.secondStop - 1 && dialogIndex < debugStops.thirdStop - 1 && !textSkippedRef.current && !textStoppedRef.current){
            setDialogIndex(debugStops.thirdStop - 1);
            setTextSkipped(true);
            setTextStopped(true);
          }
          else if (dialogIndex === debugStops.thirdStop - 1){
            setTextSkipped(false);
            setTextAdvanceAndRef(true);
          }
          else if (dialogIndex > debugStops.thirdStop - 1 && dialogIndex < debugStops.fourtHPtop - 1 && !textSkippedRef.current && !textStoppedRef.current){
            setDialogIndex(debugStops.fourtHPtop - 1);
            setTextSkipped(true);
            setTextStopped(true);
          }
          else if (dialogIndex === debugStops.fourtHPtop - 1){
            setShowDialog(false)
            setDialogIndex(0);
            setTextSkipped(false);
        }
        return;
      }
    }
  if (showToolbox && !showItemActionMenu) {
    if (e.key === 'w') {
      itemSelectUp();
      return;
    }
    if (e.key === 's') {
      itemSelectDown();
      return;
    }
    // Optionally handle other toolbox-specific keys here
  }
  if (showToolbox && itemSelected !== null) {
    if (showItemActionMenu) {
      // Scroll through actions
      if (e.key === 'w') {
        setItemActionIndex(prev => (prev - 1 + itemActionsNormal.length) % itemActionsNormal.length);
        return;
      }
      if (e.key === 's') {
        setItemActionIndex(prev => (prev + 1) % itemActionsNormal.length);
        return;
      }
    }
      if (e.key === 'Enter') {
       if (!showItemActionMenu){
        setShowItemActionMenu(true);
        setItemActionIndex(0);
        return;
        }
      else if (showItemActionMenu){
        // Use the current value of itemActionIndex immediately
        const selectedAction = itemActionsNormal[itemActionIndex];

        if (selectedAction === 'Discard') {
          discardSelectedItem(inventory[itemOrder - 1].name, itemOrder - 1);
        } else if (selectedAction === 'Throw') {
          const idx = itemOrder - 1;
          const thrownItem = inventory[idx];
          if (!thrownItem) {
          } else {
            // remove one from stack or remove stack
            setInventory(prev => {
              if (idx < 0 || idx >= prev.length) return prev;
              const updated = [...prev];
              if (updated[idx].count > 1) {
                updated[idx].count -= 1;
              } else {
                updated.splice(idx, 1);
                setNatItemOrder(updated.length);
                setItemOrder(Math.max(1, updated.length));
              }
              if (updated.length < MAX_INVENTORY_SLOTS) setInventoryFull(false);
              return updated;
            });
      
            // visual / state effects (kept from previous logic)
            setIsSpinning(true);
            setShowItemActionMenu(false);
            setShowToolbox(false);
            setIsPaused(false);
            setTimeout(() => setIsSpinning(false), 1350);
            setTimeout(() => setIsWalking(true), 1400);
            setTimeout(() => setIsWalking(false), 1401);
      
            // actually throw the selected item
            itemThrown(thrownItem, itemOrder - 1);
          }
          } else if (selectedAction === 'Use') {
          useSelectedItem('player', inventory[itemOrder - 1].name, itemOrder - 1);
          setShowItemActionMenu(false);
          setShowToolbox(false);
          setIsPaused(false);
        }
      
        // Close action menu
        setShowItemActionMenu(false);
        return;
      
      }
    }

      if (e.key === 'Escape' && showItemActionMenu) {
        setShowItemActionMenu(false);
        return;
      }
      

  }
  
  if (e.key === 'Shift') {
    updateKeyState('shift', true); // Set Shift pressed state to true
    setShowIndicators(prev => !prev); // show indicators
    return;
  }

  let newX = playerPosRef.current.x;
  let newY = playerPosRef.current.y;

  // If toolbox is open, only handle item selection keys
  if (e.key === 'm' && !usingEther) {
    if (!showMoveSelector){
      setShowMoveSelector(true);
      return;
    }
    else {
      setShowMoveSelector(false);
      return;
    }
  }
  if (showMoveSelector) {
    e.preventDefault(); // Prevent default tab behavior
    if (e.key === 'w') {
      if (selectedMove !== 0) {
        setSelectedMove(0);
      }
      else {
        setSelectedMove(2);
      }
      return;
    }
    if (e.key === 'd') {
      if (selectedMove !== 1) {
        setSelectedMove(1);
      }
      else {
        setSelectedMove(3);
      }
      return;
    }
    if (e.key === 's') {
      if (selectedMove !== 2) {
        setSelectedMove(2);
      }
      else {
        setSelectedMove(0);
      }
      return;
    }
    if (e.key === 'a') {
      if (selectedMove !== 3) {
        setSelectedMove(3);
      }
      else {
        setSelectedMove(1);
      }
      return;
    }
    if (e.key === 'Enter') {
      const selected = moves[selectedMove];
      if (usingEther) {
        MOVE_DEFS[selected.name].ppcurr = MOVE_DEFS[selected.name].ppmax;
        setShowMoveSelector(false);
        setIsPaused(false);
        setUsingEther(false);
        addLogMessage('Restored PP of ' + selected.name + ' using Max Ether!');
        return;
      }
      else if (!usingEther){
        if (selected.name === 'Acid Armor') {
        setShowMoveSelector(false);
        setIsPaused(false);
        useMove(selectedMove);
        // Handle move selection logic here
      }
      if (selected.name === 'Aqua Tail') {
        setShowMoveSelector(false);
        setIsPaused(false);
        useMove(selectedMove);
        // Handle move selection logic here
      }
      if (selected.name === 'Water Pulse') {
        setShowMoveSelector(false);
        setIsPaused(false);
        // Handle move selection logic here
      }
      if (selected.name === 'Refresh') {
        setShowMoveSelector(false);
        setIsPaused(false);
        // Handle move selection logic here
      }
    }
      return;
    }
    // Optionally handle other move selector-specific keys here
    return;
  }
  
switch (e.key) {
case 'Escape': // Escape key to toggle pause
if (!showDialog){
setIsPaused(prev => !prev);
}
return;
break;
//up
case 'w':
if (isAiming){
setLastDirection('up');
}
else if (!showToolbox){ 
newY -= 1; // Move up unless Shift is pressed
updateKeyState('wHeld', true);
setLastDirection('up');
}
break;
case 'q':
//up left
if (isAiming){
  setLastDirection('up-left');
}
if (!showToolbox){
updateKeyState('qHeld', true);
newY -=1;
newX -=1;
setLastDirection('up-left');
}
break;
//down
case 's':
if (isAiming){
setLastDirection('down');
}
else if (!showToolbox){ 
newY += 1; // Move down unless Shift is pressed
updateKeyState('sHeld', true);
setLastDirection('down');
}
break;
case 'c':
//down right
if (isAiming){
  setLastDirection('down-right');
}
if (!showToolbox){
updateKeyState('cHeld', true);
newY +=1;
newX +=1;
setLastDirection('down-right');
}
break;
//left
case 'a':
if (isAiming){
setLastDirection('left');
}

else if (!showToolbox){ 
newX -= 1; // Move left unless Shift is pressed
updateKeyState('aHeld', true);
setLastDirection('left');
}
break;
case 'z':
if (isAiming){
setLastDirection('down-left');
}
//down left
if (!showToolbox){
updateKeyState('zHeld', true);
newY +=1;
newX -=1;
setLastDirection('down-left');
}
break;
//right
case 'd':
if (isAiming){
setLastDirection('right');
}
else if (!showToolbox){ 
newX += 1; // Move right unless Shift is pressed
updateKeyState('dHeld', true);
setLastDirection('right');
}
break;
case 'e':
if (isAiming){
  setLastDirection('up-right');
}
//up right
if (!showToolbox){
updateKeyState('eHeld', true);
newY -=1;
newX +=1;
setLastDirection('up-right');
}
break;
case 'p': // debug for exp
setShowDialog(true);
generateText("Eevee", "Yellow", ", have you heard what's going on in the Purity Forest? It has been said that almost all of the Pokemon who enter never return...", "White", false);
return
break;
case 'Shift': // Shift key to toggle aim mode
if (inDiagonalMode){
setInDiagonalMode(false);
}
case 'm':
  setKeyState(prev => ({ ...prev, m: true }));
break;
setIsAiming(prev => !prev);
return;
default:
return;
break;
case 'l':
//quick log
addItemToInventory('Sleep Seed');
addItemToInventory('Warp Seed');
console.log(getDialogLine("I'm a test string to see if the dialog line function works properly. It should split this into multiple lines if it exceeds the top line capacity."));
return;
  break;
}

// Check for collision with walls only if not paused and not holding Shift
const moveCheck = (() => {
  if (isAiming) return { ok: false, reason: 'isAiming' };
  if (isPaused) return { ok: false, reason: 'isPaused' };
  if (enemy1AttackingRef.current === true || enemy2AttackingRef.current === true || enemy3AttackingRef.current === true || enemy4AttackingRef.current === true || enemy5AttackingRef.current === true || enemy6AttackingRef.current === true || enemy7AttackingRef.current === true || enemy8AttackingRef.current === true) return { ok: false, reason: 'enemy attacking' };
  if (ks.current.sheld || ks.current.aheld || ks.current.dheld || ks.current.wheld || ks.current.qheld || ks.current.eheld || ks.current.zheld || ks.current.cheld) return {ok: false, reason: 'key held'}
  if (keyState.shift) return { ok: false, reason: 'shift held' };
  if (isSpinning) return { ok: false, reason: 'isSpinning' };
  if (usingAquaTail) return { ok: false, reason: 'usingAquaTail' };
  if (isSleeping) return { ok: false, reason: 'isSleeping' };
  if (showDialog) return { ok: false, reason: 'showDialog' };
  if (!Array.isArray(dungeon) || dungeon.length === 0) return { ok: false, reason: 'dungeon not initialized' };
  if (!dungeon[newY]) return { ok: false, reason: 'dungeon row undefined', rowLen: dungeon.length };
  const tile = dungeon[newY][newX];
  if (tile === 'W') return { ok: false, reason: 'wall', tile };
  if (enemy1 && enemy1Pos.x === newX && enemy1Pos.y === newY) return { ok: false, reason: 'enemy1', tile };
  if (enemy2 && enemy2Pos.x === newX && enemy2Pos.y === newY) return { ok: false, reason: 'enemy2', tile };
  if (enemy3 && enemy3Pos.x === newX && enemy3Pos.y === newY) return { ok: false, reason: 'enemy3', tile };
  if (enemy4 && enemy4Pos.x === newX && enemy4Pos.y === newY) return { ok: false, reason: 'enemy4', tile };
  if (enemy5 && enemy5Pos.x === newX && enemy5Pos.y === newY) return { ok: false, reason: 'enemy5', tile };
  if (enemy6 && enemy6Pos.x === newX && enemy6Pos.y === newY) return { ok: false, reason: 'enemy6', tile };
  if (enemy7 && enemy7Pos.x === newX && enemy7Pos.y === newY) return { ok: false, reason: 'enemy7', tile };
  if (enemy8 && enemy8Pos.x === newX && enemy8Pos.y === newY) return { ok: false, reason: 'enemy8', tile };
  if (typeof tile === 'undefined' || tile === null) return { ok: false, reason: 'tile undefined', tile };
  return { ok: true, reason: 'ok', tile };
})();

if (moveCheck.ok) {
  handleUnderneath(newX, newY);
  verifyPlayerPosition(newX, newY);
  setPlayerPos({ x: newX, y: newY });
  advanceTicks();
  depleteHungerAfterTicks(hungerTicks);
  setIsWalking(true);
  triggerWalkCooldown();
  updateCamera(newX, newY);
  confirmEnemyBehavior(1, 0);
} else {
  console.log('Movement blocked:', moveCheck.reason,
    'new:', newX, newY,
    'tile:', moveCheck.tile,
    'dungeonRows:', Array.isArray(dungeon) ? dungeon.length : 'N/A',
    'height/width:', height, width,
    'isAiming:', isAiming, 'isPaused:', isPaused, 'shift:', keyState.shift);
}

if (newX === stairs.x && newY === stairs.y) {
alert('You found the stairs! Onward!');
setFloor((prevFloor) => prevFloor + 1);
}
};

const handleKeyUp = (e) => {
if (e.key === 'q' && ks.current.qHeld){
updateKeyState('qHeld', false);
}
if (e.key === 'e' && ks.current.eHeld){
updateKeyState('eHeld', false);
}
if (e.key === 'z' && ks.current.zHeld){
updateKeyState('zHeld', false);
}
if (e.key === 'c' && ks.current.cHeld){
updateKeyState('cHeld', false);
}
if (e.key === 'Shift') {
updateKeyState('shift', false); // Set Shift pressed state to false
}
if (e.key === 'Enter') {
updateKeyState('Enter', false);
}
if (e.key === 'w') {
updateKeyState('wHeld', false);
}
if (e.key === 'a' && ks.current.aHeld) {
updateKeyState('aHeld', false);
}
if (e.key === 's' && ks.current.sHeld) {
updateKeyState('sHeld', false);
}
if (e.key === 'd' && ks.current.dHeld) {
updateKeyState('dHeld', false);
}
};

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
return () => {
window.removeEventListener('keydown', handleKeyDown);
window.removeEventListener('keyup', handleKeyUp);
};
}, [playerPos, stairs, dungeon, isPaused, keyState, showToolbox, itemOrder, natItemOrder, showItemActionMenu, itemActionIndex, isWalking, isSleeping, showMoveSelector, selectedMove, isSpinning, usingAquaTail, showDialog, dialogKey, dialogIndex, inventory, isAiming]);

// Replace multiple setInterval animation effects with this single rAF loop + preload
const ANIM_TIMINGS = {
  idle: 500,
  walk: 300,
  spin: 150,
  sleep: {
  player: 500,
  enemy: 500,
  },
  level: 150,
  buff: 150,
  DMG: 150,
  aquaTail: 150,
  rockThrow: 150,
  dialog: dialogSpeed === 'Slow' ? 100 : dialogSpeed === 'Fast' ? 50 : 75,
};

const animRafRef = React.useRef(null);
// keep a timestamp per animation so they don't interfere with each other
const lastAnimTsRef = React.useRef({
  idle: {
    player: 0,
    enemy: 0,
  },
  walk: 0,
  spin: 0,
  sleep: {
  player: 0,
  enemy: 0,
  },
  level: 0,
  buff: 0,
  DMG: 0,
  aquaTail: 0,
  rockThrow: 0,
  dialog: 0
});
const indicesRef = React.useRef({
  idle: {
    player: 0,
    enemy: 0,
  },
  walk: 0,
  spin: 0,
  sleep: {
  player: 0,
  enemy: 0,
  },
  level: 0,
  buff: 0,
  DMG: 0,
  aquaTail: 0,
  rockThrow: 0,
  dialog: 0
});

// Ensure refs reflect current flags/direction (some already exist above)

React.useEffect(() => {
  lastDirectionRef.current = lastDirection;
  isPausedRef.current = isPaused;
  isWalkingRef.current = isWalking;
}, [lastDirection, isPaused, isWalking]);

// Helper: convert raw.githubusercontent URLs to jsDelivr CDN and fallback on image errors
function cdnify(url) {
  try {
    const u = new URL(url);
    if (u.hostname && u.hostname.includes('raw.githubusercontent.com')) {
      // raw.githubusercontent.com/<user>/<repo>/refs/heads/<branch>/path/to/file
      const parts = u.pathname.split('/').filter(Boolean);
      // Expect at least: [user, repo, 'refs', 'heads', branch, ...path]
      if (parts.length >= 6 && parts[2] === 'refs' && parts[3] === 'heads') {
        const user = parts[0];
        const repo = parts[1];
        const branch = parts[4];
        const path = parts.slice(5).join('/');
        return `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}`;
      }
    }
     } catch (e) {
    // if parsing fails, fall through and return original
  }
  return url;
}

// NEW: robust normalizer + cdn converter for malformed raw URLs (handles both /refs/heads/ and raw/{user}/{repo}/{branch}/ forms
function normalizeAndCdn(url) {
  if (!url || typeof url !== 'string') return url;
  let s = url.trim();

  try {
    const u = new URL(s);
    const host = u.hostname || '';
    // If it's raw.githubusercontent, convert to jsDelivr and clean common malformations
    if (host.includes('raw.githubusercontent.com')) {
      const parts = u.pathname.split('/').filter(Boolean);
      let user, repo, branch, path;
      // handle raw like /user/repo/branch/...
      if (parts.length >= 4 && parts[2] !== 'refs') {
        user = parts[0];
        repo = parts[1];
        branch = parts[2];
        path = parts.slice(3).join('/');
      }
      // handle raw like /user/repo/refs/heads/branch/...
      else if (parts.length >= 6 && parts[2] === 'refs' && parts[3] === 'heads') {
        user = parts[0];
        repo = parts[1];
        branch = parts[4];
        path = parts.slice(5).join('/');
      } else {
        // fallback to the simple cdnify (keeps original if not convertible)
        return cdnify(s);
      }

      // remove accidental leading encoded spaces in segments (e.g. "/%20Foo.png")
      path = path.replace(/(^|\/)%20+/g, '$1');
      // compress multiple slashes
      path = path.replace(/\/+/g, '/');
      // return jsdelivr gh URL
      return `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}`;
    }
  } catch (e) {
    // ignore and fall back
  }
// not raw.githubusercontent — still return original
  return s;
}

// Apply normalization to known sprite collections and defs so preload uses CDN-safe URLs
(function normalizeAllSprites() {
  try {
    // Normalize enemy defs (nested frame objects and arrays)
    Object.keys(ENEMY_DEFS).forEach(enemyKey => {
      const e = ENEMY_DEFS[enemyKey];
      if (!e || !e.sprites) return;
      Object.keys(e.sprites).forEach(dir => {
        const frames = e.sprites[dir];
        if (!frames) return;
        // If frames is an array
        if (Array.isArray(frames)) {
          for (let i = 0; i < frames.length; i++) {
            frames[i] = normalizeAndCdn(frames[i]);
          }
        } else if (typeof frames === 'object') {
          // object like { frame1: url, frame2: url, ... }
          Object.keys(frames).forEach(fk => {
            frames[fk] = normalizeAndCdn(frames[fk]);
          });
        }
      });
    });
    // Normalize the many top-level arrays you use for Vaporeon/Lunatone etc.
    const spriteArrays = [
      vaporeonSprites, vaporeonLeftSprites, vaporeonRightSprites, vaporeonUpSprites,
      vaporeonDownWalkSprites, vaporeonUpWalkSprites, vaporeonLeftWalkSprites, vaporeonRightWalkSprites,
      vaporeonDownRightWalkSprites, vaporeonDownLeftWalkSprites, vaporeonUpRightWalkSprites, vaporeonUpLeftWalkSprites,
      vaporeonDownSpinSprites, vaporeonUpSpinSprites, vaporeonLeftSpinSprites, vaporeonRightSpinSprites,
      vaporeonDownLeftSpinSprites, vaporeonDownRightSpinSprites, vaporeonUpLeftSpinSprites, vaporeonUpRightSpinSprites,
      vaporeonSleepSprites,
      vaporeonAquaTailUpSprites, vaporeonAquaTailDownSprites, vaporeonAquaTailLeftSprites, vaporeonAquaTailRightSprites,
      vaporeonAquaTailUpRightSprites, vaporeonAquaTailUpLeftSprites, vaporeonAquaTailDownRightSprites, vaporeonAquaTailDownLeftSprites,
      lunatoneSprites, lunatoneUpSprites, lunatoneLeftSprites, lunatoneRightSprites,
      lunatoneUpRightSprites, lunatoneUpLeftSprites, lunatoneDownLeftSprites, lunatoneDownRightSprites, lunatoneSleepSprites,
      levelVfxFrames, buffVfxFrames,
      vaporeonUpSpinSprites, vaporeonRightSpinSprites // (repeat-safe)
    ];

    spriteArrays.forEach(arr => {
      if (!Array.isArray(arr)) return;
      for (let i = 0; i < arr.length; i++) {
        arr[i] = normalizeAndCdn(arr[i]);
      }
    });
    // Normalize some single URLs
    //if (typeof vaporeonPortraitNormal === 'string') vaporeonPortraitNormal = normalizeAndCdn(vaporeonPortraitNormal);
    //if (typeof Pokedollar === 'string') Pokedollar = normalizeAndCdn(Pokedollar);
    //if (typeof stairSprite === 'string') stairSprite = normalizeAndCdn(stairSprite);

    // Walls / bars
    [
      wallSpriteLeft, wallSpriteRight, wallSpriteUp, wallSpriteDown, cornerSpriteTopLeft,
      cornerSpriteTopRight, cornerSpriteBottomLeft, cornerSpriteBottomRight,
      enclosedWallSprite1, enclosedWallSprite2, enclosedWallSprite3, enclosedWallSprite4,
      innerCornerTopRight, innerCornerTopLeft, innerCornerBottomRight, innerCornerBottomLeft
    ].forEach((val, idx) => {
      // these constants are const in your file — if you prefer immutability, convert by reassigning their usages
      // (no-op here if unchanged). We mainly need ENEMY_DEFS and the arrays normalized.
    });

  } catch (e) {
    console.warn('Sprite normalization failed', e);
  }
})();

// Global image error listener: if an IMG using raw.githubusercontent fails (429 etc), retry via jsDelivr once.
window.addEventListener('error', function onImgError(e) {
  const t = e.target;
  if (!t || t.tagName !== 'IMG') return;
  const src = t.src || '';
  if (src.includes('raw.githubusercontent.com') && !t.dataset.__triedCdn) {
    t.dataset.__triedCdn = '1';
    t.src = cdnify(src);
  }
}, true);

// Preload arrays (call with array of urls) — use cdnify so preloads prefer CDN cached route
function preloadImages(urls = []) {
  urls.forEach(u => {
    if (!u) return;
    const img = new Image();
    img.src = cdnify(u);
    // also set onerror to try cdnify as an extra safety net (in case listener isn't triggered)
    img.onerror = function () {
      if (!img.dataset.__triedCdn) {
        img.dataset.__triedCdn = '1';
        img.src = cdnify(u);
      }
    };
  });
}

// Collect sprite URL arrays to preload (trim or extend as needed)
React.useEffect(() => {
  const allSprites = [
    ...vaporeonSprites,
    ...vaporeonLeftSprites,
    ...vaporeonRightSprites,
    ...vaporeonUpSprites,
    ...vaporeonDownLeftSprites,
    ...vaporeonDownRightSprites,
    ...vaporeonUpLeftSprites,
    ...vaporeonUpRightSprites,
    ...vaporeonDownWalkSprites,
    ...vaporeonUpWalkSprites,
    ...vaporeonLeftWalkSprites,
    ...vaporeonRightWalkSprites,
    ...vaporeonDownRightWalkSprites,
    ...vaporeonDownLeftWalkSprites,
    ...vaporeonUpRightWalkSprites,
    ...vaporeonUpLeftWalkSprites,
    ...vaporeonDownSpinSprites,
    ...vaporeonUpSpinSprites,
    ...vaporeonLeftSpinSprites,
    ...vaporeonRightSpinSprites,
    ...vaporeonDownLeftSpinSprites,
    ...vaporeonDownRightSpinSprites,
    ...vaporeonUpLeftSpinSprites,
    ...vaporeonUpRightSpinSprites,
    ...vaporeonSleepSprites,
    ...vaporeonAquaTailUpSprites,
    ...vaporeonAquaTailRightSprites,
    ...vaporeonAquaTailLeftSprites,
    ...vaporeonAquaTailDownSprites,
    ...vaporeonAquaTailUpRightSprites,
    ...vaporeonAquaTailUpLeftSprites,
    ...vaporeonAquaTailDownRightSprites,
    ...vaporeonAquaTailDownLeftSprites,
    ...lunatoneSprites,
    ...lunatoneLeftSprites,
    ...lunatoneRightSprites,
    ...lunatoneUpSprites,
    ...lunatoneUpRightSprites,
    ...lunatoneUpLeftSprites,
    ...lunatoneDownLeftSprites,
    ...lunatoneDownRightSprites,
    ...lunatoneSleepSprites,
    ...levelVfxFrames,
    ...buffVfxFrames,
  ];
  // Add single-file sprites
  const singleSprites = [Pokedollar, stairSprite, itemSelector, vaporeonPortraitNormal];
  singleSprites.forEach(u => { if (u) allSprites.push(normalizeAndCdn(u)); });

  // Add every hunger bar (100 -> 0), health bar (100 -> 0), exp bar (0 -> 100)
  // Uses eval so we don't have to hardcode every constant twice; safe inside this script.
  try {
    for (let i = 100; i >= 0; i--) {
      try {
        const h = eval('hungerBarComponent' + i);
        if (h) allSprites.push(normalizeAndCdn(h));
      } catch (e) { /* skip missing */ }
    }
    for (let i = 100; i >= 0; i--) {
      try {
        const h2 = eval('healthBarComponent' + i);
        if (h2) allSprites.push(normalizeAndCdn(h2));
      } catch (e) { /* skip missing */ }
    }
    for (let i = 0; i <= 100; i++) {
      try {
        const e = eval('expBarComponent' + i);
        if (e) allSprites.push(normalizeAndCdn(e));
      } catch (e) { /* skip missing */ }
    }
  } catch (e) {
    console.warn('Bar-preload loop failed', e);
  }

  // Deduplicate & preload
  const uniq = Array.from(new Set(allSprites.filter(Boolean)));
  preloadImages(uniq);
}, []);
// rAF animation driver
React.useEffect(() => {
  function step(ts) {
    // Idle
    const elapsedIdlePlayer = ts - (lastAnimTsRef.current.idle.player || 0);
    const elapsedIdleEnemy = ts - (lastAnimTsRef.current.idle.enemy || 0);
    if (elapsedIdleEnemy >= ANIM_TIMINGS.idle) {
        lastAnimTsRef.current.idle.enemy = ts;
        indicesRef.current.idle.enemy = (indicesRef.current.idle.enemy + 1) % (enemyType1 === 'Lunatone' ? lunatoneSprites.length : vaporeonSprites.length);
        if (enemy1Sleeping === false){
        setEnemy1IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy2Sleeping === false){
        setEnemy2IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy3Sleeping === false){
        setEnemy3IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy4Sleeping === false){
        setEnemy4IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy5Sleeping === false){
        setEnemy5IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy6Sleeping === false){
        setEnemy6IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy7Sleeping === false){
        setEnemy7IdleAnimIndex(indicesRef.current.idle.enemy);
        }
        if (enemy8Sleeping === false){
        setEnemy8IdleAnimIndex(indicesRef.current.idle.enemy);
      }
    }
    if (!isWalkingRef.current && !isSpinning && !isSleeping && !isPausedRef.current) {
      if (elapsedIdlePlayer >= ANIM_TIMINGS.idle) {
        lastAnimTsRef.current.idle.player = ts;
        indicesRef.current.idle.player = (indicesRef.current.idle.player + 1) % vaporeonSprites.length;
        setIdleSpriteIndex(indicesRef.current.idle.player);
      }
    }

    // Walk
    const elapsedWalk = ts - (lastAnimTsRef.current.walk || 0);
    if (isWalkingRef.current && !isPausedRef.current) {
      if (elapsedWalk >= ANIM_TIMINGS.walk) {
        lastAnimTsRef.current.walk = ts;
        indicesRef.current.walk = (indicesRef.current.walk + 1) % vaporeonDownWalkSprites.length;
        setWalkSpriteIndex(indicesRef.current.walk);
      }
    }

    // Dialog (overrides other animations)
    const elapsedDialog = ts - (lastAnimTsRef.current.dialog || 0);
    if (showDialogRef.current) {
        if (textAdvanceRef.current) {
          indicesRef.current.dialog = (indicesRef.current.dialog + 1) % textArray.length;
          setDialogIndex(indicesRef.current.dialog);
          setTextAdvanceAndRef(false);
          setTextStopped(false);
          setTextSkipped(false);
        }
        if (textSkippedRef.current && !textStoppedRef.current) {
          if (indicesRef.current.dialog < debugStops.firstStop - 1){
          indicesRef.current.dialog = textArray.length;
          setDialogIndex(indicesRef.current.dialog);
          setTextSkipped(false);
          }
        }
        else if (!textStoppedRef.current && elapsedDialog >= ANIM_TIMINGS.dialog) {
        lastAnimTsRef.current.dialog = ts;
        if (dialogKey === 0) {
          const next = (indicesRef.current.dialog + 1) % textArray.length;
            indicesRef.current.dialog = next;
            setDialogIndex(indicesRef.current.dialog);
            setTextStopped(true);
            setTextSkipped(false);
        } 
      }
    }
    // Aqua Tail (use its own timer so spin/idle won't block it)
    const elapsedAqua = ts - (lastAnimTsRef.current.aquaTail || 0);
    if (usingAquaTail) {
      if (elapsedAqua >= ANIM_TIMINGS.aquaTail) {
        lastAnimTsRef.current.aquaTail = ts;
        // use a baseline length that covers all aqua-tail directions (they generally match)
        indicesRef.current.aquaTail = (indicesRef.current.aquaTail + 1) % vaporeonAquaTailDownLeftSprites.length;
        setAquaTailIndex(indicesRef.current.aquaTail);
      }
      // spin frames while aqua-tail is active (separate timer)
      const elapsedSpinDuringAqua = ts - (lastAnimTsRef.current.spin || 0);
      if (elapsedSpinDuringAqua >= ANIM_TIMINGS.aquaTail) {
        lastAnimTsRef.current.spin = ts;
        indicesRef.current.spin = (indicesRef.current.spin + 1) % vaporeonDownSpinSprites.length;
        setSpinSpriteIndex(indicesRef.current.spin);
      }
    }

    // Spin (when not tied to aqua tail)
    const elapsedSpin = ts - (lastAnimTsRef.current.spin || 0);
    if (isSpinning && !usingAquaTail) {
      if (elapsedSpin >= ANIM_TIMINGS.spin) {
        lastAnimTsRef.current.spin = ts;
        indicesRef.current.spin = (indicesRef.current.spin + 1) % vaporeonDownSpinSprites.length;
        setSpinSpriteIndex(indicesRef.current.spin);
      }
    }

    // Sleep
    const elapsedSleepPlayer = ts - (lastAnimTsRef.current.sleep.player || 0);
    const elapsedSleepEnemy = ts - (lastAnimTsRef.current.sleep.enemy || 0);
    if (isSleeping) {
      if (elapsedSleepPlayer >= ANIM_TIMINGS.sleep.player) {
        lastAnimTsRef.current.sleep.player = ts;
        indicesRef.current.sleep.player = (indicesRef.current.sleep.player + 1) % vaporeonSleepSprites.length;
        setSleepSpriteIndex(indicesRef.current.sleep.player);
      }
    }
    if (enemy1Sleeping || enemy2Sleeping || enemy3Sleeping || enemy4Sleeping || enemy5Sleeping || enemy6Sleeping || enemy7Sleeping || enemy8Sleeping) {
      if (elapsedSleepEnemy >= ANIM_TIMINGS.sleep.enemy) {
        lastAnimTsRef.current.sleep.enemy = ts;
        indicesRef.current.sleep.enemy = (indicesRef.current.sleep.enemy + 1) % vaporeonSleepSprites.length;
        setSleepSpriteIndex(indicesRef.current.sleep.enemy);
      }
    }


    // Rock Throw VFX
    const elapsedRockThrow = ts - (lastAnimTsRef.current.rockThrow || 0);
    if (rockThrowRef.current === true) {
      if (elapsedRockThrow >= ANIM_TIMINGS.rockThrow) {
        lastAnimTsRef.current.rockThrow = ts;
        indicesRef.current.rockThrow = (indicesRef.current.rockThrow + 1) % rockThrowVfxFrames.length;
        setRockThrowIndex(indicesRef.current.rockThrow);
      }  
    }
    else {
      // reset rock throw animation when not active
      lastAnimTsRef.current.rockThrow = ts;
      indicesRef.current.rockThrow = 0;
      setRockThrowIndex(0);
    }

    // Level VFX
    const elapsedLevel = ts - (lastAnimTsRef.current.level || 0);
    if (isLevelingUp) {
      if (elapsedLevel >= ANIM_TIMINGS.level) {
        lastAnimTsRef.current.level = ts;
        indicesRef.current.level = (indicesRef.current.level + 1) % levelVfxFrames.length;
        setLevelVfxIndex(indicesRef.current.level);
      }
    }

    // Buff VFX
    const elapsedBuff = ts - (lastAnimTsRef.current.buff || 0);
    if (isBuffing) {
      if (elapsedBuff >= ANIM_TIMINGS.buff) {
        lastAnimTsRef.current.buff = ts;
        indicesRef.current.buff = (indicesRef.current.buff + 1) % buffVfxFrames.length;
        setBuffVfxIndex(indicesRef.current.buff);
      }
    }
    // DMG VFX
    const elapsedDMG = ts - (lastAnimTsRef.current.DMG || 0);
    if (DMGVfx0Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx0Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx0Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx1Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx1Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx1Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx2Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx2Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx2Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx3Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx3Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx3Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx4Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx4Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx4Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx5Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx5Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx5Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx6Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx6Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx6Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx7Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx7Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx7Index(indicesRef.current.DMG);
      }
    }
    if (DMGVfx8Ref.current.Active === true) {
      if (elapsedDMG >= ANIM_TIMINGS.DMG) {
      lastAnimTsRef.current.DMG = ts;
      DMGVfx8Ref.current.DMG === 1 ? indicesRef.current.DMG = (indicesRef.current.DMG + 1) % DMG1VfxFrames.length : null;
      setDMGVfx8Index(indicesRef.current.DMG);
      }
    }
    animRafRef.current = requestAnimationFrame(step);
  }

  animRafRef.current = requestAnimationFrame(step);
  return () => {
    if (animRafRef.current) cancelAnimationFrame(animRafRef.current);
    animRafRef.current = null;
  };
}, [isSpinning, isSleeping, isLevelingUp, isBuffing, usingAquaTail, dialogIndex, dialogSpeed, rockThrow]); // flags that change animation sets

React.useEffect(()=> {
  if (!showDialog) {
    // Reset dialog animation state
    lastAnimTsRef.current.dialog = 0;
    indicesRef.current.dialog = 0;
    setTextSkipped(false);
    setTextStopped(false);
    setTextAdvanceAndRef(false);
    setDialogIndex(0);
  }
}, [showDialog, textSkipped]);
React.useEffect(() => {
  if (!usingAquaTail) return;
  const now = performance.now();
  lastAnimTsRef.current.aquaTail = now;
  indicesRef.current.aquaTail = 0;
  setAquaTailIndex(0);

  // Reset spin timing/index used while aqua-tail is active to avoid collisions
  lastAnimTsRef.current.spin = now;
  indicesRef.current.spin = 0;
  setSpinSpriteIndex(0);
}, [usingAquaTail]);

// When a spin animation is explicitly activated, reset its timer/index so it doesn't jump
React.useEffect(() => {
  if (!isSpinning) return;
  const now = performance.now();
  lastAnimTsRef.current.spin = now;
  indicesRef.current.spin = 0;
  setSpinSpriteIndex(0);
}, [isSpinning]);


React.useEffect(() => {
  if (DMGVfx0Ref.current.Active === true || DMGVfx1Ref.current.Active === true || DMGVfx2Ref.current.Active === true || DMGVfx3Ref.current.Active === true || DMGVfx4Ref.current.Active === true || DMGVfx5Ref.current.Active === true || DMGVfx6Ref.current.Active === true || DMGVfx7Ref.current.Active === true || DMGVfx8Ref.current.Active === true) return;
  const now = performance.now();
  lastAnimTsRef.current.DMG = now;
  indicesRef.current.DMG = 0;
  setDMGVfx0Index(0);
  setDMGVfx1Index(0);
  setDMGVfx2Index(0);
  setDMGVfx3Index(0);
  setDMGVfx4Index(0);
  setDMGVfx5Index(0);
  setDMGVfx6Index(0);
  setDMGVfx7Index(0);
  setDMGVfx8Index(0);
}, [DMGVfx0Ref.current.Active, DMGVfx1Ref.current.Active, DMGVfx2Ref.current.Active, DMGVfx3Ref.current.Active, DMGVfx4Ref.current.Active, DMGVfx5Ref.current.Active, DMGVfx6Ref.current.Active, DMGVfx7Ref.current.Active, DMGVfx8Ref.current.Active]);

const generateDungeon = () => {
   const stateWidth = width, stateHeight = height;
   const { dungeon: newDungeon, playerStart, rooms } = generateProceduralDungeon(stateWidth, stateHeight);
 
   // CRITICAL: Clear all accumulated state on floor change to prevent frame drops
   // Clear projectiles that may have accumulated
   setProjectiles([]);
   
   // Clear animation timers and indices to prevent stale references from previous floors
   lastAnimTsRef.current = {
     idle: { player: 0, enemy: 0 },
     walk: 0,
     spin: 0,
     sleep: { player: 0, enemy: 0 },
     level: 0,
     buff: 0,
     aquaTail: 0,
     rockThrow: 0,
     DMG: 0,
     dialog: 0
   };
   indicesRef.current = {
     idle: { player: 0, enemy: 0 },
     walk: 0,
     spin: 0,
     sleep: { player: 0, enemy: 0 },
     level: 0,
     buff: 0,
     aquaTail: 0,
     rockThrow: 0,
     dialog: 0,
     DMG: 0
   };
   
   // Clear log messages for clean floor transition
   setActionLog([]);
   
   setExploredTiles(() => {
     // ensure new Set object so drawMinimap treats it as change
     return new Set();
   });
   if (minimapCanvasRef.current) {
     const c = minimapCanvasRef.current;
     const ctx = c.getContext && c.getContext('2d');
     c.width = minimapSize;
     c.height = minimapSize;
     if (ctx) ctx.clearRect(0, 0, c.width, c.height);
   }

  // Find stairs position
  let stairX = 0, stairY = 0;
  for (let y = 0; y < stateHeight; y++) {
    for (let x = 0; x < stateWidth; x++) {
      if (newDungeon[y][x] === 'S') {
        stairX = x;
        stairY = y;
      }
    }
  }
  const spawnedAll = [];
  rooms.forEach(room => {
    // spawn up to enemyCount for this room and capture returned enemies (avoid relying on room.id)
    const spawned = [];
    for (let i = 0; i < enemyCount; i++) {
      // choose an enemy type safely
      const types = Object.keys(ENEMY_DEFS);
      const chosen = types[randInt(0, types.length)] || types[0];
      const e = spawnEnemy(newDungeon, room, chosen);
      if (e){ 
        spawnedAll.push(e);
        spawned.push(e);
      }
    }
  setEnemies(spawnedAll);
  setEnemiesState(spawnedAll);
  setEnemyHereTiles(spawnedAll.map(en => ({ x: en.pos.x, y: en.pos.y, sprite: en.sprites && en.sprites.downIdle ? en.sprites.downIdle.frame1 : null })));

      // populate per-slot enemy flags/positions (up to 8)
      const first8 = spawnedAll.slice(0, 8);
      const e1 = first8[0] || null, e2 = first8[1] || null, e3 = first8[2] || null, e4 = first8[3] || null;
  const e5 = first8[4] || null, e6 = first8[5] || null, e7 = first8[6] || null, e8 = first8[7] || null;
      setEnemyType1(e1 ? e1.key : null);
      setEnemyType2(e2 ? e2.key : null);
      setEnemyType3(e3 ? e3.key : null);
      setEnemyType4(e4 ? e4.key : null);
      setEnemyType5(e5 ? e5.key : null);
      setEnemyType6(e6 ? e6.key : null);
      setEnemyType7(e7 ? e7.key : null);
      setEnemyType8(e8 ? e8.key : null);

      setEnemy1(!!e1); setEnemy2(!!e2); setEnemy3(!!e3); setEnemy4(!!e4); setEnemy5(!!e5); setEnemy6(!!e6); setEnemy7(!!e7); setEnemy8(!!e8);
      setEnemy1Pos(e1 ? { x: e1.pos.x, y: e1.pos.y } : null);
      setEnemy2Pos(e2 ? { x: e2.pos.x, y: e2.pos.y } : null);
      setEnemy3Pos(e3 ? { x: e3.pos.x, y: e3.pos.y } : null);
      setEnemy4Pos(e4 ? { x: e4.pos.x, y: e4.pos.y } : null);
      setEnemy5Pos(e5 ? { x: e5.pos.x, y: e5.pos.y } : null);
      setEnemy6Pos(e6 ? { x: e6.pos.x, y: e6.pos.y } : null);
      setEnemy7Pos(e7 ? { x: e7.pos.x, y: e7.pos.y } : null);
      setEnemy8Pos(e8 ? { x: e8.pos.x, y: e8.pos.y } : null);

      verifyEnemyGeneration(spawnedAll.length);
  
    });
  setStairs({ x: stairX, y: stairY });
  const currencyLocs = generateCurrencyTiles(newDungeon, 20, 80, 5); // 5 coins, value 20-80
  setCurrencyTiles(currencyLocs);
  const itemLocs = generateItemTiles(newDungeon, 5, 10, randInt(5, 10)); // between 5 and 10 items spawn
  setItemTiles(itemLocs);
  beginItemTilesIndex(itemLocs);
  setPlayerPos(playerStart);
  setDungeon(newDungeon);
  // set rooms and reveal starting room
  setRoomsState(rooms || []);
  // reveal the starting room entirely
  if (rooms && rooms.length) {
    const startRoom = rooms.find(r => r.center.x === playerStart.x && r.center.y === playerStart.y) || rooms[0];
    revealRoom(startRoom);
  } else {
    // fallback: reveal starting tile
    revealTile(playerStart.x, playerStart.y);
  }

  // Reset camera refs to avoid sudden jumps/stutter and smooth to new start
  cameraPosRef.current = { x: playerStart.x, y: playerStart.y };
  cameraTargetRef.current = { x: playerStart.x, y: playerStart.y };
  // Immediately apply the transform to the DOM node (if available) so we don't
  // briefly display the previous floor's camera position.
  const offsetX = (20 - playerStart.x) * 0.5 + 20;
  const offsetY = (-20 - playerStart.y) * 0.5 - 225;
  //5
  //-12
  const immediateTransform = `translate(${offsetX}px, ${offsetY}px) scale(${zoomLevel})`;
  if (dungeonRef.current) dungeonRef.current.style.transform = immediateTransform;
  setCameraTransform(immediateTransform);
  updateCamera(playerStart.x, playerStart.y);
};

const getRandomFloorTile = () => {
 return floorSprites[Math.floor(Math.random() * floorSprites.length)];
};
 
 const updateCamera = (x, y) => {
   cameraTargetRef.current = { x, y };
   cameraPosRef.current = { x, y };
   startCameraLoop();
 };

React.useEffect(() => {
  return () => {
    stopCameraLoop();
  };
}, []);

const getLineCoordinates = (direction) => {
const lineCoords = [];
let x = playerPos.x;
let y = playerPos.y;

for (let i = 0; i < 30; i++) { // Extend infinitely until hitting a wall
if (direction === 'up' && y - i >= 0) {
if (dungeon[y - i][x] === 'W') break; // Stop if it hits a wall
lineCoords.push({ x: x, y: y - i });
} else if (direction === 'down' && y + i < 30) {
if (dungeon[y + i][x] === 'W') break; // Stop if it hits a wall
lineCoords.push({ x: x, y: y + i });
} else if (direction === 'left' && x - i >= 0) {
if (dungeon[y][x - i] === 'W') break; // Stop if it hits a wall
lineCoords.push({ x: x - i, y: y });
} else if (direction === 'right' && x + i < 30) {
if (dungeon[y][x + i] === 'W') break; // Stop if it hits a wall
lineCoords.push({ x: x + i, y: y });
}
}
return lineCoords;
};

const lineCoordinates = showIndicators ? getLineCoordinates(lastDirection) : [];
const safeDungeon = Array.isArray(dungeon) && dungeon.length ? dungeon : [[]];
const rows = safeDungeon.length;
const cols = (safeDungeon[0] && safeDungeon[0].length) || 0;
const minRow = Math.max(0, Math.floor((playerPos && playerPos.y) ? playerPos.y : 0) - VIEW_RADIUS);
const maxRow = Math.min(Math.max(0, rows - 1), Math.floor((playerPos && playerPos.y) ? playerPos.y : 0) + VIEW_RADIUS);
const minCol = Math.max(0, Math.floor((playerPos && playerPos.x) ? playerPos.x : 0) - VIEW_RADIUS);
const maxCol = Math.min(Math.max(0, cols - 1), Math.floor((playerPos && playerPos.x) ? playerPos.x : 0) + VIEW_RADIUS);
return (
  <div>
    <div ref={fpsRef} className="fpsCounter" aria-live="polite">FPS: --</div>
    {showMoveSelector && (
      <div
        className="menu"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.85)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto"
        }}
      >
        <svg width="320" height="320" style={{ position: "absolute", top: 0, left: 0 }}>
          {[0, 1, 2, 3].map(i => {
            const sectorAngle = (i * 90 - 45) * (Math.PI / 180);
            // Move text position slightly inward
            const textRadius = 65;
            const textAngle = sectorAngle - 42.5 * (Math.PI / 180);
            const x = 160 + textRadius * Math.cos(textAngle);
            const y = 160 + textRadius * Math.sin(textAngle);
            return (
              <g key={i}>
                <path
                  d={describeArc(160, 160, 120, i * 90 - 45, (i + 1) * 90 - 45)}
                  fill={selectedMove === i ? "#3490dc" : "#222"}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="#fff"
                  fontSize="18"
                  fontWeight={selectedMove === i ? "bold" : "normal"}
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {moves[i].name}
                  <tspan x={x} dy="1.2em" fontSize="14" fill="#ccc">
                    {moves[i].pp}
                  </tspan>
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    )}
    <div className="game-area p-4">
      <div className="counter">Floor: {floor}</div>
      <div className="counter" style={{ right: '150px' }}>
        <img src={Pokedollar} alt="Currency" style={{ width: 24, verticalAlign: 'middle' }} /> {currency}
      </div>
      {/* Minimap (top-right) */}
      <canvas
        ref={minimapCanvasRef}
        width={minimapSize}
        height={minimapSize}
        style={{
          position: 'absolute',
          top: '10%',
          right: 8,
          width: minimapSize,
          height: minimapSize,
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 6,
          zIndex: 110,
          pointerEvents: 'none' // non-interactive overlay
        }}
      />
      <div className="dungeon-container">
        <div className="dungeon" ref={dungeonRef} style={{ 
          transform: cameraTransform,
          width: '7680px',
          height: '7680px',
        }}>
          {safeDungeon.slice(minRow, maxRow + 1).map((row, rIdx) => {
            const rowIndex = rIdx + minRow;
            return (
              <div key={rowIndex} className="dungeon-row flex">
                {row.slice(minCol, maxCol + 1).map((cell, cIdx) => {
                  const colIndex = cIdx + minCol;
                  let wallSprite;
                  const currencyHere = currencyTiles.find(tile => tile.x === colIndex && tile.y === rowIndex);
                const itemHere = itemTiles.find(tile => tile.x === colIndex && tile.y === rowIndex);
                // Determine sprite based on position
                if (cell === 'W') {
                  wallSprite = wallSpriteMap[getWallTileType(colIndex, rowIndex, dungeon)];
                }

                const isIndicatorVisible = lineCoordinates.some(coord => coord.x === colIndex && coord.y === rowIndex) && !(playerPos.x === colIndex && playerPos.y === rowIndex);

                return (
                  <div key={colIndex} className={`dungeon-cell relative w-10 h-10 ${isIndicatorVisible && showIndicators ? 'red-border' : ''}`}>
                    {cell === 'W' ? (
                      <img src={wallSprite} alt="Wall" className="wall absolute" />
                    ) : (
                      <img src={cell} alt="Floor" className="floor absolute" />
                    )}
                    {cell === 'S' && (
                      <img src={stairSprite} alt="Stairs" className="stair absolute" />
                    )}
                    {currencyHere && (
                      <img src={Pokedollar} alt="Currency" className="absolute w-full h-full" style={{
                        zIndex: 5,
                        objectFit: 'contain',
                        width: '50%',
                        height: '50%',
                        left: '25%',
                        top: '25%',
                      }} />
                    )}
                    {itemHere && (() => {
                      const atlasKey = getAtlasKeyForItemName(itemHere.itemName);
                      const shouldScale = atlasKey && !['Reviverseed', 'Scarf', 'Orb'].includes(atlasKey);
                      return (
                        <SpriteCanvas
                          atlasKey={atlasKey}
                          width={40}
                          height={40}
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) ${shouldScale ? 'scale(1.4)' : ''}`,
                            zIndex: 5,
                            width: '50%',
                            height: '50%'
                          }}
                        />
                      );
                    })()}
                    {isBuffing && playerPos.x === colIndex && playerPos.y === rowIndex && (
                      <img
                        src={buffVfxFrames[buffVfxIndex]}
                        alt="Buff"
                        className="absolute w-full h-full"
                        style={{
                          transform: 'translateY(-20%)',
                          zIndex: 31,
                          pointerEvents: 'none',
                          animation: 'buff-fade 1s forwards',
                        }}
                      />
                    )}
                    {usingAquaTail && playerPos.x === colIndex && playerPos.y === rowIndex && (
                      <SpriteCanvas
                          sprite="AquaTail"
                          direction={
                            lastDirection === 'left' ? 'left'
                            : lastDirection === 'right' ? 'right'
                            : lastDirection === 'up' ? 'up'
                            : lastDirection === 'down' ? 'down'
                            : lastDirection === 'up-left' ? 'upleft'
                            : lastDirection === 'up-right' ? 'upright'
                            : lastDirection === 'down-left' ? 'downleft'
                            : lastDirection === 'down-right' ? 'downright'
                            : 'down'
                          }
                          frame={aquaTailIndex + 1}
                          width={72}
                          height={72}
                          alt="Aqua Tail"
                          className="aqua-tail absolute"
                          style={{
                            transform: 'translateY(-25%) translateX(-20%) scale(1.2)',
                            //transform: 'translateY(-10%) scale(2.0)',
                            zIndex: 21,
                            pointerEvents: 'none',
                            //animation: 'aqua-tail-fade 6s forwards',
                          }}
                        />
                    )}
                    {isLevelingUp && playerPos.x === colIndex && playerPos.y === rowIndex && (
                      <img
                        src={levelVfxFrames[levelVfxIndex]}
                        alt="Level Up"
                        className="absolute w-full h-full"
                        style={{
                          transform: 'translateY(-20%)',
                          zIndex: 31,
                          pointerEvents: 'none',
                          animation: 'level-up-fade 1s forwards',
                        }}
                      />
                    )}
                    {enemy1 === true && colIndex === enemy1Pos.x && rowIndex === enemy1Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType1}
                          animation={enemy1Sleeping ? "sleep" : "idle"}
                          direction={enemy1Sleeping ? "none" : enemy1LastDirection}
                          frame={enemy1Sleeping ? sleepSpriteIndex + 1 : enemy1IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy1"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType1 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType1 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemy2 === true && colIndex === enemy2Pos.x && rowIndex === enemy2Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType2}
                          animation={enemy2Sleeping ? "sleep" : "idle"}
                          direction={enemy2Sleeping ? "none" : enemy2LastDirection}
                          frame={enemy2Sleeping ? sleepSpriteIndex + 1 : enemy2IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy2"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType2 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType2 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemy3 === true && colIndex === enemy3Pos.x && rowIndex === enemy3Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType3}
                          animation={enemy3Sleeping ? "sleep" : "idle"}
                          direction={enemy3Sleeping ? "none" : enemy3LastDirection}
                          frame={enemy3Sleeping ? sleepSpriteIndex + 1 : enemy3IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy3"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType3 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType3 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemy4 === true && colIndex === enemy4Pos.x && rowIndex === enemy4Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType4}
                          animation={enemy4Sleeping ? "sleep" : "idle"}
                          direction={enemy4Sleeping ? "none" : enemy4LastDirection}
                          frame={enemy4Sleeping ? sleepSpriteIndex + 1 : enemy4IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy4"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType4 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType4 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemy5 === true && colIndex === enemy5Pos.x && rowIndex === enemy5Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType5}
                          animation={enemy5Sleeping ? "sleep" : "idle"}
                          direction={enemy5Sleeping ? "none" : enemy5LastDirection}
                          frame={enemy5Sleeping ? sleepSpriteIndex + 1 : enemy5IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy5"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType5 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType5 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemy6 === true && colIndex === enemy6Pos.x && rowIndex === enemy6Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType6}
                          animation={enemy6Sleeping ? "sleep" : "idle"}
                          direction={enemy6Sleeping ? "none" : enemy6LastDirection}
                          frame={enemy6Sleeping ? sleepSpriteIndex + 1 : enemy6IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy6"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType6 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType6 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemy7 === true && colIndex === enemy7Pos.x && rowIndex === enemy7Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType7}
                          animation={enemy7Sleeping ? "sleep" : "idle"}
                          direction={enemy7Sleeping ? "none" : enemy7LastDirection}
                          frame={enemy7Sleeping ? sleepSpriteIndex + 1 : enemy7IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy7"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType7 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType7 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemy8 === true && colIndex === enemy8Pos.x && rowIndex === enemy8Pos.y ? (
                      <SpriteCanvas
                          pokemon={enemyType8}
                          animation={enemy8Sleeping ? "sleep" : "idle"}
                          direction={enemy8Sleeping ? "none" : enemy8LastDirection}
                          frame={enemy8Sleeping ? sleepSpriteIndex + 1 : enemy8IdleAnimIndex + 1}
                          width={24}
                          height={48}
                          alt="Enemy8"
                          className="player-sprite absolute"
                          style={{
                            transform: enemyType8 === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemyType8 === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {playerPos.x === colIndex && playerPos.y === rowIndex && (
                      isSleeping ? (
                        <SpriteCanvas
                          pokemon="Vaporeon"
                          animation="sleep"
                          direction="none"
                          frame={sleepSpriteIndex + 1}
                          width={32}
                          height={40}
                          alt="Vaporeon"
                          className="player-sprite absolute"
                          style={{
                            transform: 'scale(1)'
                          }}
                        />
                      ) : isWalking ? (
                        <SpriteCanvas
                          pokemon="Vaporeon"
                          animation="walk"
                          direction={
                            lastDirection === 'left' ? 'left'
                            : lastDirection === 'right' ? 'right'
                            : lastDirection === 'up' ? 'up'
                            : lastDirection === 'down' ? 'down'
                            : lastDirection === 'up-left' ? 'upleft'
                            : lastDirection === 'up-right' ? 'upright'
                            : lastDirection === 'down-left' ? 'downleft'
                            : lastDirection === 'down-right' ? 'downright'
                            : 'down'
                          }
                          frame={walkSpriteIndex + 1}
                          width={40}
                          height={56}
                          alt="Vaporeon"
                          className="player-sprite absolute"
                          style={{
                            transform: 'scale(1.2)'
                          }}
                        />
                      ) : isSpinning ? (
                        <SpriteCanvas
                          pokemon="Vaporeon"
                          animation="spin"
                          direction={
                            lastDirection === 'left' ? 'left'
                            : lastDirection === 'right' ? 'right'
                            : lastDirection === 'up' ? 'up'
                            : lastDirection === 'down' ? 'down'
                            : lastDirection === 'up-left' ? 'upleft'
                            : lastDirection === 'up-right' ? 'upright'
                            : lastDirection === 'down-left' ? 'downleft'
                            : lastDirection === 'down-right' ? 'downright'
                            : 'down'
                          }
                          frame={spinSpriteIndex + 1}
                          width={40}
                          height={56}
                          alt="Vaporeon"
                          className="player-sprite absolute"
                          style={{
                            zIndex: 32,
                            transform: 'scale(1)'
                          }}
                        />
                      ) : usingAquaTail ? (
                        <SpriteCanvas
                          pokemon="Vaporeon"
                          animation="spin"
                          direction={
                            lastDirection === 'left' ? 'left'
                            : lastDirection === 'right' ? 'right'
                            : lastDirection === 'up' ? 'up'
                            : lastDirection === 'down' ? 'down'
                            : lastDirection === 'up-left' ? 'upleft'
                            : lastDirection === 'up-right' ? 'upright'
                            : lastDirection === 'down-left' ? 'downleft'
                            : lastDirection === 'down-right' ? 'downright'
                            : 'down'
                          }
                          frame={spinSpriteIndex + 1}
                          width={40}
                          height={56}
                          alt="Vaporeon"
                          className="player-sprite absolute"
                          style={{
                            zIndex: 40,
                            transform: 'scale(1)'
                          }}
                        />
                      ) : (
                        <SpriteCanvas
                          pokemon="Vaporeon"
                          animation="idle"
                          direction={
                            lastDirection === 'left' ? 'left'
                            : lastDirection === 'right' ? 'right'
                            : lastDirection === 'up' ? 'up'
                            : lastDirection === 'down' ? 'down'
                            : lastDirection === 'down-left' ? 'downleft'
                            : lastDirection === 'down-right' ? 'downright'
                            : lastDirection === 'up-left' ? 'upleft'
                            : lastDirection === 'up-right' ? 'upright'
                            : 'down'
                          }
                          frame={idleSpriteIndex + 1}
                          width={40}
                          height={56}
                          alt="Vaporeon"
                          className="player-sprite absolute"
                          style={{
                            transform: 'scale(1.2)'
                          }}
                        />
                      )
                    )}
                  </div>
                )
              })}
            </div>
          );
          })}

          {DMGVfx0.Active === true && DMGVfx0.X === playerPosRef.current.x && DMGVfx0.Y === playerPosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx0Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx0.X - minCol) * 40}px` : `${DMGVfx0.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx0.Y - minRow) * 40}px` : `${DMGVfx0.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx0Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx1.Active === true && DMGVfx1.X === enemy1PosRef.current.x && DMGVfx1.Y === enemy1PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx1Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx1.X - minCol) * 40}px` : `${DMGVfx1.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx1.Y - minRow) * 40}px` : `${DMGVfx1.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx1Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx2.Active === true && DMGVfx2.X === enemy2PosRef.current.x && DMGVfx2.Y === enemy2PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx2Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx2.X - minCol) * 40}px` : `${DMGVfx2.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx2.Y - minRow) * 40}px` : `${DMGVfx2.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx2Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx3.Active === true && DMGVfx3.X === enemy3PosRef.current.x && DMGVfx3.Y === enemy3PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx3Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx3.X - minCol) * 40}px` : `${DMGVfx3.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx3.Y - minRow) * 40}px` : `${DMGVfx3.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx3Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx4.Active === true && DMGVfx4.X === enemy4PosRef.current.x && DMGVfx4.Y === enemy4PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx4Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx4.X - minCol) * 40}px` : `${DMGVfx4.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx4.Y - minRow) * 40}px` : `${DMGVfx4.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx4Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx5.Active === true && DMGVfx5.X === enemy5PosRef.current.x && DMGVfx5.Y === enemy5PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx5Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx5.X - minCol) * 40}px` : `${DMGVfx5.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx5.Y - minRow) * 40}px` : `${DMGVfx5.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx5Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx6.Active === true && DMGVfx6.X === enemy6PosRef.current.x && DMGVfx6.Y === enemy6PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx6Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx6.X - minCol) * 40}px` : `${DMGVfx6.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx6.Y - minRow) * 40}px` : `${DMGVfx6.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx6Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx7.Active === true && DMGVfx7.X === enemy7PosRef.current.x && DMGVfx7.Y === enemy7PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx7Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx7.X - minCol) * 40}px` : `${DMGVfx7.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx7.Y - minRow) * 40}px` : `${DMGVfx7.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx7Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}
          {DMGVfx8.Active === true && DMGVfx8.X === enemy8PosRef.current.x && DMGVfx8.Y === enemy8PosRef.current.y - 1 && (
            <SpriteCanvas
              sprite="DMG1"
              frame={DMGVfx8Index + 1}
              alt="DMG"
              width={40}
              height={57}
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(DMGVfx8.X - minCol) * 40}px` : `${DMGVfx8.X * 40}px`,
                top: minRow > 0 ? `${(DMGVfx8.Y - minRow) * 40}px` : `${DMGVfx8.Y * 40}px`,
                opacity: 1/(0.8 + DMGVfx8Index), // fade out over time
                zIndex: 50,
                pointerEvents: 'none',
                transformOrigin: 'center'
              }}
            />
          )}

          {/* Render projectiles inside the dungeon so they follow camera transform */}
          
          {projectiles.map(p => (
            p.x >= minCol - 1 && p.x <= maxCol + 1 && p.y >= minRow - 1 && p.y <= maxRow + 1 && ( minCol === playerPos.x && maxCol === playerPos.x && minRow === playerPos.y && maxRow === playerPos.y ? null : (
            <img
              key={p.id}
              src={p.sprite}
              alt="thrown"
              style={{
                position: 'absolute',
                left: minCol > 0 ? `${(p.x - minCol) * 40}px` : `${p.x * 40}px`,
                top: minRow > 0 ? `${(p.y - minRow) * 40}px` : `${p.y * 40}px`,
                width: '20px',
                height: '20px',
                transformOrigin: 'center',
                zIndex: 40,
                pointerEvents: 'none',
                objectFit: 'contain',
                transform: p.sprite !== Reviverseed && p.sprite !== Scarf && p.sprite !== Orb ? `scale(1.5)` : 'none'
              }}
            />
          ))))}
          
        </div>
        {/* Floating Rock Throw Projectile - Renders at pixel-perfect position with decimals */}
        {rockThrowRef.current && (
          ///
          ///
          ///
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy1AttackBehaviorRef.current === true ? (enemy1PosRef.current.x - projectilePosRef.current[1].x) - minCol : 0) * 40}px` : `${(enemy1AttackBehaviorRef.current === true ? enemy1PosRef.current.x - projectilePosRef.current[1].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy1AttackBehaviorRef.current === true ? (enemy1PosRef.current.y - projectilePosRef.current[1].y) - minRow : 0) * 40}px` : `${(enemy1AttackBehaviorRef.current === true ? enemy1PosRef.current.y - projectilePosRef.current[1].y : 0) * 40}px`,
            }}
          />
        )};

       {rockThrowRef.current && (
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy2AttackBehaviorRef.current === true ? (enemy2PosRef.current.x - projectilePosRef.current[2].x) - minCol : 0) * 40}px` : `${(enemy2AttackBehaviorRef.current === true ? enemy2PosRef.current.x - projectilePosRef.current[2].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy2AttackBehaviorRef.current === true ? (enemy2PosRef.current.y - projectilePosRef.current[2].y) - minRow : 0) * 40}px` : `${(enemy2AttackBehaviorRef.current === true ? enemy2PosRef.current.y - projectilePosRef.current[2].y : 0) * 40}px`,
            }}
          />
        )} 

        {rockThrowRef.current && (
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy3AttackBehaviorRef.current === true ? (enemy3PosRef.current.x - projectilePosRef.current[3].x) - minCol : 0) * 40}px` : `${(enemy3AttackBehaviorRef.current === true ? enemy3PosRef.current.x - projectilePosRef.current[3].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy3AttackBehaviorRef.current === true ? (enemy3PosRef.current.y - projectilePosRef.current[3].y) - minRow : 0) * 40}px` : `${(enemy3AttackBehaviorRef.current === true ? enemy3PosRef.current.y - projectilePosRef.current[3].y : 0) * 40}px`,
            }}
          />
        )} 
        
        {rockThrowRef.current && (
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy4AttackBehaviorRef.current === true ? (enemy4PosRef.current.x - projectilePosRef.current[4].x) - minCol : 0) * 40}px` : `${(enemy4AttackBehaviorRef.current === true ? enemy4PosRef.current.x - projectilePosRef.current[4].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy4AttackBehaviorRef.current === true ? (enemy4PosRef.current.y - projectilePosRef.current[4].y) - minRow : 0) * 40}px` : `${(enemy4AttackBehaviorRef.current === true ? enemy4PosRef.current.y - projectilePosRef.current[4].y : 0) * 40}px`,
            }}
          />
        )} 
        
        {rockThrowRef.current && (
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy5AttackBehaviorRef.current === true ? (enemy5PosRef.current.x - projectilePosRef.current[5].x) - minCol : 0) * 40}px` : `${(enemy5AttackBehaviorRef.current === true ? enemy5PosRef.current.x - projectilePosRef.current[5].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy5AttackBehaviorRef.current === true ? (enemy5PosRef.current.y - projectilePosRef.current[5].y) - minRow : 0) * 40}px` : `${(enemy5AttackBehaviorRef.current === true ? enemy5PosRef.current.y - projectilePosRef.current[5].y : 0) * 40}px`,
            }}
          />
        )}
        
        {rockThrowRef.current && (
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy6AttackBehaviorRef.current === true ? (enemy6PosRef.current.x - projectilePosRef.current[6].x) - minCol : 0) * 40}px` : `${(enemy6AttackBehaviorRef.current === true ? enemy6PosRef.current.x - projectilePosRef.current[6].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy6AttackBehaviorRef.current === true ? (enemy6PosRef.current.y - projectilePosRef.current[6].y) - minRow : 0) * 40}px` : `${(enemy6AttackBehaviorRef.current === true ? enemy6PosRef.current.y - projectilePosRef.current[6].y : 0) * 40}px`,
            }}
          />
        )} 
        
        {rockThrowRef.current && (
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy7AttackBehaviorRef.current === true ? (enemy7PosRef.current.x - projectilePosRef.current[7].x) - minCol : 0) * 40}px` : `${(enemy7AttackBehaviorRef.current === true ? enemy7PosRef.current.x - projectilePosRef.current[7].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy7AttackBehaviorRef.current === true ? (enemy7PosRef.current.y - projectilePosRef.current[7].y) - minRow : 0) * 40}px` : `${(enemy7AttackBehaviorRef.current === true ? enemy7PosRef.current.y - projectilePosRef.current[7].y : 0) * 40}px`,
            }}
          />
        )} 
        
        {rockThrowRef.current && (
          <SpriteCanvas
            sprite="RockThrow"
            direction="none"
            frame={rockThrowIndex + 1}
            alt="Rock Throw"
            style={{
              position: 'absolute',
              transformOrigin: 'center',
              transform: rockThrowTransform,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
              objectFit: 'contain',
              //willChange: 'transform',
              left: minCol > 0 ? `${(enemy8AttackBehaviorRef.current === true ? (enemy8PosRef.current.x - projectilePosRef.current[8].x) - minCol : 0) * 40}px` : `${(enemy8AttackBehaviorRef.current === true ? enemy8PosRef.current.x - projectilePosRef.current[8].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemy8AttackBehaviorRef.current === true ? (enemy8PosRef.current.y - projectilePosRef.current[8].y) - minRow : 0) * 40}px` : `${(enemy8AttackBehaviorRef.current === true ? enemy8PosRef.current.y - projectilePosRef.current[8].y : 0) * 40}px`,
            }}
          />
        )}

      </div>
      <div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '30px',
                transform: 'translateX(-50%)',
                width: '60%',
                maxHeight: '120px',
                background: 'rgba(30,30,30,0.5)',
                color: 'white',
                padding: '10px',
                borderRadius: '8px',
                overflowY: 'auto',
                fontSize: '16px',
                zIndex: 30,
                pointerEvents: 'none',
              }}
            >
              {actionLog.map(entry => (
    <div key={entry.id}>{entry.msg}</div>
  ))}
        </div>
      </div>
      <div className="hunger-bar-status">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                zIndex: 100,
                transform: 'translateX(28%) translateY(6%) scale(1.6)'
              }}
            >
              <img src={playerHunger / maxPlayerHunger === 1 ? hungerBarComponent[100]
                : 0.99 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 1 ? hungerBarComponent[99]
                : 0.98 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.99 ? hungerBarComponent[98]
                : 0.97 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.98 ? hungerBarComponent[97]
                : 0.96 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.97 ? hungerBarComponent[96]
                : 0.95 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.96 ? hungerBarComponent[95]
                : 0.94 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.95 ? hungerBarComponent[94]
                : 0.93 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.94 ? hungerBarComponent[93]
                : 0.92 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.93 ? hungerBarComponent[92]
                : 0.91 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.92 ? hungerBarComponent[91]
                : 0.90 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.91 ? hungerBarComponent[90]
                : 0.89 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.90 ? hungerBarComponent[89]
                : 0.88 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.89 ? hungerBarComponent[88]
                : 0.87 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.88 ? hungerBarComponent[87]
                : 0.86 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.87 ? hungerBarComponent[86]
                : 0.85 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.86 ? hungerBarComponent[85]
                : 0.84 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.85 ? hungerBarComponent[84]
                : 0.83 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.84 ? hungerBarComponent[83]
                : 0.82 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.83 ? hungerBarComponent[82]
                : 0.81 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.82 ? hungerBarComponent[81]
                : 0.80 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.81 ? hungerBarComponent[80]
                : 0.79 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.80 ? hungerBarComponent[79]
                : 0.78 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.79 ? hungerBarComponent[78]
                : 0.77 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.78 ? hungerBarComponent[77]
                : 0.76 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.77 ? hungerBarComponent[76]
                : 0.75 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.76 ? hungerBarComponent[75]
                : 0.74 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.75 ? hungerBarComponent[74]
                : 0.73 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.74 ? hungerBarComponent[73]
                : 0.72 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.73 ? hungerBarComponent[72]
                : 0.71 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.72 ? hungerBarComponent[71]
                : 0.70 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.71 ? hungerBarComponent[70]
                : 0.69 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.70 ? hungerBarComponent[69]
                : 0.68 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.69 ? hungerBarComponent[68]
                : 0.67 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.68 ? hungerBarComponent[67]
                : 0.66 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.67 ? hungerBarComponent[66]
                : 0.65 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.66 ? hungerBarComponent[65]
                : 0.64 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.65 ? hungerBarComponent[64]
                : 0.63 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.64 ? hungerBarComponent[63]
                : 0.62 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.63 ? hungerBarComponent[62]
                : 0.61 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.62 ? hungerBarComponent[61]
                : 0.60 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.61 ? hungerBarComponent[60]
                : 0.59 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.60 ? hungerBarComponent[59]
                : 0.58 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.59 ? hungerBarComponent[58]
                : 0.57 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.58 ? hungerBarComponent[57]
                : 0.56 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.57 ? hungerBarComponent[56]
                : 0.55 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.56 ? hungerBarComponent[55]
                : 0.54 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.55 ? hungerBarComponent[54]
                : 0.53 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.54 ? hungerBarComponent[53]
                : 0.52 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.53 ? hungerBarComponent[52]
                : 0.51 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.52 ? hungerBarComponent[51]
                : 0.50 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.51 ? hungerBarComponent[50]
                : 0.49 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.50 ? hungerBarComponent[49]
                : 0.48 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.49 ? hungerBarComponent[48]
                : 0.47 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.48 ? hungerBarComponent[47]
                : 0.46 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.47 ? hungerBarComponent[46]
                : 0.45 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.46 ? hungerBarComponent[45]
                : 0.44 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.45 ? hungerBarComponent[44]
                : 0.43 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.44 ? hungerBarComponent[43]
                : 0.42 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.43 ? hungerBarComponent[42]
                : 0.41 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.42 ? hungerBarComponent[41]
                : 0.40 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.41 ? hungerBarComponent[40]
                : 0.39 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.40 ? hungerBarComponent[39]
                : 0.38 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.39 ? hungerBarComponent[38]
                : 0.37 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.38 ? hungerBarComponent[37]
                : 0.36 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.37 ? hungerBarComponent[36]
                : 0.35 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.36 ? hungerBarComponent[35]
                : 0.34 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.35 ? hungerBarComponent[34]
                : 0.33 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.34 ? hungerBarComponent[33]
                : 0.32 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.33 ? hungerBarComponent[32]
                : 0.31 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.32 ? hungerBarComponent[31]
                : 0.30 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.31 ? hungerBarComponent[30]
                : 0.29 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.30 ? hungerBarComponent[29]
                : 0.28 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.29 ? hungerBarComponent[28]
                : 0.27 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.28 ? hungerBarComponent[27]
                : 0.26 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.27 ? hungerBarComponent[26]
                : 0.25 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.26 ? hungerBarComponent[25]
                : 0.24 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.25 ? hungerBarComponent[24]
                : 0.23 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.24 ? hungerBarComponent[23]
                : 0.22 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.23 ? hungerBarComponent[22]
                : 0.21 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.22 ? hungerBarComponent[21]
                : 0.20 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.21 ? hungerBarComponent[20]
                : 0.19 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.20 ? hungerBarComponent[19]
                : 0.18 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.19 ? hungerBarComponent[18]
                : 0.17 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.18 ? hungerBarComponent[17]
                : 0.16 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.17 ? hungerBarComponent[16]
                : 0.15 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.16 ? hungerBarComponent[15]
                : 0.14 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.15 ? hungerBarComponent[14]
                : 0.13 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.14 ? hungerBarComponent[13]
                : 0.12 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.13 ? hungerBarComponent[12]
                : 0.11 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.12 ? hungerBarComponent[11]
                : 0.10 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.11 ? hungerBarComponent[10]
                : 0.09 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.10 ? hungerBarComponent[9]
                : 0.08 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.09 ? hungerBarComponent[8]
                : 0.07 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.08 ? hungerBarComponent[7]
                : 0.06 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.07 ? hungerBarComponent[6]
                : 0.05 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.06 ? hungerBarComponent[5]
                : 0.04 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.05 ? hungerBarComponent[4]
                : 0.03 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.04 ? hungerBarComponent[3]
                : 0.02 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.03 ? hungerBarComponent[2]
                : 0.01 <= playerHunger / maxPlayerHunger && playerHunger / maxPlayerHunger < 0.02 ? hungerBarComponent[1]
                : playerHunger / maxPlayerHunger === 0 ? hungerBarComponent[0]
                : hungerBarComponent[0]
              } alt="hungerComponent" className="absolute" />
            </div>
        </div>
      <p className="text-cyan absolute top-0 left-0 w-full h-full" style={{
          color: 'cyan',
          fontWeight: 'bold',
          textAlign: 'left',
          zIndex: 100,
          transform: 'translateX(10%)'
        }}>
        HP: {playerHP}/{maxPlayerHP}
      </p>
      <div className="absolute top-0 left-0 w-full h-full flex items-left justify-left"
      style={{
        position: 'absolute',
        width: '100%',
        height: '50px',
        marginTop: '40px',
        transform: 'translateX(235%) scale(5.5) translateY(-35%)',
        zIndex: 100,
      }}>
      <img src={
        0 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.01 ? healthBarComponent[0]
        : 0.01 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.02 ? healthBarComponent[1]
        : 0.02 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.03 ? healthBarComponent[2]
        : 0.03 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.04 ? healthBarComponent[3]
        : 0.04 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.05 ? healthBarComponent[4]
        : 0.05 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.06 ? healthBarComponent[5]
        : 0.06 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.07 ? healthBarComponent[6]
        : 0.07 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.08 ? healthBarComponent[7]
        : 0.08 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.09 ? healthBarComponent[8]
        : 0.09 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.1 ? healthBarComponent[9]
        : 0.1 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.11 ? healthBarComponent[10]
        : 0.11 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.12 ? healthBarComponent[11]
        : 0.12 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.13 ? healthBarComponent[12]
        : 0.13 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.14 ? healthBarComponent[13]
        : 0.14 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.15 ? healthBarComponent[14]
        : 0.15 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.16 ? healthBarComponent[15]
        : 0.16 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.17 ? healthBarComponent[16]
        : 0.17 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.18 ? healthBarComponent[17]
        : 0.18 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.19 ? healthBarComponent[18]
        : 0.19 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.2 ? healthBarComponent[19]
        : 0.2 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.21 ? healthBarComponent[20]
        : 0.21 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.22 ? healthBarComponent[21]
        : 0.22 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.23 ? healthBarComponent[22]
        : 0.23 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.24 ? healthBarComponent[23]
        : 0.24 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.25 ? healthBarComponent[24]
        : 0.25 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.26 ? healthBarComponent[25]
        : 0.26 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.27 ? healthBarComponent[26]
        : 0.27 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.28 ? healthBarComponent[27]
        : 0.28 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.29 ? healthBarComponent[28]
        : 0.29 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.3 ? healthBarComponent[29]
        : 0.3 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.31 ? healthBarComponent[30]
        : 0.31 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.32 ? healthBarComponent[31]
        : 0.32 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.33 ? healthBarComponent[32]
        : 0.33 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.34 ? healthBarComponent[33]
        : 0.34 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.35 ? healthBarComponent[34]
        : 0.35 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.36 ? healthBarComponent[35]
        : 0.36 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.37 ? healthBarComponent[36]
        : 0.37 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.38 ? healthBarComponent[37]
        : 0.38 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.39 ? healthBarComponent[38]
        : 0.39 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.4 ? healthBarComponent[39]
        : 0.4 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.41 ? healthBarComponent[40]
        : 0.41 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.42 ? healthBarComponent[41]
        : 0.42 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.43 ? healthBarComponent[42]
        : 0.43 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.44 ? healthBarComponent[43]
        : 0.44 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.45 ? healthBarComponent[44]
        : 0.45 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.46 ? healthBarComponent[45]
        : 0.46 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.47 ? healthBarComponent[46]
        : 0.47 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.48 ? healthBarComponent[47]
        : 0.48 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.49 ? healthBarComponent[48]
        : 0.49 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.5 ? healthBarComponent[49]
        : 0.5 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.51 ? healthBarComponent[50]
        : 0.51 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.52 ? healthBarComponent[51]
        : 0.52 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.53 ? healthBarComponent[52]
        : 0.53 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.54 ? healthBarComponent[53]
        : 0.54 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.55 ? healthBarComponent[54]
        : 0.55 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.56 ? healthBarComponent[55]
        : 0.56 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.57 ? healthBarComponent[56]
        : 0.57 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.58 ? healthBarComponent[57]
        : 0.58 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.59 ? healthBarComponent[58]
        : 0.59 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.6 ? healthBarComponent[59]
        : 0.6 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.61 ? healthBarComponent[60]
        : 0.61 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.62 ? healthBarComponent[61]
        : 0.62 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.63 ? healthBarComponent[62]
        : 0.63 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.64 ? healthBarComponent[63]
        : 0.64 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.65 ? healthBarComponent[64]
        : 0.65 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.66 ? healthBarComponent[65]
        : 0.66 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.67 ? healthBarComponent[66]
        : 0.67 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.68 ? healthBarComponent[67]
        : 0.68 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.69 ? healthBarComponent[68]
        : 0.69 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.7 ? healthBarComponent[69]
        : 0.7 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.71 ? healthBarComponent[70]
        : 0.71 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.72 ? healthBarComponent[71]
        : 0.72 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.73 ? healthBarComponent[72]
        : 0.73 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.74 ? healthBarComponent[73]
        : 0.74 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.75 ? healthBarComponent[74]
        : 0.75 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.76 ? healthBarComponent[75]
        : 0.76 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.77 ? healthBarComponent[76]
        : 0.77 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.78 ? healthBarComponent[77]
        : 0.78 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.79 ? healthBarComponent[78]
        : 0.79 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.8 ? healthBarComponent[79]
        : 0.8 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.81 ? healthBarComponent[80]
        : 0.81 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.82 ? healthBarComponent[81]
        : 0.82 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.83 ? healthBarComponent[82]
        : 0.83 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.84 ? healthBarComponent[83]
        : 0.84 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.85 ? healthBarComponent[84]
        : 0.85 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.86 ? healthBarComponent[85]
        : 0.86 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.87 ? healthBarComponent[86]
        : 0.87 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.88 ? healthBarComponent[87]
        : 0.88 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.89 ? healthBarComponent[88]
        : 0.89 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.9 ? healthBarComponent[89]
        : 0.9 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.91 ? healthBarComponent[90]
        : 0.91 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.92 ? healthBarComponent[91]
        : 0.92 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.93 ? healthBarComponent[92]
        : 0.93 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.94 ? healthBarComponent[93]
        : 0.94 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.95 ? healthBarComponent[94]
        : 0.95 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.96 ? healthBarComponent[95]
        : 0.96 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.97 ? healthBarComponent[96]
        : 0.97 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.98 ? healthBarComponent[97]
        : 0.98 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 0.99 ? healthBarComponent[98]
        : 0.99 <= playerHP/maxPlayerHP && playerHP/maxPlayerHP < 1 ? healthBarComponent[99]
        : playerHP/maxPlayerHP === 1 ? healthBarComponent[100] : healthBarComponent[0]} 
        alt="Health Bar" />
      </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-left justify-left"
           style={{
            position: 'absolute',
            transform: 'translateY(100%)',
            width: '100%',
            height: '50px',
            marginTop: '40px',
            opacity: '0.8',

          }}>
        <img src={
           0 <= exp/maxExp && exp/maxExp < 0.01 ? expBarComponent[0]
          : exp/maxExp === 1 ? expBarComponent[100]
          : 0.01 <= exp/maxExp && exp/maxExp < 0.02 ? expBarComponent[1]
          : 0.02 <= exp/maxExp && exp/maxExp < 0.03 ? expBarComponent[2]
          : 0.03 <= exp/maxExp && exp/maxExp < 0.04 ? expBarComponent[3]
          : 0.04 <= exp/maxExp && exp/maxExp < 0.05 ? expBarComponent[4]
          : 0.05 <= exp/maxExp && exp/maxExp < 0.06 ? expBarComponent[5]
          : 0.06 <= exp/maxExp && exp/maxExp < 0.07 ? expBarComponent[6]
          : 0.07 <= exp/maxExp && exp/maxExp < 0.08 ? expBarComponent[7]
          : 0.08 <= exp/maxExp && exp/maxExp < 0.09 ? expBarComponent[8]
          : 0.09 <= exp/maxExp && exp/maxExp < 0.1 ? expBarComponent[9]
          : 0.1 <= exp/maxExp && exp/maxExp < 0.11 ? expBarComponent[10]
          : 0.11 <= exp/maxExp && exp/maxExp < 0.12 ? expBarComponent[11]
          : 0.12 <= exp/maxExp && exp/maxExp < 0.13 ? expBarComponent[12]
          : 0.13 <= exp/maxExp && exp/maxExp < 0.14 ? expBarComponent[13]
          : 0.14 <= exp/maxExp && exp/maxExp < 0.15 ? expBarComponent[14]
          : 0.15 <= exp/maxExp && exp/maxExp < 0.16 ? expBarComponent[15]
          : 0.16 <= exp/maxExp && exp/maxExp < 0.17 ? expBarComponent[16]
          : 0.17 <= exp/maxExp && exp/maxExp < 0.18 ? expBarComponent[17]
          : 0.18 <= exp/maxExp && exp/maxExp < 0.19 ? expBarComponent[18]
          : 0.19 <= exp/maxExp && exp/maxExp < 0.2 ? expBarComponent[19]
          : 0.2 <= exp/maxExp && exp/maxExp < 0.21 ? expBarComponent[20]
          : 0.21 <= exp/maxExp && exp/maxExp < 0.22 ? expBarComponent[21]
          : 0.22 <= exp/maxExp && exp/maxExp < 0.23 ? expBarComponent[22]
          : 0.23 <= exp/maxExp && exp/maxExp < 0.24 ? expBarComponent[23]
          : 0.24 <= exp/maxExp && exp/maxExp < 0.25 ? expBarComponent[24]
          : 0.25 <= exp/maxExp && exp/maxExp < 0.26 ? expBarComponent[25]
          : 0.26 <= exp/maxExp && exp/maxExp < 0.27 ? expBarComponent[26]
          : 0.27 <= exp/maxExp && exp/maxExp < 0.28 ? expBarComponent[27]
          : 0.28 <= exp/maxExp && exp/maxExp < 0.29 ? expBarComponent[28]
          : 0.29 <= exp/maxExp && exp/maxExp < 0.3 ? expBarComponent[29]
          : 0.3 <= exp/maxExp && exp/maxExp < 0.31 ? expBarComponent[30]
          : 0.31 <= exp/maxExp && exp/maxExp < 0.32 ? expBarComponent[31]
          : 0.32 <= exp/maxExp && exp/maxExp < 0.33 ? expBarComponent[32]
          : 0.33 <= exp/maxExp && exp/maxExp < 0.34 ? expBarComponent[33]
          : 0.34 <= exp/maxExp && exp/maxExp < 0.35 ? expBarComponent[34]
          : 0.35 <= exp/maxExp && exp/maxExp < 0.36 ? expBarComponent[35]
          : 0.36 <= exp/maxExp && exp/maxExp < 0.37 ? expBarComponent[36]
          : 0.37 <= exp/maxExp && exp/maxExp < 0.38 ? expBarComponent[37]
          : 0.38 <= exp/maxExp && exp/maxExp < 0.39 ? expBarComponent[38]
          : 0.39 <= exp/maxExp && exp/maxExp < 0.4 ? expBarComponent[39]
          : 0.4 <= exp/maxExp && exp/maxExp < 0.41 ? expBarComponent[40]
          : 0.41 <= exp/maxExp && exp/maxExp < 0.42 ? expBarComponent[41]
          : 0.42 <= exp/maxExp && exp/maxExp < 0.43 ? expBarComponent[42]
          : 0.43 <= exp/maxExp && exp/maxExp < 0.44 ? expBarComponent[43]
          : 0.44 <= exp/maxExp && exp/maxExp < 0.45 ? expBarComponent[44]
          : 0.45 <= exp/maxExp && exp/maxExp < 0.46 ? expBarComponent[45]
          : 0.46 <= exp/maxExp && exp/maxExp < 0.47 ? expBarComponent[46]
          : 0.47 <= exp/maxExp && exp/maxExp < 0.48 ? expBarComponent[47]
          : 0.48 <= exp/maxExp && exp/maxExp < 0.49 ? expBarComponent[48]
          : 0.49 <= exp/maxExp && exp/maxExp < 0.5 ? expBarComponent[49]
          : 0.5 <= exp/maxExp && exp/maxExp < 0.51 ? expBarComponent[50]
          : 0.51 <= exp/maxExp && exp/maxExp < 0.52 ? expBarComponent[51]
          : 0.52 <= exp/maxExp && exp/maxExp < 0.53 ? expBarComponent[52]
          : 0.53 <= exp/maxExp && exp/maxExp < 0.54 ? expBarComponent[53]
          : 0.54 <= exp/maxExp && exp/maxExp < 0.55 ? expBarComponent[54]
          : 0.55 <= exp/maxExp && exp/maxExp < 0.56 ? expBarComponent[55]
          : 0.56 <= exp/maxExp && exp/maxExp < 0.57 ? expBarComponent[56]
          : 0.57 <= exp/maxExp && exp/maxExp < 0.58 ? expBarComponent[57]
          : 0.58 <= exp/maxExp && exp/maxExp < 0.59 ? expBarComponent[58]
          : 0.59 <= exp/maxExp && exp/maxExp < 0.6 ? expBarComponent[59]
          : 0.6 <= exp/maxExp && exp/maxExp < 0.61 ? expBarComponent[60]
          : 0.61 <= exp/maxExp && exp/maxExp < 0.62 ? expBarComponent[61]
          : 0.62 <= exp/maxExp && exp/maxExp < 0.63 ? expBarComponent[62]
          : 0.63 <= exp/maxExp && exp/maxExp < 0.64 ? expBarComponent[63]
          : 0.64 <= exp/maxExp && exp/maxExp < 0.65 ? expBarComponent[64]
          : 0.65 <= exp/maxExp && exp/maxExp < 0.66 ? expBarComponent[65]
          : 0.66 <= exp/maxExp && exp/maxExp < 0.67 ? expBarComponent[66]
          : 0.67 <= exp/maxExp && exp/maxExp < 0.68 ? expBarComponent[67]
          : 0.68 <= exp/maxExp && exp/maxExp < 0.69 ? expBarComponent[68]
          : 0.69 <= exp/maxExp && exp/maxExp < 0.7 ? expBarComponent[69]
          : 0.7 <= exp/maxExp && exp/maxExp < 0.71 ? expBarComponent[70]
          : 0.71 <= exp/maxExp && exp/maxExp < 0.72 ? expBarComponent[71]
          : 0.72 <= exp/maxExp && exp/maxExp < 0.73 ? expBarComponent[72]
          : 0.73 <= exp/maxExp && exp/maxExp < 0.74 ? expBarComponent[73]
          : 0.74 <= exp/maxExp && exp/maxExp < 0.75 ? expBarComponent[74]
          : 0.75 <= exp/maxExp && exp/maxExp < 0.76 ? expBarComponent[75]
          : 0.76 <= exp/maxExp && exp/maxExp < 0.77 ? expBarComponent[76]
          : 0.77 <= exp/maxExp && exp/maxExp < 0.78 ? expBarComponent[77]
          : 0.78 <= exp/maxExp && exp/maxExp < 0.79 ? expBarComponent[78]
          : 0.79 <= exp/maxExp && exp/maxExp < 0.8 ? expBarComponent[79]
          : 0.8 <= exp/maxExp && exp/maxExp < 0.81 ? expBarComponent[80]
          : 0.81 <= exp/maxExp && exp/maxExp < 0.82 ? expBarComponent[81]
          : 0.82 <= exp/maxExp && exp/maxExp < 0.83 ? expBarComponent[82]
          : 0.83 <= exp/maxExp && exp/maxExp < 0.84 ? expBarComponent[83]
          : 0.84 <= exp/maxExp && exp/maxExp < 0.85 ? expBarComponent[84]
          : 0.85 <= exp/maxExp && exp/maxExp < 0.86 ? expBarComponent[85]
          : 0.86 <= exp/maxExp && exp/maxExp < 0.87 ? expBarComponent[86]
          : 0.87 <= exp/maxExp && exp/maxExp < 0.88 ? expBarComponent[87]
          : 0.88 <= exp/maxExp && exp/maxExp < 0.89 ? expBarComponent[88]
          : 0.89 <= exp/maxExp && exp/maxExp < 0.9 ? expBarComponent[89]
          : 0.9 <= exp/maxExp && exp/maxExp < 0.91 ? expBarComponent[90]
          : 0.91 <= exp/maxExp && exp/maxExp < 0.92 ? expBarComponent[91]
          : 0.92 <= exp/maxExp && exp/maxExp < 0.93 ? expBarComponent[92]
          : 0.93 <= exp/maxExp && exp/maxExp < 0.94 ? expBarComponent[93]
          : 0.94 <= exp/maxExp && exp/maxExp < 0.95 ? expBarComponent[94]
          : 0.95 <= exp/maxExp && exp/maxExp < 0.96 ? expBarComponent[95]
          : 0.96 <= exp/maxExp && exp/maxExp < 0.97 ? expBarComponent[96]
          : 0.97 <= exp/maxExp && exp/maxExp < 0.98 ? expBarComponent[97]
          : 0.98 <= exp/maxExp && exp/maxExp < 0.99 ? expBarComponent[98]
          : 0.99 <= exp/maxExp && exp/maxExp < 1 ? expBarComponent[99]
          : null
         } alt="Experience Bar" className="absolute" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-left justify-left"
        style={{
          position: 'absolute',
          transform: 'scale(1.4)',
          top: '20%',
          left: '20%',
          right: '80%',
          bottom: '80%',
          marginLeft: '0px',
          marginTop: '0px',
          bottom: '100%',
          display: 'flex',
          alignItems: 'flex-start',
        }}>
          <img src={vaporeonPortraitNormal} alt="Vaporeon Portrait" className="w-16 h-16" />
      </div>
      
      {showDialog && !isPaused && selectedPortraitRef.current === 'Vaporeon_Shouting' ? (
        <div className="text box"
        style={{
          position: 'absolute',
          top: '55%',
          left:'40%',
          zIndex: 9999,
          transform: 'scale(2.5)'
        }}>
        <img src={VaporeonShouting} alt="text box"/>
          </div>
      ) : null}

      {showDialog && !isPaused && textArray.length > 0 ? (
        <div className="first char"
          style={{
            position: 'absolute',
            top: '83.75%',
            left: '37.75%',
            width: '32px',
            height: '32px',
            zIndex: 10000,
            //border: '2px dashed magenta',
            //backgroundColor: 'rgba(255,0,255,0.05)'
          }}
        >
          {textArray.map((segment, index) => (
            <SpriteCanvas
              key={`dialog-char-${index}`}
              text={segment.char}
              color={segment.color}
              alt="Dialog"
              className="absolute w-full h-full"
              style={{
                position: 'absolute',
                left: getDialogLeft(index),
                top: getLengthSummation(index) >= 320 && getLengthSummation(index) < 705 ? `${parseFloat(getDialogTop(segment.char)) + 30}px` : getLengthSummation(index) >= 705 ? `${parseFloat(getDialogTop(segment.char)) + 60}px` : getDialogTop(segment.char),
                width: '100%',
                height: '100%',
              }}
            />
          ))}
          {textArray.map((segment2, index) => (
            <SpriteCanvas
              key={`dialog-char-${index}`}
              text={segment2.char2}
              color={segment2.color2}
              alt="Dialog"
              className="absolute w-full h-full"
              style={{
                position: 'absolute',
                left: getDialogLeft(index),
                top: getLengthSummation(index) >= 320 && getLengthSummation(index) < 705 ? `${parseFloat(getDialogTop(segment2.char2)) + 30}px` : getLengthSummation(index) >= 705 ? `${parseFloat(getDialogTop(segment2.char2)) + 60}px` : getDialogTop(segment2.char2),
                width: '100%',
                height: '100%',
              }}
            />
          ))}
        </div>
      ) : null}
    {isPaused && !showOptions && !showMoves && !showToolbox && !showStatus && (
      <div className="menu" style={{zIndex: 1000}}>
        <h2 className="text-white text-lg">Paused</h2>
        <div className="flex">
          <button className="bg-blue-500 text-white p-2 rounded mr-2" onClick={() => setShowStatus(true)}>Status</button>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setShowMoves(true)}>Moves</button>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setShowToolbox(true)}>Toolbox</button>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setShowOptions(true)}>Options</button>
          <button className="bg-red-500 text-white p-2 rounded" onClick={() => setIsPaused(false)}>Close</button>
        </div>
      </div>
    )}
    {isPaused && showStatus && ( // Show status menu when Status is clicked
      <div className="menu status-menu" style={{zIndex: 1000}}>
        <h2 className="text-white text-lg">Status</h2>
        <p className="text-white">Level: {level}</p>
        <p className="text-white">HP: {playerHP}/{maxPlayerHP}</p>
        <p className="text-white">EXP: {exp}/{maxExp}</p>
        <p className="text-white">Attack: {playerAttack}</p>
        <p className="text-white">Special Attack: {playerSpecialAttack}</p>
        <p className="text-white">Speed: {playerSpeed}</p>
        <p className="text-white">Special Defense: {playerSpecialDefense}</p>
        <p className="text-white">Defense: {playerDefense}</p>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setShowStatus(false)}>Back</button>
      </div>
    )}
    {isPaused && showOptions && ( // Show options menu when options are clicked
      <div className="menu options-menu" style={{zIndex: 1000}}>
        <h2 className="text-white text-lg">Options</h2>
        <label>
          <input type="checkbox" checked={checkBox1} onChange={() => setCheckBox1(!checkBox1)} /> Checkbox 1
        </label>
        <label>
          <input type="checkbox" checked={checkBox2} onChange={() => setCheckBox2(!checkBox2)} /> Checkbox 2
        </label>
        <label>
          <input type="checkbox" checked={checkBox3} onChange={() => setCheckBox3(!checkBox3)} /> Checkbox 3
        </label>
        <label style={{color: 'white', display: 'block', marginTop: 12}}>
          Dialogue Speed: 
          </label>
          <label style={{color: 'white', display: 'block', marginTop: 12, textAlign: 'center'}}>
          'Slow'
          <input
          type='radio'
          name="dialogSpeed"
          value={dialogSpeed}
          onChange={(e) => setDialogSpeed(200)}
          checked={dialogSpeed === 200}
          style={{width: '100%'}}
          />
          'Normal' <input
          type='radio'
          name="dialogSpeed"
          value={dialogSpeed}
          onChange={(e) => setDialogSpeed(100)}
          checked={dialogSpeed === 100}
          style={{width: '100%'}}
        />
          'Fast'
          <input
          type='radio'
          name="dialogSpeed"
          value={dialogSpeed}
          onChange={(e) => setDialogSpeed(50)}
          checked={dialogSpeed === 50}
          style={{width: '100%'}}
          />
           </label>

        <div style={{ marginTop: 12 }}>
          <label style={{color: 'white', display: 'block', marginBottom: 6}}>
            Minimap Size: {minimapSize}px
          </label>
          <input
          type='range'
          min='200'
          max='300'
          value={minimapSize}
          onChange={(e) => setMinimapSize(Number(e.target.value))}
          style={{width: '100%'}}
          />
          </div>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setShowOptions(false)}>Back</button>
      </div>
    )}
    {isPaused && showMoves && ( // Show moves menu when Moves is clicked
      <div className="menu moves-menu" style={{zIndex: 1000}}>
        <h2 className="text-white text-lg">Moves</h2>
        <p className="text-white">Water Pulse - {MOVE_DEFS["Water Pulse"].ppcurr}/{MOVE_DEFS["Water Pulse"].ppmax} PP</p>
        <p className="text-white">Aqua Tail - {MOVE_DEFS["Aqua Tail"].ppcurr}/{MOVE_DEFS["Aqua Tail"].ppmax} PP</p>
        <p className="text-white">Acid Armor - {MOVE_DEFS["Acid Armor"].ppcurr}/{MOVE_DEFS["Acid Armor"].ppmax} PP</p>
        <p className="text-white">Refresh - {MOVE_DEFS["Refresh"].ppcurr}/{MOVE_DEFS["Refresh"].ppmax} PP</p>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setShowMoves(false)}>Back</button>
      </div>
    )}
    {isPaused && showToolbox && (
      <div className="menu"
      style={{
        margin: '10px',
        borderColor: 'blue',
        borderWidth: '4px',
        borderStyle: 'solid',
        backgroundColor: 'rgba(0, 0, 50, 0.8)',
        display: 'grid',
        gridTemplateRows: 'auto minmax(0, 1fr)',
        minHeight: '50vh',
        minWidth: '50vh',
        opacity: '1',
        zIndex: '1000'
      }}>
        <h2 className="text-white text-lg">Toolbox</h2>
        {inventory.length === 0 ? (
          <p className="text-white">No items in inventory.</p>
        ) : (
          <div>
            <ul>
              {inventory.map((item, idx) => (
                <li key={idx} className="text-white flex items-center mb-2">
                  <SpriteCanvas
                    atlasKey={getAtlasKeyForItemName(item.name)}
                    alt={item.name}
                    style={{ width: 32, marginRight: 8 }}
                  />
                  {item.name} x{item.count}
                </li>
              ))}
              
            </ul>
            {/* Mini-menu for item actions */}
            {showItemActionMenu && itemSelected !== null && (
              <div style={{
                position: 'absolute',
                left: '70%',
                top: `${40 * (itemOrder - 1) + 60}px`,
                background: 'rgba(0,0,50,0.95)',
                border: '2px solid white',
                borderRadius: '8px',
                padding: '10px',
                zIndex: 200
              }}>
                <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
                  {selectedItemSpriteRef.current !== Scarf ? itemActionsNormal.map((action, idx) => (
                    <li key={action} style={{
                      color: idx === itemActionIndex ? 'yellow' : 'white',
                      fontWeight: idx === itemActionIndex ? 'bold' : 'normal',
                      marginBottom: '6px',
                      fontSize: '18px',
                    }}>
                      {action}
                    </li>
                  )) : 
                  itemActionsEquip.map((action, idx) => (
                    <li key={action} style={{
                      color: idx === itemActionIndex ? 'yellow' : 'white',
                      fontWeight: idx === itemActionIndex ? 'bold' : 'normal',
                      marginBottom: '6px',
                      fontSize: '18px',
                    }}>
                      {action}
                    </li>
                  ))}

                </ul>
              </div>
            )}

          </div>
        )}
        
        <div className="menu-itemSelector">
          <img src={itemSelector} alt="Item Selector" style={{ 
            width: 64, 
            height: 64,
            marginLeft: '55%',
            animation: 'flicker 1s infinite',
            transform: itemOrder <= 1 ? `none` : `translateY(${(itemOrder - 1) * 40}px)`,
            opacity: showItemActionMenu ? 1 : itemSelected !== null && flickerFrame !== 0 ? 1 : 0,
            zIndex: itemSelected !== null ? 101 : 'auto',
            position: 'fixed',
            top: '35px'
          }} />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setShowToolbox(false)}>Back</button>
      </div>
    )}
    </div>
  );
};
const MemoizedGame = React.memo(Game);

// Render the memoized component
ReactDOM.render(
  <MemoizedGame />, // Use the memoized component as a JSX element
  document.getElementById('root')
  );
