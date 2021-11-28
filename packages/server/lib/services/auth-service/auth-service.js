const jwt = require('jsonwebtoken')
const _ = require('lodash')
const config = require('@lib/common/config')
const { UnauthorizedError } = require('@lib/common/errors')
class AuthService {
  validateApiKey (request) {
    try {
      const key = _.get(request, 'headers.x-api-key')
      jwt.verify(key, config.JWT_SIGNATURE)
    } catch (error) {
      throw new UnauthorizedError('Access is denied due to invalid credentials')
    }
  }
}

module.exports = AuthService
