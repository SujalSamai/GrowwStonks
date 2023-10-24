"use client"

import Chart from "@/components/Chart"
import Tile from "@/components/Tile"
import getOverview from "@/libs/getOverview"
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { AiFillCaretUp } from "react-icons/ai"
import {AiFillCaretDown} from "react-icons/ai"
import Image from "next/image";
import errorImg from "../../../public/error.svg"

export default function CompanyInfo({params: {ticker}}){
  const { price, changePercentage, isDeltaPositive, companyData, setCompanyData } = useContext(GlobalContext);
  
  const [error, setError] = useState(false)

  async function getCompanyOverview(ticker) {
    const res = await getOverview(ticker);
    const len = Object.keys(res).length
    if(res===undefined || len<2){
      setError(true)
    }else{
      setCompanyData(res)
    }
  }

  useEffect(() => {
    getCompanyOverview(ticker);
  }, []);


  return(
    <main className="w-10/12 lg:w-9/12 mx-auto flex flex-col gap-10 my-10 text-white">
      {
        error ? 
        <div className="text-3xl flex flex-col items-center gap-5">
          <Image src={errorImg} width={300} height={300}/>
          <Error desc="Try Again Later!"/>
        </div>
        : <>
      <div className="flex justify-between text-black dark:text-white">
        <div className="flex flex-col gap-2 w-8/12">
          <h2 className="text-2xl font-semibold">{companyData.Name===undefined ? "Please try again!" : companyData.Name}</h2>
          <h3>{companyData.Symbol && (companyData.Symbol+","+companyData.AssetType)}</h3>
          <p>{companyData.Exchange}</p>
        </div>
        <div className="flex flex-col gap-2 my-3 items-end" >
          <h3 className="text-lg font-semibold">${price}</h3>
          <p className={`${isDeltaPositive ? "text-green-500" : "text-red-500"} flex items-center gap-1`}>
            {
              isDeltaPositive ? "+" : ""
            }{changePercentage}{isDeltaPositive ? <AiFillCaretUp className="h-5 w-5"/>: <AiFillCaretDown className="h-5 w-5"/>}
          </p>
        </div>
      </div>
      <div className="border border-gray-400 p-5">
        <Chart ticker={companyData.Symbol}/>
      </div>
      <div className="flex flex-col gap-8 border border-gray-400 p-5 bg-stone-950 dark:bg-purplish rounded-lg">
        <h2 className="border-b border-gray-400 py-2 text-lg font-semibold">About {companyData.Name}</h2>
        <p className="py-2 tracking-wider text-sm md:text-base">{companyData.Description}</p>
        <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5">
          <h4 className=" bg-cyan-500 rounded-full p-3 lg:p-5 text-sm lg:text-base">Industry: {companyData.Industry}</h4>
          <h4 className="bg-cyan-500 rounded-full p-3 lg:p-5 text-sm lg:text-base">Sector: {companyData.Sector}</h4>
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <Tile heading="52-Week Low" data={"$"+companyData["52WeekLow"]}/>
          <Tile heading="Current Price" data={"$"+price}/>
          <Tile heading= "52-Week High" data={"$"+companyData["52WeekHigh"]}/>
          <Tile heading="Market Cap" data={"$"+companyData.MarketCapitalization}/>
          <Tile heading="P/E Ratio" data={companyData.PERatio}/>
          <Tile heading="Beta" data={companyData.Beta}/>
          <Tile heading="Dividend Yield" data={companyData.DividendYield+"%"}/>
          <Tile heading="Profit Margin" data={companyData.ProfitMargin}/>
        </div>
      </div>
    </>}
    </main>
  )
}



