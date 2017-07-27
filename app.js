'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');

const jsonParser = require('body-parser').json;
const logger = require('morgan');

app.use(logger('dev'))
app.use(jsonParser());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/qa');

const db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection err:', err);
});

db.once('open', function() {
  console.log('db connection successful');
});

app.use('/questions', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // err.status would be undefined if this handler was receiving an internal server error
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('EXPRESS SERVER LISTENING ON PORT:', PORT);
})
