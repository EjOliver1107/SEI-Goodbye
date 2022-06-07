const Person = require('../../models/perosn');

module.exports = {
    index,
    new: newPerson,
    create,
    show,
};

async function create()
async function newPerson(req,res) {
    res.render('/create');
}
async function index(req, res) {
    const people = await Person.find({}).sort('name').populate('category').exec();
    people.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(people);
}
