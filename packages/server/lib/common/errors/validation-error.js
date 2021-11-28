class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = 422
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = ValidationError
