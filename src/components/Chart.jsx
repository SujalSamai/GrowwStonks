"use client";

import getDailyPrice from "@/libs/getDailyPrice";
import { useEffect, useMemo, useState } from "react";
import Error from "@/components/Error";
import formatChartData from "@/utils/formatChartData";
import ReactApexChart from "react-apexcharts";

export default function Chart({ ticker }) {
  const [stockData, setStockData] = useState({})

  useEffect(()=>{
    getDailyPrice(ticker).then(data=>{
      setStockData(data)
    })
  },[])

  const seriesData = useMemo(()=> formatChartData(stockData), [stockData])

  const candleStickOptions = {
    chart: {
        type: "candlestick",
    },
    title: {
        text: "CandleStick Chart",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};

  return(
    <ReactApexChart
            series={
                [
                    {
                        data: seriesData
                    }
                ]
            }
            options={candleStickOptions}
            type="candlestick"
        />
    
  )
}