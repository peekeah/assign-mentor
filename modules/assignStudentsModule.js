const mentorModel = require("../models/mentorSchema");
const studentModel = require("../models/studentSchema");

module.exports.assignStudents = async (req, res) => {
    try {
        //Assigning multiple students to single Mentor
        const students = req.body.assigned_students;
        const mentor = await mentorModel.findById(req.params.id);
        let data;
        if(mentor.assigned_students){
            data = [...new Set(mentor.assigned_students.concat(students))];
        } else {
            data=[...students];
        }
        mentor.assigned_students = data;
        mentor.save();
        res.send(mentor)

        //Updating mentor for all students
        for(student of students){
            let studentNew = await studentModel.findOneAndUpdate({student_name: student},{mentor: mentor["mentor_name"]});
        }  
    } catch (err) {
        res.status(500).send(err.message);
    }
};
