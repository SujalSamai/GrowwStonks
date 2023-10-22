export default async function getOverview(ticker){
  try{
    const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.API_KEY}`)
    const data = await response.json();
    return data;
  }
  catch(e){
    console.log(e)
  }
}