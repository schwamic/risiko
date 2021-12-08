const { QueryService } = require('@lib/infrastructure/database')
const errors = require('@lib/common/errors')
const enums = require('@lib/common/enums')
const generateRandomNumber = require('@lib/utils/generate-random-number')

module.exports = fastify => ({
  getOne: async (request, reply) => {
    const { playerId, gameId } = request.params
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: players } = await client.query(queryService.players.getOne, [playerId, gameId])
    client.release()
    if (players.length > 0) {
      reply.send(players[0])
    } else {
      throw new errors.NotFoundError(`No player with playerId ${playerId} found!`)
    }
  },
  getMany: async (request, reply) => {
    const { gameId } = request.params
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: players } = await client.query(queryService.players.getMany, [gameId])
    client.release()
    reply.send(players)
  },
  createOne: async (request, reply) => {
    const { gameId } = request.params
    let { name, key } = request.body
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: players } = await client.query(queryService.players.getMany, [gameId])
    const playersWithSameName = players.filter(player => player.name.includes(name))
    if (playersWithSameName.length > 0) {
      name = `${name}${playersWithSameName.length + 1}`
    }
    const avatar = enums.avatars[generateRandomNumber(0, enums.avatars.length)]
    const { rows: createdPlayers } = await client.query(queryService.players.createOne, [gameId, name, avatar, key])
    client.release()
    reply.send(createdPlayers[0])
  },
  updateOne: async (request, reply) => {
    const { gameId, playerId } = request.params
    const { state } = request.body
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: currentPlayers } = await client.query(queryService.players.getOne, [playerId, gameId])
    if (currentPlayers.length <= 0) {
      client.release()
      throw new errors.NotFoundError(`No player with playerId ${playerId} found!`)
    }
    const { rows: updatedPlayers } = await client.query(queryService.players.updateOne, [state, currentPlayers[0].mission, playerId, gameId])
    client.release()
    reply.send(updatedPlayers[0])
  }
})
