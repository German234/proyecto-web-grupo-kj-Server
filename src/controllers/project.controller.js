const httpError = require("http-errors");
const Project = require("../models/project.model");

const createProject = async (req, res, next) => {
  try {
    const {
      title,
      description,
      place,
      socialService,
      image,
      modality,
      shedule,
      moreInformation,
      careers,
    } = req.body;

    // Verificar si carrers está presente antes de asignarlo al nuevo proyecto
    const newProjectData = {
      title,
      description,
      place,
      socialService,
      image,
      modality,
      shedule,
      moreInformation,
      careers,
    };

    if (careers) {
      newProjectData.careers = careers;
    } else {
      return res
        .status(400)
        .json({ error: "Es necesario ingresar como minimo una carrera" });
    }

    const existingProject = await Project.findOne({ title });

    if (existingProject) {
      return res
        .status(400)
        .json({ error: "Ya existe un proyecto con el mismo título" });
    }

    const newProject = new Project(newProjectData);
    const createdProject = await newProject.save();

    res.status(201).json(createdProject);
  } catch (error) {
    next(error);
  }
};

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    if (!projects) throw httpError(404, "Project not found");
    res.status(200).json({ data: projects });
  } catch (err) {
    next(err);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) throw httpError(404, "Project not found");
    res.status(200).json({ data: project });
  } catch (err) {
    next(err);
  }
};

//get project by title
const getProjectByTitle = async (req, res, next) => {
  try {
    const { title } = req.params;
    const project = await Project.findOne({ title });
    if (!project) throw httpError(404, "Project not found");
    res.status(200).json({ data: project });
  } catch (err) {
    next(err);
  }
};

const updateProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      place,
      socialService,
      modality,
      startDate,
      finishDate,
      shedule,
      moreInformation,
      careers,
    } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        place,
        socialService,
        modality,
        startDate,
        finishDate,
        shedule,
        moreInformation,
        careers,
      },
      { new: true }
    );
    if (!updatedProject) throw httpError(404, "Project not found");
    res.status(200).json({ message: "Project updated", data: updatedProject });
  } catch (err) {
    next(err);
  }
};

const deleteProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) throw httpError(404, "Project not found");
    res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  getProjectByTitle
};
