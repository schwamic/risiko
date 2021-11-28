const fp = require('fastify-plugin')
const Swagger = require('fastify-swagger')
const pjson = require('@root/package.json')

/**
 * SwaggerGenerator-Plugin
 * Dynamically generates the api documentation in OAS3.
 * It uses the schemas you declare in your routes to generate a swagger compliant doc.
 * Based on fastify-swagger
 */
async function swaggerGeneratorPlugin (fastify, _opts, done) {
  fastify.register(Swagger, {
    routePrefix: '/api/documentation',
    openapi: {
      info: {
        title: pjson.name,
        description: pjson.description,
        version: pjson.version
      },
      consumes: ['application/json'],
      produces: ['application/json'],
      components: {
        securitySchemes: {
          ApiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'x-api-key'
          }
        }
      },
      security: [{
        ApiKeyAuth: []
      }]
    },
    exposeRoute: true
  })

  done()
}

module.exports = fp(swaggerGeneratorPlugin, { name: 'swaggerGeneratorPlugin' })
