const { QueryService } = require('@lib/infrastructure/database')
const enums = require('@lib/common/enums')

module.exports = function (fastify) {
  return {
    global: async function (connection, request) {
      const queryService = new QueryService()
      const client = await fastify.pg.connect()
      const data = request.query

      /**
       * Case: ONLINE
       */
      connection.socket.on('message', (_message) => {
        fastify.websocketServer.clients.forEach(client => {
          if (client.readyState === 1) {
            client.send(JSON.stringify({ ...data, type: 'message' }))
          }
        })
      })

      /**
       * Case: OFFLINE
       */
      connection.socket.on('close', async (message) => {
        await client.query(queryService.players.updateState, [enums.playerStates.offline, data.playerId, data.gameId])
        fastify.websocketServer.clients.forEach(client => {
          if (client.readyState === 1) {
            client.send(JSON.stringify({ ...data, type: 'close' }))
          }
        })
      })
    }
  }
}
