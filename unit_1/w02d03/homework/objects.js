class Hamster {
  constructor(owner = '', name) {
    this.owner = owner;
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log(`squeek squeek`);
  }
  eatFood() {
    console.log(`nibble nibble`);
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name = '', age = 0, height = 0, weight = 0) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hi! I'm ${this.name}, nice you meet you!`);
  }
  eat() {
    this.weight += 1;
    this.mood += 1;
  }
  exercise() {
    this.weight -= 1;
  }
  ageUp() {
    this.age += 1;
    this.height += 1;
    this.weight += 1;
    this.mood -= 1;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}
// const hammy = new Hamster('dad', 'hammy');
// const me = new Person('Nick', 27, 70, 200);

// me.ageUp();
// me.ageUp();
// me.buyHamster(hammy);
// console.log(me);

const timmy = new Person('Timmy', 0, 0, 0);
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
const gus = new Hamster('Timmy', 'Gus');
timmy.buyHamster(gus);
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.eat();
timmy.eat();
timmy.exercise();
timmy.exercise();
console.log(timmy);
