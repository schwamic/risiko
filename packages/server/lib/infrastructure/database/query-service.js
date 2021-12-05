class QueryService {
  get players () {
    return {
      getOne: 'SELECT * FROM players WHERE "playerId" = $1',
      getMany: 'SELECT * FROM players WHERE "gameId" = $1',
      createOne: 'INSERT INTO players ("gameId", name, secret, avatar, state) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      updateOne: 'UPDATE players SET state = $1, mission = $2 WHERE "playerId" = $3 RETURNING *',
      deleteOne: 'DELETE FROM players WHERE "playerId" = $1',
      deleteMany: 'DELETE FROM players WHERE "gameId" = $1 AND state = \'OFFLINE\''
    }
  }

  get games () {
    return {
      getOne: 'SELECT * FROM games WHERE name = $1',
      getMany: 'SELECT "gameId" FROM games WHERE name LIKE $1',
      createOne: 'INSERT INTO games (name, state) VALUES ($1, \'NEW_GAME\') RETURNING *',
      updateOne: 'UPDATE games SET state = $1 WHERE "gameId" = $2 RETURNING *',
      deleteOne: 'DELETE FROM games WHERE "gameId" = $1'
    }
  }
}

module.exports = { QueryService }
