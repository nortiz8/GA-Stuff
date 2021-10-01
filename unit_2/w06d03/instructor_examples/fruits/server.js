const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override')

// CONTROLLER
const fruitsController = require('./controllers/fruits')

// DB SETUP
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// MIDDLEWARE
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'))
app.use('/fruits', fruitsController)

app.listen(3000, (req, res) => console.log('listening on PORT 3000!'))