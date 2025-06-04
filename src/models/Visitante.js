const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Visitante = sequelize.define('Visitante', {
  nome: DataTypes.STRING,
  documento: DataTypes.STRING,
  telefone: DataTypes.STRING
})

module.exports = Visitante