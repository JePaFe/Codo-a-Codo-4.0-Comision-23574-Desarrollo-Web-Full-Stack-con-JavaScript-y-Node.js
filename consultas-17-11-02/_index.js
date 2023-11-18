const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/", async (req, res) => {
  //   setTimeout(() => {
  //     res.send("Hola");
  //   }, 10000);
  //   fs.readFileSync(path.join(__dirname, "Archivo.zip"));
  //   res.send("readFileSync");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await response.json();

    res.send(json);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get("/nosotros", (req, res) => {
  res.send("nosotros");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
