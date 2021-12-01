const container = {
  position: 'relative',
  display: 'flex'
}

const card = theme => ({
  borderRadius: theme.spacing(4),
  minHeight: theme.spacing(36),
  width: '100%'
})

const background = theme => ({
  ...card(theme),
  height: '100%',
  backgroundColor: theme.palette.grey[200],
  transform: 'rotate(2.5deg)',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1
})

const foreground = theme => ({
  ...card(theme),
  backgroundColor: 'red',
  backgroundImage: `linear-gradient(to top right, ${theme.palette.red[200]}, ${theme.palette.red[100]})`,
  padding: theme.spacing(6.5),
  zIndex: 2
})

export const styles = {
  container,
  background,
  foreground
}
