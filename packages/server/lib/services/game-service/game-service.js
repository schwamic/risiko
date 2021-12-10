const _ = require('lodash')
const enums = require('@lib/common/enums')
const generateRandomNumber = require('@lib/utils/generate-random-number')

class GameService {
  constructor (client, queryService) {
    this.client = client
    this.queryService = queryService
  }

  async dealCards (gameId) {
    let missions = enums.missions
    const { rows: players } = await this.client.query(this.queryService.players.getMany, [gameId])
    for (const player of players) {
      const key = generateRandomNumber(0, missions.length)
      const mission = missions[key]
      missions = missions.filter((mission, index) => key !== index)
      await this.client.query(this.queryService.players.updateMission, [mission, player.playerId, gameId])
    }
  }

  async dealCard (gameId, playerId) {
    const { rows: players } = await this.client.query(this.queryService.players.getMany, [gameId])
    const playerMissions = players.map(player => player.mission)
    const missions = enums.missions
    const availableMissions = _.difference(missions, playerMissions)
    const key = generateRandomNumber(0, availableMissions.length)
    const mission = missions[key]
    await this.client.query(this.queryService.players.updateMission, [mission, playerId, gameId])
  }
}

module.exports = GameService
