const express = require('express');
const { createStudent } = require('../modules/studentModule');
const router = express.Router();

router.post('/create', createStudent);

module.exports = router;