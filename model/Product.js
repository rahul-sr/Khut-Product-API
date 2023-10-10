const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  color: String,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
