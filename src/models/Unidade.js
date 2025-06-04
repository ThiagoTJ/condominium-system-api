const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const Condominio = require('./Condominio')

const Unidade = sequelize.define('Unidade', {
  numero: DataTypes.STRING,
  bloco: DataTypes.STRING
})

Unidade.belongsTo(Condominio, { foreignKey: 'condominioId' })
Condominio.hasMany(Unidade, { foreignKey: 'condominioId' })

module.exports = Unidade