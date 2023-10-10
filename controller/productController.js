const Product = require("../model/Product");

// const getProducts = async (req, res) => {
//   const products = await Product.find();
//   res.status(200).json(products);
// };

const getProducts = async (req, res) => {
  const searchTerm = req.query.name;
  var regexp = new RegExp("^" + searchTerm);

  //   const s = `/^${searchTerm}/`;
  //   console.log(s);

  const serachQuery = searchTerm ? { name: regexp } : {};
  const products = await Product.find(serachQuery);
  res.status(200).json(products);
};

const createProducts = (req, res) => {
  const body = req.body;
  console.log(body);

  const product = new Product({
    name: body.name,
    color: body.color,
  });
  product
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to save product");
    });
};

module.exports = {
  getProducts,
  createProducts,
};
