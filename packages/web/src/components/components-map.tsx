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
  Image
} from 'antd'
import type { ReactNode } from 'react'
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

const KLMenu = (props: MenuProps) => {
  return <div>菜单</div>
}
const KLCheckbox = (props: CheckboxProps) => {
  return <div>菜单</div>
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
const KLButton = (props: ButtonProps) => {
  return <Button {...props}>按钮</Button>
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
  return <div>菜单</div>
}
const KLInputNumber = (props: InputNumberProps) => {
  return <InputNumber {...props} />
}
const KLPageHeader = (props: PageHeaderProps) => {
  return <div>菜单</div>
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
  return <div>菜单</div>
}
const KLAffix = (props: AffixProps) => {
  return <Affix {...props} />
}
const KLBreadcrumb = (props: BreadcrumbProps) => {
  return <div>菜单</div>
}
const KLPopconfirm = (props: PopconfirmProps) => {
  return <div>菜单</div>
}
const KLForm = (props: FormProps) => {
  return <div>菜单</div>
}
const KLPagination = (props: PaginationProps) => {
  return <div>菜单</div>
}
const KLSteps = (props: StepsProps) => {
  return <div>菜单</div>
}
const KLCascader = (props: CascaderProps) => {
  return <div>菜单</div>
}
const KLRadio = (props: RadioProps) => {
  return <div>菜单</div>
}
const KLAutoComplete = (props: AutoCompleteProps) => {
  return <div>菜单</div>
}
const KLCalendar = (props: CalendarProps) => {
  return <div>菜单</div>
}
const KLAvatar = (props: AvatarProps) => {
  return <Avatar {...props} />
}
const KLAlert = (props: AlertProps) => {
  return <div>菜单</div>
}
const KLTransfer = (props: TransferProps) => {
  return <div>菜单</div>
}
const KLTreeSelect = (props: TreeSelectProps) => {
  return <div>菜单</div>
}
const KLRate = (props: RateProps) => {
  return <div>菜单</div>
}
const KLMentions = (props: MentionsProps) => {
  return <div>菜单</div>
}
const KLCarousel = (props: CarouselProps) => {
  return <div>菜单</div>
}
const KLDescription = (props: DescriptionsProps) => {
  return <div>菜单</div>
}
const KLDatePicker = (props: DatePickerProps) => {
  return <div>菜单</div>
}
const KLImage = (props: ImageProps) => {
  return <Image {...props} />
}
const KLComment = (props: CommentProps) => {
  return <div>菜单</div>
}
const KLUpload = (props: UploadProps) => {
  return <div>菜单</div>
}
const KLSwitch = (props: SwitchProps) => {
  return <div>菜单</div>
}
const KLStatistic = (props: StatisticProps) => {
  return <div>菜单</div>
}
const KLCollapse = (props: CollapseProps) => {
  return <div>菜单</div>
}
const KLEmpty = (props: EmptyProps) => {
  return <div>菜单</div>
}
const KLTimePicker = (props: TimePickerProps) => {
  return <div>菜单</div>
}
const KLTimeline = (props: TimelineProps) => {
  return <div>菜单</div>
}
const KLPopover = (props: PopoverProps) => {
  return <div>菜单</div>
}
const KLSpin = (props: SpinProps) => {
  return <div>菜单</div>
}
const KLSkeleton = (props: SkeletonProps) => {
  return <div>菜单</div>
}
const KLTabs = (props: TabsProps) => {
  return <div>菜单</div>
}
const KLModal = (props: ModalProps) => {
  return <div>菜单</div>
}
const KLTooltip = (props: TooltipProps) => {
  return <div>菜单</div>
}
const KLDrawer = (props: DrawerProps) => {
  return <div>菜单</div>
}
const KLTree = (props: TreeProps) => {
  return <div>菜单</div>
}
const KLResult = (props: ResultProps) => {
  return <div>菜单</div>
}
const KLCard = (props: CardProps) => {
  return <Card {...props}>卡片</Card>
}
const KLTag = (props: TagProps) => {
  return <div>菜单</div>
}
const KLList = (props: ListProps) => {
  return <div>菜单</div>
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
  Space: KLSpace,
  Layout: KLLayout,
  Divider: KLDivide,
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
  Popover: KLPopover,
  Tooltip: KLTooltip,
  Collapse: KLCollapse,
  Timeline: KLTimeline,
  Statistic: KLStatistic,
  Descriptions: KLDescription,
  /* 反馈 */
  Modal: KLModal,
  Alert: KLAlert,
  Drawer: KLDrawer,
  Result: KLResult,
  Progress: KLProgress,
  Popconfirm: KLPopconfirm,
  Spin: KLSpin,
  /* 其他 */
  Skeleton: KLSkeleton
}
