/** @jsxImportSource @emotion/react */
import { Button, Grid, TextField } from '@mui/material'
import * as yup from 'yup'
import { Formik, Field, Form } from 'formik'
import { isNil } from 'lodash'
import Cookies from 'js-cookie'
import generateRandomWord from '../../../lib/utils/generate-random-word'
import { content } from './join-form.content'

const validationSchema = yup.object().shape({
  user: yup.string().min(3).required(content.form.error.user[0])
})

function JoinFrom ({ onJoin, ...props }) {
  const getPlayerName = () => {
    const session = Cookies.get('risk_session')
    if (!isNil(session)) {
      const data = JSON.parse(session)
      return data.player.name
    } else {
      return generateRandomWord(5, 8)
    }
  }

  return (
    <Formik
      initialValues={{
        user: getPlayerName()
      }}
      validationSchema={validationSchema}
      onSubmit={onJoin}
      {...props}
    >
      <Form>
        <Grid container spacing={5.5} justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={9}>
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
          <Grid container item xs={12} justifyContent='center' alignItems='center'>
            <Grid item>
              <Button type='submit' variant='contained' color='secondary' disableElevation>{content.buttons.join}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}

export default JoinFrom
