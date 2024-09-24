const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  url: String,
  summary: String,
  source: String
});

module.exports = mongoose.model('Article', ArticleSchema);
