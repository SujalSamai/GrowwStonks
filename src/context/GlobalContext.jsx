"use client"

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [gainSelected, setGainSelected] = useState(true);
  return(
    <GlobalContext.Provider value={{gainSelected, setGainSelected}}>
      {children}
    </GlobalContext.Provider>
  )
}