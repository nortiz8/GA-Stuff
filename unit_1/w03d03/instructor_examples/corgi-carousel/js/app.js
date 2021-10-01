console.log('corgi carousel connected to app.js!');

$(() => {
    let currentImgIndex = 0;
    let highestIndex = $('.carousel-images').children().length - 1;
    // next button
    $('.next').on('click', () => {
        // hide current image
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
        // increment image index
        if (currentImgIndex < highestIndex) {
            currentImgIndex++;
        }
        else {
            currentImgIndex = 0;
        }

        // show current image
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
    })

    $('.previous').on('click', () => {
        // hide current image
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
        // decrement the image index
        if (currentImgIndex > 0) {
            currentImgIndex--;
        }
        else {
            currentImgIndex = highestIndex;
        }
        // show current image
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');

    })
})