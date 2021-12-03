/** @jsxImportSource @emotion/react */
import { Button, Stack, Typography } from '@mui/material'
import { content } from './new-game-view.content'
import { styles } from './new-game-view.styles'

function NewGameView (props) {
  const handleClick = values => {
    console.log('values', values)
  }

  return (
    <div css={styles.wrapper} {...props}>
      <Typography color='secondary' css={styles.info}>{content.info}</Typography>
      <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }}>
        <Button onClick={handleClick} type='button' variant='contained' color='secondary' disableElevation>{content.buttons.confirm}</Button>
        <Button onClick={handleClick} type='button' variant='outlined' color='secondary' disableElevation>{content.buttons.cancel}</Button>
      </Stack>
    </div>
  )
}

export default NewGameView
