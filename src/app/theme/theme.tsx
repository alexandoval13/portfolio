import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Lobster Two',
      fontSize: 200,
      fontWeight: 400,
      color: '#20124d',
    },
    h2: { fontFamily: 'Carlito' },
  },
  palette: {
    primary: {
      main: '#20124d',
    },
    secondary: {
      main: '#674ea7',
    },
  },
});

export default theme;
