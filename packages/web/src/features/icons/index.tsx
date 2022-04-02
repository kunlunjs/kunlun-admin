// import * as antds from '@ant-design/icons'
// import * as outlines from '@heroicons/react/outline'
// import * as solids from '@heroicons/react/solid'
import type { FC } from 'react'

interface IconsProps {}

// const heroicons = Object.keys(outlines).concat(Object.keys(solids))
// const antdicons = Object.keys(antds).filter(i => /^[A-Z]/.test(i))

export const Icons: FC<IconsProps> = () => {
  return (
    <>
      <h1 className="text-lg text-black font-bold mb-4">
        <pre>@ant-design/icons</pre>
      </h1>
      {/* <div className="flex flex-wrap border-t border-l border-gray-200">
        {antdicons.map((name, ix) => {
          const el = createElement((antds as any)[name], {
            className:
              'w-12 h-12 flex justify-center items-center border-r border-b border-gray-200 text-xl cursor-pointer hover:transform hover:scale-120'
          })
          return (
            <Tooltip key={name + ix} title={name}>
              {el}
            </Tooltip>
          )
        })}
      </div> */}
      <h1 className="text-lg text-black font-bold my-4">
        <pre>@heroicons/react</pre>
      </h1>
      {/* <div className="flex flex-wrap border-t border-l border-gray-200">
        {heroicons.map((name, ix) => {
          const el = createElement((outlines as any)[name], {
            className:
              'w-12 h-12 p-2 border-r border-b border-gray-200 cursor-pointer hover:transform hover:scale-110 hover:text-green-300'
          })
          return (
            <Tooltip key={name + ix} title={name}>
              {el}
            </Tooltip>
          )
        })}
      </div> */}
    </>
  )
}
