$(() => {
  const $display = $('#display');
  const $brooklyn = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=BROOKLYN`;
  const $manhattan = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=MANHATTAN`;
  const $queens = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=QUEENS`;
  const $bronx = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=BRONX`;
  const $statenIsland = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=STATEN%20ISLAND`;

  const handleData = data => {
    $display.empty();
    const $numOfResults = parseInt($('.complaints').val());
    for (let i = 0; i < $numOfResults; i++) {
      const $div = $('<div>')
        .addClass('complaint-divs')
        .attr('id', i)
        .text(data[i].descriptor);
      const $policeButton = $('<button>')
        .addClass('police-button')
        .attr('id', `PB${i}`)
        .text('What did the police do?')
        .on('click', () => {
          $(`#this${i}`).toggle();
        });
      const $innerDiv = $('<div>')
        .addClass('inner-div')
        .attr('id', `this${i}`);
      if (data[i].resolution_description === undefined) {
        $innerDiv.text('No resolution');
      } else {
        $innerDiv.text(data[i].resolution_description);
      }
      $display.append($div);
      $div.append($policeButton);
      $div.append($innerDiv);
      console.log(data[i].descriptor);
      console.log(data[i].resolution_description);
    }
  };

  $('#brooklyn').on('click', event => {
    event.preventDefault();
    const endpoint = $brooklyn;
    $.ajax({ url: endpoint }).then(handleData);
  });
  $('#manhattan').on('click', event => {
    event.preventDefault();
    const endpoint = $manhattan;
    $.ajax({ url: endpoint }).then(handleData);
  });
  $('#queens').on('click', event => {
    event.preventDefault();
    const endpoint = $queens;
    $.ajax({ url: endpoint }).then(handleData);
  });
  $('#bronx').on('click', event => {
    event.preventDefault();
    const endpoint = $bronx;
    $.ajax({ url: endpoint }).then(handleData);
  });
  $('#staten-island').on('click', event => {
    event.preventDefault();
    const endpoint = $statenIsland;
    $.ajax({ url: endpoint }).then(handleData);
  });
});
