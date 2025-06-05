require('dotenv').config()
require('./models/associations')

const express = require('express')
const app = express()

const routes = require('./routes')
const db = require('./database')

const sequelize = require('./database')
const acessoRoutes = require('./routes/acesso')
const visitanteRoutes = require('./routes/visitanteRoute')

const { swaggerUi, specs } = require('./swagger')

app.use(express.json())
app.use(routes)
app.use('/acesso', acessoRoutes)
app.use('/visitantes', visitanteRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

const PORT = process.env.PORT || 3000

db.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

sequelize.sync({alter: true})
  .then(() => console.log('Banco de dados sincronizado'))
  .catch(err => console.error('Error ao sincronizar banco:', err))