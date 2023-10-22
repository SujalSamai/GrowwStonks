import Tile from "@/components/Tile"
import getOverview from "@/libs/getOverview"

export default async function CompanyInfo({params: {ticker}}){
  const companyData = await getOverview(ticker)

  return(
    <main className="w-10/12 lg:w-9/12 mx-auto flex flex-col gap-10 my-10 text-white">
      <div className="flex justify-between text-black dark:text-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">{companyData.Name}</h2>
          <h3>{companyData.Symbol+","} {companyData.AssetType}</h3>
          <p>{companyData.Exchange}</p>
        </div>
        <div className="flex flex-col gap-2 my-3" >
          <h3 className="text-lg font-semibold">$117.45</h3>
          <p>+0.41%</p>
        </div>
      </div>
      <div className="border border-gray-400 p-5">
        <h1>Graph</h1>
      </div>
      <div className="flex flex-col gap-8 border border-gray-400 p-5 bg-stone-950 dark:bg-purplish rounded-lg">
        <h2 className="border-b border-gray-400 py-2 text-lg font-semibold">About {companyData.Name}</h2>
        <p className="py-2 tracking-wider text-sm md:text-base">{companyData.Description}</p>
        <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5">
          <h4 className=" bg-cyan-500 rounded-full p-3 lg:p-5 text-sm lg:text-base">Industry: {companyData.Industry.toLowerCase()}</h4>
          <h4 className="bg-cyan-500 rounded-full p-3 lg:p-5 text-sm lg:text-base">Sector: {companyData.Sector.toLowerCase()}</h4>
        </div>
        <div className="flex flex-wrap justify-between">
          <Tile heading="52-Week Low" data={"$"+companyData["52WeekLow"]}/>
          {/* <Tile heading="Current Price" data="$117.45"/> */}
          <Tile heading= "52-Week High" data={"$"+companyData["52WeekHigh"]}/>
        </div>
        <div className="flex flex-wrap gap-y-4 justify-between">
          <Tile heading="Market Cap" data={"$"+companyData.MarketCapitalization}/>
          <Tile heading="P/E Ratio" data={companyData.PERatio}/>
          <Tile heading="Beta" data={companyData.Beta}/>
          <Tile heading="Dividend Yield" data={companyData.DividendYield+"%"}/>
          <Tile heading="Profit Margin" data={companyData.ProfitMargin}/>
        </div>
      </div>
      
    </main>
  )
}



