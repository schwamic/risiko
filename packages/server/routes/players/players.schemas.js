const { ErrorSchema } = require('@lib/common/errors')
const enums = require('@lib/common/enums')

const PublicPlayersSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      playerId: { type: 'number', examples: [42], description: 'Player identifier' },
      name: { type: 'string', examples: ['hiwug'], description: 'Name of the player' },
      avatar: { type: 'string', examples: ['123456'], description: 'Avatar of the player' },
      state: { type: 'string', examples: ['ONLINE'], description: 'State of the player' }
    },
    required: ['playerId', 'name', 'avatar', 'state'],
    additionalProperties: false
  }
}

const PlayerSchema = {
  type: 'object',
  properties: {
    playerId: { type: 'number', examples: [42], description: 'Player identifier' },
    gameId: { type: 'number', examples: [42], description: 'Game identifier' },
    name: { type: 'string', examples: ['hiwug'], description: 'Name of the player' },
    avatar: { type: 'string', examples: ['123456'], description: 'Avatar of the player' },
    state: { type: 'string', examples: ['ONLINE'], description: 'State of the player' },
    mission: { type: 'string', examples: ['secret mission.'], description: 'Secret mission' },
    createdAt: { type: 'string', format: 'date-time', description: 'Player created' },
    updatedAt: { type: 'string', format: 'date-time', description: 'Last updated' }
  },
  required: ['playerId', 'gameId', 'name', 'avatar', 'state', 'mission', 'createdAt', 'updatedAt'],
  additionalProperties: false
}

const GameIdSchema = {
  type: 'object',
  properties: {
    gameId: { type: 'number', examples: [42] }
  },
  required: ['gameId'],
  additionalProperties: false
}

const ErrorsSchema = {
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

module.exports = {
  getMany: {
    summary: 'Get a list of players',
    tags: ['Players'],
    params: GameIdSchema,
    response: {
      [enums.httpCodes.OK]: {
        description: 'OK',
        ...PublicPlayersSchema
      },
      ...ErrorsSchema
    }
  }
}
