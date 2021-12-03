/** @jsxImportSource @emotion/react */
import { Avatar as MuiAvatar, Badge, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styles } from './avatar.styles'
import { monsters } from './monsters'

function Avatar ({ user, variant = 'fixed', fontVariant = 'body2', ...props }) {
  const renderMonster = () => {
    if (user.avatar) {
      const Monster = monsters[user.avatar]
      return (<Monster css={styles.monster} />)
    } else {
      return null
    }
  }

  return (
    <div css={styles[variant]} {...props}>
      <Badge overlap='circular' badgeContent=' ' css={styles[user.state]} {...props}>
        <MuiAvatar alt={user.name} sx={{ width: 60, height: 60, bgcolor: grey[200] }}>
          {renderMonster()}
        </MuiAvatar>
      </Badge>
      <Typography variant={fontVariant}>{user.name}</Typography>
    </div>
  )
}

export default Avatar
