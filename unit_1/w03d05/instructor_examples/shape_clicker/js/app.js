console.log('shape clicker js file is connected');

//remember to set up your window onload!
$(() => { 
    const shapes = ['circle', 'square', 'triangle-down', 'octagon', 'heart', 'triangle']
    let i = 0;
    
    $('.row div').on('click', (e) => {
        const clickedElement = $(e.currentTarget)
        clickedElement.attr('class', shapes[i])
        
        if (i === shapes.length - 1) {
            i = 0
        } else {
            i++
        }
    })
})