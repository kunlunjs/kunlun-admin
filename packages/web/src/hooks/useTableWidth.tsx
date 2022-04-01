import type { ColumnsType } from 'antd/lib/table'
import { useMemo } from 'react'

export function useTableWidth<T>(columns: ColumnsType<T>) {
  const tableTitleWidth = useMemo(() => {
    return columns.reduce((a, b) => {
      a += (b.title as string).length * 30
      return a
    }, 250)
  }, [columns])

  return tableTitleWidth
}
