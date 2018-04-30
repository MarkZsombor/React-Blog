const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  categories: String,
  content: String,
  createDate: { type: Date, default: Date.now },
  authorHandle: String,
  authorId: String,
  imageURL: String,
});

module.exports = mongoose.model('posts', postSchema);
