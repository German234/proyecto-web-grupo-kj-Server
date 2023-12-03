const express = require("express");
const router = express.Router();

const projectsRouter = require("./project.router");
const usersRouter = require("./user.router");
const inscriptionsRouter = require("./inscription.router");
const careersRouter = require("./career.router");
const inscriptionTutorRouter = require("./inscriptionTutor.router");
const tutorHoursRouter = require("./TutorHours.router");


router.use("/project", projectsRouter);
router.use("/user", usersRouter);
router.use("/inscription", inscriptionsRouter);
router.use("/career", careersRouter);
router.use("/inscriptionTutor", inscriptionTutorRouter);
router.use("/tutorHours", tutorHoursRouter);

module.exports = router;
