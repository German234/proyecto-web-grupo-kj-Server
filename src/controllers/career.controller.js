const httpError = require("http-errors");
const Careers = require("../models/career.model");

const createCareer = async (req, res, next) => {
  try {
    // Extracting 'name' and 'colorTag' from the request body
    const { name, colorTag } = req.body;

    // Check if a career with the same name already exists
    const existingCareer = await Careers.findOne({ name });

    // If a career with the same name exists, return an error response
    if (existingCareer) {
      return res
        .status(400)
        .json({ error: "Ya existe una carrera con este nombre." });
    }

    // If no existing career with the same name, create a new Careers object
    const newCareers = new Careers({
      name,
      colorTag,
    });

    // Save the new Careers object to the database
    const createdCareers = await newCareers.save();

    // Return a success response with the created Careers object
    res.status(201).json(createdCareers);
  } catch (error) {
    next(error);
  }
};

//Get one carreer by name
const getCareerByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const career = await Careers.findOne({ name });
        if (!career) throw httpError(404, "Carrera no encontrada");
        res.status(200).json({ data: career });
    } catch (err) {
        next(err);
    }
    }

//Get all careers
const getAllCareers = async (req, res, next) => {
  try {
    const careers = await Careers.find();
    if (!careers) throw httpError(404, "Careers not found");
    res.status(200).json({ data: careers });
  } catch (err) {
    next(err);
  }
};

//Update career by name
const updateCareerByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const { colorTag } = req.body;

    const updatedCareer = await Careers.findOneAndUpdate(
      { name },
      { colorTag },
      { new: true }
    );

    if (!updatedCareer) {
      throw httpError(404, "Carrera no encontrada");
    }

    res.status(200).json({ data: updatedCareer });
  } catch (err) {
    next(err);
  }
};

//Delete career by name
const deleteCareerByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const deletedCareer = await Careers.findOneAndDelete({ name });
        if (!deletedCareer) throw httpError(404, "Carrera no encontrada");
        res.status(200).json({ data: deletedCareer });
    } catch (err) {
        next(err);
    }
    }

module.exports = {
    createCareer,
    getCareerByName,
    getAllCareers,
    updateCareerByName,
    deleteCareerByName,
    };
