// console.log('working');
class AlienShip {
  constructor() {
    (this.hull = Math.floor(Math.random() * 4) + 3),
      (this.firepower = Math.floor(Math.random() * 3) + 2),
      (this.accuracy = Math.random() * (0.8 - 0.6) + 0.6);
  }
  attack(enemy) {
    if (this.accuracy > Math.random()) {
      enemy.hull -= this.firepower;
      console.log(`The aliens hit you! your hull is at ${enemy.hull}`);
    } else {
      console.log(`You dodged their lasers`);
    }
  }
}
class HeroShip {
  constructor() {
    (this.hull = 20), (this.firepower = 5), (this.accuracy = 0.7);
  }
  attack(enemy) {
    if (this.accuracy > Math.random()) {
      enemy.hull -= this.firepower;
      console.log(`Your lasers hit! Their hull is at ${enemy.hull}`);
    } else {
      console.log(`The lasers missed!`);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////
// const shipOne = new AlienShip();
// const shipTwo = new AlienShip();
// const shipThree = new AlienShip();
// const shipFour = new AlienShip();
// const shipFive = new AlienShip();
// const shipSix = new AlienShip();
const alienShips = [];
for (let i = 0; i < Math.floor(Math.random() * 3) + 6; i++) {
  alienShips[i] = new AlienShip();
}
const player = new HeroShip();
// console.log(shipOne);
// console.log(player);

////////////////////////////////////////////////////////////////////////////////////////

////// This mostly works, I get an error on winning where it keeps trying to run and I can't find where I'm letting that happen
const start = () => {
  const input = prompt(
    `Welcome aboard the USS Schwarenegger, Captain! All hands on deck. There are ${
      alienShips.length
    } alien ships on approach, are we ready for action?`,
    `battle`
  );
  if (input.toLowerCase() === 'battle') {
    battle();
  }
};

const battle = () => {
  while (player.hull > 0 && alienShips[0].hull > 0) {
    player.attack(alienShips[0]);
    if (alienShips[0].hull > 0) {
      alienShips[0].attack(player);
    }
    let lose = false;
    let win = false;
    checkLose();
    if (lose === true) {
      break;
    } else {
      checkKill();
      if (win === true) {
        break;
      }
    }
  }
};
const checkLose = () => {
  if (player.hull <= 0) {
    alert("Earth's last hope has ben defeated. You have doomed us all...");
    return (lose = true);
  }
};
const checkKill = () => {
  if (alienShips[0].hull <= 0) {
    alienShips.shift();
    console.log(`There are ${alienShips.length} ships left`);
    if (alienShips.length === 0) {
      alert('Congrats! You saved the planet!');
      return (win = true);
    } else {
      askForAction();
    }
  }
};
const askForAction = () => {
  const input = prompt(
    'Alien ship destroyed! Do you want to attack the next or retreat?',
    'attack'
  );
  if (input.toLowerCase() === 'attack') {
    battle();
  } else {
    alert('take a quick break, but get back out there!');
  }
};

// start();

////////////////
/////
///This works perfectly and will fully run the game on opening it. However, I know it isn't the prettiest code to read and kinda hard to follow. I used this as a basis to write out the functions above, but missed something somewhere because of the small errors I was getting.
// while (player.hull > 0 && alienShips[0].hull > 0) {
//   player.attack(alienShips[0]);
//   if (alienShips[0].hull > 0) {
//     alienShips[0].attack(player);
//   }
//   if (player.hull <= 0) {
//     alert("Earth's last hope has ben defeated. You have doomed us all...");
//     break;
//   } else if (alienShips[0].hull <= 0) {
//     alienShips.shift();
//     console.log(alienShips.length);

//     if (alienShips.length === 0) {
//       alert('Congrats! You saved the planet!');
//       break;
//     } else {
//       const input = prompt(
//         'Alien ship destroyed! Do you want to attack the next or retreat?',
//         'attack'
//       );
//       if (input.toLowerCase() === 'attack') {
//       } else if (input.toLowerCase() === 'retreat') {
//         alert('ok bye');
//         break;
//       }
//     }
//   }
// }

// start();

////////////////////////////////////////////
///// old code that semi-works, but was our first attempts. When it wasn't working as intended we would copy/paste what was good and figure out the best way to get it to do what we needed
// for (i = 0; i < alienShips.length; i)
//   while (player.hull > 0 && alienShips[i].hull > 0) {
//     player.attack(alienShips[i]);
//     if (alienShips[i].hull > 0) {
//       alienShips[i].attack(player);
//     } else if (alienShips[i].hull <= 0) {
//       const input = prompt(
//         'Alien ship destroyed! Do you want to attack the next or retreat?',
//         'attack/retreat'
//       );
//       if (input.toLowerCase() === 'attack') {
//         i++;
//       } else if (input.toLowerCase() === 'retreat') {
//         alert('ok bye');
//         break;
//       }
//     }
//   }

// const fight = (player, enemy) => {
//   while (player.hull > 0 && enemy.hull > 0) {
//     player.attack(enemy);
//     if (enemy.hull > 0) {
//       enemy.attack(player);
//     } else if (enemy.hull <= 0) {
//       alienShips.shift();
//       const input = prompt(
//         'Alien ship destroyed! Do you want to attack the next or retreat?',
//         'attack/retreat'
//       );
//       if (input.toLowerCase() === 'attack') {
//         fight(player, enemy);
//       } else if (input.toLowerCase() === 'retreat') {
//         alert('ok bye');
//       }
//     }
//   }
// };
// fight(player, alienShips[0]);
