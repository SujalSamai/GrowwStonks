"use client"

import Link from "next/link";
import Card from "./Card";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import getTopGainersLosers from "@/libs/getTopGainersLosers";

export default function CardGrid(){
  const { gainSelected, setGainSelected, gainLoseData, setGainLoseData } = useContext(GlobalContext);
  
  async function extractTopGainerLosers(){
    const res = await getTopGainersLosers();
    setGainLoseData(res)
  }
  
  useEffect(()=>{
    extractTopGainerLosers();
  },[]);


  return(
    <main className="flex flex-wrap justify-around gap-y-7 lg:w-11/12 mx-auto bg-stone-900 dark:bg-purplish px-3 py-3 rounded-lg">
      {
      gainSelected ?
      gainLoseData.top_gainers?.map(gainer => {
        return(
          <Link className="w-3/12" href={`/${gainer.ticker}`}>
            <Card key={gainer.ticker} type="gain" ticker={gainer.ticker} price={gainer.price} change={gainer.change_percentage}/>
          </Link>
        )
      }) :
      gainLoseData.top_losers?.map(loser =>{
        return(
          <Link className="w-3/12" href={`/${loser.ticker}`}>
            <Card key={loser.ticker} type={"loss"} ticker={loser.ticker} price={loser.price} change={loser.change_percentage}/>
          </Link>
        )
      })
    }
    </main>
  )
}