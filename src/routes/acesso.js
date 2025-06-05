const express = require('express')
const router = express.Router()

const { Acesso, Visitante, Unidade } = require('../models/associations')

router.post('/entrada', async (req, res) => {
  try {
    const { visitanteId, unidadeId } = req.body

    const visitante = await Visitante.findByPk(visitanteId)
    const unidade = await Unidade.findPK(unidadeId)

    if (!visitante || !unidade) {
      return res.status(404).json({ message: 'Visitante ou unidade não encontrada.' })
    }

    const entrada = await Acesso.create({
      visitanteId,
      unidadeId,
      dataEntrada: new Date(),
      dataSaida: null
    })

    res.status(201).json(entrada)
  } catch (error) {
    console.error('Error ao registrar entrada:', error)
    res.status(500).json({message: 'Erro interno ao registrar entrada.'})
  }
})

module.exports = router