import type { Data } from "./Summary"
import Memory from '../assets/icon-memory.svg'
import Reaction from '../assets/icon-reaction.svg'
import Verbal from '../assets/icon-verbal.svg'
import Visual from '../assets/icon-visual.svg'

type ItemProps = {
  item: Data
}

export const Item = ({item} : ItemProps) => {

  const { category, score } = item

  const categoryIcon : string = category === 'Reaction' ? Reaction : category === 'Memory' ? Memory : category === 'Verbal' ? Verbal : Visual
  const categoryColor : string = category === 'Reaction' ? 'text-lightRed' : category === 'Memory' ? 'text-orangeyYellow' : category === 'Verbal' ? 'text-greenTeal' : 'text-cobaltBlue'
  const categoryBg : string = category === 'Reaction' ? 'bg-lightRedOpa' : category === 'Memory' ? 'bg-orangeyYellowOpa' : category === 'Verbal' ? 'bg-greenTealOpa' : 'bg-cobaltBlueOpa'

  return (
    <article className={`flex items-center justify-between p-4 rounded-xl ${categoryBg}`}>
      <div className="flex items-center justify-between space-x-2">
        <img 
          src={categoryIcon} 
          alt={category} 
        />
        <p 
          className={`font-medium ${categoryColor}`}
        >
          {category}
        </p>
      </div>

      <div>
        <p className="font-bold text-slate-900">
          {score} {''}
          <span className="text-gray-600">/ 100</span>
        </p>
      </div>
    </article>
  )
}
