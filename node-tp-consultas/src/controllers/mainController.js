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

const addCart = (req, res) => {
  if (!req.session.cart) {
    const cart = {
      items: [],
    };

    req.session.cart = cart;
  }

  console.log(req.session.cart.items);

  const index = req.session.cart.items.findIndex(
    (item) => item.id == req.params.id
  );

  if (index != -1) {
    req.session.cart.items[index].cantidad++;
  } else {
    req.session.cart.items.push({ id: req.params.id, cantidad: 1 });
  }

  // delete req.session.cart
  // req.session.cart = null;

  console.log(req.params.id, req.session.cart?.items);
  res.send("Cart add");
};

module.exports = {
  index,
  shop,
  addCart,
};
