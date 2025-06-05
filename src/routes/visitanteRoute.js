/**
 * @swagger
 * tags:
 *   name: Visitantes
 *   description: Gerenciamento de visitantes
 */

/**
 * @swagger
 * /visitantes:
 *   post:
 *     summary: Cadastrar um novo visitante
 *     tags: [Visitantes]
 *     requestBody:
 *       required: true
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
 *       201:
 *         description: Visitante criado com sucesso
 */

/**
 * @swagger
 * /visitantes:
 *   get:
 *     summary: Listar todos os visitantes
 *     tags: [Visitantes]
 *     responses:
 *       200:
 *         description: Lista de visitantes
 */

/**
 * @swagger
 * /visitantes/{id}:
 *   put:
 *     summary: Atualizar um visitante
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do visitante
 *     requestBody:
 *       required: true
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
 *       200:
 *         description: Visitante atualizado
 *       404:
 *         description: Visitante não encontrado
 */

/**
 * @swagger
 * /visitantes/{id}:
 *   delete:
 *     summary: Remover um visitante
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do visitante
 *     responses:
 *       204:
 *         description: Visitante removido
 *       404:
 *         description: Visitante não encontrado
 */

const express = require('express')
const VisitanteController = require('../controllers/VisitanteController')

const router = express.Router()

router.post('/', VisitanteController.create)
router.get('/', VisitanteController.index)
router.put('/:id', VisitanteController.update)
router.delete('/:id', VisitanteController.delete)

module.exports = router