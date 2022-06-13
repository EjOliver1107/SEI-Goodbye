const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const signatureSchema = new Schema({
    content: { type: String, required: true}
}) 

const personSchema = new Schema({
    name: { type: String, required: true},
    category: { type: String, 
    enum: ['student', 'instructor'], default: 'student' },
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    age: { type: Number, required: true },
    favoriteLanguages: { 
        type: String,
        enum: ['html', 'css', 'js', 'python', 'jsx', 'ejs'],
        required: false},
    message: { type: String, required: true },
    signatures: [signatureSchema],
    image: {type: String, required: true }
});

module.exports = mongoose.model('Person', personSchema);