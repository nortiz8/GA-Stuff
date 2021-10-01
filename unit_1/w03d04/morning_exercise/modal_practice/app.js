// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$(() => {
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  const openModal = () => {
    $modal.css('display', 'block');
  };
  const closeModal = () => {
    $modal.css('display', 'none');
  };

  setTimeout(openModal, 5000);
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);
});
