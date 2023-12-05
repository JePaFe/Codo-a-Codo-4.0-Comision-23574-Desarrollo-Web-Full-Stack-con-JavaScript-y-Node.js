const modelProduct = require("../models/Product");

const index = (req, res) => {
  res.render("inicio");
};

const shop = async (req, res) => {
  try {
    const productos = await modelProduct.findAll({
      include: "Category",
    });
    res.render("shop", { productos });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  index,
  shop,
};
