require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const sequelize = require("./src/models/connect");

// const online = true;

// app.use((req, res, next) => {
//   if (online) {
//     next();
//   } else {
//     res.send("En mantenimiento");
//   }
// });

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

const adminProductosRoutes = require("./src/routes/admin/productosRoutes");
app.use("/admin/productos", adminProductosRoutes);
// app.use("/admin/productos", require("./src/routes/adminProductosRoutes"));

app.use((req, res, next) => {
  res.status(404).send("La pagina no existe");
});

const PORT = 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }

  console.log(`http://localhost:${PORT}`);
});
