const { sequelize, Sequelize } = require("../config/db");

const Relatorio = sequelize.define("relatorios", {
  maisVendCategoria: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ticketMedio:{
    type: Sequelize.DOUBLE
  },
  qtdPedidosRealizados:{
    type: Sequelize.INTEGER
  },
  qtdPedidosIncompletos:{
    type: Sequelize.INTEGER
  },
  qtdPedidosFinalizados:{
    type: Sequelize.INTEGER
  }
});

module.exports = Relatorio;
