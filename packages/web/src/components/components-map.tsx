/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  Col
} from 'antd'
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
  UploadProps
} from '@/types'

const KLGrid = forwardRef(function KLGrid(props, ref) {
  return (
    <Row>
      <Col span={24}>col</Col>
    </Row>
  )
})
const KLMenu = forwardRef(function KLMenu(props: MenuProps, ref) {
  return <div>Menu</div>
})
const KLCheckbox = forwardRef(function KLCheckbox(props: CheckboxProps, ref) {
  return <div>Checkbox</div>
})
const KLInput = forwardRef(function KLInput(props: InputProps, ref) {
  return <Input {...props} />
})
const KLSelect = forwardRef(function KLSelect(props: SelectProps, ref) {
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
const KLButton = forwardRef(function KLButton(props: ButtonProps, ref) {
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
const KLDivider = forwardRef(function KLDivider(props: DividerProps, ref) {
  return <Divider {...props} />
})
const KLTable = forwardRef(function KLTable(props: TableProps, ref) {
  return <Table {...props} />
})
const KLTypography = forwardRef(function KLTypography(
  props: TypographyProps,
  ref
) {
  return <div>Typegraphy</div>
})
const KLDropdown = forwardRef(function KLDropdown(props: DropdownProps, ref) {
  return <div>Dropdown</div>
})
const KLInputNumber = forwardRef(function KLInputNumber(
  props: InputNumberProps,
  ref
) {
  return <InputNumber {...props} />
})
const KLPageHeader = forwardRef(function KLPageHeader(
  props: PageHeaderProps,
  ref
) {
  return <div>PageHeader</div>
})
const KLProgress = forwardRef(function KLProgress(props: ProgressProps, ref) {
  return <Progress {...props} />
})
// const KLSpace = forwardRef(function KLSpace(props: SpaceProps, ref) {
//   return <Space {...props}>{props.children}</Space>
// })
const KLSlider = forwardRef(function KLSlider(props: SliderProps, ref) {
  return <Slider {...props} />
})
const KLBadge = forwardRef(function KLBadge(props: BadgeProps, ref) {
  return <Badge {...props} />
})
const KLLayout = forwardRef(function KLLayout(props: LayoutProps, ref) {
  return <div>Layout</div>
})
const KLAffix = forwardRef(function KLAffix(props: AffixProps, ref) {
  return <Affix {...props} />
})
const KLBreadcrumb = forwardRef(function KLBreadcrumb(
  props: BreadcrumbProps,
  ref
) {
  return <div>Breadcrumb</div>
})
// const KLPopconfirm = forwardRef(function KLPopconfirm(
//   props: PopconfirmProps,
//   ref
// ) {
//   return <div>Popconfirm</div>
// })
const KLForm = forwardRef(function KLForm(props: FormProps, ref) {
  return <div>Form</div>
})
const KLPagination = forwardRef(function KLPagination(
  props: PaginationProps,
  ref
) {
  return <div>Pagination</div>
})
const KLSteps = forwardRef(function KLSteps(props: StepsProps, ref) {
  return <div>Steps</div>
})
const KLCascader = forwardRef(function KLCascader(props: CascaderProps, ref) {
  return <div>Cascader</div>
})
const KLRadio = forwardRef(function KLRadio(props: RadioProps, ref) {
  return <div>Radio</div>
})
const KLAutoComplete = forwardRef(function KLAutoComplete(
  props: AutoCompleteProps,
  ref
) {
  return <div>AutoComplate</div>
})
const KLCalendar = forwardRef(function KLCalendar(props: CalendarProps, ref) {
  return <div>Calendar</div>
})
const KLAvatar = forwardRef(function KLAvatar(props: AvatarProps, ref) {
  return <Avatar {...props} />
})
// const KLAlert = forwardRef(function KLAlert(props: AlertProps, ref) {
//   return <div>Alert</div>
// })
const KLTransfer = forwardRef(function KLTransfer(props: TransferProps, ref) {
  return <div>Transfer</div>
})
const KLTreeSelect = forwardRef(function KLTreeSelect(
  props: TreeSelectProps,
  ref
) {
  return <div>TreeSelect</div>
})
const KLRate = forwardRef(function KLRate(props: RateProps, ref) {
  return <div>Rate</div>
})
const KLMentions = forwardRef(function KLMentions(props: MentionsProps, ref) {
  return <div>Mentions</div>
})
const KLCarousel = forwardRef(function KLCarousel(props: CarouselProps, ref) {
  return <div>Carousel</div>
})
const KLDescription = forwardRef(function KLDescription(
  props: DescriptionsProps,
  ref
) {
  return <div>Description</div>
})
const KLDatePicker = forwardRef(function KLDatePicker(
  props: DatePickerProps,
  ref
) {
  return <div>DatePicker</div>
})
const KLImage = forwardRef(function KLImage(props: ImageProps, ref) {
  return <Image {...props} />
})
const KLComment = forwardRef(function KLComment(props: CommentProps, ref) {
  return <div>Comment</div>
})
const KLUpload = forwardRef(function KLUpload(props: UploadProps, ref) {
  return <div>Upload</div>
})
const KLSwitch = forwardRef(function KLSwitch(props: SwitchProps, ref) {
  return <div>Switch</div>
})
const KLStatistic = forwardRef(function KLStatistic(
  props: StatisticProps,
  ref
) {
  return <div>Statistic</div>
})
const KLCollapse = forwardRef(function KLCollapse(props: CollapseProps, ref) {
  return <div>Collapse</div>
})
const KLEmpty = forwardRef(function KLEmpty(props: EmptyProps, ref) {
  return <div>Empty</div>
})
const KLTimePicker = forwardRef(function KLTimePicker(
  props: TimePickerProps,
  ref
) {
  return <div>TimePicker</div>
})
const KLTimeline = forwardRef(function KLTimeline(props: TimelineProps, ref) {
  return <div>Timeline</div>
})
// const KLPopover = forwardRef(function KLPopover(props: PopoverProps, ref) {
//   return <div>Popover</div>
// })
// const KLSpin = forwardRef(function KLSpin(props: SpinProps, ref) {
//   return <div>Spin</div>
// })
const KLSkeleton = forwardRef(function KLSkeleton(props: SkeletonProps, ref) {
  return <div>Skelteton</div>
})
const KLTabs = forwardRef(function KLTabs(props: TabsProps, ref) {
  return <div>Tabs</div>
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
const KLTree = forwardRef(function KLTree(props: TreeProps, ref) {
  return <div>Tree</div>
})
const KLResult = forwardRef(function KLResult(props: ResultProps, ref) {
  return <div>Result</div>
})
const KLCard = forwardRef(function KLCard(props: CardProps, ref) {
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
const KLTag = forwardRef(function KLTags(props: TagProps, ref) {
  return <div>Tag</div>
})
const KLList = forwardRef(function KLList(props: ListProps, ref) {
  return <div>List</div>
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
  Grid: KLGrid,
  // Space: KLSpace,
  Layout: KLLayout,
  Divider: KLDivider,
  /* 通用 */
  Button: KLButton,
  Typography: KLTypography,
  /* 导航 */
  Menu: KLMenu,
  Steps: KLSteps,
  Affix: KLAffix,
  Dropdown: KLDropdown,
  PageHeader: KLPageHeader,
  Pagination: KLPagination,
  Breadcrumb: KLBreadcrumb,
  /* 数据录入 */
  Form: KLForm,
  Rate: KLRate,
  Radio: KLRadio,
  Input: KLInput,
  Select: KLSelect,
  Slider: KLSlider,
  Switch: KLSwitch,
  Upload: KLUpload,
  Cascader: KLCascader,
  Checkbox: KLCheckbox,
  Mentions: KLMentions,
  Transfer: KLTransfer,
  DatePicker: KLDatePicker,
  TimePicker: KLTimePicker,
  TreeSelect: KLTreeSelect,
  InputNumber: KLInputNumber,
  AutoComplete: KLAutoComplete,
  /* 数据展示 */
  Card: KLCard,
  Badge: KLBadge,
  Empty: KLEmpty,
  Image: KLImage,
  Avatar: KLAvatar,
  Comment: KLComment,
  Calendar: KLCalendar,
  Carousel: KLCarousel,
  Tag: KLTag,
  List: KLList,
  Tabs: KLTabs,
  Tree: KLTree,
  Table: KLTable,
  // Popover: KLPopover,
  // Tooltip: KLTooltip,
  Collapse: KLCollapse,
  Timeline: KLTimeline,
  Statistic: KLStatistic,
  Descriptions: KLDescription,
  /* 反馈 */
  // Spin: KLSpin,
  // Modal: KLModal,
  // Alert: KLAlert,
  // Drawer: KLDrawer,
  Result: KLResult,
  Progress: KLProgress,
  // Popconfirm: KLPopconfirm,
  /* 其他 */
  Skeleton: KLSkeleton
}
