const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>99 Bottles of beer on the wall</h1>
        <h3>
          <a href='/98'>Take one down, pass it around</a>
        </h3>
      </body>
    </html>`);
});
app.get('/:number_of_bottles', (req, res) => {
  const nextBottle = parseInt(req.params.number_of_bottles) - 1;
  if (parseInt(req.params.number_of_bottles) !== 0) {
    res.send(`
        <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
        <h3>
          <a href='/${nextBottle}'>Take one down, pass it around</a>
        </h3>`);
  } else {
    res.send(`
        <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
        <h3><a href='/'>QUICK, SOMEONE ORDER MORE</a></h3>`);
  }
});

//listening
app.listen(port, () => {
  console.log('listening...');
});
