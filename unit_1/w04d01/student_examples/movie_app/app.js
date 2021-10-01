$(() => {
  //   const titleQuery = 'eraserhead';
  //   const data = $.ajax({
  //     url: endpoint
  //   }).then(data => {
  //     console.log(data);
  //   });
  const handleData = data => {
    const $title = $('<h1>').text(data.Title); // create h1 and put the title inside
    $('.container').append($title); // add the title to the container

    const $director = $('<h2>').text(
      `Directed by the one and only ${data.Director}`
    ); // create the h2 and put the director inside
    $('.container').append($director); // add the director to the container
  };
  $('form').on('submit', event => {
    event.preventDefault();
    const titleQuery = $('.title-query').val();
    const endpoint = `http://www.omdbapi.com/?apikey=979da3b&t=${titleQuery}`;
    $.ajax({ url: endpoint }).then(handleData);
  });
  //
});
