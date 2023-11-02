const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Inicio");
});

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/contacto.html");
});

app.post("/contacto", (req, res) => {
  console.log(req.body);
  res.send("Procesando");
});

app.get("/usuarios", (req, res) => {
  //   res.sendFile(__dirname + "/data/users.json");

  const buffer = fs.readFileSync(__dirname + "/data/users.json");
  console.log(buffer);

  const array = JSON.parse(buffer);
  console.log(array);

  res.json(array);
});

// /productos/4?licencia=Star%20Wars&foto=true

app.get("/productos/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;

  console.log(req.query);
  const licencia = req.query.licencia;

  res.send({ id, licencia });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
