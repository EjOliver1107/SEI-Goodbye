const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const signatureSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    content: { type: String, required: true}
}) 

module.exports = mongoose.model('Signature', signatureSchema);