const button = theme => ({
  display: 'block',
  margin: '0 auto',
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    margin: '0 0 0 auto'
  }
})

const avatar = theme => ({
  marginTop: theme.spacing(5),
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    marginTop: 0
  }
})

const gameLink = theme => ({
  marginBottom: theme.spacing(0.75)
})

export const styles = {
  avatar,
  button,
  gameLink
}
