import { getApiHttpsEndpoint } from '../utils/get-endpoint'

/**
 * Get data from an API endpoint
 *
 * @async
 * @param {string} path API path
 * @param {string} type Content-Type
 * @returns {Promise<object>} A promise that resolves with a json data object
 */
export const query = async (path) => {
  const url = getApiHttpsEndpoint()
  const response = await fetch(`${url}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.REACT_APP_API_KEY
    }
  })
  if (response.ok) {
    return response.json()
  } else {
    const error = await response.json()
    throw new Error(JSON.stringify(error))
  }
}

/**
 * Send data to an API endpoint using the POST method
 *
 * @async
 * @param {string} path API path
 * @param {object} body JSON object containing the data
 * @param {string} type Content-Type
 * @returns {Promise<object>} A promise that resolves with a JSON object
 */
export const mutation = async (path, body, method = 'POST') => {
  const url = getApiHttpsEndpoint()
  const response = await fetch(`${url}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify(body)
  })
  if (response.ok) {
    return response.json()
  } else {
    const error = await response.json()
    throw new Error(JSON.stringify(error))
  }
}
