const inventory = {
  money: 0,
  currentTool: 'teeth'
};
let winCon = false;
const cutGrassTeeth = () => {
  inventory.money += 1;
  alert(`You chewed that grass real good and earned $1!`);
  if (inventory.money >= 5) {
    const choice = prompt(
      `You have $${
        inventory.money
      } dollars! Exactly enough to buy these rusty scissors at a tag sale. Want to buy them?`,
      `yes /no`
    );
    if (choice.toLowerCase() === 'yes') {
      inventory.currentTool = `scissors`;
      inventory.money -= 5;
      alert(`Congrats on your purchase! You can cut a lot more now!`);
    } else if (choice.toLowerCase() !== `yes`) {
      alert(`okay then, keep on chewing`);
      makeChoice();
    }
  }
  makeChoice();
};
const cutGrassScissors = () => {
  inventory.money += 5;
  alert(`Snip snip! Grass was clipped and you earned $5!`);
  if (inventory.money >= 25) {
    const choice = prompt(
      `You have $${
        inventory.money
      } dollars! A customer offered to sell his old push-mower to you for $25. What a steal! Are you gonna buy it?`,
      `yes/no`
    );
    if (choice.toLowerCase() === `yes`) {
      inventory.currentTool = `push mower`;
      inventory.money -= 25;
      alert(
        `Wow, this works better than expected, and its not even that rusty! Imagine all the lawns you could mow with this.`
      );
    } else if (choice.toLowerCase() !== `yes`) {
      alert(`you're right, these scissors work great!`);
    }
  }
  makeChoice();
};
const cutGrassPushMower = () => {
  inventory.money += 50;
  alert(
    `The grass has no chance against you now! You pushed all day and you earned $50!`
  );
  if (inventory.money >= 250) {
    const choice = prompt(
      `You have $${
        inventory.money
      } dollars! Amazon has a sale on a battery-powered mower for $250, and it has a 4.3 star rating! Seems like a must buy, what do you think?`,
      `yes/no`
    );
    if (choice.toLowerCase() === `yes`) {
      inventory.currentTool = `battery mower`;
      inventory.money -= 250;
      alert(`The battery charge lasts all day! Gonna mow SO MANY LAWNS`);
    } else if (choice.toLowerCase() !== `yes`) {
      alert(`yeah, the exercise is nice`);
    }
  }
  makeChoice();
};
const cutGrassBatteryMower = () => {
  inventory.money += 100;
  alert(
    `Grass VS electric mower. It isn't pretty for the grass. You earned $100!`
  );
  if (inventory.money >= 500) {
    const choice = prompt(
      `You have $${
        inventory.money
      } dollars! You find a craigslist add for a team of starving students, willing to do near anything for $500. Want to hire them?`,
      `yes/no`
    );
    if (choice.toLowerCase() === `yes`) {
      inventory.currentTool = `students`;
      inventory.money -= 500;
      alert(`More people, more lawn! Hopefully they're hard workers.`);
    } else if (choice.toLowerCase() === `no`) {
      alert(`Can't trust students to do work as well as you, understandable.`);
    }
  }
  makeChoice();
};
const cutGrassStudents = () => {
  inventory.money += 250;
  alert(
    `Labor laws? Who needs em! The kids work all day. You sit back and make $250 in profit!`
  );
  makeChoice();
};
const start = () => {
  alert(
    `So you want to start mowing lawns? With ${
      inventory.money
    } dollars? Better get to chewing!`
  );
  const first = prompt(`I guess I'll use my teeth?`, `teeth`);
  if (first.toLowerCase() === `teeth`) {
    cutGrassTeeth();
  } else {
    alert(`That's not a tool you own!`);
    start();
  }
};
const makeChoice = () => {
  checkWin();
  if (winCon === true) {
    return;
  }
  alert(`You have $${inventory.money} dollars. What do you want to do?`);
  const choice = prompt(
    `Gonna cut some more grass? Whatcha gonna use?`,
    `${inventory.currentTool}`
  );
  if (choice.toLowerCase() === 'teeth') {
    cutGrassTeeth();
    makeChoice();
  } else if (choice.toLowerCase() === `scissors`) {
    cutGrassScissors();
    makeChoice();
  } else if (choice.toLowerCase() === `push mower`) {
    cutGrassPushMower();
    makeChoice();
  } else if (choice.toLowerCase() === 'battery mower') {
    cutGrassBatteryMower();
    makeChoice();
  } else if (choice.toLowerCase() === `students`) {
    cutGrassStudents();
    makeChoice();
  } else {
    alert(`That's not a tool you own!`);
    makeChoice();
  }
};

const checkWin = () => {
  if (inventory.currentTool === 'students' && inventory.money >= 1000) {
    alert(
      `The money is just making itself! Congrats on living the capitalist dream! Enjoy retirement.`
    );
    return (winCon = true);
  }
};
start();
