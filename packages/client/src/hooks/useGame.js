import { useState, useEffect } from 'react'
import { isNil } from 'lodash'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useGetPlayerApi, useGetPlayersApi, useGetGameApi, useCreatePlayerApi, useUpdateGameApi } from './useApi'
import generateRandomWord from '../lib/utils/generate-random-word'
import enums from '../lib/common/enums'

function useGame () {
  const navigator = useNavigate()
  const [searchParams] = useSearchParams()
  const [playerId, setPlayerId] = useState()
  const [state, setState] = useState(enums.gameStates.loading)
  const { data: game, isError: isGameError } = useGetGameApi({ params: { name: searchParams.get('gameName') } })
  const { data: players } = useGetPlayersApi({ params: { gameId: game?.gameId } })
  const { data: player } = useGetPlayerApi({ params: { gameId: game?.gameId, playerId } })
  const createPlayer = useCreatePlayerApi({ onSuccess: value => setPlayerId(value.playerId) })
  const updateGame = useUpdateGameApi({ onSuccess: game => setState(game.state) })

  /**
   * State: Loading
   */
  useEffect(() => {
    const params = {}
    if (isNil(player) && !isNil(game)) {
      params.playerName = searchParams.get('playerName')
      if (!isNil(params.playerName)) {
        if (!isNil(players)) {
          // Variant 1: User entered a playerName
          joinPlayer(params.playerName)
        }
      } else {
        // Variant 2: No playerName
        setState(enums.gameStates.join)
      }
    } else {
      // Variant 3: No gameName
      params.gameName = searchParams.get('gameName')
      if (isNil(params.gameName) || isGameError) {
        navigator('/')
      }
    }
  }, [player, players, searchParams, game, isGameError])

  /**
   * State: After Loading
   */
  useEffect(() => {
    if (!isNil(player) && (state === enums.gameStates.join || state === enums.gameStates.loading)) {
      setState(game.state)
    }
  }, [player, game, state])

  /**
   * Game Sates
   */
  useEffect(() => {
    // TODO: react to online states
  }, [game])

  const joinPlayer = async (playerName) => {
    const matchedPlayer = players?.find(player => player.name === playerName)
    if (!isNil(matchedPlayer)) {
      // Variant 1: User joined the game in the past
      setPlayerId(matchedPlayer.playerId)
    } else {
      // Variant 2: User joins game the first time
      const key = generateRandomWord(12, 15)
      const player = await createPlayer.mutateAsync({
        gameId: game.gameId,
        name: playerName,
        key
      })
      Cookies.set('risk_session', JSON.stringify({ game, player: { ...player, key } }))
    }
  }

  const dealCards = () => {
    updateGame.mutate({
      gameId: game.gameId,
      state: enums.gameStates.play
    })
  }

  const startNewGame = () => {
    updateGame.mutate({
      gameId: game.gameId,
      state: enums.gameStates.new
    })
  }

  return {
    player,
    players,
    game,
    actions: { startNewGame, dealCards, joinPlayer },
    setState,
    state
  }
}

export default useGame
