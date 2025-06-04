const express = require('express')
const router = express.Router()

const visitanteRoutes = require('./visitantes')
const condominioRoutes = require('./condominios')

router.use('/visitantes', visitanteRoutes)
router.use('/condominios', condominioRoutes)

module.exports = router