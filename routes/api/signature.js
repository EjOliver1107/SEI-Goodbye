const express = require('express');
const router = express.Router();
const sigCtrl = require('../../controllers/api/signature');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/:id/signature', ensureLoggedIn, sigCtrl.create)
router.get('/', ensureLoggedIn, sigCtrl.setSig )


module.exports = router;