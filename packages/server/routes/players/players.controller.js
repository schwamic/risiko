const { QueryService } = require('@lib/infrastructure/database')

module.exports = fastify => ({
  getMany: async (request, reply) => {
    const gameId = request.params.gameId
    const queryService = new QueryService()
    const client = await fastify.pg.connect()
    const { rows: players } = await client.query(queryService.players.getMany, [gameId])
    client.release()
    reply.send(players)
  }
})
