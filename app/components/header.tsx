'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon
} from "@fortawesome/free-solid-svg-icons";
import '../../styles/globals.css'
import '../../styles/fonts.css'
import Button from '@mui/material/Button';


export default function Header() {

  function changeColorMode() {

  }
  
  return (
      <div className="sticky top-0 w-full flex justify-between items-center px-20 py-5 bg-white">
        <span className="decoration-solid text-xl font-bold">Where in the world?</span>
        <Button 
          variant="text" 
          color="inherit" 
          startIcon={<FontAwesomeIcon icon={faMoon} size="2xs"/>} 
          className="flex items-center gap-2.5"
          onClick={changeColorMode}>
            Dark Mode
        </Button>
      </div>
  )
}