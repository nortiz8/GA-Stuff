// The difference between a paramter and an argument is that a parameter is what the function is looking for to use, the argument is what the user inputs to get a result
// The difference between a return and a console.log is that a console.log only prints to the console, the return will keep that value and is useable elsewhere

// Palindrome
const checkPalindrome = string => {
  string = string.toLowerCase();
  reverseString = string
    .split('')
    .reverse()
    .join('');
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
};
console.log(checkPalindrome('Poop'));

//Sum an array
// let sum = 0;
// const sumArray = arr => {
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

//Prime numbers
// const checkPrime = num => {
//   const sq = Math.sqrt(num);
//   prime = true;
//   for (i = 2; i <= sq; i++) {
//     if ((num / i) % 1 === 0) {
//       prime = false;
//     }
//   }
//   return prime;
// };
// // console.log(checkPrime(15));

// const printPrimes = limit => {
//   for (let i = 0; i <= limit; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// };
// printPrimes(97);

// //Rock Paper Scissors SHOOT!
// const moves = ['rock', 'paper', 'scissors'];
// const randomMove = () => {
//   return moves[Math.floor(Math.random() * moves.length)];
// };
// // console.log(randomMove());
// let computerMove = randomMove();
// let userMove = randomMove();

// const rockPaperScissor = (computerMove, userMove) => {
//   const draw = `Computer played ${computerMove}!  User played ${userMove}!  It's a draw!`;
//   const userWin = `Computer played ${computerMove}!  User played ${userMove}!  You win! :D`;
//   const compWin = `Computer played ${computerMove}!  User played ${userMove}!  You lose! :(`;
//   if (computerMove === userMove) {
//     console.log(draw);
//   } else if (computerMove === 'rock' && userMove === 'scissors') {
//     console.log(compWin);
//   } else if (computerMove === 'rock' && userMove === 'paper') {
//     console.log(userWin);
//   } else if (computerMove === 'paper' && userMove === 'scissors') {
//     console.log(userWin);
//   } else if (computerMove === 'paper' && userMove === 'rock') {
//     console.log(compWin);
//   } else if (computerMove === 'scissors' && userMove === 'paper') {
//     console.log(compWin);
//   } else if (computerMove === 'scissors' && userMove === 'rock') {
//     console.log(userWin);
//   }
// };

// rockPaperScissor(computerMove, userMove);
