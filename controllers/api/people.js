const Person = require('../../models/person');

module.exports = {
  create,
};

async function create(req, res) {
    const profile = await Person.create(req.body)
    res.json(profile)
}
