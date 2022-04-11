import { Card, Form, Input, Radio, Select, Switch } from 'antd'
import type { FC } from 'react'
import { useMemo } from 'react'
import { componentConfigs } from '@/config'
import type { klComponents } from '@/types'
interface RightProps {
  type?: typeof klComponents[number]
}

function isChinese(s: string) {
  return /[\u4e00-\u9fa5]/.test(s)
}
function getLabelCol(str = '') {
  let span = 0
  str.split('').forEach(i => {
    if (isChinese(i)) {
      span += 1.5
    } else {
      span += 0.75
    }
  })
  return Math.ceil(span)
}

export const Right: FC<RightProps> = ({ type = 'Button' }) => {
  const [form] = Form.useForm()

  const handleFinish = () => {}

  const entries = Object.entries(
    componentConfigs[type]?.properties as Record<string, any>
  )

  const maxLabelCol = useMemo(() => {
    return Math.max(...entries.map(i => getLabelCol(i[1].title)))
  }, [entries])

  const initialValues = entries.reduce((a, c) => {
    if (c[1]?.default) {
      a[c[0]] = c[1].default
    }
    return a
  }, {} as Record<string, any>)

  return (
    <div className="w-1/5 h-full border border-solid border-gray-200">
      <Card
        bordered={false}
        size="small"
        title="配置"
        bodyStyle={{ padding: '12px 6px' }}
      >
        <Form
          labelCol={{ span: maxLabelCol }}
          wrapperCol={{ span: 24 - maxLabelCol }}
          form={form}
          name={type}
          labelAlign="left"
          initialValues={initialValues}
        >
          {entries.map(([name, obj]) => {
            let item = <Input size="small" />
            if (obj.type === 'boolean') {
              item = <Switch size="small" />
            }
            if (obj.enum) {
              // @ts-ignore
              obj.enum = obj.enum.map(i => {
                if (typeof i !== 'object') {
                  return { label: i, value: i }
                }
                return i
              })
            }
            const enumLabelLen =
              // @ts-ignore
              obj?.enum?.reduce((a, c) => {
                return (a += c.label.length)
              }, 0) || 0
            if (enumLabelLen > 6) {
              item = (
                <Select size="small">
                  {/* @ts-ignore */}
                  {obj.enum.map(i => (
                    <Select.Option key={i.value} value={i.value}>
                      {i.label}
                    </Select.Option>
                  ))}
                </Select>
              )
            }
            if (obj?.enum && enumLabelLen <= 6) {
              item = (
                <Radio.Group size="small">
                  {/* @ts-ignore */}
                  {obj.enum.map(i => (
                    <Radio.Button key={i.value} value={i.value}>
                      {i.label}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              )
            }
            return (
              <Form.Item
                key={name}
                name={name}
                label={obj.title}
                className="flex justify-between !mb-2 assembly-rightpanel"
              >
                {item}
              </Form.Item>
            )
          })}
        </Form>
      </Card>
    </div>
  )
}
