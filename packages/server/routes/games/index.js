const gamesRoutes = require('./games.routes')

/**
 * API-Games-Plugin
 * Contains all the operations for resource games.
 */
module.exports = async function games (fastify) {
  // Every route inside this plugin is protected
  fastify.addHook('onRequest', fastify.authenticate)

  fastify.route(gamesRoutes.getOne(fastify))
  fastify.route(gamesRoutes.createOne(fastify))
  fastify.route(gamesRoutes.updateOne(fastify))
}

module.exports.autoPrefix = '/api/games'
