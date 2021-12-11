/** @jsxImportSource @emotion/react */
import { isNil } from 'lodash'
import { Avatar as MuiAvatar, Badge, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styles } from './avatar.styles'
import { monsters } from './monsters'

function Avatar ({ player, variant = 'fixed', fontVariant = 'body2', ...props }) {
  const renderMonster = () => {
    if (!isNil(player?.avatar)) {
      const Monster = monsters[player.avatar]
      return (<Monster css={styles.monster} />)
    } else {
      return null
    }
  }

  return (
    <div css={styles[variant]} {...props}>
      <Badge overlap='circular' badgeContent=' ' css={styles[player.state.toLowerCase()]} {...props}>
        <MuiAvatar alt={player.name} sx={{ width: 60, height: 60, bgcolor: grey[200] }}>
          {renderMonster()}
        </MuiAvatar>
      </Badge>
      <Typography variant={fontVariant}>{player.name}</Typography>
    </div>
  )
}

export default Avatar
