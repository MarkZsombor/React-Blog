const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  content: String,
  createDate: { type: Date, default: Date.now },
  commentAuthor: Object,
  postId: String,
});

module.exports = mongoose.model('comments', commentSchema);
