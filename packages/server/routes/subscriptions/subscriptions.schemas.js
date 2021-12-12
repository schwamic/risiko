
const QuerySchema = {
  type: 'object',
  properties: {
    gameId: { type: 'number', examples: [42] },
    playerId: { type: 'number', examples: [42] }
  },
  required: ['gameId', 'playerId'],
  additionalProperties: false
}

module.exports = {
  global: {
    tags: ['Subscriptions'],
    summary: 'Connect to global subscription',
    description: 'Notification as soon as something changes in the game',
    query: QuerySchema
  }
}
