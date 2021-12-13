const path = require('path')
const Fastify = require('fastify')
const autoload = require('fastify-autoload')
const FastifyCompress = require('fastify-compress')
const FastifyHelmet = require('fastify-helmet')
const FastifyCors = require('fastify-cors')
const FastifyPostgres = require('fastify-postgres')
const FastifyWebsocket = require('fastify-websocket')
const { fastifySchedulePlugin } = require('fastify-schedule')
const config = require('@lib/common/config')
const logger = require('@lib/utils/logger')
const jobs = require('./jobs')

const bootstrap = async function () {
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

  fastify.register(FastifyPostgres, config.DATABASE_USE_SSL
    ? {
        connectionString: config.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      }
    : {
        connectionString: config.DATABASE_URL
      }
  )

  fastify.register(FastifyWebsocket, {
    options: {
      clientTracking: true,
      maxPayload: 104857, // maximum allowed messages size: 0.1 MiB
      verifyClient: function (info, next) {
        try {
          const cookie = JSON.parse(decodeURIComponent(info.req.headers.cookie.split('risk_session=')[1]))
          const query = info.req.url.split('gameId=')[1].split('&playerId=')
          if (cookie.game.gameId === parseInt(query[0]) && cookie.player.playerId === parseInt(query[1])) {
            return next(true)
          } else {
            next(false)
          }
        } catch (error) {
          logger.error(error)
          next(false)
        }
      }
    }
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

  fastify.register(fastifySchedulePlugin)
  fastify.ready().then(() => {
    fastify.scheduler.addSimpleIntervalJob(jobs(fastify).cleanUpGames)
  })

  logger.info('Server is ready to start.')
  return fastify
}

module.exports = bootstrap
