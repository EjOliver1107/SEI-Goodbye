const express = require('express');
const router = express.Router();
const peopleCtrl = require('../../controllers/api/people');


router.post('/', peopleCtrl.create)
router.get('/', peopleCtrl.setProfile )


module.exports = router;