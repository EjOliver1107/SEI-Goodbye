const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const signatureSchema = new Schema({
    name: {type: String, required: true},
    content: { type: String, required: true}
}) 

module.exports = mongoose.model('Signature', signatureSchema);