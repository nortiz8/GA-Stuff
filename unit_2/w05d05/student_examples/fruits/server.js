// Dependencies
const express = require('express');
const app = express();
const PORT = 3000;
const methodOveride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOveride('_method'));

// 'Data'
const fruits = require('./models/fruits.js');

// Index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  });
});

// New
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
});

//edit

app.get('/fruits/:index/edit', (req, res) => {
  res.render(
    'edit.ejs', //render views/edit.ejs
    {
      //pass in an object that contains
      fruit: fruits[req.params.index], //the fruit object
      index: req.params.index //... and its index in the array
    }
  );
});

// Show
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index];
  res.render('show.ejs', {
    fruit: currentFruit
  });
});

// Create
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits');
});

// remove
app.delete('/fruits/:index', (req, res) => {
  fruits.splice(req.params.index, 1);
  res.redirect('/fruits');
});

// update
app.put('/fruits/:index', (req, res) => {
  // :index is the index of our fruits array that we want to change
  if (req.body.readyToEat === 'on') {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
  res.redirect('/fruits'); //redirect to the index page
});

//listener
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
