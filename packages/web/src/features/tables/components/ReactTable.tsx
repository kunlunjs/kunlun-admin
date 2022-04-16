/* eslint-disable react/jsx-key */
// /** @jsxImportSource @emotion/react */
import update from 'immutability-helper'
import type { FC } from 'react'
import { useRef, useCallback, useMemo, useState } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import type { Column, Row } from 'react-table'
import { useTable } from 'react-table'
import styled from 'styled-components'

export type Item = {
  id: string
  firstName: string
  lastName: string
  age: number
  progress: number
  visits: number
  status: string
}

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

interface TableProps {
  columns: Column<Item>[]
  data: Item[]
}

const DND_ITEM_TYPE = 'row'

interface RowProps {
  row: Row<Item>
  index: number
  moveRow: (...args: any[]) => void
}

const TableRow: FC<RowProps> = ({ row, index, moveRow }) => {
  const dropRef = useRef<HTMLTableRowElement>(null)
  const dragRef = useRef(null)

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item: { type: string; index: number }, monitor) {
      if (!dropRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveRow(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })
  const [{ isDragging }, drag, preview] = useDrag(() => {
    return {
      type: DND_ITEM_TYPE,
      item: { type: DND_ITEM_TYPE, index },
      collect: monitor => {
        return {
          isDragging: monitor.isDragging()
        }
      }
    }
  })

  const opacity = isDragging ? 0 : 1
  preview(drop(dropRef))
  drag(dragRef)

  return (
    <tr ref={dropRef} style={{ opacity }}>
      <td ref={dragRef}>move</td>
      {row.cells.map(cell => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      })}
    </tr>
  )
}

const Table: FC<TableProps> = ({ columns, data }) => {
  const [records, setRecords] = useState(data)

  const getRowId = useCallback(row => {
    return row.id
  }, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Item>({
      data: records,
      columns,
      getRowId
    })

  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const dragRecord = records[dragIndex]
    setRecords(
      update(records, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord]
        ]
      })
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th></th>
                {headerGroup.headers.map(column => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, ix) => {
            prepareRow(row)
            return (
              <TableRow
                index={ix}
                row={row}
                moveRow={moveRow}
                {...row.getRowProps()}
              />
            )
          })}
        </tbody>
      </table>
    </DndProvider>
  )
}

export const ReactTable = () => {
  const columns: Column<Item>[] = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName'
          },
          {
            Header: 'Last Name',
            accessor: 'lastName'
          }
        ]
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age'
          },
          {
            Header: 'Visits',
            accessor: 'visits'
          },
          {
            Header: 'Status',
            accessor: 'status'
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress'
          }
        ]
      }
    ],
    []
  )

  const data = useMemo(() => {
    return []
  }, [])
  console.log(data)
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}
