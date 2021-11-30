/** @jsxImportSource @emotion/react */
import { Container } from '@mui/material'
import { styles } from './page.styles'

export default function Page ({ children, ...props }) {
  return (
    <Container maxWidth='lg' css={styles.container} {...props}>
      {children}
    </Container>
  )
}
