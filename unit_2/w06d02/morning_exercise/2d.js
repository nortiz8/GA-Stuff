// Loop the Loop: 2D Array Additon
// Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array

// Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.

const arr = [[10, 20, 30], [40, 50, 60], [70, -80, 90]];

const greatestSum = arr => {
  arr.forEach((row, index) => {
    console.log('Row', row, index);
  });
};

greatestSum(arr);
