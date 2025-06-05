const express = require('express')
const router = express.Router()
const UnidadeController = require('../controllers/UnidadeController')

/**
 * @swagger
 * tags:
 *   name: Unidades
 *   description: Endpoints para gerenciamento de unidades
 */

/**
 * @swagger
 * /unidades:
 *   post:
 *     summary: Cria uma nova unidade
 *     tags: [Unidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - numero
 *               - condominioId
 *             properties:
 *               numero:
 *                 type: string
 *               bloco:
 *                 type: string
 *               condominioId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Unidade criada com sucesso
 */
/**
 * @swagger
 * /unidades/{id}:
 *   put:
 *     summary: Atualiza uma unidade
 *     tags: [Unidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da unidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: string
 *               bloco:
 *                 type: string
 *     responses:
 *       200:
 *         description: Unidade atualizada com sucesso
 */
/**
 * @swagger
 * /unidades/{id}:
 *   delete:
 *     summary: Deleta uma unidade
 *     tags: [Unidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da unidade
 *     responses:
 *       200:
 *         description: Unidade removida com sucesso
 */

router.post('/', UnidadeController.criar)
router.put('/:id', UnidadeController.atualizar)
router.delete('/:id', UnidadeController.deletar)

module.exports = router