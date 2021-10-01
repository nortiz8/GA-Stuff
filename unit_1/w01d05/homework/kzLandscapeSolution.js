// A test log to check if external JS file was linked correctly
console.log('John Connor?');

// Declare an object to keep track of my player's info
const player = {
  currentTool: null,
  bankAccount: null
};

// Use an array of objects to organize my tools' cost, and earnings
const hardwareStore = [
  { 
    name: 'Teeth', 
    cost: 0, 
    earns: 1 
  },
  {
    name: 'Rusty Scissors',
    cost: 5,
    earns: 5
  },
  {
    name: 'Old-Timey Push Lawnmower',
    cost: 25,
    earns: 50
  },
  {
    name: 'Battery-powered Lawn Mower',
    cost: 250,
    earns: 100
  },
  {
    name: 'Team of Starving Students',
    cost: 500,
    earns: 250
  }
];

// Declare a startGame function to ask for player's input
const startGame = () => {
  const userName = prompt('Hello, what is your name?');
  alert(`Hello ${userName}, let's begin.`)

  // initialize the player's info on start
  player.name = userName;
  player.currentTool = hardwareStore[0].name;
  player.bankAccount = 0;
  
  // use a function that will help us ask for a user's input
  promptForAction();
};

// Announce a player's info
const showStatus = () => {
  alert(`${player.name} has $${player.bankAccount}, current tool is: ${player.currentTool}`);
}

// This function takes care of asking if the player wants to cut grass or buy tools
const choices = () => {
  const userInput = prompt('Would you like to landscape (L) or buy tools (B)');

  if ((userInput.toLowerCase() === 'l') && (userInput.toLowerCase() !== '')) {
    cutGrass();
    promptForAction();
  } else if ((userInput.toLowerCase() === 'b') && (userInput.toLowerCase() !== '')) {
    buyTools();
    promptForAction();
  } else { 
    alert('Please enter a valid answer.');
    promptForAction();
  }
}

// My promptForAction takes care of checking win, announcing status, and prompt for action
const promptForAction = () => {
  // Keep prompting as long as player has not reached $1000
  while (!checkWin()) {
    showStatus();
    choices();
  }
}

/* My buyTools() checks if you have enough money for the next tool in the array.
 * My setup is to use an array of objects to help me organize my current tool and the upcoming ones.
 * When a player chooses to buy a new tool, it will take the current tool out and move the next one up.
 */
const buyTools = () => {
  // If player has enough cash to buy new tool, remove old tool with .shift()
  if (player.bankAccount >= hardwareStore[1].cost) {
    hardwareStore.shift();
    player.currentTool = hardwareStore[0].name;
    player.bankAccount -= hardwareStore[0].cost;
    console.log(`Current Tool: ${player.currentTool}`);
  } else {
    alert('You don\'t have enough funds yet. Keep landscaping to earn more money.');
    player.currentTool = hardwareStore[0].name;
  }
}

// This will help me keep track of incrementing my money when I cut grass
const cutGrass = () => {
  player.bankAccount += hardwareStore[0].earns;
  console.log(`Bank Account: $${player.bankAccount}`);
}

// Check if a player has won by their earnings
const checkWin = () => {
  let hasWon;
  if ((player.bankAccount >= 0) && (player.bankAccount < 1000)) {
    hasWon = false;
  } else {
    hasWon = true;
    alert('You Win!');
    const restartGame = prompt('Want to play again? (Y/N)');
    if ((restartGame.toLowerCase() === 'y') && (restartGame.toLowerCase() !== '')) {
      startGame();
    } else {
      alert('Thanks for playing!');
    }
  }
  return hasWon;
}
