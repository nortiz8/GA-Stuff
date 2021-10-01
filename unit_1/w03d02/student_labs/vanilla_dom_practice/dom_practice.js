// console.log('hey');
const id = document.querySelector('#welcome');
console.log(id);
const h2 = document.querySelector('h2');
console.log(h2);
h2.innerText = 'Welcome to Norwalk!!!';
const thatClass = document.querySelectorAll('.things-to-do');
console.log(thatClass);

thatClass[1].style.color = 'aqua';
thatClass[2].innerText = 'Jamboree sandwich at the Jambo-ree';

const image = document.createElement('img');
image.setAttribute('src', 'dogs.jpeg');
document.querySelector('.container').appendChild(image);

thatClass[0].style.color = 'purple';
thatClass[2].style.color = 'deeppink';

const para = document.querySelector('p');
para.remove();
