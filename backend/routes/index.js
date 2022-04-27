const express = require('express');
const category = require('./categoryRoute');
const device = require('./deviceRoute');
const user = require('./userRoute');
const cors = require('cors');


// rodar swagger
//app.use(category);
//app.use(device);
//app.use(user);


module.exports = app => {
  app.use(
    cors(),
    express.json(),
    category,
    device,
    user
  )
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  }); 
  
};