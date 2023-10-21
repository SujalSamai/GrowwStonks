import Card from "./CardType";

export default function CardGrid({gainers, losers, gainSelected, setGainSelected}){
  // const gainersLosers = await getTopGainersLosers();
  // console.log(gainersLosers)

  return(
    <main className="flex flex-wrap justify-around gap-y-7 lg:w-11/12 mx-auto bg-stone-900 dark:bg-purplish px-3 py-3 rounded-lg">
      {
      gainSelected ?
      gainers.map(gainer => {
        return(
          <Card key={gainer.ticker} type="gain" ticker={gainer.ticker} price={gainer.price} change={gainer.change_percentage}/>
        )
      }) :
      losers.map(loser =>{
        return(
          <Card key={loser.ticker} type={"loss"} ticker={loser.ticker} price={loser.price} change={loser.change_percentage}/>
        )
      })
    }
    </main>
  )
}