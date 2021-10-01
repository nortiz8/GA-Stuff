const factorial = (maxNum, sum = maxNum) => {
  if (maxNum <= 1) {
    return sum;
  }
  sum *= maxNum - 1;
  return factorial(maxNum - 1, sum);
};
console.log(factorial(6));

const countStep = steps => {};
