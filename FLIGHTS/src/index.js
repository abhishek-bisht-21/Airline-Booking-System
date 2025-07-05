const express = require("express");
const { serverConfig, logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
  logger.info("Successfully started the server");
}); 