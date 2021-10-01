// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')
// configurations of dependencies
require('dotenv').config()
const app = express()

// configure our app
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

// middleware
// allows us to use put and delete methods
app.use(methodOverride('_method'))
// parse info from our input fields into an object
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

// Database configuration
mongoose.connect(mongoURI, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// Custom middleware to protect routes
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

app.get('/app', isAuthenticated, (req, res) => {
  res.render('app/index.ejs')
})

// users routes
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)

const sessionsController = require('./controllers/sessions_controller')
app.use('/sessions', sessionsController)

app.listen(PORT, () => {
  console.log('auth happening on port', PORT)
})
