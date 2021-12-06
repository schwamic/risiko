const path = require('path')
const Fastify = require('fastify')
const autoload = require('fastify-autoload')
const FastifyCompress = require('fastify-compress')
const FastifyHelmet = require('fastify-helmet')
const FastifyCors = require('fastify-cors')
const FastifyPostgres = require('fastify-postgres')
const FastifyWebsocket = require('fastify-websocket')
const config = require('@lib/common/config')
const logger = require('@lib/utils/logger')

const bootstrap = async () => {
  logger.info('Setup server configuration.')
  const options = { ...config, logger }
  const fastify = Fastify(options)

  fastify.register(FastifyHelmet, { contentSecurityPolicy: false })
  fastify.register(FastifyCompress)
  fastify.register(FastifyCors, {
    allowedHeaders: [
      'Access-Control-Allow-Headers',
      'Origin',
      'Accept',
      'Accept-Encoding',
      'Accept-Language',
      'Content-Type',
      'Cache-Control',
      'x-requested-with',
      'x-api-key'
    ],
    origin: config.DISABLED_CORS ? '*' : [/risk-missions-dealer/],
    credentials: true
  })

  fastify.register(FastifyWebsocket)

  fastify.register(FastifyPostgres, {
    connectionString: config.DATABASE_URL,
    ssl: config.USE_SSL === 'true'
  })

  fastify.register(autoload, {
    dir: path.join(__dirname, '../plugins'),
    options: options
  })

  fastify.register(autoload, {
    dir: path.join(__dirname, '../routes'),
    maxDepth: 1,
    dirNameRoutePrefix: false,
    ignorePattern: /_.*.js/,
    options: options
  })

  logger.info('Server is ready to start.')
  return fastify
}

module.exports = bootstrap
