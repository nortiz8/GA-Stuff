// class practice

class Hero {
  constructor() {
    (this.name = 'Superman'),
      (this.secretIdentity = 'Clark Kent'),
      (this.city = 'Metropolis');

    this.greeting = this.greeting.bind(this);
  }
  catchphrase() {
    console.log('Up, up and away!');
  }
  greeting() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// const superman = new Hero();
// console.log(a);
// superman.catchphrase();
// superman.greeting();

// const supermansCatchphrase = superman.catchphrase;
// const superamnsGreeting = superman.greeting;
// supermansCatchphrase();
// superamnsGreeting();

// expressions and statements
// const evens = [2, 4, 6, 8, 10];
// const odds = [1, 3, 5, 7, 9];

// const arr = [];
// evens.forEach(num => {
//   arr.push(num * 2);
// });

// console.log(evens);
// console.log(arr);

// const timesTwo = odds.map(num => {
//   return num * 2;
// });
// console.log(timesTwo);

// const birds = [
//   {
//     type: 'Vulture',
//     isCool: true
//   },
//   {
//     type: 'Eagle',
//     isCool: true
//   },
//   {
//     type: 'Pigeon',
//     isCool: false
//   },
//   {
//     type: 'Duck',
//     isCool: false
//   }
// ];
// const numbers = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20
// ];
// // Using an array of numbers 1 to 20, use the filter method to return numbers that are divisible by 2
// const divisibleByTwo = numbers.filter(num => {
//   return num % 2 === 0;
// });
// console.log(divisibleByTwo);

// // Using an array of numbers 1 to 20, use the filter method to return numbers that are divisible by 2 and 3
// const divisiblebyTwoAndThree = divisibleByTwo.filter(num => {
//   return num % 3 === 0;
// });
// console.log(divisiblebyTwoAndThree);

// // Using the array of birds below, use the filter method to return an array of birds that are cool
// const coolBirds = birds.filter(bird => {
//   return bird.isCool === true;
// });
// console.log(coolBirds);

// // Using the array of birds below, use the filter method to return an array without the duck
// const noDucks = birds.filter(bird => {
//   return bird.type != 'Duck';
// });
// console.log(noDucks);

// spread
// const dimensions = [10, 5, 2];
// const volume = (height, width, length) => {
//   return height * width * length;
// };

// console.log(volume(...dimensions));

// const arr1 = ['a', 'b', 'c', 'd'];

// const arr2 = [...arr1, 'e', 'f', 'g'];
// console.log(arr2);

// const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const arr3 = ['h', 'i', 'j', 'k'];

// const arr4 = [...arr2, ...arr3];
// console.log(arr4); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }

const bob = {
  id: 1,
  name: 'Bob',
  age: 43,
  profileUrl: 'http://api.co/users/1',
  location: 'DC'
};

const { name, age } = bob;

console.log(name);
// => "Bob"

console.log(age);
// => 43

// ES6
const greetUser = ({ name, location }) => {
  console.log('Hello ' + name + ", how's the weather in " + location);
};

greetUser(bob);
