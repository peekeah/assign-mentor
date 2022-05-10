const express = require("express");
const { createMentor } = require("../modules/mentorModule");
const router = express.Router();

router.post("/create", createMentor);

module.exports = router;
