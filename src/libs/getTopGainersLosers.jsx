
export default async function getTopGainersLosers(){
  try{
    const response = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`)
    const data = await response.json();
    return data;
  }
  catch(e){
    console.log(e)
  }
}
