const httpError = require("http-errors");
const User = require("../models/user.model");

const createUser = async (req, res, next) => {
  try {
    const {
      name,
      email,
      profilePicture,
      internalHours,
      externalHours,
      projectsActives,
      finishedProjects,
      projectFavorites,
      isAdmin,
      isTutor,
    } = req.body;

    const newUser = new User({
      name,
      email,
      profilePicture,
      internalHours,
      externalHours,
      projectsActives,
      finishedProjects,
      projectFavorites,
      isAdmin,
      isTutor,
    });

    const savedUser = await newUser.save();

    if (!savedUser) throw httpError(500, "User not created");
    res.status(201).json({ message: "User created", data: savedUser });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({ data: users });
  } catch (err) {
    next(err);
  }
};

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params; // Suponiendo que el email esté en los parámetros de la URL
    const user = await User.findOne({ email });

    if (!user) {
      throw httpError(404, "User not found");
    }

    res.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
};


const updateUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params; // Suponiendo que el email esté en los parámetros de la URL
    const {
      name,
      newEmail, // Cambiado de email a newEmail para evitar conflicto de nombres
      profilePicture,
      internalHours,
      externalHours,
      projectsActives,
      finishedProjects,
      projectFavorites,
      isAdmin,
      isTutor,
    } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        name,
        email: newEmail, // Cambiado de email a newEmail
        profilePicture,
        internalHours,
        externalHours,
        projectsActives,
        finishedProjects,
        projectFavorites,
        isAdmin,
        isTutor,
      },
      { new: true }
    );
    if (!updatedUser) throw httpError(404, "User not found");
    res.status(200).json({ message: "User updated", data: updatedUser });
  } catch (err) {
    next(err);
  }
};

const deleteUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const deletedUser = await User.findOneAndDelete({ email });
    if (!deletedUser) throw httpError(404, "User not found");
    res.status(200).json({ message: "User deleted", data: deletedUser });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
};
