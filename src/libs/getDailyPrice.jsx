export default async function getDailyPrice(ticker){
  try{
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${process.env.API_KEY}`)
    const data = await response.json();
    return data;
  }
  catch(e){
    console.log(e)
  }
}