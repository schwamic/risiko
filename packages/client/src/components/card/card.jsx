/** @jsxImportSource @emotion/react */
import { styles } from './card.styles'

function Card ({ children, props }) {
  return (
    <div css={styles.container} {...props}>
      <div css={styles.background} />
      <div css={styles.foreground}>
        {children}
      </div>
    </div>
  )
}

export default Card
