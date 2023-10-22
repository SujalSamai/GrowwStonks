"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";
import getDailyPrice from "@/libs/getDailyPrice";
import { useEffect, useState } from "react";

export default function Chart({ ticker }) {
  const [priceData, setPriceData] = useState([]);
  async function getPriceData(ticker) {
    const rawData = await getDailyPrice(ticker);
    const res = rawData["Time Series (5min)"];
    // console.log(res)
    const series = Object.keys(res)
      .reverse()
      .map((timestamp) => {
        return { timestamp, value: res[timestamp]["2. high"] };
      });
    setPriceData(series);
  }

  useEffect((ticker) => {
    getPriceData(ticker);
  }, [ticker]);

  const labels = [];
  const data = [];
  priceData.forEach((item, index) => {
    if (index % 3 == 0) {
      let sliceTS = item.timestamp.slice(11);
      labels.push(sliceTS.slice(0, -3));
      data.push(item.value);
    }
  });

  const state = {
    labels,

    datasets: [
      {
        label: "Price",
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(56,118,191,1)",
        borderWidth: 2,
        data: data,
      },
    ],
  };

  

  return (
    <div>
      <Line className=" bg-whitish" data={state} />
    </div>
  );
}
