const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Unidade = sequelize.define('Unidade', {
  numero: { 
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  bloco: { 
    type: DataTypes.STRING 
  }
})

module.exports = Unidade