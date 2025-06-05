const Acesso = require('../models/Acesso')

module.exports = {
  async registrarEntrada(req, res) {
    try {
      const { visitanteId, unidadeId } = req.body

      const entrada = await Acesso.create({ visitanteId, unidadeId })
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
        order: [['dataEntrada', 'DESC']],
      })

      res.json(acessos)
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar acessos', details: err.message})
    }
  }
}