const { SimpleIntervalJob, AsyncTask } = require('toad-scheduler')
const { QueryService } = require('@lib/infrastructure/database')
const logger = require('@lib/utils/logger')

module.exports = function (fastify) {
  return {
    cleanUpGames: new SimpleIntervalJob({ days: 7, runImmediately: true }, new AsyncTask(
      'JOB: Clean Up Games',
      async function () {
        const queryService = new QueryService()
        const client = await fastify.pg.connect()
        await client.query(queryService.games.deleteManyInactive)
        client.release()
      },
      function (error) { logger.error(error) }
    ))
  }
}
