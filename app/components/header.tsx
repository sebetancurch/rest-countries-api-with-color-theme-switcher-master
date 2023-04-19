'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon
} from "@fortawesome/free-solid-svg-icons";
import '../../styles/globals.css'
import '../../styles/fonts.css'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    neutral: {
      main: '#212121',
      contrastText: '#fff',
    }
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}


export default function Header() {
    return (
        <div className="flex justify-between items-center px-20 py-5 bg-white">
          <span className="decoration-solid text-xl font-bold">Where in the world?</span>
          <ThemeProvider theme={theme}>
            <Button 
              variant="text" 
              color="neutral" 
              startIcon={<FontAwesomeIcon icon={faMoon} size="2xs"/>} 
              className="flex items-center gap-2.5">
                Dark Mode
            </Button>
          </ThemeProvider>
        </div>
    )
}