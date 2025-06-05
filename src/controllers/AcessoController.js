const Acesso = require('../models/Acesso')
const Condominio = require('../models/Condominio')
const Unidade = require('../models/Unidade')
const Visitante = require('../models/Visitante')

module.exports = {
  async registrarEntrada(req, res) {
    try {
      const { visitanteId, condominioId, unidadeId } = req.body

      const visitante = await Visitante.findByPk(visitanteId)
      const unidade = await Unidade.findByPk(unidadeId)
      const condominio = await Condominio.findByPk(condominioId)

      if (!visitante || !unidade || !condominio) {
        return res.status(404).json({ error: 'Visitante, unidade ou condomínio não encontrado' })
      }
      if(unidade.condominioId !== condominio.id) {
        return res.status(400).json({ error: 'Unidade não pertence ao condomínio informado' })
      }

      const entrada = await Acesso.create({ visitanteId, unidadeId, dataEntrada: new Date() })
      res.status(201).json(entrada)
    } catch (err) {
      res.status(500).json({ error: 'Erro ao registrar entrada', details: err.message })
    }
  },
  async registrarSaida(req, res) {
    try {
      const { id } = req.params

      const acesso = await Acesso.findByPk(id)
      if(!acesso) {
        return res.status(404).json({ error: 'Acesso não autorizado' })
      }
      acesso.dataSaida = new Date()
      await acesso.save()

      res.json({ message: 'Saída registrada com sucesso', acesso })
    } catch (err) {
      res.status(500).json({ error: 'Erro ao registrar saída', details: err.message})
    }
  },
  async listarPorUnidade(req, res) {
    try {
      const { unidadeId } = req.params

      const acessos = await Acesso.findAll({
        where: { unidadeId },
        include: [{ model: Visitante, attributes: ['id', 'nome'] }],
        order: [['dataEntrada', 'DESC']],
      })

      if(!acessos.length) {
        return res.status(404).json({ error: 'Nenhum acesso encontrado para esta unidade' })
      }

      res.json(acessos)
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar acessos', details: err.message})
    }
  }
}