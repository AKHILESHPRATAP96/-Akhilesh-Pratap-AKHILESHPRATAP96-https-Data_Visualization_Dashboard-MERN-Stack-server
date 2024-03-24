const express = require("express");
require("dotenv").config();
const reportRouter = require("./src/Routes/index");
const mongoDB = require("./src/DatabaseConnection/index");
const cors = require("cors");
const app = express();

let PORT = process.env.PORT || 8000;
app.use(cors());

app.use(express.json());
app.use("/api", reportRouter);

mongoDB();

app.listen(PORT, () => {
  console.log("app is listening on port ", PORT);
});
