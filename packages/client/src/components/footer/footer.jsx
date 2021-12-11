/** @jsxImportSource @emotion/react */
import { GitHub } from '@mui/icons-material'
import { Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { styles } from './footer.styles'
import { content } from './footer.content'

function Footer (props) {
  return (
    <div css={styles.wrapper} {...props}>
      <Typography variant='caption' color='primary' css={styles.linkContext}>
        <RouterLink to='/' css={styles.routerLink}>
          {content.home}
        </RouterLink>
      </Typography>
      <Typography variant='caption' color='primary' css={styles.linkContext}>
        <RouterLink to='/legal-notice' css={styles.routerLink}>
          {content.legals}
        </RouterLink>
      </Typography>
      <div>
        <Link
          color='primary'
          href={content.github.link}
          title={content.github.meta}
          aria-label={content.github.meta}
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHub />
        </Link>
      </div>
    </div>
  )
}

export default Footer
