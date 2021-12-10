/**
 * This file contains API-related functions.
 * Each of these functions calls an endpoint of the "risk-missions-dealer" API.
 */
import { query, mutation } from './requests'

export const getPlayer = async ({ queryKey }) => {
  const [, { gameId, playerId }] = queryKey
  return await query(`/games/${gameId}/players/${playerId}`)
}

export const getPlayers = async ({ queryKey }) => {
  const [, { gameId }] = queryKey
  return await query(`/games/${gameId}/players`)
}

export const createPlayer = async ({ gameId, ...values }) => {
  return await mutation(`/games/${gameId}/players`, values)
}

export const updatePlayer = async ({ gameId, ...values }) => {
  return await mutation(`/games/${gameId}/players/${values.playerId}`, values, 'PATCH')
}

export const getGame = async ({ queryKey }) => {
  const [, { name }] = queryKey
  return await query(`/games/${name}`)
}

export const createGame = async (values) => {
  return await mutation('/games', values)
}

export const updateGame = async ({ gameId, ...values }) => {
  return await mutation(`/games/${gameId}`, values, 'PATCH')
}
