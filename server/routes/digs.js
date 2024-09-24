const mongoose = require('mongoose');

const DigSchema = new mongoose.Schema({
  name: String,
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Dig', DigSchema);
