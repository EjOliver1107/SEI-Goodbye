const express = require('express');
const router = express.Router();
const peopleCtrl = require('../../controllers/api/people');

router.get('/students', peopleCtrl.index);
router.get('/instructors', peopleCtrl.index);
// GET profilecreate
router.get('/create', peopleCtrl.new);
