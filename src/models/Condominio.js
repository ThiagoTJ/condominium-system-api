const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Condominio = sequelize.define('Condominio', {
  nome: DataTypes.STRING,
  endereco: DataTypes.STRING
})

module.exports = Condominio