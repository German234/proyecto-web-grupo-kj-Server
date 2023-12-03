const { param, body } = require("express-validator");

const createTutorHoursValidator = [
    body("userMail").isString().withMessage("User Mail is required"),
    body("userName").isString().withMessage("User Name is required"),
    body("subject").isString().withMessage("Subject is required"),
    body("startedDate").isString().withMessage("Started Date is required"),
    body("finishedDate").isString().withMessage("Finished Date is required"),
    body("totalHours").isString().withMessage("Total Hours is required"),
    body("description").isString().withMessage("Description is required"),
    body("evidence").isString().withMessage("Evidence is required"),
];

module.exports = {
    createTutorHoursValidator
};