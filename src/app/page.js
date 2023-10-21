"use client";
import CardGrid from "@/components/CardGrid";
import Tabs from "@/components/Tabs";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export default function Home() {
  const gainers = [
    {
      ticker: "INTEW",
      price: "0.13",
      change_amount: "0.09",
      change_percentage: "225.0%",
      volume: "228992",
    },
    {
      ticker: "NCPLW",
      price: "0.075",
      change_amount: "0.0399",
      change_percentage: "113.6752%",
      volume: "21283",
    },
    {
      ticker: "XRTX",
      price: "0.639",
      change_amount: "0.3205",
      change_percentage: "100.6279%",
      volume: "90287503",
    },
    {
      ticker: "TBLTW",
      price: "0.0498",
      change_amount: "0.0248",
      change_percentage: "99.2%",
      volume: "10750",
    },
    {
      ticker: "MCACW",
      price: "0.0267",
      change_amount: "0.0127",
      change_percentage: "90.7143%",
      volume: "365397",
    },
    {
      ticker: "AGBAW",
      price: "0.0284",
      change_amount: "0.0129",
      change_percentage: "83.2258%",
      volume: "1800",
    },
    {
      ticker: "RBOT+",
      price: "0.0548",
      change_amount: "0.0248",
      change_percentage: "82.6667%",
      volume: "18100",
    },
    {
      ticker: "AIMDW",
      price: "0.49",
      change_amount: "0.21",
      change_percentage: "75.0%",
      volume: "17466",
    },
    {
      ticker: "BOCNW",
      price: "0.0297",
      change_amount: "0.0123",
      change_percentage: "70.6897%",
      volume: "15200",
    },
    {
      ticker: "GDNRW",
      price: "0.044",
      change_amount: "0.0179",
      change_percentage: "68.5824%",
      volume: "1964",
    },
    {
      ticker: "MNTSW",
      price: "0.05",
      change_amount: "0.02",
      change_percentage: "66.6667%",
      volume: "134200",
    },
    {
      ticker: "NBSTW",
      price: "0.14",
      change_amount: "0.056",
      change_percentage: "66.6667%",
      volume: "11640",
    },
    {
      ticker: "PLTNW",
      price: "0.0549",
      change_amount: "0.0213",
      change_percentage: "63.3929%",
      volume: "2141",
    },
    {
      ticker: "CLAYW",
      price: "0.0356",
      change_amount: "0.0136",
      change_percentage: "61.8182%",
      volume: "700",
    },
    {
      ticker: "MPLN+",
      price: "0.0474",
      change_amount: "0.0173",
      change_percentage: "57.4751%",
      volume: "5424",
    },
    {
      ticker: "ONFOW",
      price: "0.0795",
      change_amount: "0.029",
      change_percentage: "57.4257%",
      volume: "4589",
    },
    {
      ticker: "DAVEW",
      price: "0.0238",
      change_amount: "0.0086",
      change_percentage: "56.5789%",
      volume: "2081",
    },
    {
      ticker: "PUCKW",
      price: "0.0198",
      change_amount: "0.0071",
      change_percentage: "55.9055%",
      volume: "105",
    },
    {
      ticker: "SUAC+",
      price: "0.046",
      change_amount: "0.0161",
      change_percentage: "53.8462%",
      volume: "1400",
    },
    {
      ticker: "AUMN",
      price: "1.92",
      change_amount: "0.65",
      change_percentage: "51.1811%",
      volume: "3030171",
    },
  ];
  const losers = [
    {
      ticker: "HWELW",
      price: "0.02",
      change_amount: "-0.1",
      change_percentage: "-83.3333%",
      volume: "173913",
    },
    {
      ticker: "GDSTW",
      price: "0.0101",
      change_amount: "-0.0449",
      change_percentage: "-81.6364%",
      volume: "20087",
    },
    {
      ticker: "JTAIW",
      price: "0.015",
      change_amount: "-0.0297",
      change_percentage: "-66.443%",
      volume: "204142",
    },
    {
      ticker: "BODY+",
      price: "0.006",
      change_amount: "-0.0106",
      change_percentage: "-63.8554%",
      volume: "1932",
    },
    {
      ticker: "SONDW",
      price: "0.0106",
      change_amount: "-0.0168",
      change_percentage: "-61.3139%",
      volume: "10446",
    },
    {
      ticker: "BFRIW",
      price: "0.03",
      change_amount: "-0.04",
      change_percentage: "-57.1429%",
      volume: "300",
    },
    {
      ticker: "ASCBW",
      price: "0.01",
      change_amount: "-0.0132",
      change_percentage: "-56.8966%",
      volume: "32242",
    },
    {
      ticker: "RMGCW",
      price: "0.0528",
      change_amount: "-0.0566",
      change_percentage: "-51.7367%",
      volume: "18135",
    },
    {
      ticker: "EMCGW",
      price: "0.01",
      change_amount: "-0.0103",
      change_percentage: "-50.7389%",
      volume: "90290",
    },
    {
      ticker: "CNGLW",
      price: "0.007",
      change_amount: "-0.0072",
      change_percentage: "-50.7042%",
      volume: "680772",
    },
    {
      ticker: "WGSWW",
      price: "0.0142",
      change_amount: "-0.0146",
      change_percentage: "-50.6944%",
      volume: "8448",
    },
    {
      ticker: "TBCPW",
      price: "0.0522",
      change_amount: "-0.0478",
      change_percentage: "-47.8%",
      volume: "12954",
    },
    {
      ticker: "MVSTW",
      price: "0.1599",
      change_amount: "-0.1401",
      change_percentage: "-46.7%",
      volume: "77523",
    },
    {
      ticker: "BTCTW",
      price: "0.0242",
      change_amount: "-0.0176",
      change_percentage: "-42.1053%",
      volume: "200",
    },
    {
      ticker: "WBUY",
      price: "3.15",
      change_amount: "-2.19",
      change_percentage: "-41.0112%",
      volume: "2479485",
    },
    {
      ticker: "BWAQW",
      price: "0.071",
      change_amount: "-0.049",
      change_percentage: "-40.8333%",
      volume: "14255",
    },
    {
      ticker: "BNIXW",
      price: "0.015",
      change_amount: "-0.01",
      change_percentage: "-40.0%",
      volume: "20406",
    },
    {
      ticker: "STSSW",
      price: "0.082",
      change_amount: "-0.054",
      change_percentage: "-39.7059%",
      volume: "9590",
    },
    {
      ticker: "ASCAW",
      price: "0.012",
      change_amount: "-0.0077",
      change_percentage: "-39.0863%",
      volume: "14350",
    },
    {
      ticker: "ZJYL",
      price: "10.77",
      change_amount: "-6.84",
      change_percentage: "-38.8416%",
      volume: "264500",
    },
  ];
  const { gainSelected, setGainSelected } = useContext(GlobalContext);
  return (
    <main className="flex flex-col gap-7 mx-4 my-5 min-h-screen">
      <Tabs />
      <CardGrid
        gainers={gainers}
        losers={losers}
        gainSelected={gainSelected}
        setGainSelected={setGainSelected}
      />
    </main>
  );
}
