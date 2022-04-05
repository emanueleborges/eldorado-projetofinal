const express = require('express');
const category = require('./categoryRoute');
const device = require('./deviceRoute');

module.exports = app => {
  app.use(
    express.json(),
    category,
    device
  )
};