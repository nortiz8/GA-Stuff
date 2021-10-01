// This function returns the largest number in a given array.

const findMax = (arr, index = 0, maxNum = 0) => {
  if (index === arr.length) {
    return maxNum;
  }
  if (maxNum < arr[index]) {
    maxNum = arr[index];
  }
  return findMax(arr, index + 1, maxNum);
};
const testArray = [2, 3, 5, 7, 23, 2, 29, 8];
console.log(findMax(testArray));

// This function returns the factorial of a given number.
const factorial = (maxNum, sum = maxNum) => {
  if (maxNum <= 1) {
    return sum;
  }
  sum *= maxNum - 1;
  return factorial(maxNum - 1, sum);
};
console.log(factorial(5));

// This function returns the Nth number in the fibonacci sequence.
// https://en.wikipedia.org/wiki/Fibonacci_number
// For this function, the first two fibonacci numbers are 1 and 1

const fibonacci = (numInFib, currentNum = 1, prevNum = 1, count = 3) => {
  if (numInFib === 1 || numInFib === 2) {
    return 1;
  }
  if (numInFib === count) {
    return currentNum + prevNum;
  }
  return fibonacci(numInFib, currentNum + prevNum, currentNum, count + 1);
};

console.log(fibonacci(1));

const coinFlips = (flip, count = 0, arr = []) => {
  if (count === flip) {
    return arr;
  }

  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
};

function letterCombinations() {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}
