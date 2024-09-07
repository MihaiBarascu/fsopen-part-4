const express = require("express");
const router = require("./controllers/blogs");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./utils/logs");
const config = require("./utils/config");
const middleware = require("./utils/middleware");

const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.use(middleware.requestLogs);
app.use("/api/blogs", router);

logger.info(`connecting to ${config.MONGO_URI}`);

mongoose
  .connect(config.MONGO_URI)
  .then(() => logger.info("connected on MongoDb"))
  .catch((error) => logger.error("Connection to mongodb failed", error));

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

module.exports = app;
