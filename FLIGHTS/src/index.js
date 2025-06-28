const express = require("express");
const config = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use('/api', apiRoutes)

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});