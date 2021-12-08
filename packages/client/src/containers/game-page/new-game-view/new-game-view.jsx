/** @jsxImportSource @emotion/react */
import { Button, Typography } from '@mui/material'
import { content } from './new-game-view.content'
import { styles } from './new-game-view.styles'

function NewGameView ({ onDealCards, ...props }) {
  return (
    <div css={styles.wrapper} {...props}>
      <Typography css={styles.text}>{content.info}</Typography>
      <Button onClick={onDealCards} type='button' variant='contained' color='primary' disableElevation>{content.buttons.start}</Button>
    </div>
  )
}

export default NewGameView
