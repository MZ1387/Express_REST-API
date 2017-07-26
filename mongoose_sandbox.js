'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

const db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection err:', err);
});

db.once('open', function() {
  console.log('db connection successful');
  // all database communication goes here

  const Schema = mongoose.Schema;
  const AnimalSchema = new Schema({
    type: String,
    color: String,
    size: String,
    mass: Number,
    name: String
  })

  const Animal = mongoose.model('Animal', AnimalSchema);

  var elephant = new Animal({
    type: 'elephant',
    color: 'gray',
    size: 'big',
    mass: 6000,
    name: 'Lawrence'
  })

  elephant.save(function(err) {
    if (err) {
      console.error('Save Failed', err);
    } else {
      console.log('Saved!');
    }

    db.close(function() {
      console.log('db connection closed');
    });
  })
});
