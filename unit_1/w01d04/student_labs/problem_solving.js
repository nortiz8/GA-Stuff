// const printGreeting = (name) => {
//     return(`Hello there, ${name}!`)
// }
// console.log(printGreeting('Slimer'))

// const reverseWordOrder = (string) => {
//     return string.split(" ").reverse().join(" ");
// }

// const reverseWordOrderArr = (string) => {
//     newOrder = string.split(" ");
//     for (let i = 0; i < string.length; i++) {
//         newString = " " + newOrder[i]

//     } return newString;
// }e
// console.log(reverseWordOrder("Ishmael me call"));

// const calculate = (num1, num2, operation) => {
//   if (operation === 'add') {
//     return num1 + num2;
//   } else if (operation === 'sub') {
//     return num1 - num2;
//   } else if (operation === 'multi') {
//     return num1 * num2;
//   } else if (operation === 'div') {
//     return num1 / num2;
//   } else if (operation === 'exp') {
//     return Math.pow(num1, num2);
//   }
// };
// console.log(calculate(4, 3, 'exp'));

// const printConsecutives = array => {
//   for (i = 0; i <= array.length - 1; i++) {
//     if (array[i] + 1 === array[i + 1] && array[i + 1] + 1 === array[i + 2]) {
//       console.log(array[i], array[i + 1], array[i + 2]);
//     }
//   }
// };
// printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
// printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

const letterReverse = string => {
  return string
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
};
console.log(letterReverse("Aren't you a little short for a storm trooper?"));
