const NotFoundError = require('./not-found-error')
const ValidationError = require('./validation-error')
const BadRequestError = require('./bad-request-error')
const UnauthorizedError = require('./unauthorized-error')

const ErrorSchema = {
  type: 'object',
  properties: {
    statusCode: { type: 'number' },
    name: { type: 'string' },
    message: { type: 'string' }
  }
}

module.exports = {
  NotFoundError,
  ValidationError,
  BadRequestError,
  UnauthorizedError,
  ErrorSchema
}
