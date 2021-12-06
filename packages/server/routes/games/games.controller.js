const { QueryService } = require('@lib/infrastructure/database')
const errors = require('@lib/common/errors')

module.exports = fastify => ({
  getOne: async (request, reply) => {
    const { name } = request.params
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: games } = await client.query(queryService.games.getOne, [name])
    client.release()
    if (games.length > 0) {
      reply.send(games[0])
    } else {
      throw new errors.NotFoundError(`No game with name ${name} found!`)
    }
  },
  createOne: async (request, reply) => {
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
  updateOne: async (request, reply) => {
    const { gameId } = request.params
    const { state } = request.body
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: updatedGames } = await client.query(queryService.games.updateOne, [state, gameId])
    if (updatedGames.length > 0) {
      if (updatedGames[0].state === 'NEW_GAME') {
        await client.query(queryService.players.deleteMany, [gameId])
      }
      client.release()
      reply.send(updatedGames[0])
    } else {
      client.release()
      throw new errors.NotFoundError(`No game with gameId ${gameId} found!`)
    }
  }
})
