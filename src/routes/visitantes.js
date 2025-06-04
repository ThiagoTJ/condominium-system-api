const express = require('express')
const router = express.Router()
const Visitante = require('../models/Visitante')

/**
 * @swagger
 * /visitantes:
 *   post:
 *     summary: Cadastra um novo visitante
 *     tags: [Visitantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - documento
 *             properties:
 *               nome:
 *                 type: string
 *               documento:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Visitante criado com sucesso
 */
router.post('/', async (req, res) => {
  const visitante = await Visitante.create(req.body)
  res.json(visitante)
})

/**
 * @swagger
 * tags:
 *   name: Visitantes
 *   description: Gerenciamento de visitantes
 */

/**
 * @swagger
 * /visitantes:
 *   get:
 *     summary: Lista todos os visitantes
 *     tags: [Visitantes]
 *     responses:
 *       200:
 *         description: Lista de visitantes
 */
router.get('/', async (req, res) => {
  const visitantes = await Visitante.findAll()
  res.json(visitantes)
})

/**
 * @swagger
 * /visitantes/{id}:
 *   put:
 *     summary: Atualiza os dados de um visitante
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               documento:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       204:
 *         description: Visitante atualizado com sucesso
 */
router.put('/:id', async (req, res) => {
  const {id} = req.params
  await Visitante.update(req.body, { where: { id } })
  res.sendStatus(204)
})

/**
 * @swagger
 * /visitantes/{id}:
 *   delete:
 *     summary: Remove um visitante
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Visitante removido com sucesso
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Visitante.destroy({ where: { id } })
  res.sendStatus(204)
})

module.exports = router