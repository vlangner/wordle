const firebaseConfig = {
  apiKey: "AIzaSyDRp5vSHRwd70JFP7XBZFj9oxrR0IkgR4Y",
  authDomain: "finalproject-de8ef.firebaseapp.com",
  projectId: "finalproject-de8ef",
  storageBucket: "finalproject-de8ef.appspot.com",
  messagingSenderId: "733526193590",
  appId: "1:733526193590:web:b4659c1d10342cbdac7d17",
  measurementId: "G-DP4C3ERET1"
};

const dictionary = [
  'about',
  'above',
  'abuse',
  'actor',
  'acute',
  'admit',
  'adopt',
  'adult',
  'after',
  'again',
  'agent',
  'agree',
  'ahead',
  'alarm',
  'album',
  'alert',
  'alike',
  'alive',
  'allow',
  'alone',
  'along',
  'alter',
  'among',
  'anger',
  'Angle',
  'angry',
  'apart',
  'apple',
  'apply',
  'arena',
  'argue',
  'arise',
  'array',
  'aside',
  'asset',
  'audio',
  'audit',
  'avoid',
  'award',
  'aware',
  'badly',
  'baker',
  'bases',
  'basic',
  'basis',
  'beach',
  'began',
  'begin',
  'begun',
  'being',
  'below',
  'bench',
  'billy',
  'birth',
  'black',
  'blame',
  'blind',
  'block',
  'blood',
  'board',
  'boost',
  'booth',
  'bound',
  'brain',
  'brand',
  'bread',
  'break',
  'breed',
  'brief',
  'bring',
  'broad',
  'broke',
  'brown',
  'build',
  'built',
  'buyer',
  'cable',
  'calif',
  'carry',
  'catch',
  'cause',
  'chain',
  'chair',
  'chart',
  'chase',
  'cheap',
  'check',
  'chest',
  'chief',
  'child',
  'chose',
  'civil',
  'claim',
  'class',
  'clean',
  'clear',
  'click',
  'clock',
  'close',
  'coach',
  'coast',
  'could',
  'count',
  'court',
  'cover',
  'craft',
  'crash',
  'cream',
  'crime',
  'cross',
  'crowd',
  'crown',
  'curve',
  'cycle',
  'daily',
  'dance',
  'dated',
  'dealt',
  'death',
  'debut',
  'delay',
  'depth',
  'doing',
  'doubt',
  'dozen',
  'draft',
  'drama',
  'drawn',
  'dream',
  'dress',
  'drill',
  'drink',
  'drive',
  'drove',
  'dying',
  'eager',
  'early',
  'earth',
  'eight',
  'elite',
  'empty',
  'enemy',
  'enjoy',
  'enter',
  'entry',
  'equal',
  'error',
  'event',
  'every',
  'exact',
  'exist',
  'extra',
  'faith',
  'false',
  'fault',
  'fiber',
  'field',
  'fifth',
  'fifty',
  'fight',
  'final',
  'first',
  'fixed',
  'flash',
  'fleet',
  'floor',
  'fluid',
  'focus',
  'force',
  'forth',
  'forty',
  'forum',
  'found',
  'frame',
  'frank',
  'fraud',
  'fresh',
  'front',
  'fruit',
  'fully',
  'funny',
  'giant',
  'given',
  'glass',
  'globe',
  'going',
  'grace',
  'grade',
  'grand',
  'grant',
  'grass',
  'great',
  'green',
  'gross',
  'group',
  'grown',
  'guard',
  'guess',
  'guest',
  'guide',
  'happy',
  'harry',
  'heart',
  'heavy',
  'hence',
  'henry',
  'horse',
  'hotel',
  'house',
  'human',
  'ideal',
  'image',
  'index',
  'inner',
  'input',
  'issue',
  'jimmy',
  'joint',
  'jones',
  'judge',
  'known',
  'label',
  'large',
  'laser',
  'later',
  'laugh',
  'layer',
  'learn',
  'lease',
  'least',
  'leave',
  'legal',
  'level',
  'lewis',
  'light',
  'limit',
  'links',
  'lives',
  'local',
  'logic',
  'loose',
  'lower',
  'lucky',
  'lunch',
  'lying',
  'magic',
  'major',
  'maker',
  'march',
  'maria',
  'match',
  'maybe',
  'mayor',
  'meant',
  'media',
  'metal',
  'might',
  'minor',
  'minus',
  'mixed',
  'model',
  'money',
  'month',
  'moral',
  'motor',
  'mount',
  'mouse',
  'mouth',
  'movie',
  'music',
  'needs',
  'never',
  'newly',
  'night',
  'noise',
  'north',
  'noted',
  'novel',
  'nurse',
  'occur',
  'ocean',
  'offer',
  'often',
  'order',
  'other',
  'ought',
  'paint',
  'panel',
  'paper',
  'party',
  'peace',
  'peter',
  'phase',
  'phone',
  'photo',
  'piece',
  'pilot',
  'pitch',
  'place',
  'plain',
  'plane',
  'plant',
  'plate',
  'point',
  'pound',
  'power',
  'press',
  'price',
  'pride',
  'prime',
  'print',
  'prior',
  'prize',
  'proof',
  'proud',
  'prove',
  'queen',
  'quick',
  'quiet',
  'quite',
  'radio',
  'raise',
  'range',
  'rapid',
  'ratio',
  'reach',
  'ready',
  'refer',
  'right',
  'rival',
  'river',
  'robin',
  'roger',
  'roman',
  'rough',
  'round',
  'route',
  'royal',
  'rural',
  'scale',
  'scene',
  'scope',
  'score',
  'sense',
  'serve',
  'seven',
  'shall',
  'shape',
  'share',
  'sharp',
  'sheet',
  'shelf',
  'shell',
  'shift',
  'shirt',
  'shock',
  'shoot',
  'short',
  'shown',
  'sight',
  'since',
  'sixth',
  'sixty',
  'sized',
  'skill',
  'sleep',
  'slide',
  'small',
  'smart',
  'smile',
  'smith',
  'smoke',
  'solid',
  'solve',
  'sorry',
  'sound',
  'south',
  'space',
  'spare',
  'speak',
  'speed',
  'spend',
  'spent',
  'split',
  'spoke',
  'sport',
  'staff',
  'stage',
  'stake',
  'stand',
  'start',
  'state',
  'steam',
  'steel',
  'stick',
  'still',
  'stock',
  'stone',
  'stood',
  'store',
  'storm',
  'story',
  'strip',
  'stuck',
  'study',
  'stuff',
  'style',
  'sugar',
  'suite',
  'super',
  'sweet',
  'table',
  'taken',
  'taste',
  'taxes',
  'teach',
  'teeth',
  'terry',
  'texas',
  'thank',
  'theft',
  'their',
  'theme',
  'there',
  'these',
  'thick',
  'thing',
  'think',
  'third',
  'those',
  'three',
  'threw',
  'throw',
  'tight',
  'times',
  'tired',
  'title',
  'today',
  'topic',
  'total',
  'touch',
  'tough',
  'tower',
  'track',
  'trade',
  'train',
  'treat',
  'trend',
  'trial',
  'tried',
  'tries',
  'truck',
  'truly',
  'trust',
  'truth',
  'twice',
  'under',
  'undue',
  'union',
  'unity',
  'until',
  'upper',
  'upset',
  'urban',
  'usage',
  'usual',
  'valid',
  'value',
  'video',
  'virus',
  'visit',
  'vital',
  'voice',
  'waste',
  'watch',
  'water',
  'wheel',
  'where',
  'which',
  'while',
  'white',
  'whole',
  'whose',
  'woman',
  'women',
  'world',
  'worry',
  'worse',
  'worst',
  'worth',
  'would',
  'wound',
  'write',
  'wrong',
  'wrote', 'yield', 'young', 'youth'];

firebase.initializeApp(firebaseConfig);



const state = {
  secret: dictionary[Math.floor(Math.random() * dictionary.length)],
  grid: Array(6)
    .fill()
    .map(() => Array(5).fill('')),
  currentRow: 0,
  currentCol: 0,
};

function drawGrid(container) {
  const grid = document.createElement('div');
  grid.className = 'grid';

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      drawBox(grid, i, j);
    }
  }

  container.appendChild(grid);
}

function updateGrid() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);
      box.textContent = state.grid[i][j];
    }
  }
}

function drawBox(container, row, col, letter = '') {
  const box = document.createElement('div');
  box.className = 'box';
  box.textContent = letter;
  box.id = `box${row}${col}`;

  container.appendChild(box);
  return box;
}

function registerKeyboardEvents() {
  document.body.onkeydown = (e) => {
    const key = e.key;
    if (key === 'Enter') {
      if (state.currentCol === 5) {
        const word = getCurrentWord();
        if (isWordValid(word)) {
          revealWord(word);
          state.currentRow++;
          state.currentCol = 0;
        } else {
          alert('Invalid word.');
        }
      }
    }
    if (key === 'Backspace') {
      removeLetter();
    }
    if (isLetter(key)) {
      addLetter(key);
    }

    updateGrid();
  };
}

function getCurrentWord() {
  return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

function isWordValid(word) {
  return dictionary.includes(word);
}

function getNumOfOccurrencesInWord(word, letter) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      result++;
    }
  }
  return result;
}

function getPositionOfOccurrence(word, letter, position) {
  let result = 0;
  for (let i = 0; i <= position; i++) {
    if (word[i] === letter) {
      result++;
    }
  }
  return result;
}

function revealWord(guess) {
  const row = state.currentRow;
  const animation_duration = 500; 

  for (let i = 0; i < 5; i++) {
    const box = document.getElementById(`box${row}${i}`);
    const letter = box.textContent;
    const numOfOccurrencesSecret = getNumOfOccurrencesInWord(
      state.secret,
      letter
    );
    const numOfOccurrencesGuess = getNumOfOccurrencesInWord(guess, letter);
    const letterPosition = getPositionOfOccurrence(guess, letter, i);

    setTimeout(() => {
      if (
        numOfOccurrencesGuess > numOfOccurrencesSecret &&
        letterPosition > numOfOccurrencesSecret
      ) {
        box.classList.add('empty');
      } else {
        if (letter === state.secret[i]) {
          box.classList.add('correct');
        } else if (state.secret.includes(letter)) {
          box.classList.add('close');
        } else {
          box.classList.add('empty');
        }
      }
    }, ((i + 1) * animation_duration) / 2);

    box.classList.add('animated');
    box.style.animationDelay = `${(i * animation_duration) / 3}ms`;
  }

  const isWinner = state.secret === guess;
  const isGameOver = state.currentRow === 5;

  setTimeout(() => {
    if (isWinner) {
      alert('Congratulations!');
    } else if (isGameOver) {
      alert(`Good try! The word was ${state.secret}.`);
    }
  }, 3 * animation_duration);
}

function isLetter(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
  if (state.currentCol === 5) return;
  state.grid[state.currentRow][state.currentCol] = letter;
  state.currentCol++;
}

function removeLetter() {
  if (state.currentCol === 0) return;
  state.grid[state.currentRow][state.currentCol - 1] = '';
  state.currentCol--;
}

function startup() {
  const game = document.getElementById('game');
  drawGrid(game);

  registerKeyboardEvents();

  console.log(state.secret);
}

startup();

