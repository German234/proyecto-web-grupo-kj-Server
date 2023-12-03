const debug = require("debug")("css-api:error");

const errorHandler = (err, req, res, next) => {
  debug(err);
  res.status(err.status || 500).json({ message: err.message });
};

module.exports = { errorHandler };
