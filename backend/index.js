const express = require("express");
const app = express();
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
