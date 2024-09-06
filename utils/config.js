require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const PORT = process.env.PORT;

const config = { MONGO_URI, PORT };

module.exports = config;
