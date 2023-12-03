const httpError = require("http-errors");
const InscriptionTutor = require("../models/inscriptionTutor.model");

// Create Inscription
const createInscriptionTutor = async (req, res, next) => {
  try {
    const {
      emailUser,
      userName,
      subject,
      faculty,
      careerYear,
      cum,
      subjectNote,
      status,
    } = req.body;

    // Verificar si el usuario ya está inscrito en el proyecto
    const existingInscriptionTutor = await InscriptionTutor.findOne({
      emailUser,
      subject,
    });

    if (existingInscriptionTutor) {
      // El usuario ya está inscrito, devolver un error o manejar de acuerdo a tus necesidades
      return res
        .status(400)
        .json({ error: "El usuario ya está inscrito en esta materia" });
    }

    const newInscriptionTutor = new InscriptionTutor({
      emailUser,
      userName,
      subject,
      faculty,
      careerYear,
      cum,
      subjectNote,
      status,
    });

    const createdInscriptionTutor = await newInscriptionTutor.save();

    res.status(201).json(createdInscriptionTutor);
  } catch (error) {
    next(error);
  }
};

// Update Inscription by email
const updateInscriptionTutorByEmail = async (req, res, next) => {
  try {
    const { emailUser } = req.params;
    const {
      userName,
      subject,
      faculty,
      careerYear,
      cum,
      subjectNote,
      status,
    } = req.body;

    const updatedInscription = await InscriptionTutor.findOneAndUpdate(
      { emailUser },
      {
        userName,
        subject,
        faculty,
        careerYear,
        cum,
        subjectNote,
        status,
      },
      { new: true }
    );

    if (!updatedInscription) {
      throw httpError(404, "Inscription not found");
    }

    res.status(200).json(updatedInscription);
  } catch (error) {
    next(error);
  }
};

// Get inscription by email

// Get inscriptionTutor by email
const getInscriptionTutorByEmail = async (req, res, next) => {
    try {
        const { emailUser } = req.params;

        const inscriptionTutor = await InscriptionTutor.find({ emailUser });

        if (!inscriptionTutor) {
            throw httpError(404, "InscriptionTutor not found");
        }

        res.status(200).json(inscriptionTutor);
    } catch (error) {
        next(error);
    }
};


const getAllInscriptionsTutor = async (req, res, next) => {
  try {
    const inscripcion = await InscriptionTutor.find();
    if (!inscripcion) throw httpError(404, "Project not found");
    res.status(200).json({ data: inscripcion });
  } catch (err) {
    next(err);
  }
};

// Delete Inscription by email
const deleteInscriptionTutorByEmail = async (req, res, next) => {
  try {
    const { emailUser } = req.params;

    const deletedInscription = await InscriptionTutor.findOneAndDelete({
      emailUser,
    });

    if (!deletedInscription) {
      throw httpError(404, "Inscription not found");
    }

    res.status(200).json(deletedInscription);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInscriptionTutor,
  updateInscriptionTutorByEmail,
  getInscriptionTutorByEmail,
  getAllInscriptionsTutor,
  deleteInscriptionTutorByEmail,
};
