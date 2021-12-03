/** @jsxImportSource @emotion/react */
import { styles } from './card.styles'

function Card ({ children, color = 'red', props }) {
  return (
    <div css={styles.container} {...props}>
      <div css={styles.background} />
      <div css={styles[`foreground${color.charAt(0).toUpperCase() + color.slice(1)}`]}>
        {children}
      </div>
    </div>
  )
}

export default Card
