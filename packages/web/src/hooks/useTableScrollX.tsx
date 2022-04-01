import type { ColumnsType } from 'antd/lib/table'
import { useMemo } from 'react'

export function useTableScrollX<T>({
  columns,
  tableWidth
}: {
  columns: ColumnsType<T>
  tableWidth: number
}) {
  const tableScrollX = useMemo(() => {
    const sider = document.getElementsByClassName('ant-layout-sider')[0]
    if (sider) {
      const width =
        window.innerWidth -
        sider.getBoundingClientRect()?.width -
        24 * 2 -
        32 * 2
      return tableWidth < width ? width : tableWidth
    }
    return 1280
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth, columns, tableWidth])

  return tableScrollX
}
