const express = require("express");
const router = express.Router();

const {
    createCareer,
    getAllCareers,
    getCareerByName,
    updateCareerByName,
    deleteCareerByName,
    } = require("../controllers/career.controller");

const {
    nameInParams,
    createCareerValidator,
    } = require("../validators/career.validator");

const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createCareerValidator, runValidation, createCareer);
router.get("/", getAllCareers);
router.get("/:name", nameInParams, runValidation, getCareerByName);
router.put("/:name", nameInParams, updateCareerByName);
router.delete("/:name", nameInParams, deleteCareerByName);

module.exports = router;