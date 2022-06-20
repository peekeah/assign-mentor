const mongoose = require("mongoose");
const studentModel = require("../models/studentSchema");

module.exports.assignMentorModule = async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate({_id: req.params.id}, {...req.body});
    res.send(student);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};
