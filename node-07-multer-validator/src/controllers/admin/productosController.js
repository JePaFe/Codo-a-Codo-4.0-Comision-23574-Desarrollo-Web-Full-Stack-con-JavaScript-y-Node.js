const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

const index = (req, res) => {
  const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
  ];
  res.render("admin/productos", { mensaje: "Hola EJS", productos });
};

const create = (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../../views/admin/create.ejs"));
  res.render("admin/create");
};

const store = (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  if (req.file) {
    sharp(req.file.buffer)
      .resize(300)
      .toFile(path.resolve(__dirname, "../../../public/uploads/image.jpg"))
      .catch((err) => console.log(err));
  }

  res.send("Producto creado");
};

const update = (req, res) => {
  console.log(req.params, req.body);
  res.send("Producto modificado");
};

const destroy = (req, res) => {
  console.log(req.params);
  res.send("Producto borrado");
};

module.exports = {
  index,
  create,
  store,
  update,
  destroy,
};
