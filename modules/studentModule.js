const studentModel = require("../models/studentModel");

module.exports.createStudent = async (req, res) => {
    try {
        const student = new studentModel({...req.body});
        const response = await student.save();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};
