"use client"

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [gainSelected, setGainSelected] = useState(true);
  const [gainLoseData, setGainLoseData] = useState([])
  const [companyData, setCompanyData] = useState([])
  const [price, setPrice] = useState(0);
  const [changePercentage, setChangePercentage] = useState(0)
  const [isDeltaPositive, setIsDeltaPositive] = useState(true)
  return(
    <GlobalContext.Provider value={{gainSelected, setGainSelected, gainLoseData, setGainLoseData, price, setPrice, changePercentage, setChangePercentage, isDeltaPositive, setIsDeltaPositive, companyData, setCompanyData}}>
      {children}
    </GlobalContext.Provider>
  )
}