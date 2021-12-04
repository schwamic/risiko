
const jwt = require('jsonwebtoken')

const token = jwt.sign({ service: 'risk-missions-dealer' }, process.env.JWT_SIGNATURE)
console.log('X-API-KEY', token)
