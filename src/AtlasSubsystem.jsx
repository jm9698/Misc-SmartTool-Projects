// ========== SPRITE ATLAS SYSTEM ==========
export const AtlasSubsystem = {
  atlasCache: {},
  itemAtlasUrl: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/atlas/ItemAtlasTest.png',
  pokemonAtlasUrl: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/atlas/PokemonAtlas.png',
  vfxAtlasUrl: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Pokemon%20Sprites/atlas/VfxAtlas.png',
  DMGAtlasUrl: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/DMG/atlas/DMG%20Atlas.png',
  textAtlasUrl: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Lang/Atlas/TextAtlas.png'
 }
const { itemAtlasUrl, pokemonAtlasUrl, vfxAtlasUrl, DMGAtlasUrl, textAtlasUrl } = AtlasSubsystem;

 export const TextAtlas = {
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

export const DMGAtlas = {
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
export const ItemAtlas = {

  // Seeds
  Reviverseed: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Seeds/Seed_Yellow.png', x: 107, y: 37, w: 16, h: 16 } },
  
  // Food
  Apple: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Apple.png', x: 27, y: 37, w: 18, h: 18 } },
  Bigapple: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Big%20Apple.png', x: 47, y: 37, w: 18, h: 18 } },
  Goldenapple: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Golden%20Apple.png', x: 67, y: 37, w: 18, h: 18 } },
  Grimyfood: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Food/Grimy%20Food.png', x: 87, y: 37, w: 18, h: 18 } },
  
  // Drinks
  Maxether: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Ether.png', x: 41, y: 17, w: 18, h: 18 } },
  Maxelixir: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Elixir.png', x: 1, y: 37, w: 24, h: 24 } },
  Protein: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Protein.png', x: 81, y: 17, w: 18, h: 18 } },
  Calcium: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Calcium.png', x: 1, y: 17, w: 18, h: 18 } },
  Iron: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Iron.png', x: 61, y: 17, w: 18, h: 18 } },
  Zinc: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Zinc.png', x: 101, y: 17, w: 18, h: 18 } },
  Carbos: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Drinks/Carbos.png', x: 21, y:17, w:18, h:18 } },
  
  // Equipment
  Scarf: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Equips/Scarf.png', x: 8, y: 7, w: 16, h: 14 } },
  
  // Orbs
  Orb: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Orbs/Wonder_Orb.png', x: 19, y: 1, w: 16, h: 14 } },
  
  // Throwables
  GeoPebble: { atlas: { sheet: itemAtlasUrl, sprite: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Item%20Sprites/Throwables/Arc/Geo_Pebble.png', x: 51, y: 1, w: 12, h: 9 } }
};
export const PokemonAtlas = {
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

export const vfxAtlas = {
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
AtlasSubsystem.loadAtlasImage = (atlasUrl) => {
  if (!AtlasSubsystem.atlasCache[atlasUrl]) {
    AtlasSubsystem.atlasCache[atlasUrl] = new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load atlas: ${atlasUrl}`));
      img.src = atlasUrl;
    });
  }
  return AtlasSubsystem.atlasCache[atlasUrl];
};

// Helper functions to retrieve sprite URLs based on requirements
AtlasSubsystem.getItemSprite = (itemName) => {
  const itemdata = ItemAtlas[itemName].atlas;
  if (!itemdata) return null;
  return itemdata.sprite;
};
AtlasSubsystem.getDMGSprite = (dmgSprite, frame) => {
  const spriteData = DMGAtlas[dmgSprite];
  if (!spriteData) return null;
  const frameData = spriteData[frame];
  if (!frameData) return null;
  return frameData.url;
};
AtlasSubsystem.getPokemonSprite = (pokemon, animation, direction, frame) => {
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
AtlasSubsystem.getVfxSprite = (sprite, direction, frame) => {
  const spriteData = vfxAtlas[sprite];
  if (!spriteData) return null;
  const dirData = spriteData[direction];
  if (!dirData) return null;
  const frameData = dirData[frame];
  if (!frameData) return null;
  return frameData.url;
};
AtlasSubsystem.getTextSprite = (color, text) => {
  const colorData = TextAtlas[color];
  if (!colorData) return null;
  const textData = colorData[text];
  if (!textData) return null;
  return textData.url;
}

// Get atlas metadata for a specific item key (Generally unused)
AtlasSubsystem.getItemAtlasData = (itemName) => {
  const item = ItemAtlas[itemName];
  return item ? item.atlas : null;
};
AtlasSubsystem.getPokemonAtlasData = (pokemon, animation, direction, frame) => {
  const pokemonData = PokemonAtlas[pokemon];
  if (!pokemonData) return null;
  const animData = pokemonData[animation];
  if (!animData) return null;
  const dirData = animData[direction];
  if (!dirData) return null;
  const frameData = dirData[frame];
  return frameData ? frameData.atlas : null;
};
AtlasSubsystem.getVfxAtlasData = (sprite, direction, frame) => {
  const spriteData = vfxAtlas[sprite];
  if (!spriteData) return null;
  const dirData = spriteData[direction];
  if (!dirData) return null;
  const frameData = dirData[frame];
  return frameData ? frameData.atlas : null;
};
AtlasSubsystem.getDMGAtlasData = (dmgSprite, frame) => {
  const spriteData = DMGAtlas[dmgSprite];
  if (!spriteData) return null;
  const frameData = spriteData[frame];
  return frameData ? frameData.atlas : null;
};
AtlasSubsystem.getTextAtlasData = (color, text) => {
  const colorData = TextAtlas[color];
  if (!colorData) return null;
  const textData = colorData[text];
  return textData ? textData.atlas : null;
};

// Map ItemDef name to ItemAtlas key for rendering
AtlasSubsystem.getAtlasKeyForItemName = (itemDefName) => {
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