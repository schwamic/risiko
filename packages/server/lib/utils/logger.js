const pino = require('pino')
const config = require('@lib/common/config')

const logger = pino({
  timestamp: true,
  level: config.LOG_LEVEL
})

module.exports = logger
