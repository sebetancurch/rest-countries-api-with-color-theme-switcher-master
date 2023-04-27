'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon
} from "@fortawesome/free-solid-svg-icons";
import '../../styles/globals.css'
import '../../styles/fonts.css'
import Button from '@mui/material/Button';
import { createContext, useState, useContext } from "react";

export const IsDarkMode = createContext(false)

export function Header(props: any) {

  const isDark = useContext(IsDarkMode)
  
  return (
      <div style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white"}} className="sticky top-0 w-full flex justify-between items-center px-20 py-5">
        <span className="decoration-solid text-xl font-bold">Where in the world?</span>
        <Button 
          variant="text" 
          color="inherit" 
          startIcon={<FontAwesomeIcon icon={faMoon} size="2xs"/>} 
          className="flex items-center gap-2.5"
          onClick={() => {props.changeColor()}}>
            Dark Mode
        </Button>
      </div>
  )
}

export default function Home ( {children}: {
  children: React.ReactNode
} ) {
  
  const [isDark, setIsDark] = useState(false)

  const changeColorMode = () => {

    setIsDark(!isDark)
  }

  return (
    <IsDarkMode.Provider value={isDark}>
      <div style={{color: isDark ? "white" : "black"}}>
        <Header changeColor={changeColorMode}/>
        <div 
          style={{
            backgroundColor: isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
            borderColor: isDark ? "" : "hsl(0, 0%, 92%)",
            borderTop: isDark ? "0" : "4",
            borderStyle: isDark ? "none" : "solid", 
            minHeight: "100dvh"
          }} 
          className="relative">
            {children}
        </div>
      </div>
    </IsDarkMode.Provider>
  )
}