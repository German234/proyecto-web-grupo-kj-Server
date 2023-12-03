const { param, body } = require("express-validator");

const createProjectValidator = [
  body("title").isString().withMessage("Name is required"),
  body("description").isString().withMessage("Description is required"),
  body("place").isString().withMessage("Place is required"),
  body("socialService").isString().withMessage("Social Service is required"),
  body("modality").isString().withMessage("Modality is required"),
  body("shedule").isString().withMessage("Shedule is required"),
  body("image").isString().withMessage("Image is required"),
  body("moreInformation")
    .isString()
    .withMessage("More Information is required"),
];

const updateProjectByIdValidator = [
  body("title").optional().isString().withMessage("Name is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description is required"),
  body("place").optional().isString().withMessage("Place is required"),
  body("socialService")
    .optional()
    .isString()
    .withMessage("Social Service is required"),
  body("modality").optional().isString().withMessage("Modality is required"),
  body("shedule").optional().isString().withMessage("Shedule is required"),
  body("moreInformation")
    .optional()
    .isString()
    .withMessage("More Information is required"),
];


const idInParams = [
  param("id")
    .notEmpty()
    .withMessage("id field is required")
    .isMongoId()
    .withMessage("id must be mongo id"),
];


module.exports = {
  idInParams,
  createProjectValidator,
  updateProjectByIdValidator,
};
