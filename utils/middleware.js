const logger = require("../utils/logs");

const requestLogs = (request, response, next) => {
  logger.info("url:", request.url);
  logger.info("method: ", request.method);
  logger.info("body: ", request.body);
  logger.info("time: ", new Date().toUTCString());
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(400).send({ message: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  next(error);
};

const middleware = { unknownEndpoint, requestLogs, errorHandler };

module.exports = middleware;
