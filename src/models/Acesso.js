const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Acesso = sequelize.define('Acesso', {
  visitanteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }, 
  unidadeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dataEntrada: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  dataSaida: {
    type: DataTypes.DATE,
    allowNull: true,
  }
})

module.exports = Acesso