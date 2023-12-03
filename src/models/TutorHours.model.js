const {Schema,  model } = require("mongoose");

const tutorHourSchema= new Schema({
    userMail: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    startedDate: {
        type: String,
        required: true,
    },
    finishedDate: {
        type: String,
        required: true,
    },
    totalHours: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    evidence: {
        type: String,
        required: true,
    },
});

module.exports = model("HoursTutor", tutorHourSchema);