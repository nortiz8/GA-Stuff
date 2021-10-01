console.log('app.js loaded for palette picker');

const $generate = $('#generate')
const $colorPalette = $('#color-palette')
const $myPalette = $('#my-palette')

const createSquare = (color) => {
    const $square = $('<div>')
    $square.attr('class', 'square')
    $square.css('background-color', color)
    return $square
}

const getColor = (event) => {
    const currentSquare = $(event.currentTarget)
    const color = currentSquare.css('background-color')
    
    const $square = createSquare(color)

    $myPalette.append($square)
}

const makePalette = () => {
    $colorPalette.empty()
    for(let i = 0; i < 150; i++) {
        
        const red = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const color = `rgb(${red}, ${green}, ${blue})`
        
        const $square = createSquare(color)
        $square.on('click', getColor)
        
        $colorPalette.append($square)
    }
}

$generate.on('click', makePalette)