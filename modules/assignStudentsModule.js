const mentorModel = require("../models/mentorSchema");

module.exports.assignStudents = async (req, res) => {
    try {
        const mentor = await mentorModel.findById(req.params.id);
        
        if (mentor.assigned_students) {
            let  data = mentor.assigned_students;
            data.push(req.body.assigned_students);
            mentor['assigned_students'] = data;
            mentor.save();
        } else {
            let assigned_students = [req.body.assigned_students];
            mentor['assigned_students'] = assigned_students;
        }

        res.send(mentor);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
