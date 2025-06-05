const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Condominio = require('./Condominio')

const Unidade = sequelize.define('Unidade', {
  numero: { 
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  bloco: { 
    type: DataTypes.STRING,
    allowNull: true,
  },
  condominioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = Unidade