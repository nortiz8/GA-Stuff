// dependencies
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Log = require('./models/logs.js');

// middleware
app.use(express.urlencoded({ extended: true }));

// routes
// index
app.get('/logs', (req, res) => {
  Log.find({}, (err, allLogs) => {
    res.render('index.ejs', {
      logs: allLogs
    });
  });
});

// new
app.get('/logs/new', (req, res) => {
  res.render('new.ejs');
});

// show
app.get('/logs/:id', (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render('show.ejs', { log: foundLog });
  });
});

// create
app.post('/logs', (req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (error, newLog) => {
    res.redirect('/logs');
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
