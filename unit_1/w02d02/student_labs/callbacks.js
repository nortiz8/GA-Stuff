// const hello = func => {
//   func();
// };
// const hi = () => {
//   console.log('hi');
// };
// hello(hi);

// //it will log hi
// const foo = (param, param2) => {
//   param(param2);
// };

// const bar = param => {
//   console.log(param);
// };

// foo(bar, 'hi');

// //it will log hello
// const foo = (param, param2) => {
//   param(param2, 'hello');
// };

// const bar = (param, param2) => {
//   console.log(param2);
// };

// foo(bar, 'hi');

// const baz = param => {
//   console.log(param.toUpperCase());
// };
// //itll return HELLO
// foo(baz, 'hello');

// //Electric mixer
// const electricMixer = attachment => {
//   console.log(`The mixer is now: ` + attachment());
// };

// const spiralizer = () => {
//   return 'spiralizing';
// };
// electricMixer(spiralizer);

// const hyperMixer = () => {
//   return 'mixing at H Y P E R    S P E E D';
// };
// electricMixer(hyperMixer);

// //setInterval and setTimeout
// setTimeout(() => {
//   console.log('hi');
// }, 2000);

// setInterval(() => {
//   console.log('hi');
// }, 1000);

// clearInterval;

// // R E P   M A S T E R
// const wordReverse = word => {
//   return word
//     .split(` `)
//     .reverse()
//     .join(' ');
// };
// // console.log(wordReverse('hello there whats this'));
// const toUpperCase = word => {
//   return word.toUpperCase();
// };
// // console.log(toUpperCase('will this work'));
// const repMaster = (sentence, modifier) => {
//   return console.log(modifier(sentence) + ' proves that I am the rep MASTER!');
// };
// repMaster('never give your heart to a blockhead', wordReverse);
// repMaster('I finished this practice', toUpperCase);
