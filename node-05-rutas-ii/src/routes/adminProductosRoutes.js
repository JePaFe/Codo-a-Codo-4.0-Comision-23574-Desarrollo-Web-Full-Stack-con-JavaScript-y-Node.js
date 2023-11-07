const express = require("express");
const router = express.Router();

// CRUD = Create, Read, Update, Delete

router.get("/", (req, res) => {
  res.send("Listado de Productos");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Producto creado");
});

router.put("/:id", (req, res) => {
  console.log(req.params, req.body);
  res.send("Producto modificado");
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  res.send("Producto borrado");
});

module.exports = router;
