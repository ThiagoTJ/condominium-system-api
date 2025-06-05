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
 *     summary: Libera a entrada de um visitante em uma unidade de um condomínio
 *     tags:
 *       - Acessos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - visitanteId
 *               - condominioId
 *               - unidadeId
 *             properties:
 *               visitanteId:
 *                 type: integer
 *               condominioId:
 *                 type: integer
 *               unidadeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Acesso registrado
 *       400:
 *         description: Dados inválidos ou relação inconsistente
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
 * /acesso/unidades/{unidadeId}:
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
 *       404:
 *         description: Unidade não encontrada
 */

router.post('/entrada', AcessoController.registrarEntrada)
router.patch('/saida/:id', AcessoController.registrarSaida)
router.get('/unidades/:unidadeId', AcessoController.listarPorUnidade)

module.exports = router