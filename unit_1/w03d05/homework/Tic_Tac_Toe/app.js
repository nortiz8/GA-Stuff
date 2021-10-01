console.log('linked');
$(() => {
  let xTiles = [];
  let oTiles = [];
  const winMatches = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  let whichMove = true;
  let gameOver = false;
  turnCounter = 0;
  xWins = 0;
  oWins = 0;
  numDraw = 0;
  const $gameBoard = $('#gameboard');
  const move = event => {
    const $currentSquare = $(event.currentTarget);
    if (gameOver === true) {
      alert("Why don't you start a new game?");
    } else if ($currentSquare.text() === '') {
      if (whichMove === true) {
        $currentSquare.text('X');
        whichMove = false;
        xTiles.push(parseInt($currentSquare.attr('id')));
        turnCounter++;
        // console.log(xTiles);
      } else {
        $currentSquare.text('O');
        whichMove = true;
        oTiles.push(parseInt($currentSquare.attr('id')));
        turnCounter++;
        // console.log(oTiles);
      }
      checkWinX(winMatches);
      checkWinO(winMatches);
      checkDraw();
    }
  };
  const $btn = $('#start');
  $btn.on('click', () => {
    $gameBoard.empty();
    whichMove = true;
    gameOver = false;
    xTiles = [];
    oTiles = [];
    turnCounter = 0;
    for (let i = 1; i < 10; i++) {
      const $box = $('<div>')
        .addClass('box')
        .attr('id', `${i}`)
        .on('click', move);
      $gameBoard.append($box);
    }
  });
  const checkWinX = winMatches => {
    for (i = 0; i < winMatches.length; i++) {
      let win1 = winMatches[i][0];
      let win2 = winMatches[i][1];
      let win3 = winMatches[i][2];
      if (
        xTiles.includes(win1) === true &&
        xTiles.includes(win2) === true &&
        xTiles.includes(win3) === true
      ) {
        alert('X win!');
        gameOver = true;
        xWins++;
        winCounter();
      }
    }
  };
  const checkWinO = winMatches => {
    for (i = 0; i < winMatches.length; i++) {
      let win1 = winMatches[i][0];
      let win2 = winMatches[i][1];
      let win3 = winMatches[i][2];
      if (
        oTiles.includes(win1) === true &&
        oTiles.includes(win2) === true &&
        oTiles.includes(win3) === true
      ) {
        alert('O wins!');
        gameOver = true;
        oWins++;
        winCounter();
      }
    }
  };
  const checkDraw = () => {
    if (turnCounter === 9 && gameOver === false) {
      numDraw++;
      alert("It's a draw! How about a rematch?");
      winCounter();
    }
  };
  const winCounter = () => {
    $('#x-wins').text(`X has won ${xWins} times`);
    $('#draws').text(`There have been ${numDraw} draws`);
    $('#o-wins').text(`O has won ${oWins} times`);
  };
});
