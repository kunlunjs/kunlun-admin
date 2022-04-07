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
type Category = typeof categories[number]
// Array.from(document.getElementsByClassName('components-overview-img')).map(i => i.children[0].currentSrc)
export const components: Record<
  Category,
  {
    category: Category
    name: string
    src: string
    draggable: boolean
  }[]
> = {
  通用: [
    {
      category: '通用',
      name: '按钮',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg'
    },
    {
      category: '通用',
      name: '图标',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg'
    },
    {
      category: '通用',
      name: '排版',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg'
    }
  ],
  布局: [
    {
      category: '布局',
      name: '分割线',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg'
    },
    {
      category: '布局',
      name: '栅格',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg'
    },
    {
      category: '布局',
      name: '布局',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg'
    },
    {
      category: '布局',
      name: '间距',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg'
    }
  ],
  导航: [
    {
      category: '导航',
      name: '固钉',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg'
    },
    {
      category: '导航',
      name: '面包屑',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg'
    },
    {
      category: '导航',
      name: '下拉菜单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg'
    },
    {
      category: '导航',
      name: '导航菜单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg'
    },
    {
      category: '导航',
      name: '分页',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg'
    },
    {
      category: '导航',
      name: '页头',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg'
    },
    {
      category: '导航',
      name: '步骤条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg'
    }
  ],
  数据录入: [
    {
      category: '数据录入',
      name: '自动完成',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg'
    },
    {
      category: '数据录入',
      name: '多选框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg'
    },
    {
      category: '数据录入',
      name: '级联选择',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg'
    },
    {
      category: '数据录入',
      name: '日期选择框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg'
    },
    {
      category: '数据录入',
      name: '表单',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg'
    },
    {
      category: '数据录入',
      name: '数字输入框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg'
    },
    {
      category: '数据录入',
      name: '输入框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg'
    },
    {
      category: '数据录入',
      name: '提及',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg'
    },
    {
      category: '数据录入',
      name: '评分',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg'
    },
    {
      category: '数据录入',
      name: '单选框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg'
    },
    {
      category: '数据录入',
      name: '开关',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg'
    },
    {
      category: '数据录入',
      name: '滑动输入条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg'
    },
    {
      category: '数据录入',
      name: '选择器',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg'
    },
    {
      category: '数据录入',
      name: '树选择',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg'
    },
    {
      category: '数据录入',
      name: '穿梭框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg'
    },
    {
      category: '数据录入',
      name: '时间选择框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg'
    },
    {
      category: '数据录入',
      name: '上传',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg'
    }
  ],
  数据展示: [
    {
      category: '数据展示',
      name: '头像',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg'
    },
    {
      category: '数据展示',
      name: '徽标数',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg'
    },
    {
      category: '数据展示',
      name: '评论',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg'
    },
    {
      category: '数据展示',
      name: '折叠面板',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg'
    },
    {
      category: '数据展示',
      name: '走马灯',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg'
    },
    {
      category: '数据展示',
      name: '卡片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/NqXt8DJhky/Card.svg'
    },
    {
      category: '数据展示',
      name: '日历',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg'
    },
    {
      category: '数据展示',
      name: '描述列表',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg'
    },
    {
      category: '数据展示',
      name: '空状态',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg'
    },
    {
      category: '数据展示',
      name: '图片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg'
    },
    {
      category: '数据展示',
      name: '列表',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg'
    },
    {
      category: '数据展示',
      name: '气泡卡片',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg'
    },
    {
      category: '数据展示',
      name: '统计数值',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg'
    },
    {
      category: '数据展示',
      name: '树形控件',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg'
    },
    {
      category: '数据展示',
      name: '文字提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg'
    },
    {
      category: '数据展示',
      name: '时间轴',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg'
    },
    {
      category: '数据展示',
      name: '标签',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg'
    },
    {
      category: '数据展示',
      name: '标签页',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg'
    },
    {
      category: '数据展示',
      name: '表格',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg'
    }
  ],
  反馈: [
    {
      category: '反馈',
      name: '警告提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg'
    },
    {
      category: '反馈',
      name: '抽屉',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg'
    },
    {
      category: '反馈',
      name: '对话框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg'
    },
    {
      category: '反馈',
      name: '全局提示',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg'
    },
    {
      category: '反馈',
      name: '通知提醒框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg'
    },
    {
      category: '反馈',
      name: '进度条',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg'
    },
    {
      category: '反馈',
      name: '气泡确认框',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg'
    },
    {
      category: '反馈',
      name: '结果',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg'
    },
    {
      category: '反馈',
      name: '加载中',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg'
    },
    {
      category: '反馈',
      name: '骨架屏',
      draggable: true,
      src: 'https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg'
    }
  ],
  其他: [
    {
      category: '其他',
      name: '锚点',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg'
    },
    {
      category: '其他',
      name: '回到顶部',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/tJZ5jbTwX/BackTop.svg'
    },
    {
      category: '其他',
      name: '全局化配置',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg'
    }
  ],
  重型组件: [
    {
      category: '重型组件',
      name: '可编辑表格',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg'
    },
    {
      category: '重型组件',
      name: '高级布局',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg'
    },
    {
      category: '重型组件',
      name: '高级表单',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg'
    },
    {
      category: '重型组件',
      name: '高级表格',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg'
    },
    {
      category: '重型组件',
      name: '高级定义列表',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg'
    },
    {
      category: '重型组件',
      name: '高级列表',
      draggable: false,
      src: 'https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg'
    }
  ]
}
