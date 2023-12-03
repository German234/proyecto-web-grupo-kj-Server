const express = require("express");
const router = express.Router();

const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  getProjectByTitle
} = require("../controllers/project.controller");

const {
  idInParams,
  createProjectValidator,
  updateProjectByIdValidator,
} = require("../validators/project.validator");

const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createProjectValidator, runValidation, createProject);
router.get("/", getAllProjects);
router.get("/:id", idInParams, runValidation, getProjectById);
router.put(
  "/:id",
  updateProjectByIdValidator,
  runValidation,
  updateProjectById
);
router.delete("/:id", deleteProjectById);
router.get("/titulo/:title", getProjectByTitle);

module.exports = router;
