const path = require('path')
const FastifyStatic = require('fastify-static')
const fp = require('fastify-plugin')

/**
 * Client-Plugin
 * Serve static single-page app with routing support
 */
async function clientPlugin (fastify, _opts, done) {
  fastify.register(FastifyStatic, {
    root: path.join(__dirname, '../../client/build'),
    prefix: '/'
  })

  fastify.setNotFoundHandler((request, reply) => {
    if (request?.raw?.url?.startsWith('/api')) {
      return reply.status(404).send({
        success: false,
        error: { message: 'Not Found' }
      })
    }
    reply.status(200).sendFile('index.html', path.join(__dirname, '../../client/build'))
  })

  done()
}

module.exports = fp(clientPlugin, { name: 'clientPlugin' })
