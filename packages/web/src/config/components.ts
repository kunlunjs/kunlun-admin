import type { JSONSchema7 } from 'json-schema'
import type { klComponents } from '@/types'

export const componentConfigs: Partial<
  Record<typeof klComponents[number], JSONSchema7>
> = {
  Button: {
    properties: {
      type: {
        enum: [
          { label: '默认', value: 'default' },
          { label: '主要', value: 'primary' },
          { label: '幽灵', value: 'ghost' },
          { label: '虚线', value: 'dashed' },
          { label: '链接', value: 'link' },
          { label: '文本', value: 'text' }
        ],
        default: 'default',
        title: '类型'
      },
      size: {
        enum: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' }
        ],
        default: 'middle',
        title: '大小'
      },
      block: {
        type: 'boolean',
        title: '父宽度',
        description: '将按钮宽度调整为其父宽度的选项'
      },
      danger: {
        type: 'boolean',
        title: '危险按钮'
      },
      disabled: {
        type: 'boolean',
        title: '失效状态'
      },
      ghost: {
        type: 'boolean',
        title: '幽灵按钮',
        description: '背景透明'
      },
      href: {
        type: 'string',
        title: '点击跳转'
      },
      htmlType: {
        type: 'string',
        title: '原生type值',
        description:
          '设置 button 原生的 type 值，可选值请参考[ HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)'
      },
      icon: {
        type: 'string',
        title: '图标'
      },
      shape: {
        enum: [
          { label: '默认', value: 'default' },
          { label: '圆形', value: 'circle' },
          { label: '半圆', value: 'round' }
        ],
        default: 'default',
        title: '形状'
      },
      loading: {
        type: 'boolean',
        title: '载入状态'
      }
    }
  },
  Card: {
    properties: {
      title: {
        type: 'string',
        default: '标题',
        title: '标题'
      },
      bordered: {
        type: 'boolean',
        default: true,
        title: '边框'
      },
      hoverable: {
        type: 'boolean',
        default: true,
        title: 'hover效果'
      },
      cover: {
        type: 'string',
        // default:
        //   'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        title: '封面'
      }
    }
  }
}
