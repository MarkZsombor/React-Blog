const express = require('express');
require('./server/services/passport');

const PORT = 5000;
// const PORT = process.env.PORT || 5000;
const app = express();

require('./server/routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
