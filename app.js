'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');

const jsonParser = require('body-parser').json;
const logger = require('morgan');

app.use(logger('dev'))
app.use(jsonParser());

app.use('/questions', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('EXPRESS SERVER LISTENING ON PORT:', PORT);
})
