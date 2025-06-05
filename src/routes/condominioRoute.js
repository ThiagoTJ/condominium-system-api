const express = require('express')
const router = express.Router()
const CondominioController = require('../controllers/CondominioController')
const UnidadeController = require('../controllers/UnidadeController')

/**
 * @swagger
 * tags:
 *   name: Condomínios
 *   description: Endpoints para gerenciamento de condomínios
 */

/**
 * @swagger
 * /condominios:
 *   get:
 *     summary: Lista todos os condomínios
 *     tags: [Condomínios]
 *     responses:
 *       200:
 *         description: Lista de condomínios retornada com sucesso
 */
/**
 * @swagger
 * /condominios:
 *   post:
 *     summary: Cria um novo condomínio
 *     tags: [Condomínios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - endereco
 *             properties:
 *               nome:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       201:
 *         description: Condomínio criado com sucesso
 */
/**
 * @swagger
 * /condominios/{id}:
 *   put:
 *     summary: Atualiza um condomínio
 *     tags: [Condomínios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do condomínio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       200:
 *         description: Condomínio atualizado
 */
/**
 * @swagger
 * /condominios/{id}:
 *   delete:
 *     summary: Remove um condomínio
 *     tags: [Condomínios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do condomínio
 *     responses:
 *       200:
 *         description: Condomínio removido
 */
/**
 * @swagger
 * /condominios/{id}/unidades:
 *   get:
 *     summary: Lista todas as unidades de um condomínio específico
 *     tags:
 *       - Condomínios
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do condomínio
 *     responses:
 *       200:
 *         description: Lista de unidades retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   numero:
 *                     type: string
 *                   condominioId:
 *                     type: integer
 *       500:
 *         description: Erro ao buscar unidades
 */

router.get('/', CondominioController.listar)
router.get('/:id/unidades', CondominioController.listarUnidades)
router.post('/', CondominioController.criar)
router.put('/:id', CondominioController.atualizar)
router.delete('/:id', CondominioController.deletar)

module.exports = router