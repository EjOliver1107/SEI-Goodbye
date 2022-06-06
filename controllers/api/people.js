const Person = require('../../models/perosn');

module.exports = {
    index,
};

async function index(req, res) {
    const people = await Person.find({}).sort('name').populate('category').exec();
    people.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(people);
}