"use client"
import TabsComponent from "@/components/TabsComponent";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export default function Tabs() {
  const {gainSelected, setGainSelected} = useContext(GlobalContext)
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full mx-auto border-t border-gray-500 bg-stone-900/80 dark:bg-purplish/50 px-8 py-3 g:py-2">
      <div className="flex lg:w-3/12 justify-around lg:justify-between items-center">
        <button onClick={()=> setGainSelected(true)} className={`${gainSelected===true ? "bg-purplish/50 rounded-lg dark:bg-black/40 dark:rounded-lg border-b-2 border-green-400": "border-b-2 border-transparent"} flex items-center gap-2 px-4 cursor-pointer transition-all duration-150 ease-in shadow-b-lg`}>
          <TabsComponent title="Top Gainers" icon="rise"/>  
        </button>
        <button onClick={()=>setGainSelected(false)} className={`${gainSelected===false ? "bg-purplish/50 rounded-lg dark:bg-black/40 dark:rounded-lg border-b-2 border-red-400": "border-b-2 border-transparent"} px-4 cursor-pointer transition-all duration-150 ease-in shadow-b-lg`}>
          <TabsComponent title="Top Losers" icon="fall" />
        </button>
      </div>
    </div>
  );
}
