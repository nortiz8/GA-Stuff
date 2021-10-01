const mongoose = require('mongoose')
const Tweet = require('./tweet.js')

const dbName = 'tweets'
const mongoURI = `mongodb://localhost:27017/${dbName}`;
const db = mongoose.connection;

// CREATE ONE

const myFirstTweet = {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
}

Tweet.create(myFirstTweet, (error, tweet) => {
    if (error) { //if there is an error console log it
        console.log(error);
    } else { // else show us the created tweet
        console.log(tweet);
    }
    db.close();
})

// // CREATE MANY

// const manyTweets = [
//     {
//         title: 'Deep Thoughts',
//         body: 'Friends, I have been navel-gazing',
//         author: 'Karolin'
//     },
//     {
//         title: 'Sage Advice',
//         body: 'Friends, I am vegan and so should you',
//         author: 'Karolin',
//         likes: 20
//     },
//     {
//         title: 'Whole Reality',
//         body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
//         author: 'Karolin',
//         likes: 40
//     },
//     {
//         title: 'Organic',
//         body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
//         author: 'Karolin',
//         likes: 162
//     },
//     {
//         title: 'Confusion',
//         body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
//         author: 'Karolin',
//         likes: -100
//     },
//     {
//         title: 'Vespa',
//         body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
//         author: 'Karolin',
//         likes: 2
//     },
//     {
//         title: 'Licensed',
//         body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
//         author: 'Karolin',
//         likes: 3
//     },
//     {
//         title: 'Water',
//         body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
//         author: 'Karolin',
//     },
// ];

// Tweet.insertMany(manyTweets, (error, tweets) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(tweets);
//     } db.close()
// });

// // FIND ALL

// Tweet.find({}, (err, tweets) => {
//     console.log(tweets);
//     db.close()
// })  

// // FIND BY ID

// Tweet.findById('5d3f193c5f2c9a2d552a19dc', (req, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('This is the found tweet:', tweet);
//     }
// })

// // FIND BY KEY/VALUE PAIR

// Tweet.find({ title: 'Water' }, (err, tweet) => {
//     console.log(tweet);
//     db.close();
// })

// // FIND BY ID AND REMOVE

// Tweet.findByIdAndRemove('5d3f193c5f2c9a2d552a19dc', (err, tweet) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('This is the deleted tweet:', tweet);
//     }
//     db.close()
// })

// // FIND BY ID AND UPDATE

// Tweet.findByIdAndUpdate('5d3ef60ff682d423a5b82f92', { title: 'Other worldly advice' }, { new: true }, (err, tweet) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(tweet);
//     }
//     db.close()
// })

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log('the connection with mongod is established')
})