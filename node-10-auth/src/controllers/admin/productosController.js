const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

const model = require("../../models/Producto");

const index = async (req, res) => {
  try {
    const productos = await model.findAll();
    res.render("admin/index", { productos });
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../../views/admin/create.ejs"));
  res.render("admin/create");
};

const store = async (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const producto = await model.create(req.body);
    console.log(producto);

    if (req.file) {
      sharp(req.file.buffer)
        .resize(300)
        .toFile(
          path.resolve(
            __dirname,
            `../../../public/uploads/productos/producto_${producto.id}.jpg`
          )
        )
        .catch((err) => console.log(err));
    }

    res.redirect("/admin/productos");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  try {
    const producto = await model.findByPk(req.params.id);
    console.log(producto);

    if (producto) {
      res.render("admin/edit", { values: producto });
    } else {
      res.status(404).send("No existe el producto");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  console.log(req.params, req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/edit", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const affected = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affected[0] == 1) {
      if (req.file) {
        sharp(req.file.buffer)
          .resize(300)
          .toFile(
            path.resolve(
              __dirname,
              `../../../public/uploads/productos/producto_${req.params.id}.jpg`
            )
          )
          .catch((err) => console.log(err));
      }

      res.redirect("/admin/productos");
    } else {
      res.status(400).send("No se actualizo el producto");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const destroy = (req, res) => {
  console.log(req.params);
  res.send("Producto borrado");
};

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
