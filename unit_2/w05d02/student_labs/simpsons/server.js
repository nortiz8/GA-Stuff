const express = require('express');
const app = express();
const port = 3000;

app.get('/homer', (req, res) => {
  res.send('mmmm beer');
});
app.get('/marge', (req, res) => {
  res.send('My hair is so big');
});
app.get('/bart', (req, res) => {
  res.send('Eat my shorts');
});
app.get('/lisa', (req, res) => {
  res.send("I'm so smart");
});
app.get('/maggie', (req, res) => {
  res.send('*baby noises*');
});
app.get('/snowball-ii', (req, res) => {
  res.send('snowball things? idk i never watched the simpsons');
});
app.get('/santas-little-helper', (req, res) => {
  res.send('Elves?');
});
app.listen(port, () => {
  console.log('listening...');
});
