/**
 * This file provides all functions defined in api.js as React hooks.
 *
 * The hooks mainly do the following:
 * - Wrap the calls to api.js using the react-query library (useQuery, useMutation).
 * - Apply react-query options for each individual api endpoint.
 */
import { useQuery, useMutation } from 'react-query'
import * as API from '../lib/utils/api'

export const useGetPlayerApi = ({ params }) => {
  return useQuery(['player', params], API.getPlayer, {
    enabled: isEnabled(params)
  })
}

export const useGetPlayersApi = ({ params }) => {
  return useQuery(['players', params], API.getPlayers, {
    enabled: isEnabled(params)
  })
}

export const useCreatePlayerApi = (options) => {
  return useMutation(API.createPlayer, options)
}

// export const useUpdatePlayerApi = (options) => {
//   return useMutation(API.updatePlayer, options)
// }

export const useGetGameApi = ({ params }) => {
  return useQuery(['game', params], API.getGame, {
    enabled: isEnabled(params)
  })
}

export const useCreateGameApi = (options) => {
  return useMutation(API.createGame, options)
}

export const useUpdateGameApi = (options) => {
  return useMutation(API.updateGame, options)
}

/**
 * Checks if a query can be enabled based on the given params
 *
 * @param {object} params The params that were passed to the hook
 * @returns {boolean} Indicates whether all required params are present
 */
const isEnabled = (params) => {
  return !!objectHasTruthyValuesOnly(params)
}

/**
  * Checks if all values of the given object are truthy
  *
  * @param {object} object The given object
  * @returns {boolean} Indicates whether all values of the given object are truthy
  */
const objectHasTruthyValuesOnly = (object) => Object.values(object).every((value) => !!value)
