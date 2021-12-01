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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          fontWeight: 'bold',
          borderRadius: 15,
          padding: '8px 28px',
          fontSize: '1rem'
        },
        contained: {
          padding: '12px 24px'
        },
        outlined: {
          border: '4px solid',
          '&:hover': {
            border: '4px solid',
            backgroundColor: 'rgba(255, 255, 255, 0.15)'
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          paddingTop: 8,
          color: '#FFFFFF',
          '&::before': {
            borderBottom: '5px solid #FFFFFF'
          },
          '&::after': {
            borderBottom: '5px solid #FFFFFF'
          }
        }
      }
    }
  }
})
