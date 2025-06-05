const Visitante = require('../models/Visitante')

module.exports = {
  async create(req, res) {
    try {
      const { nome, documento, telefone } = req.body
      const visitante = await Visitante.create({ nome, documento, telefone })
      return res.status(201).json(visitante)
    } catch (err) {
      return res.status(500).json({ error: 'Error ao criar visitante', details: err.message })
    }
  },
  async index(req, res) {
    try {
      const visitantes = await Visitante.findAll()
      return res.status(200).json(visitantes)
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar visitantes', details: err.message})
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { nome, documento, telefone } = req.body

      const visitante = await Visitante.findByPk(id)
      if(!visitante) { 
        return res.status(404).json({error: 'Visitante não encontrado'})
      }
      await visitante.update({ nome, documento, telefone })
      return res.status(200).json(visitante)
    } catch (err) {
      return res.status(500).json({ error: 'Error ao atualizar visitante', details: err.message})
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params

      const visitante = await Visitante.findByPk(id)
      if(!visitante) {
        return res.status(404).json({ error: 'Visitante não encontrado' })
      }
      await visitante.destroy()
      return res.status(204).send()
    }catch (err) {
      return res.status(500).json({ error: 'Erro ao deletar visitante', details: err.message })
    }
  }
}