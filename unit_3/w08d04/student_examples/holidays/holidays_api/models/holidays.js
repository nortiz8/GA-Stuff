const mongoose = require('mongoose');

const holidaySchema = mongoose.Schema({
  name: { type: String, required: true },
  celebrated: { type: Boolean, default: false },
  description: { type: String, default: 'Best Holiday Ever!!' },
  like: { type: Number, default: 0, tags: [{ type: String }] }
});

module.exports = mongoose.model('Holiday', holidaySchema);
