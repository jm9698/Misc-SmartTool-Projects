import { ENEMY_DEFS } from './DefintionSubsystem.jsx';

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export function useEnemySubsystem() {
    // Enemy params
const [enemies, setEnemies] = React.useState([]);
const enemiesRef = React.useRef(enemies); //marked for removal
const [enemyCount, setEnemyCount] = React.useState(() => randInt(1, 2));
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
const enemyHereTilesRef = React.useRef([]); //used to track enemy positions and omit them from currency/item rendering
const [enemiesState, setEnemiesState] = React.useState([]) //marked for removal
// Basic booleans to track which enemy slots are filled
const [enemy1, setEnemy1] = React.useState(false);
const [enemy2, setEnemy2] = React.useState(false);
const [enemy3, setEnemy3] = React.useState(false);
const [enemy4, setEnemy4] = React.useState(false);
const [enemy5, setEnemy5] = React.useState(false);
const [enemy6, setEnemy6] = React.useState(false);
const [enemy7, setEnemy7] = React.useState(false);
const [enemy8, setEnemy8] = React.useState(false);
// Track enemy positions for each slot
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
  //Status booleans
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
  const [chosen, setChosen] = React.useState(0);
    return {
        enemies: {state: enemies, set: setEnemies, ref: enemiesRef},
        enemyCount: {state: enemyCount, set: setEnemyCount },
        enemyTypes: {state: enemyTypes, set: setEnemyTypes },
        enemyType: {state: enemyType, set: setEnemyType },
        enemyType1: {state: enemyType1, set: setEnemyType1 },
        enemyType2: {state: enemyType2, set: setEnemyType2 },
        enemyType3: {state: enemyType3, set: setEnemyType3 },
        enemyType4: {state: enemyType4, set: setEnemyType4 },
        enemyType5: {state: enemyType5, set: setEnemyType5 },
        enemyType6: {state: enemyType6, set: setEnemyType6 },
        enemyType7: {state: enemyType7, set: setEnemyType7 },
        enemyType8: {state: enemyType8, set: setEnemyType8 },
        enemyHere: {state: enemyHere, set: setEnemyHere },
        enemyHereTiles: {state: enemyHereTiles, set: setEnemyHereTiles, ref: enemyHereTilesRef },
        enemiesState: {state: enemiesState, set: setEnemiesState },
        enemy1: {state: enemy1, set: setEnemy1 },
        enemy2: {state: enemy2, set: setEnemy2 },
        enemy3: {state: enemy3, set: setEnemy3 },
        enemy4: {state: enemy4, set: setEnemy4 },
        enemy5: {state: enemy5, set: setEnemy5 },
        enemy6: {state: enemy6, set: setEnemy6 },
        enemy7: {state: enemy7, set: setEnemy7 },
        enemy8: {state: enemy8, set: setEnemy8 },
        enemy1Pos: {state: enemy1Pos, set: setEnemy1Pos, ref: enemy1PosRef },
        enemy2Pos: {state: enemy2Pos, set: setEnemy2Pos, ref: enemy2PosRef },
        enemy3Pos: {state: enemy3Pos, set: setEnemy3Pos, ref: enemy3PosRef },
        enemy4Pos: {state: enemy4Pos, set: setEnemy4Pos, ref: enemy4PosRef },
        enemy5Pos: {state: enemy5Pos, set: setEnemy5Pos, ref: enemy5PosRef },
        enemy6Pos: {state: enemy6Pos, set: setEnemy6Pos, ref: enemy6PosRef },
        enemy7Pos: {state: enemy7Pos, set: setEnemy7Pos, ref: enemy7PosRef },
        enemy8Pos: {state: enemy8Pos, set: setEnemy8Pos, ref: enemy8PosRef },
        enemy1IdleAnimIndex: {state: enemy1IdleAnimIndex, set: setEnemy1IdleAnimIndex },
        enemy2IdleAnimIndex: {state: enemy2IdleAnimIndex, set: setEnemy2IdleAnimIndex },
        enemy3IdleAnimIndex: {state: enemy3IdleAnimIndex, set: setEnemy3IdleAnimIndex },
        enemy4IdleAnimIndex: {state: enemy4IdleAnimIndex, set: setEnemy4IdleAnimIndex },
        enemy5IdleAnimIndex: {state: enemy5IdleAnimIndex, set: setEnemy5IdleAnimIndex },
        enemy6IdleAnimIndex: {state: enemy6IdleAnimIndex, set: setEnemy6IdleAnimIndex },
        enemy7IdleAnimIndex: {state: enemy7IdleAnimIndex, set: setEnemy7IdleAnimIndex },
        enemy8IdleAnimIndex: {state: enemy8IdleAnimIndex, set: setEnemy8IdleAnimIndex },
        enemy1HP: {state: enemy1HP, set: setEnemy1HP },
        enemy1MaxHP: {state: enemy1MaxHP, set: setEnemy1MaxHP },
        enemy1Attack: {state: enemy1Attack, set: setEnemy1Attack },
        enemy1Defense: {state: enemy1Defense, set: setEnemy1Defense },
        enemy1SpecialDefense: {state: enemy1SpecialDefense, set: setEnemy1SpecialDefense },
        enemy1Speed: {state: enemy1Speed, set: setEnemy1Speed },
        enemy2HP: {state: enemy2HP, set: setEnemy2HP },
        enemy2MaxHP: {state: enemy2MaxHP, set: setEnemy2MaxHP },
        enemy2Attack: {state: enemy2Attack, set: setEnemy2Attack },
        enemy2Defense: {state: enemy2Defense, set: setEnemy2Defense },
        enemy2SpecialDefense: {state: enemy2SpecialDefense, set: setEnemy2SpecialDefense },
        enemy2Speed: {state: enemy2Speed, set: setEnemy2Speed },
        enemy3HP: {state: enemy3HP, set: setEnemy3HP },
        enemy3MaxHP: {state: enemy3MaxHP, set: setEnemy3MaxHP },
        enemy3Attack: {state: enemy3Attack, set: setEnemy3Attack },
        enemy3Defense: {state: enemy3Defense, set: setEnemy3Defense },
        enemy3SpecialDefense: {state: enemy3SpecialDefense, set: setEnemy3SpecialDefense },
        enemy3Speed: {state: enemy3Speed, set: setEnemy3Speed },
        enemy4HP: {state: enemy4HP, set: setEnemy4HP },
        enemy4MaxHP: {state: enemy4MaxHP, set: setEnemy4MaxHP },
        enemy4Attack: {state: enemy4Attack, set: setEnemy4Attack },
        enemy4Defense: {state: enemy4Defense, set: setEnemy4Defense },
        enemy4SpecialDefense: {state: enemy4SpecialDefense, set: setEnemy4SpecialDefense },
        enemy4Speed: {state: enemy4Speed, set: setEnemy4Speed },
        enemy5HP: {state: enemy5HP, set: setEnemy5HP },
        enemy5MaxHP: {state: enemy5MaxHP, set: setEnemy5MaxHP },
        enemy5Attack: {state: enemy5Attack, set: setEnemy5Attack },
        enemy5Defense: {state: enemy5Defense, set: setEnemy5Defense },
        enemy5SpecialDefense: {state: enemy5SpecialDefense, set: setEnemy5SpecialDefense },
        enemy5Speed: {state: enemy5Speed, set: setEnemy5Speed },
        enemy6HP: {state: enemy6HP, set: setEnemy6HP },
        enemy6MaxHP: {state: enemy6MaxHP, set: setEnemy6MaxHP },
        enemy6Attack: {state: enemy6Attack, set: setEnemy6Attack },
        enemy6Defense: {state: enemy6Defense, set: setEnemy6Defense },
        enemy6SpecialDefense: {state: enemy6SpecialDefense, set: setEnemy6SpecialDefense },
        enemy6Speed: {state: enemy6Speed, set: setEnemy6Speed },
        enemy7HP: {state: enemy7HP, set: setEnemy7HP },
        enemy7MaxHP: {state: enemy7MaxHP, set: setEnemy7MaxHP },
        enemy7Attack: {state: enemy7Attack, set: setEnemy7Attack },
        enemy7Defense: {state: enemy7Defense, set: setEnemy7Defense },
        enemy7SpecialDefense: {state: enemy7SpecialDefense, set: setEnemy7SpecialDefense },
        enemy7Speed: {state: enemy7Speed, set: setEnemy7Speed },
        enemy8HP: {state: enemy8HP, set: setEnemy8HP },
        enemy8MaxHP: {state: enemy8MaxHP, set: setEnemy8MaxHP },
        enemy8Attack: {state: enemy8Attack, set: setEnemy8Attack },
        enemy8Defense: {state: enemy8Defense, set: setEnemy8Defense },
        enemy8SpecialDefense: {state: enemy8SpecialDefense, set: setEnemy8SpecialDefense },
        enemy8Speed: {state: enemy8Speed, set: setEnemy8Speed },
        enemy1MoveBehavior: {state: enemy1MoveBehavior, set: setEnemy1MoveBehavior, ref: enemy1MoveBehaviorRef },
        enemy1AttackBehavior: {state: enemy1AttackBehavior, set: setEnemy1AttackBehavior, ref: enemy1AttackBehaviorRef },
        enemy2MoveBehavior: {state: enemy2MoveBehavior, set: setEnemy2MoveBehavior, ref: enemy2MoveBehaviorRef },
        enemy2AttackBehavior: {state: enemy2AttackBehavior, set: setEnemy2AttackBehavior, ref: enemy2AttackBehaviorRef },
        enemy3MoveBehavior: {state: enemy3MoveBehavior, set: setEnemy3MoveBehavior, ref: enemy3MoveBehaviorRef },
        enemy3AttackBehavior: {state: enemy3AttackBehavior, set: setEnemy3AttackBehavior, ref: enemy3AttackBehaviorRef },
        enemy4MoveBehavior: {state: enemy4MoveBehavior, set: setEnemy4MoveBehavior, ref: enemy4MoveBehaviorRef },
        enemy4AttackBehavior: {state: enemy4AttackBehavior, set: setEnemy4AttackBehavior, ref: enemy4AttackBehaviorRef },
        enemy5MoveBehavior: {state: enemy5MoveBehavior, set: setEnemy5MoveBehavior, ref: enemy5MoveBehaviorRef },
        enemy5AttackBehavior: {state: enemy5AttackBehavior, set: setEnemy5AttackBehavior, ref: enemy5AttackBehaviorRef },
        enemy6MoveBehavior: {state: enemy6MoveBehavior, set: setEnemy6MoveBehavior, ref: enemy6MoveBehaviorRef },
        enemy6AttackBehavior: {state: enemy6AttackBehavior, set: setEnemy6AttackBehavior, ref: enemy6AttackBehaviorRef },
        enemy7MoveBehavior: {state: enemy7MoveBehavior, set: setEnemy7MoveBehavior, ref: enemy7MoveBehaviorRef },
        enemy7AttackBehavior: {state: enemy7AttackBehavior, set: setEnemy7AttackBehavior, ref: enemy7AttackBehaviorRef },
        enemy8MoveBehavior: {state: enemy8MoveBehavior, set: setEnemy8MoveBehavior, ref: enemy8MoveBehaviorRef },
        enemy8AttackBehavior: {state: enemy8AttackBehavior, set: setEnemy8AttackBehavior, ref: enemy8AttackBehaviorRef },
        enemy1Attacking: {state: enemy1Attacking, set: setEnemy1Attacking, ref: enemy1AttackingRef },
        enemy2Attacking: {state: enemy2Attacking, set: setEnemy2Attacking, ref: enemy2AttackingRef },
        enemy3Attacking: {state: enemy3Attacking, set: setEnemy3Attacking, ref:enemy3AttackingRef },
         enemy4Attacking: {state: enemy4Attacking, set: setEnemy4Attacking, ref: enemy4AttackingRef },
         enemy5Attacking: {state: enemy5Attacking, set: setEnemy5Attacking, ref: enemy5AttackingRef },
         enemy6Attacking: {state: enemy6Attacking, set: setEnemy6Attacking, ref: enemy6AttackingRef },
         enemy7Attacking: {state: enemy7Attacking, set: setEnemy7Attacking, ref: enemy7AttackingRef },
         enemy8Attacking: {state: enemy8Attacking, set: setEnemy8Attacking, ref: enemy8AttackingRef },
         enemy1LastDirection: {state: enemy1LastDirection, set: setEnemy1LastDirection },
         enemy2LastDirection: {state: enemy2LastDirection, set: setEnemy2LastDirection },
         enemy3LastDirection: {state: enemy3LastDirection, set: setEnemy3LastDirection },
         enemy4LastDirection: {state: enemy4LastDirection, set: setEnemy4LastDirection },
         enemy5LastDirection: {state: enemy5LastDirection, set: setEnemy5LastDirection },
         enemy6LastDirection: {state: enemy6LastDirection, set: setEnemy6LastDirection },
         enemy7LastDirection: {state: enemy7LastDirection, set: setEnemy7LastDirection },
         enemy8LastDirection: {state: enemy8LastDirection, set: setEnemy8LastDirection },
         enemy1Sleeping: {state: enemy1Sleeping, set: setEnemy1Sleeping, ref: enemy1SleepingRef },
         enemy2Sleeping: {state: enemy2Sleeping, set: setEnemy2Sleeping, ref: enemy2SleepingRef },
         enemy3Sleeping: {state: enemy3Sleeping, set: setEnemy3Sleeping, ref: enemy3SleepingRef },
         enemy4Sleeping: {state: enemy4Sleeping, set: setEnemy4Sleeping, ref: enemy4SleepingRef },
         enemy5Sleeping: {state: enemy5Sleeping, set: setEnemy5Sleeping, ref: enemy5SleepingRef },
         enemy6Sleeping: {state: enemy6Sleeping, set: setEnemy6Sleeping, ref: enemy6SleepingRef },
         enemy7Sleeping: {state: enemy7Sleeping, set: setEnemy7Sleeping, ref: enemy7SleepingRef },
         enemy8Sleeping: {state: enemy8Sleeping, set: setEnemy8Sleeping, ref: enemy8SleepingRef },
         chosen: {state: chosen, set: setChosen } 
    };
    };
