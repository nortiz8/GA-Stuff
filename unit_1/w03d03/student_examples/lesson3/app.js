// console.log('hey');
$(() => {
  const $btn = $('#btn');
  const addText = () => {
    $('body').append('SOMEONE clicked a button.');
  };
  const changeClass = () => {
    $('body').toggleClass('black');
  };
  $btn.on('click', changeClass);
});
