const enums = require('@lib/common/enums')
const schemas = require('./subscriptions.schemas')
const controller = require('./subscriptions.controller')

module.exports = {
  global: fastify => ({
    method: enums.httpMethods.GET,
    path: '/',
    schema: schemas.global,
    handler: function (req, reply) {
      reply.send({ message: 'please subscribe via websocket.' })
    },
    wsHandler: controller(fastify).global
  })
}
