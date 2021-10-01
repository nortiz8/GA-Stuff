console.log('works');
const addH2 = () => {
  let $h2 = $('<h2>').text('Just getting started');
  $('body').prepend($h2);
};
const $changeH2 = () => {
  $('h2').text('Getting warmed up');
};

const generateQuilt = numberOfSquares => {
  for (let i = 1; i <= numberOfSquares; i++) {
    console.log(i);
    makeSquare(i);
  }
};
const makeSquare = number => {
  const $square = $('<div>').addClass('square');
  $('.container').append($square);
  $square.css('background-color', randomColorRGB());
  $square.text(number);
  $square.attr('id', 'square' + number);
};
const randomColorRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};
$(() => {
  addH2();
  $changeH2();
  generateQuilt(10000);
});
