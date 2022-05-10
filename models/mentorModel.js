const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
    mentor_name: { type: "string", required: [true, "mentor name is must"] },
    mentor_city: { type: "string" },
    mentor_age: { type: "number" },
    subject: { type: "string", required: [true, "subject is required"] },
});

const mentorModel = mongoose.model("mentor", mentorSchema);

module.exports = mentorModel;
