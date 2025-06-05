const express = require('express')
const router = express.Router()
const AcessoController = require('../controllers/AcessoController')

/**
 * @swagger
 * tags:
 *   name: Acessos
 *   description: Endpoints para controle de entrada e saída de visitantes
 */

/**
 * @swagger
 * /acesso/entrada:
 *   post:
 *     summary: Libera a entrada de um visitante
 *     tags: [Acessos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - visitanteId
 *               - unidadeId
 *             properties:
 *               visitanteId:
 *                 type: integer
 *               unidadeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Entrada registrada
 */
/**
 * @swagger
 * /acesso/saida/{id}:
 *   patch:
 *     summary: Registra a saída de um visitante
 *     tags: [Acessos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Saída registrada
 */
/**
 * @swagger
 * /acesso/unidade/{unidadeId}:
 *   get:
 *     summary: Lista movimentações por unidade
 *     tags: [Acessos]
 *     parameters:
 *       - in: path
 *         name: unidadeId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de acessos
 */

router.post('/entrada', AcessoController.registrarEntrada)
router.patch('/saida/:id', AcessoController.registrarSaida)
router.get('/unidades/:unidadeId', AcessoController.listarPorUnidade)

module.exports = router