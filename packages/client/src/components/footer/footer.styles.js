const wrapper = theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(12)
})

const linkContext = theme => ({
  display: 'inline-block',
  marginBottom: 0,
  marginRight: theme.spacing(2)
})

const routerLink = theme => ({
  color: theme.palette.primary.main
})

export const styles = {
  wrapper,
  linkContext,
  routerLink
}
