const express = require('express');
const app = express();
const port = 3000;
const methodOveride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOveride('_method'));

// data
const pokemon = require('./models/pokemon.js');

// index
app.get('/pokedex', (req, res) => {
  res.render('index.ejs', { pokemon: pokemon });
});

// new
app.get('/pokedex/new', (req, res) => {
  res.render('new.ejs');
});

// edit
app.get('/pokedex/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: pokemon[req.params.id],
    index: req.params.id
  });
});

// show
app.get('/pokedex/:id', (req, res) => {
  res.render('show.ejs', { pokemon: pokemon[req.params.id] });
});

// create
app.post('/pokedex', (req, res) => {
  newPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(','),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      speed: req.body.speed
    }
  };
  pokemon.push(newPokemon);
  res.redirect('/pokedex');
});

// remove
app.delete('/pokedex/:id', (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect('/pokedex');
});

// update
app.put('/pokedex/:id', (req, res) => {
  currentPokemon = pokemon[req.params.id];
  currentPokemon.name = req.body.name;
  currentPokemon.img = req.body.img;
  currentPokemon.type = req.body.type.split(',');
  currentPokemon.stats.hp = req.body.hp;
  currentPokemon.stats.attack = req.body.attack;
  currentPokemon.stats.defense = req.body.defense;
  currentPokemon.stats.speed = req.body.speed;
  res.redirect('/pokedex');
});

// listen
app.listen(port, () => {
  console.log('listening in on port', port);
});
