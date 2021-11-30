import { createTheme } from '@mui/material/styles'

/**
 * Material UI Theme settings
 */
export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#232229'
    },
    secondary: {
      main: '#FFFFFF'
    },
    red: {
      100: '#D70C20',
      200: '#960110'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 900,
      lineHeight: 1.05,
      letterSpacing: '0em',
      marginBottom: '0.875rem'
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 900,
      lineHeight: 1.05,
      letterSpacing: '0em',
      marginBottom: '0.875rem'
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '0em',
      marginBottom: '0.875rem'
    },
    body1: {
      fontSize: '2.25rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '0em',
      marginBottom: '0.875rem'
    },
    body2: {
      fontSize: '1.5rem',
      fontWeight: 900,
      lineHeight: 1.2,
      letterSpacing: '0em',
      marginBottom: '0.875rem'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 900,
      lineHeight: 1.4,
      letterSpacing: '0em',
      marginBottom: '0.875rem'
    }
  },
  components: {}
})
