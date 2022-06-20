const studentModel = require("../models/studentSchema");

exports.getStudents = async (req, res) => {
    try {
        const students = await studentModel.find({});
        res.send(students);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

exports.getStudent = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        res.send(student);
    } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
    }
    
}

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

