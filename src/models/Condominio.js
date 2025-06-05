const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Condominio = sequelize.define('Condominio', {
  nome: { 
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  endereco: { 
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Condominio