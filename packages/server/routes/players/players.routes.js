const enums = require('@lib/common/enums')
const schemas = require('./players.schemas')
const controller = require('./players.controller')

module.exports = {
  getMany: fastify => ({
    method: enums.httpMethods.GET,
    path: '/',
    schema: schemas.getMany,
    handler: controller(fastify).getMany
  })
}
