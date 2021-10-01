// console.log('hey this works');

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = [
      `i'm fresher than day old pizza`,
      `you can't count my calories`
    ];
  }
  talkSass() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
  announceHealth() {
    console.log(`${this.name}'s health is at ${this.health}`);
  }
  fight(enemy) {
    console.log(`I'm ready to rumble`);
    console.log(`i'm gonna hit you with the Sugar Shock!`);
    enemy.health -= this.weapons.sugarShock;
    console.log(`${enemy.name} is now at ${enemy.health} hit points!`);
  }
}
const dougie = new Hero('Dougie the Donut');

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = [
      `i'm youtube famous`,
      `i'm more dangerous than an uncovered sewer`
    ];
  }
  talkSmack() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
  announceHealth() {
    console.log(`${this.name}'s health is at ${this.health}`);
  }
  fight(enemy) {
    console.log(`i'm gonna flatten you like a slice of pepperoni`);
    console.log(`i'm gonna hit you with my Pepperoni Stars!`);
    enemy.health -= this.weapons.pepperoniStars;
    console.log(`${enemy.name} is now at ${enemy.health} hit points!`);
  }
}
const rat = new Enemy('Pizza Rat');
dougie.talkSass();
rat.talkSmack();
dougie.announceHealth();
rat.announceHealth();

rat.fight(dougie);
dougie.fight(rat);
rat.announceHealth();
dougie.announceHealth();
