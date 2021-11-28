const fp = require('fastify-plugin')
const { AuthService } = require('@lib/services/auth-service')

/**
 * Authentication-Plugin
 * Handles api-key validation
 */
async function authenticationPlugin (fastify, _opts, done) {
  const authService = new AuthService()
  fastify.decorate('authenticate', async req => authService.validateApiKey(req))
  done()
}

module.exports = fp(authenticationPlugin, { name: 'authenticationPlugin' })
