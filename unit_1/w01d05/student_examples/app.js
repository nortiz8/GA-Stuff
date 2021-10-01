// console.log('app.js is runnig');
// alert('omgomgomgomgomg');
// const yourAnswer = prompt('Do you like apples?', 'Yes/No');
// if (yourAnswer.toLowerCase() === 'yes') {
//   console.log('Excellent!');
// } else if (yourAnswer.toLowerCase() === 'no') {
//   console.log('What? Apples are delicious');
// } else {
//   console.log(`Your answer "${yourAnswer} is not a valid answer`);
// }
// const greet = () => {
//   alert('hey wassup');
// };
// const sayBye = () => {
//   alert('seeya later');
// };

// const answer = prompt('are you arriving or leaving?', 'arriving/leaving');

// if (answer.toLowerCase() === 'arriving') {
//   greet();
// } else if (answer.toLowerCase() === 'leaving') {
//   sayBye();
// } else {
//   alert('I dont understand');
// }

// let action = null;
// while (action != 'stop') {
//   action = prompt('What do you want to do?', 'Your action');
// }

// const greet = () => {
//   alert('hey wassup');
// };
// const sayBye = () => {
//   alert('seeya later');
// };
// const conversation = () => {
//   greet();
//   sayBye();
// };
// conversation();

// const func1 = () => {
//   console.log(1);
//   func2();
//   func3();
//   console.log('Finished!');
// };
// const func2 = () => {
//   console.log(2);
//   func4();
//   func6();
// };
// const func3 = () => {
//   console.log(3);
//   func5();
// };
// const func4 = () => {
//   console.log(4);
// };
// const func5 = () => {
//   console.log(5);
// };
// const func6 = () => {
//   console.log(6);
// };
// func1();

// let apples = 0;
// let money = 20;

// const showStatus = () => {
//   alert(`You have ${apples} apples and $${money}`);
// };
// const buyApple = () => {
//   apples++;
//   money -= 1;
//   showStatus();
// };
// const eatApple = () => {
//   apples--;
//   showStatus();
// };
// buyApple();
// eatApple();

let apples = 0;
let money = 20;

const start = () => {
  apples = 0;
  money = 20;
  askForAction();
};
const askForAction = () => {
  showStatus();
  const choice = prompt(
    'What do you want to do?',
    '(buy) apple / (eat) apple / (restart)'
  );
  if (choice === 'buy') {
    buyApple();
  } else if (choice === 'eat') {
    eatApple();
  } else if (choice === 'restart') {
    start();
  } else {
    console.log('error');
  }
};
const showStatus = () => {
  alert('You have ' + apples + ' apples and $' + money);
};

const buyApple = () => {
  apples++;
  money -= 1;
  askForAction();
};
const eatApple = () => {
  apples--;
  askForAction();
};

start();
