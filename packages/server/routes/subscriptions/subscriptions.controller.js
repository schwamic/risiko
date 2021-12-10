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
      connection.socket.on('message', async (_message) => {
        const message = Buffer.from(_message).toString()
        if (message === 'login') {
          await client.query(queryService.players.updateState, [enums.playerStates.online, data.playerId, data.gameId])
          console.log('LOGIN', data)
        }
        fastify.websocketServer.clients.forEach(client => {
          client.send(JSON.stringify(data))
        })
      })

      /**
       * Case: OFFLINE
       */
      connection.socket.on('close', async (message) => {
        await client.query(queryService.players.updateState, [enums.playerStates.offline, data.playerId, data.gameId])
        console.log('CLOSE', data)
        fastify.websocketServer.clients.forEach(client => {
          client.send(JSON.stringify(data))
        })
      })
    }
  }
}
