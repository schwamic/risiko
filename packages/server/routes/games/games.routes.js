const enums = require('@lib/common/enums')
const schemas = require('./games.schemas')
const controller = require('./games.controller')

module.exports = {
  get: fastify => ({
    method: enums.httpMethods.GET,
    path: '/:gameId',
    schema: schemas.get,
    handler: controller.get
  })
}
