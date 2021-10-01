const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');

app.get('/', (req, res) => {
  res.send('Welcome to the Pokémon App!');
});
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', { data: pokemon });
});
app.get('/pokemon/:id', (req, res) => {
  const currentPoke = pokemon[req.params.id];
  res.render('show.ejs', { data: currentPoke });
});

//listen
app.listen(port, () => {
  console.log('listening...');
});
