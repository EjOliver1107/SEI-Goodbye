const Signature = require('../../models/signature');

module.exports = {
  create,
  setSig
};

async function create(req, res) {
    req.body.user = req.user._id;
    const sign = await Signature.create(req.body)
    res.json(sign)
}
async function setSig(req, res) {
  const sign = await Signature.findOne({ user: req.user._id })
  res.json(sign);
}