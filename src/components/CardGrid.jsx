"use client"

import Link from "next/link";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import getTopGainersLosers from "@/libs/getTopGainersLosers";
import Error from "./Error";
import { useRouter } from "next/navigation";
import Image from "next/image";
import errorImg from "../../public/error.svg"

export default function CardGrid(){
  const { gainSelected, gainLoseData, setGainLoseData, setPrice, setChangePercentage, setIsDeltaPositive } = useContext(GlobalContext);
  const [error, setError] = useState(false)

  async function extractTopGainerLosers(){
    const res = await getTopGainersLosers();
    console.log(res)
    const len = Object.keys(res).length
    if(res!==undefined && len>1){
      setGainLoseData(res)
    }else{
      setError(true)
    }
  }
  
  useEffect(()=>{
    extractTopGainerLosers();
  },[]);


  const router = useRouter()
  function handleLink(e, path, price, change, isPositive){
    e.preventDefault()
    setPrice(price)
    setChangePercentage(change)
    setIsDeltaPositive(isPositive)
    router.push(path)
  }

  const renderGainers = () => {
    return gainLoseData.top_gainers?.map((gainer) => {
      return (
        <Link key={gainer.ticker} className="w-5/12 lg:w-3/12" href="" onClick={(e) => handleLink(e, `/${gainer.ticker}`, gainer.price, gainer.change_percentage, true)}>
          <Card
            type="gain"
            ticker={gainer.ticker}
            price={gainer.price}
            change={gainer.change_percentage}
            isPositive = {true}
          />
        </Link>
      );
    });
  };

  const renderLosers = () => {
    return gainLoseData.top_losers?.map((loser) => {
      return (
        <Link key={loser.ticker} onClick={(e) => handleLink(e, `/${loser.ticker}`, loser.price, loser.change_percentage, false)} href="" className="w-5/12 lg:w-3/12">
          <Card
            
            type={"loss"}
            ticker={loser.ticker}
            price={loser.price}
            change={loser.change_percentage}
            isPositive={false}
          />
        </Link>
      );
    });
  };


  return(
    <main className="flex flex-wrap justify-around gap-y-7 lg:w-11/12 mx-auto px-3 py-10">
      {
        error ? 
        <div className="text-3xl flex flex-col items-center gap-5">
          <Image src={errorImg} width={300} height={300}/>
          <Error desc="Try Again Later!"/>
        </div>
         :
      gainSelected ?
      renderGainers() : renderLosers()
    }
    </main>
  )
}