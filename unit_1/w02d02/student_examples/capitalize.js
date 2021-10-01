// const capitalize = (input) => {
//     let uppercase = [];
//     let lowercase = [];
//     uppercase = input[0].toUpperCase;
//     for(let i = 1; i < input.length, i++) {
//         lowercase[i] = input[i].toLowerCase();
//     }
//     console.log(uppercase + lowercase)
// }
// capitalize('somdf')
// const capital = word => {
//   word = word.split(``);
//   word[0].toUpperCase();
//   return word;
// };
// console.log(capital('wORD'));

const capitalize = input => {
  const firstLetter = input.slice(0, 1).toUpperCase();
  const restOfTheString = input.slice(1).toLowerCase();
  return console.log(firstLetter + restOfTheString);
};
capitalize(`someTHING`);
