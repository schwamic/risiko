import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { muiTheme } from './lib/config/material-ui'
import AppRouter from './router'

function App () {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
