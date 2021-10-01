$(() => {

    // HANDLE FORM
    $('form').on('submit', (event) => {
        event.preventDefault() // stops the page from being refreshed

        const inputValue = $('#input-box').val(); // we grab the value from the input box 
        console.log(inputValue); // we log the value to make sure that it works

        const listItem = $('<li>') // creates a blank list item
        listItem.text(inputValue) // puts our inputValue inside of our newly created list item

        $('ul').append(listItem) // grabs blank ul that we wrote in our HTML and adds the now populated list item

        $(event.currentTarget).trigger('reset') // resets the current target(the form) to how it originally was (blank text fields)
    });

    // HANDLE LI
    $('body').on('click', 'li', (event) => {
        console.log(event.currentTarget) // logs the current <li> being clicked
        console.log($(event.currentTarget)) // if you like, you can log the 'money' version so that you can see the difference
        $(event.currentTarget).css('text-decoration', 'line-through') //  changes css to put a line through the targeted li
    });
})