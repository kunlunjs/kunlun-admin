import type { DragItems } from '@/types'

export const DragItemTypes = {
  /**
   * 容器
   */
  LAYOUT: 'layout',
  /**
   * 页面
   */
  PAGE: 'page',
  /**
   * 图表
   */
  CHART: 'chart',
  /**
   * 组件
   */
  COMPONENT: 'component'
}

// Array.from(document.getElementsByClassName('components-overview-img')).map(i => i.children[0].currentSrc)
export const components: DragItems = {
  布局: [
    {
      source: 'antd',
      type: 'Component',
      category: '布局',
      name: 'Divider',
      title: '分割线',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '布局',
      name: 'Layout',
      title: '栅格',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '布局',
      name: 'Layout',
      title: '布局',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '布局',
      name: 'Space',
      title: '间距',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg'
    }
  ],
  通用: [
    {
      source: 'antd',
      type: 'Component',
      category: '通用',
      name: 'Button',
      title: '按钮',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '通用',
      title: '图标',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '通用',
      name: 'Typography',
      title: '排版',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg'
    }
  ],
  导航: [
    {
      source: 'antd',
      type: 'Component',
      category: '导航',
      name: 'Affix',
      title: '固钉',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '导航',
      name: 'Breadcrumb',
      title: '面包屑',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '导航',
      name: 'Dropdown',
      title: '下拉菜单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '导航',
      name: 'Menu',
      title: '导航菜单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '导航',
      name: 'Pagination',
      title: '分页',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '导航',
      name: 'PageHeader',
      title: '页头',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '导航',
      name: 'Steps',
      title: '步骤条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg'
    }
  ],
  数据录入: [
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'AutoComplete',
      title: '自动完成',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Checkbox',
      title: '多选框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Cascader',
      title: '级联选择',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'DatePicker',
      title: '日期选择框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Form',
      title: '表单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'InputNumber',
      title: '数字输入框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Input',
      title: '输入框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Mentions',
      title: '提及',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Rate',
      title: '评分',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Radio',
      title: '单选框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Switch',
      title: '开关',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Slider',
      title: '滑动输入条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Select',
      title: '选择器',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Tree',
      title: '树选择',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Transfer',
      title: '穿梭框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'TimePicker',
      title: '时间选择框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据录入',
      name: 'Upload',
      title: '上传',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg'
    }
  ],
  数据展示: [
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Avatar',
      title: '头像',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Badge',
      title: '徽标数',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Comment',
      title: '评论',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Collapse',
      title: '折叠面板',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Carousel',
      title: '走马灯',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Card',
      title: '卡片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/NqXt8DJhky/Card.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Calendar',
      title: '日历',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Descriptions',
      title: '描述列表',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Empty',
      title: '空状态',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Image',
      title: '图片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'List',
      title: '列表',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Popover',
      title: '气泡卡片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Statistic',
      title: '统计数值',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Tree',
      title: '树形控件',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Tooltip',
      title: '文字提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Timeline',
      title: '时间轴',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Tag',
      title: '标签',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Tabs',
      title: '标签页',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '数据展示',
      name: 'Table',
      title: '表格',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg'
    }
  ],
  反馈: [
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Alert',
      title: '警告提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Drawer',
      title: '抽屉',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Modal',
      title: '对话框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      title: '全局提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      title: '通知提醒框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Progress',
      title: '进度条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Popconfirm',
      title: '气泡确认框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Result',
      title: '结果',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Spin',
      title: '加载中',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '反馈',
      name: 'Skeleton',
      title: '骨架屏',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg'
    }
  ],
  其他: [
    {
      source: 'antd',
      type: 'Component',
      category: '其他',
      name: 'Anchor',
      title: '锚点',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '其他',
      name: 'BackTop',
      title: '回到顶部',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/tJZ5jbTwX/BackTop.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '其他',
      title: '全局化配置',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg'
    }
  ],
  重型组件: [
    {
      source: 'antd',
      type: 'Component',
      category: '重型组件',
      title: '可编辑表格',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '重型组件',
      title: '高级布局',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '重型组件',
      title: '高级表单',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '重型组件',
      title: '高级表格',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '重型组件',
      title: '高级定义列表',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg'
    },
    {
      source: 'antd',
      type: 'Component',
      category: '重型组件',
      title: '高级列表',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg'
    }
  ]
}
