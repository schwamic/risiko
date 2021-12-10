const enums = require('@lib/common/enums')
const schemas = require('./players.schemas')
const controller = require('./players.controller')

module.exports = {
  getOne: function (fastify) {
    return {
      method: enums.httpMethods.GET,
      path: '/:playerId',
      schema: schemas.getOne,
      handler: controller(fastify).getOne
    }
  },
  getMany: function (fastify) {
    return {
      method: enums.httpMethods.GET,
      path: '/',
      schema: schemas.getMany,
      handler: controller(fastify).getMany
    }
  },
  createOne: function (fastify) {
    return {
      method: enums.httpMethods.POST,
      path: '/',
      schema: schemas.createOne,
      handler: controller(fastify).createOne
    }
  },
  updateOne: function (fastify) {
    return {
      method: enums.httpMethods.PATCH,
      path: '/:playerId',
      schema: schemas.updateOne,
      handler: controller(fastify).updateOne
    }
  }
}
