import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { muiTheme } from './lib/config/material-ui'
import AppRouter from './router'

const queryClient = new QueryClient()

function App () {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
