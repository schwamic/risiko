const path = require('path')
const envSchema = require('env-schema')
const pjson = require('@root/package.json')

const schema = {
  type: 'object',
  properties: {
    NAME: { type: 'string', default: pjson.name },
    VERSION: { type: 'string', default: pjson.version },
    LOG_LEVEL: { type: 'string', default: 'info' },
    DISABLED_CORS: { type: 'boolean', default: false },
    JWT_SIGNATURE: { type: 'string' },
    DATABASE_URL: { type: 'string' },
    DATABASE_USE_SSL: { type: 'boolean', default: true }
  },
  required: [
    'JWT_SIGNATURE',
    'DATABASE_URL'
  ],
  additionalProperties: false
}

module.exports = envSchema({
  schema,
  dotenv: { path: path.resolve(process.cwd(), '.env') }
})
