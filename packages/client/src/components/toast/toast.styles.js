const toast = theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.secondary.main,
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  background: theme.palette.primary.main,
  borderRadius: 100
})

export const styles = {
  toast
}
