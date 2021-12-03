/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react'
import { Typography } from '@mui/material'
import { styles } from './toast.styles.js'

const Toast = forwardRef(({ message, ...props }, ref) => (
  <div css={styles.toast} ref={ref} {...props}>
    <Typography variant='body3'>{message}</Typography>
  </div>
))

export default Toast
