const logoWrapper = theme => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const logo = theme => ({
  width: '100%',
  maxWidth: theme.spacing(48),
  height: 'auto',
  marginTop: theme.spacing(4),
  marginBottom: `-${theme.spacing(4)}`
})

const title = theme => ({
  marginBottom: theme.spacing(6),
  maxWidth: theme.spacing(90),
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    marginLeft: theme.spacing(4)
  }
})

export const styles = {
  logoWrapper,
  logo,
  title
}
