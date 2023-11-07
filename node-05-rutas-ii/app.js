const express = require("express");
const app = express();
const methodOverride = require("method-override");

// const online = true;

// app.use((req, res, next) => {
//   if (online) {
//     next();
//   } else {
//     res.send("En mantenimiento");
//   }
// });

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

const adminProductosRoutes = require("./src/routes/adminProductosRoutes");
app.use("/admin/productos", adminProductosRoutes);
// app.use("/admin/productos", require("./src/routes/adminProductosRoutes"));

app.use((req, res, next) => {
  res.status(404).send("La pagina no existe");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
