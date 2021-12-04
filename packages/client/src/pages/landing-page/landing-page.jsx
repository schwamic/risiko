/** @jsxImportSource @emotion/react */
import { Typography, Grid } from '@mui/material'
import RiskLogo from '../../lib/assets/risk_logo.png'
import { Footer, Card, Page } from '../../components'
import { CreateGameForm } from '../../containers/landing-page'
import useScrollTop from '../../hooks/useScrollTop'
import { content } from './landing-page.content'
import { styles } from './landing-page.styles'

function LandingPage () {
  useScrollTop()

  return (
    <Page>
      <Grid container spacing={10} justifyContent='center'>
        <Grid item xs={12} css={styles.logoWrapper}>
          <img css={styles.logo} src={RiskLogo} alt='Logo' />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h2' component='h1' css={styles.title}>{content.title} </Typography>
          <Card>
            <CreateGameForm />
          </Card>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={10}
          spacing={8}
          rowSpacing={{ xs: 4 }}
          justifyContent='center'
          alignItems='center'
        >
          {content.infos.map((item, index) => (
            <Grid item key={`info-${index}`} xs={12} sm={6}>
              <Typography variant='h3' component='h2'>{item.title}</Typography>
              <Typography variant='body2' css={styles.info}>{item.text}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </Page>
  )
}

export default LandingPage
