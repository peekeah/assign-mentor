const mentorModel = require("../models/mentorSchema");
const studentModel = require("../models/studentSchema");

module.exports.assignMentorModule = async (req, res) => {
  try {
    //Assigning Mentor to student
    const student = await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );

    //Updating student for Mentor 
    let mentor = await mentorModel.findOne({ mentor_name: req.body.mentor });
    let assignedStudents = [];
    if (mentor.assigned_students) {
      assignedStudents = mentor.assigned_students;
    }
    assignedStudents.push(student.student_name);
    mentor['assigned_students'] = assignedStudents;
    mentor.save();
    res.send(student);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};
