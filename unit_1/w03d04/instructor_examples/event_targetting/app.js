$(() => {

    $('.card').on('click', (event) => {
        console.log(event.currentTarget)
        console.log($(event.currentTarget))
        $(event.currentTarget).toggleClass('card-back')
    })
})