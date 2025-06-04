require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./database')
const { swaggerUi, specs } = require('./swagger')

app.use(express.json())
app.use(routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

const PORT = process.env.PORT || 3000

db.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})