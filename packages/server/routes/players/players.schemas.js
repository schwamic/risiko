const { ErrorSchema } = require('@lib/common/errors')
const enums = require('@lib/common/enums')

const PlayersResponseSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'string', examples: ['id123456'], description: 'Player identifier' },
      gameId: { type: 'string', examples: ['id123456'], description: 'Game identifier' },
      name: { type: 'string', examples: ['My Name'], description: 'Name of the player' },
      mission: { type: 'string', examples: ['My Missions'], description: 'Secret mission' },
      avatar: { type: 'string', examples: ['avatar.svg'], description: 'Avatar of the player' },
      created_at: { type: 'string', format: 'date-time', description: 'Player created' },
      updated_at: { type: 'string', format: 'date-time', description: 'Last ping' }
    },
    required: ['id', 'gameId', 'name', 'mission', 'avatar', 'created_at', 'updated_at'],
    additionalProperties: false
  }

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
    summary: 'Get a list of players',
    tags: ['Games'],
    params: paramsSchema,
    response: {
      [enums.httpCodes.OK]: {
        description: 'OK',
        ...PlayersResponseSchema
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
