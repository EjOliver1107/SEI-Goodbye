const express = require('express');
const router = express.Router();
const sigCtrl = require('../../controllers/api/signature');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', sigCtrl.create)
router.get('/', sigCtrl.setSig )


module.exports = router;