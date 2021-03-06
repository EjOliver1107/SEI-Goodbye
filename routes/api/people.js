const express = require('express');
const router = express.Router();
const peopleCtrl = require('../../controllers/api/people');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, peopleCtrl.create)
router.get('/', ensureLoggedIn, peopleCtrl.setProfile )
router.put('/:id', ensureLoggedIn, peopleCtrl.updateProfile);
router.get('/all', ensureLoggedIn, peopleCtrl.getAll)
router.delete('/:id', ensureLoggedIn, peopleCtrl.deleteProfile);
router.get('/:id', ensureLoggedIn, peopleCtrl.userProfile );
module.exports = router;