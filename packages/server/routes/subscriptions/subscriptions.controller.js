const { QueryService } = require('@lib/infrastructure/database')
const enums = require('@lib/common/enums')

/**
 * Broadcasts an event to all clients.
 * To have something like "rooms" you have to handle the logic on our own.
 * E.g. create a "rooms" table in the database to save and sort all active clients.
 */
const _broadcast = (fastify, request, type) => {
  fastify.websocketServer.clients.forEach(function (client) {
    if (client.readyState === 1) {
      client.send(JSON.stringify({ ...request.query, type }))
    }
  })
}

module.exports = function (fastify) {
  return {
    global: function (connection, request) {
      /**
       * Case: ONLINE
       */
      connection.socket.on('message', function () {
        _broadcast(fastify, request, 'message')
      })

      /**
       * Case: OFFLINE
       */
      connection.socket.on('close', async function (message) {
        const queryService = new QueryService()
        const client = await fastify.pg.connect()
        await client.query(queryService.players.updateState, [enums.playerStates.offline, request.query.playerId, request.query.gameId])
        _broadcast(fastify, request, 'close')
        client.release()
      })
    }
  }
}
