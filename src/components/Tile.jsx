export default function Tile({heading, data}){
  return(
    <div className="border border-gray-600 dark:border-gray-500 p-3 lg:p-8 rounded-lg shadow-xl w-5/12 lg:w-2/12">
      <h4 className="text-xs lg:text-base">{heading}</h4>
      <h5 className="text-sm lg:text-base font-bold">{data}</h5>
    </div>
  )
}