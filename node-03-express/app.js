const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Express");
});

app.use(express.static("public"));

app.get("/contacto", (req, res) => {
  res.send("Contacto");
});

app.get("/nosotros", (req, res) => {
  res.sendFile(__dirname + "/nosotros.html");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
