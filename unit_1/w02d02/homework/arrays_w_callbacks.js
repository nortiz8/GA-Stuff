const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog'
];

// The first question is for the numbers array. The second question is for the words array.
// You don't have to write an answer to the thought questions.

// Every
// determine if every number is greater than or equal to 0
const moreThanZero = num => {
  return num >= 0;
};
console.log(nums.every(moreThanZero()));
// determine if every word is shorter than 8 characters
// Filter
// filter the array for numbers less than 4
// filter words that have an even length
// Find
// Find the first value divisible by 5
// find the first word that is longer than 5 characters
// Find Index
// find the index of the first number that is divisible by 3
// find the index of the first word that is less than 2 characters long
// For Each
// console.log each value of the nums array multiplied by 3
// console.log each word with an exclamation point at the end of it
// Thought Questions

// What happened to the original array?
// Can you store the values from a forEach method in a new array?
// Map
// make a new array of each number multiplied by 100
// make a new array of all the words in all uppercase
// Thought Questions

// What happened to the original array?
// Can you store the values from a map method in a new array?
// Some
// Find out if some numbers are divisible by 7
// Find out if some words have the letter a in them
