const express = require("express");
const router = express.Router();

const {
  createInscription,
  getAllInscriptions,
  getInscriptionByEmail,
  updateInscriptionByEmail,
  deleteInscriptionByEmail,
  updateInscriptionById,
} = require("../controllers/inscription.controller");

const {
  createInscriptionValidator,
  emailInParams,
} = require("../validators/inscription.validator");
const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createInscriptionValidator, runValidation, createInscription);
router.get("/", getAllInscriptions);
router.get("/:emailUser", emailInParams, runValidation, getInscriptionByEmail);
router.put("/:emailUser", emailInParams, updateInscriptionByEmail);
router.delete("/:emailUser", deleteInscriptionByEmail);
router.put("/update/:id", updateInscriptionById);

module.exports = router;
