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
      },
      labelInValue: {
        type: 'boolean',
        default: false,
        title: '是否把每个选项的 label 包装到 value 中'
      },
      listHeight: {
        type: 'number',
        default: 256,
        title: '设置弹窗滚动高度'
      },
      loading: {
        type: 'boolean',
        default: false,
        title: '加载中状态'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Slider: {
    properties: {
      allowClear: {
        type: 'boolean',
        default: false,
        title: '支持清除,单选模式有效'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '滑块是否为禁用状态'
      },
      dots: {
        type: 'boolean',
        default: false,
        title: '是否只能拖拽到刻度上'
      },
      max: {
        type: 'number',
        default: 100,
        title: '最大值'
      },
      min: {
        type: 'number',
        default: 0,
        title: '最小值'
      },
      range: {
        type: 'boolean',
        default: false,
        title: '双滑块模式'
      },
      reverse: {
        type: 'boolean',
        default: false,
        title: '反向坐标轴'
      },
      slider: {
        type: 'boolean',
        default: false,
        title: 'slider垂直方向设置'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Table: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '默认', value: 'default' }
        ],
        default: 'default',
        title: '表格大小'
      },
      bordered: {
        type: 'boolean',
        default: false,
        title: '是否展示外边框和列边框'
      },
      loading: {
        type: 'boolean',
        default: false,
        title: '页面是否加载中'
      },
      showHeader: {
        type: 'boolean',
        default: true,
        title: '是否显示表头'
      }
    }
  },
  /*----------------------------------------------------------------*/

  Image: {
    properties: {
      alt: {
        type: 'string',
        title: '图像描述'
      },
      fallback: {
        type: 'string',
        title: '加载失败容错地址'
      },
      height: {
        type: 'number',
        title: '图像高度'
      },
      preview: {
        type: 'boolean',
        default: true,
        title: '是否预览参数'
      },
      src: {
        type: 'string',
        title: '图片地址'
      },
      width: {
        type: 'number',
        title: '图像宽度'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Pagination: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'small' },
          { label: '默认', value: 'default' }
        ],
        default: 'default',
        title: '尺寸分页'
      },
      current: {
        type: 'number',
        title: '当前页数'
      },
      defaultCurrent: {
        type: 'number',
        default: 1,
        title: '默认的当前页数'
      },
      defaultPageSize: {
        type: 'number',
        default: 10,
        title: '默认的每页条数'
      },
      pageSize: {
        type: 'number',
        title: '每页条数'
      },
      total: {
        type: 'number',
        title: '数据总数'
      },
      fixed: {
        type: 'boolean',
        default: false,
        title: '列是否固定'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '每页条数'
      },
      hideOnSinglePage: {
        type: 'boolean',
        default: false,
        title: '只有一页时是否隐藏分页器'
      },
      responsive: {
        type: 'boolean',
        default: false,
        title: '当size未指定时，根据屏幕宽度自动调整尺寸'
      },
      showLessItems: {
        type: 'boolean',
        default: false,
        title: '是否显示较少页面内容'
      }
    }
  },
  /*----------------------------------------------------------------*/
  AutoComplete: {
    properties: {
      allowClear: {
        type: 'boolean',
        default: false,
        title: '是否支持清除'
      },
      autoFocus: {
        type: 'boolean',
        default: false,
        title: '自动获取焦点'
      },
      backfill: {
        type: 'boolean',
        default: false,
        title: '使用键盘选择选项的时候是否把选中项回填到输入框中'
      },
      defaultActiveFirstOption: {
        type: 'boolean',
        default: true,
        title: '是否默认高亮第一个选项'
      },
      defaultOpen: {
        type: 'boolean',
        default: false,
        title: '是否默认展开下拉菜单'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '是否禁用'
      },
      defaultValue: {
        type: 'string',
        title: '指定默认选中的条目'
      },
      open: {
        type: 'boolean',
        default: false,
        title: '是否展开下拉菜单'
      },
      dropdownClassName: {
        type: 'string',
        title: '下拉菜单的className属性'
      },
      placeholder: {
        type: 'string',
        title: '输入框提示'
      },
      value: {
        type: 'string',
        title: '指定当前选中的条目'
      }
    }
  },

  /*----------------------------------------------------------------*/
  Calendar: {
    properties: {
      fullscreen: {
        type: 'boolean',
        default: true,
        title: '是否全屏显示'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Carousel: {
    properties: {
      dotPosition: {
        enum: [
          { label: '头部', value: 'top' },
          { label: '底部', value: 'bottom' },
          { label: '左边', value: 'left' },
          { label: '右边', value: 'right' }
        ],
        default: 'bottom',
        title: '面板指示点位置'
      },
      autoplay: {
        type: 'boolean',
        default: false,
        title: '是否自动切换'
      },
      easing: {
        type: 'string',
        default: 'linear',
        title: '动画效果'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Cascader: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' }
        ],
        default: 'middle',
        title: '输入框大小'
      },
      allowClear: {
        type: 'boolean',
        default: true,
        title: '是否支持清除'
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
      disabled: {
        type: 'boolean',
        default: false,
        title: '禁用'
      },
      className: {
        type: 'string',
        title: '自定义类名'
      },
      dropdownClassName: {
        type: 'string',
        title: '自定义浮层类名'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Checkbox: {
    properties: {
      autoFocus: {
        type: 'boolean',
        default: false,
        title: '自动获取焦点'
      },
      checked: {
        type: 'boolean',
        default: false,
        title: '指定当前是否选中'
      },
      defaultChecked: {
        type: 'boolean',
        default: false,
        title: '初始是否选中'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '失效状态'
      }
    }
  },

  /*----------------------------------------------------------------*/
  Collapse: {
    properties: {
      expandIconPosition: {
        enum: [
          { label: '左边', value: 'left' },
          { label: '右边', value: 'right' }
        ],
        default: '',
        title: '设置图标位置'
      },
      accordion: {
        type: 'boolean',
        default: false,
        title: '手风琴模式'
      },
      bordered: {
        type: 'boolean',
        default: true,
        title: '带边框风格的折叠面板'
      },
      destroyInactivePanel: {
        type: 'boolean',
        default: false,
        title: '销毁折叠隐藏的面板'
      },
      ghost: {
        type: 'boolean',
        default: false,
        title: '使折叠面板透明且无边框'
      }
    }
  },
  /*----------------------------------------------------------------*/
  DatePicker: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' }
        ],
        default: 'middle',
        title: '输入框大小'
      },
      allowClear: {
        type: 'boolean',
        default: true,
        title: '是否支持清除'
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
      disabled: {
        type: 'boolean',
        default: false,
        title: '禁用'
      },
      dropdownClassName: {
        type: 'string',
        title: '额外的弹出日历'
      },
      inputReadOnly: {
        type: 'boolean',
        default: false,
        title: '设置输入框为只读'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Descriptions: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '默认', value: 'default' }
        ],
        default: 'default',
        title: '设置列表的大小'
      },
      layout: {
        enum: [
          { label: '水平', value: 'horizontal' },
          { label: '垂直', value: 'vertical' }
        ],
        default: 'horizontal',
        title: '描述布局'
      },
      bordered: {
        type: 'boolean',
        default: true,
        title: '是否有边框'
      }
    }
  },

  /*----------------------------------------------------------------*/
  Dropdown: {
    properties: {
      placement: {
        enum: [
          { label: '底部', value: 'bottom' },
          { label: '底部靠左', value: 'bottomLeft' },
          { label: '底部靠右', value: 'bottomRight' },
          { label: '头部', value: 'top' },
          { label: '头部靠左', value: 'topLeft' },
          { label: '头部靠右', value: 'topRight' }
        ],
        default: 'default',
        title: '设置列表的大小'
      },
      arrow: {
        type: 'boolean',
        default: false,
        title: '下拉框箭头是否显示'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '禁用'
      },
      destroyPopupOnHide: {
        type: 'boolean',
        default: false,
        title: '关闭后是否销毁'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Mentions: {
    properties: {
      placement: {
        enum: [
          { label: '底部', value: 'bottom' },
          { label: '头部', value: 'top' }
        ],
        default: 'bottom',
        title: '弹出层展示位置'
      },
      autoFocus: {
        type: 'boolean',
        default: false,
        title: '自动获得焦点'
      },
      defaultValue: {
        type: 'string',
        title: '输入框默认内容'
      },
      split: {
        type: 'string',
        title: '设置选中项前后分隔符'
      },
      value: {
        type: 'string',
        title: '输入框内容'
      }
    }
  },
  /*----------------------------------------------------------------*/
  List: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'large' },
          { label: '默认', value: 'default' },
          { label: '大', value: 'small' }
        ],
        default: 'default',
        title: 'list的尺寸'
      },
      bordered: {
        type: 'boolean',
        default: true,
        title: '是否展示边框'
      },
      split: {
        type: 'boolean',
        default: true,
        title: '是否展示分割线'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Layout: {
    properties: {
      className: {
        type: 'string',
        title: '容器'
      }
    }
  },
  /*----------------------------------------------------------------*/

  Menu: {
    properties: {
      mode: {
        enum: [
          { label: '垂直', value: 'vertical' },
          { label: '水平', value: 'horizontal' },
          { label: '内嵌模式', value: 'inline' }
        ],
        default: 'vertical',
        title: '菜单类型'
      },
      forceSubMenuRender: {
        type: 'boolean',
        default: false,
        title: '在子菜单展示之前就渲染进DOM'
      },
      multiple: {
        type: 'boolean',
        default: false,
        title: '是否允许多选'
      }
    }
  },
  /*----------------------------------------------------------------*/
  PageHeader: {
    properties: {
      ghost: {
        type: 'boolean',
        default: true,
        title: '是否改变背景颜色'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Steps: {
    properties: {
      direction: {
        enum: [
          { label: '垂直', value: 'vertical' },
          { label: '水平', value: 'horizontal' }
        ],
        default: 'horizontal',
        title: '指定步骤条方向'
      },
      size: {
        enum: [
          { label: '默认', value: 'default' },
          { label: '小', value: 'small' }
        ],
        default: 'default',
        title: '大小'
      },
      type: {
        enum: [
          { label: '默认', value: 'default' },
          { label: '导航', value: 'navigation' }
        ],
        default: 'default',
        title: '步骤条类型'
      },
      className: {
        type: 'string',
        title: '步骤条类名'
      },
      current: {
        type: 'number',
        default: 0,
        title: '指定当前步骤'
      },
      initial: {
        type: 'number',
        default: 0,
        title: '起始序号'
      },
      percent: {
        type: 'number',
        title: '当前 process 步骤显示的进度条进度'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Radio: {
    properties: {
      autoFocus: {
        type: 'boolean',
        default: false,
        title: '自动获取焦点'
      },
      checked: {
        type: 'boolean',
        default: false,
        title: '指定当前是否选中'
      },
      defaultChecked: {
        type: 'boolean',
        default: false,
        title: '初始是否选中'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '禁用'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Switch: {
    properties: {
      size: {
        enum: [
          { label: '默认', value: 'default' },
          { label: '小', value: 'small' }
        ],
        default: 'default',
        title: '开关大小'
      },
      autoFocus: {
        type: 'boolean',
        default: false,
        title: '自动获取焦点'
      },
      checked: {
        type: 'boolean',
        default: false,
        title: '指定当前是否选中'
      },
      className: {
        type: 'string',
        title: 'Switch器类名'
      },
      defaultChecked: {
        type: 'boolean',
        default: false,
        title: '初始是否选中'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '禁用'
      },
      loading: {
        type: 'boolean',
        default: false,
        title: '加载中的开关'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Upload: {
    properties: {
      listType: {
        enum: [
          { label: '文本', value: 'text' },
          { label: '图片', value: 'picture' },
          { label: '图片卡片', value: 'picture-card' }
        ],
        default: 'text',
        title: '上传列表的内建样式'
      },
      accept: {
        type: 'string',
        title: '接受上传的文件类型'
      },
      directory: {
        type: 'boolean',
        default: false,
        title: '支持上传文件夹'
      },
      disabled: {
        type: 'boolean',
        default: false,
        title: '禁用'
      },
      maxCount: {
        type: 'number',
        title: '限制上传数量'
      },
      method: {
        type: 'string',
        default: 'post',
        title: '上传请求的http method'
      },
      multiple: {
        type: 'boolean',
        default: false,
        title: '是否支持多选文件'
      },
      name: {
        type: 'string',
        default: 'file',
        title: '发到后台的文件参数名'
      },
      openFileDialogOnClick: {
        type: 'boolean',
        default: true,
        title: '点击打开文件对话框'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Tabs: {
    properties: {
      size: {
        enum: [
          { label: '小', value: 'large' },
          { label: '默认', value: 'default' },
          { label: '大', value: 'small' }
        ],
        default: 'default',
        title: '大小'
      },
      type: {
        enum: [
          { label: '线性', value: 'line' },
          { label: '卡片', value: 'card' },
          { label: '可编辑的卡片', value: 'editable-card' }
        ],
        default: 'line',
        title: '页签的基本样式'
      },
      activeKey: {
        type: 'string',
        title: '当前激活tab面板的key'
      },
      defaultActiveKey: {
        type: 'string',
        title: '初始化选中面板的key'
      },
      centered: {
        type: 'boolean',
        default: false,
        title: '标签居中展示'
      },
      hideAdd: {
        type: 'boolean',
        default: false,
        title: '是否隐藏加号图标'
      },
      tabBarGutter: {
        type: 'number',
        title: 'tabs之间的间隙'
      },
      destroyInactiveTabPane: {
        type: 'boolean',
        default: false,
        title: '被隐藏时是否销毁DOM结构'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Skeleton: {
    properties: {
      active: {
        type: 'boolean',
        default: false,
        title: '是否展示动画效果'
      },
      avatar: {
        type: 'boolean',
        default: false,
        title: '是否显示头像占位图'
      },
      paragraph: {
        type: 'boolean',
        default: true,
        title: '是否显示段落占位图'
      },
      round: {
        type: 'boolean',
        default: true,
        title: '段落和标题是否显示圆角'
      },
      title: {
        type: 'boolean',
        default: true,
        title: '是否显示标题占位图'
      }
    }
  },
  /*----------------------------------------------------------------*/
  Tag: {
    properties: {
      closable: {
        type: 'boolean',
        default: false,
        title: '标签是否可以关闭(点击默认关闭)'
      },
      visible: {
        type: 'boolean',
        default: true,
        title: '是否显示标签'
      },
      color: {
        type: 'string',
        title: '标签色'
      }
    }
  }
}
