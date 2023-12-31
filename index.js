require("dotenv").config();

const envconfig = require("./src/config/env.config");
const database = require("./src/config/db.config");
const mainRouter = require("./src/routes/main.router");
const { errorHandler } = require("./src/middlewares/error.middleware");
const express = require("express");
const debug = require("debug")("css-api:server");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1", mainRouter);

app.use("/", (req, res) => {
  res.send("Welcome to CSS API");
});

app.use(errorHandler);

const port = envconfig.PORT;

const startServer = () => {
  try {
    database.connect();

    app.listen(port, () => {
      debug(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
