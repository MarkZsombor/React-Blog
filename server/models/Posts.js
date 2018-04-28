const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  categories: String,
  // authorHandle: String,
  content: String,
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('posts', postSchema);
