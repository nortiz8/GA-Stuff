const express = require('express');
const app = express();
const port = 3000;
const methodOveride = require('method-override');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOveride('_method'));

//data
const scientists = require('./models/scientists.js');

// new
app.get('/index/new', (req, res) => {
  res.render('new.ejs');
});

// index
app.get('/index', (req, res) => {
  res.render('index.ejs', { scientists: scientists });
});

// edit
app.get('/index/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    scientist: scientists[req.params.idex],
    index: req.params.index
  });
});

// show
app.get('/index/:index', (req, res) => {
  currentScientist = scientists[req.params.index];
  res.render('show.ejs', {
    scientist: currentScientist,
    currentIndex: req.params.index
  });
});

// create
app.post('/index', (req, res) => {
  scientists.push(req.body);
  res.redirect('/index');
});

// remove
app.delete('/index/:index', (req, res) => {
  scientists.splice(req.params.index, 1);
  res.redirect('/index');
});

// update
app.put('/index/:index', (req, res) => {
  scientists[req.params.index] = req.body;
  res.redirect('/index');
});

// listen
app.listen(port, () => {
  console.log('listening in on port: ', port);
});
