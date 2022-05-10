const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    student_name: {type: 'string', required: [true, "student name is required"]},
    student_age: 'number',
    student_city: 'string',
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
