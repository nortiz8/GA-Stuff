// dependencies
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Fruit = require('./models/fruit.js');

// middleware
app.use(express.urlencoded({ extended: true }));

// routes
// index
app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render('index.ejs', {
      fruits: allFruits
    });
  });
});

// new
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
});

//show
app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('show.ejs', {
      fruit: foundFruit
    });
  });
});
// create
app.post('/fruits/', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits');
  });
});

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/basiccrud', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

// listen
app.listen(port, () => {
  console.log('listening in on ', port);
});
