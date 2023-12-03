const httpError = require("http-errors");
const HoursTutor = require("../models/TutorHours.model");

// Create TutorHour
const createTutorHour = async (req, res, next) => {
    try {
        const {
            userMail,
            userName,
            subject,
            startedDate,
            finishedDate,
            totalHours,
            description,
            evidence,
        } = req.body;

        const newHoursTutor = new HoursTutor({
            userMail,
            userName,
            subject,
            startedDate,
            finishedDate,
            totalHours,
            description,
            evidence,
        });

        const createdTutorHour = await newHoursTutor.save();

        res.status(201).json(createdTutorHour);
    } catch (error) {
        next(error);
    }
};

// Update TutorHour by email
const updateTutorHourByEmail = async (req, res, next) => {
    try {
        const { userMail } = req.params;
        const { userName, subject, startedDate, finishedDate, totalHours, description, evidence } = req.body;

        const updatedTutorHour = await HoursTutor.findOneAndUpdate(
            { userMail },
            { userName, subject, startedDate, finishedDate, totalHours, description, evidence },
            { new: true }
        );

        if (!updatedTutorHour) {
            throw httpError(404, "TutorHour not found");
        }

        res.status(200).json(updatedTutorHour);
    } catch (error) {
        next(error);
    }
};

// Get TutorHour by email
const getTutorHourByEmail = async (req, res, next) => {
    try {
        const { userMail } = req.params;

        const hoursTutor = await HoursTutor.find({ userMail });

        if (!hoursTutor) {
            throw httpError(404, "TutorHour not found");
        }

        res.json(hoursTutor);
    } catch (error) {
        next(error);
    }
};

// Get all TutorHours
const getAllTutorHours = async (req, res, next) => {
    try {
        const hoursTutor = await HoursTutor.find({});

        res.json(hoursTutor);
    } catch (error) {
        next(error);
    }
};

// Delete TutorHour by email
const deleteTutorHourByEmail = async (req, res, next) => {
    try {
        const { userMail } = req.params;

        const deletedTutorHour = await HoursTutor.findOneAndDelete({ userMail });

        if (!deletedTutorHour) {
            throw httpError(404, "TutorHour not found");
        }

        res.status(200).json(deletedTutorHour);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createTutorHour,
    updateTutorHourByEmail,
    getTutorHourByEmail,
    getAllTutorHours,
    deleteTutorHourByEmail,
};
