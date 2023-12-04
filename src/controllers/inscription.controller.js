const httpError = require("http-errors");
const Inscripciones = require("../models/inscription.model");

// Create Inscription
const createInscription = async (req, res, next) => {
    try {
      const {
        emailUser,
        idProject,
        inscriptionHour,
        userName,
        projectName,
        status,
      } = req.body;

      // Verificar si el usuario ya está inscrito en el proyecto
      const existingInscription = await Inscripciones.findOne({
        emailUser,
        idProject,
      });

      if (existingInscription) {
        // El usuario ya está inscrito, devolver un error o manejar de acuerdo a tus necesidades
        return res
          .status(400)
          .json({ error: "El usuario ya está inscrito en este proyecto" });
      }

      const newInscripciones = new Inscripciones({
        emailUser,
        idProject,
        inscriptionHour,
        userName,
        projectName,
        status,
      });

      const createdInscripciones = await newInscripciones.save();

      res.status(201).json(createdInscripciones);
    } catch (error) {
        next(error);
    }
};

//update inscription by id
const updateInscriptionById = async (req, res, next) => {
  try {
    const { id } = req.params;
     const {
       emailUser,
       idProject,
       inscriptionHour,
       userName,
       projectName,
       status,
     } = req.body;

    const InscripcionUpdated = await Inscripciones.findByIdAndUpdate(
      id,
      {
        emailUser,
        idProject,
        inscriptionHour,
        userName,
        projectName,
        status,
      },
      { new: true }
    );
    if (!InscripcionUpdated) throw httpError(404, "Inscription not found");
    res.status(200).json({ message: "Inscripcion updated", data: InscripcionUpdated });
  } catch (err) {
    next(err);
  }
};

// Update Inscription by email
const updateInscriptionByEmail = async (req, res, next) => {
    try {
        const { emailUser } = req.params;
        const { idProject, inscriptionHour, userName, projectName, status } = req.body;

        const updatedInscription = await Inscripciones.findOneAndUpdate(
            { emailUser },
            { idProject, inscriptionHour, userName, projectName, status },
            { new: true }
        );

        if (!updatedInscription) {
            throw httpError(404, "Inscription not found");
        }

        res.json(updatedInscription);
    } catch (error) {
        next(error);
    }
};

// Get inscription by email
const getInscriptionByEmail = async (req, res, next) => {
    try {
        const { emailUser } = req.params;

        const inscriptiones = await Inscripciones.find({ emailUser });

        if (!inscriptiones) {
            throw httpError(404, "Inscription not found");
        }

        res.json(inscriptiones);
    } catch (error) {
        next(error);
    }
};


const getAllInscriptions = async (req, res, next) => {
  try {
    const inscripcions = await Inscripciones.find();
    if (!inscripcions) throw httpError(404, "Project not found");
    res.status(200).json({ data: inscripcions });
  } catch (err) {
    next(err);
  }
};

// Delete Inscription by email
const deleteInscriptionByEmail = async (req, res, next) => {
    try {
        const { emailUser } = req.params;

        const deletedInscription = await Inscripciones.findOneAndDelete({ emailUser });

        if (!deletedInscription) {
            throw httpError(404, "Inscription not found");
        }

        res.json({ message: "Inscription deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
  createInscription,
  getAllInscriptions,
  getInscriptionByEmail,
  updateInscriptionByEmail,
  deleteInscriptionByEmail,
  updateInscriptionById
};