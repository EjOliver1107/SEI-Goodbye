const Schema = require('mongoose').Schema;

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
    image: { type: String }
});

module.exports = personSchema;