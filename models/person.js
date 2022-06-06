const mongoose = require('mongoose');

const personSchema = require('./personSchema');

module.exports = mongoose.model('person', personSchema);