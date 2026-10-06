import { AtlasSubsystem } from './AtlasSubsystem.jsx';
// Create compatibility aliases for existing code
export const itemUrls = {
Reviverseed: AtlasSubsystem.getItemSprite('Reviverseed'),
Apple: AtlasSubsystem.getItemSprite('Apple'),
Bigapple: AtlasSubsystem.getItemSprite('Bigapple'),
Goldenapple: AtlasSubsystem.getItemSprite('Goldenapple'),
Grimyfood: AtlasSubsystem.getItemSprite('Grimyfood'),
Maxether: AtlasSubsystem.getItemSprite('Maxether'),
Maxelixir: AtlasSubsystem.getItemSprite('Maxelixir'),
Protein: AtlasSubsystem.getItemSprite('Protein'),
Calcium: AtlasSubsystem.getItemSprite('Calcium'),
Iron: AtlasSubsystem.getItemSprite('Iron'),
Zinc: AtlasSubsystem.getItemSprite('Zinc'),
Carbos: AtlasSubsystem.getItemSprite('Carbos'),
Scarf: AtlasSubsystem.getItemSprite('Scarf'),
Orb: AtlasSubsystem.getItemSprite('Orb'),
GeoPebble: AtlasSubsystem.getItemSprite('GeoPebble')
};

export const MOVE_DEFS = {
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
export const ITEM_DEFS = {
  "Reviver Seed": {
    name: "Reviver Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Stun Seed": {
    name: "Stun Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Tiny Reviver Seed": {
    name: "Tiny Reviver Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Sleep Seed": {
    name: "Sleep Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 1
  }
  ,"Warp Seed": {
    name: "Warp Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 1
  },
  "Life Seed": {
    name: "Life Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Pure Seed": {
    name: "Pure Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 3
  },
  "Joy Seed": {
    name: "Joy Seed",
    sprite: itemUrls.Reviverseed,
    stackSize: 1,
    tier: 2
  },
  "Apple": {
    name: "Apple",
    sprite: itemUrls.Apple,
    stackSize: 1,
    tier: 1
  },
  "Big Apple": {
    name: "Big Apple",
    sprite: itemUrls.Bigapple,
    stackSize: 1,
    tier: 2
  },
  "Golden Apple": {
    name: "Golden Apple",
    sprite: itemUrls.Goldenapple,
    stackSize: 1,
    tier: 3
  },
  "Grimy Food": {
    name: "Grimy Food",
    sprite: itemUrls.Grimyfood,
    stackSize: 1,
    tier: 1
  },
  "Max Ether": {
    name: "Max Ether",
    sprite: itemUrls.Maxether,
    stackSize: 1,
    tier: 1
  },
  "Max Elixir": {
    name: "Max Elixir",
    sprite: itemUrls.Maxelixir,
    stackSize: 1,
    tier: 2
  },
  "Protein": {
    name: "Protein",
    sprite: itemUrls.Protein,
    stackSize: 1,
    tier: 2
  },
  "Calcium": {
    name: "Calcium",
    sprite: itemUrls.Calcium,
    stackSize: 1,
    tier: 2
  },
  "Iron": {
    name: "Iron",
    sprite: itemUrls.Iron,
    stackSize: 1,
    tier: 2
  },
  "Zinc": {
    name: "Zinc",
    sprite: itemUrls.Zinc,
    stackSize: 1,
    tier: 2
  },
  "Carbos": {
    name: "Carbos",
    sprite: itemUrls.Carbos,
    stackSize: 1,
    tier: 2
  },
  "Zinc Band": {
    name: "Zinc Band",
    sprite: itemUrls.Scarf,
    stackSize: 1,
    tier: 4
  },
  "Special Band": {
    name: "Special Band",
    sprite: itemUrls.Scarf,
    stackSize: 1,
    tier: 4
  },
  "Warp Scarf": {
    name: "Warp Scarf",
    sprite: itemUrls.Scarf,
    stackSize: 1,
    tier: 4
  },
  "Luminous Orb": {
    name: "Luminous Orb",
    sprite: itemUrls.Orb,
    stackSize: 1,
    tier: 4
  },
  "Warp Orb": {
    name: "Warp Orb",
    sprite: itemUrls.Orb,
    stackSize: 1,
    tier: 1
  }
};
export const ENEMY_DEFS = {
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
}