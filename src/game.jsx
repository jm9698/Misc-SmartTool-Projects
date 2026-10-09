import { AtlasSubsystem, ItemAtlas, PokemonAtlas, vfxAtlas, DMGAtlas, TextAtlas } from './AtlasSubsystem.jsx';
import { MOVE_DEFS, ITEM_DEFS, ENEMY_DEFS, itemUrls } from './DefintionSubsystem.jsx';
import { SpriteCanvas, TileCanvas, loadTileImage } from './CanvasSubsystem.jsx';
import { useEnemySubsystem } from './EnemySubsystem.jsx';

const MAX_INVENTORY_SLOTS = 10;
// Enemy moves
const rockThrowVfxFrames = Array.from({ length: 30 }, (_, i) => AtlasSubsystem.getVfxSprite('RockThrow', 'none', i + 1));

// Text Portraits
const VaporeonShouting = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_000.png';
const EeveeCrying = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Scene%20Dialog/Debug/DebugTextFull_025.png';

// Enemy sprite URLs
  //Lunatone
    // Idle animation
const lunatoneSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'down', i + 1));
const lunatoneUpSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'up', i + 1));
const lunatoneLeftSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'left', i + 1));
const lunatoneRightSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'right', i + 1));
const lunatoneUpRightSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'upright', i + 1));
const lunatoneUpLeftSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'upleft', i + 1));
const lunatoneDownLeftSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'downleft', i + 1));
const lunatoneDownRightSprites = Array.from({ length: 8 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'idle', 'downright', i + 1));
const lunatoneSleepSprites = Array.from({ length: 6 }, (_, i) => AtlasSubsystem.getPokemonSprite('Lunatone', 'sleep', 'none', i + 1));
// Vaporeon sprite URLs
  // Idle animations
const vaporeonSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'down', i + 1));
const vaporeonLeftSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'left', i + 1));
const vaporeonRightSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'right', i + 1));
const vaporeonUpSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'up', i + 1));
const vaporeonDownLeftSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'downleft', i + 1));
const vaporeonDownRightSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'downright', i + 1));
const vaporeonUpLeftSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'upleft', i + 1));
const vaporeonUpRightSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'idle', 'upright', i + 1));
  // Walking animations
const vaporeonDownWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'down', i + 1));
const vaporeonUpWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'up', i + 1));
const vaporeonLeftWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'left', i + 1));
const vaporeonRightWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'right', i + 1));
const vaporeonUpLeftWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'upleft', i + 1));
const vaporeonUpRightWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'upright', i + 1));
const vaporeonDownLeftWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'downleft', i + 1));
const vaporeonDownRightWalkSprites = Array.from({ length: 4 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'walk', 'downright', i + 1));
  // Spin animations
const vaporeonUpSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'up', i + 1));
const vaporeonUpRightSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'upright', i + 1));
const vaporeonRightSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'right', i + 1));
const vaporeonDownRightSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'downright', i + 1));
const vaporeonDownSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'down', i + 1));
const vaporeonDownLeftSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'downleft', i + 1));
const vaporeonLeftSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'left', i + 1));
const vaporeonUpLeftSpinSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'spin', 'upleft', i + 1));
  // Aqua Tail vfx
    //4 -> 0; 8 -> 5
 const vaporeonAquaTailUpSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'up', i + 1));
 const vaporeonAquaTailDownSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'down', i + 1));
 const vaporeonAquaTailLeftSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'left', i + 1));
 const vaporeonAquaTailRightSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'right', i + 1));
 const vaporeonAquaTailUpRightSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'upright', i + 1));
 const vaporeonAquaTailUpLeftSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'upleft', i + 1));
 const vaporeonAquaTailDownRightSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'downright', i + 1));
 const vaporeonAquaTailDownLeftSprites = Array.from({ length: 9 }, (_, i) => AtlasSubsystem.getVfxSprite('AquaTail', 'downleft', i + 1));

// Sleep animations
const vaporeonSleepSprites = Array.from({ length: 2 }, (_, i) => AtlasSubsystem.getPokemonSprite('Vaporeon', 'sleep', 'none', i + 1));
// VFX animations
const DMG1VfxFrames = Array.from({ length: 11 }, (_, i) => AtlasSubsystem.getDMGSprite('DMG1', i + 1));

  // Level up VFX
  //todo: add to atlas subsystem
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
  //todo: add to atlas subsystem
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

const Sprites = {
  tiles: {
    wallSpriteLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Left%20Shadow).png',
    wallSpriteRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Right%20Shadow).png',
    wallSpriteDown: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Bottom%20Shadow).png',
    wallSpriteUp: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Top%20Shadow).png',
    cornerSpriteTopLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Corner%20Shadow%20-%20BR).png',
    cornerSpriteTopRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Corner%20Shadow%20-%20BL).png',
    cornerSpriteBottomLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Corner%20Shadow%20-%20TR).png',
    cornerSpriteBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Corner%20Shadow%20-%20TL).png',
    enclosedWallSprite1: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Full%20-%20No%20Shadow).png',
    enclosedWallSprite2: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Full%20-%20No%20Shadow).png',
    enclosedWallSprite3: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Full%20-%20No%20Shadow).png',
    enclosedWallSprite4: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(Full%20-%20No%20Shadow).png',
    innerCornerTopRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(TR%20Shadow).png',
    innerCornerTopLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(TL%20Shadow).png',
    innerCornerBottomRight: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(BR%20Shadow).png',
    innerCornerBottomLeft: 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/Tiles/Area1/Test%20Tile%20%232%20(BL%20Shadow).png',
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

//Stair Sprite (proto)
const stairSprite = 'https://raw.githubusercontent.com/jm9698/Misc-SmartTool-Projects/refs/heads/main/Game%20assets/General%20sprites/StairsWithTile.png';
//Turn interval in milliseconds
const turnIntervalMs = 500;

// ====== GAME COMPONENT STARTS HERE ======

const Game = () => {
const enemySubsystem = useEnemySubsystem();
//FPS counter
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
//Start React state declarations here
const [dungeon, setDungeon] = React.useState([]);
const dungeonRef = React.useRef(null);
const VIEW_RADIUS = 15; // 15 tiles each direction -> 31x31 viewport
const VIEW_COLUMN_BUFFER = 0; // render one extra column on each side to avoid tile pop-in -> Marked for removal
//Consts to control the size of the dungeon
const minHeight = 65;
const maxHeight = 75;
const minWidth = 65;
const maxWidth = 75;
const height = randInt(minHeight, maxHeight + 1);
const width = randInt(minWidth, maxWidth + 1);
//Initialize stair position and floor count
const [stairs, setStairs] = React.useState({ x: 0, y: 0 });
const [floor, setFloor] = React.useState(1);

//DMG VFX, Split for each enemy slot
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
//Indexes for DMG VFX frames
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
const [hungerTicks, setHungerTicks] = React.useState(0); // Ticks since last hunger decrease
const [hungry, setHungry] = React.useState(false); // 20% hunger or below - not binded yet
const [isStarving, setIsStarving] = React.useState(false); // State to control starvation damage
const [warned, setWarned] = React.useState(false); // True if the player has been warned about low hunger, returns false after restoring hunger

  // Attack booleans
  const [rockThrow, setRockThrow] = React.useState(false); //Should rock throw display
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
const [currencyTiles, setCurrencyTiles] = React.useState([]); //Initialize Currency tiles
const [currency, setCurrency] = React.useState(0); //Quantity of Currency collected
const currencyTilesRef = React.useRef(currencyTiles);

// Item tiles and inventory
const [itemTiles, setItemTiles] = React.useState([]); //Initialize item tiles
const itemTilesRef = React.useRef(itemTiles);
const [itemTilesIndex, setItemTilesIndex] = React.useState([]); // Index for cycling through item tiles
const [itemTilesIndexRef, setItemTilesIndexRef] = React.useState([]);
const [natItemOrder, setNatItemOrder] = React.useState(0); // Natural item order for cycling through items (Also tracks the number of items in the inventory)
const [itemOrder, setItemOrder] = React.useState(0); // Position based item order when cycling through items (Tracks the itemSelected index in the inventory)
const [itemSelected, setItemSelected] = React.useState(null); // Index of selected item in inventory
const [inventoryIndex, setInventoryIndex] = React.useState([]); // Index for navigating inventory
const [flickerFrame, setFlickerFrame] = React.useState(0); // Frame for flickering effect for itemSelector icon
const [inventory, setInventory] = React.useState([]); // Tracks the items in the inventory (array of item objects)
const inventoryRef = React.useRef(inventory);
const [itemEquipped, setItemEquipped] = React.useState(null); // Tracks the currently equipped item (item object)
const [itemEquippedId, setItemEquippedId] = React.useState(null); // Tracks the order of the currently equipped item (Used to handle duplicate equips in the inventory)
const [selectedAction, setSelectedAction] = React.useState(''); // Tracks the selected action for the item (Use, Throw, Discard, Equip)
const [selectedItemSprite, setSelectedItemSprite] = React.useState(null); // Tracks the sprite of the selected item (Used to display the item in the inventory)
const selectedItemSpriteRef = React.useRef(selectedItemSprite);
const [willConsumeItemInventory, setWillConsumeItemInventory] = React.useState(false);
const willConsumeItemInventoryRef = React.useRef(willConsumeItemInventory);
const [inventoryFull, setInventoryFull] = React.useState(false);

const getInventoryIndex = (inventory, ITEM_DEFS) => { //Marked for removal
  return inventory.map((item, position) => ({ //^^
    item, //^^
    itemDef: ITEM_DEFS[item.name], //^^
    position //^^
  })); //^^
}; //^^
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
const cameraTransformRef = React.useRef('');
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
React.useEffect(() => { enemySubsystem.enemy1Pos.ref.current = enemySubsystem.enemy1Pos.state ; }, [enemySubsystem.enemy1Pos.state]);
React.useEffect(() => { enemySubsystem.enemy2Pos.ref.current = enemySubsystem.enemy2Pos.state ; }, [enemySubsystem.enemy2Pos.state]);
React.useEffect(() => { enemySubsystem.enemy3Pos.ref.current = enemySubsystem.enemy3Pos.state ; }, [enemySubsystem.enemy3Pos.state]);
React.useEffect(() => { enemySubsystem.enemy4Pos.ref.current = enemySubsystem.enemy4Pos.state ; }, [enemySubsystem.enemy4Pos.state]);
React.useEffect(() => { enemySubsystem.enemy5Pos.ref.current = enemySubsystem.enemy5Pos.state ; }, [enemySubsystem.enemy5Pos.state]);
React.useEffect(() => { enemySubsystem.enemy6Pos.ref.current = enemySubsystem.enemy6Pos.state ; }, [enemySubsystem.enemy6Pos.state]);
React.useEffect(() => { enemySubsystem.enemy7Pos.ref.current = enemySubsystem.enemy7Pos.state ; }, [enemySubsystem.enemy7Pos.state]);
React.useEffect(() => { enemySubsystem.enemy8Pos.ref.current = enemySubsystem.enemy8Pos.state ; }, [enemySubsystem.enemy8Pos.state]);
React.useEffect(() => { playerPosRef.current = playerPos ; }, [playerPos]);
React.useEffect(() => { willConsumeItemRef.current = willConsumeItem ; }, [willConsumeItem]);
React.useEffect(() => { targetedRef.current = targeted ; }, [targeted]);
React.useEffect(() => { selectedItemSpriteRef.current = selectedItemSprite ; }, [selectedItemSprite]);
React.useEffect(() => { willConsumeItemInventoryRef.current = willConsumeItemInventory ; }, [willConsumeItemInventory]);
React.useEffect(() => { enemySubsystem.enemy1MoveBehavior.ref.current = enemySubsystem.enemy1MoveBehavior.state ; }, [enemySubsystem.enemy1MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy1AttackBehavior.ref.current = enemySubsystem.enemy1AttackBehavior.state ; }, [enemySubsystem.enemy1AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy2MoveBehavior.ref.current = enemySubsystem.enemy2MoveBehavior.state ; }, [enemySubsystem.enemy2MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy2AttackBehavior.ref.current = enemySubsystem.enemy2AttackBehavior.state ; }, [enemySubsystem.enemy2AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy3MoveBehavior.ref.current = enemySubsystem.enemy3MoveBehavior.state ; }, [enemySubsystem.enemy3MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy3AttackBehavior.ref.current = enemySubsystem.enemy3AttackBehavior.state ; }, [enemySubsystem.enemy3AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy4MoveBehavior.ref.current = enemySubsystem.enemy4MoveBehavior.state ; }, [enemySubsystem.enemy4MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy4AttackBehavior.ref.current = enemySubsystem.enemy4AttackBehavior.state ; }, [enemySubsystem.enemy4AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy5MoveBehavior.ref.current = enemySubsystem.enemy5MoveBehavior.state ; }, [enemySubsystem.enemy5MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy5AttackBehavior.ref.current = enemySubsystem.enemy5AttackBehavior.state ; }, [enemySubsystem.enemy5AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy6MoveBehavior.ref.current = enemySubsystem.enemy6MoveBehavior.state ; }, [enemySubsystem.enemy6MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy6AttackBehavior.ref.current = enemySubsystem.enemy6AttackBehavior.state ; }, [enemySubsystem.enemy6AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy7MoveBehavior.ref.current = enemySubsystem.enemy7MoveBehavior.state ; }, [enemySubsystem.enemy7MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy7AttackBehavior.ref.current = enemySubsystem.enemy7AttackBehavior.state ; }, [enemySubsystem.enemy7AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy8MoveBehavior.ref.current = enemySubsystem.enemy8MoveBehavior.state ; }, [enemySubsystem.enemy8MoveBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy8AttackBehavior.ref.current = enemySubsystem.enemy8AttackBehavior.state ; }, [enemySubsystem.enemy8AttackBehavior.state]);
React.useEffect(() => { enemySubsystem.enemy1Attacking.ref.current = enemySubsystem.enemy1Attacking.state ; }, [enemySubsystem.enemy1Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy2Attacking.ref.current = enemySubsystem.enemy2Attacking.state ; }, [enemySubsystem.enemy2Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy3Attacking.ref.current = enemySubsystem.enemy3Attacking.state ; }, [enemySubsystem.enemy3Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy4Attacking.ref.current = enemySubsystem.enemy4Attacking.state ; }, [enemySubsystem.enemy4Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy5Attacking.ref.current = enemySubsystem.enemy5Attacking.state ; }, [enemySubsystem.enemy5Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy6Attacking.ref.current = enemySubsystem.enemy6Attacking.state ; }, [enemySubsystem.enemy6Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy7Attacking.ref.current = enemySubsystem.enemy7Attacking.state ; }, [enemySubsystem.enemy7Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy8Attacking.ref.current = enemySubsystem.enemy8Attacking.state ; }, [enemySubsystem.enemy8Attacking.state]);
React.useEffect(() => { enemySubsystem.enemy1Sleeping.ref.current = enemySubsystem.enemy1Sleeping.state ; }, [enemySubsystem.enemy1Sleeping.state]);
React.useEffect(() => { enemySubsystem.enemy2Sleeping.ref.current = enemySubsystem.enemy2Sleeping.state ; }, [enemySubsystem.enemy2Sleeping.state]);
React.useEffect(() => { enemySubsystem.enemy3Sleeping.ref.current = enemySubsystem.enemy3Sleeping.state ; }, [enemySubsystem.enemy3Sleeping.state]);
React.useEffect(() => { enemySubsystem.enemy4Sleeping.ref.current = enemySubsystem.enemy4Sleeping.state ; }, [enemySubsystem.enemy4Sleeping.state]);
React.useEffect(() => { enemySubsystem.enemy5Sleeping.ref.current = enemySubsystem.enemy5Sleeping.state ; }, [enemySubsystem.enemy5Sleeping.state]);
React.useEffect(() => { enemySubsystem.enemy6Sleeping.ref.current = enemySubsystem.enemy6Sleeping.state ; }, [enemySubsystem.enemy6Sleeping.state]);
React.useEffect(() => { enemySubsystem.enemy7Sleeping.ref.current = enemySubsystem.enemy7Sleeping.state ; }, [enemySubsystem.enemy7Sleeping.state]);
React.useEffect(() => { enemySubsystem.enemy8Sleeping.ref.current = enemySubsystem.enemy8Sleeping.state ; }, [enemySubsystem.enemy8Sleeping.state]);
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
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== playerPos.x || y !== playerPos.y) && (itemTiles.some(itemTiles => itemTiles.x === x && itemTiles.y === y) === false) && (currencyTiles.some(currencyTiles => currencyTiles.x === x && currencyTiles.y === y) === false) && (enemySubsystem.enemy1.state ? (enemySubsystem.enemy1Pos.state.x !== x || enemySubsystem.enemy1Pos.state.y !== y) : true) && (enemySubsystem.enemy2.state ? (enemySubsystem.enemy2Pos.state.x !== x || enemySubsystem.enemy2Pos.state.y !== y) : true) && (enemySubsystem.enemy3.state ? (enemySubsystem.enemy3Pos.state.x !== x || enemySubsystem.enemy3Pos.state.y !== y) : true) && (enemySubsystem.enemy4.state ? (enemySubsystem.enemy4Pos.state.x !== x || enemySubsystem.enemy4Pos.state.y !== y) : true) && (enemySubsystem.enemy5.state ? (enemySubsystem.enemy5Pos.state.x !== x || enemySubsystem.enemy5Pos.state.y !== y) : true) && (enemySubsystem.enemy6.state ? (enemySubsystem.enemy6Pos.state.x !== x || enemySubsystem.enemy6Pos.state.y !== y) : true) && (enemySubsystem.enemy7.state ? (enemySubsystem.enemy7Pos.state.x !== x || enemySubsystem.enemy7Pos.state.y !== y) : true) && (enemySubsystem.enemy8.state ? (enemySubsystem.enemy8Pos.state.x !== x || enemySubsystem.enemy8Pos.state.y !== y) : true)) {
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
  console.log('selectedItemSprite updated to: ', selectedItemSprite);
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
      if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && dungeon[y][x] !== playerPos.x && dungeon[y][x] !== playerPos.y && !enemySubsystem.enemyHereTiles.ref.current.find(tile => tile.x === x && tile.y === y && !itemTilesRef.current.find(tile => tile.x === x && tile.y === y))){
        floorPositions.push({ x, y });
      }
    }
  }

  // Shuffle and pick currencyCount locations
  for (let i = 0; i < currencyCount && floorPositions.length > 0; i++) {
    floorPositions.splice(floorPositions.findIndex(pos => pos.x === playerPos.x && pos.y === playerPos.y), 1); // Ensure player position is not included
    floorPositions = floorPositions.filter(pos => !enemySubsystem.enemyHereTiles.ref.current.find(tile => tile.x === pos.x && tile.y === pos.y)); // Ensure enemy positions are not included
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
      if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && !enemySubsystem.enemyHereTiles.ref.current.find(tile => tile.x === x && tile.y === y) && !currencyTilesRef.current.find(tile => tile.x === x && tile.y === y) && dungeon[y][x] !== playerPos.x && dungeon[y][x] !== playerPos.y) {
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
    floorPositions = floorPositions.filter(pos => !enemySubsystem.enemyHereTiles.ref.current.find(tile => tile.x === pos.x && tile.y === pos.y)); // Ensure enemy positions are not included
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
    enemySubsystem.enemy1HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx1({DMG: DMG, Active: true, X: enemySubsystem.enemy1Pos.ref.current.x, Y: enemySubsystem.enemy1Pos.ref.current.y - 1});
    console.log('Enemy1HP:', enemySubsystem.enemy1HP.state);
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType1.state].name + ' fainted!');
      enemySubsystem.enemy1Pos.set({x: 2, y: 2});
    }
  }
  if (target === 'enemy2') {
    enemySubsystem.enemy2HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx2({DMG: DMG, Active: true, X: enemySubsystem.enemy2Pos.ref.current.x, Y: enemySubsystem.enemy2Pos.ref.current.y - 1});
    console.log('Enemy2HP:', DMGVfx2Ref.current);
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType2.state].name + ' fainted!');
      enemySubsystem.enemy2Pos.set({x: 2, y: 2});
    }
  }
  if (target === 'enemy3') {
    enemySubsystem.enemy3HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx3({DMG: DMG, Active: true, X: enemySubsystem.enemy3Pos.ref.current.x, Y: enemySubsystem.enemy3Pos.ref.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType3.state].name + ' fainted!');
      enemySubsystem.enemy3Pos.set({x: 2, y: 2});
    }
  }
  if (target === 'enemy4') {
    enemySubsystem.enemy4HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx4({DMG: DMG, Active: true, X: enemySubsystem.enemy4Pos.ref.current.x, Y: enemySubsystem.enemy4Pos.ref.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType4.state].name + ' fainted!');
      enemySubsystem.enemy4Pos.set({x: 2, y: 2});
    }
  }
  if (target === 'enemy5') {
    enemySubsystem.enemy5HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx5({DMG: DMG, Active: true, X: enemySubsystem.enemy5Pos.ref.current.x, Y: enemySubsystem.enemy5Pos.ref.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType5.state].name + ' fainted!');
      enemySubsystem.enemy5Pos.set({x: 2, y: 2});
    }
  }
  if (target === 'enemy6') {
    enemySubsystem.enemy6HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx6({DMG: DMG, Active: true, X: enemySubsystem.enemy6Pos.ref.current.x, Y: enemySubsystem.enemy6Pos.ref.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType6.state].name + ' fainted!');
      enemySubsystem.enemy6Pos.set({x: 2, y: 2});
    }
  }
  if (target === 'enemy7') {
    enemySubsystem.enemy7HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx7({DMG: DMG, Active: true, X: enemySubsystem.enemy7Pos.ref.current.x, Y: enemySubsystem.enemy7Pos.ref.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType7.state].name + ' fainted!');
      enemySubsystem.enemy7Pos.set({x: 2, y: 2});
    }
  }
  if (target === 'enemy8') {
    enemySubsystem.enemy8HP.set(prev => Math.max(prev - DMG, 0));
    setDMGVfx8({DMG: DMG, Active: true, X: enemySubsystem.enemy8Pos.ref.current.x, Y: enemySubsystem.enemy8Pos.ref.current.y - 1});
    if (targetWillDie) {
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType8.state].name + ' fainted!');
      enemySubsystem.enemy8Pos.set({x: 2, y: 2});
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
//TODO: Add to EnemySubsystem along with other AI functions
function enemyUseMove(move, key){
  key === 1 ? enemySubsystem.enemy1AttackBehavior.set(true) : key === 2 ? enemySubsystem.enemy2AttackBehavior.set(true) : key === 3 ? enemySubsystem.enemy3AttackBehavior.set(true) : key === 4 ? enemySubsystem.enemy4AttackBehavior.set(true) : key === 5 ? enemySubsystem.enemy5AttackBehavior.set(true) : key === 6 ? enemySubsystem.enemy6AttackBehavior.set(true) : key === 7 ? enemySubsystem.enemy7AttackBehavior.set(true) : key === 8 ? enemySubsystem.enemy8AttackBehavior.set(true) : null;
  setTimeout(() => {
  if (move.name === 'Rock Throw'){
    setRockThrow(true);
    setProjectilePos(prev => ({ ...prev, [key]: { x: 0, y: 0 } })); // Reset projectile position at start
    // Set transform based on current player position at the moment of casting
    const transformValue = playerPosRef.current.x < width/3 ? 'translatex(80%) translateY(-615%)' : 'translatex(65%) translateY(-615%)';
    setRockThrowTransform(transformValue);
    key === 1 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType1.state].name + ' used Rock Throw!') : key === 2 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType2.state].name + ' used Rock Throw!') : key === 3 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType3.state].name + ' used Rock Throw!') : key === 4 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType4.state].name + ' used Rock Throw!') : key === 5 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType5.state].name + ' used Rock Throw!') : key === 6 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType6.state].name + ' used Rock Throw!') : key === 7 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType7.state].name + ' used Rock Throw!') : key === 8 ? addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType8.state].name + ' used Rock Throw!') : null;
    console.log(`Enemy ${key} used Rock Throw!`);
  }
  if (key === 1){
    if (enemySubsystem.enemy1Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy1LastDirection.set('right');
    } else if (enemySubsystem.enemy1Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy1LastDirection.set('left');
    } else if (enemySubsystem.enemy1Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy1Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy1LastDirection.set('down');
    } else if (enemySubsystem.enemy1Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy1Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy1LastDirection.set('up');
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy1LastDirection.set('downRight');
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy1LastDirection.set('downLeft');
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy1LastDirection.set('upRight');
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy1LastDirection.set('upLeft');
    }
  }
  else if (key === 2){
    if (enemySubsystem.enemy2Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy2LastDirection.set('right');
    } else if (enemySubsystem.enemy2Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy2LastDirection.set('left');
    } else if (enemySubsystem.enemy2Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy2Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy2LastDirection.set('down');
    } else if (enemySubsystem.enemy2Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy2Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy2LastDirection.set('up');
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy2LastDirection.set('downRight');
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy2LastDirection.set('downLeft');
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy2LastDirection.set('upRight');
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy2LastDirection.set('upLeft');
    }
  }
  else if (key === 3){
    if (enemySubsystem.enemy3Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy3LastDirection.set('right');
    } else if (enemySubsystem.enemy3Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy3LastDirection.set('left');
    } else if (enemySubsystem.enemy3Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy3Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy3LastDirection.set('down');
    } else if (enemySubsystem.enemy3Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy3Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy3LastDirection.set('up');
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy3LastDirection.set('downRight');
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy3LastDirection.set('downLeft');
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy3LastDirection.set('upRight');
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy3LastDirection.set('upLeft');
    }
  }
  else if (key === 4){
    if (enemySubsystem.enemy4Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy4LastDirection.set('right');
    } else if (enemySubsystem.enemy4Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy4LastDirection.set('left');
    } else if (enemySubsystem.enemy4Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy4Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy4LastDirection.set('down');
    } else if (enemySubsystem.enemy4Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy4Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy4LastDirection.set('up');
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy4LastDirection.set('downRight');
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy4LastDirection.set('downLeft');
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy4LastDirection.set('upRight');
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy4LastDirection.set('upLeft');
    }
  }
  else if (key === 5){
    if (enemySubsystem.enemy5Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy5LastDirection.set('right');
    } else if (enemySubsystem.enemy5Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy5LastDirection.set('left');
    } else if (enemySubsystem.enemy5Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy5Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy5LastDirection.set('down');
    } else if (enemySubsystem.enemy5Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy5Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy5LastDirection.set('up');
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy5LastDirection.set('downRight');
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy5LastDirection.set('downLeft');
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy5LastDirection.set('upRight');
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy5LastDirection.set('upLeft');
    }
  }
  else if (key === 6){
    if (enemySubsystem.enemy6Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy6LastDirection.set('right');
    } else if (enemySubsystem.enemy6Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy6LastDirection.set('left');
    } else if (enemySubsystem.enemy6Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy6Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy6LastDirection.set('down');
    } else if (enemySubsystem.enemy6Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy6Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy6LastDirection.set('up');
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy6LastDirection.set('downRight');
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy6LastDirection.set('downLeft');
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy6LastDirection.set('upRight');
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy6LastDirection.set('upLeft');
    }
  }
  else if (key === 7){
    if (enemySubsystem.enemy7Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y === playerPosRef.current.y){
      setEnemy7LastDirection('right');
    } else if (enemySubsystem.enemy7Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y === playerPosRef.current.y){
      setEnemy7LastDirection('left');
    } else if (enemySubsystem.enemy7Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy7Pos.ref.current.x === playerPosRef.current.x){
      setEnemy7LastDirection('down');
    } else if (enemySubsystem.enemy7Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy7Pos.ref.current.x === playerPosRef.current.x){
      setEnemy7LastDirection('up');
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y < playerPosRef.current.y){
      setEnemy7LastDirection('downRight');
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y < playerPosRef.current.y){
      setEnemy7LastDirection('downLeft');
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y > playerPosRef.current.y){
      setEnemy7LastDirection('upRight');
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y > playerPosRef.current.y){
      setEnemy7LastDirection('upLeft');
    }
  }
  else if (key === 8){
    if (enemySubsystem.enemy8Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy8LastDirection.set('right');
    } else if (enemySubsystem.enemy8Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y === playerPosRef.current.y){
      enemySubsystem.enemy8LastDirection.set('left');
    } else if (enemySubsystem.enemy8Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy8Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy8LastDirection.set('down');
    } else if (enemySubsystem.enemy8Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy8Pos.ref.current.x === playerPosRef.current.x){
      enemySubsystem.enemy8LastDirection.set('up');
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy8LastDirection.set('downRight');
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y < playerPosRef.current.y){
      enemySubsystem.enemy8LastDirection.set('downLeft');
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy8LastDirection.set('upRight');
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y > playerPosRef.current.y){
      enemySubsystem.enemy8LastDirection.set('upLeft');
    }
  }
  }, turnIntervalMs);
  setTimeout(() => {
    key === 1 ? enemySubsystem.enemy1AttackBehavior.set(false) : key === 2 ? enemySubsystem.enemy2AttackBehavior.set(false) : key === 3 ? enemySubsystem.enemy3AttackBehavior.set(false) : key === 4 ? enemySubsystem.enemy4AttackBehavior.set(false) : key === 5 ? enemySubsystem.enemy5AttackBehavior.set(false) : key === 6 ? enemySubsystem.enemy6AttackBehavior.set(false) : key === 7 ? enemySubsystem.enemy7AttackBehavior.set(false) : key === 8 ? enemySubsystem.enemy8AttackBehavior.set(false) : null;
    key === 1 ? enemySubsystem.enemy1Attacking.set(false) : key === 2 ? enemySubsystem.enemy2Attacking.set(false) : key === 3 ? enemySubsystem.enemy3Attacking.set(false) : key === 4 ? enemySubsystem.enemy4Attacking.set(false) : key === 5 ? enemySubsystem.enemy5Attacking.set(false) : key === 6 ? enemySubsystem.enemy6Attacking.set(false) : key === 7 ? enemySubsystem.enemy7Attacking.set(false) : key === 8 ? enemySubsystem.enemy8Attacking.set(false) : null;
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
    const targetX = (enemySubsystem.enemy1Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy1Pos.ref.current.y - playerPosRef.current.y);
    
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
    const targetX = (enemySubsystem.enemy2Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy2Pos.ref.current.y - playerPosRef.current.y);
    
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
    const targetX = (enemySubsystem.enemy3Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy3Pos.ref.current.y - playerPosRef.current.y);
    
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
    const targetX = (enemySubsystem.enemy4Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy4Pos.ref.current.y - playerPosRef.current.y);
    
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
    const targetX = (enemySubsystem.enemy5Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy5Pos.ref.current.y - playerPosRef.current.y);
    
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
    const targetX = (enemySubsystem.enemy6Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy6Pos.ref.current.y - playerPosRef.current.y);
    
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
    const targetX = (enemySubsystem.enemy7Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy7Pos.ref.current.y - playerPosRef.current.y);
    
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
    const targetX = (enemySubsystem.enemy8Pos.ref.current.x - playerPosRef.current.x);
    const targetY = (enemySubsystem.enemy8Pos.ref.current.y - playerPosRef.current.y);
    
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

  if (enemySubsystem.enemy1AttackBehavior.ref.current === true){
  animationFrameId1 = requestAnimationFrame(updateProjectilePosition1);
  }
  if (enemySubsystem.enemy2AttackBehavior.ref.current === true){
  animationFrameId2 = requestAnimationFrame(updateProjectilePosition2);
  }
  if (enemySubsystem.enemy3AttackBehavior.ref.current === true){
  animationFrameId3 = requestAnimationFrame(updateProjectilePosition3);
  }
  if (enemySubsystem.enemy4AttackBehavior.ref.current === true){
  animationFrameId4 = requestAnimationFrame(updateProjectilePosition4);
  }
  if (enemySubsystem.enemy5AttackBehavior.ref.current === true){
  animationFrameId5 = requestAnimationFrame(updateProjectilePosition5);
  }
  if (enemySubsystem.enemy6AttackBehavior.ref.current === true){
  animationFrameId6 = requestAnimationFrame(updateProjectilePosition6);
  }
  if (enemySubsystem.enemy7AttackBehavior.ref.current === true){
  animationFrameId7 = requestAnimationFrame(updateProjectilePosition7);
  }
  if (enemySubsystem.enemy8AttackBehavior.ref.current === true){
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
    if (enemySubsystem.enemy1.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy1Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy1Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy1' : 'enemy1';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy1HP.state - DMG <= 0 ? 'enemy1' : 'null';
    dealDMG(DMG, 'enemy1', targetWillDie === 'enemy1' ? true : false);
   }
    if (enemySubsystem.enemy2.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy2Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy2Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy2' : 'enemy2';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy2HP.state - DMG <= 0 ? 'enemy2' : 'null';
    dealDMG(DMG, 'enemy2', targetWillDie === 'enemy2' ? true : false);
   }
    if (enemySubsystem.enemy3.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy3Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy3Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy3' : 'enemy3';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy3HP.state - DMG <= 0 ? 'enemy3' : 'null';
    dealDMG(DMG, 'enemy3', targetWillDie === 'enemy3' ? true : false);
   }
    if (enemySubsystem.enemy4.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy4Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy4Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy4' : 'enemy4';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy4HP.state - DMG <= 0 ? 'enemy4' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy4' ? true : false);
   }
   if (enemySubsystem.enemy5.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy5Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy5Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy5' : 'enemy5';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy5HP.state - DMG <= 0 ? 'enemy5' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy5' ? true : false);
   }
   if (enemySubsystem.enemy6.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy6Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy6Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy6' : 'enemy6';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy6HP.state - DMG <= 0 ? 'enemy6' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy6' ? true : false);
   }
   if (enemySubsystem.enemy7.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy7Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy7Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy7' : 'enemy7';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy7HP.state - DMG <= 0 ? 'enemy7' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy7' ? true : false);
   }
   if (enemySubsystem.enemy8.state && Math.abs(playerPosRef.current.x - enemySubsystem.enemy8Pos.ref.current.x) <= moveRange && Math.abs(playerPosRef.current.y - enemySubsystem.enemy8Pos.ref.current.y) <= moveRange){
    const target = target !== 'null' || target !== undefined ? 'enemy8' : 'enemy8';
    const DMG = 1 // Placeholder damage value, replace with actual calculation
    const targetWillDie = enemySubsystem.enemy8HP.state - DMG <= 0 ? 'enemy8' : 'null';
    dealDMG(DMG, target, targetWillDie === 'enemy8' ? true : false);
   }
    }, 1501)
    setTimeout(() => {
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
/////

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
      updatedInventory = [...newInventory, { ...itemDef, count: 1, }];
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
if (enemySubsystem.enemy1Sleeping.state === true){
  return;
}
}
if (key === 2){
if (enemySubsystem.enemy2Sleeping.state === true){
  return;
}
}
if (key === 3){
if (enemySubsystem.enemy3Sleeping.state === true){
  return;
}
}
if (key === 4){
if (enemySubsystem.enemy4Sleeping.state === true){
  return;
}
}
if (key === 5){
if (enemySubsystem.enemy5Sleeping.state === true){
  return;
}
}
if (key === 6){
if (enemySubsystem.enemy6Sleeping.state === true){
  return;
}
}
if (key === 7){
if (enemySubsystem.enemy7Sleeping.state === true){
  return;
}
}
if (key === 8){
if (enemySubsystem.enemy8Sleeping.state === true){
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
validOptions.push('up')
}
if (tileDown !== 'W'){
validOptions.push('down')
}
if (tileLeft !== 'W'){
validOptions.push('left')
}
if (tileRight !== 'W'){
validOptions.push('right')
}
if (tileDownLeft !== 'W'){
validOptions.push('downLeft')
}
if (tileDownRight !== 'W'){
validOptions.push('downRight')
}
if (tileUpLeft !== 'W'){
validOptions.push('upLeft')
}
if (tileUpRight !== 'W'){
validOptions.push('upRight')
}

enemySubsystem.chosen.set(randInt(1, validOptions.length))

if ((validOptions[enemySubsystem.chosen.state] === 'up')){
    const newPosx = enemyx
    const newPosy = enemyy - 1
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('up')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('up')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('up')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('up')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('up')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('up')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('up')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('up')
}
}
if (validOptions[enemySubsystem.chosen.state] === 'down'){
    const newPosx = enemyx
    const newPosy = enemyy + 1
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('down')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('down')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('down')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('down')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('down')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('down')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('down')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('down')
}
}
if (validOptions[enemySubsystem.chosen.state] === 'left'){
    const newPosx = enemyx - 1
    const newPosy = enemyy
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('left')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('left')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('left')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('left')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('left')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('left')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('left')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('left')
}
}
if (validOptions[enemySubsystem.chosen.state] === 'right'){
    const newPosx = enemyx + 1
    const newPosy = enemyy
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('right')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('right')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('right')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('right')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('right')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('right')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('right')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('right')
}
}
if (validOptions[enemySubsystem.chosen.state] === 'downLeft'){
    const newPosx = enemyx - 1
    const newPosy = enemyy + 1
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('downLeft')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('downLeft')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('downLeft')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('downLeft')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('downLeft')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('downLeft')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('downLeft')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('downLeft')
}
}
if (validOptions[enemySubsystem.chosen.state] === 'downRight'){
    const newPosx = enemyx + 1
    const newPosy = enemyy + 1
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('downRight')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('downRight')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('downRight')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('downRight')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('downRight')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('downRight')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('downRight')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('downRight')
}
}
if (validOptions[enemySubsystem.chosen.state] === 'upLeft'){
    const newPosx = enemyx - 1
    const newPosy = enemyy - 1
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('upLeft')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('upLeft')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('upLeft')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('upLeft')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('upLeft')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('upLeft')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('upLeft')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('upLeft')
}
}
if (validOptions[enemySubsystem.chosen.state] === 'upRight'){
    const newPosx = enemyx + 1
    const newPosy = enemyy - 1
    if (key === 1){
    enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy1LastDirection.set('upRight')
}
    if (key === 2){
    enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy2LastDirection.set('upRight')
}
    if (key === 3){
    enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy3LastDirection.set('upRight')
}
    if (key === 4){
    enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy4LastDirection.set('upRight')
}
    if (key === 5){
    enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy5LastDirection.set('upRight')
}
    if (key === 6){
    enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy6LastDirection.set('upRight')
}
    if (key === 7){
    enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
    setEnemy7LastDirection('upRight')
}
    if (key === 8){
    enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
    enemySubsystem.enemy8LastDirection.set('upRight')
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
    if (enemyx === enemySubsystem.enemy1Pos.ref.current.x && enemyy === enemySubsystem.enemy1Pos.ref.current.y){
    return enemySubsystem.enemy1Pos.state
    }
    else {
      enemySubsystem.enemy1Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy1Pos.state
    }
  }
  if (key === 2){
    if (enemyx === enemySubsystem.enemy2Pos.ref.current.x && enemyy === enemySubsystem.enemy2Pos.ref.current.y){
    return enemySubsystem.enemy2Pos.state
    }
    else {
      enemySubsystem.enemy2Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy2Pos.state
    }
  }
  if (key === 3){
    if (enemyx === enemySubsystem.enemy3Pos.ref.current.x && enemyy === enemySubsystem.enemy3Pos.ref.current.y){
    return enemySubsystem.enemy3Pos.state
    }
    else {
      enemySubsystem.enemy3Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy3Pos.state
    }
  }
  if (key === 4){
    if (enemyx === enemySubsystem.enemy4Pos.ref.current.x && enemyy === enemySubsystem.enemy4Pos.ref.current.y){
    return enemySubsystem.enemy4Pos.state
    }
    else {
      enemySubsystem.enemy4Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy4Pos.state
    }
  }
  if (key === 5){
    if (enemyx === enemySubsystem.enemy5Pos.ref.current.x && enemyy === enemySubsystem.enemy5Pos.ref.current.y){
    return enemySubsystem.enemy5Pos.state
    }
    else {
      enemySubsystem.enemy5Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy5Pos.state
    }
  }
  if (key === 6){
    if (enemyx === enemySubsystem.enemy6Pos.ref.current.x && enemyy === enemySubsystem.enemy6Pos.ref.current.y){
    return enemySubsystem.enemy6Pos.state
    }
    else {
      enemySubsystem.enemy6Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy6Pos.state
    }
  }
  if (key === 7){
    if (enemyx === enemySubsystem.enemy7Pos.ref.current.x && enemyy === enemySubsystem.enemy7Pos.ref.current.y){
    return enemySubsystem.enemy7Pos.state
    }
    else {
      enemySubsystem.enemy7Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy7Pos.state
    }
  }
  if (key === 8){
    if (enemyx === enemySubsystem.enemy8Pos.ref.current.x && enemyy === enemySubsystem.enemy8Pos.ref.current.y){
    return enemySubsystem.enemy8Pos.state
    }
    else {
      enemySubsystem.enemy8Pos.set( {x: enemyx, y: enemyy} )
      return enemySubsystem.enemy8Pos.state
    }
  }
}

function pursue(enemyx, enemyy, key){

if (key === 1){
if (enemySubsystem.enemy1Sleeping.state === true){
  return;
}
}
if (key === 2){
if (enemySubsystem.enemy2Sleeping.state === true){
  return;
}
}
if (key === 3){
if (enemySubsystem.enemy3Sleeping.state === true){
  return;
}
}
if (key === 4){
if (enemySubsystem.enemy4Sleeping.state === true){
  return;
}
}
if (key === 5){
if (enemySubsystem.enemy5Sleeping.state === true){
  return;
}
}
if (key === 6){
if (enemySubsystem.enemy6Sleeping.state === true){
  return;
}
}
if (key === 7){
if (enemySubsystem.enemy7Sleeping.state === true){
  return;
}
}
if (key === 8){
if (enemySubsystem.enemy8Sleeping.state === true){
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
const enemy1Up = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy1Pos.ref.current.x === enemyx : false
const enemy1Down = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy1Pos.ref.current.x === enemyx : false
const enemy1Left = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy && enemySubsystem.enemy1Pos.ref.current.x === enemyx - 1 : false
const enemy1Right = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy && enemySubsystem.enemy1Pos.ref.current.x === enemyx + 1 : false
const enemy1UpRight = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy1Pos.ref.current.x === enemyx + 1 : false
const enemy1UpLeft = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy1Pos.ref.current.x === enemyx - 1 : false
const enemy1DownRight = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy1Pos.ref.current.x === enemyx + 1 : false
const enemy1DownLeft = enemySubsystem.enemy1.state ? enemySubsystem.enemy1Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy1Pos.ref.current.x === enemyx - 1 : false
//enemy2 cases
const enemy2Up = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy2Pos.ref.current.x === enemyx : false
const enemy2Down = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy2Pos.ref.current.x === enemyx : false
const enemy2Left = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy && enemySubsystem.enemy2Pos.ref.current.x === enemyx - 1 : false
const enemy2Right = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy && enemySubsystem.enemy2Pos.ref.current.x === enemyx + 1 : false
const enemy2UpRight = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy2Pos.ref.current.x === enemyx + 1 : false
const enemy2UpLeft = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy2Pos.ref.current.x === enemyx - 1 : false
const enemy2DownRight = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy2Pos.ref.current.x === enemyx + 1 : false
const enemy2DownLeft = enemySubsystem.enemy2.state ? enemySubsystem.enemy2Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy2Pos.ref.current.x === enemyx - 1 : false
//enemy3 cases
const enemy3Up = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy3Pos.ref.current.x === enemyx : false
const enemy3Down = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy3Pos.ref.current.x === enemyx : false
const enemy3Left = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy && enemySubsystem.enemy3Pos.ref.current.x === enemyx - 1 : false
const enemy3Right = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy && enemySubsystem.enemy3Pos.ref.current.x === enemyx + 1 : false
const enemy3UpRight = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy3Pos.ref.current.x === enemyx + 1 : false
const enemy3UpLeft = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy3Pos.ref.current.x === enemyx - 1 : false
const enemy3DownRight = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy3Pos.ref.current.x === enemyx + 1 : false
const enemy3DownLeft = enemySubsystem.enemy3.state ? enemySubsystem.enemy3Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy3Pos.ref.current.x === enemyx - 1 : false
//enemy4 cases
const enemy4Up = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy4Pos.ref.current.x === enemyx : false
const enemy4Down = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy4Pos.ref.current.x === enemyx : false
const enemy4Left = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy && enemySubsystem.enemy4Pos.ref.current.x === enemyx - 1 : false
const enemy4Right = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy && enemySubsystem.enemy4Pos.ref.current.x === enemyx + 1 : false
const enemy4UpRight = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy4Pos.ref.current.x === enemyx + 1 : false
const enemy4UpLeft = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy4Pos.ref.current.x === enemyx - 1 : false
const enemy4DownRight = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy4Pos.ref.current.x === enemyx + 1 : false
const enemy4DownLeft = enemySubsystem.enemy4.state ? enemySubsystem.enemy4Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy4Pos.ref.current.x === enemyx - 1 : false
//enemy5 cases
const enemy5Up = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy5Pos.ref.current.x === enemyx : false
const enemy5Down = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy5Pos.ref.current.x === enemyx : false
const enemy5Left = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy && enemySubsystem.enemy5Pos.ref.current.x === enemyx - 1 : false
const enemy5Right = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy && enemySubsystem.enemy5Pos.ref.current.x === enemyx + 1 : false
const enemy5UpRight = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy5Pos.ref.current.x === enemyx + 1 : false
const enemy5UpLeft = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy5Pos.ref.current.x === enemyx - 1 : false
const enemy5DownRight = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy5Pos.ref.current.x === enemyx + 1 : false
const enemy5DownLeft = enemySubsystem.enemy5.state ? enemySubsystem.enemy5Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy5Pos.ref.current.x === enemyx - 1 : false
//enemy6 cases
const enemy6Up = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy6Pos.ref.current.x === enemyx : false
const enemy6Down = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy6Pos.ref.current.x === enemyx : false
const enemy6Left = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy && enemySubsystem.enemy6Pos.ref.current.x === enemyx - 1 : false
const enemy6Right = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy && enemySubsystem.enemy6Pos.ref.current.x === enemyx + 1 : false
const enemy6UpRight = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy6Pos.ref.current.x === enemyx + 1 : false
const enemy6UpLeft = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy6Pos.ref.current.x === enemyx - 1 : false
const enemy6DownRight = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy6Pos.ref.current.x === enemyx + 1 : false
const enemy6DownLeft = enemySubsystem.enemy6.state ? enemySubsystem.enemy6Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy6Pos.ref.current.x === enemyx - 1 : false
//enemy7 cases
const enemy7Up = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy7Pos.ref.current.x === enemyx : false
const enemy7Down = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy7Pos.ref.current.x === enemyx : false
const enemy7Left = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy && enemySubsystem.enemy7Pos.ref.current.x === enemyx - 1 : false
const enemy7Right = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy && enemySubsystem.enemy7Pos.ref.current.x === enemyx + 1 : false
const enemy7UpRight = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy7Pos.ref.current.x === enemyx + 1 : false
const enemy7UpLeft = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy7Pos.ref.current.x === enemyx - 1 : false
const enemy7DownRight = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy7Pos.ref.current.x === enemyx + 1 : false
const enemy7DownLeft = enemySubsystem.enemy7.state ? enemySubsystem.enemy7Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy7Pos.ref.current.x === enemyx - 1 : false
//enemy8 cases
const enemy8Up = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy8Pos.ref.current.x === enemyx : false
const enemy8Down = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy8Pos.ref.current.x === enemyx : false
const enemy8Left = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy && enemySubsystem.enemy8Pos.ref.current.x === enemyx - 1 : false
const enemy8Right = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy && enemySubsystem.enemy8Pos.ref.current.x === enemyx + 1 : false
const enemy8UpRight = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy8Pos.ref.current.x === enemyx + 1 : false
const enemy8UpLeft = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy - 1 && enemySubsystem.enemy8Pos.ref.current.x === enemyx - 1 : false
const enemy8DownRight = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy8Pos.ref.current.x === enemyx + 1 : false
const enemy8DownLeft = enemySubsystem.enemy8.state ? enemySubsystem.enemy8Pos.ref.current.y === enemyy + 1 && enemySubsystem.enemy8Pos.ref.current.x === enemyx - 1 : false


let newPosx = enemyx
let newPosy = enemyy

if (enemyx < playerPos.x && enemyy < playerPos.y && tileDownRight !== 'W' && !playerDownRight && !enemy1DownRight && !enemy2DownRight && !enemy3DownRight && !enemy4DownRight && !enemy5DownRight && !enemy6DownRight && !enemy7DownRight && !enemy8DownRight){
const newPosx = enemyx + 1
const newPosy = enemyy + 1
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('downRight')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('downRight')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('downRight')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('downRight')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('downRight')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('downRight')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('downRight')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('downRight')
}
}
else if (enemyx < playerPos.x && enemyy > playerPos.y && tileUpRight !== 'W' && !playerUpRight && !enemy1UpRight && !enemy2UpRight && !enemy3UpRight && !enemy4UpRight && !enemy5UpRight && !enemy6UpRight && !enemy7UpRight && !enemy8UpRight){
const newPosx = enemyx + 1
const newPosy = enemyy - 1
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('upRight')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('upRight')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('upRight')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('upRight')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('upRight')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('upRight')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('upRight')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('upRight')
}
}
else if (enemyx > playerPos.x && enemyy < playerPos.y && tileDownLeft !== 'W' && !playerDownLeft && !enemy1DownLeft && !enemy2DownLeft && !enemy3DownLeft && !enemy4DownLeft && !enemy5DownLeft && !enemy6DownLeft && !enemy7DownLeft && !enemy8DownLeft){
const newPosx = enemyx - 1
const newPosy = enemyy + 1
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('downLeft')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('downLeft')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('downLeft')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('downLeft')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('downLeft')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('downLeft')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('downLeft')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('downLeft')
}
}
else if (enemyx > playerPos.x && enemyy > playerPos.y && tileUpLeft !== 'W' && !playerUpLeft && !enemy1UpLeft && !enemy2UpLeft && !enemy3UpLeft && !enemy4UpLeft && !enemy5UpLeft && !enemy6UpLeft && !enemy7UpLeft && !enemy8UpLeft){
const newPosx = enemyx - 1
const newPosy = enemyy - 1
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('upLeft')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('upLeft')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('upLeft')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('upLeft')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('upLeft')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('upLeft')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('upLeft')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('upLeft')
}
}
else if (enemyx < playerPos.x && tileRight !== 'W' && !playerRight && !enemy1Right && !enemy2Right && !enemy3Right && !enemy4Right && !enemy5Right && !enemy6Right && !enemy7Right && !enemy8Right){
const newPosx = enemyx + 1
const newPosy = enemyy 
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('right')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('right')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('right')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('right')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('right')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('right')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('right')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('right')
}
}
else if (enemyx > playerPos.x && tileLeft !== 'W' && !playerLeft && !enemy1Left && !enemy2Left && !enemy3Left && !enemy4Left && !enemy5Left && !enemy6Left && !enemy7Left && !enemy8Left ){
const newPosx = enemyx - 1
const newPosy = enemyy
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('left')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('left')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('left')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('left')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('left')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('left')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('left')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('left')
}
}
else if (enemyy < playerPos.y && tileDown !== 'W' && !playerDown && !enemy1Down && !enemy2Down && !enemy3Down && !enemy4Down && !enemy5Down && !enemy6Down && !enemy7Down && !enemy8Down){
const newPosx = enemyx
const newPosy = enemyy + 1
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('down')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('down')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('down')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('down')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('down')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('down')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('down')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('down')
}
}
else if (enemyy > playerPos.y && tileUp !== 'W' && !playerUp && !enemy1Up && !enemy2Up && !enemy3Up && !enemy4Up && !enemy5Up && !enemy6Up && !enemy7Up && !enemy8Up){
const newPosx = enemyx
const newPosy = enemyy - 1
if (key === 1){
enemySubsystem.enemy1Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy1LastDirection.set('up')
}
if (key === 2){
enemySubsystem.enemy2Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy2LastDirection.set('up')
}
if (key === 3){
enemySubsystem.enemy3Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy3LastDirection.set('up')
}
if (key === 4){
enemySubsystem.enemy4Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy4LastDirection.set('up')
}
if (key === 5){
enemySubsystem.enemy5Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy5LastDirection.set('up')
}
if (key === 6){
enemySubsystem.enemy6Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy6LastDirection.set('up')
}
if (key === 7){
enemySubsystem.enemy7Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
setEnemy7LastDirection('up')
}
if (key === 8){
enemySubsystem.enemy8Pos.set( {x: newPosx, y: newPosy} )
verifyEnemyPosition(newPosx, newPosy, key)
enemySubsystem.enemy8LastDirection.set('up')
}
}
return
}
function waitUntil(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function checkAttackPath(key) {
  console.log('checking attack path for enemy', key);
  const enemy1Move1 = enemySubsystem.enemy1.state ? ENEMY_DEFS[enemySubsystem.enemyType1.state].moves[0] : null;
  const enemy2Move1 = enemySubsystem.enemy2.state ? ENEMY_DEFS[enemySubsystem.enemyType2.state].moves[0] : null;
  const enemy3Move1 = enemySubsystem.enemy3.state ? ENEMY_DEFS[enemySubsystem.enemyType3.state].moves[0] : null;
  const enemy4Move1 = enemySubsystem.enemy4.state ? ENEMY_DEFS[enemySubsystem.enemyType4.state].moves[0] : null;
  const enemy5Move1 = enemySubsystem.enemy5.state ? ENEMY_DEFS[enemySubsystem.enemyType5.state].moves[0] : null;
  const enemy6Move1 = enemySubsystem.enemy6.state ? ENEMY_DEFS[enemySubsystem.enemyType6.state].moves[0] : null;
  const enemy7Move1 = enemySubsystem.enemy7.state ? ENEMY_DEFS[enemySubsystem.enemyType7.state].moves[0] : null;
  const enemy8Move1 = enemySubsystem.enemy8.state ? ENEMY_DEFS[enemySubsystem.enemyType8.state].moves[0] : null;
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
    if (enemySubsystem.enemy1Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking right1 at', enemySubsystem.enemy1Pos.ref.current.x + i, enemySubsystem.enemy1Pos.ref.current.y);
    if (enemySubsystem.enemy1Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y][enemySubsystem.enemy1Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy1Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking left1 at', enemySubsystem.enemy1Pos.ref.current.x - i, enemySubsystem.enemy1Pos.ref.current.y);
    if (enemySubsystem.enemy1Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y][enemySubsystem.enemy1Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy1Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy1Pos.ref.current.x === playerPosRef.current.x){
    for (let i = 1; i <= range1; i++){
    console.log('checking down1 at', enemySubsystem.enemy1Pos.ref.current.x, enemySubsystem.enemy1Pos.ref.current.y + i);
    if (enemySubsystem.enemy1Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y + i][enemySubsystem.enemy1Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy1Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy1Pos.ref.current.x === playerPosRef.current.x){
    for (let i = 1; i <= range1; i++){
    console.log('checking up1 at', enemySubsystem.enemy1Pos.ref.current.x, enemySubsystem.enemy1Pos.ref.current.y - i);
    if (enemySubsystem.enemy1Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y - i][enemySubsystem.enemy1Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y < playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking downright1 at', enemySubsystem.enemy1Pos.ref.current.x + i, enemySubsystem.enemy1Pos.ref.current.y + i);
    if (enemySubsystem.enemy1Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y + i][enemySubsystem.enemy1Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y < playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking downleft1 at', enemySubsystem.enemy1Pos.ref.current.x - i, enemySubsystem.enemy1Pos.ref.current.y + i);
    if (enemySubsystem.enemy1Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y + i][enemySubsystem.enemy1Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y > playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking upright1 at', enemySubsystem.enemy1Pos.ref.current.x + i, enemySubsystem.enemy1Pos.ref.current.y - i);
    if (enemySubsystem.enemy1Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y - i][enemySubsystem.enemy1Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy1Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y > playerPosRef.current.y){
    for (let i = 1; i <= range1; i++){
    console.log('checking upleft1 at', enemySubsystem.enemy1Pos.ref.current.x - i, enemySubsystem.enemy1Pos.ref.current.y - i);
    if (enemySubsystem.enemy1Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy1Pos.ref.current.y - i][enemySubsystem.enemy1Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 2){
  if (enemy2Move1.alignment === 'same-direction') {
    if (enemySubsystem.enemy2Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range2; i++){
    console.log('checking right2 at', enemySubsystem.enemy2Pos.ref.current.x + i, enemySubsystem.enemy2Pos.ref.current.y);
    if (enemySubsystem.enemy2Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y][enemySubsystem.enemy2Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy2Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking left2 at', enemySubsystem.enemy2Pos.ref.current.x - i, enemySubsystem.enemy2Pos.ref.current.y);
    if (enemySubsystem.enemy2Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y][enemySubsystem.enemy2Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy2Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy2Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range2; i++){
    console.log('checking down2 at', enemySubsystem.enemy2Pos.ref.current.x, enemySubsystem.enemy2Pos.ref.current.y + i);
    if (enemySubsystem.enemy2Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y + i][enemySubsystem.enemy2Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy2Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy2Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range2; i++){
    console.log('checking up2 at', enemySubsystem.enemy2Pos.ref.current.x, enemySubsystem.enemy2Pos.ref.current.y - i);
    if (enemySubsystem.enemy2Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y - i][enemySubsystem.enemy2Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking downright2 at', enemySubsystem.enemy2Pos.ref.current.x + i, enemySubsystem.enemy2Pos.ref.current.y + i);
    if (enemySubsystem.enemy2Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y + i][enemySubsystem.enemy2Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking downleft2 at', enemySubsystem.enemy2Pos.ref.current.x - i, enemySubsystem.enemy2Pos.ref.current.y + i);
    if (enemySubsystem.enemy2Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y + i][enemySubsystem.enemy2Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking upright2 at', enemySubsystem.enemy2Pos.ref.current.x + i, enemySubsystem.enemy2Pos.ref.current.y - i);
    if (enemySubsystem.enemy2Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y - i][enemySubsystem.enemy2Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy2Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range2; i++){
    console.log('checking upleft2 at', enemySubsystem.enemy2Pos.ref.current.x - i, enemySubsystem.enemy2Pos.ref.current.y - i);
    if (enemySubsystem.enemy2Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy2Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy2Pos.ref.current.y - i][enemySubsystem.enemy2Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 3){
  if (enemy3Move1.alignment === 'same-direction') {
    if (enemySubsystem.enemy3Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range3; i++){
    console.log('checking right3 at', enemySubsystem.enemy3Pos.ref.current.x + i, enemySubsystem.enemy3Pos.ref.current.y);
    if (enemySubsystem.enemy3Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y][enemySubsystem.enemy3Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy3Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking left3 at', enemySubsystem.enemy3Pos.ref.current.x - i, enemySubsystem.enemy3Pos.ref.current.y);
    if (enemySubsystem.enemy3Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y][enemySubsystem.enemy3Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy3Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy3Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range3; i++){
    console.log('checking down3 at', enemySubsystem.enemy3Pos.ref.current.x, enemySubsystem.enemy3Pos.ref.current.y + i);
    if (enemySubsystem.enemy3Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y + i][enemySubsystem.enemy3Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy3Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy3Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range3; i++){
    console.log('checking up3 at', enemySubsystem.enemy3Pos.ref.current.x, enemySubsystem.enemy3Pos.ref.current.y - i);
    if (enemySubsystem.enemy3Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y - i][enemySubsystem.enemy3Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking downright3 at', enemySubsystem.enemy3Pos.ref.current.x + i, enemySubsystem.enemy3Pos.ref.current.y + i);
    if (enemySubsystem.enemy3Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y + i][enemySubsystem.enemy3Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking downleft3 at', enemySubsystem.enemy3Pos.ref.current.x - i, enemySubsystem.enemy3Pos.ref.current.y + i);
    if (enemySubsystem.enemy3Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y + i][enemySubsystem.enemy3Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking upright3 at', enemySubsystem.enemy3Pos.ref.current.x + i, enemySubsystem.enemy3Pos.ref.current.y - i);
    if (enemySubsystem.enemy3Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y - i][enemySubsystem.enemy3Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy3Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range3; i++){
    console.log('checking upleft3 at', enemySubsystem.enemy3Pos.ref.current.x - i, enemySubsystem.enemy3Pos.ref.current.y - i);
    if (enemySubsystem.enemy3Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy3Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy3Pos.ref.current.y - i][enemySubsystem.enemy3Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 4){
  if (enemy4Move1.alignment === 'same-direction') {
    if (enemySubsystem.enemy4Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y === playerPosRef.current.y){
    for (let i = 1; i <= range4; i++){
    console.log('checking right4 at', enemySubsystem.enemy4Pos.ref.current.x + i, enemySubsystem.enemy4Pos.ref.current.y);
    if (enemySubsystem.enemy4Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y][enemySubsystem.enemy4Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy4Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking left4 at', enemySubsystem.enemy4Pos.ref.current.x - i, enemySubsystem.enemy4Pos.ref.current.y);
    if (enemySubsystem.enemy4Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y][enemySubsystem.enemy4Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy4Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy4Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range4; i++){
    console.log('checking down4 at', enemySubsystem.enemy4Pos.ref.current.x, enemySubsystem.enemy4Pos.ref.current.y + i);
    if (enemySubsystem.enemy4Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y + i][enemySubsystem.enemy4Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy4Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy4Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range4; i++){
    console.log('checking up4 at', enemySubsystem.enemy4Pos.ref.current.x, enemySubsystem.enemy4Pos.ref.current.y - i);
    if (enemySubsystem.enemy4Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y - i][enemySubsystem.enemy4Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking downright4 at', enemySubsystem.enemy4Pos.ref.current.x + i, enemySubsystem.enemy4Pos.ref.current.y + i);
    if (enemySubsystem.enemy4Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y + i][enemySubsystem.enemy4Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking downleft4 at', enemySubsystem.enemy4Pos.ref.current.x - i, enemySubsystem.enemy4Pos.ref.current.y + i);
    if (enemySubsystem.enemy4Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y + i][enemySubsystem.enemy4Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking upright4 at', enemySubsystem.enemy4Pos.ref.current.x + i, enemySubsystem.enemy4Pos.ref.current.y - i);
    if (enemySubsystem.enemy4Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y - i][enemySubsystem.enemy4Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy4Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range4; i++){
    console.log('checking upleft4 at', enemySubsystem.enemy4Pos.ref.current.x - i, enemySubsystem.enemy4Pos.ref.current.y - i);
    if (enemySubsystem.enemy4Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy4Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy4Pos.ref.current.y - i][enemySubsystem.enemy4Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 5){
  if (enemy5Move1.alignment === 'same-direction') {
    if (enemySubsystem.enemy5Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking right5 at', enemySubsystem.enemy5Pos.ref.current.x + i, enemySubsystem.enemy5Pos.ref.current.y);
    if (enemySubsystem.enemy5Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y][enemySubsystem.enemy5Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy5Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking left5 at', enemySubsystem.enemy5Pos.ref.current.x - i, enemySubsystem.enemy5Pos.ref.current.y);
    if (enemySubsystem.enemy5Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y][enemySubsystem.enemy5Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy5Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy5Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range5; i++){
    console.log('checking down5 at', enemySubsystem.enemy5Pos.ref.current.x, enemySubsystem.enemy5Pos.ref.current.y + i);
    if (enemySubsystem.enemy5Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y + i][enemySubsystem.enemy5Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy5Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy5Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range5; i++){
    console.log('checking up5 at', enemySubsystem.enemy5Pos.ref.current.x, enemySubsystem.enemy5Pos.ref.current.y - i);
    if (enemySubsystem.enemy5Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y - i][enemySubsystem.enemy5Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking downright5 at', enemySubsystem.enemy5Pos.ref.current.x + i, enemySubsystem.enemy5Pos.ref.current.y + i);
    if (enemySubsystem.enemy5Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y + i][enemySubsystem.enemy5Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking downleft5 at', enemySubsystem.enemy5Pos.ref.current.x - i, enemySubsystem.enemy5Pos.ref.current.y + i);
    if (enemySubsystem.enemy5Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y + i][enemySubsystem.enemy5Pos.ref.current.x - i]  === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking upright5 at', enemySubsystem.enemy5Pos.ref.current.x + i, enemySubsystem.enemy5Pos.ref.current.y - i);
    if (enemySubsystem.enemy5Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y - i][enemySubsystem.enemy5Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy5Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range5; i++){
    console.log('checking upleft5 at', enemySubsystem.enemy5Pos.ref.current.x - i, enemySubsystem.enemy5Pos.ref.current.y - i);
    if (enemySubsystem.enemy5Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy5Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy5Pos.ref.current.y - i][enemySubsystem.enemy5Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 6){
  if (enemy6Move1.alignment === 'same-direction') {
    if (enemySubsystem.enemy6Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking right6 at', enemySubsystem.enemy6Pos.ref.current.x + i, enemySubsystem.enemy6Pos.ref.current.y);
    if (enemySubsystem.enemy6Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y][enemySubsystem.enemy6Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy6Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking left6 at', enemySubsystem.enemy6Pos.ref.current.x - i, enemySubsystem.enemy6Pos.ref.current.y);
    if (enemySubsystem.enemy6Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y][enemySubsystem.enemy6Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy6Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy6Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range6; i++){
    console.log('checking down6 at', enemySubsystem.enemy6Pos.ref.current.x, enemySubsystem.enemy6Pos.ref.current.y + i);
    if (enemySubsystem.enemy6Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y + i][enemySubsystem.enemy6Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy6Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy6Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range6; i++){
    console.log('checking up6 at', enemySubsystem.enemy6Pos.ref.current.x, enemySubsystem.enemy6Pos.ref.current.y - i);
    if (enemySubsystem.enemy6Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y - i][enemySubsystem.enemy6Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking downright6 at', enemySubsystem.enemy6Pos.ref.current.x + i, enemySubsystem.enemy6Pos.ref.current.y + i);
    if (enemySubsystem.enemy6Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y + i][enemySubsystem.enemy6Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking downleft6 at', enemySubsystem.enemy6Pos.ref.current.x - i, enemySubsystem.enemy6Pos.ref.current.y + i);
    if (enemySubsystem.enemy6Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y + i][enemySubsystem.enemy6Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking upright6 at', enemySubsystem.enemy6Pos.ref.current.x + i, enemySubsystem.enemy6Pos.ref.current.y - i);
    if (enemySubsystem.enemy6Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y - i][enemySubsystem.enemy6Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy6Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range6; i++){
    console.log('checking upleft6 at', enemySubsystem.enemy6Pos.ref.current.x - i, enemySubsystem.enemy6Pos.ref.current.y - i);
    if (enemySubsystem.enemy6Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy6Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy6Pos.ref.current.y - i][enemySubsystem.enemy6Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 7){
  if (enemy7Move1.alignment === 'same-direction') {
    if (enemySubsystem.enemy7Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
      console.log('checking right7 at', enemySubsystem.enemy7Pos.ref.current.x + i, enemySubsystem.enemy7Pos.ref.current.y);
      if (enemySubsystem.enemy7Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
      if (dungeon[enemySubsystem.enemy7Pos.ref.current.y][enemySubsystem.enemy7Pos.ref.current.x + i] === 'W'){
        return false;
      }
    }
    } else if (enemySubsystem.enemy7Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking left7 at', enemySubsystem.enemy7Pos.ref.current.x - i, enemySubsystem.enemy7Pos.ref.current.y);
    if (enemySubsystem.enemy7Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy7Pos.ref.current.y][enemySubsystem.enemy7Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy7Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy7Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range7; i++){
    console.log('checking down7 at', enemySubsystem.enemy7Pos.ref.current.x, enemySubsystem.enemy7Pos.ref.current.y + i);
    if (enemySubsystem.enemy7Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy7Pos.ref.current.y + i][enemySubsystem.enemy7Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy7Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy7Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range7; i++){
    console.log('checking up7 at', enemySubsystem.enemy7Pos.ref.current.x, enemySubsystem.enemy7Pos.ref.current.y - i);
    if (enemySubsystem.enemy7Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy7Pos.ref.current.y - i][enemySubsystem.enemy7Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking downright7 at', enemySubsystem.enemy7Pos.ref.current.x + i, enemySubsystem.enemy7Pos.ref.current.y + i);
    if (enemySubsystem.enemy7Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy7Pos.ref.current.y + i][enemySubsystem.enemy7Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking downleft7 at', enemySubsystem.enemy7Pos.ref.current.x - i, enemySubsystem.enemy7Pos.ref.current.y + i);
    if (enemySubsystem.enemy7Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy7Pos.ref.current.y + i][enemySubsystem.enemy7Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking upright7 at', enemySubsystem.enemy7Pos.ref.current.x + i, enemySubsystem.enemy7Pos.ref.current.y - i);
    if (enemySubsystem.enemy7Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy7Pos.ref.current.y - i][enemySubsystem.enemy7Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy7Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range7; i++){
    console.log('checking upleft7 at', enemySubsystem.enemy7Pos.ref.current.x - i, enemySubsystem.enemy7Pos.ref.current.y - i);
    if (enemySubsystem.enemy7Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy7Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy7Pos.ref.current.y - i][enemySubsystem.enemy7Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
  }
}
if (key === 8){
  if (enemy8Move1.alignment === 'same-direction') {
    if (enemySubsystem.enemy8Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking right8 at', enemySubsystem.enemy8Pos.ref.current.x + i, enemySubsystem.enemy8Pos.ref.current.y);
    if (enemySubsystem.enemy8Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y][enemySubsystem.enemy8Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy8Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y === playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking left8 at', enemySubsystem.enemy8Pos.ref.current.x - i, enemySubsystem.enemy8Pos.ref.current.y);
    if (enemySubsystem.enemy8Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y][enemySubsystem.enemy8Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy8Pos.ref.current.y < playerPosRef.current.y && enemySubsystem.enemy8Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range8; i++){
    console.log('checking down8 at', enemySubsystem.enemy8Pos.ref.current.x, enemySubsystem.enemy8Pos.ref.current.y + i);
    if (enemySubsystem.enemy8Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y + i][enemySubsystem.enemy8Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    } else if (enemySubsystem.enemy8Pos.ref.current.y > playerPosRef.current.y && enemySubsystem.enemy8Pos.ref.current.x === playerPosRef.current.x){
      for (let i = 1; i <= range8; i++){
    console.log('checking up8 at', enemySubsystem.enemy8Pos.ref.current.x, enemySubsystem.enemy8Pos.ref.current.y - i);
    if (enemySubsystem.enemy8Pos.ref.current.x === playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y - i][enemySubsystem.enemy8Pos.ref.current.x] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking downright8 at', enemySubsystem.enemy8Pos.ref.current.x + i, enemySubsystem.enemy8Pos.ref.current.y + i);
    if (enemySubsystem.enemy8Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y + i][enemySubsystem.enemy8Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y < playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking downleft8 at', enemySubsystem.enemy8Pos.ref.current.x - i, enemySubsystem.enemy8Pos.ref.current.y + i);
    if (enemySubsystem.enemy8Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y + i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y + i][enemySubsystem.enemy8Pos.ref.current.x - i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x < playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking upright8 at', enemySubsystem.enemy8Pos.ref.current.x + i, enemySubsystem.enemy8Pos.ref.current.y - i);
    if (enemySubsystem.enemy8Pos.ref.current.x + i === playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y - i === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y - i][enemySubsystem.enemy8Pos.ref.current.x + i] === 'W'){
      return false;
    }
  }
    }
      else if (enemySubsystem.enemy8Pos.ref.current.x > playerPosRef.current.x && enemySubsystem.enemy8Pos.ref.current.y > playerPosRef.current.y){
      for (let i = 1; i <= range8; i++){
    console.log('checking upleft8 at', enemySubsystem.enemy8Pos.ref.current.x - i, enemySubsystem.enemy8Pos.ref.current.y - i);
    if (enemySubsystem.enemy1Pos.ref.current.x - i === playerPosRef.current.x && enemySubsystem.enemy1Pos.ref.current.y === playerPosRef.current.y){
      return true;
    }
    if (dungeon[enemySubsystem.enemy8Pos.ref.current.y - i][enemySubsystem.enemy8Pos.ref.current.x - i] === 'W'){
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
  if (key === 1 && enemySubsystem.enemy1.state && enemySubsystem.enemy1Sleeping.ref.current === false){
    const wallCheck = checkAttackPath(1);
    console.log('wallcheck for enemy 1:', wallCheck)
    const enemy1Move1 = ENEMY_DEFS[enemySubsystem.enemyType1.state].moves[0]
    if (enemy1Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy1Pos.ref.current.x - playerPosRef.current.x) <= enemy1Move1.range && Math.abs(enemySubsystem.enemy1Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy1Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy1Pos.ref.current.y - playerPosRef.current.y) <= enemy1Move1.range || Math.abs(enemySubsystem.enemy1Pos.ref.current.x - playerPosRef.current.x) <= enemy1Move1.range && Math.abs(enemySubsystem.enemy1Pos.ref.current.y - playerPosRef.current.y) <= enemy1Move1.range && Math.abs(enemySubsystem.enemy1Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy1Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy1Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy1Move1, 1), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy1Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy1Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy1Move1.range)
        console.log('triggered with key', key);
        confirmEnemyBehavior(2, move + 1);
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy1Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy1Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy1MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy1Pos.ref.current.x, enemySubsystem.enemy1Pos.ref.current.y, 1)
    }
    else if (Math.abs(enemySubsystem.enemy1Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy1Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy1MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy1Pos.ref.current.x, enemySubsystem.enemy1Pos.ref.current.y, 1)
    }
    confirmEnemyBehavior(2, move);
  }
  else if (key === 1 && enemySubsystem.enemy1.state && enemySubsystem.enemy1Sleeping.ref.current === true){
    confirmEnemyBehavior(2, move);
    return;
  }
    if (key === 2 && enemySubsystem.enemy2.state && enemySubsystem.enemy2Sleeping.ref.current === false){
    const enemy2Move1 = ENEMY_DEFS[enemySubsystem.enemyType2.state].moves[0]
    const wallCheck = checkAttackPath(2);
    console.log('wallcheck for enemy 2:', wallCheck)
    if (enemy2Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy2Pos.ref.current.x - playerPosRef.current.x) <= enemy2Move1.range && Math.abs(enemySubsystem.enemy2Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy2Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy2Pos.ref.current.y - playerPosRef.current.y) <= enemy2Move1.range || Math.abs(enemySubsystem.enemy2Pos.ref.current.x - playerPosRef.current.x) <= enemy2Move1.range && Math.abs(enemySubsystem.enemy2Pos.ref.current.y - playerPosRef.current.y) <= enemy2Move1.range && Math.abs(enemySubsystem.enemy2Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy2Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy2Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy2Move1, 2), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy2Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy2Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy2Move1.range)
        confirmEnemyBehavior(3, move + 1);
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy2Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy2Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy2MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy2Pos.ref.current.x, enemySubsystem.enemy2Pos.ref.current.y, 2)
    }
    else if (Math.abs(enemySubsystem.enemy2Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy2Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy2MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy2Pos.ref.current.x, enemySubsystem.enemy2Pos.ref.current.y, 2)  
    }
  confirmEnemyBehavior(3, move);
  }
  else if (key === 2 && enemySubsystem.enemy2.state && enemySubsystem.enemy2Sleeping.ref.current === true){
    confirmEnemyBehavior(3, move);
    return;
  }

    if (key === 3 && enemySubsystem.enemy3.state && enemySubsystem.enemy3Sleeping.ref.current === false){
    const enemy3Move1 = ENEMY_DEFS[enemySubsystem.enemyType3.state].moves[0]
    const wallCheck = checkAttackPath(3);
    console.log('wallcheck for enemy 3:', wallCheck)
    if (enemy3Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy3Pos.ref.current.x - playerPosRef.current.x) <= enemy3Move1.range && Math.abs(enemySubsystem.enemy3Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy3Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy3Pos.ref.current.y - playerPosRef.current.y) <= enemy3Move1.range || Math.abs(enemySubsystem.enemy3Pos.ref.current.x - playerPosRef.current.x) <= enemy3Move1.range && Math.abs(enemySubsystem.enemy3Pos.ref.current.y - playerPosRef.current.y) <= enemy3Move1.range && Math.abs(enemySubsystem.enemy3Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy3Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy3Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy3Move1, 3), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy3Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy3Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy3Move1.range)
        confirmEnemyBehavior(4, move + 1);
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy3Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy3Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy3MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy3Pos.ref.current.x, enemySubsystem.enemy3Pos.ref.current.y, 3)
    }
    else if (Math.abs(enemySubsystem.enemy3Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy3Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy3MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy3Pos.ref.current.x, enemySubsystem.enemy3Pos.ref.current.y, 3)  
    }
    confirmEnemyBehavior(4, move);
  }
  else if (key === 3 && enemySubsystem.enemy3.state && enemySubsystem.enemy3Sleeping.ref.current === true){
    confirmEnemyBehavior(4, move);
    return;
  }

    if (key === 4 && enemySubsystem.enemy4.state && enemySubsystem.enemy4Sleeping.ref.current === false){
    const enemy4Move1 = ENEMY_DEFS[enemySubsystem.enemyType4.state].moves[0]
    const wallCheck = checkAttackPath(4);
    console.log('wallcheck for enemy 4:', wallCheck)
    if (enemy4Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy4Pos.ref.current.x - playerPosRef.current.x) <= enemy4Move1.range && Math.abs(enemySubsystem.enemy4Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy4Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy4Pos.ref.current.y - playerPosRef.current.y) <= enemy4Move1.range || Math.abs(enemySubsystem.enemy4Pos.ref.current.x - playerPosRef.current.x) <= enemy4Move1.range && Math.abs(enemySubsystem.enemy4Pos.ref.current.y - playerPosRef.current.y) <= enemy4Move1.range && Math.abs(enemySubsystem.enemy4Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy4Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy4Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy4Move1, 4), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy4Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy4Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy4Move1.range)
        confirmEnemyBehavior(5, move + 1);
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy4Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy4Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy4MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy4Pos.ref.current.x, enemySubsystem.enemy4Pos.ref.current.y, 4)
    }
    else if (Math.abs(enemySubsystem.enemy4Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy4Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy4MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy4Pos.ref.current.x, enemySubsystem.enemy4Pos.ref.current.y, 4)  
    }
    confirmEnemyBehavior(5, move);
  } 
  else if (key === 4 && enemySubsystem.enemy4.state && enemySubsystem.enemy4Sleeping.ref.current === true){
    confirmEnemyBehavior(5, move);
    return;
  }

    if (key === 5 && enemySubsystem.enemy5.state && enemySubsystem.enemy5Sleeping.ref.current === false){
    const enemy5Move1 = ENEMY_DEFS[enemySubsystem.enemyType5.state].moves[0]
    const wallCheck = checkAttackPath(5);
    console.log('wallcheck for enemy 5:', wallCheck)
    if (enemy5Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy5Pos.ref.current.x - playerPosRef.current.x) <= enemy5Move1.range && Math.abs(enemySubsystem.enemy5Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy5Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy5Pos.ref.current.y - playerPosRef.current.y) <= enemy5Move1.range || Math.abs(enemySubsystem.enemy5Pos.ref.current.x - playerPosRef.current.x) <= enemy5Move1.range && Math.abs(enemySubsystem.enemy5Pos.ref.current.y - playerPosRef.current.y) <= enemy5Move1.range && Math.abs(enemySubsystem.enemy5Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy5Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy5Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy5Move1, 5), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy5Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy5Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy5Move1.range)
        confirmEnemyBehavior(6, move + 1);
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy5Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy5Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy5MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy5Pos.ref.current.x, enemySubsystem.enemy5Pos.ref.current.y, 5)
    }
    else if (Math.abs(enemySubsystem.enemy5Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy5Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy5MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy5Pos.ref.current.x, enemySubsystem.enemy5Pos.ref.current.y, 5)  
    }
    confirmEnemyBehavior(6, move);
  }
  else if (key === 5 && enemySubsystem.enemy5.state && enemySubsystem.enemy5Sleeping.ref.current === true){
    confirmEnemyBehavior(6, move);
    return;
  }

  if (key === 6 && enemySubsystem.enemy6.state && enemySubsystem.enemy6Sleeping.ref.current === false){
    const enemy6Move1 = ENEMY_DEFS[enemySubsystem.enemyType6.state].moves[0]
    const wallCheck = checkAttackPath(6);
    console.log('wallcheck for enemy 6:', wallCheck)
    if (enemy6Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy6Pos.ref.current.x - playerPosRef.current.x) <= enemy6Move1.range && Math.abs(enemySubsystem.enemy6Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy6Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy6Pos.ref.current.y - playerPosRef.current.y) <= enemy6Move1.range || Math.abs(enemySubsystem.enemy6Pos.ref.current.x - playerPosRef.current.x) <= enemy6Move1.range && Math.abs(enemySubsystem.enemy6Pos.ref.current.y - playerPosRef.current.y) <= enemy6Move1.range && Math.abs(enemySubsystem.enemy6Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy6Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy6Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy6Move1, 6), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy6Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy6Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy6Move1.range)
        confirmEnemyBehavior(7, move + 1);
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy6Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy6Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy6MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy6Pos.ref.current.x, enemySubsystem.enemy6Pos.ref.current.y, 6)
    }
    else if (Math.abs(enemySubsystem.enemy6Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy6Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy6MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy6Pos.ref.current.x, enemySubsystem.enemy6Pos.ref.current.y, 6) 
    }
    confirmEnemyBehavior(7, move);
  }
  else if (key === 6 && enemySubsystem.enemy6.state && enemySubsystem.enemy6Sleeping.ref.current === true){
    confirmEnemyBehavior(7, move);
    return;
  }

    if (key === 7 && enemySubsystem.enemy7.state && enemySubsystem.enemy7Sleeping.ref.current === false){
    const enemy7Move1 = ENEMY_DEFS[enemySubsystem.enemyType7.state].moves[0]
    const wallCheck = checkAttackPath(7);
    console.log('wallcheck for enemy 7:', wallCheck)
    if (enemy7Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy7Pos.ref.current.x - playerPosRef.current.x) <= enemy7Move1.range && Math.abs(enemySubsystem.enemy7Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy7Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy7Pos.ref.current.y - playerPosRef.current.y) <= enemy7Move1.range || Math.abs(enemySubsystem.enemy7Pos.ref.current.x - playerPosRef.current.x) <= enemy7Move1.range && Math.abs(enemySubsystem.enemy7Pos.ref.current.y - playerPosRef.current.y) <= enemy7Move1.range && Math.abs(enemySubsystem.enemy7Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy7Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy7Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy7Move1, 7), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy7Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy7Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy7Move1.range)
        confirmEnemyBehavior(8, move + 1);
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy7Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy7Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy7MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy7Pos.ref.current.x, enemySubsystem.enemy7Pos.ref.current.y, 7)
    }
    else if (Math.abs(enemySubsystem.enemy7Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy7Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy7MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy7Pos.ref.current.x, enemySubsystem.enemy7Pos.ref.current.y, 7)  
    }
    confirmEnemyBehavior(8, move);
  }
  else if (key === 7 && enemySubsystem.enemy7.state && enemySubsystem.enemy7Sleeping.ref.current === true){
    confirmEnemyBehavior(8, move);
    return;
  }

   if (key === 8 && enemySubsystem.enemy8.state && enemySubsystem.enemy8Sleeping.ref.current === false){
    const enemy8Move1 = ENEMY_DEFS[enemySubsystem.enemyType8.state].moves[0]
    const wallCheck = checkAttackPath(8);
    console.log('wallcheck for enemy 8:', wallCheck)
    if (enemy8Move1.alignment === 'same-direction') {
      if (wallCheck === true && (Math.abs(enemySubsystem.enemy8Pos.ref.current.x - playerPosRef.current.x) <= enemy8Move1.range && Math.abs(enemySubsystem.enemy8Pos.ref.current.y - playerPosRef.current.y) === 0 || Math.abs(enemySubsystem.enemy8Pos.ref.current.x - playerPosRef.current.x) === 0 && Math.abs(enemySubsystem.enemy8Pos.ref.current.y - playerPosRef.current.y) <= enemy8Move1.range || Math.abs(enemySubsystem.enemy8Pos.ref.current.x - playerPosRef.current.x) <= enemy8Move1.range && Math.abs(enemySubsystem.enemy8Pos.ref.current.y - playerPosRef.current.y) <= enemy8Move1.range && Math.abs(enemySubsystem.enemy8Pos.ref.current.x - playerPosRef.current.x) === Math.abs(enemySubsystem.enemy8Pos.ref.current.y - playerPosRef.current.y))) {
        enemySubsystem.enemy8Attacking.set(true);
        setTimeout(() => enemyUseMove(enemy8Move1, 8), ((4600 + turnIntervalMs) * (move)));
        console.log('triggered with', 'enemyx',enemySubsystem.enemy8Pos.ref.current.x, 'playerx', playerPosRef.current.x, 'enemyy', enemySubsystem.enemy8Pos.ref.current.y, 'playery', playerPosRef.current.y)
        console.log('range:', enemy8Move1.range)
        return;
      }
    }
    if (Math.abs(enemySubsystem.enemy8Pos.ref.current.x - playerPos.x) < 15 && Math.abs(enemySubsystem.enemy8Pos.ref.current.y - playerPos.y) < 15 && enemySubsystem.enemy8MoveBehavior.ref.current === true){
      pursue(enemySubsystem.enemy8Pos.ref.current.x, enemySubsystem.enemy8Pos.ref.current.y, 8)
    }
    else if (Math.abs(enemySubsystem.enemy8Pos.ref.current.x - playerPos.x) >= 15 && Math.abs(enemySubsystem.enemy8Pos.ref.current.y - playerPos.y) >= 15 && enemySubsystem.enemy8MoveBehavior.ref.current === true){
      patrol(enemySubsystem.enemy8Pos.ref.current.x, enemySubsystem.enemy8Pos.ref.current.y, 8)  
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
      if (typeof c !== 'undefined' && c !== 'W' && c !== 'S' && c !== playerPos.x && c !== playerPos.y && !enemySubsystem.enemyHereTiles.ref.current.find(tile => tile.x === xx && tile.y === yy && !itemTilesRef.current.find(tile => tile.x === xx && tile.y === yy))) roomFloorTiles.push({ x: xx, y: yy });
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

function verifyEnemyGeneration (enemyCount) {
  if (enemyCount < 1) return;
  else if (enemyCount < 2) {
    enemySubsystem.enemy1.set(true);
  }
  else if (enemyCount < 3) {
    enemySubsystem.enemy1.set(true);
    enemySubsystem.enemy2.set(true);
}
else if (enemyCount < 4) {
    enemySubsystem.enemy1.set(true);
    enemySubsystem.enemy2.set(true);
    enemySubsystem.enemy3.set(true);
}
else if (enemyCount < 5) {
    enemySubsystem.enemy1.set(true);
    enemySubsystem.enemy2.set(true);
    enemySubsystem.enemy3.set(true);
    enemySubsystem.enemy4.set(true);
}
else if (enemyCount < 6) {
    enemySubsystem.enemy1.set(true);
    enemySubsystem.enemy2.set(true);
    enemySubsystem.enemy3.set(true);
    enemySubsystem.enemy4.set(true);
    enemySubsystem.enemy5.set(true);
  }
else if (enemyCount < 7) {
    enemySubsystem.enemy1.set(true);
    enemySubsystem.enemy2.set(true);
    enemySubsystem.enemy3.set(true);
    enemySubsystem.enemy4.set(true);
    enemySubsystem.enemy5.set(true);
    enemySubsystem.enemy6.set(true);
  }
else if (enemyCount < 8) {
    enemySubsystem.enemy1.set(true);
    enemySubsystem.enemy2.set(true);
    enemySubsystem.enemy3.set(true);
    enemySubsystem.enemy4.set(true);
    enemySubsystem.enemy5.set(true);
    enemySubsystem.enemy6.set(true);
    enemySubsystem.enemy7.set(true);
  }
else if (enemyCount < 9) {
    enemySubsystem.enemy1.set(true);
    enemySubsystem.enemy2.set(true);
    enemySubsystem.enemy3.set(true);
    enemySubsystem.enemy4.set(true);
    enemySubsystem.enemy5.set(true);
    enemySubsystem.enemy6.set(true);
    enemySubsystem.enemy7.set(true);
    enemySubsystem.enemy8.set(true);
  }
  return;
}

React.useEffect(() => {
  enemySubsystem.enemies.ref.current = enemySubsystem.enemies.state; //marked for removal
  enemySubsystem.enemyHereTiles.ref.current = enemySubsystem.enemies.state.map(enemy => ({ x: enemy.pos.x, y: enemy.pos.y, sprite: enemy.sprite })); //marked for removal
}, [enemySubsystem.enemies.state]);
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
    enemySubsystem.enemy1Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType1.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy1Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType1.state].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy2'){
    enemySubsystem.enemy2Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType2.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy2Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType2.state].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy3'){
    enemySubsystem.enemy3Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType3.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy3Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType3.state].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy4'){
    enemySubsystem.enemy4Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType4.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy4Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType4.state].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy5'){
    enemySubsystem.enemy5Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType5.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy5Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType5.state].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy6'){
    enemySubsystem.enemy6Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType6.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy6Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType6.state].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy7'){
    enemySubsystem.enemy7Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType7.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy7Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType7.state].name + ' woke up!');
    }, randInt(5000, 10000)); // Sleep for 5 to 10 seconds
  }
  else if (target === 'enemy8'){
    enemySubsystem.enemy8Sleeping.set(true);
    addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType8.state].name + ' fell asleep!');
  setTimeout(() => {
      enemySubsystem.enemy8Sleeping.set(false);
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType8.state].name + ' woke up!');
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
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy1Pos.ref.current.x || y !== enemySubsystem.enemy1Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy1Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType1.state].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy2'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy2Pos.ref.current.x || y !== enemySubsystem.enemy2Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy2Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType2.state].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy3'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy3Pos.ref.current.x || y !== enemySubsystem.enemy3Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy3Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType3.state].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy4'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy4Pos.ref.current.x || y !== enemySubsystem.enemy4Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy4Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType4.state].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy5'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy5Pos.ref.current.x || y !== enemySubsystem.enemy5Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy5Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType5.state].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy6'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy6Pos.ref.current.x || y !== enemySubsystem.enemy6Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy6Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType6.state].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy7'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy7Pos.ref.current.x || y !== enemySubsystem.enemy7Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy7Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType7.state].name + ' warped!');
    } else {
      addLogMessage('No valid locations to warp to!');
    }
    }
    else if (target === 'enemy8'){
    const floorPositions = [];
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[0].length; x++) {
        if (dungeon[y][x] !== 'W' && dungeon[y][x] !== 'S' && (x !== enemySubsystem.enemy8Pos.ref.current.x || y !== enemySubsystem.enemy8Pos.ref.current.y)) {
          floorPositions.push({ x, y });
        }
      }
    }
    if (floorPositions.length > 0) {
      const randIndex = randInt(0, floorPositions.length);
      const newPos = floorPositions[randIndex];
      enemySubsystem.enemy8Pos.set({ x: newPos.x, y: newPos.y });
      addLogMessage(ENEMY_DEFS[enemySubsystem.enemyType8.state].name + ' warped!');
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
      const randIndexEnemy1 = randInt(0, floorPositions.length - 10);
      floorPositions.splice(randIndexEnemy1, 1); // Remove enemy1's new position
      const randIndexEnemy2 = randInt(0, floorPositions.length - 10);
      floorPositions.splice(randIndexEnemy2, 1); // Remove enemy2's new position
      const randIndexEnemy3 = randInt(0, floorPositions.length - 10);
      floorPositions.splice(randIndexEnemy3, 1); // Remove enemy3's new position
      const randIndexEnemy4 = randInt(0, floorPositions.length - 10);
      floorPositions.splice(randIndexEnemy4, 1); // Remove enemy4's new position
      const randIndexEnemy5 = randInt(0, floorPositions.length - 10);
      floorPositions.splice(randIndexEnemy5, 1); // Remove enemy5's new position
      const randIndexEnemy6 = randInt(0, floorPositions.length - 10);
      floorPositions.splice(randIndexEnemy6, 1); // Remove enemy6's new position
      const randIndexEnemy7 = randInt(0, floorPositions.length - 10);
      floorPositions.splice(randIndexEnemy7, 1); // Remove enemy7's new position
      const randIndexEnemy8 = randInt(0, floorPositions.length - 10);
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
      enemySubsystem.enemy1.state.x !== 2 ? enemySubsystem.enemy1Pos.set({ x: newPosEnemy1.x, y: newPosEnemy1.y }) : null;
      enemySubsystem.enemy2.state.x !== 2 ? enemySubsystem.enemy2Pos.set({ x: newPosEnemy2.x, y: newPosEnemy2.y }) : null;
      enemySubsystem.enemy3.state.x !== 2 ? enemySubsystem.enemy3Pos.set({ x: newPosEnemy3.x, y: newPosEnemy3.y }) : null;
      enemySubsystem.enemy4.state.x !== 2 ? enemySubsystem.enemy4Pos.set({ x: newPosEnemy4.x, y: newPosEnemy4.y }) : null;
      enemySubsystem.enemy5.state.x !== 2 ? enemySubsystem.enemy5Pos.set({ x: newPosEnemy5.x, y: newPosEnemy5.y }) : null;
      enemySubsystem.enemy6.state.x !== 2 ? enemySubsystem.enemy6Pos.set({ x: newPosEnemy6.x, y: newPosEnemy6.y }) : null;
      enemySubsystem.enemy7.state.x !== 2 ? enemySubsystem.enemy7Pos.set({ x: newPosEnemy7.x, y: newPosEnemy7.y }) : null;
      enemySubsystem.enemy8.state.x !== 2 ? enemySubsystem.enemy8Pos.set({ x: newPosEnemy8.x, y: newPosEnemy8.y }) : null;
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

    // Snap the camera transform to whole pixels to avoid subpixel seams
    // between adjacent tiles when the map is moved or zoomed.
    const offsetX = Math.round((20 - nx) * 0.5 + 20);
    const offsetY = Math.round((-20 - ny) * 0.5 - 225);
    const newTransform = `translate(${offsetX}px, ${offsetY}px)`;


    if (dungeonRef.current && dungeonRef.current.style.transform !== newTransform) {
      cameraTransformRef.current = newTransform;
      dungeonRef.current.style.transform = newTransform;
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

// draw minimap to canvas
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
    enemySubsystem.enemy1.state ? verifyEnemyPosition(enemySubsystem.enemy1Pos.ref.current.x, enemySubsystem.enemy1Pos.ref.current.y, 1) : 0
    enemySubsystem.enemy2.state ? verifyEnemyPosition(enemySubsystem.enemy2Pos.ref.current.x, enemySubsystem.enemy2Pos.ref.current.y, 2) : 0
    enemySubsystem.enemy3.state ? verifyEnemyPosition(enemySubsystem.enemy3Pos.ref.current.x, enemySubsystem.enemy3Pos.ref.current.y, 3) : 0
    enemySubsystem.enemy4.state ? verifyEnemyPosition(enemySubsystem.enemy4Pos.ref.current.x, enemySubsystem.enemy4Pos.ref.current.y, 4) : 0
    enemySubsystem.enemy5.state ? verifyEnemyPosition(enemySubsystem.enemy5Pos.ref.current.x, enemySubsystem.enemy5Pos.ref.current.y, 5) : 0
    enemySubsystem.enemy6.state ? verifyEnemyPosition(enemySubsystem.enemy6Pos.ref.current.x, enemySubsystem.enemy6Pos.ref.current.y, 6) : 0
    enemySubsystem.enemy7.state ? verifyEnemyPosition(enemySubsystem.enemy7Pos.ref.current.x, enemySubsystem.enemy7Pos.ref.current.y, 7) : 0
    enemySubsystem.enemy8.state ? verifyEnemyPosition(enemySubsystem.enemy8Pos.ref.current.x, enemySubsystem.enemy8Pos.ref.current.y, 8) : 0
    // Adjust delta if there's a wall in the way
    if (dungeon[playerPos.y + wallCheck1.y][playerPos.x + wallCheck1.x] === 'W') {
      delta.x = wallCheck1.x - wallCheck1.x;
      delta.y = wallCheck1.y - wallCheck1.y;
    }

    else if (enemySubsystem.enemy1.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy1Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy1Pos.ref.current.x || enemySubsystem.enemy2.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy2Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy2Pos.ref.current.x || enemySubsystem.enemy3.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy3Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy3Pos.ref.current.x || enemySubsystem.enemy4.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy4Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy4Pos.ref.current.x || enemySubsystem.enemy5.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy5Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy5Pos.ref.current.x || enemySubsystem.enemy6.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy6Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy6Pos.ref.current.x || enemySubsystem.enemy7.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy7Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy7Pos.ref.current.x || enemySubsystem.enemy8.state && playerPos.y + wallCheck1.y === enemySubsystem.enemy8Pos.ref.current.y && playerPos.x + wallCheck1.x === enemySubsystem.enemy8Pos.ref.current.x){
      delta.x = wallCheck1.x;
      delta.y = wallCheck1.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemySubsystem.enemy1Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy1Pos.ref.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy2Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy2Pos.ref.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy3Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy3Pos.ref.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy4Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy4Pos.ref.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy5Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy5Pos.ref.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy6Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy6Pos.ref.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy7Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy7Pos.ref.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy8Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy8Pos.ref.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck2.y][playerPos.x + wallCheck2.x] === 'W') {
      delta.x = wallCheck2.x - wallCheck1.x;
      delta.y = wallCheck2.y - wallCheck1.y;
    }

    else if (enemySubsystem.enemy1.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy1Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy1Pos.ref.current.x || enemySubsystem.enemy2.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy2Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy2Pos.ref.current.x || enemySubsystem.enemy3.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy3Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy3Pos.ref.current.x || enemySubsystem.enemy4.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy4Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy4Pos.ref.current.x || enemySubsystem.enemy5.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy5Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy5Pos.ref.current.x || enemySubsystem.enemy6.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy6Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy6Pos.ref.current.x || enemySubsystem.enemy7.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy7Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy7Pos.ref.current.x || enemySubsystem.enemy8.state && playerPos.y + wallCheck2.y === enemySubsystem.enemy8Pos.ref.current.y && playerPos.x + wallCheck2.x === enemySubsystem.enemy8Pos.ref.current.x){
      delta.x = wallCheck2.x;
      delta.y = wallCheck2.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemySubsystem.enemy1Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy1Pos.ref.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy2Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy2Pos.ref.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy3Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy3Pos.ref.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy4Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy4Pos.ref.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy5Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy5Pos.ref.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy6Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy6Pos.ref.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy7Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy7Pos.ref.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy8Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy8Pos.ref.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck3.y][playerPos.x + wallCheck3.x] === 'W') {
      delta.x = wallCheck3.x - wallCheck1.x;
      delta.y = wallCheck3.y - wallCheck1.y;
    }

    else if (enemySubsystem.enemy1.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy1Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy1Pos.ref.current.x || enemySubsystem.enemy2.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy2Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy2Pos.ref.current.x || enemySubsystem.enemy3.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy3Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy3Pos.ref.current.x || enemySubsystem.enemy4.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy4Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy4Pos.ref.current.x || enemySubsystem.enemy5.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy5Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy5Pos.ref.current.x || enemySubsystem.enemy6.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy6Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy6Pos.ref.current.x || enemySubsystem.enemy7.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy7Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy7Pos.ref.current.x || enemySubsystem.enemy8.state && playerPos.y + wallCheck3.y === enemySubsystem.enemy8Pos.ref.current.y && playerPos.x + wallCheck3.x === enemySubsystem.enemy8Pos.ref.current.x){
      delta.x = wallCheck3.x;
      delta.y = wallCheck3.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemySubsystem.enemy1Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy1Pos.ref.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy2Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy2Pos.ref.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy3Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy3Pos.ref.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy4Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy4Pos.ref.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy5Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy5Pos.ref.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy6Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy6Pos.ref.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy7Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy7Pos.ref.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy8Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy8Pos.ref.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck4.y][playerPos.x + wallCheck4.x] === 'W') {
      delta.x = wallCheck4.x - wallCheck1.x;
      delta.y = wallCheck4.y - wallCheck1.y;
    }

    else if (enemySubsystem.enemy1.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy1Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy1Pos.ref.current.x || enemySubsystem.enemy2.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy2Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy2Pos.ref.current.x || enemySubsystem.enemy3.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy3Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy3Pos.ref.current.x || enemySubsystem.enemy4.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy4Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy4Pos.ref.current.x || enemySubsystem.enemy5.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy5Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy5Pos.ref.current.x || enemySubsystem.enemy6.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy6Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy6Pos.ref.current.x || enemySubsystem.enemy7.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy7Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy7Pos.ref.current.x || enemySubsystem.enemy8.state && playerPos.y + wallCheck4.y === enemySubsystem.enemy8Pos.ref.current.y && playerPos.x + wallCheck4.x === enemySubsystem.enemy8Pos.ref.current.x){
      delta.x = wallCheck4.x;
      delta.y = wallCheck4.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemySubsystem.enemy1Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy1Pos.ref.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy2Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy2Pos.ref.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy3Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy3Pos.ref.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy4Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy4Pos.ref.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy5Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy5Pos.ref.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy6Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy6Pos.ref.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy7Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy7Pos.ref.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy8Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy8Pos.ref.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck5.y][playerPos.x + wallCheck5.x] === 'W') {
      delta.x = wallCheck5.x - wallCheck1.x;
      delta.y = wallCheck5.y - wallCheck1.y;
    }

    else if (enemySubsystem.enemy1.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy1Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy1Pos.ref.current.x || enemySubsystem.enemy2.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy2Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy2Pos.ref.current.x || enemySubsystem.enemy3.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy3Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy3Pos.ref.current.x || enemySubsystem.enemy4.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy4Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy4Pos.ref.current.x || enemySubsystem.enemy5.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy5Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy5Pos.ref.current.x || enemySubsystem.enemy6.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy6Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy6Pos.ref.current.x || enemySubsystem.enemy7.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy7Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy7Pos.ref.current.x || enemySubsystem.enemy8.state && playerPos.y + wallCheck5.y === enemySubsystem.enemy8Pos.ref.current.y && playerPos.x + wallCheck5.x === enemySubsystem.enemy8Pos.ref.current.x){
      delta.x = wallCheck5.x;
      delta.y = wallCheck5.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemySubsystem.enemy1Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy1Pos.ref.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy2Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy2Pos.ref.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy3Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy3Pos.ref.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy4Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy4Pos.ref.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy5Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy5Pos.ref.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy6Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy6Pos.ref.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy7Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy7Pos.ref.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy8Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy8Pos.ref.current.y){
        setTargeted('enemy8')
      }

    }

    else if (dungeon[playerPos.y + wallCheck6.y][playerPos.x + wallCheck6.x] === 'W') {
      delta.x = wallCheck6.x - wallCheck1.x;
      delta.y = wallCheck6.y - wallCheck1.y;
    }

    else if (enemySubsystem.enemy1.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy1Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy1Pos.ref.current.x || enemySubsystem.enemy2.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy2Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy2Pos.ref.current.x || enemySubsystem.enemy3.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy3Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy3Pos.ref.current.x || enemySubsystem.enemy4.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy4Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy4Pos.ref.current.x || enemySubsystem.enemy5.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy5Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy5Pos.ref.current.x || enemySubsystem.enemy6.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy6Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy6Pos.ref.current.x || enemySubsystem.enemy7.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy7Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy7Pos.ref.current.x || enemySubsystem.enemy8.state && playerPos.y + wallCheck6.y === enemySubsystem.enemy8Pos.ref.current.y && playerPos.x + wallCheck6.x === enemySubsystem.enemy8Pos.ref.current.x){
      delta.x = wallCheck6.x;
      delta.y = wallCheck6.y;
      setWillConsumeItem(true);

      if (playerPos.x + delta.x === enemySubsystem.enemy1Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy1Pos.ref.current.y){
        setTargeted('enemy1')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy2Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy2Pos.ref.current.y){
        setTargeted('enemy2')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy3Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy3Pos.ref.current.y){
        setTargeted('enemy3')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy4Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy4Pos.ref.current.y){
        setTargeted('enemy4')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy5Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy5Pos.ref.current.y){
        setTargeted('enemy5')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy6Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy6Pos.ref.current.y){
        setTargeted('enemy6')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy7Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy7Pos.ref.current.y){
        setTargeted('enemy7')
      }
      else if (playerPos.x + delta.x === enemySubsystem.enemy8Pos.ref.current.x && playerPos.y + delta.y === enemySubsystem.enemy8Pos.ref.current.y){
        setTargeted('enemy8')
      }

    }


    const endPos = { x: startPos.x + delta.x, y: startPos.y + delta.y + 0.25 }; // slight y offset for better arc

    // avoid optional chaining (Babel inline): use safe access instead
    const spriteSrc = item.sprite || (ITEM_DEFS[item.name] && ITEM_DEFS[item.name].sprite) || itemUrls.Reviverseed;
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
      if (i === segments.length - 1 && text2 !== null && color2 !== null) {
      setTimeout(() => setTextArray(prev => [...prev, segments[i]]), dialogSpeed * (i+1));
      setTimeout(() => generateText("", "Black", text2, color2, true), dialogSpeed * (i+1));
      }
      else {
      setTimeout(() => setTextArray(prev => [...prev, segments[i]]), dialogSpeed * (i+1));
      }
      /*
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
      */
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

React.useEffect(() => { //Marked for removal
  setInventoryIndex(getInventoryIndex(inventory, ITEM_DEFS)); //^^
}, [inventory]); //^^

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
            console.log("sprite updated on pickup: ", itemHere.sprite);
            addLogMessage(`Picked up ${itemHere.itemName || "Reviver Seed"}!`);
          }
          else if (inventoryFull){
            if (inventory.length < MAX_INVENTORY_SLOTS){
              setInventoryFull(false);
              addItemToInventory(itemHere.itemName || "Reviver Seed");
              setItemTiles(tiles => tiles.filter(tile => !(tile.x === newX && tile.y === newY)));
              setItemSelected(itemHere.id);
              setSelectedItemSprite(itemHere.sprite);
              console.log("sprite updated on pickup: ", itemHere.sprite);
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
addItemToInventory('Warp Orb');
setItemSelected('Warp Orb');
console.log('Enemy Subsystem', enemySubsystem)
console.log('Enemy Subsystem', enemySubsystem.enemies)
//console.log('sprite test:', Reviverseed, Apple)
return;
  break;
}

// Check for collision with walls only if not paused and not holding Shift
const moveCheck = (() => {
  if (isAiming) return { ok: false, reason: 'isAiming' };
  if (isPaused) return { ok: false, reason: 'isPaused' };
  if (enemySubsystem.enemy1Attacking.ref.current === true || enemySubsystem.enemy2Attacking.ref.current === true || enemySubsystem.enemy3Attacking.ref.current === true || enemySubsystem.enemy4Attacking.ref.current === true || enemySubsystem.enemy5Attacking.ref.current === true || enemySubsystem.enemy6Attacking.ref.current === true || enemySubsystem.enemy7Attacking.ref.current === true || enemySubsystem.enemy8Attacking.ref.current === true) return { ok: false, reason: 'enemy attacking' };
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
  if (enemySubsystem.enemy1.state && enemySubsystem.enemy1Pos.state.x === newX && enemySubsystem.enemy1Pos.state.y === newY) return { ok: false, reason: 'enemy1', tile };
  if (enemySubsystem.enemy2.state && enemySubsystem.enemy2Pos.state.x === newX && enemySubsystem.enemy2Pos.state.y === newY) return { ok: false, reason: 'enemy2', tile };
  if (enemySubsystem.enemy3.state && enemySubsystem.enemy3Pos.state.x === newX && enemySubsystem.enemy3Pos.state.y === newY) return { ok: false, reason: 'enemy3', tile };
  if (enemySubsystem.enemy4.state && enemySubsystem.enemy4Pos.state.x === newX && enemySubsystem.enemy4Pos.state.y === newY) return { ok: false, reason: 'enemy4', tile };
  if (enemySubsystem.enemy5.state && enemySubsystem.enemy5Pos.state.x === newX && enemySubsystem.enemy5Pos.state.y === newY) return { ok: false, reason: 'enemy5', tile };
  if (enemySubsystem.enemy6.state && enemySubsystem.enemy6Pos.state.x === newX && enemySubsystem.enemy6Pos.state.y === newY) return { ok: false, reason: 'enemy6', tile };
  if (enemySubsystem.enemy7.state && enemySubsystem.enemy7Pos.state.x === newX && enemySubsystem.enemy7Pos.state.y === newY) return { ok: false, reason: 'enemy7', tile };
  if (enemySubsystem.enemy8.state && enemySubsystem.enemy8Pos.state.x === newX && enemySubsystem.enemy8Pos.state.y === newY) return { ok: false, reason: 'enemy8', tile };
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
        indicesRef.current.idle.enemy = (indicesRef.current.idle.enemy + 1) % (enemySubsystem.enemyType1.state === 'Lunatone' ? lunatoneSprites.length : vaporeonSprites.length);
        if (enemySubsystem.enemy1Sleeping.state === false){
        enemySubsystem.enemy1IdleAnimIndex.set(indicesRef.current.idle.enemy);
        }
        if (enemySubsystem.enemy2Sleeping.state === false){
        enemySubsystem.enemy2IdleAnimIndex.set(indicesRef.current.idle.enemy);
        }
        if (enemySubsystem.enemy3Sleeping.state === false){
        enemySubsystem.enemy3IdleAnimIndex.set(indicesRef.current.idle.enemy);
        }
        if (enemySubsystem.enemy4Sleeping.state === false){
        enemySubsystem.enemy4IdleAnimIndex.set(indicesRef.current.idle.enemy);
        }
        if (enemySubsystem.enemy5Sleeping.state === false){
        enemySubsystem.enemy5IdleAnimIndex.set(indicesRef.current.idle.enemy);
        }
        if (enemySubsystem.enemy6Sleeping.state === false){
        enemySubsystem.enemy6IdleAnimIndex.set(indicesRef.current.idle.enemy);
        }
        if (enemySubsystem.enemy7Sleeping.state === false){
        enemySubsystem.enemy7IdleAnimIndex.set(indicesRef.current.idle.enemy);
        }
        if (enemySubsystem.enemy8Sleeping.state === false){
        enemySubsystem.enemy8IdleAnimIndex.set(indicesRef.current.idle.enemy);
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
    if (enemySubsystem.enemy1Sleeping.state || enemySubsystem.enemy2Sleeping.state || enemySubsystem.enemy3Sleeping.state || enemySubsystem.enemy4Sleeping.state || enemySubsystem.enemy5Sleeping.state || enemySubsystem.enemy6Sleeping.state || enemySubsystem.enemy7Sleeping.state || enemySubsystem.enemy8Sleeping.state) {
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
    for (let i = 0; i < enemySubsystem.enemyCount.state; i++) {
      // choose an enemy type safely
      const types = Object.keys(ENEMY_DEFS);
      const chosen = types[randInt(0, types.length)] || types[0];
      const e = spawnEnemy(newDungeon, room, chosen);
      if (e){ 
        spawnedAll.push(e);
        spawned.push(e);
      }
    }
  enemySubsystem.enemies.set(spawnedAll);
  enemySubsystem.enemiesState.set(spawnedAll);
  enemySubsystem.enemyHereTiles.set(spawnedAll.map(en => ({ x: en.pos.x, y: en.pos.y, sprite: en.sprites && en.sprites.downIdle ? en.sprites.downIdle.frame1 : null })));

      // populate per-slot enemy flags/positions (up to 8)
      const first8 = spawnedAll.slice(0, 8);
      const e1 = first8[0] || null, e2 = first8[1] || null, e3 = first8[2] || null, e4 = first8[3] || null;
  const e5 = first8[4] || null, e6 = first8[5] || null, e7 = first8[6] || null, e8 = first8[7] || null;
      enemySubsystem.enemyType1.set(e1 ? e1.key : null);
      enemySubsystem.enemyType2.set(e2 ? e2.key : null);
      enemySubsystem.enemyType3.set(e3 ? e3.key : null);
      enemySubsystem.enemyType4.set(e4 ? e4.key : null);
      enemySubsystem.enemyType5.set(e5 ? e5.key : null);
      enemySubsystem.enemyType6.set(e6 ? e6.key : null);
      enemySubsystem.enemyType7.set(e7 ? e7.key : null);
      enemySubsystem.enemyType8.set(e8 ? e8.key : null);

      enemySubsystem.enemy1.set(!!e1); enemySubsystem.enemy2.set(!!e2); enemySubsystem.enemy3.set(!!e3); enemySubsystem.enemy4.set(!!e4); enemySubsystem.enemy5.set(!!e5); enemySubsystem.enemy6.set(!!e6); enemySubsystem.enemy7.set(!!e7); enemySubsystem.enemy8.set(!!e8);
      enemySubsystem.enemy1Pos.set(e1 ? { x: e1.pos.x, y: e1.pos.y } : null);
      enemySubsystem.enemy2Pos.set(e2 ? { x: e2.pos.x, y: e2.pos.y } : null);
      enemySubsystem.enemy3Pos.set(e3 ? { x: e3.pos.x, y: e3.pos.y } : null);
      enemySubsystem.enemy4Pos.set(e4 ? { x: e4.pos.x, y: e4.pos.y } : null);
      enemySubsystem.enemy5Pos.set(e5 ? { x: e5.pos.x, y: e5.pos.y } : null);
      enemySubsystem.enemy6Pos.set(e6 ? { x: e6.pos.x, y: e6.pos.y } : null);
      enemySubsystem.enemy7Pos.set(e7 ? { x: e7.pos.x, y: e7.pos.y } : null);
      enemySubsystem.enemy8Pos.set(e8 ? { x: e8.pos.x, y: e8.pos.y } : null);

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
  const offsetX = Math.round((20 - playerStart.x) * 0.5 + 20);
  const offsetY = Math.round((-20 - playerStart.y) * 0.5 - 225);
  const immediateTransform = `translate(${offsetX}px, ${offsetY}px)`;
  if (dungeonRef.current) {
    cameraTransformRef.current = immediateTransform;
    dungeonRef.current.style.transform = immediateTransform;
  }
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
const playerX = Math.floor((playerPos && playerPos.x) ? playerPos.x : 0);
const playerY = Math.floor((playerPos && playerPos.y) ? playerPos.y : 0);

// Calculate the visible range of rows and columns based on the player's position and view radius
const minRow = Math.max(0, playerY - VIEW_RADIUS - VIEW_COLUMN_BUFFER);
const maxRow = Math.min(Math.max(0, rows - 1), playerY + VIEW_RADIUS + VIEW_COLUMN_BUFFER);
const minCol = Math.max(0, playerX - VIEW_RADIUS - VIEW_COLUMN_BUFFER);
const maxCol = Math.min(Math.max(0, cols - 1), playerX + VIEW_RADIUS + VIEW_COLUMN_BUFFER);

React.useEffect(() => {
  if (!dungeon.length) return;
  const preloadSprites = new Set();
  for (let row = minRow; row <= maxRow; row++) {
    for (let col = minCol; col <= maxCol; col++) {
      const cell = safeDungeon[row]?.[col];
      if (cell === 'W') {
        const sprite = wallSpriteMap[getWallTileType(col, row, dungeon)];
        if (sprite) preloadSprites.add(sprite);
      }
    }
  }
  preloadSprites.forEach((sprite) => {
    loadTileImage(sprite);
  });
}, [dungeon, minRow, maxRow, minCol, maxCol]);

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
          transform: cameraTransformRef.current,
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
                      <TileCanvas src={wallSprite} alt="Wall" className="wall absolute" width={40} height={40} />
                    ) : (
                      <img src={cell} alt="Floor" className="floor absolute" draggable="false" />
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
                      const atlasKey = AtlasSubsystem.getAtlasKeyForItemName(itemHere.itemName);
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
                    {enemySubsystem.enemy1.state === true && colIndex === enemySubsystem.enemy1Pos.state.x && rowIndex === enemySubsystem.enemy1Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType1.state}
                          animation={enemySubsystem.enemy1Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy1Sleeping.state ? "none" : enemySubsystem.enemy1LastDirection.state}
                          frame={enemySubsystem.enemy1Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy1IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="Enemy1"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType1.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType1.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemySubsystem.enemy2.state === true && colIndex === enemySubsystem.enemy2Pos.state.x && rowIndex === enemySubsystem.enemy2Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType2.state}
                          animation={enemySubsystem.enemy2Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy2Sleeping.state ? "none" : enemySubsystem.enemy2LastDirection.state}
                          frame={enemySubsystem.enemy2Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy2IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="Enemy2"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType2.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType2.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemySubsystem.enemy3.state === true && colIndex === enemySubsystem.enemy3Pos.state.x && rowIndex === enemySubsystem.enemy3Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType3.state}
                          animation={enemySubsystem.enemy3Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy3Sleeping.state ? "none" : enemySubsystem.enemy3LastDirection.state}
                          frame={enemySubsystem.enemy3Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy3IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="Enemy3"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType3.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType3.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemySubsystem.enemy4.state === true && colIndex === enemySubsystem.enemy4Pos.state.x && rowIndex === enemySubsystem.enemy4Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType4.state}
                          animation={enemySubsystem.enemy4Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy4Sleeping.state ? "none" : enemySubsystem.enemy4LastDirection.state}
                          frame={enemySubsystem.enemy4Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy4IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="Enemy4"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType4.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType4.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemySubsystem.enemy5.state === true && colIndex === enemySubsystem.enemy5Pos.state.x && rowIndex === enemySubsystem.enemy5Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType5.state}
                          animation={enemySubsystem.enemy5Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy5Sleeping.state ? "none" : enemySubsystem.enemy5LastDirection.state}
                          frame={enemySubsystem.enemy5Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy5IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="enemySubsystem.enemy5.state"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType5.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType5.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemySubsystem.enemy6.state === true && colIndex === enemySubsystem.enemy6Pos.state.x && rowIndex === enemySubsystem.enemy6Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType6.state}
                          animation={enemySubsystem.enemy6Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy6Sleeping.state ? "none" : enemySubsystem.enemy6LastDirection.state}
                          frame={enemySubsystem.enemy6Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy6IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="enemySubsystem.enemy6.state"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType6.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType6.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemySubsystem.enemy7.state === true && colIndex === enemySubsystem.enemy7Pos.state.x && rowIndex === enemySubsystem.enemy7Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType7.state}
                          animation={enemySubsystem.enemy7Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy7Sleeping.state ? "none" : enemySubsystem.enemy7LastDirection.state}
                          frame={enemySubsystem.enemy7Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy7IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="Enemy7"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType7.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType7.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
                          }}
                        />
                    ) : null}

                    {enemySubsystem.enemy8.state === true && colIndex === enemySubsystem.enemy8Pos.state.x && rowIndex === enemySubsystem.enemy8Pos.state.y ? (
                      <SpriteCanvas
                          pokemon={enemySubsystem.enemyType8.state}
                          animation={enemySubsystem.enemy8Sleeping.state ? "sleep" : "idle"}
                          direction={enemySubsystem.enemy8Sleeping.state ? "none" : enemySubsystem.enemy8LastDirection.state}
                          frame={enemySubsystem.enemy8Sleeping.state ? sleepSpriteIndex + 1 : enemySubsystem.enemy8IdleAnimIndex.state + 1}
                          width={24}
                          height={48}
                          alt="Enemy8"
                          className="player-sprite absolute"
                          style={{
                            transform: enemySubsystem.enemyType8.state === 'Vaporeon' ? 'scale(0.87) translateY(-10px)' : enemySubsystem.enemyType8.state === 'Lunatone' ? 'scale(1.2) translateY(4px)' : 'none',
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
          {DMGVfx1.Active === true && DMGVfx1.X === enemySubsystem.enemy1Pos.ref.current.x && DMGVfx1.Y === enemySubsystem.enemy1Pos.ref.current.y - 1 && (
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
          {DMGVfx2.Active === true && DMGVfx2.X === enemySubsystem.enemy2Pos.ref.current.x && DMGVfx2.Y === enemySubsystem.enemy2Pos.ref.current.y - 1 && (
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
          {DMGVfx3.Active === true && DMGVfx3.X === enemySubsystem.enemy3Pos.ref.current.x && DMGVfx3.Y === enemySubsystem.enemy3Pos.ref.current.y - 1 && (
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
          {DMGVfx4.Active === true && DMGVfx4.X === enemySubsystem.enemy4Pos.ref.current.x && DMGVfx4.Y === enemySubsystem.enemy4Pos.ref.current.y - 1 && (
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
          {DMGVfx5.Active === true && DMGVfx5.X === enemySubsystem.enemy5Pos.ref.current.x && DMGVfx5.Y === enemySubsystem.enemy5Pos.ref.current.y - 1 && (
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
          {DMGVfx6.Active === true && DMGVfx6.X === enemySubsystem.enemy6Pos.ref.current.x && DMGVfx6.Y === enemySubsystem.enemy6Pos.ref.current.y - 1 && (
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
          {DMGVfx7.Active === true && DMGVfx7.X === enemySubsystem.enemy7Pos.ref.current.x && DMGVfx7.Y === enemySubsystem.enemy7Pos.ref.current.y - 1 && (
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
          {DMGVfx8.Active === true && DMGVfx8.X === enemySubsystem.enemy8Pos.ref.current.x && DMGVfx8.Y === enemySubsystem.enemy8Pos.ref.current.y - 1 && (
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
                transform: p.sprite !== itemUrls.Reviverseed && p.sprite !== itemUrls.Scarf && p.sprite !== itemUrls.Orb ? `scale(1.5)` : 'none'
              }}
            />
          ))))}
          
        </div>
        {/* Floating Rock Throw Projectile - Renders at pixel-perfect position with decimals */}
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
              left: minCol > 0 ? `${(enemySubsystem.enemy1AttackBehavior.ref.current === true ? (enemySubsystem.enemy1Pos.ref.current.x - projectilePosRef.current[1].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy1AttackBehavior.ref.current === true ? enemySubsystem.enemy1Pos.ref.current.x - projectilePosRef.current[1].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy1AttackBehavior.ref.current === true ? (enemySubsystem.enemy1Pos.ref.current.y - projectilePosRef.current[1].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy1AttackBehavior.ref.current === true ? enemySubsystem.enemy1Pos.ref.current.y - projectilePosRef.current[1].y : 0) * 40}px`,
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
              left: minCol > 0 ? `${(enemySubsystem.enemy2AttackBehavior.ref.current === true ? (enemySubsystem.enemy2Pos.ref.current.x - projectilePosRef.current[2].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy2AttackBehavior.ref.current === true ? enemySubsystem.enemy2Pos.ref.current.x - projectilePosRef.current[2].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy2AttackBehavior.ref.current === true ? (enemySubsystem.enemy2Pos.ref.current.y - projectilePosRef.current[2].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy2AttackBehavior.ref.current === true ? enemySubsystem.enemy2Pos.ref.current.y - projectilePosRef.current[2].y : 0) * 40}px`,
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
              left: minCol > 0 ? `${(enemySubsystem.enemy3AttackBehavior.ref.current === true ? (enemySubsystem.enemy3Pos.ref.current.x - projectilePosRef.current[3].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy3AttackBehavior.ref.current === true ? enemySubsystem.enemy3Pos.ref.current.x - projectilePosRef.current[3].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy3AttackBehavior.ref.current === true ? (enemySubsystem.enemy3Pos.ref.current.y - projectilePosRef.current[3].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy3AttackBehavior.ref.current === true ? enemySubsystem.enemy3Pos.ref.current.y - projectilePosRef.current[3].y : 0) * 40}px`,
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
              left: minCol > 0 ? `${(enemySubsystem.enemy4AttackBehavior.ref.current === true ? (enemySubsystem.enemy4Pos.ref.current.x - projectilePosRef.current[4].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy4AttackBehavior.ref.current === true ? enemySubsystem.enemy4Pos.ref.current.x - projectilePosRef.current[4].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy4AttackBehavior.ref.current === true ? (enemySubsystem.enemy4Pos.ref.current.y - projectilePosRef.current[4].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy4AttackBehavior.ref.current === true ? enemySubsystem.enemy4Pos.ref.current.y - projectilePosRef.current[4].y : 0) * 40}px`,
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
              left: minCol > 0 ? `${(enemySubsystem.enemy5AttackBehavior.ref.current === true ? (enemySubsystem.enemy5Pos.ref.current.x - projectilePosRef.current[5].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy5AttackBehavior.ref.current === true ? enemySubsystem.enemy5Pos.ref.current.x - projectilePosRef.current[5].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy5AttackBehavior.ref.current === true ? (enemySubsystem.enemy5Pos.ref.current.y - projectilePosRef.current[5].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy5AttackBehavior.ref.current === true ? enemySubsystem.enemy5Pos.ref.current.y - projectilePosRef.current[5].y : 0) * 40}px`,
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
              left: minCol > 0 ? `${(enemySubsystem.enemy6AttackBehavior.ref.current === true ? (enemySubsystem.enemy6Pos.ref.current.x - projectilePosRef.current[6].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy6AttackBehavior.ref.current === true ? enemySubsystem.enemy6Pos.ref.current.x - projectilePosRef.current[6].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy6AttackBehavior.ref.current === true ? (enemySubsystem.enemy6Pos.ref.current.y - projectilePosRef.current[6].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy6AttackBehavior.ref.current === true ? enemySubsystem.enemy6Pos.ref.current.y - projectilePosRef.current[6].y : 0) * 40}px`,
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
              left: minCol > 0 ? `${(enemySubsystem.enemy7AttackBehavior.ref.current === true ? (enemySubsystem.enemy7Pos.ref.current.x - projectilePosRef.current[7].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy7AttackBehavior.ref.current === true ? enemySubsystem.enemy7Pos.ref.current.x - projectilePosRef.current[7].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy7AttackBehavior.ref.current === true ? (enemySubsystem.enemy7Pos.ref.current.y - projectilePosRef.current[7].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy7AttackBehavior.ref.current === true ? enemySubsystem.enemy7Pos.ref.current.y - projectilePosRef.current[7].y : 0) * 40}px`,
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
              left: minCol > 0 ? `${(enemySubsystem.enemy8AttackBehavior.ref.current === true ? (enemySubsystem.enemy8Pos.ref.current.x - projectilePosRef.current[8].x) - minCol : 0) * 40}px` : `${(enemySubsystem.enemy8AttackBehavior.ref.current === true ? enemySubsystem.enemy8Pos.ref.current.x - projectilePosRef.current[8].x : 0) * 40}px`,
              top: minRow > 0 ? `${(enemySubsystem.enemy8AttackBehavior.ref.current === true ? (enemySubsystem.enemy8Pos.ref.current.y - projectilePosRef.current[8].y) - minRow : 0) * 40}px` : `${(enemySubsystem.enemy8AttackBehavior.ref.current === true ? enemySubsystem.enemy8Pos.ref.current.y - projectilePosRef.current[8].y : 0) * 40}px`,
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
                    atlasKey={AtlasSubsystem.getAtlasKeyForItemName(item.name)}
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
                  {selectedItemSpriteRef.current !== itemUrls.Scarf ? itemActionsNormal.map((action, idx) => (
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
