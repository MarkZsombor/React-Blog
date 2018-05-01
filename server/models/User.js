const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userHandle: String,
  userInfo: String,
  picture: String,
});

module.exports = mongoose.model('users', userSchema);
