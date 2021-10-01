/*
Conceptual
1. use "=" to assign
2. change by declaring it again (a = 5)
3. assign it to a different variable (a = b)
*/

// //Let's get mathy
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16
// // Round a down
// console.log(Math.floor(a));
// // Round b up
// console.log(Math.ceil(b));
// // Find the absolute value of b - a
// console.log(Math.abs(b - a));
// // Find the largest number of a, b, c, d, e
// console.log(Math.max(a, b, c, d, e));
// // Find the smallest number of a, b, c, d, e
// console.log(Math.min(a, b, c, d, e));
// // Find the square root of e
// console.log(Math.sqrt(e));
// // Raise e to the power of d
// console.log(Math.pow(e, d));
// // Make a digital die 0 generate a random number between 1 - 6
// console.log(Math.ceil(Math.random() * 6));

//Switcharoo
// Create a variable called firstVariable.
// assign it the value of a string: "Hello World"
// On the next line, change the value of this variable to a number.
// store the value of firstVariable into a new variable called secondVariable
// On the next line, change the value of secondVariable to a string.
// What is the value of firstVariable?

// let firstVariable = "Hello World";
// firstVariable = 8;
// let secondVariable = firstVariable;
// secondVariable = "hey";
// //value of firstVariable is 8

//Combine it
// Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated

// let yourName = "Nick Ortiz"
// console.log(`Hello, my name is ${yourName}`);

// //Booleans
// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// // a _ b;
// console.log(a < b);
// // c _ d;
// console.log(c < d);
// // 'Peanut' _ 'Peanut';
// 'Peanut' === 'Peanut';
// // a _ b _ c;
// console.log(a != b > c);
// // a _ a _ d;
// console.log(a === a != d)
// // e _ 'Jelly Bean';
// e === 'Jelly Bean'
// // 48 _ '48';
// 48 == '48'
// // 'e' _ 'Eh'
// 'e' != 'Eh'


//The Farm
//let animal = 'dog';

// if (animal === 'cow') {
//     console.log("Moooooooo");
// } else {
//     console.log("Hey! You're not a cow!");
// }

//Driver's Ed

// let age = 16;
// if (age >= 16) {
//     console.log("Here are the keys");
// } else {
//     console.log("Sorry, you're too young to drive");
// }

//Just loop it

// for (i = 0; i<= 10; i++) {
//     console.log(i);
// };

// for (i =500; i >= 50; i--) {
//     console.log(i);
// }

//Let's get odd

// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(`${i} is an odd number`);
//     };
// };

//Give me five
// for (i = 0; i <= 100; i++) {
//     if (i === 0) {
//     } else if (i % 5 === 0) {
//         console.log(`I found a ${i}. High five!`);
//     } else if (i % 3 === 0) {
//         console.log(`I found a ${i}. Three is a crowd`);
//     };
// };


//Savings account
// let bankAccount = 0;

// for (i = 1; i <= 10; i++) {
//     bankAccount += i;
//     console.log(bankAccount);
// }

// for (i = 1; i <= 100; i++) {
//     bankAccount += i * 2;
//     console.log(bankAccount);
// }


//Fibonacci
let a = 0;
let b = 1;
let current = 1;
let sum = 0;

for (i = 0; i <= 31; i++) {
    current = a + b;
    a = b;
    b = current;
    console.log(current);
    if (current % 2 === 0) {
        sum += current;
        console.log(`The sum of even values of the Fibonacci sequence is: ${sum}`);
    }
}



//Checkerboard
// const boardSize = 15;

// for (i = 1; i <= (boardSize/2); i++) {
//     if (i % 2 === 0) {
//         console.log((" #").repeat(boardSize/2));
//     } else {
//         console.log(("# ".repeat(boardSize/2)));
//     }
// }