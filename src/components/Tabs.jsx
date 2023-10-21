"use client"
import TabsComponent from "@/components/TabsComponent";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export default function Tabs() {
  const {gainSelected, setGainSelected} = useContext(GlobalContext)
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full lg:w-11/12 mx-auto bg-stone-900 dark:bg-purplish px-3 py-3 
    lg:py-2 rounded-lg">
      <div className="flex lg:w-3/12 justify-around lg:justify-between items-center">
        <button onClick={()=> setGainSelected(true)} className={`${gainSelected===true ? "bg-purplish/50 rounded-lg dark:bg-black/40 dark:rounded-lg": null} flex items-center gap-2 px-4 cursor-pointer transition-all duration-150 ease-in shadow-b-lg`}>
          <TabsComponent title="Top Gainers" icon="rise"/>  
        </button>
        <button onClick={()=>setGainSelected(false)} className={`${gainSelected===false ? "bg-purplish/50 rounded-lg dark:bg-black/40 dark:rounded-lg": null} px-4 cursor-pointer transition-all duration-150 ease-in shadow-b-lg`}>
          <TabsComponent title="Top Losers" icon="fall" />
        </button>
      </div>
      <div className="mt-5 lg:mt-0 lg:w-3/5 flex items-center">
        <input
              type="search"
              placeholder="Search Stocks and ETFs"
              className="w-full p-2 rounded-lg focus:outline-none"
            ></input>
      </div>
    </div>
  );
}
