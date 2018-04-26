const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          // done first arg is errors, second is returned value
          done(null, existingUser);
        } else {
          new User({ 
            googleId: profile.id,
            userHandle: profile.displayName,
          }).save()
            .then(user => done(null, user));
        }
      });
  },
));
