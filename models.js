'use strict';

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  text: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  votes: {type: Number, default: 0}
});

var QuestionSchema = new Schema({
  text: String,
  createdAt: {type: Date, default: Date.now},
  answers: []
});

var Questions = mongoose.model('Question', QuestionSchema);

module.exports.Question = Question;
