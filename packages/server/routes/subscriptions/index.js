const subscriptionRoutes = require('./subscriptions.routes')

/**
 * API-Subscriptions-Plugin
 */
module.exports = async function subscription (fastify) {
  fastify.route(subscriptionRoutes.global(fastify))
}

module.exports.autoPrefix = '/api/subscriptions'
