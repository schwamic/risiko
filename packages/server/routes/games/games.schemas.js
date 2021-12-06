const { ErrorSchema } = require('@lib/common/errors')
const enums = require('@lib/common/enums')

const GameSchema = {
  type: 'object',
  properties: {
    gameId: { type: 'number', examples: [42], description: 'Identifier' },
    name: { type: 'string', examples: ['My foxadamu'], description: 'Name of the game' },
    state: { type: 'string', examples: ['PLAYING'], description: 'State of the game' },
    createdAt: { type: 'string', format: 'date-time', description: 'Game created' },
    updatedAt: { type: 'string', format: 'date-time', description: 'Last update' }
  },
  required: ['gameId', 'name', 'state', 'createdAt', 'updatedAt'],
  additionalProperties: false
}

const UpdateGameSchema = {
  type: 'object',
  properties: {
    state: { type: 'string', examples: ['PLAYING'] }
  },
  required: ['state'],
  additionalProperties: false
}

const GameNameSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', examples: ['foxadamu'] }
  },
  required: ['name'],
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
  getOne: {
    summary: 'Get a game',
    tags: ['Games'],
    params: GameNameSchema,
    response: {
      [enums.httpCodes.OK]: {
        description: 'OK',
        ...GameSchema
      },
      ...ErrorsSchema
    }
  },
  createOne: {
    summary: 'Create a game',
    tags: ['Games'],
    body: GameNameSchema,
    response: {
      [enums.httpCodes.OK]: {
        description: 'OK',
        ...GameSchema
      },
      ...ErrorsSchema
    }
  },
  updateOne: {
    summary: 'Update a game',
    tags: ['Games'],
    params: GameIdSchema,
    body: UpdateGameSchema,
    response: {
      [enums.httpCodes.OK]: {
        description: 'OK',
        ...GameSchema
      },
      ...ErrorsSchema
    }
  }
}
