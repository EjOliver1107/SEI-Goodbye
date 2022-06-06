const Schema = requite('mongoose').Schema;

const personSchema = new Schema({
    name: { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    age: { type: Number, required: true },
    favoriteLanguages: { type: String, required: true}
});

module.exports = personSchema;