const enums = require('@lib/common/enums')
const schemas = require('./subscriptions.schemas')
const controller = require('./subscriptions.controller')

module.exports = {
  global: function (fastify) {
    return {
      method: enums.httpMethods.GET,
      path: '/',
      schema: schemas.global,
      handler: function (request, reply) {
        reply.code(enums.httpCodes.BadRequest).send({ message: 'please subscribe via websocket.' })
      },
      wsHandler: controller(fastify).global
    }
  }
}
