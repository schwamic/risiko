/** @jsxImportSource @emotion/react */
import { Grid, Typography } from '@mui/material'
import { ReactComponent as GhostImage } from '../../../lib/assets/ghost_1079732.svg'
import enums from '../../../lib/common/enums'
import { Avatar } from '../../../components'
import { styles } from './players-list.styles'
import { content } from './players-list.content'

function PlayersList ({ players, player, ...props }) {
  const parsePlayers = (players, state) => {
    const playerId = player?.playerId
    return players.filter(player => player.state === state && player.playerId !== playerId)
  }

  return (
    <Grid container item spacing={5} justifyContent={{ xs: 'center', sm: 'start' }}>
      {players?.length > 1
        ? (
          <>
            {players.length > 0 && parsePlayers(players, enums.playerStates.offline).map((player) => (
              <Grid item key={player.playerId}>
                <Avatar player={player} fontVariant='body3' />
              </Grid>
            ))}
            {players.length > 0 && parsePlayers(players, enums.playerStates.online).map((player) => (
              <Grid item key={player.playerId}>
                <Avatar player={player} fontVariant='body3' />
              </Grid>
            ))}
          </>
          )
        : (
          <Grid item css={styles.info}>
            <Typography variant='body2'>{content.info}</Typography>
            <GhostImage css={styles.ghost} />
          </Grid>
          )}
    </Grid>
  )
}

export default PlayersList
