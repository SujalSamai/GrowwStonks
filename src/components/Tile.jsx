export default function Tile({heading, data}){
  return(
    <div className="bg-gray-600/60 dark:bg-stone-950/60 p-3 lg:p-8 rounded-lg shadow-xl w-[45%] lg:w-[22%]">
      <h4 className="text-xs lg:text-base">{heading}</h4>
      <h5 className="text-sm lg:text-base font-bold">{
        data==="None" ? "Data unavailable" : data
      }</h5>
    </div>
  )
}