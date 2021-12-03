const toast = theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  background: theme.palette.grey[200],
  borderRadius: 100
})

export const styles = {
  toast
}
