const studentModel = require("../models/studentSchema");

//Filtering and displaying students who doesn't have mentor
exports.getStudents = async (req, res) => {
    try {
        const students = await studentModel.find({});
        const data = students.filter((s) => !s.mentor );
        res.send(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

//Getting student by id
exports.getStudent = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        res.send(student);
    } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
    }
    
}

//Creating student by id
module.exports.createStudent = async (req, res) => {
    try {
        const student = new studentModel({...req.body});
        const response = await student.save();
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
};

