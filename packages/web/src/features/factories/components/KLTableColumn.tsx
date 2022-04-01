import { Image, Tooltip } from 'antd'
import dayjs from 'dayjs'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
import Icon from '@/components/Icon'

export type DMMFField = {
  isId?: boolean
  isList?: boolean
  isUnique?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isInteger?: boolean
  isEnum?: boolean
  options?:
    | (string | number | boolean)[]
    | { label: string; value: string | number | boolean }[]
  isFile?: boolean
  suffix?: string
  isIcon?: boolean
  isJson?: boolean
  isProgramLang?: boolean
  programLangType?: string
  isColor?: boolean
  colorMode?: string
  isEmail?: boolean
  isMobile?: boolean
  isTelephone?: boolean
  isLink?: boolean
  isRoute?: boolean
  isImage?: boolean
  imageType?: string
  isBoolean?: boolean
  isTextArea?: boolean
  isRichText?: boolean
  isDateTime?: boolean
  datetimeFormat?: string
  zone?: string
  isCreatedAt?: boolean
  isUpdatedAt?: boolean
  isDeletedAt?: boolean
  isEncrypted?: boolean
  isRelationField?: boolean
  isRelationModel?: boolean
  isRelationPrimaryKey?: boolean
  isNestField?: boolean
  isNestParent?: boolean
  isNestChildren?: boolean
}
interface KLTableColumnProps {
  item: DMMFField
  value: any
}

export const KLTableColumn: FC<KLTableColumnProps> = ({ item, value }) => {
  const [visible, setVisible] = useState(false)

  if (item.isColor && value) {
    return (
      <span className="h-4 p-1 w-8" style={{ background: value }}>
        {value.toUpperCase()}
      </span>
    )
  }
  if (item.isFile) {
    return Array.isArray(value) ? (
      value.map((i, ix) => {
        const name = (
          decodeURIComponent(i).match(/\/([^/]+)$/) as unknown as string
        )[1] // i.match(/\/([\w-.\u4e00-\u9fa5]+)$/) as string
        return name ? (
          <Fragment key={name + ix}>
            <a
              href={i.replace('http:', '').replace('https:', '')}
              download={name}
            >
              {`...${name.slice(-18)}`}
            </a>
            <br />
          </Fragment>
        ) : null
      })
    ) : value ? (
      <a
        href={value.replace('http:', '').replace('https:', '')}
        download={(value.match(/\/([\w-.]+)$/) as string)[1]}
      >
        {`...${(value.match(/\/([\w-.]+)$/) as string)[1].slice(-18)}`}
      </a>
    ) : null
  }
  if (item.isImage && item.isList && Array.isArray(value)) {
    return (
      <Image src={value[0]} width={48} onClick={() => setVisible(true)}>
        <div className="hidden">
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: vis => setVisible(vis) }}
          >
            {value.map(i => {
              return <Image key={i} src={i} />
            })}
          </Image.PreviewGroup>
        </div>
      </Image>
    )
  }
  if (item.isImage && value) {
    return <Image src={value} width={48} />
  }
  if (item.isRichText) {
    return (
      <Icon
        name="PaperClipOutlined"
        tooltip={{ title: '富文本，点击查看' }}
        className="text-blue-400 cursor-pointer"
      />
    )
  }
  if (item.isTextArea) {
    return <Tooltip title={value}>{`${value.slice(0, 12)}...`}</Tooltip>
  }
  if (item.isDateTime && value) {
    return dayjs(value).format('YYYY/MM/DD HH:mm')
  }
  return value || null
}
