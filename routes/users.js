const express = require('express');

const route = express.Router();

route.get('/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});

module.exports = route;