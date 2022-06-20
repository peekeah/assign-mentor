const express = require("express");
const { createStudent, getStudents, getStudent } = require("../modules/studentModule");
const { assignMentorModule } = require("../modules/assignMentorModule");
const router = express.Router();

router.get("/", getStudents)
router.get("/:id", getStudent)
router.post("/create", createStudent);
router.patch("/assign-mentor/:id", assignMentorModule);

module.exports = router;
