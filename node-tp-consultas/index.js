require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const sequelize = require("./src/models/connect");

// const session = require("express-session");
const session = require("cookie-session");

// app.use(
//   session({
//     secret: "S3cr3t01",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(
  session({
    keys: ["S3cr3t01", "S3cr3t02"],
  })
);

const isLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  next();
};

// const online = true;

// app.use((req, res, next) => {
//   if (online) {
//     next();
//   } else {
//     res.send("En mantenimiento");
//   }
// });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(require("./src/routes/authRoutes"));

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

const adminCategoriasRoutes = require("./src/routes/admin/categoriasRoutes");
app.use("/admin/categorias", isLogin, adminCategoriasRoutes);

const adminProductosRoutes = require("./src/routes/admin/productosRoutes");
app.use("/admin/productos", isLogin, adminProductosRoutes);
// app.use("/admin/productos", require("./src/routes/adminProductosRoutes"));

app.use((req, res, next) => {
  res.status(404).send("La pagina no existe");
});

const PORT = 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }

  console.log(`http://localhost:${PORT}`);
});
