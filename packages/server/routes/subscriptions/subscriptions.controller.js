const { QueryService } = require('@lib/infrastructure/database')
const enums = require('@lib/common/enums')

module.exports = function (fastify) {
  return {
    global: function (connection, request) {
      // const sessionPromise = request.getSession()

      /**
       * Case: ONLINE
       */
      connection.socket.on('message', function (_message) {
        fastify.websocketServer.clients.forEach(function (client) {
          if (client.readyState === 1) {
            client.send(JSON.stringify({ ...request.query, type: 'message' }))
          }
        })
      })

      /**
       * Case: OFFLINE
       */
      connection.socket.on('close', async function (message) {
        // await sessionPromise()
        const queryService = new QueryService()
        const client = await fastify.pg.connect()
        await client.query(queryService.players.updateState, [enums.playerStates.offline, request.query.playerId, request.query.gameId])
        fastify.websocketServer.clients.forEach(function (client) {
          if (client.readyState === 1) {
            client.send(JSON.stringify({ ...request.query, type: 'close' }))
          }
        })
      })
    }
  }
}
