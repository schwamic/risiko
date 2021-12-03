/** @jsxImportSource @emotion/react */
import { Button, Typography } from '@mui/material'
import { content } from './wait-view.content'
import { styles } from './wait-view.styles'

function WaitView (props) {
  const handleClick = values => {
    console.log('values', values)
  }

  return (
    <div css={styles.wrapper} {...props}>
      <Typography css={styles.text}>{content.info}</Typography>
      <Button onClick={handleClick} type='button' variant='contained' color='primary' disableElevation>{content.buttons.start}</Button>
    </div>
  )
}

export default WaitView
