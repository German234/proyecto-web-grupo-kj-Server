const { param, body } = require("express-validator");

const createInscriptionValidator = [
  body("emailUser").isString().withMessage("Email is required"),
  body("idProject").isString().withMessage("Project is required"),
  body("inscriptionHour")
    .isString()
    .withMessage("Inscription Hour is required"),
  body("userName").isString().withMessage("User Name is required"),
  body("projectName").isString().withMessage("Project Name is required"),
  body("status").isString().withMessage("Status is required"),
];

const emailInParams = [
  param("emailUser")
    .notEmpty()
    .withMessage("email field is required")
    .isEmail()
    .withMessage("email must be email"),
];

module.exports = {
  emailInParams,
  createInscriptionValidator,
};
