const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const mentorRouter = require('./router/mentorRouter');
const studentRouter = require('./router/studentRouter');

const app = express();
app.use(express.json());

dotenv.config();
app.use(cors());

app.use('/', (req, res, next) => {
    next();
})

app.get('/', (req, res, next) => {
    res.send("Assign Mentor API")
})

app.use('/mentor', mentorRouter);
app.use('/student', studentRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.PORT || 3005, () => {
        console.log(`server is running in ${process.env.PORT || 3005}`)
    })
}).catch((err) => {console.log(err)})
