const index = (req, res) => {
  const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
  ];
  res.render("admin/productos", { mensaje: "Hola EJS", productos });
};

const store = (req, res) => {
  console.log(req.body);
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
  store,
  update,
  destroy,
};
