// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('index.ejs', {
    bakedGoods: bakedGoods
  });
});

// new route
app.get('/bakedgoods/new', (req, res) => {
  res.render('new.ejs');
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
  const currentGood = bakedGoods[req.params.id];
  res.render('show.ejs', { bakedGoods: currentGood });
});

// post route
app.post('/bakedgoods', (req, res) => {
  bakedGoods.push(req.body);
  res.redirect('/bakedgoods');
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`);
});
