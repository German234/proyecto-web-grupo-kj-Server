const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  internalHours: {
    type: Number,
    required: true,
  },
  externalHours: {
    type: Number,
    required: true,
  },

  projectActives: {
    type: [String],
    required: false,
  },
  projectfinished: {
    type: [String],
    required: false,
  },

  projectFavorites: {
    type: [String],
    required: false,
  },

  isAdmin: {
    type: Boolean,
    required: true,
  },

  isTutor: {
    type: Boolean,
    required: true,
  },
});

module.exports = model("User", userSchema);
