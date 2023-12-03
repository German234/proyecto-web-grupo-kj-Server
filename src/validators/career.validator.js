const { param, body } = require("express-validator");

const createCareerValidator = [
    body("name").isString().withMessage("El nombre es requerido"),
    body("colorTag").isString().withMessage("El color es requerido"),
];

const nameInParams = [
    param("name")
        .notEmpty()
        .withMessage("El nombre es requerido")
        .isString()
        .withMessage("El nombre debe ser una cadena"),
];

module.exports = {
    nameInParams,
    createCareerValidator,
};