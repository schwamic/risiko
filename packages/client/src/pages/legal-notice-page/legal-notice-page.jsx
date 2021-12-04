/** @jsxImportSource @emotion/react */
import { Typography, Link, Stack } from '@mui/material'
import { Footer, Page } from '../../components'
import useScrollTop from '../../hooks/useScrollTop'
import { content } from './legal-notice-page.content'
import { styles } from './legal-notice-page.styles'
function LegalNoticePage () {
  useScrollTop()

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
            {content.legals[3].externals.map((item, key) => (
              <Typography key={`copyright-${key}`} color='secondary' variant='body2' component='div'>
                - {item.text[0]}
                <Link
                  color='secondary'
                  href={item.link}
                  title={item.meta}
                  aria-label={item.meta}
                  target='_blank'
                  rel='noopener noreferrer'
                >{item.text[1]}
                </Link>
              </Typography>
            ))}
          </div>
          <div>
            <Typography color='secondary' variant='h3' component='h2'>
              {content.legals[4].title}
            </Typography>
            <Typography color='secondary' variant='body2'>
              {content.legals[4].text}
            </Typography>
          </div>
        </Stack>
        <Footer />
      </Page>
    </div>
  )
}

export default LegalNoticePage
