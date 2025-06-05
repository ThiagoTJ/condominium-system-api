const Visitante = require('./Visitante')
const Condominio = require('./Condominio')
const Unidade = require('./Unidade')
const Acesso = require('./Acesso')

Condominio.hasMany(Unidade, { foreignKey: 'condominioId' })
Unidade.belongsTo(Condominio, { foreignKey: 'condominioId' })

Unidade.hasMany(Acesso, { foreignKey: 'unidadeId' })
Acesso.belongsTo(Unidade, { foreignKey: 'unidadeId' })

Visitante.hasMany(Acesso, { foreignKey: 'visitanteId' })
Acesso.belongsTo(Visitante, { foreignKey: 'visitanteId' })

module.exports = { Visitante, Condominio, Unidade, Acesso }