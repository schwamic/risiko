const info = theme => ({
  display: 'flex',
  flexDirection: 'column',
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    flexDirection: 'row'
  }
})

const ghost = theme => ({
  height: '100px',
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    marginTop: '-20px'
  }
})

export const styles = {
  info,
  ghost
}
