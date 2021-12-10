const { QueryService } = require('@lib/infrastructure/database')
const errors = require('@lib/common/errors')
const enums = require('@lib/common/enums')
const { GameService } = require('@lib/services/game-service')

module.exports = function (fastify) {
  return {
    getOne: async function (request, reply) {
      const { name } = request.params
      const queryService = new QueryService()
      const client = await fastify.pg.connect()
      const { rows: games } = await client.query(queryService.games.getOneByName, [name])
      client.release()
      if (games.length > 0) {
        reply.send(games[0])
      } else {
        throw new errors.NotFoundError(`No game with name ${name} found!`)
      }
    },
    createOne: async function (request, reply) {
      let { name } = request.body
      const queryService = new QueryService()
      const client = await fastify.pg.connect()
      const { rows: games } = await client.query(queryService.games.getMany, [`%${name}%`])
      if (games.length > 0) {
        name = `${name}${games.length + 1}`
      }
      const { rows: createdGames } = await client.query(queryService.games.createOne, [name])
      client.release()
      reply.send(createdGames[0])
    },
    updateOne: async function (request, reply) {
      const { gameId } = request.params
      const { state } = request.body
      const queryService = new QueryService()
      const client = await fastify.pg.connect()
      const { rows: currentGames } = await client.query(queryService.games.getOneById, [gameId])
      if (currentGames.length > 0) {
        const { rows: updatedGames } = await client.query(queryService.games.updateOne, [state, gameId])
        const gameService = new GameService(client, queryService)
        if (updatedGames[0]?.state === enums.gameStates.new && currentGames[0]?.state !== enums.gameStates.new) {
          await client.query(queryService.players.deleteManyOffline, [gameId])
          await gameService.removeCards(gameId)
        } else if (updatedGames[0].state === enums.gameStates.play && currentGames[0].state !== enums.gameStates.play) {
          await gameService.dealCards(gameId)
        }
        client.release()
        reply.send(updatedGames[0])
      } else {
        client.release()
        throw new errors.NotFoundError(`No game with gameId ${gameId} found!`)
      }
    }
  }
}
