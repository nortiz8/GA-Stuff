//dependencies
const mongoose = require('mongoose');
const tweet = require('./tweet.js');
// Global configuration
const dbName = 'tweets';
const mongoURI = `mongodb://localhost:27017/${dbName}`;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('the connection with mongod is established');
});

const myFirstTweet = {
  title: 'Deep Thoughts',
  body: 'Friends, I have been navel-gazing',
  author: 'Karolin'
};

tweet.create(myFirstTweet, (error, tweet) => {
  if (error) {
    //if there is an error console log it
    console.log(error);
  } else {
    // else show us the created tweet
    console.log(tweet);
  }
  // get control of terminal back
  // else just use control c
  db.close();
});
