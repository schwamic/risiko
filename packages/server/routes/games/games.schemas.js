const { ErrorSchema } = require('@lib/common/errors')
const enums = require('@lib/common/enums')

const GameResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', examples: ['id123456'], description: 'Identifier' },
    name: { type: 'string', examples: ['My Game'], description: 'Name of the game' },
    state: { type: 'string', examples: ['playing'], description: 'State of the game' },
    created_at: { type: 'string', format: 'date-time', description: 'Game created' },
    updated_at: { type: 'string', format: 'date-time', description: 'Last update' }
  },
  required: ['id', 'name', 'state', 'created_at', 'updated_at'],
  additionalProperties: false
}

const paramsSchema = {
  type: 'object',
  properties: {
    gameId: { type: 'string', examples: ['id123456'] }
  },
  required: ['gameId'],
  additionalProperties: false
}

module.exports = {
  get: {
    summary: 'Get a game',
    tags: ['Games'],
    params: paramsSchema,
    response: {
      200: {
        description: 'OK',
        ...GameResponseSchema
      },
      [enums.httpCodes.BadRequest]: {
        description: 'Bad Request',
        ...ErrorSchema
      },
      [enums.httpCodes.Unauthorized]: {
        description: 'Unauthorized',
        ...ErrorSchema
      },
      [enums.httpCodes.NotFound]: {
        description: 'Not Found',
        ...ErrorSchema
      },
      [enums.httpCodes.ValidationError]: {
        description: 'Invalid',
        ...ErrorSchema
      },
      [enums.httpCodes.InternalServerError]: {
        description: 'Error',
        ...ErrorSchema
      }
    }
  }
}
