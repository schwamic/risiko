/** @jsxImportSource @emotion/react */
import { Grid, Typography } from '@mui/material'
import { ReactComponent as GhostImage } from '../../../lib/assets/ghost_1079732.svg'
import { Avatar } from '../../../components'
import { styles } from './players-list.styles'
import { content } from './players-list.content'

function PlayersList ({ players, ...props }) {
  return (
    <Grid container item spacing={5} justifyContent={{ xs: 'center', sm: 'start' }}>
      {players?.length > 0
        ? (
          <>
            {players.length > 0 && players.filter(player => player.state === 'offline').map((player) => (
              <Grid item key={player.id}>
                <Avatar user={player} fontVariant='body3' />
              </Grid>
            ))}
            {players.length > 0 && players.filter(player => player.state === 'online').map((player) => (
              <Grid item key={player.id}>
                <Avatar user={player} fontVariant='body3' />
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
