const express = require('express');

const route = express.Router();

route.get('/:name', (req, res) => {
  res.render('users', {
    name: req.params.name
  });
});

module.exports = route;