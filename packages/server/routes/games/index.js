const gamesRoutes = require('./games.routes')

/**
 * API-Games-Plugin
 * Contains all the operations for resource games.
 */
module.exports = async function games (fastify) {
  // Every route inside this plugin is protected
  fastify.addHook('onRequest', fastify.authenticate)

  fastify.route(gamesRoutes.get(fastify))
}

module.exports.autoPrefix = '/api/games'
