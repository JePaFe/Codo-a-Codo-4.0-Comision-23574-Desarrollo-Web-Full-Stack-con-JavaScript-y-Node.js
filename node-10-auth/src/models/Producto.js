const { DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Producto = sequelize.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

(async () => {
  await sequelize.sync();
})();

module.exports = Producto;
