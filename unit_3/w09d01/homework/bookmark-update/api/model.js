const mongoose = require('mongoose');

const bookmarksSchema = new mongoose.Schema({
  title: {type: String},
  url: {type: String}
});

const Bookmarks =  new mongoose.model('bookmarks', bookmarksSchema);

module.exports = Bookmarks;
