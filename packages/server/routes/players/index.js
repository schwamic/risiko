const playersRoutes = require('./players.routes')

/**
 * API-Players-Plugin
 * Contains all the operations for resource players.
 */
module.exports = async function players (fastify) {
  // Every route inside this plugin is protected
  fastify.addHook('onRequest', fastify.authenticate)

  fastify.route(playersRoutes.getOne(fastify))
  fastify.route(playersRoutes.getMany(fastify))
  fastify.route(playersRoutes.createOne(fastify))
}

module.exports.autoPrefix = '/api/games/:gameId/players'
