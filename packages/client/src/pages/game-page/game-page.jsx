/** @jsxImportSource @emotion/react */
import { Grid, Typography, Button } from '@mui/material'
import { Footer, Card, Page, Avatar } from '../../components'
import { GameLink, PlayersList } from '../../containers/game-page'
import { content } from './game-page.content'
import { styles } from './game-page.styles'

function GamePage () {
  const players = [
    {
      id: 'P5427',
      name: 'player1',
      state: 'online',
      avatar: '2465427'
    },
    {
      id: 'P5431',
      name: 'player2',
      state: 'online',
      avatar: '2465431'
    },
    {
      id: 'P5434',
      name: 'player3',
      state: 'offline',
      avatar: '2465434'
    }
  ]

  const game = {
    id: 'G9876',
    name: 'Eins Zwo Risiko veeeeeeerrrryyyyyy llllooooooooooooong!!!!!',
    state: 'new game'
  }

  const user = {
    id: 'P1234',
    name: 'schwamic',
    state: 'online',
    avatar: '2465429'
  }

  return (
    <Page>
      <Grid container spacing={10} justifyContent='center'>
        <Grid container item justifyContent='space-between' xs={12}>
          <Grid item xs={12} sm='auto'>
            <GameLink game={game} />
          </Grid>
          <Grid item xs={12} sm='auto'>
            <Avatar user={user} variant='responsive' css={styles.avatar} />
          </Grid>
        </Grid>

        {/* CARD */}
        <Grid container item spacing={5} xs={12}>
          <Grid item xs={12}>
            <Card color='blue'>
              <Typography color='secondary'>#join-game-form</Typography>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Button css={styles.button} type='button' variant='contained' color='primary' disableElevation>{content.action}</Button>
          </Grid>
        </Grid>

        {/* PLAYERS */}
        <Grid container item xs={12} spacing={2} justifyContent={{ xs: 'center', sm: 'start' }}>
          <Grid item>
            <Typography variant='h3'>Players</Typography>
          </Grid>
          <PlayersList players={players} css={styles.players} />
        </Grid>
      </Grid>
      <Footer />
    </Page>
  )
}

export default GamePage
