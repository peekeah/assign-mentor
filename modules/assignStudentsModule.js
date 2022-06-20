const mentorModel = require("../models/mentorSchema");

module.exports.assignStudents = async (req, res) => {
    try {
        const mentor = await mentorModel.findByIdAndUpdate(req.params.id, {...req.body});
        res.send(mentor);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
