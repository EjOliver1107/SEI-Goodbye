const Signature = require('../../models/signature');
const Person = require('../../models/person');

module.exports = {
  create,
  setSig
};

async function create(req, res) {
  console.log(req.params.id , 'Im pooping')  
  req.body.user = req.user._id;
    const sign = await Person.findOne({_id: req.params.id})
    sign.signatures.push(req.body)
    await sign.save()
    res.json(sign)
}
async function setSig(req, res) {
  const sign = await Signature.findOne({ user: req.user._id })
  res.json(sign);
}