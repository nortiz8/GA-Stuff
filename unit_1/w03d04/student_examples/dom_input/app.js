$(() => {
  //handle form
  $('form').on('submit', event => {
    event.preventDefault();

    const inputValue = $('#input-box').val();
    // console.log(inputValue);

    const listItem = $('<li>');
    listItem.text(inputValue);

    $('ul').append(listItem);

    $(event.currentTarget).trigger('reset');
  });

  //handle li
  $('body').on('click', 'li', event => {
    // console.log(event.currentTarget);
    $(event.currentTarget).css('text-decoration', 'line-through');
    $(event.currentTarget).effect('excite-bike');
  });
});
