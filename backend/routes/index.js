const express = require('express');
const category = require('./categoryRoute');
const device = require('./deviceRoute');
const user = require('./userRoute');

// rodar swagger
//app.use(category);
//app.use(device);
//app.use(user);


module.exports = app => {
  app.use(
    express.json(),
    category,
    device,
    user
  )
};