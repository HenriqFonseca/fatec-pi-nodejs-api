const { sequelize, Sequelize } = require("../config/db");

const Endereco = sequelize.define("enderecos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true
  },
  rua: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Endereco;

