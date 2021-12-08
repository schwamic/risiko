/** @jsxImportSource @emotion/react */
import { Button, Stack, Typography } from '@mui/material'
import { content } from './confirm-view.content'
import { styles } from './confirm-view.styles'

function ConfirmView ({ onConfirm, onCancel, ...props }) {
  return (
    <div css={styles.wrapper} {...props}>
      <Typography color='secondary' css={styles.info}>{content.info}</Typography>
      <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }}>
        <Button onClick={onConfirm} type='button' variant='contained' color='secondary' disableElevation>{content.buttons.confirm}</Button>
        <Button onClick={onCancel} type='button' variant='outlined' color='secondary' disableElevation>{content.buttons.cancel}</Button>
      </Stack>
    </div>
  )
}

export default ConfirmView
