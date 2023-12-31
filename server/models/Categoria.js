const { sequelize, Sequelize } = require("../config/db");

const Categoria = sequelize.define("categorias", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Categoria;
