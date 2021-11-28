
const jwt = require('jsonwebtoken')

const token = jwt.sign({ service: 'risk-missions-management' }, process.env.JWT_SIGNATURE)
console.log('X-API-KEY', token)
