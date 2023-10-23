"use client"

import Link from "next/link";
import { useState } from "react";
import Error from "./Error";
import SearchRes from "./SearchRes";

export default function SearchBox({layout}){

    const[query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const[error, setError] = useState(false)


    const fetchData = (value) => {
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.API_KEY}`).then(res =>res.json()).then(json => {
          if(value.length>0){
            if(json!==undefined && json.length>2){
              setResults(json.bestMatches)
            }else{
              setError(true)
            }
          }else{
            setError(false)
            setResults([])
          }
      })
    }

    const handleChange = (value) => {
      setQuery(value)
      fetchData(value)
    }


    return(
      <div className="w-full">
        <input
          type="search"
          placeholder="Search Stocks and ETFs"
          className="w-full p-2 rounded-lg focus:outline-none text-stone-800 dark:text-slate-200"
          onChange={e => handleChange(e.target.value)}
          value={query}
        />
        { error ? 
        <div className="absolute w-10/12 lg:w-[47%] bg-stone-900/95 rounded-lg p-2 mt-2">
          <Error desc="Nothing found!"/> 
        </div>:
          results && results.length>0 && <div className="absolute w-10/12 lg:w-[47%] bg-stone-900/95 rounded-lg p-2 mt-2">
          {results.map(res=>{
            return(
              <Link href={`/${res["1. symbol"]}`}>
              <SearchRes key={res["1. symbol"]} symbol={res["1. symbol"]} name={res["2. name"]} type={res["3. type"]}/>
              </Link>
            )
          })}
        </div> 
        }
        
      </div>
    )
}