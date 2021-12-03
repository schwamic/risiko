/** @jsxImportSource @emotion/react */
import { Button, Grid, TextField } from '@mui/material'
import * as yup from 'yup'
import { Formik, Field, Form } from 'formik'
import { content } from './create-game-form.content'

const validationSchema = yup.object().shape({
  user: yup.string().required(content.form.error.user[0]),
  game: yup.string().required(content.form.error.user[0])
})

const initialValues = {
  user: '',
  game: ''
}

function CreateGameForm (props) {
  const handleSubmit = values => {
    console.log('values', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      {...props}
    >
      <Form>
        <Grid container spacing={5.5} justifyContent='center' alignItems='center'>
          <Grid item xs={12} sm={6} md={5}>
            <Field
              as={TextField}
              inputProps={{ maxLength: 40 }}
              fullWidth
              name='game'
              label={content.form.input.game}
              variant='standard'
              color='secondary'
              autoFocus
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
          <Grid container item spacing={4} xs={12} justifyContent='center' alignItems='center'>
            <Grid item>
              <Button type='submit' variant='contained' color='secondary' disableElevation>{content.buttons.create}</Button>
            </Grid>
            <Grid item>
              <Button type='submit' variant='outlined' color='secondary' disableElevation>{content.buttons.join}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}

export default CreateGameForm
