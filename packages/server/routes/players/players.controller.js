const { QueryService } = require('@lib/infrastructure/database')
const errors = require('@lib/common/errors')
const enums = require('@lib/common/enums')
const generateRandomNumber = require('@lib/utils/generate-random-number')
const { GameService } = require('@lib/services/game-service')

module.exports = function (fastify) {
  return {
    getOne: async function (request, reply) {
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
    getMany: async function (request, reply) {
      const { gameId } = request.params
      const queryService = new QueryService()
      const client = await fastify.pg.connect()
      const { rows: players } = await client.query(queryService.players.getMany, [gameId])
      client.release()
      reply.send(players)
    },
    createOne: async function (request, reply) {
      const { gameId } = request.params
      let { name, key } = request.body
      const queryService = new QueryService()
      const client = await fastify.pg.connect()
      const { rows: games } = await client.query(queryService.games.getOneById, [gameId])
      if (games.length > 0) {
        const { rows: players } = await client.query(queryService.players.getMany, [gameId])
        const playersWithSameName = players.filter(player => player.name.includes(name))
        if (playersWithSameName.length > 0) {
          name = `${name}${playersWithSameName.length + 1}`
        }
        const avatar = enums.avatars[generateRandomNumber(0, enums.avatars.length)]
        const { rows: createdPlayers } = await client.query(queryService.players.createOne, [gameId, name, avatar, key])
        if (games[0].state === enums.gameStates.play) {
          const gameService = new GameService(client, queryService)
          await gameService.dealCard(gameId, createdPlayers[0].playerId)
        }
        client.release()
        reply.send(createdPlayers[0])
      } else {
        throw new errors.NotFoundError(`No Game with gameId ${gameId} found!`)
      }
    },
    updateOne: async function (request, reply) {
      const { gameId, playerId } = request.params
      const { state } = request.body
      const queryService = new QueryService()
      const client = await fastify.pg.connect()
      const { rows: updatedPlayers } = await client.query(queryService.players.updateState, [state, playerId, gameId])
      if (updatedPlayers.length > 0) {
        reply.send(updatedPlayers[0])
      } else {
        throw new errors.NotFoundError(`No player with playerId ${playerId} found!`)
      }
    }
  }
}
