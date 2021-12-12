class QueryService {
  get players () {
    return {
      getOne: 'SELECT * FROM players WHERE "playerId" = $1 AND "gameId" = $2',
      getMany: 'SELECT * FROM players WHERE "gameId" = $1',
      createOne: 'INSERT INTO players ("gameId", name, avatar, key, state) VALUES ($1, $2, $3, $4, \'ONLINE\') RETURNING *',
      updateMission: 'UPDATE players SET mission = $1 WHERE "playerId" = $2 AND "gameId" = $3 RETURNING *',
      updateState: 'UPDATE players SET state = $1 WHERE "playerId" = $2 AND "gameId" = $3 RETURNING *',
      deleteOne: 'DELETE FROM players WHERE "playerId" = $1 AND "gameId" = $2',
      deleteManyOffline: 'DELETE FROM players WHERE "gameId" = $1 AND state = \'OFFLINE\''
    }
  }

  get games () {
    return {
      getOneByName: 'SELECT * FROM games WHERE name = $1',
      getOneById: 'SELECT * FROM games WHERE "gameId" = $1',
      getMany: 'SELECT "gameId" FROM games WHERE name LIKE $1',
      createOne: 'INSERT INTO games (name, state) VALUES ($1, \'NEW_GAME\') RETURNING *',
      updateOne: 'UPDATE games SET state = $1 WHERE "gameId" = $2 RETURNING *',
      deleteOne: 'DELETE FROM games WHERE "gameId" = $1',
      deleteManyInactive: 'DELETE FROM games WHERE "updatedAt" < NOW() - INTERVAL \'7 days\''
    }
  }
}

module.exports = { QueryService }
