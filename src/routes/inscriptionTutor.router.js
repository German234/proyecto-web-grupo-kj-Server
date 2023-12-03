const express = require("express");
const router = express.Router();

const {
    createInscriptionTutor,
    getAllInscriptionsTutor,
    getInscriptionTutorByEmail,
    updateInscriptionTutorByEmail,
    deleteInscriptionTutorByEmail,
    } = require("../controllers/inscriptionTutor.controller");

const {
    createInscriptionTutorValidator,
    emailInParams,
    } = require("../validators/inscriptionTutor.validator");

const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createInscriptionTutorValidator, runValidation, createInscriptionTutor);
router.get("/", getAllInscriptionsTutor);
router.get("/:emailUser", emailInParams, runValidation, getInscriptionTutorByEmail);
router.put("/:emailUser", emailInParams, runValidation, updateInscriptionTutorByEmail);
router.delete("/:emailUser", emailInParams, runValidation, deleteInscriptionTutorByEmail);

module.exports = router;