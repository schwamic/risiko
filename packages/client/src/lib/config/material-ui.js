import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

/**
 * Material UI Theme settings
 */
export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#02B7E5'
    },
    secondary: {
      main: '#E30613'
    },
    background: {
      default: '#EDEDED'
    },
    error: {
      main: '#E30613'
    },
    warning: {
      main: '#FFC109'
    },
    info: {
      main: '#02B7E5'
    },
    success: {
      main: '#00A569'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    lineHeight: 1.75,
    fontFamily: 'Muller, sans-serif',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.334,
      letterSpacing: '0em',
      textTransform: 'uppercase',
      marginBottom: '0.875rem'
    },
    h2: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: '0em',
      textTransform: 'uppercase',
      marginBottom: '0.875rem'
    },
    h3: {
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0em',
      textTransform: 'uppercase',
      marginBottom: '0.875rem'
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0em',
      textTransform: 'uppercase'
    }
  },
  shape: {
    borderRadius: 0
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#FFFFFF'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '0 20px 20px '
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '20px'
        }
      }
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: grey[900]
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.125rem',
          fontWeight: 700,
          color: grey[900],
          textTransform: 'uppercase'
        }
      }
    }
  }
})
