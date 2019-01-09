const express = require('express');
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');
const path = require('path');

const app = express();

app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(3000);