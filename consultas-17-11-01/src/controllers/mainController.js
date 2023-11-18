const index = (req, res) => {
  const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
  ];
  res.render("inicio", { mensaje: "Hola EJS", productos });
};

module.exports = {
  index,
};
