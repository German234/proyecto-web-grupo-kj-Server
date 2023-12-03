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

  projectsActives: [
    {
      idProject: {
        type: String,
        required: false,
      },
      startDate: {
        type: String,
        required: false,
      },
      finishedDate: {
        type: String,
        required: false,
      },
    },
  ],
  finishedProjects: [
    {
      idProject: {
        type: String,
        required: false,
      },
      startDate: {
        type: String,
        required: false,
      },
      finishedDate: {
        type: String,
        required: false,
      },
    },
  ],

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
