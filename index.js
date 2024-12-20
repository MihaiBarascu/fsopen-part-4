const logger = require("./utils/logs");
const config = require("./utils/config");
const app = require("./app");

app.listen(config.PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
});
