import { createTheme } from '@mui/material/styles';
import theme from './theme';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.color.app_primary
    },
    secondary: {
      main: theme.color.app_secondary
    },
    text: {
      primary: theme.color.text_primary,
      secondary: theme.color.text_secondary
    }
  },
  typography: {
    allVariants: {
      fontFamily: "'Gilroy', sans-serif",
      textTransform: 'none'
    }
  },

  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          transition: '0.3s ease-in-out all'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: theme.font.md,
          fontWeight: 500,
          '&:not(.Mui-error)': {
            '&.Mui-focused': {
              color: theme.color.app_primary_shade
            }
          },
          '.MuiFormLabel-asterisk': {
            color: theme.color.error_color
          }
        }
      }
    }
  }
});
export default muiTheme;
