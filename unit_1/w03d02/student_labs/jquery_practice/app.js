// console.log('linked');
$(() => {
  const $body = $('body');
  const $div1 = $('<div>');
  const $div2 = $('<div>');
  $div1.attr('id', 'top-container');
  $div2.attr('id', 'bottom-container');
  $body.append($div1);
  $body.append($div2);

  const $toph1 = $('<h1>');
  $toph1.text('Trois couleurs: rogue, blanc, et blue');
  const $topDiv1 = $('<div>');
  const $topDiv2 = $('<div>');
  const $topDiv3 = $('<div>');
  $topDiv1.addClass('couleur');
  $topDiv2.addClass('couleur');
  $topDiv3.addClass('couleur');
  $div1.append($toph1);
  $div1.append($topDiv1);
  $div1.append($topDiv2);
  $div1.append($topDiv3);
  $topDiv1.addClass('red');
  $topDiv2.addClass('white');
  $topDiv3.addClass('blue');

  const $lumpy = $('<img>');
  $lumpy.attr(
    'src',
    'https://www.autostraddle.com/wp-content/uploads/2014/09/Lumpy-Space-Princess-adventure-time-with-finn-and-jake-25461817-800-575.jpg'
  );
  $div2.append($lumpy);

  $toph1.text('Three colors: red, white, and blue');

  $topDiv2.css('background', 'black');
  $topDiv3.css('background', 'orange');
  $toph1.text('Three colors: red, black, and orange');
});
