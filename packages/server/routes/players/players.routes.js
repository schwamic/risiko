const enums = require('@lib/common/enums')
const schemas = require('./players.schemas')
const controller = require('./players.controller')

module.exports = {
  get: fastify => ({
    method: enums.httpMethods.GET,
    path: '/',
    schema: schemas.get,
    handler: controller.get
  })
}
