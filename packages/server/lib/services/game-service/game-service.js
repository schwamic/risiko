const _ = require('lodash')
const CryptoJS = require('crypto-js')
const enums = require('@lib/common/enums')
const config = require('@lib/common/config')
const generateRandomNumber = require('@lib/utils/generate-random-number')

class GameService {
  constructor (client, queryService) {
    this.client = client
    this.queryService = queryService
  }

  async removeCards (gameId) {
    const { rows: players } = await this.client.query(this.queryService.players.getMany, [gameId])
    for (const player of players) {
      await this.client.query(this.queryService.players.updateMission, ['', player.playerId, gameId])
    }
  }

  async dealCards (gameId) {
    let missions = enums.missions
    const { rows: players } = await this.client.query(this.queryService.players.getMany, [gameId])
    for (const player of players) {
      const key = generateRandomNumber(0, missions.length)
      missions = missions.filter((mission, index) => key !== index)
      const mission = this._encryptMission(player, missions[key])
      await this.client.query(this.queryService.players.updateMission, [mission, player.playerId, gameId])
    }
  }

  async dealCard (gameId, player) {
    const { rows: players } = await this.client.query(this.queryService.players.getMany, [gameId])
    const playerMissions = players.map(player => this._decryptMission(player))
    const missions = enums.missions
    const availableMissions = _.difference(missions, playerMissions)
    const key = generateRandomNumber(0, availableMissions.length)
    const mission = this._encryptMission(player, missions[key])
    await this.client.query(this.queryService.players.updateMission, [mission, player.playerId, gameId])
  }

  _decryptMission (player) {
    const playerKeyBytes = CryptoJS.AES.decrypt(player.key, config.SERVER_KEY)
    const playerKey = playerKeyBytes.toString(CryptoJS.enc.Utf8)
    const missionBytes = CryptoJS.AES.decrypt(player.mission, playerKey)
    return missionBytes.toString(CryptoJS.enc.Utf8)
  }

  _encryptMission (player, mission) {
    const playerKeyBytes = CryptoJS.AES.decrypt(player.key, config.SERVER_KEY)
    const playerKey = playerKeyBytes.toString(CryptoJS.enc.Utf8)
    return CryptoJS.AES.encrypt(mission, playerKey).toString()
  }
}

module.exports = GameService
