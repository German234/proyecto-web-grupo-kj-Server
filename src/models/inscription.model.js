const { Schema, model } = require("mongoose");

const InscriptionSchema= new Schema({
  emailUser: {
    type: String,
    required: true,
  },
  idProject: {
    type: String,
    required: true,
  },
  inscriptionHour:{
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  status:{
    type: String,
    required: true,
  },
});

module.exports = model("Inscription", InscriptionSchema);

