import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { styled, useTheme } from '@mui/material/styles';

// A custom theme for this app

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0276aa',
      light: '#03a9f4',
      dark: '#35baf6',
    },
    secondary: {
      main: '#9500ae',
      light: '#d500f9',
      dark: '#dd33fa',
    },
    error: {
      main: red.A400,
    },
    background: {
        default: 'orange', // Gradient background does not work
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;