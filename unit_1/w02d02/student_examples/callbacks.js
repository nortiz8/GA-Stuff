// const printGreeting = () => {
//   console.log('Hello, there!');
// };

// setTimeout(printGreeting, 4000);

// const socky = () => {
//   console.log('I will happily iron your socks!');
// };
// const foodie = () => {
//   console.log('I will sort your M&Ms so that you never encounter a green one!');
// };
// const pr = () => {
//   console.log('I will make sure everyone knows you are the best boss ever');
// };
// const boss = employee => {
//   console.log('I am the boss and you will do as I say!');
//   employee();
// };
// boss(socky);
// boss(foodie);
// boss(pr);
// //Can do as an anonymous function, but not prefered way
// boss(() => {
//   console.log(
//     "I'll still hand grind your coffee beans even though you never remember my name"
//   );
// });

// // Write a handleWords function that will run the capitalize function or excitedwords function as a parameter on each word in the string
// const capitalize = word => {
//   return word[0].toUpperCase() + word.substring(1);
// };
// const excitedWords = word => {
//   return word + '!';
// };

// const handleWords = (string, modifier) => {
//   let modifiedString = '';
//   let seperateString = string.split(` `);
//   for (i = 0; i < seperateString.length; i++) {
//     modifiedString += modifier(seperateString[i]) + ' ';
//   }
//   return modifiedString;
// };

// console.log(handleWords('i am so excited', excitedWords));
// console.log(handleWords('this is a fallout boy song title', capitalize));
// console.log(
//   handleWords(handleWords('this is a string', capitalize), excitedWords)
// );

// //For each - dont need to write a for loop - forEach calls a provided callback function once for each element in an array, in order.
// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];
// iceCreams.forEach(flavor => {
//   console.log(flavor);
// });
// const logItem = item => {
//   console.log(item);
// };
// iceCreams.forEach(logItem);

// forEach doesnt modify the original function
// use .map instead!
// const arr = [2, 4, 6, 8, 10];

// const doubleArray = arr.map(num => {
//   return num * 2;
// });

// console.log(doubleArray);

//Write out methods as a loop themselves
const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
//every checks to see if values in the array are the same/higher/lower than a given value. can do "strings" === or num <=>
const every = (arr, thisValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < thisValue) {
      return false;
    }
  }
};
//Filter is similar to every, but pushes all values that pass the test into a new array
const filter = (arr, thisValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < thisValue) {
      return false;
    } else newArray.push(arr[i]);
  }
};
//Find returns the first value in an array that passes some test (higher number, ===, lower, etc.)
const find = (arr, thisValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === thisValue) return arr[i];
  }
};
//FindIndex returns the index of the array where the value that passes the test is

//Some checks if any of the values in the array passes a function (>, )
