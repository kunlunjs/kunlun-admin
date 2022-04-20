/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ArrowUpOutlined } from '@ant-design/icons'
import {
  Affix,
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Input,
  InputNumber,
  Progress,
  Select,
  Slider,
  Table,
  Image,
  Row,
  Col,
  Typography,
  Breadcrumb,
  Pagination,
  Menu,
  Layout,
  Steps,
  PageHeader,
  Checkbox,
  AutoComplete,
  Cascader,
  DatePicker,
  Form,
  Mentions,
  Rate,
  Radio,
  Switch,
  Transfer,
  Carousel,
  Calendar,
  Descriptions,
  Empty,
  List,
  Comment,
  Statistic,
  Timeline,
  Tag,
  Tabs,
  Result
} from 'antd'
import { Header, Content, Footer } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import clsx from 'clsx'
import { omit } from 'lodash'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import { useDroppedStore } from '@/stores'
import type {
  AffixProps,
  AutoCompleteProps,
  AvatarProps,
  BadgeProps,
  BreadcrumbProps,
  BreadcrumbItemProps,
  ButtonProps,
  CalendarProps,
  CardProps,
  CarouselProps,
  CascaderProps,
  CheckboxProps,
  CollapseProps,
  CommentProps,
  DatePickerProps,
  DescriptionsProps,
  DividerProps,
  DropdownProps,
  EmptyProps,
  FormProps,
  ImageProps,
  InputNumberProps,
  InputProps,
  klComponents,
  LayoutProps,
  ListProps,
  MentionsProps,
  MenuProps,
  PageHeaderProps,
  PaginationProps,
  ProgressProps,
  RadioProps,
  RateProps,
  ResultProps,
  SelectProps,
  SkeletonProps,
  SliderProps,
  StatisticProps,
  StepsProps,
  SwitchProps,
  TableProps,
  TabsProps,
  TagProps,
  TimelineProps,
  TimePickerProps,
  TransferProps,
  TreeProps,
  TreeSelectProps,
  TypographyProps,
  TypographyTextProps,
  TypographyTitleProps,
  UploadProps
} from '@/types'

export const KLGrid = forwardRef(function KLGrid(props: any, ref) {
  return (
    <Row className={clsx('bg-gray-100')} {...props}>
      <Col span={Number(props?.span)}>col</Col>
    </Row>
  )
})
export const KLMenu = forwardRef(function KLMenu(props: MenuProps, ref) {
  console.log('Menu:', props)
  return <Menu>123</Menu>
})
export const KLCheckbox = forwardRef(function KLCheckbox(
  props: CheckboxProps,
  ref
) {
  return <Checkbox {...props}>Checkbox</Checkbox>
})
export const KLInput = forwardRef(function KLInput(props: InputProps, ref) {
  return <Input {...props} />
})
export const KLSelect = forwardRef(function KLSelect(props: SelectProps, ref) {
  return (
    <Select {...props}>
      {props.options?.map((i, ix) => (
        <Select.Option key={`${i.label}-${ix}`} value={i.value}>
          {i.label}
        </Select.Option>
      ))}
    </Select>
  )
})
export const KLButton = forwardRef(function KLButton(props: ButtonProps, ref) {
  console.log('KLButton props: ', props)
  const { changeSelected, selected } = useDroppedStore()
  return (
    <Button
      type="primary"
      {...omit(props, ['id'])}
      onClick={() => changeSelected(props.id)}
      className={clsx(
        selected === props.id && '!border-blue-400',
        props.className
      )}
    >
      按钮
    </Button>
  )
})
export const KLDivider = forwardRef(function KLDivider(
  props: DividerProps,
  ref
) {
  return <Divider {...props} />
})
export const KLTable = forwardRef(function KLTable(props: TableProps, ref) {
  return <Table {...props} />
})
export const KLTypography = forwardRef(function KLTypography(
  props: TypographyProps,
  ref
) {
  return <div>Typegraphy</div>
})
export const KLTypographyTitle = forwardRef(function KLTypographyTitle(
  props: TypographyTitleProps,
  ref
) {
  return <Typography.Title>KLTypographyTitle</Typography.Title>
})
export const KLTypographyText = forwardRef(function KLTypographyText(
  props: TypographyTextProps,
  ref
) {
  return <Typography.Text>KLTypographyTitle</Typography.Text>
})
export const KLDropdown = forwardRef(function KLDropdown(
  props: DropdownProps,
  ref
) {
  // const menu = (
  //   <Menu
  //     items={[
  //       {
  //         label: 'Submit and continue',
  //         key: '1'
  //       }
  //     ]}
  //   />
  // )
  return (
    <div>123</div>
    //@ts-ignore
    // <Dropdown placement="bottomLeft" arrow overlay={menu}>
    //   <Button>bottomLeft</Button>
    // </Dropdown>
  )
})
export const KLInputNumber = forwardRef(function KLInputNumber(
  props: InputNumberProps,
  ref
) {
  return <InputNumber {...props} />
})
export const KLPageHeader = forwardRef(function KLPageHeader(
  props: PageHeaderProps,
  ref
) {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  )
})
export const KLProgress = forwardRef(function KLProgress(
  props: ProgressProps,
  ref
) {
  return <Progress {...props} />
})
// const KLSpace = forwardRef(function KLSpace(props: SpaceProps, ref) {
//   return <Space {...props}>{props.children}</Space>
// })
export const KLSlider = forwardRef(function KLSlider(props: SliderProps, ref) {
  return <Slider {...props} />
})
export const KLBadge = forwardRef(function KLBadge(props: BadgeProps, ref) {
  return <Badge {...props} />
})
export const KLLayout = forwardRef(function KLLayout(props: LayoutProps, ref) {
  return (
    <Layout className={clsx('h-72', 'bg-indigo-900')} {...props}>
      <Sider className={clsx('bg-indigo-900')}>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
})
export const KLAffix = forwardRef(function KLAffix(props: AffixProps, ref) {
  return (
    <Affix {...props}>
      <Button type="primary">Affix top</Button>
    </Affix>
  )
})
export const KLBreadcrumb = forwardRef(function KLBreadcrumb(
  props: BreadcrumbProps,
  ref
) {
  return (
    <Breadcrumb {...props}>
      <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
      <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
    </Breadcrumb>
  )
})
export const KLBreadcrumbItem = forwardRef(function KLBreadcrumbItem(
  props: BreadcrumbItemProps,
  ref
) {
  return <Breadcrumb.Item>面包屑的子单元</Breadcrumb.Item>
})
// const KLPopconfirm = forwardRef(function KLPopconfirm(
//   props: PopconfirmProps,
//   ref
// ) {
//   return <div>Popconfirm</div>
// })
export const KLForm = forwardRef(function KLForm(props: FormProps, ref) {
  return (
    <Form
      {...props}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
})
export const KLPagination = forwardRef(function KLPagination(
  props: PaginationProps,
  ref
) {
  return <Pagination defaultCurrent={1} total={50} {...props} />
})
export const KLSteps = forwardRef(function KLSteps(props: StepsProps, ref) {
  const { Step } = Steps
  return (
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  )
})
export const KLCascader = forwardRef(function KLCascader(
  props: CascaderProps,
  ref
) {
  return (
    <Cascader {...props} options={props.options} placeholder="Please select" />
  )
})
const KLRadio = forwardRef(function KLRadio(props: RadioProps, ref) {
  return <Radio {...props}>Radio</Radio>
})
export const KLAutoComplete = forwardRef(function KLAutoComplete(
  props: AutoCompleteProps,
  ref
) {
  return (
    <AutoComplete
      {...props}
      value={props.value}
      options={props.options}
      style={{ width: 200 }}
      placeholder="control mode"
    />
  )
})
export const KLCalendar = forwardRef(function KLCalendar(
  props: CalendarProps,
  ref
) {
  return (
    <div className="site-calendar-demo-card">
      <Calendar fullscreen={false} {...props} />
    </div>
  )
})
export const KLAvatar = forwardRef(function KLAvatar(props: AvatarProps, ref) {
  return <Avatar {...props} />
})
// const KLAlert = forwardRef(function KLAlert(props: AlertProps, ref) {
//   return <div>Alert</div>
// })
export const KLTransfer = forwardRef(function KLTransfer(
  props: TransferProps,
  ref
) {
  return <Transfer {...props} titles={['Source', 'Target']} />
})
export const KLTreeSelect = forwardRef(function KLTreeSelect(
  props: TreeSelectProps,
  ref
) {
  return <div>TreeSelect</div>
})
export const KLRate = forwardRef(function KLRate(props: RateProps, ref) {
  return (
    <Rate
      allowHalf
      defaultValue={props.defaultValue ? props.defaultValue : 2.5}
      {...props}
    />
  )
})
const KLMentions = forwardRef(function KLMentions(props: MentionsProps, ref) {
  const { Option } = Mentions
  return (
    <Mentions
      style={{ width: '100%' }}
      {...props}
      // onChange={onChange}
      // onSelect={onSelect}
      defaultValue="@afc163"
    >
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </Mentions>
  )
})
export const KLCarousel = forwardRef(function KLCarousel(
  props: CarouselProps,
  ref
) {
  return (
    <Carousel {...props}>
      <div>
        <h3 className={clsx('h-72', 'bg-indigo-900')}>1</h3>
      </div>
      <div>
        <h3 className={clsx('h-72', 'bg-indigo-900')}>2</h3>
      </div>
      <div>
        <h3 className={clsx('h-72', 'bg-indigo-900')}>3</h3>
      </div>
      <div>
        <h3 className={clsx('h-72', 'bg-indigo-900')}>4</h3>
      </div>
    </Carousel>
  )
})
export const KLDescription = forwardRef(function KLDescription(
  props: DescriptionsProps,
  ref
) {
  return (
    <Descriptions title="User Info" {...props}>
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  )
})
export const KLDatePicker = forwardRef(function KLDatePicker(
  props: DatePickerProps,
  ref
) {
  return <DatePicker {...props} />
})
export const KLImage = forwardRef(function KLImage(props: ImageProps, ref) {
  console.log('图片', props)
  return (
    <Image
      width={200}
      src={
        props?.src
          ? props?.src
          : 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
      {...props}
    />
  )
})
export const KLComment = forwardRef(function KLComment(
  props: CommentProps,
  ref
) {
  return (
    <Comment
      // actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={props.content}
    />
  )
})
export const KLUpload = forwardRef(function KLUpload(props: UploadProps, ref) {
  return <div>Upload</div>
})
export const KLSwitch = forwardRef(function KLSwitch(props: SwitchProps, ref) {
  return <Switch defaultChecked {...props} />
})
export const KLStatistic = forwardRef(function KLStatistic(
  props: StatisticProps,
  ref
) {
  return (
    <Statistic
      title="Active"
      value={11.28}
      precision={2}
      valueStyle={{ color: '#3f8600' }}
      prefix={<ArrowUpOutlined />}
      suffix="%"
    />
  )
})
export const KLCollapse = forwardRef(function KLCollapse(
  props: CollapseProps,
  ref
) {
  return <div>Collapse</div>
})
export const KLEmpty = forwardRef(function KLEmpty(props: EmptyProps, ref) {
  return <Empty />
})
export const KLTimePicker = forwardRef(function KLTimePicker(
  props: TimePickerProps,
  ref
) {
  return <div>TimePicker</div>
})
const KLTimeline = forwardRef(function KLTimeline(props: TimelineProps, ref) {
  return (
    <Timeline {...props}>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  )
})
// const KLPopover = forwardRef(function KLPopover(props: PopoverProps, ref) {
//   return <div>Popover</div>
// })
// const KLSpin = forwardRef(function KLSpin(props: SpinProps, ref) {
//   return <div>Spin</div>
// })
export const KLSkeleton = forwardRef(function KLSkeleton(
  props: SkeletonProps,
  ref
) {
  return <div>Skelteton</div>
})
export const KLTabs = forwardRef(function KLTabs(props: TabsProps, ref) {
  const { TabPane } = Tabs
  return (
    <Tabs defaultActiveKey="1" {...props}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
})
// const KLModal = forwardRef(function KLModal(props: ModalProps, ref) {
//   return <div>Modal</div>
// })
// const KLTooltip = forwardRef(function KLTooltip(props: TooltipProps, ref) {
//   return <div>Tootip</div>
// })
// const KLDrawer = forwardRef(function KLDrawer(props: DrawerProps, ref) {
//   return <div>Drawer</div>
// })
export const KLTree = forwardRef(function KLTree(props: TreeProps, ref) {
  return <div>Tree</div>
})
export const KLResult = forwardRef(function KLResult(props: ResultProps, ref) {
  return (
    <Result
      {...props}
      title="Your operation has been executed"
      extra={
        <Button type="primary" key="console">
          Go Console
        </Button>
      }
    />
  )
})
export const KLCard = forwardRef(function KLCard(props: CardProps, ref) {
  console.log('KLCard props: ', props)
  const { changeSelected, selected } = useDroppedStore()
  return (
    <Card
      title="标题"
      {...omit(props, ['id'])}
      {...(typeof props.cover === 'string'
        ? { cover: <img alt="" src={props.cover} /> }
        : {})}
      onClick={() => changeSelected(props.id)}
      className={clsx(
        'w-60',
        selected === props.id && '!border-blue-400',
        props.className
      )}
    >
      卡片内容
    </Card>
  )
})
export const KLTag = forwardRef(function KLTags(props: TagProps, ref) {
  return (
    <Tag color={props.color ? props.color : 'magenta'} {...props}>
      标签
    </Tag>
  )
})
export const KLList = forwardRef(function KLList(props: ListProps, ref) {
  return (
    <List
      itemLayout="horizontal"
      {...props}
      renderItem={(item: any) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  )
})
/* 布局 */
/* 通用 */
/* 导航 */
/* 数据录入 */
/* 数据展示 */
export const componentsMap: Partial<
  Record<typeof klComponents[number], ReactNode>
> = {
  /* 布局 */
  'Grid': KLGrid,
  // Space: KLSpace,
  'Layout': KLLayout,
  'Divider': KLDivider,
  /* 通用 */
  'Button': KLButton,
  'Typography': KLTypography,
  'Typography.Title': KLTypographyTitle,
  'Typography.Text': KLTypographyText,
  /* 导航 */
  'Menu': KLMenu,
  'Steps': KLSteps,
  'Affix': KLAffix,
  'Dropdown': KLDropdown,
  'PageHeader': KLPageHeader,
  'Pagination': KLPagination,
  'Breadcrumb': KLBreadcrumb,
  'Breadcrumb.Item': KLBreadcrumbItem,
  /* 数据录入 */
  'Form': KLForm,
  'Rate': KLRate,
  'Radio': KLRadio,
  'Input': KLInput,
  'Select': KLSelect,
  'Slider': KLSlider,
  'Switch': KLSwitch,
  'Upload': KLUpload,
  'Cascader': KLCascader,
  'Checkbox': KLCheckbox,
  'Mentions': KLMentions,
  'Transfer': KLTransfer,
  'DatePicker': KLDatePicker,
  'TimePicker': KLTimePicker,
  'TreeSelect': KLTreeSelect,
  'InputNumber': KLInputNumber,
  'AutoComplete': KLAutoComplete,
  /* 数据展示 */
  'Card': KLCard,
  'Badge': KLBadge,
  'Empty': KLEmpty,
  'Image': KLImage,
  'Avatar': KLAvatar,
  'Comment': KLComment,
  'Calendar': KLCalendar,
  'Carousel': KLCarousel,
  'Tag': KLTag,
  'List': KLList,
  'Tabs': KLTabs,
  'Tree': KLTree,
  'Table': KLTable,
  // Popover: KLPopover,
  // Tooltip: KLTooltip,
  'Collapse': KLCollapse,
  'Timeline': KLTimeline,
  'Statistic': KLStatistic,
  'Descriptions': KLDescription,
  /* 反馈 */
  // Spin: KLSpin,
  // Modal: KLModal,
  // Alert: KLAlert,
  // Drawer: KLDrawer,
  'Result': KLResult,
  'Progress': KLProgress,
  // Popconfirm: KLPopconfirm,
  /* 其他 */
  'Skeleton': KLSkeleton
}
