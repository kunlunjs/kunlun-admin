import type { ChangeEvent, FC, MouseEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import Frame from 'react-frame-component'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { vs2015, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { templateItems } from '@/config'
import { getBlocks } from './helpers'
import './index.css'

SyntaxHighlighter.registerLanguage('js', js)
// SyntaxHighlighter.registerLanguage('jsx', jsx)
const blockList: string[] = []
const thumbnailEntries = Object.entries(templateItems)
thumbnailEntries.forEach(([type, coms]) => {
  coms.forEach(com => {
    blockList.push(`${com.name},${type}`)
  })
})

const themeList = ['indigo', 'yellow', 'red', 'purple', 'pink', 'blue', 'green']

const desktopIcon = (
  <svg
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
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
  index: number
  theme: 'indigo'
  copied: boolean
  sidebar: boolean
  darkMode: boolean
  blockType: string
  blockName: string
  codeView: boolean
  blockTitle: string
  // blockCategory: string
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
  const lastedState = useRef<{
    values: Pick<TemplatesState, 'blockName' | 'blockType' | 'sidebar'>
  }>({
    values: { blockName: 'header', blockType: 'marketing', sidebar: false }
  })
  const [state, setState] = useState<TemplatesState>({
    ready: false,
    index: 0,
    sidebar: false,
    darkMode: false,
    blockName: 'header',
    blockType: 'marketing',
    // blockCategory: 'Marketing',
    blockTitle: 'Simple centered',
    markup: '',
    copied: false,
    view: 'desktop',
    theme: 'indigo',
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
        blockList.forEach((block, ix) => {
          if (block === blockStringFormat) {
            const newActiveBlock =
              ix + 1 <= blockList.length - 1
                ? blockList[ix + 1].split(',')
                : blockList[0].split(',')
            const [newBlockName, newBlockType] = newActiveBlock
            const newBlockNode = document.querySelector(
              `.block-item[block-name="${newBlockName}"]`
            ) as HTMLElement
            if (newBlockNode) {
              newBlockNode.focus()
            }
            setState({
              ...state,
              codeView: false,
              currentKeyCode: 40,
              blockType: newBlockType,
              blockName: newBlockName
            })
            const { protocol, host, pathname, hash } = window.location
            if (hash !== `#${newBlockType}/${newBlockType}`) {
              window.location.href = `${protocol}//${host}${pathname}#${newBlockType}/${newBlockName}`
            }
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
        blockList.forEach((block, ix) => {
          if (block === blockStringFormat) {
            const newActiveBlock =
              ix - 1 >= 0
                ? blockList[ix - 1].split(',')
                : blockList[blockList.length - 1].split(',')
            const [newBlockName, newBlockType] = newActiveBlock
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
            const { protocol, host, pathname, hash } = window.location
            if (hash !== `#${newBlockType}/${newBlockType}`) {
              window.location.href = `${protocol}//${host}${pathname}#${newBlockType}/${newBlockName}`
            }
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

  useEffect(() => {
    const [type, name] = window.location.hash.slice(1).split('/')
    if (type && name && (type !== blockType || name !== blockName)) {
      setState({ ...state, blockType: type, blockName: name })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href])

  const hideSidebar = () => {
    const sidebar = sidebarRef.current!
    const opener = openerRef.current!

    document.addEventListener('click', e => {
      console.log('document click')
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
    // const _state = state
    iframe.contentWindow?.document.addEventListener('click', e => {
      // setState({
      //   ..._state,
      //   ...lastedState.current.values,
      //   sidebar: false
      // })
    })
    timeout = setTimeout(() => {
      setState({
        ...state,
        ready: true,
        markup: markupRef.current?.innerHTML
      })
    }, 400)
  }

  const handleContentDidUpdate = () => {
    if (!state.ready) {
      setState({
        ...state,
        ready: true,
        blockName: state.blockName,
        blockType: state.blockType,
        markup: markupRef.current?.innerHTML
      })
    }
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
    const blockTitle = currentTarget.getAttribute('block-title') as string
    const { protocol, host, pathname, hash } = window.location
    if (hash !== `#${blockType}/${blockName}`) {
      window.location.href = `${protocol}//${host}${pathname}#${blockType}/${blockName}`
    }
    setState({
      ...state,
      index: 0,
      blockType,
      blockName,
      blockTitle,
      codeView: false
    })
    lastedState.current!.values = { blockName, blockType, sidebar }
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
      view: 'desktop',
      codeView: !state.codeView,
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
        onClick={changeTheme}
        className={`theme-button bg-${t}-500${theme === t ? ' is-active' : ''}`}
      ></button>
    ))
  }

  const listRenderer = () => {
    const { blockName } = state
    return thumbnailEntries.map(([type, thumbnails]) => {
      const total = thumbnails
        .map(i => i.number)
        .reduce((sum, i) => {
          return (sum += i)
        }, 0)
      return (
        <div className="blocks" key={type}>
          <div className="block-category">{`${type}(${total})`}</div>
          <div className="block-list">
            {thumbnails.map((thumbnail, ix) => {
              return (
                <button
                  key={thumbnail.name}
                  tabIndex={0}
                  block-type={type}
                  block-name={thumbnail.name}
                  block-title={thumbnail.configs?.[0]?.title}
                  onClick={changeBlock}
                  className={`block-item relative${
                    thumbnail.name === blockName ? ' is-active' : ''
                  }`}
                >
                  <img
                    alt={thumbnail.name}
                    src={thumbnail.src}
                    className="scale-125"
                  />
                </button>
              )
            })}
          </div>
        </div>
      )
    })
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

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, index: Number(e.target.value) })
  }

  const {
    view,
    ready,
    theme,
    index,
    markup,
    copied,
    sidebar,
    darkMode,
    codeView,
    blockName,
    blockType,
    blockTitle,
    currentKeyCode
  } = state

  const Blocks = getBlocks({ theme, darkMode })[blockType][blockName]
  const Block = Blocks[index]

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
        {Block && (
          <>
            {/* <span className="ml-4 font-bold text-white">{blockTitle}</span> */}
            <div className="ml-4 flex h-7">
              <label htmlFor="components" className="hidden">
                选择组件
              </label>
              <select
                name="components"
                id="components"
                // onClick={handleSelect}
                onChange={handleSelect}
                className="mt-1 block w-full rounded-md border-gray-300 py-0 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {templateItems[blockType]
                  .find(i => i.name === blockName)
                  ?.configs?.map((i, ix) => {
                    return (
                      <option key={i.title + ix} value={ix}>
                        {i.title}
                      </option>
                    )
                  })}
              </select>
            </div>
          </>
        )}
        {codeView && (
          <div className="header-right clipboard-wrapper">
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
        <button className="header-right copy-the-block" onClick={toggleView}>
          {!codeView ? (
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
          <span>{!codeView ? '代码' : '预览'}</span>
        </button>
        <div className="switcher">{themeListRenderer()}</div>
        {viewModeRenderer()}
        <button className="mode" onClick={changeMode}></button>
      </div>
      <div className="markup" ref={markupRef}>
        {/* TODO: 加载显示原始代码，而非编译后的 */}
        {Block}
      </div>
      <main className="main" style={{ opacity: ready ? '1' : '0' }}>
        {/* TODO: 使用 device.css 等设备样式库 */}
        <div className={`view${codeView ? ' show-code' : ''}`}>
          <Frame
            contentDidMount={handleContentDidMount}
            contentDidUpdate={handleContentDidUpdate}
            // 使用最新 tailwindcss cdn 替代下面 head 引用方式 https://tailwindcss.com/docs/installation/play-cdn
            initialContent="<!DOCTYPE html><html><head><script src='https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp'></script><script>tailwind.config = {}</script></head><body><div id='iframe'></div></body></html>"
            head={
              <>
                {/* <link
                  // href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
                  href="/static/style/tailwind2.0.2.min.css"
                  rel="stylesheet"
                /> */}
                {/* {
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
                } */}
                {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.5.2/src/index.min.js"></script> */}
              </>
            }
          >
            {Block}
          </Frame>
          <div className="codes">
            <SyntaxHighlighter
              language="html"
              showLineNumbers
              style={darkMode ? vs2015 : docco}
            >
              {beautifyHTML(markup!)}
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
