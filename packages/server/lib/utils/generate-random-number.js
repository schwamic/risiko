/**
 * Random number: including min and excluding max
 */
function generateRandomNumber (min, max) {
  return Math.floor(min + Math.random() * (max - min))
}

module.exports = generateRandomNumber
