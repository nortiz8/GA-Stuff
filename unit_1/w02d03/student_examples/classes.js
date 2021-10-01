// class Person {
//   constructor() {
//     this.legs = 2;
//     this.arms = 2;
//     this.eyes = 'blue';
//     this.hair = 'blonde';
//   }
//   greet(otherPerson) {
//     console.log('hi ' + otherPerson + '!');
//   }
//   walk() {
//     console.log('I hate when my segway is in the shop');
//   }
// }

// const me = new Person();
// const you = new Person();
// // console.log(me);
// // console.log(you);
// // console.log(typeof me);
// // console.log(typeof you);
// // me.greet('you');
// // you.greet('me');
// console.log(me);

class Person {
  constructor(name, age, eyes, hair, lovesCats, lovesDogs = true) {
    //= sets default value
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats || true; //|| gives default value
    this.lovesDogs = lovesDogs;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
  setHair(hairColor) {
    this.hair = hairColor;
  }
}
// const me = new Person('Nick', 21, 'brown', 'brown', true, true);
// me.greet();
// console.log(me.hair);
// // me.setHair('green');
// me.hair = 'green';
// console.log(me.hair);
class Superhero extends Person {
  constructor(name, age, eyes, hair, cape) {
    super(name, age, eyes, hair);
    this.cape = cape;
  }
  fly() {
    console.log('Up up and away!');
  }
  greet() {
    console.log(`Greetings earthl- I mean hello I'm ${this.name}`);
  }
}

const superman = new Superhero('Clark Kent', 30, 'blue', 'black', true);
console.log(superman);

superman.fly();
superman.greet();
class Superchild extends Superhero {
  walk() {
    console.log('Forget walking I am going to run');
  }
}
const superBoy = new Superchild('Boy', 17, 'black', 'green');
superBoy.walk();
