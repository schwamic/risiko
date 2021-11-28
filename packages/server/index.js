require('module-alias/register')
const bootstrap = require('@loaders/fastify')
const logger = require('@lib/utils/logger')

const start = async function () {
  try {
    const fastify = await bootstrap()
    await fastify.listen(process.env.PORT ?? 8090, '0.0.0.0')
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
}

start()
