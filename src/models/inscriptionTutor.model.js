const { Schema, model } = require("mongoose");

const TutorSchema = new Schema({
  emailUser: {
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
  faculty: {
    type: String,
    required: true,
  },
  careerYear: {
    type: String,
    required: true,
  },
  cum: {
    type: String,
    required: true,
  },
  subjectNote: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = model("Tutor", TutorSchema);

