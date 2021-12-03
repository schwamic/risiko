const container = theme => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: {
    marginTop: theme.spacing(1)
  }
})

const responsive = theme => ({
  ...container(theme),
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    p: {
      marginRight: theme.spacing(2),
      marginTop: 0
    }
  }
})

const fixed = theme => ({
  ...container(theme)
})

const online = (theme) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.online.main,
    color: theme.palette.online.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.5)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1.5)',
      opacity: 0
    }
  }
})

const offline = (theme) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.offline.main,
    color: theme.palette.offline.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }
})

const monster = {
  height: '80%',
  width: 'auto',
  margin: '7px auto 0 auto'
}

export const styles = {
  online,
  offline,
  monster,
  responsive,
  fixed
}
