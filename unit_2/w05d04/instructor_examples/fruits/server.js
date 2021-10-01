// Dependencies
const express = require('express')
const app = express()
const port = 3000

// 'Data'
const fruits = require('./models/fruits.js')

// middleware
app.use(express.urlencoded({ extended: false })); // allows your code to read what comes in from the form on a POST route
app.use(express.static('public')) // allows you to use CSS/JS files and refer to them from your ejs
// routes

// index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  })
})

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs'); // renders a form
});

// show
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index]
  res.render('show.ejs', {
    fruit: currentFruit
  })
})

// create
app.post('/fruits', (req, res) => {
  // req.body is the information that comes in from the form values
  if (req.body.readyToEat === 'on') { // switches "on" from a checkbox to a boolean
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  fruits.push(req.body) // adds our new value to our fruits array
  console.log(fruits) // logs the fruits so that we can see our new value in our terminal
  res.redirect('/fruits') // redirects to our index page, where we can see our updated fruits list
})

app.listen(port, () => {
  console.log('listening on port', port)
})
