const mentorModel = require('../models/mentorModel');

module.exports.createMentor = async (req, res) => {
    try {
        const mentor = new mentorModel({...req.body});
        const response = await mentor.save()
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}


