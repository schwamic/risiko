/** @jsxImportSource @emotion/react */
import { Button, Grid, Stack, TextField } from '@mui/material'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'
import generateRandomWord from '../../../lib/utils/generate-random-word'
import { content } from './create-game-form.content'
import { styles } from './create-game-form.styles'
import { useCreateGameApi } from '../../../hooks/useApi'

const validationSchema = yup.object().shape({
  user: yup.string().required(content.form.error.user[0]),
  game: yup.string().required(content.form.error.user[0])
})

function CreateGameForm (props) {
  const createGame = useCreateGameApi()
  const navigate = useNavigate()

  const handleSubmit = async values => {
    if (document.activeElement.dataset.flag === 'create') {
      const game = await createGame.mutateAsync({ name: values.game })
      navigate({ pathname: './game', search: '?' + createSearchParams({ gameName: game.name, playerName: values.user }) })
    } else if (document.activeElement.dataset.flag === 'join') {
      navigate({ pathname: './game', search: '?' + createSearchParams({ gameName: values.game, playerName: values.user }) })
    } else {
      window.alert(content.alert)
    }
  }

  return (
    <Formik
      initialValues={{
        user: generateRandomWord(5, 8),
        game: generateRandomWord(8, 10)
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      {...props}
    >
      <Form>
        <Grid container spacing={5.5} justifyContent='center' alignItems='center'>
          <Grid item xs={12} sm={6} md={5}>
            <Field
              as={TextField}
              inputProps={{ maxLength: 20 }}
              fullWidth
              name='game'
              label={content.form.input.game}
              variant='standard'
              color='secondary'
              focused
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Field
              as={TextField}
              inputProps={{ maxLength: 8 }}
              fullWidth
              name='user'
              label={content.form.input.user}
              variant='standard'
              color='secondary'
              focused
            />
          </Grid>
          <Grid item xs={12} css={styles.buttons}>
            <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }}>
              <Button type='submit' data-flag='create' variant='contained' color='secondary' disableElevation>{content.buttons.create}</Button>
              <Button type='submit' data-flag='join' variant='outlined' color='secondary' disableElevation>{content.buttons.join}</Button>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}

export default CreateGameForm
