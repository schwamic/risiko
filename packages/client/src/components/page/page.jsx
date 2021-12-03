/** @jsxImportSource @emotion/react */
import { Container } from '@mui/material'
import { styles } from './page.styles'

function Page ({ children, ...props }) {
  return (
    <Container maxWidth='lg' css={styles.container} {...props}>
      {children}
    </Container>
  )
}

export default Page
