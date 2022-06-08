const Person = require('../../models/person');

module.exports = {
  create,
  setProfile
};

async function create(req, res) {
    req.body.user = req.user._id;
    const profile = await Person.create(req.body)
    res.json(profile)
}
async function setProfile(req, res) {
  const profile = await Person.findOne({ user: req.user._id })
  res.json(profile);
}