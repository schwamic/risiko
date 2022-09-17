/**
 * This file provides all functions defined in api.js as React hooks.
 *
 * The hooks mainly do the following:
 * - Wrap the calls to api.js using the react-query library (useQuery, useMutation).
 * - Apply react-query options for each individual api endpoint.
 */
import { isNil } from 'lodash'
import { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import * as API from '../lib/utils/api'
import { print } from '../lib/utils/console'
import { getApiWebsocketEndpoint } from '../lib/utils/get-endpoint'

export const useGetPlayerApi = ({ params }) => {
  return useQuery(['player', params], API.getPlayer, {
    enabled: _isEnabled(params)
  })
}

export const useGetPlayersApi = ({ params }) => {
  return useQuery(['players', params], API.getPlayers, {
    enabled: _isEnabled(params)
  })
}

export const useCreatePlayerApi = (options) => {
  return useMutation(API.createPlayer, options)
}

export const useUpdatePlayerApi = (options) => {
  return useMutation(API.updatePlayer, options)
}

export const useGetGameApi = ({ params }) => {
  return useQuery(['game', params], API.getGame, {
    enabled: _isEnabled(params)
  })
}

export const useCreateGameApi = (options) => {
  return useMutation(API.createGame, options)
}

export const useUpdateGameApi = (options) => {
  return useMutation(API.updateGame, options)
}

/**
 * Subscription to keep client up to date
 */
export const useQuerySubscription = (callbacks, { playerId, gameId }) => {
  const [websocket, setWebsocket] = useState()
  const [isOpen, setOpen] = useState(false)
  const updatePlayer = useUpdatePlayerApi()

  useEffect(() => {
    let websocket
    if (!isNil(gameId) && !isNil(playerId)) {
      const url = getApiWebsocketEndpoint()
      websocket = new WebSocket(`${url}?gameId=${gameId}&playerId=${playerId}`)

      // First Connect
      websocket.onopen = () => {
        setPlayerOnline(gameId, playerId, websocket)
        setWebsocket(websocket)
        setOpen(true)
      }

      // Get Updates
      websocket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        if (parseInt(data.gameId) === gameId) {
          if (parseInt(data.playerId) === playerId && data.type === 'close') {
            setPlayerOnline(gameId, playerId, websocket)
          } else {
            print('[Triggered Refetch]', data)
            callbacks?.refetchGame()
            callbacks?.refetchPlayers()
            callbacks?.refetchPlayer()
          }
        } else {
          print('[Ignore Message]', data)
        }
      }

      // Connection lost or closed
      websocket.onclose = () => {
        setTimeout(function () {
          setWebsocket(null)
        }, 1000)
      }
    }

    return () => {
      websocket?.close()
      setOpen(false)
    }
  }, [gameId, playerId])

  const setPlayerOnline = async (gameId, playerId, websocket) => {
    await updatePlayer.mutateAsync({
      gameId,
      playerId,
      state: 'ONLINE'
    })
    websocket?.send('update')
  }

  const informAll = () => {
    if (isOpen) {
      websocket?.send('update')
    }
  }

  return { informAll }
}

/**
 * Checks if a query can be enabled based on the given params
 */
const _isEnabled = (params) => {
  return !!_objectHasTruthyValuesOnly(params)
}

/**
 * Checks if all values of the given object are truthy
 */
const _objectHasTruthyValuesOnly = (object) => Object.values(object).every((value) => !!value)
