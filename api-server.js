const express = require('express');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');
require('./server/services/passport');


mongoose.connect(keys.mongoURI);
const app = express();

require('./server/routes/authRoutes')(app);

const PORT = 5000;
// for some reason this keeps defaulting to 5100
// const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
