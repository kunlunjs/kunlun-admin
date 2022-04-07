import type { DragItems } from './interfaces'

export const DragItemTypes = {
  ITEM: 'component'
}

export const categories = [
  '通用',
  '布局',
  '导航',
  '数据录入',
  '数据展示',
  '反馈',
  '其他',
  '重型组件'
] as const

// Array.from(document.getElementsByClassName('components-overview-img')).map(i => i.children[0].currentSrc)
export const components: DragItems = {
  通用: [
    {
      type: 'Component',
      category: '通用',
      name: '按钮',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg'
    },
    {
      type: 'Component',
      category: '通用',
      name: '图标',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg'
    },
    {
      type: 'Component',
      category: '通用',
      name: '排版',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg'
    }
  ],
  布局: [
    {
      type: 'Component',
      category: '布局',
      name: '分割线',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg'
    },
    {
      type: 'Component',
      category: '布局',
      name: '栅格',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg'
    },
    {
      type: 'Component',
      category: '布局',
      name: '布局',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg'
    },
    {
      type: 'Component',
      category: '布局',
      name: '间距',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg'
    }
  ],
  导航: [
    {
      type: 'Component',
      category: '导航',
      name: '固钉',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg'
    },
    {
      type: 'Component',
      category: '导航',
      name: '面包屑',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg'
    },
    {
      type: 'Component',
      category: '导航',
      name: '下拉菜单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg'
    },
    {
      type: 'Component',
      category: '导航',
      name: '导航菜单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg'
    },
    {
      type: 'Component',
      category: '导航',
      name: '分页',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg'
    },
    {
      type: 'Component',
      category: '导航',
      name: '页头',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg'
    },
    {
      type: 'Component',
      category: '导航',
      name: '步骤条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg'
    }
  ],
  数据录入: [
    {
      type: 'Component',
      category: '数据录入',
      name: '自动完成',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '多选框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '级联选择',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '日期选择框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '表单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '数字输入框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '输入框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '提及',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '评分',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '单选框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '开关',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '滑动输入条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '选择器',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '树选择',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '穿梭框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '时间选择框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg'
    },
    {
      type: 'Component',
      category: '数据录入',
      name: '上传',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg'
    }
  ],
  数据展示: [
    {
      type: 'Component',
      category: '数据展示',
      name: '头像',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '徽标数',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '评论',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '折叠面板',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '走马灯',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '卡片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/NqXt8DJhky/Card.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '日历',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '描述列表',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '空状态',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '图片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '列表',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '气泡卡片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '统计数值',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '树形控件',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '文字提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '时间轴',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '标签',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '标签页',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg'
    },
    {
      type: 'Component',
      category: '数据展示',
      name: '表格',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg'
    }
  ],
  反馈: [
    {
      type: 'Component',
      category: '反馈',
      name: '警告提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '抽屉',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '对话框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '全局提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '通知提醒框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '进度条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '气泡确认框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '结果',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '加载中',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg'
    },
    {
      type: 'Component',
      category: '反馈',
      name: '骨架屏',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg'
    }
  ],
  其他: [
    {
      type: 'Component',
      category: '其他',
      name: '锚点',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg'
    },
    {
      type: 'Component',
      category: '其他',
      name: '回到顶部',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/tJZ5jbTwX/BackTop.svg'
    },
    {
      type: 'Component',
      category: '其他',
      name: '全局化配置',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg'
    }
  ],
  重型组件: [
    {
      type: 'Component',
      category: '重型组件',
      name: '可编辑表格',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg'
    },
    {
      type: 'Component',
      category: '重型组件',
      name: '高级布局',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg'
    },
    {
      type: 'Component',
      category: '重型组件',
      name: '高级表单',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg'
    },
    {
      type: 'Component',
      category: '重型组件',
      name: '高级表格',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg'
    },
    {
      type: 'Component',
      category: '重型组件',
      name: '高级定义列表',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg'
    },
    {
      type: 'Component',
      category: '重型组件',
      name: '高级列表',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg'
    }
  ]
}
