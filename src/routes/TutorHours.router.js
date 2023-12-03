const express = require("express");
const router = express.Router();

const {
    createTutorHour,
    updateTutorHourByEmail,
    getTutorHourByEmail,
    getAllTutorHours,
    deleteTutorHourByEmail,
} = require("../controllers/TutorHours.controller");

const {
  createTutorHoursValidator
} = require("../validators/TutorHours.validator");

const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createTutorHoursValidator, runValidation, createTutorHour);
router.get("/", getAllTutorHours);
router.get("/:userMail", getTutorHourByEmail);
router.put("/:userMail", updateTutorHourByEmail);
router.delete("/:userMail", deleteTutorHourByEmail);

module.exports = router;
