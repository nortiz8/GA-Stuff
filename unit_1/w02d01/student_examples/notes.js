// const foo = {
//   someArray: [1, 2, 3]
// };
// const someArray = foo.someArray;
// for (let element of someArray) {
//   console.log(element);
// }
// //Does the same thing as
// for (let i = 0; i < foo.someArray.length; i++) {
//   console.log(foo.someArray[i]);
// }

// Loop over array in an aray
// const foo = [
//   ['0,0', '0,1', '0,2'],
//   ['1,0', '1,1', '1,2'],
//   ['2,0', '2,1', '2,2']
// ];
// for (let row of foo) {
//   console.log(`This is index ${foo.indexOf(row)}`);
//   for (let element of row) {
//     console.log(element);
//   }
// }
//Same thing as
// for (let i = 0; i < foo.length; i++) {
//   for (let j = 0; j < foo[i].length; j++) console.log(foo[i][j]);
// }

// const myObject = {
//   name: 'skynet',
//   students: '19',
//   Leo: 'awesome'
// };
// const foo = () => {
//   return {
//     myObject
//   };
// };
// console.log(foo().myObject.name);

//function that returns an array
// const foo = () => {
//   return ['apple', 'banana', 'mango'];
// };
// console.log(foo()[2]);

//function that returns and object with array inside
// const foo = () => {
//   return {
//     someArray: ['fun', 'awesome', 'sweet']
//   };
// };

// console.log(foo().someArray[1]);

//function that has an object that has an object
// const foo = () => {
//   return {
//     someObject: {
//       someProperty: 'some value'
//     }
//   };
// };

// console.log(foo().someObject.someProperty);

//function that returns and object that has a method
// const foo = () => {
//   return {
//     someMethod: () => {
//       console.log('oh hai');
//     }
//   };
// };
// foo().someMethod();

//Function that returns anonymous function
// const foo = () => {
//   return () => {
//     console.log('Anonymous');
//   };
// };
// foo()();

//
// const foo = {
//   someMethod: () => {
//     return {
//       someArray: ['peach', 'apple', 'pear']
//     };
//   }
// };

// foo.someMethod().someArray[2];

//object with a method with a method
// const foo = {
//   someMethod: () => {
//     return {
//       someMethod: () => {
//         console.log('both methods are being called');
//       }
//     };
//   }
// };
// foo.someMethod().someMethod();

//object that has a method that retuns a function
// const foo = {
//   someMethod: () => {
//     return () => {
//       console.log('hi');
//     };
//   }
// };
// foo.someMethod()();

//array that has a function that returns an object
// const foo = [
//   1,
//   'apple',
//   () => {
//     return {
//       someProperty: 'some value'
//     };
//   }
// ];

// console.log(foo[2]().someProperty);

//array that has a function that returns an object that has an array
// const leo = [
//   1,
//   'apple',
//   () => {
//     return {
//       someArray: ['cat', 'dog', 'baboon']
//     };
//   }
// ];
// console.log(leo[2]().someArray[2]);

//array that has a function that returns an object that has an object
// const deva = [
//   1,
//   'apple',
//   () => {
//     return {
//       someObject: {
//         someProperty: 'some value'
//       }
//     };
//   }
// ];
// console.log(deva[2]().someObject.someProperty);

//array that has a function that returns an object that has a method
// const deva = [
//   1,
//   'apple',
//   () => {
//     return {
//       someMethod: () => {
//         console.log('fun');
//       }
//     };
//   }
// ];
// deva[2]().someMethod();

//array that has a function that returns a function
const deva = [
  1,
  'apple',
  () => {
    return () => {
      console.log('I just want to go to lunch!');
    };
  }
];
deva[2]()();
