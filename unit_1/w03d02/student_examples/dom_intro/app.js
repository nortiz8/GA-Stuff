// document.querySelector('h1').innerHTML = 'Welcome to Stamford';
document.querySelector('img').style.filter = 'grayscale(100%)';

const eggos = document.createElement('img');
document.querySelector('.container').appendChild(eggos);
eggos.setAttribute(
  'src',
  'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg'
);
eggos.style.width = '100%';
eggos.setAttribute('alt', "Eleven's eggos");
// // console.log(eggos);
const featuring = document.querySelectorAll('li');
console.log(featuring[1]);
featuring[1].innerText = 'Demo Dog Hangout';
