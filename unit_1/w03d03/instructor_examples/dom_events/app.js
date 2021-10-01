const addText = () => {
  $('body').append("It seems as if it has been clicked")
}

const changeClass = () => {
  $('body').toggleClass('black')
  $('body').toggleClass('blue')
}


$(()=> {
  const $btn = $('#btn')
  $btn.on('click', changeClass)
})
