const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./server/config/keys');
const Post = require('./server/models/Posts');
const User = require('./server/models/User');
require('./server/models/User');
require('./server/services/passport');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
  keys: [keys.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/authRoutes')(app);
require('./server/routes/apiRoutes')(app);

if(process.env.NODE_ENV === 'production') {
  // Serve up the production assets
  app.use(express.static('client/build'));

  // Serve up index.html as a fallback to everything
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
