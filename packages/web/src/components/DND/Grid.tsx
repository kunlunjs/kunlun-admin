import type { FC } from 'react'

interface GridProps {
  columns: number
}

export const Grid: FC<GridProps> = ({ columns, children }) => {
  console.log('columns: ', columns)
  return <div className={`grid grid-cols-${columns} gap-2 p-2`}>{children}</div>
}
