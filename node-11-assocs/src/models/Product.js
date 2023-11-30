const { DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Category = require("./Category");

const Product = sequelize.define("Product", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

Product.belongsTo(Category);

module.exports = Product;
