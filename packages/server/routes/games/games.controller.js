const { QueryService } = require('@lib/infrastructure/database')
const errors = require('@lib/common/errors')
const enums = require('@lib/common/enums')
const generateRandomNumber = require('@lib/utils/generate-random-number')

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
        await client.query(queryService.players.deleteManyOffline, [gameId])
      } else if (updatedGames[0].state === 'PLAYING') {
        const { rows: players } = await client.query(queryService.players.getMany, [gameId])
        let missions = enums.missions
        for (const player of players) {
          const key = generateRandomNumber(0, missions.length)
          const mission = missions[key]
          missions = missions.filter((mission, index) => key !== index)
          await client.query(queryService.players.updateOne, [player.state, mission, player.playerId, gameId])
        }
      }
      client.release()
      reply.send(updatedGames[0])
    } else {
      client.release()
      throw new errors.NotFoundError(`No game with gameId ${gameId} found!`)
    }
  }
})
