import type { FC } from 'react'
import { charts } from './helpers'

interface ChartsProps {}

export const Charts: FC<ChartsProps> = () => {
  return (
    <>
      <div>图形图像</div>
      <div className="flex flex-wrap justify-between">
        {charts.map(i => {
          return (
            <div
              key={i.name}
              className="mb-4 mr-1 p-2 w-64 border border-solid border-gray-200 text-center flex flex-col items-center justify-between hover:scale-110"
            >
              <img alt={i.name} src={i.src} className="w-full" />
              <p className="mt-1">{i.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
