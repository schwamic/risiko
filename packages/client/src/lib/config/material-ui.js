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
    offline: {
      main: '#777777'
    },
    online: {
      main: '#016ACB'
    },
    red: {
      100: '#D70C20',
      200: '#960110'
    },
    purple: {
      100: '#A269FF'
    },
    blue: {
      100: '#4DC9FF'
    },
    cyan: {
      100: '#53D6FF'
    },
    green: {
      100: '#B8F17F'
    },
    yellow: {
      100: '#FFEE53'
    },
    pink: {
      100: '#F17FC3'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '1.125rem'
    },
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
      letterSpacing: '0em'
    },
    body2: {
      fontSize: '1.5rem',
      fontWeight: 900,
      lineHeight: 1.2,
      letterSpacing: '0em'
    },
    body3: {
      fontSize: '1rem',
      fontWeight: 900,
      lineHeight: 1.4,
      letterSpacing: '0em'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 900,
      lineHeight: 1.4,
      letterSpacing: '0em'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          borderRadius: 15,
          padding: '6px 30px'
        },
        contained: {
          padding: '10px 26px'
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
          paddingTop: 8,
          color: '#FFFFFF',
          '&::before': {
            borderBottom: '4px solid #FFFFFF'
          },
          '&::after': {
            borderBottom: '4px solid #FFFFFF'
          }
        }
      }
    }
  }
})
