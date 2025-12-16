import { useState } from "react"
import data from '../data/data.json'
import { Item } from "./Item"

export type Data = {
  category: string,
  score: number,
  icon: string
}

export const Summary = () => {
  const [jsonData] = useState<Data[]>(data)

  return (
    <section className="flex flex-col gap-4 items-start justify-between text-center md:py-18 md:px-10 p-10">
      <h2 className="font-extrabold text-2xl text-darkGrayBlue">Summary</h2>

      <div className="w-full space-y-4">
        {jsonData.map(item => (
          <Item
            key={item.category}
            item={item}
          />
        ))}        
      </div>

      <button className="p-3 w-full font-bold bg-darkGrayBlue hover:bg-slate-950 transition duration-150 text-white rounded-xl cursor-pointer">Continue</button>
    </section>
  )
}
