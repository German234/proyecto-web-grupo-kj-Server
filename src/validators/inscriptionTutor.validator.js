const { param, body } = require("express-validator");

const createInscriptionTutorValidator = [
    body("emailUser").isString().withMessage("Email is required"),
    body("userName").isString().withMessage("User Name is required"),
    body("subject").isString().withMessage("Subject is required"),
    body("faculty").isString().withMessage("Faculty is required"),
    body("careerYear").isString().withMessage("Career Year is required"),
    body("cum").isString().withMessage("Cum is required"),
    body("subjectNote").isString().withMessage("Subject Note is required"),
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
    createInscriptionTutorValidator,
};