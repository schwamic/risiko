/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material'
import { styles } from './play-view.styles'

function PlayView ({ user, ...props }) {
  return (
    <div css={styles.wrapper} {...props}>
      <Typography css={styles.mission}>{user.mission}</Typography>
    </div>
  )
}

export default PlayView
