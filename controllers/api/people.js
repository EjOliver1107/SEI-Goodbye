const Person = require('../../models/person');

module.exports = {
    index,
    addStudent,
};

async function addStudent(req,res) {
    req.body.user = req.user._id;
    const student = await new Person(req.body)
    res.json(student)
}
async function newPerson(req,res) {
    res.render('/create');
}
async function index(req, res) {
    const people = await Person.find({}).sort('name').populate('category').exec();
    people.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(people);
}
