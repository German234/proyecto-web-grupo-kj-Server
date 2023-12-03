const { validationResult } = require("express-validator");
const debug = require("debug")("css-api:validator");

const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    debug(errors);
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { runValidation };
