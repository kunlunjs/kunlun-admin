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
  /*----------------------------------------------------------------*/
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
  },
  /*----------------------------------------------------------------*/
  Divider: {
    properties: {
      orientation: {
        enum: [
          { label: '居左', value: 'left' },
          { label: '居中', value: 'center' },
          { label: '居右', value: 'right' }
        ],
        default: 'center',
        title: '分割线标题的位置'
      },
      type: {
        enum: [
          { label: '水平', value: 'horizontal' },
          { label: '垂直', value: 'vertical' }
        ],
        default: 'horizontal',
        title: '水平还是垂直类型'
      },
      className: {
        type: 'string',
        title: '分割线样式类'
      },
      dashed: {
        type: 'boolean',
        default: false,
        title: '是否虚线'
      },
      plain: {
        type: 'boolean',
        default: false,
        title: '文字是否显示为普通正文样式'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Input: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'large' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'small' }
        ],
        default: 'middle',
        title: '控件大小'
      },
      allowClear: {
        type: 'boolean',
        default: true,
        title: '可以点击清除图标删除内容'
      },
      bordered: {
        type: 'boolean',
        default: true,
        title: '是否有边框'
      },
      defaultValue: {
        type: 'string',
        title: '输入框默认内容'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '是否禁用状态'
      },
      id: {
        type: 'string',
        title: '输入框的id'
      },
      maxLength: {
        type: 'number',
        title: '最大长度'
      },
      value: {
        type: 'string',
        title: '输入框内容'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Badge: {
    properties: {
      size: {
        enum: [
          { label: '默认', value: 'default' },
          { label: '大', value: 'small' }
        ],
        default: 'default',
        title: '在设置了count的前提下有效，设置小圆点的大小'
      },
      status: {
        enum: [
          { label: '成功', value: 'success' },
          { label: '处理', value: 'processing' },
          { label: '默认', value: 'default' },
          { label: '错误', value: 'error' },
          { label: '警告', value: 'warning' }
        ],
        default: 'default',
        title: '设置Badge为状态点'
      },
      color: {
        type: 'string',
        title: '自定义小圆点的颜色'
      },
      dot: {
        type: 'boolean',
        default: false,
        title: '不展示数字，只有一个小红点'
      },
      overflowCount: {
        type: 'string',
        default: 99,
        title: '展示封顶的数字值'
      },
      showZero: {
        type: 'boolean',
        default: false,
        title: '当数值为 0 时，是否展示'
      },
      title: {
        type: 'string',
        default: '标题',
        title: '标题'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Avatar: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'large' },
          { label: '默认', value: 'default' },
          { label: '大', value: 'small' }
        ],
        default: 'default',
        title: '设置头像的大小'
      },
      shape: {
        enum: [
          { label: '圆形', value: 'circle' },
          { label: '方形', value: 'square' }
        ],
        default: 'circle',
        title: '指定头像的形状'
      },
      src: {
        type: 'string',
        title: '图片类头像的资源地址或者图片元素'
      },
      srcSet: {
        type: 'string',
        title: '设置图片类头像响应式资源地址'
      },
      draggable: {
        type: 'boolean',
        default: false,
        title: '图片是否允许拖动'
      },
      alt: {
        type: 'string',
        title: '图像无法显示时的替代文本'
      },
      gap: {
        type: 'number',
        default: 4,
        title: '字符类型距离左右两侧边界单位像素'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Affix: {
    properties: {
      offsetBottom: {
        type: 'number',
        title: '距离窗口底部达到指定偏移量后触发'
      },
      offsetTop: {
        type: 'number',
        default: 0,
        title: '距离窗口顶部达到指定偏移量后触发'
      }
    }
  },
  /*----------------------------------------------------------------*/
  InputNumber: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'large' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'small' }
        ],
        default: 'middle',
        title: '输入框大小'
      },
      autoFocus: {
        type: 'boolean',
        default: false,
        title: '自动获取焦点'
      },
      bordered: {
        type: 'boolean',
        default: true,
        title: '是否有边框'
      },
      decimalSeparator: {
        type: 'string',
        title: '小数点'
      },
      defaultValue: {
        type: 'number',
        title: '初始值'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '禁用'
      },
      keyboard: {
        type: 'boolean',
        default: true,
        title: '是否启用键盘快捷行为'
      },
      max: {
        type: 'number',
        title: '最大值'
      },
      min: {
        type: 'number',
        title: '最小值'
      },
      readOnly: {
        type: 'boolean',
        default: false,
        title: '只读'
      },
      value: {
        type: 'number',
        title: '当前值'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Progress: {
    properties: {
      type: {
        enum: [
          { label: '进度圈', value: 'circle' },
          { label: '仪表盘', value: 'dashboard' },
          { label: '进度条', value: 'line' }
        ],
        default: 'line',
        title: '类型'
      },
      strokeLinecap: {
        enum: [
          { label: '圈角', value: 'round' },
          { label: '方角', value: 'square' }
        ],
        default: 'round',
        title: '进度条的样式'
      },
      percent: {
        type: 'number',
        default: 0,
        title: '百分比'
      },
      showInfo: {
        type: 'boolean',
        default: true,
        title: '是否显示进度数值或状态图标'
      },
      strokeColor: {
        type: 'string',
        title: '进度条的色彩'
      },
      trailColor: {
        type: 'string',
        title: '未完成的分段的颜色'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Select: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'large' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'small' }
        ],
        default: 'middle',
        title: '选择框大小'
      },
      placeholder: {
        type: 'string',
        title: '选择框默认文本'
      },
      maxTagTextLength: {
        type: 'number',
        title: '最大显示的tag文本长度'
      },
      open: {
        type: 'boolean',
        default: false,
        title: '是否展开下拉菜单'
      },
      searchValue: {
        type: 'string',
        title: '控制搜索文本'
      },
      showSearch: {
        type: 'boolean',
        default: false,
        title: '使单选模式可搜索'
      },
      virtual: {
        type: 'boolean',
        default: true,
        title: '是否关闭虚拟滚动'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Slider: {},
  /*----------------------------------------------------------------*/
  Table: {},
  /*----------------------------------------------------------------*/
  Image: {}
  /*----------------------------------------------------------------*/
}
