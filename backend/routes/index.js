const express = require('express');
const category = require('./categoryRoute');
const device = require('./deviceRoute');

// rodar swagger
//app.use(category);
//app.use(device);

module.exports = app => {
  app.use(
    express.json(),
    category,
    device
  )
};