const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
  res.render('sessions/sessions_new.ejs')
})

sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (foundUser) {
      if(bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser;
        res.redirect('/');
      } else {
          res.send('<a href="/">Wrong password or user go back</a>');
      }
    } else {
      res.send('<a href="/">Wrong user or password go back</a>')
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
