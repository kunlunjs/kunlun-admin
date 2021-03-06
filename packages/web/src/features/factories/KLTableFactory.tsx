import { faker } from '@kunlunjs/mock'
import { Button } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import type { FC } from 'react'
import { useRef, useState } from 'react'
import { useCallback } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import type { IKLTableButtons, TableProps } from '@/types'
import type { TableRef } from '@/types'
import Icon from '../../components/Icon'
import { KLTableButtons } from './components'
import { KLTable } from './components/KLTable'
import { KLTableColumn } from './components/KLTableColumn'

interface KLTableFactoryProps {}

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

export const KLTableFactory: FC<KLTableFactoryProps> = () => {
  const handle = useFullScreenHandle()
  const searchRef = useRef()
  const tableRef = useRef<TableRef>(null)
  // const [size, setSize] = useState<TableProps['size']>('small')
  // const [pagination, setPagination] = useState<undefined | false>(undefined)
  const [modal, setModal] = useState()
  const [confirmLoading, setConfirmLoading] = useState(false)

  const handleSetting = () => {}

  const handlePagination = () => {
    const tableInstance = tableRef.current
    const paginationVisible = tableInstance?.getState()?.paginationVisible
    if (tableInstance) {
      tableInstance.setPaginationVisible(
        paginationVisible === undefined ? false : undefined
      )
    }
  }

  const handleTableSize = ({ key }: { key: TableProps['size'] }) => {
    // setSize(key)
  }

  const handleFullScreen = useCallback(() => {
    if (handle?.active) {
      handle.exit()
    } else {
      handle.enter()
    }
  }, [handle])

  const size = tableRef.current?.getState()?.tableSize || 'small'
  const paginationVisible = tableRef.current?.getState()?.paginationVisible

  const tableSetting: IKLTableButtons = [
    {
      range: 'common',
      tooltip: '??????',
      icon: 'ReloadOutlined',
      onClick() {}
    },
    {
      range: 'common',
      tooltip:
        '????????????????????????????????????????????????/????????????/?????????????????????????????????????????????????????????',
      icon: 'ClearOutlined',
      onClick() {}
    },
    {
      range: 'common',
      tooltip: '??????',
      onClick: handleTableSize,
      icon: 'VerticalAlignMiddleOutlined',
      activeKey: size,
      menus: [
        { label: '???', value: 'small' },
        { label: '???', value: 'middle' },
        { label: '???', value: 'large' }
      ]
    },
    {
      range: 'common',
      tooltip: paginationVisible === undefined ? '????????????' : '????????????',
      icon: 'BarsOutlined',
      className: paginationVisible ? 'text-gray-200' : '',
      onClick: handlePagination
    },
    {
      range: 'common',
      tooltip: '???????????????',
      icon: 'SettingOutlined',
      onClick: handleSetting
    },
    {
      range: 'common',
      tooltip: '??????',
      icon: handle.active ? 'FullscreenExitOutlined' : 'FullscreenOutlined',
      onClick: handleFullScreen
    },
    {
      range: 'system',
      name: '??????',
      type: 'dashed',
      icon: 'SettingOutlined'
    }
  ]

  const columns: ColumnsType<DataItem> = [
    {
      dataIndex: 'id',
      key: 'id',
      title: 'ID',
      render(val, row) {
        return <KLTableColumn value={val} item={{ isId: true }} />
      }
    },
    {
      dataIndex: 'color',
      key: 'color',
      title: '??????',
      width: 100,
      render(val, row) {
        return <KLTableColumn value={val} item={{ isColor: true }} />
      }
    },
    {
      dataIndex: 'file',
      key: 'file',
      title: '??????',
      width: 120,
      render(val, row) {
        return <KLTableColumn value={val} item={{ isFile: true }} />
      }
    },
    {
      dataIndex: 'fileList',
      key: 'fileList',
      title: '????????????',
      width: 120,
      render(val, row) {
        return (
          <KLTableColumn value={val} item={{ isFile: true, isList: true }} />
        )
      }
    },
    {
      dataIndex: 'image',
      key: 'image',
      title: '??????',
      width: 100,
      ellipsis: true,
      render(val, row) {
        return <KLTableColumn value={val} item={{ isImage: true }} />
      }
    },
    {
      dataIndex: 'imageList',
      key: 'imageList',
      title: '?????????',
      width: 100,
      ellipsis: true,
      render(val, row) {
        return (
          <KLTableColumn value={val} item={{ isImage: true, isList: true }} />
        )
      }
    },
    {
      dataIndex: 'richText',
      key: 'richText',
      title: '?????????',
      render(val, row) {
        return <KLTableColumn value={val} item={{ isRichText: true }} />
      }
    },
    {
      dataIndex: 'textArea',
      key: 'textArea',
      title: '????????????',
      width: 100,
      ellipsis: true,
      render(val, row) {
        return <KLTableColumn value={val} item={{ isTextArea: true }} />
      }
    },
    {
      dataIndex: 'sort',
      key: 'sort',
      title: '??????',
      render(val, row) {
        return <KLTableColumn value={val} item={{ isInteger: true }} />
      }
    },
    {
      dataIndex: 'datetime',
      key: 'datetime',
      title: '??????',
      width: 150,
      render(val, row) {
        return <KLTableColumn value={val} item={{ isDateTime: true }} />
      }
    },
    {
      dataIndex: 'createdAt',
      key: 'createdAt',
      title: '????????????',
      width: 150,
      render(val, row) {
        return (
          <KLTableColumn
            value={val}
            item={{ isDateTime: true, isCreatedAt: true }}
          />
        )
      }
    },
    {
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      title: '????????????',
      width: 150,
      render(val, row) {
        return (
          <KLTableColumn
            value={val}
            item={{ isDateTime: true, isUpdatedAt: true }}
          />
        )
      }
    }
  ]

  const data: DataItem[] = [...Array(60)].map((_, ix) => ({
    id: faker.datatype.number(), // faker.datatype.uuid(),
    icon: faker.lorem.word(),
    color: faker.internet.color(),
    file: 'https://api.ixiaowai.cn/mcapi/mcapi.php',
    fileList: [...Array(2)].map(() => 'https://api.ixiaowai.cn/api/api.php'),
    image: 'https://api.ixiaowai.cn/mcapi/mcapi.php', //faker.image.image(),
    imageList: [...Array(3)].map(
      () => 'https://api.ixiaowai.cn/gqapi/gqapi.php'
    ),
    richText: faker.lorem.sentences(),
    textArea: faker.lorem.paragraph(),
    datetime: faker.date.recent().toISOString(),
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    sort: faker.datatype.number(),
    route: faker.internet.url(),
    link: faker.internet.url(),
    json: faker.datatype.json()
  }))

  return (
    <div>
      <div>search block</div>
      <div className="flex items-baseline justify-between">
        <div>
          <Button type="primary" icon={<Icon name="PlusOutlined" />}>
            ??????
          </Button>
          <Button type="link">
            <Icon
              name="LineChartOutlined"
              tooltip={{ title: '???????????????' }}
              className="text-lg"
            />
          </Button>
        </div>
        <FullScreen handle={handle} className="bg-white pt-4 pb-1">
          <div>
            <div className={`mb-3 flex items-center justify-end`}>
              <KLTableButtons buttons={tableSetting} />
            </div>
          </div>
        </FullScreen>
      </div>
      <KLTable ref={tableRef} rowKey="id" columns={columns} data={data} />
    </div>
  )
}
