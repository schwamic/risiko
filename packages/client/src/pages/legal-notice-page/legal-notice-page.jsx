/** @jsxImportSource @emotion/react */
import { Typography, Stack } from '@mui/material'
import { Footer, Page } from '../../components'
import { content } from './legal-notice-page.content'
import { styles } from './legal-notice-page.styles'

function LegalNoticePage () {
  return (
    <div css={styles.background}>
      <Page>
        <Stack spacing={5} css={styles.stack}>
          <div>
            <Typography color='secondary' variant='h2' component='h1'>
              {content.title}
            </Typography>
          </div>
          <div>
            <Typography color='secondary' variant='body2'>
              {content.legals[0].text}
            </Typography>
          </div>
          <div>
            <Typography color='secondary' variant='body2'>
              {content.legals[1].address.name}<br />
              {content.legals[1].address.street}<br />
              {content.legals[1].address.location}
            </Typography>
          </div>
          <div>
            <Typography color='secondary' variant='h3' component='h2'>
              {content.legals[2].title}
            </Typography>
            <Typography color='secondary' variant='body2'>
              {content.legals[2].phone}<br />
              {content.legals[2].email}
            </Typography>
          </div>
          <div>
            <Typography color='secondary' variant='h3' component='h2'>
              {content.legals[3].title}
            </Typography>
            <Typography color='secondary' variant='body2'>
              {content.legals[3].text}
            </Typography>
          </div>
        </Stack>
        <Footer />
      </Page>
    </div>
  )
}

export default LegalNoticePage
