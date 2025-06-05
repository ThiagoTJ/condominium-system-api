/**
 * @swagger
 * tags:
 *   name: Visitantes
 *   description: Endpoints para gerenciamento de visitantes
 */
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
 *                 example: João Silva
 *               documento:
 *                 type: string
 *                 example: 123.456.789-00
 *               telefone:
 *                 type: string
 *                 example: (11) 98765-4321
 *     responses:
 *       201:
 *         description: Visitante criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 documento:
 *                   type: string
 *                 telefone:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Documento duplicado ou erro de validação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Erro ao criar visitante
 *                 details:
 *                   type: string
 *                   example: Já existe um visitante com esse documento.
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
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