const express = require('express');
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});
app.listen(3000);