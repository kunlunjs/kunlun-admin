import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import type { FC } from 'react'
import { createElement } from 'react'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/Icon'
import type { IconNames, MenuProps } from '@/types'
import logo from '../../assets/kunlun.png'
import './BasicLayout.less'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu
const factories: { path: string; icon: IconNames; name: string }[] = [
  { path: 'factories/form', icon: 'FormOutlined', name: '表单工厂' },
  { path: 'factories/table', icon: 'TableOutlined', name: '表格工厂' },
  { path: 'factories/description', icon: 'FontSizeOutlined', name: '详情工厂' },
  { path: 'factories/image', icon: 'FileImageOutlined', name: '图片工厂' },
  { path: 'factories/chart', icon: 'LineChartOutlined', name: '图表工厂' },
  { path: 'factories/document', icon: 'FileWordOutlined', name: '文档工厂' },
  { path: 'factories/file', icon: 'FileSearchOutlined', name: '文件工厂' },
  { path: 'factories/process', icon: 'ProjectOutlined', name: '流程工厂' }
]

interface BasicLayoutProps {}

export const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const [collapsed, setCollapse] = useState(false)
  const [selectMenus, setSelectedMenus] = useState(['components'])

  const handleCollapse = useCallback(() => {
    setCollapse(!collapsed)
  }, [collapsed])

  const handleMenuClick: MenuProps['onClick'] = ({ keyPath }) => {
    setSelectedMenus(keyPath)
    navigate(keyPath[0].startsWith('/') ? keyPath[0] : `/${keyPath[0]}`)
  }

  return (
    <Layout className="h-[100vh]">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
      >
        <div className="logo mb-8 flex items-center justify-center p-2">
          <img src={logo} alt="昆仑" className="w-full" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleMenuClick}
          selectedKeys={selectMenus}
        >
          <Menu.Item key="templates" icon={<Icon name="AppstoreOutlined" />}>
            组件/模板
          </Menu.Item>
          <Menu.Item key="datas" icon={<Icon name="DatabaseOutlined" />}>
            数据管理
          </Menu.Item>
          <Menu.Item key="icons" icon={<Icon name="SmileOutlined" />}>
            图标大全
          </Menu.Item>
          <Menu.Item key="charts" icon={<Icon name="PieChartOutlined" />}>
            图形图像
          </Menu.Item>
          <Menu.Item key="assemble" icon={<Icon name="AppstoreAddOutlined" />}>
            页面装配
          </Menu.Item>
          <SubMenu
            key="factories"
            title="渲染工厂"
            icon={<Icon name="ContainerOutlined" />}
          >
            {factories.map(i => {
              return (
                <Menu.Item icon={<Icon name={i.icon} />} key={i.path}>
                  {i.name}
                </Menu.Item>
              )
            })}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background h-12 p-0">
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className:
              'px-8 text-lg leading-[64px] cursor-pointer transition transition-colors',
            onClick: handleCollapse
          })}
        </Header>
        <Content className="mx-4 overflow-auto">
          <Breadcrumb className="my-2">
            <Breadcrumb.Item>模板/组件</Breadcrumb.Item>
            {selectMenus.length > 1 && (
              <Breadcrumb.Item>{selectMenus[0]}</Breadcrumb.Item>
            )}
          </Breadcrumb>
          <div className="site-layout-background min-h-full p-6">
            {/* <Outlet /> */}
            {children}
          </div>
        </Content>
        <Footer className="p-2 text-center">
          Kunlun Admin ©2022 Created by Turing FE
        </Footer>
      </Layout>
    </Layout>
  )
}
