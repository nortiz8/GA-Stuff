$(() => {
  const $container = $('#container');
  $('#input-button').on('click', () => {
    $container.empty();
    console.log($('#input-field').val());
    $gridSize = parseInt($('#input-field').val());
    $('#input-field').val('');
    makeGrid($gridSize);
  });
  const color = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
  const changeColor = event => {
    $(event.currentTarget).css('background-color', color);
  };
  const makeGrid = size => {
    for (let i = 0; i < size; i++) {
      let $div = $('<div>').addClass('square');
      $('#container').append($div);
    }
  };
  $('body').on('mouseover', '.square', changeColor);
});
