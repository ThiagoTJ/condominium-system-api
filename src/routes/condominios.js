// const express = require('express')
// const router = express.Router()
// const Condominio = require('../models/Condominio')
// const Unidade = require('../models/Unidade')

// /**
//  * @swagger
//  * tags:
//  *   name: Condomínios
//  *   description: Visualização de condomínios e unidades
//  */

// /**
//  * @swagger
//  * /condominios:
//  *   get:
//  *     summary: Lista todos os condomínios
//  *     tags: [Condomínios]
//  *     responses:
//  *       200:
//  *         description: Lista de condomínios
//  */
// router.get('/', async (req, res) => {
//   const condominios = await Condominio.findAll()
//   res.json(condominios)
// })

// /**
//  * @swagger
//  * /condominios/{id}/unidades:
//  *   get:
//  *     summary: Lista todas as unidades de um condomínio específico
//  *     tags: [Condomínios]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         description: ID do condomínio
//  *         required: true
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: Lista de unidades do condomínio
//  */
// router.get('/:id/unidades', async (req, res) => {
//   const unidades = await Unidade.findAll({ where: { condominioId: req.params.id }})
//   res.json(unidades)
// })

// /**
//  * @swagger
//  * /condominios/relacao/tudo:
//  *   get:
//  *     summary: Retorna todos os condomínios com suas unidades
//  *     tags: [Condomínios]
//  *     responses:
//  *       200:
//  *         description: Relação completa de condomínios e unidades
//  */
// router.get('/relacao/tudo', async (req, res) => {
//   const dados = await Condominio.findAll({ include: Unidade })
//   res.json(dados)
// })

// module.exports = router