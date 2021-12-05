const { QueryService } = require('@lib/infrastructure/database')
const errors = require('@lib/common/errors')

module.exports = fastify => ({
  getOne: async (request, reply) => {
    const gameName = request.params.name
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: games } = await client.query(queryService.games.getOne, [gameName])
    client.release()
    if (games.length > 0) {
      reply.send(games[0])
    } else {
      throw new errors.NotFoundError(`No game with name ${gameName} found!`)
    }
  },
  createOne: async (request, reply) => {
    let gameName = request.body.name
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: games } = await client.query(queryService.games.getMany, [`%${gameName}%`])
    if (games.length > 0) {
      gameName = `${gameName}${games.length + 1}`
    }
    const { rows: newGame } = await client.query(queryService.games.createOne, [gameName])
    client.release()
    reply.send(newGame)
  },
  updateOne: async (request, reply) => {
    const gameId = request.params.gameId
    const gameState = request.body.state
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: updatedGames } = await client.query(queryService.games.updateOne, [gameState, gameId])
    if (updatedGames.length > 0) {
      if (updatedGames[0].state === 'NEW_GAME') {
        await client.query(queryService.players.deleteMany, [gameId])
      }
      client.release()
      reply.send(updatedGames[0])
    } else {
      client.release()
      throw new errors.NotFoundError(`No game with name ${gameId} found!`)
    }
  }
})
