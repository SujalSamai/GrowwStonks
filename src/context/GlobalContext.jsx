"use client"

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [gainSelected, setGainSelected] = useState(true);
  const [gainLoseData, setGainLoseData] = useState([])
  return(
    <GlobalContext.Provider value={{gainSelected, setGainSelected, gainLoseData, setGainLoseData}}>
      {children}
    </GlobalContext.Provider>
  )
}