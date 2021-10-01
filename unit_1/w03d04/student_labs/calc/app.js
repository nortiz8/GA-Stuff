$(() => {
  const math = [];
  $('.num-button').on('click', event => {
    // console.log($(event.currentTarget).text());
    $('#output').append($(event.currentTarget).text());
  });
  $('.math-button').on('click', event => {
    const firstNum = parseFloat($('#output').text());
    $('#output').text('');
    math[0] = firstNum;
    math[1] = $(event.currentTarget).text();
    // console.log(math);
  });
  $('.equal-button').on('click', () => {
    const secondNum = parseFloat($('#output').text());
    math[2] = secondNum;
    console.log(math);
    let answer = 0;
    if (math[1] === 'X') {
      answer = math[0] * math[2];
    }
    if (math[1] === '/') {
      answer = math[0] / math[2];
    }
    if (math[1] === '-') {
      answer = math[0] - math[2];
    }
    if (math[1] === '+') {
      answer = math[0] + math[2];
    }
    $('#output').text(answer);
  });
});
