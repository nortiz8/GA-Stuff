// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3003;
const cors = require('cors');

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
// middleware
app.use(express.json());
app.use(cors(corsOptions));

// routes
const animalsController = require('./controllers/animals');
app.use('/animals', animalsController);

// mongoose connections
mongoose.connect('mongodb://localhost:27017/sunny_shelter', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose!');
});

// listen
app.listen(port, () => {
  console.log('listening in on 👽', port);
});
