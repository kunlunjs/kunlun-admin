import { Table } from 'antd'
import type { ColumnType } from 'antd/lib/table'
import type { ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'
import { useImperativeHandle } from 'react'
import { useState } from 'react'
import { useTableScrollX } from '@/hooks/useTableScrollX'
import { useTableWidth } from '@/hooks/useTableWidth'
import type { PaginationProps, TableProps } from '@/types'
import type { TableRef } from '@/types'

interface DataItem {
  id: number
  icon: string
  color: string
  file: string
  fileList: string[]
  link: string
  route: string
  image: string
  imageList: string[]
  json: string
  richText: string
  textArea: string
  sort: number
  datetime: string
  createdAt: string
  updatedAt: string
}

type KLTableProps = Omit<TableProps, 'columns' | 'dataSource'> & {
  columns: ColumnType<DataItem>[]
  data: DataItem[] // TableProps['dataSource']
}

const WithRefKLTable: ForwardRefRenderFunction<TableRef, KLTableProps> = (
  { columns, data },
  ref
) => {
  const [tableSize, setTableSize] = useState<TableProps['size']>('small')
  const [paginationVisible, setPaginationVisible] = useState<false | undefined>(
    undefined
  )
  const [pagination, setPagination] = useState<PaginationProps>({})
  const tableWidth = useTableWidth<DataItem>(columns)
  const tableScrollX = useTableScrollX<DataItem>({ columns, tableWidth })

  useImperativeHandle(
    ref,
    () => {
      return {
        setSize(_size: TableProps['size']) {
          setTableSize(_size)
        },
        setPaginationVisible(visible: false | undefined) {
          setPaginationVisible(visible)
        },
        getState() {
          return {
            tableSize,
            paginationVisible
            // selectedRows,
            // selectedRowKeys,
            // ...filterAndSortInfo
          }
        },
        clearFilterAndSorter() {
          // setFilterAndSortInfo({
          //   sortedInfo: null,
          //   filteredInfo: null
          // })
        }
      }
    },
    [tableSize, paginationVisible]
  )

  return (
    <Table<DataItem>
      size={tableSize}
      rowKey="id"
      columns={columns}
      dataSource={data}
      scroll={{ x: tableScrollX }}
      pagination={paginationVisible ?? pagination}
    />
  )
}

export const KLTable = forwardRef(WithRefKLTable)

KLTable.displayName = 'KLTable'
