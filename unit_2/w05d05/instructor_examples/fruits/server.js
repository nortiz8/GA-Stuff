// Dependencies
const express = require('express')
const app = express()
const PORT = 3000
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// 'Data'
const fruits = require('./models/fruits.js')

// Index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  })
})

// New
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
})

// Edit
app.get('/fruits/:index/edit', (req, res) => {
  res.render( 'edit.ejs', { 
      fruit: fruits[req.params.index], 
      index: req.params.index
    }
  )
})

// Show
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index]
  res.render('show.ejs', {
    fruit: currentFruit
  })
})

// Create
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  res.redirect('/fruits')
})

// Destroy
app.delete('/fruits/:index', (req, res) => {
  fruits.splice(req.params.index, 1);
  res.redirect('/fruits');
});

// Update
app.put('/fruits/:index', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  fruits[req.params.index] = req.body 
  res.redirect('/fruits'); //redirect to the index page
})

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
