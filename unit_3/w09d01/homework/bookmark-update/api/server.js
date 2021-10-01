const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const appController = require('./controller');
const BookmarkModel = require('./model');

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/bookmarks"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/bookmarks', appController);

app.use('/', (req, res) => {
  BookmarkModel.create({title: "GitHub", url: "https://github.com"}, (err, newBookmark) => {
    if (err) console.log(err.message);
    res.status(200).redirect('/bookmarks');
  });
});

mongoose.set(
  "useFindAndModify", 
  false
);

mongoose.connection.on(
  "error", 
  err => console.log('Mongoose Connection Error:',err.message)
);

mongoose.connection.on(
  "disconnected", 
  () => console.log("Mongoose Disconnected")
);

mongoose.connect(
  MONGODB_URI,
  {useNewUrlParser: true}
);

mongoose.connection.once(
  "open", 
  () => console.log("Mongoose Connected")
);

app.listen(
  PORT,
  () => console.log(`Server is listening on port: ${PORT}`)
);
