/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { Footer, Card, Page, Avatar } from '../../components'
import { GameLink, PlayersList, JoinForm, PlayView, NewGameView, WaitView } from '../../containers/game-page'
import useScrollTop from '../../hooks/useScrollTop'
import { content } from './game-page.content'
import { styles } from './game-page.styles'

const states = {
  join: 'join',
  wait: 'wait',
  play: 'play',
  new: 'new'
}

function GamePage () {
  useScrollTop()
  const [state, setState] = useState(states.join)

  useEffect(() => {
    // set state
  }, [state])

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
    avatar: '2465429',
    mission: 'My secret mission.'
  }

  const renderCard = () => {
    return (
      <>
        {
        state === states.join
          ? <Card color='blue'><JoinForm /></Card>
          : state === states.wait
            ? <Card color='yellow'> <WaitView /> </Card>
            : state === states.play
              ? <Card color='green'> <PlayView user={user} /> </Card>
              : state === states.new
                ? <Card color='black'> <NewGameView /> </Card>
                : null
        }
      </>
    )
  }

  return (
    <Page>
      <Grid container spacing={10} justifyContent='center'>
        <Grid container item justifyContent='space-between' xs={12}>
          <Grid item xs={12} sm='auto'>
            <GameLink game={game} css={styles.gameLink} />
          </Grid>
          {state !== states.join && (
            <Grid item xs={12} sm='auto'>
              <Avatar user={user} variant='responsive' css={styles.avatar} />
            </Grid>
          )}
        </Grid>
        <Grid container item spacing={5} xs={12}>
          <Grid item xs={12}>
            {renderCard()}
          </Grid>
          {state !== states.join && (
            <Grid item xs={12}>
              <Button disabled={state === states.wait} css={styles.button} type='button' variant='contained' color='primary' disableElevation>{content.action}</Button>
            </Grid>
          )}
        </Grid>
        <Grid container item xs={12} spacing={2} justifyContent={{ xs: 'center', sm: 'start' }}>
          <Grid item>
            <Typography variant='h3' component='h2'>Players</Typography>
          </Grid>
          <PlayersList players={players} css={styles.players} />
        </Grid>
      </Grid>
      <Footer />
    </Page>
  )
}

export default GamePage
