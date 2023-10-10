const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();
const productsRoute = require("./routes/product");

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("failed to connect to db");
  });

app.use(cors());

app.use(express.json());

app.use("/products", productsRoute);

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
