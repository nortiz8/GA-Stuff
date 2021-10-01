// Declare functions OUTSIDE document on ready
const addH2 = () => {
  let $h2 = $('<h2>').text('Just getting started')
  $('body').prepend($h2)
}

const changeH2 = () => {
  $('h2').text("Getting warmed up")
}

const makeSquare = (number) => {
  const $square = $('<div>').addClass('square')
  $square.css('background-color', randomColorRGB())
  $('.container').append($square)
  $square.text(number)
  $square.attr('id', 'square' +  number)
}
const generateQuilt = (numberOfSquares)  => {
  for (let i = 1; i <= numberOfSquares; i++) {
    // console.log(i)
    makeSquare(i)
  }
}

const randomColorRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

console.log(randomColorRGB());

// document on ready
// call functions after html elements on page have loaded
$(()=>{
  addH2()
  changeH2()
  generateQuilt(1000)
}) // closes document on ready
