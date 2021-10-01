// if (typeof $ == 'undefined') {
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file properly!')
// };
$(() => {
  const $div = $('<div>');
  const $body = $('body');

  $body.append($div);
  $div.addClass('meat');

  const $h3 = $('<h3>');
  $h3.text('Ostritch');
  $div.append($h3);

  const $divMilkshake = $('<div>');
  $body.append($divMilkshake);
  $divMilkshake.addClass('dairy');
  const $h3Milkshake = $('<h3>');
  $h3Milkshake.text('Milkshake');
  $divMilkshake.append($h3Milkshake);

  const $divSalad = $('<div>');
  const $h3Salad = $('<h3>');
  $divSalad.addClass('vegetable');
  $h3Salad.text('Salad');
  $body.append($divSalad);
  $divSalad.append($h3Salad);

  const $divApple = $('<div>');
  const $h3Apple = $('<h3>');
  $divApple.addClass('fruit');
  $h3Apple.text('Apple');
  $body.append($divApple);
  $divApple.append($h3Apple);

  const $divs = $('div');
  // $divs.hide('slow');
  const $meat = $('.meat');
});
