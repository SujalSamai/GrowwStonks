"use client"

import Link from "next/link";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import getTopGainersLosers from "@/libs/getTopGainersLosers";
import Error from "./Error";

export default function CardGrid(){
  const { gainSelected, gainLoseData, setGainLoseData, setPrice, setChangePercentage, setIsDeltaPositive } = useContext(GlobalContext);
  const [error, setError] = useState(false)

  async function extractTopGainerLosers(){
    const res = await getTopGainersLosers();
    if(res!==undefined && res.length>1){
      setGainLoseData(res)
    }else{
      setError(true)
    }
  }
  
  useEffect(()=>{
    extractTopGainerLosers();
  },[]);

  const renderGainers = () => {
    return gainLoseData.top_gainers?.map((gainer) => {
      setPrice(gainer.price);
      setChangePercentage(gainer.change_percentage);
      setIsDeltaPositive(true);

      return (
        
        <Link className="w-5/12 lg:w-3/12" href={`/${gainer.ticker}`}>
          <Card
            key={gainer.ticker}
            type="gain"
            ticker={gainer.ticker}
            price={gainer.price}
            change={gainer.change_percentage}
          />
        </Link>
      );
    });
  };

  const renderLosers = () => {
    return gainLoseData.top_losers?.map((loser) => {
      setPrice(loser.price);
      setChangePercentage(loser.change_percentage);
      setIsDeltaPositive(false);

      return (
        <Link className="w-5/12 lg:w-3/12" href={`/${loser.ticker}`}>
          <Card
            key={loser.ticker}
            type={"loss"}
            ticker={loser.ticker}
            price={loser.price}
            change={loser.change_percentage}
          />
        </Link>
      );
    });
  };


  return(
    <main className="flex flex-wrap justify-around gap-y-7 lg:w-11/12 mx-auto bg-stone-900 dark:bg-purplish px-3 py-3 rounded-lg">
      {
        error ? 
        <div className="text-3xl">
          <Error desc="Try Again Later!"/>
        </div>
         :
      gainSelected ?
      renderGainers() : renderLosers()
    }
    </main>
  )
}