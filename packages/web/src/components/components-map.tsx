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
  Space,
  Table,
  Image,
  Row,
  Col
} from 'antd'
import clsx from 'clsx'
import { omit } from 'lodash'
import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import type {
  AffixProps,
  AlertProps,
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
  DrawerProps,
  DropdownProps,
  DroppedItem,
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
  ModalProps,
  PageHeaderProps,
  PaginationProps,
  PopconfirmProps,
  PopoverProps,
  ProgressProps,
  RadioProps,
  RateProps,
  ResultProps,
  SelectOptionProps,
  SelectProps,
  SkeletonProps,
  SliderProps,
  SpaceProps,
  SpinProps,
  StatisticProps,
  StepsProps,
  SwitchProps,
  TableProps,
  TabsProps,
  TagProps,
  TimelineProps,
  TimePickerProps,
  TooltipProps,
  TransferProps,
  TreeProps,
  TreeSelectProps,
  TypographyProps,
  UploadProps
} from '@/types'

interface PlaceholderProps extends DroppedItem {}

const Placeholder: FC<PlaceholderProps> = ({ id, title, src }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      key={title}
      // ref={drag}
      data-dragid={title}
      onClick={handleClick}
      className={clsx(
        'flex flex-col items-center relative max-h-8 my-4 pb-1 border border-solid border-gray-200 cursor-move',
        clicked && 'border-dashed'
      )}
    >
      <img alt={title} src={src} className="w-full max-h-6" />
      {/* <span className="absolute -bottom-5 -translate-x-1/2 mt-2 text-xs">
        {title}
      </span> */}
    </div>
  )
}

const KLGrid = () => {
  return (
    <Row>
      <Col span={24}>col</Col>
    </Row>
  )
}
const KLMenu = (props: MenuProps) => {
  return <div>Menu</div>
}
const KLCheckbox = (props: CheckboxProps) => {
  return <div>Checkbox</div>
}
const KLInput = (props: InputProps) => {
  return <Input {...props} />
}
const KLSelect = (props: SelectProps, options: SelectOptionProps) => {
  return (
    <Select {...props}>
      {options.map((i, ix) => (
        <Select.Option key={`${i.label}-${ix}`} value={i.value}>
          {i.label}
        </Select.Option>
      ))}
    </Select>
  )
}
const KLButton = (props: ButtonProps & { _placeholder?: DroppedItem }) => {
  return props._placeholder ? (
    <Placeholder {...props._placeholder} />
  ) : (
    <Button {...omit(props, '_placeholder')}>按钮</Button>
  )
}
const KLDivide = (props: DividerProps) => {
  return <Divider {...props} />
}
const KLTable = (props: TableProps) => {
  return <Table {...props} />
}
const KLTypography = (props: TypographyProps) => {
  return <div>Typegraphy</div>
}
const KLDropdown = (props: DropdownProps) => {
  return <div>Dropdown</div>
}
const KLInputNumber = (props: InputNumberProps) => {
  return <InputNumber {...props} />
}
const KLPageHeader = (props: PageHeaderProps) => {
  return <div>PageHeader</div>
}
const KLProgress = (props: ProgressProps) => {
  return <Progress {...props} />
}
const KLSpace = (props: SpaceProps) => {
  return <Space {...props}>{props.children}</Space>
}
const KLSlider = (props: SliderProps) => {
  return <Slider {...props} />
}
const KLBadge = (props: BadgeProps) => {
  return <Badge {...props} />
}
const KLLayout = (props: LayoutProps) => {
  return <div>Layout</div>
}
const KLAffix = (props: AffixProps) => {
  return <Affix {...props} />
}
const KLBreadcrumb = (props: BreadcrumbProps) => {
  return <div>Breadcrumb</div>
}
const KLPopconfirm = (props: PopconfirmProps) => {
  return <div>Popconfirm</div>
}
const KLForm = (props: FormProps) => {
  return <div>Form</div>
}
const KLPagination = (props: PaginationProps) => {
  return <div>Pagination</div>
}
const KLSteps = (props: StepsProps) => {
  return <div>Steps</div>
}
const KLCascader = (props: CascaderProps) => {
  return <div>Cascader</div>
}
const KLRadio = (props: RadioProps) => {
  return <div>Radio</div>
}
const KLAutoComplete = (props: AutoCompleteProps) => {
  return <div>AutoComplate</div>
}
const KLCalendar = (props: CalendarProps) => {
  return <div>Calendar</div>
}
const KLAvatar = (props: AvatarProps) => {
  return <Avatar {...props} />
}
const KLAlert = (props: AlertProps) => {
  return <div>Alert</div>
}
const KLTransfer = (props: TransferProps) => {
  return <div>Transfer</div>
}
const KLTreeSelect = (props: TreeSelectProps) => {
  return <div>TreeSelect</div>
}
const KLRate = (props: RateProps) => {
  return <div>Rate</div>
}
const KLMentions = (props: MentionsProps) => {
  return <div>Mentions</div>
}
const KLCarousel = (props: CarouselProps) => {
  return <div>Carousel</div>
}
const KLDescription = (props: DescriptionsProps) => {
  return <div>Description</div>
}
const KLDatePicker = (props: DatePickerProps) => {
  return <div>DatePicker</div>
}
const KLImage = (props: ImageProps) => {
  return <Image {...props} />
}
const KLComment = (props: CommentProps) => {
  return <div>Comment</div>
}
const KLUpload = (props: UploadProps) => {
  return <div>Upload</div>
}
const KLSwitch = (props: SwitchProps) => {
  return <div>Switch</div>
}
const KLStatistic = (props: StatisticProps) => {
  return <div>Statistic</div>
}
const KLCollapse = (props: CollapseProps) => {
  return <div>Collapse</div>
}
const KLEmpty = (props: EmptyProps) => {
  return <div>Empty</div>
}
const KLTimePicker = (props: TimePickerProps) => {
  return <div>TimePicker</div>
}
const KLTimeline = (props: TimelineProps) => {
  return <div>Timeline</div>
}
const KLPopover = (props: PopoverProps) => {
  return <div>Popover</div>
}
const KLSpin = (props: SpinProps) => {
  return <div>Spin</div>
}
const KLSkeleton = (props: SkeletonProps) => {
  return <div>Skelteton</div>
}
const KLTabs = (props: TabsProps) => {
  return <div>Tabs</div>
}
const KLModal = (props: ModalProps) => {
  return <div>Modal</div>
}
const KLTooltip = (props: TooltipProps) => {
  return <div>Tootip</div>
}
const KLDrawer = (props: DrawerProps) => {
  return <div>Drawer</div>
}
const KLTree = (props: TreeProps) => {
  return <div>Tree</div>
}
const KLResult = (props: ResultProps) => {
  return <div>Result</div>
}
const KLCard = (props: CardProps) => {
  return <Card {...props}>Card</Card>
}
const KLTag = (props: TagProps) => {
  return <div>Tag</div>
}
const KLList = (props: ListProps) => {
  return <div>List</div>
}
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
  Space: KLSpace,
  Layout: KLLayout,
  Divider: KLDivide,
  /* 通用 */
  Button: (props: ButtonProps & { _placeholder: DroppedItem }) => (
    <KLButton {...props} />
  ),
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
  Popover: KLPopover,
  Tooltip: KLTooltip,
  Collapse: KLCollapse,
  Timeline: KLTimeline,
  Statistic: KLStatistic,
  Descriptions: KLDescription,
  /* 反馈 */
  Spin: KLSpin,
  Modal: KLModal,
  Alert: KLAlert,
  Drawer: KLDrawer,
  Result: KLResult,
  Progress: KLProgress,
  Popconfirm: KLPopconfirm,
  /* 其他 */
  Skeleton: KLSkeleton
}
