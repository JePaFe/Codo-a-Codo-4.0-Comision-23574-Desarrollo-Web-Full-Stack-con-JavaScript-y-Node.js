const { validationResult } = require("express-validator");

const model = require("../../models/Category");

const index = async (req, res) => {
  try {
    const categorias = await model.findAll();
    res.render("admin/categorias/index", { categorias });
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../../views/admin/create.ejs"));
  res.render("admin/categorias/create");
};

const store = async (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/categorias/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const categoria = await model.create(req.body);
    console.log(categoria);

    res.redirect("/admin/categorias");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  try {
    const categoria = await model.findByPk(req.params.id);
    console.log(categoria);

    if (categoria) {
      res.render("admin/categorias/edit", { values: categoria });
    } else {
      res.status(404).send("No existe el categoria");
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
    return res.render("admin/categorias/edit", {
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
      res.redirect("/admin/categorias");
    } else {
      res.status(400).send("No se actualizo el categoria");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const destroy = async (req, res) => {
  try {
    const destroyed = await model.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/admin/categorias");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
