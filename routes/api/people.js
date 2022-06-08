const express = require('express');
const router = express.Router();
const peopleCtrl = require('../../controllers/api/people');


router.post('/', peopleCtrl.create)
module.exports = router;