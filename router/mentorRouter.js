const express = require("express");
const { assignStudents } = require("../modules/assignStudentsModule");
const { createMentor, getMentors, getMentor } = require("../modules/mentorModule");
const router = express.Router();

router.get('/', getMentors)
router.get('/:id', getMentor )
router.post("/create", createMentor);
router.patch("/assign-student/:id", assignStudents);

module.exports = router;
