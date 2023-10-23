import { AiFillCaretUp } from "react-icons/ai"
import {AiFillCaretDown} from "react-icons/ai"

export default function Card({type, ticker, price, change }){
  return(
    <div className="flex flex-col justify-evenly bg-gray-600/60 dark:bg-stone-950/60 lg:w-[80%] shadow-xl p-5 text-white ml-1 rounded-lg text-sm md:text-base">
      <h1 className="text-lg">{ticker}</h1>
      <h3 className="text-lg">${price}</h3>
      <p className={`${type==="gain" ? "text-green-500" : "text-red-500"} flex items-center gap-1`}>{type==="gain" ? "+": ""}{change} {type==="gain" ? <AiFillCaretUp className="h-5 w-5"/>: <AiFillCaretDown className="h-5 w-5"/>}</p>
    </div>
  )
}