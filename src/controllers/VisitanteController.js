const { UniqueConstraintError, ValidationError } = require('sequelize')
const Visitante = require('../models/Visitante')

module.exports = {
  async create(req, res) {
    try {
      const { nome, documento, telefone } = req.body
      const visitante = await Visitante.create({ nome, documento, telefone })
      res.status(201).json(visitante)
    } catch (err) {
      if(err instanceof UniqueConstraintError) {
        return res.status(400).json({
          error: 'Erro ao criar visitante',
          details: 'Já existe um visitante com esse documento.'
        })
      }
      if(err instanceof ValidationError) {
        return res.status(400).json({
          error: 'Erro de validação',
          details: err.errors.map(e => e.message)
        })
      }
      res.status(500).json({ error: 'Error ao criar visitante', details: err.message })
    }
  },
  async index(req, res) {
    try {
      const visitantes = await Visitante.findAll()
      res.status(200).json(visitantes)
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar visitantes', details: err.message})
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
      res.status(200).json(visitante)
    } catch (err) {
      res.status(500).json({ error: 'Error ao atualizar visitante', details: err.message})
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
      res.status(204).send()
    }catch (err) {
      res.status(500).json({ error: 'Erro ao deletar visitante', details: err.message })
    }
  }
}