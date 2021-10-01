// const returnName = () => {
//   return 'Mark';
// };

// const returnGreeting = () => {
//   return `oh hai, ${returnName()}`;
// };
// console.log(returnGreeting());

const checkSquare = num => {
  if (Math.sqrt(num) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(checkSquare(16));
const checkToLimit = limit => {
  for (let i = 0; i <= limit; i++) {
    console.log(checkSquare(i));
  }
};
checkToLimit(100);
