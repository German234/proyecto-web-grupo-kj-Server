const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:email", getUserByEmail);
router.put("/:email", updateUserByEmail);
router.delete("/:email", deleteUserByEmail);

module.exports = router;
