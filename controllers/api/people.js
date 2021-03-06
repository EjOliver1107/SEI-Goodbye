const Person = require('../../models/person');

module.exports = {
  create,
  setProfile,
  updateProfile,
  getAll,
  deleteProfile,
  userProfile,
};
async function userProfile(req, res) {
  const personProfile = await Person.findById(req.params.id)
  res.json(personProfile)
}
async function create(req, res) {
    req.body.user = req.user._id;
    const profile = await Person.create(req.body)
    res.json(profile)
}
async function setProfile(req, res) {
  const profile = await Person.findOne({ user: req.user._id })
  res.json(profile);
}
async function updateProfile(req,res) {
  const profile = await Person.findByIdAndUpdate( req.params.id,req.body, { new: true })
  res.json(profile)
}

async function getAll(req, res) {
  const people = await Person.find({})
  res.json(people)

}
async function deleteProfile(req, res) {
  const remove = await Person.findByIdAndDelete(req.params.id)
  res.json(remove)
}
