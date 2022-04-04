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
const factories: { key: string; icon: IconNames; name: string }[] = [
  { key: 'factories/table', icon: 'TableOutlined', name: '表格工厂' },
  { key: 'factories/description', icon: 'FontSizeOutlined', name: '详情工厂' }
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
        <div className="logo flex justify-center items-center mb-8 p-2">
          <img src={logo} alt="昆仑" />
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
                <Menu.Item icon={<Icon name={i.icon} />} key={i.key}>
                  {i.name}
                </Menu.Item>
              )
            })}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background p-0 h-12">
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
          <div className="site-layout-background p-6 min-h-full">
            {/* <Outlet /> */}
            {children}
          </div>
        </Content>
        <Footer className="text-center p-2">
          Kunlun Admin ©2022 Created by Turing FE
        </Footer>
      </Layout>
    </Layout>
  )
}
