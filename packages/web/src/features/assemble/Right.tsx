import { useThrottleFn } from 'ahooks'
import { Form, Input, Radio, Select, Switch } from 'antd'
import type { FC } from 'react'
import { useMemo } from 'react'
import { componentConfigs } from '@/config'
import { useConfigStore, useDroppedStore } from '@/stores'
import { getLabelCol } from '@/utils'

interface RightProps {}

export const Right: FC<RightProps> = () => {
  const [form] = Form.useForm()
  const { selected, droppedItems } = useDroppedStore()
  const { updateConfigValues } = useConfigStore()
  const { run: updateConfigValueThrottle } = useThrottleFn(
    (allValues: any) => {
      if (selected) {
        updateConfigValues({
          [selected]: allValues
        })
      }
    },
    { wait: 300 }
  )
  const name = selected ? droppedItems.find(i => i.id === selected)!.name : null
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const entries = name
    ? Object.entries(componentConfigs[name]?.properties as Record<string, any>)
    : []

  const maxLabelCol = useMemo(() => {
    return Math.max(...entries.map(i => getLabelCol(i[1].title)))
  }, [entries])

  if (!name) {
    return (
      <div className="h-full w-1/5 border border-solid border-gray-200">
        <div className="h-10 border border-t-0 border-l-0 border-r-0 border-solid border-gray-200 py-2 pl-3 font-medium">
          配置
        </div>
      </div>
    )
  }

  // const handleFinish = (values: any) => {
  //   console.log('values: ', values)
  // }

  const handleValuesChange = (changeValues: any, allValues: any) => {
    updateConfigValueThrottle(allValues)
  }

  const initialValues = entries.reduce((a, c) => {
    if (c[1]?.default) {
      a[c[0]] = c[1].default
    }
    return a
  }, {} as Record<string, any>)

  return (
    <div className="h-full w-1/5 border border-solid border-gray-200">
      <div>
        <div className="h-10 border border-t-0 border-l-0 border-r-0 border-solid border-gray-200 py-2 pl-3 font-medium">
          配置
        </div>
        <Form
          labelCol={{ span: maxLabelCol }}
          wrapperCol={{ span: 24 - maxLabelCol }}
          form={form}
          name={name}
          labelAlign="left"
          // onFinish={handleFinish}
          className="!p-2"
          initialValues={initialValues}
          onValuesChange={handleValuesChange}
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
              }) as { label: string; value: string | boolean | number }[]
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
                valuePropName={obj.type === 'boolean' ? 'checked' : 'value'}
                className="assembly-rightpanel !mb-2 flex justify-between"
              >
                {item}
              </Form.Item>
            )
          })}
        </Form>
      </div>
    </div>
  )
}
