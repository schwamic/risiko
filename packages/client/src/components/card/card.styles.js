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
  padding: theme.spacing(6.5),
  zIndex: 2
})

const foregroundRed = theme => ({
  ...foreground(theme),
  backgroundColor: theme.palette.red[100],
  backgroundImage: `linear-gradient(to top right, ${theme.palette.red[200]}, ${theme.palette.red[100]})`
})

const foregroundBlue = theme => ({
  ...foreground(theme),
  backgroundColor: theme.palette.blue[100],
  backgroundImage: `linear-gradient(to top right, ${theme.palette.purple[100]}, ${theme.palette.blue[100]})`
})

const foregroundYellow = theme => ({
  ...foreground(theme),
  backgroundColor: theme.palette.yellow[100],
  backgroundImage: `linear-gradient(to top right, ${theme.palette.yellow[100]}, ${theme.palette.pink[100]})`
})

const foregroundGreen = theme => ({
  ...foreground(theme),
  backgroundColor: theme.palette.green[100],
  backgroundImage: `linear-gradient(to top right, ${theme.palette.cyan[100]}, ${theme.palette.green[100]})`
})

export const styles = {
  container,
  background,
  foregroundRed,
  foregroundBlue,
  foregroundYellow,
  foregroundGreen
}
