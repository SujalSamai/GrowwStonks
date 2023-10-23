export default function SearchRes({symbol, name, type}){
  return(
    <div className="border-b border-gray-500 p-2 flex flex-col text-white hover:bg-cyan-500 rounded-lg transition-all duration-200 ease-in">
      <h2 className="">{name}</h2>
      <div className="flex justify-between text-xs">
        <p className="">{symbol}</p>
        <p>{type}</p>
      </div>
    </div>
  )
}