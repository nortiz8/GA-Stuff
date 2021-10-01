$(() => {
  $('#submit').on('click', event => {
    const inputValue = $('#input-box').val();
    const complete = $('<button>')
      .text('complete')
      .addClass('complete');
    console.log(inputValue);
    const toDoItem = $('<div>')
      .addClass('to-do-item')
      .text(inputValue)
      .append(complete);
    $('#to-do-list').append(toDoItem);
    $(event.currentTarget).trigger('reset');
    $('#input-box').val('');
  });

  $('body').on('click', '.complete', event => {
    const $move = $(event.currentTarget).parent();
    // console.log($move);
    $('#completed').append($move);
    $move.addClass('done-item');
    $(event.currentTarget)
      .text('Remove')
      .addClass('remove');
  });
  $('body').on('click', '.remove', event => {
    $(event.currentTarget)
      .parent()
      .remove();
  });
});
