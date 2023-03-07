import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
     components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          boxShadow: '0px 1px 4px #15223214',
          borderRadius: '6px',
        },
      },
    },
  },
    palette: {
        primary: {
            main: '#12409F',
            contrastText:"#ffffff"
        },
        secondary: {
            main: '#edf2ff',
        },
        background:{
            default:"#F4F7FC"

        },
        text:{
            primary:"#1D2129",
            secondary:"#ffffff"
        }
    },
})