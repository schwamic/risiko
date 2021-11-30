const container = {
  position: 'relative'
}

const card = theme => ({
  borderRadius: theme.spacing(4),
  minHeight: theme.spacing(36),
  width: '100%'
})

const background = theme => ({
  ...card(theme),
  backgroundColor: theme.palette.grey[200],
  transform: 'rotate(2.5deg)'
})

const foreground = theme => ({
  ...card(theme),
  position: 'absolute',
  backgroundColor: 'red',
  backgroundImage: `linear-gradient(to top right, ${theme.palette.red[200]}, ${theme.palette.red[100]})`,
  top: 0,
  left: 0
})

export const styles = {
  container,
  background,
  foreground
}
