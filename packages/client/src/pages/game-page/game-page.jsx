/** @jsxImportSource @emotion/react */
import { Grid, Typography, Button } from '@mui/material'
import { isNil } from 'lodash'
import { useBeforeunload } from 'react-beforeunload'
import { Footer, Card, Page, Avatar } from '../../components'
import { GameLink, PlayersList, JoinForm, PlayingView, NewGameView, ConfirmView } from '../../containers/game-page'
import enums from '../../lib/common/enums'
import useScrollTop from '../../hooks/useScrollTop'
import useGame from '../../hooks/useGame'
import { content } from './game-page.content'
import { styles } from './game-page.styles'

function GamePage () {
  useScrollTop()
  useBeforeunload((event) => { if (!isNil(game)) event.preventDefault() })
  const { game, player, players, state, setState, actions } = useGame()

  const handleCancel = () => {
    setState(enums.gameStates.play)
  }

  const handleNewGame = () => {
    setState(enums.gameStates.confirm)
  }

  const renderCard = () => {
    return (
      <>
        {
        state === enums.gameStates.join
          ? <Card color='blue'><JoinForm onJoin={({ user }) => actions.joinPlayer(user)} /></Card>
          : state === enums.gameStates.new
            ? <Card color='yellow'> <NewGameView onDealCards={() => actions.dealCards()} /> </Card>
            : state === enums.gameStates.play
              ? <Card color='green'> <PlayingView player={player} /> </Card>
              : state === enums.gameStates.confirm
                ? <Card color='black'> <ConfirmView onConfirm={() => actions.startNewGame()} onCancel={handleCancel} /> </Card>
                : null
        }
      </>
    )
  }

  return (
    <Page>
      <>
        {!isNil(game) && state !== enums.gameStates.loading
          ? (
            <Grid container spacing={10} justifyContent='center'>
              <Grid container item justifyContent='space-between' xs={12}>
                <Grid item xs={12} sm='auto'>
                  <GameLink game={game} css={styles.gameLink} />
                </Grid>
                {state !== enums.gameStates.join && (
                  <Grid item xs={12} sm='auto'>
                    {!isNil(player) && <Avatar user={player} variant='responsive' css={styles.avatar} />}
                  </Grid>
                )}
              </Grid>
              <Grid container item spacing={5} xs={12}>
                <Grid item xs={12}>
                  {renderCard()}
                </Grid>
                {state !== enums.gameStates.join && (
                  <Grid item xs={12}>
                    <Button onClick={handleNewGame} disabled={state === enums.gameStates.new} css={styles.button} type='button' variant='contained' color='primary' disableElevation>{content.action}</Button>
                  </Grid>
                )}
              </Grid>
              <Grid container item xs={12} spacing={2} justifyContent={{ xs: 'center', sm: 'start' }}>
                <Grid item>
                  <Typography variant='h3' component='h2'>Players</Typography>
                </Grid>
                {!isNil(players) && (
                  <PlayersList players={players} css={styles.players} />
                )}
              </Grid>
            </Grid>
            )
          : <> ...loading </>}
        <Footer />
      </>
    </Page>
  )
}

export default GamePage
