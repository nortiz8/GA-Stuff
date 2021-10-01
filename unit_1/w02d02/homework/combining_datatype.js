// // Create an object that has a property that is an array. Log one of the elements of that array.
// const shorty = {
//   gotThem: ['apple bottom jeans', 'boots with the fur']
// };
// console.log(shorty.gotThem[1]);
// // Create an object that has a property that is an object. Log one of the properties of that inner object.
// const myDad = {
//   favoriteChild: 'Nick'
// };
// console.log(myDad.favoriteChild);
// // Create an array that has an object in it. Log one of the properties of that object.
// const things = [
//   {
//     nice: true
//   }
// ];
// console.log(things[0].nice);
// // Create an array that has an array as one of its elements. Log one of the elements of the inner array.
// const nums = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9]];
// console.log(nums[1][3]);

// // GOING DEEPER
// // Create a function that returns an object. Log a value of that object (hint: call the function and then call a property on the return value).
// const myCar = () => {
//   return {
//     seats: 'plaid'
//   };
// };
// console.log(myCar().seats);
// // Create a function that returns an object that has an array. Log one of the elements of that array.
// const myDad = () => {
//   return {
//     kids: ['Wesley', 'Nick']
//   };
// };
// console.log(myDad().kids[1]);
// // Create a function that returns a function. Call that inner function
// const hello = () => {
//   return () => {
//     console.log('its me');
//   };
// };
// hello()();

// //Vending machine
// const vendingMachine = {
//   snacks: [
//     { name: 'm&m', price: 1 },
//     { name: 'popcorn', price: 2 },
//     { name: 'starburst', price: 1.5 }
//   ],
//   vend: snackNum => {
//     console.log(vendingMachine.snacks[snackNum]);
//   }
// };
// vendingMachine.vend(2);

// // CALLBACKS
// const operateNums = (num, modifier) => {
//   return modifier(num);
// };
// const multByTwo = num => {
//   return num * 2;
// };
// const squareNum = num => {
//   return Math.pow(num, 2);
// };
// console.log(operateNums(5, multByTwo));
// console.log(operateNums(5, squareNum));

// //CLEANUP - just needed to move the functions before you call them
// const bar = () => {
//   console.log('bar here');
// };
// const foo = () => {
//   console.log('foo here');
// };
// bar();
// foo();

// foo();

// const foo ()=>{
//     console.log('hi');
// }
// //error is for not having an equal sign to initialize the function, then if you put one in its for calling the function before declaring it
