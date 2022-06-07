const Schema = require('mongoose').Schema;

const personSchema = new Schema({
    name: { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    age: { type: Number, required: true },
    favoriteLanguages: { 
        type: String,
        enum: ['html', 'css', 'js', 'python', 'jsx', 'ejs'],
        required: true}
});

module.exports = personSchema;