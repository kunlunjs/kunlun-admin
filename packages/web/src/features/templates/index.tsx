import type { FC, MouseEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
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
  theme: 'indigo'
  sidebar: boolean
  darkMode: boolean
  blockType: string
  blockName: string
  copied: boolean
  codeView: boolean
  markup: string | undefined
  currentKeyCode: number | null
  view: 'desktop' | 'tablet' | 'mobile'
}

interface TemplatesProps {}
let timeout: ReturnType<typeof setTimeout>

export const Templates: FC<TemplatesProps> = () => {
  const sidebarRef = useRef<HTMLElement>(null)
  const markupRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [state, setState] = useState<TemplatesState>({
    ready: false,
    sidebar: false,
    darkMode: false,
    blockType: 'Block',
    blockName: 'Marketing',
    view: 'desktop',
    theme: 'indigo',
    copied: false,
    markup: '',
    codeView: false,
    currentKeyCode: null
  })

  const keyboardNavigation = (e: KeyboardEvent | React.KeyboardEvent) => {
    const { blockType, blockName } = state
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
            setState({
              ...state,
              codeView: false,
              currentKeyCode: 40,
              blockType: newBlockType,
              blockName: newBlockName
            })
          }
        })
        break
      case 37: // Left
        e.preventDefault()
        setState({ ...state, sidebar: false, currentKeyCode: 37 })
        break
      case 39: // Right
        e.preventDefault()
        setState({ ...state, sidebar: true, currentKeyCode: 39 })
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
            setState({
              ...state,
              codeView: false,
              currentKeyCode: 38,
              blockType: newBlockType,
              blockName: newBlockName
            })
          }
        })
        break
      default:
        return
    }

    timeout = setTimeout(() => {
      if (
        keyCode === 37 ||
        keyCode === 38 ||
        keyCode === 39 ||
        keyCode === 40
      ) {
        setState({ ...state, currentKeyCode: null })
      }
    }, 200)
  }

  useEffect(() => {
    document.addEventListener('keydown', keyboardNavigation)
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hideSidebar = () => {
    const sidebar = sidebarRef.current!
    const opener = openerRef.current!

    document.addEventListener('click', e => {
      if (e.target === opener) {
        return
      }
      // @ts-ignore
      if (!e.target === sidebar || !sidebar.contains(e.target)) {
        setState({ ...state, sidebar: false })
      }
    })
  }

  const changeMode = () => {
    setState({ ...state, darkMode: !state.darkMode })
  }

  const handleContentDidMount = () => {
    const iframe = document.querySelector('iframe') as HTMLIFrameElement
    iframe.contentWindow?.document.addEventListener(
      'keydown',
      keyboardNavigation
    )
    iframe.contentWindow?.document.addEventListener('click', () => {
      setState({ ...state, sidebar: false })
    })
    setState({
      ...state,
      ready: true,
      markup: markupRef.current?.innerHTML
    })
  }

  const handleContentDidUpdate = () => {
    setState({
      ...state,
      ready: true,
      markup: markupRef.current?.innerHTML
    })
  }

  const beautifyHTML = (codeStr: string) => {
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

  const changeBlock = (e: MouseEvent) => {
    const { currentTarget } = e
    const blockType = currentTarget.getAttribute('block-type') as string
    const blockName = currentTarget.getAttribute('block-name') as string
    setState({
      ...state,
      blockType,
      blockName,
      codeView: false
    })
  }

  const changeTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e
    const theme = currentTarget.getAttribute(
      'data-theme'
    ) as TemplatesState['theme']
    setState({ ...state, theme })
  }

  const changeView = (e: MouseEvent) => {
    const { currentTarget } = e
    const view = currentTarget.getAttribute(
      'data-view'
    ) as TemplatesState['view']
    setState({ ...state, view, codeView: false })
  }

  const toggleView = () => {
    setState({
      ...state,
      codeView: !state.codeView,
      view: 'desktop',
      markup: markupRef.current?.innerHTML
    })
  }

  const themeListRenderer = () => {
    const { theme } = state
    return themeList.map((t, k) => (
      <button
        key={k}
        data-theme={t}
        onKeyDown={keyboardNavigation}
        className={`theme-button bg-${t}-500${theme === t ? ' is-active' : ''}`}
        onClick={changeTheme}
      ></button>
    ))
  }

  const listRenderer = () => {
    const { blockName } = state
    return Object.entries(iconList).map(([type, icons]) => (
      <div className="blocks" key={type}>
        <div className="block-category">{type}</div>
        <div className="block-list">
          {Object.entries(icons).map(icon => (
            <button
              key={icon[0]}
              tabIndex={0}
              onClick={changeBlock}
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

  const viewModeRenderer = () => {
    const { view } = state
    return viewList.map((v, k) => (
      <button
        key={k}
        className={`device${view === v.name ? ' is-active' : ''}`}
        data-view={v.name}
        onClick={changeView}
      >
        {v.icon}
      </button>
    ))
  }

  const toggleSidebar = () => {
    setState({ ...state, sidebar: !state.sidebar })
  }

  const copyToClipboard = () => {
    const code = beautifyHTML(state.markup!)
    const input = document.createElement('textarea')
    input.innerHTML = code
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    setState({ ...state, copied: true })
    timeout = setTimeout(() => {
      setState({
        ...state,
        copied: false
      })
    }, 2000)
  }

  const {
    darkMode,
    theme,
    blockName,
    blockType,
    sidebar,
    view,
    copied,
    currentKeyCode
  } = state

  return (
    <div
      className={`app${darkMode ? ' dark-mode' : ''}${
        sidebar ? ' has-sidebar' : ''
      } ${theme} ${view}`}
    >
      <textarea className="copy-textarea" ref={textareaRef} />
      <aside className="sidebar" ref={sidebarRef}>
        {listRenderer()}
      </aside>
      <div className="toolbar">
        <button className="opener" onClick={toggleSidebar} ref={openerRef}>
          组件/模板
        </button>
        {state.codeView && (
          <div className="clipboard-wrapper">
            <button
              className="copy-the-block copy-to-clipboard"
              onClick={copyToClipboard}
            >
              {clipboardIcon}
              <span>复制到剪切板</span>
            </button>
            <span className={`clipboard-tooltip${copied ? ' is-copied ' : ''}`}>
              已复制!
            </span>
          </div>
        )}
        <button className="copy-the-block" onClick={toggleView}>
          {!state.codeView ? (
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
          <span>{!state.codeView ? '代码' : '预览'}</span>
        </button>
        <div className="switcher">{themeListRenderer()}</div>
        {viewModeRenderer()}
        <button className="mode" onClick={changeMode}></button>
      </div>
      <div className="markup" ref={markupRef}>
        {getBlocks({ theme, darkMode })[blockType][blockName]}
      </div>
      <main className="main" style={{ opacity: state.ready ? '1' : '0' }}>
        <div className={`view${state.codeView ? ' show-code' : ''}`}>
          <Frame
            contentDidMount={handleContentDidMount}
            // contentDidUpdate={handleContentDidUpdate}
            head={
              <>
                {/* <script src="/static/js/tailwindcss.js"></script> */}
                {/* TODO */}
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
            // body={<script src="/static/js/tailwindcss.js"></script>}
          >
            {getBlocks({ theme, darkMode })[blockType][blockName]}
          </Frame>
          <div className="codes">
            <SyntaxHighlighter
              language="html"
              style={darkMode ? vs2015 : docco}
              showLineNumbers
            >
              {beautifyHTML(state.markup!)}
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
