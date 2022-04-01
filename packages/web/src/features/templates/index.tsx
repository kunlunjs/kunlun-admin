import type { MouseEvent } from 'react'
import { Component, createRef } from 'react'
import Frame from 'react-frame-component'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { getBlocks, getIcons } from './helpers'
import './index.css'

const iconList = getIcons()
const blockList: string[] = []

Object.entries(iconList).forEach(([type, icons]) => {
  Object.keys(icons).map(name => blockList.push(`${name},${type}`))
})

const themeList = ['indigo', 'yellow', 'red', 'purple', 'pink', 'blue', 'green']

const desktopIcon = (
  <svg
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
    <path d="M8 21h8m-4-4v4" />
  </svg>
)

const phoneIcon = (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
    <path d="M12 18h.01" />
  </svg>
)

const tabletIcon = (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
    <path d="M12 18h.01" />
  </svg>
)

const clipboardIcon = (
  <svg
    viewBox="0 0 25 24"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.914 1h-18v19" />
    <path d="M6 5v18h18V5z" />
  </svg>
)

const viewList = [
  {
    icon: desktopIcon,
    name: 'desktop'
  },
  {
    icon: tabletIcon,
    name: 'tablet'
  },
  {
    icon: phoneIcon,
    name: 'phone'
  }
]

interface TemplatesState {
  ready: boolean
  sidebar: boolean
  darkMode: boolean
  blockType: string
  blockName: string
  theme: 'indigo'
  copied: boolean
  codeView: boolean
  markup: string
  currentKeyCode: number | null
  view: 'desktop' | 'tablet' | 'mobile'
}

export class Templates extends Component<any, TemplatesState> {
  markupRef: any
  textareaRef: any
  sidebarRef: any
  openerRef: any
  constructor(props: any) {
    super(props)
    this.state = {
      ready: false,
      darkMode: false,
      copied: false,
      sidebar: true,
      codeView: false,
      currentKeyCode: null,
      view: 'desktop',
      theme: 'indigo',
      blockType: 'Block',
      blockName: 'Marketing',
      markup: ''
    }

    this.changeMode = this.changeMode.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
    this.changeBlock = this.changeBlock.bind(this)
    this.handleContentDidMount = this.handleContentDidMount.bind(this)
    this.changeView = this.changeView.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.toggleView = this.toggleView.bind(this)
    this.copyToClipboard = this.copyToClipboard.bind(this)
    this.keyboardNavigation = this.keyboardNavigation.bind(this)
    this.markupRef = createRef()
    this.textareaRef = createRef()
    this.sidebarRef = createRef()
    this.openerRef = createRef()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardNavigation)
  }

  hideSidebar() {
    const sidebar = this.sidebarRef.current
    const opener = this.openerRef.current

    document.addEventListener('click', e => {
      if (e.target === opener) {
        return
      }

      if (!e.target === sidebar || !sidebar.contains(e.target)) {
        this.setState({ sidebar: false })
      }
    })
  }

  keyboardNavigation(e: KeyboardEvent | React.KeyboardEvent) {
    const { blockType, blockName } = this.state
    const blockStringFormat = `${blockName},${blockType}`
    const keyCode = e.which || e.keyCode

    switch (keyCode) {
      case 40: // Down
        e.preventDefault()
        blockList.forEach((block, index) => {
          if (block === blockStringFormat) {
            const newActiveBlock =
              index + 1 <= blockList.length - 1
                ? blockList[index + 1].split(',')
                : blockList[0].split(',')
            const newBlockName = newActiveBlock[0]
            const newBlockType = newActiveBlock[1]
            const newBlockNode = document.querySelector(
              `.block-item[block-name="${newBlockName}"]`
            ) as HTMLElement
            if (newBlockNode) newBlockNode.focus()
            this.setState({
              blockType: newBlockType,
              blockName: newBlockName,
              codeView: false,
              currentKeyCode: 40
            })
          }
        })
        break
      case 37: // Left
        e.preventDefault()
        this.setState({ sidebar: false, currentKeyCode: 37 })
        break
      case 39: // Right
        e.preventDefault()
        this.setState({ sidebar: true, currentKeyCode: 39 })
        break
      case 38: // Up
        e.preventDefault()
        blockList.forEach((block, index) => {
          if (block === blockStringFormat) {
            const newActiveBlock =
              index - 1 >= 0
                ? blockList[index - 1].split(',')
                : blockList[blockList.length - 1].split(',')
            const newBlockName = newActiveBlock[0]
            const newBlockType = newActiveBlock[1]
            const newBlockNode = document.querySelector(
              `.block-item[block-name="${newBlockName}"]`
            ) as HTMLElement
            if (newBlockNode) newBlockNode.focus()

            this.setState({
              blockType: newBlockType,
              blockName: newBlockName,
              codeView: false,
              currentKeyCode: 38
            })
          }
        })
        break
      default:
        return
    }

    setTimeout(() => {
      if (
        keyCode === 37 ||
        keyCode === 38 ||
        keyCode === 39 ||
        keyCode === 40
      ) {
        this.setState({ currentKeyCode: null })
      }
    }, 200)
  }

  changeMode() {
    this.setState({ darkMode: !this.state.darkMode })
  }

  handleContentDidMount() {
    const iframe = document.querySelector('iframe') as HTMLIFrameElement
    iframe.contentWindow?.document.addEventListener(
      'keydown',
      this.keyboardNavigation
    )
    iframe.contentWindow?.document.addEventListener('click', () =>
      this.setState({ sidebar: false })
    )

    setTimeout(() => {
      this.setState({
        ready: true,
        markup: this.markupRef.current.innerHTML
      })
    }, 400)
  }

  beautifyHTML(codeStr: string) {
    const process = (str: string) => {
      const div = document.createElement('div')
      div.innerHTML = str.trim()
      return format(div, 0).innerHTML.trim()
    }

    const format = (node: Element, level: number) => {
      const indentBefore = new Array(level++ + 1).join('  ')
      const indentAfter = new Array(level - 1).join('  ')
      let textNode

      for (let i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode('\n' + indentBefore)
        node.insertBefore(textNode, node.children[i])

        format(node.children[i], level)

        if (node.lastElementChild === node.children[i]) {
          textNode = document.createTextNode('\n' + indentAfter)
          node.appendChild(textNode)
        }
      }

      return node
    }
    return process(codeStr)
  }

  changeBlock(e: MouseEvent) {
    const { currentTarget } = e
    const blockType = currentTarget.getAttribute('block-type') as string
    const blockName = currentTarget.getAttribute('block-name') as string
    this.setState({
      blockType,
      blockName,
      codeView: false
    })
  }

  changeTheme(e: MouseEvent<HTMLButtonElement>) {
    const { currentTarget } = e
    const theme = currentTarget.getAttribute(
      'data-theme'
    ) as TemplatesState['theme']
    this.setState({ theme })
  }

  changeView(e: MouseEvent) {
    const { currentTarget } = e
    const view = currentTarget.getAttribute(
      'data-view'
    ) as TemplatesState['view']
    this.setState({ view, codeView: false })
  }

  toggleView() {
    this.setState({
      codeView: !this.state.codeView,
      view: 'desktop',
      markup: this.markupRef.current.innerHTML
    })
  }

  themeListRenderer() {
    const { theme } = this.state
    return themeList.map((t, k) => (
      <button
        key={k}
        data-theme={t}
        onKeyDown={this.keyboardNavigation}
        className={`theme-button bg-${t}-500${theme === t ? ' is-active' : ''}`}
        onClick={this.changeTheme}
      ></button>
    ))
  }

  listRenderer() {
    const { blockName } = this.state
    return Object.entries(iconList).map(([type, icons]) => (
      <div className="blocks" key={type}>
        <div className="block-category">{type}</div>
        <div className="block-list">
          {Object.entries(icons).map(icon => (
            <button
              key={icon[0]}
              tabIndex={0}
              onClick={this.changeBlock}
              className={`block-item${
                icon[0] === blockName ? ' is-active' : ''
              }`}
              block-type={type}
              block-name={icon[0]}
            >
              {icon[1]}
            </button>
          ))}
        </div>
      </div>
    ))
  }

  viewModeRenderer() {
    const { view } = this.state
    return viewList.map((v, k) => (
      <button
        key={k}
        className={`device${view === v.name ? ' is-active' : ''}`}
        data-view={v.name}
        onClick={this.changeView}
      >
        {v.icon}
      </button>
    ))
  }

  toggleSidebar() {
    this.setState({ sidebar: !this.state.sidebar })
  }

  copyToClipboard() {
    const code = this.beautifyHTML(this.state.markup)
    const input = document.createElement('textarea')
    input.innerHTML = code
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({
        copied: false
      })
    }, 2000)
  }

  render() {
    const {
      darkMode,
      theme,
      blockName,
      blockType,
      sidebar,
      view,
      copied,
      currentKeyCode
    } = this.state
    return (
      <div
        className={`app${darkMode ? ' dark-mode' : ''}${
          sidebar ? ' has-sidebar' : ''
        } ${theme} ${view}`}
      >
        <textarea className="copy-textarea" ref={this.textareaRef} />
        <aside className="sidebar" ref={this.sidebarRef}>
          {this.listRenderer()}
        </aside>
        <div className="toolbar">
          <button
            className="opener"
            onClick={this.toggleSidebar}
            ref={this.openerRef}
          >
            组件/模板
          </button>
          {this.state.codeView && (
            <div className="clipboard-wrapper">
              <button
                className="copy-the-block copy-to-clipboard"
                onClick={this.copyToClipboard}
              >
                {clipboardIcon}
                <span>复制到剪切板</span>
              </button>
              <span
                className={`clipboard-tooltip${copied ? ' is-copied ' : ''}`}
              >
                已复制!
              </span>
            </div>
          )}
          <button className="copy-the-block" onClick={this.toggleView}>
            {!this.state.codeView ? (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 18L22 12 16 6"></path>
                <path d="M8 6L2 12 8 18"></path>
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="css-i6dzq1"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
            <span>{!this.state.codeView ? '代码' : '预览'}</span>
          </button>
          <div className="switcher">{this.themeListRenderer()}</div>
          {this.viewModeRenderer()}
          <button className="mode" onClick={this.changeMode}></button>
        </div>
        <div className="markup" ref={this.markupRef}>
          {getBlocks({ theme, darkMode })[blockType][blockName]}
        </div>
        <main
          className="main"
          style={{ opacity: this.state.ready ? '1' : '0' }}
        >
          <div className={`view${this.state.codeView ? ' show-code' : ''}`}>
            <Frame
              contentDidMount={this.handleContentDidMount}
              contentDidUpdate={this.handleContentDidMount}
              head={
                <>
                  <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
                    rel="stylesheet"
                  />
                  {
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `img { filter:
                      ${
                        darkMode
                          ? 'invert(1) opacity(.5); mix-blend-mode: luminosity; }'
                          : 'sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7) }'
                      }`
                      }}
                    />
                  }
                </>
              }
            >
              {getBlocks({ theme, darkMode })[blockType][blockName]}
            </Frame>
            <div className="codes">
              <SyntaxHighlighter
                language="html"
                style={darkMode ? vs2015 : docco}
                showLineNumbers
              >
                {this.beautifyHTML(this.state.markup)}
              </SyntaxHighlighter>
            </div>
          </div>
        </main>
        {/* <a
          href="https://github.com/mertJF/tailblocks"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
            />
          </svg>
          GitHub
        </a> */}
        <div className="keyboard-nav">
          <div
            className={`k-up keyboard-button${
              currentKeyCode === 38 ? ' is-active' : ''
            }`}
            data-info="Previous block"
          >
            <svg
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
          <div className="keyboard-nav-row">
            <div
              className={`k-left keyboard-button${
                currentKeyCode === 37 ? ' is-active' : ''
              }`}
              data-info="Hide sidebar"
            >
              <svg
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <div
              className={`k-down keyboard-button${
                currentKeyCode === 40 ? ' is-active' : ''
              }`}
              data-info="Next block"
            >
              <svg
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
            <div
              className={`k-right keyboard-button${
                currentKeyCode === 39 ? ' is-active' : ''
              }`}
              data-info="Show sidebar"
            >
              <svg
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
