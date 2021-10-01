// depends
const express = require('express');
const app = express();
const port = 3000;
const usersController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: 'feedmeseymour', //some random string
    resave: false,
    saveUninitialized: false
  })
);
app.use('/users', usersController);
app.use('/sessions', sessionsController);

// routes
app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});

app.get('/app', (req, res) => {
  if (req.session.currentUser) {
    res.send('the party');
  } else {
    res.redirect('/sessions/new');
  }
});

app.post('/articles', (req, res) => {
  req.body.author = req.session.currentUser.username;
  Article.create(req.body, (err, createdArticle) => {
    res.redirect('/articles');
  });
});
// mongo
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

// listen
app.listen(port, () => {
  console.log('listening in on', port);
});
