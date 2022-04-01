import type { FormInstance } from 'antd'
import type { TableProps } from './antd.types'

export interface FormRef {
  getValues: () => Record<string, any>
  getFormInstance: () => FormInstance
  clearFormValues: () => void
}

export interface TableRef {
  clearFilterAndSorter: () => void
  setSize(size: TableProps['size']): void
  setPaginationVisible(visible: false | undefined): void
  getState(): {
    tableSize: TableProps['size']
    paginationVisible: false | undefined
    // selectedRows: Record<string, any>[]
    // selectedRowKeys: (number | string)[]
    // filteredInfo: Record<string, any> | null
    // sortedInfo: Record<string, any>[] | null
  }
}
