const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Controle de Visitantes',
      version: '1.0.0',
      description: 'Documentação da API REST para controle de entrada e saída de visitantes em condomínios'
    }
  },
  apis: ['./src/routes/*.js'],
}

const specs = swaggerJsDoc(options)

module.exports = {
  swaggerUi,
  specs,
}