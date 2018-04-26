const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userHandle: String,
});

mongoose.model('users', userSchema);
