const enums = require('@lib/common/enums')
const schemas = require('./games.schemas')
const controller = require('./games.controller')

module.exports = {
  getOne: fastify => ({
    method: enums.httpMethods.GET,
    path: '/:name',
    schema: schemas.getOne,
    handler: controller(fastify).getOne
  }),
  createOne: fastify => ({
    method: enums.httpMethods.POST,
    path: '/',
    schema: schemas.createOne,
    handler: controller(fastify).createOne
  }),
  updateOne: fastify => ({
    method: enums.httpMethods.PATCH,
    path: '/:gameId',
    schema: schemas.updateOne,
    handler: controller(fastify).updateOne
  })
}
