const Condominio = require('../models/Condominio')
const Unidade = require('../models/Unidade')

module.exports = {
  async listar(req, res) {
    try {
      const condominio = await Condominio.findAll()
      res.json(condominio)
    }catch (err) {
      res.status(500).json({ error: 'Error ao listar condomínios' })
    }
  },
  async listarUnidades(req, res) {
    try {
      const { id } = req.params
      const unidades = await Unidade.findAll({ where: { condominioId: id } })
      res.json(unidades)
    } catch (err) {
      res.status(500).json({ error: 'Error ao listar unidades' })
    }
  },
  async criar(req, res) {
    try {
      const { nome, endereco } = req.body
      const condominio = await Condominio.create({ nome, endereco })
      res.status(201).json(condominio)
    } catch (err) {
      res.status(500).json({ error: 'Error ao criar condomínios.' })
    }
  },
  async atualizar(req, res) {
    try {
      const { id } = req.params
      const { nome, endereco } = req.body

      const condominio = await Condominio.findByPk(id)
      if(!condominio) {
        return res.status(404).json({ error: 'Condomínio não encontrado' })
      }
      await condominio.update({ nome, endereco })
      res.json(condominio)
    }catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar condominio', details: err.message })
    }
  },
  async deletar(req, res) {
    try {
      const { id } = req.params
      const condominio = await Condominio.findByPk(id)
      if(!condominio) {
        return res.status(404).json({ error: 'Condomínio não encontrado' })
      }
      await condominio.destroy()
      res.json({ message: 'Condomínio removido com sucesso'})
    } catch (err) {
      res.status(500).json({ error: 'Erro ao deletar condomínio', details: err.message })
    }
  }
}