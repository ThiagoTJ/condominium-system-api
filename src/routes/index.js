const express = require('express')
const router = express.Router()

const visitanteRoutes = require('./visitanteRoute')
const condominioRoutes = require('./condominioRoute')

router.use('/visitantes', visitanteRoutes)
router.use('/condominios', condominioRoutes)

module.exports = router