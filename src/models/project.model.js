const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  socialService: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  modality: {
    type: String,
    required: true,
  },
  shedule: {
    type: String,
    required: true,
  },
  moreInformation: {
    type: String,
    required: true,
  },
  careers: {
    type: [String],
  },
});

module.exports = model("Project", projectSchema);
