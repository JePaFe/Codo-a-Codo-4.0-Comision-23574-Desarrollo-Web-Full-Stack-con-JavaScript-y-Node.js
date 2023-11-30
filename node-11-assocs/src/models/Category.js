const { DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Category = sequelize.define("Category", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
