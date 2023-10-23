
export default async function getTopGainersLosers(){
  try{
    const response = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`, { next: { revalidate: 3600 }})
    if(!response.ok){
      throw new Error("Failed to fetch data..")
    }
    
    const data = await response.json();
    return data;
  }
  catch(e){
    console.log(e)
  }
}
