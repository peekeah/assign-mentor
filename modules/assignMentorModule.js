const mentorModel = require("../models/mentorSchema");
const studentModel = require("../models/studentSchema");

module.exports.assignMentorModule = async (req, res) => {
  try {
    //Assigning Mentor to student
    let reqData = {...req.body}
    let student = await studentModel.findByIdAndUpdate(req.params.id, reqData);
    // await student.save();
    console.log(student);
    //Updating student for Mentor
    let mentor = await mentorModel.findOne({ mentor_name: req.body.mentor });
    let assignedStudents = [];
    if (mentor.assigned_students) {
      assignedStudents = mentor.assigned_students;
    }
    assignedStudents.push(student.student_name);
    mentor["assigned_students"] = assignedStudents;
    mentor.save();
    await res.send(student);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Please enter valid mentor");
  }
};
