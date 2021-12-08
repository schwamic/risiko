const wrapper = theme => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const info = theme => ({
  maxWidth: theme.spacing(80),
  marginBottom: theme.spacing(4)
})

export const styles = {
  info,
  wrapper
}
