const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Visitante = sequelize.define('Visitante', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  documento:{ 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true, 
  },
  telefone: { 
    type: DataTypes.STRING 
  },
})

module.exports = Visitante