const express = require('express');
const app = express();
const port = 3000;
const fruits = require('./models/fruits.js');

app.get('/fruits/', (req, res) => {
  res.render('index.ejs', { fruits: fruits });
});
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index];
  res.render('show.ejs', { fruit: currentFruit });
});

//listen
app.listen(port, () => {
  console.log('listening...');
});
d;
