const express = require('express');
const router = express.Router();
const peopleCtrl = require('../../controllers/api/people');

router.post(`/student/addprofile`, peopleCtrl.addStudent);

module.exports = router;