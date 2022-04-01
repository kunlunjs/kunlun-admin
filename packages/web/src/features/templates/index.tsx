import type { FC } from 'react'
// import Frame from 'react-frame-component'
// import SyntaxHighlighter from 'react-syntax-highlighter'
// import { vs2015, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import clipboardIcon from '@/assets/clipboard.svg'
// import desktopIcon from '@/assets/device-desktop.svg'
// import mobileIcon from '@/assets/device-mobile.svg'
// import tabletIcon from '@/assets/device-tablet.svg'
// import { getIcons } from './helpers'
// import './index.less'

// interface TemplatesProps {}
// export interface TemplatesState {
//   ready: boolean
//   sidebar: boolean
//   darkMode: boolean
//   blockType: string
//   blockName: string
//   theme: 'indigo'
//   copied: boolean
//   codeView: boolean
//   markup: string
//   currentKeyCode: number | null
//   view: 'desktop' | 'tablet' | 'mobile'
// }

// const iconsList = getIcons()
// const blockList: string[] = []
// Object.entries(iconsList).forEach(([type, icons]) => {
//   Object.keys(icons).map(name => blockList.push(`${name},${type}`))
// })
// const themeList = ['indigo', 'yellow', 'red', 'purple', 'pink', 'blue', 'green']
// const viewList = [
//   {
//     name: 'desktop',
//     icon: desktopIcon
//   },
//   {
//     name: 'tablet',
//     icon: tabletIcon
//   },
//   {
//     name: 'mobile',
//     icon: mobileIcon
//   }
// ]

export const Templates: FC<any> = () => {
  // const sidebarRef = useRef<HTMLElement>(null)
  // const markupRef = useRef<HTMLDivElement>(null)
  // const openerRef = useRef<HTMLButtonElement>(null)
  // const textareaRef = useRef<HTMLTextAreaElement>(null)
  // const [state, setState] = useState<TemplatesState>({
  //   ready: false,
  //   sidebar: false,
  //   darkMode: false,
  //   blockType: 'Blog',
  //   blockName: 'BlogA',
  //   view: 'desktop',
  //   theme: 'indigo',
  //   copied: false,
  //   markup: '',
  //   codeView: false,
  //   currentKeyCode: null
  // })

  // const keyboardNavigation = (
  //   e: KeyboardEvent | React.KeyboardEvent<HTMLButtonElement>
  // ) => {
  //   const { blockName, blockType } = state
  //   const blockStringFormat = `${blockName},${blockType}`
  //   const keyCode = e.which || e.keyCode

  //   switch (keyCode) {
  //     case 40: // Down
  //       e.preventDefault()
  //       blockList.forEach((block, index) => {
  //         if (block === blockStringFormat) {
  //           const newActiveBlock =
  //             index + 1 <= blockList.length - 1
  //               ? blockList[index + 1].split(',')
  //               : blockList[0].split(',')
  //           const newBlockName = newActiveBlock[0]
  //           const newBlockType = newActiveBlock[1]
  //           const newBlockNode = document.querySelector(
  //             `.block-item[block-name="${newBlockName}"]`
  //           ) as HTMLElement
  //           if (newBlockName) {
  //             newBlockNode.focus()
  //           }
  //           setState({
  //             ...state,
  //             blockName: newBlockName,
  //             blockType: newBlockType,
  //             codeView: false,
  //             currentKeyCode: 40
  //           })
  //         }
  //       })
  //       break
  //     case 37: // Left
  //       e.preventDefault()
  //       setState({ ...state, sidebar: false, currentKeyCode: 37 })
  //       break
  //     case 39: // Right
  //       e.preventDefault()
  //       setState({ ...state, sidebar: true, currentKeyCode: 39 })
  //       break
  //     case 38: // Up
  //       e.preventDefault()
  //       blockList.forEach((block, index) => {
  //         if (block === blockStringFormat) {
  //           const newActiveBlock =
  //             index - 1 >= 0
  //               ? blockList[index - 1].split(',')
  //               : blockList[blockList.length - 1].split(',')
  //           const newBlockName = newActiveBlock[0]
  //           const newBlockType = newActiveBlock[1]
  //           const newBlockNode = document.querySelector(
  //             `.block-item[block-name="${newBlockName}"]`
  //           ) as HTMLElement
  //           if (newBlockNode) {
  //             newBlockNode.focus()
  //           }
  //           setState({
  //             ...state,
  //             blockType: newBlockType,
  //             blockName: newBlockName,
  //             codeView: false,
  //             currentKeyCode: 38
  //           })
  //         }
  //       })
  //       break
  //     default:
  //       return
  //   }

  // setTimeout(() => {
  //   if (
  //     keyCode === 37 ||
  //     keyCode === 38 ||
  //     keyCode === 39 ||
  //     keyCode === 40
  //   ) {
  //     setState({ ...state, currentKeyCode: null })
  //   }
  // }, 200)
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', keyboardNavigation)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const hideSidebar = () => {
  //   const sidebar = sidebarRef.current
  //   const openner = openerRef.current
  //   document.addEventListener('click', (e: MouseEvent) => {
  //     if (e.target === openner) {
  //       return
  //     }
  //     // @ts-ignore
  //     if (sidebar && (!e.target === sidebar || !sidebar.contains(e.target))) {
  //       setState({
  //         ...state,
  //         sidebar: false
  //       })
  //     }
  //   })
  // }

  // const changeMode = () => {
  //   setState({
  //     ...state,
  //     darkMode: !state.darkMode
  //   })
  // }

  // const handleContentDidMount = () => {
  //   const iframe = document.querySelector('iframe')
  //   iframe?.contentWindow?.document.addEventListener(
  //     'keydown',
  //     keyboardNavigation
  //   )
  //   iframe?.contentWindow?.document.addEventListener('click', () => {
  //     setState({
  //       ...state,
  //       sidebar: false
  //     })
  //   })
  //   // setTimeout(() => {
  //   //   setState({
  //   //     ...state,
  //   //     ready: true,
  //   //     markup: markupRef.current?.innerHTML || ''
  //   //   })
  //   // })
  // }

  // const beautifyHTML = (code: string) => {
  //   const format = (node: Element, level: number) => {
  //     const indentBefore = new Array(level++ + 1).join(' ')
  //     const indentAfter = new Array(level - 1).join(' ')
  //     let textNode
  //     for (let i = 0; i < node.children.length; i++) {
  //       textNode = document.createTextNode('\n' + indentBefore)
  //       node.insertBefore(textNode, node.children[1])
  //       format(node.children[i], level)
  //       if (node.lastElementChild === node.children[i]) {
  //         textNode = document.createTextNode('\n' + indentAfter)
  //         node.appendChild(textNode)
  //       }
  //     }
  //     return node
  //   }
  //   const processCode = (str: string) => {
  //     const div = document.createElement('div')
  //     div.innerHTML = str.trim()
  //     return format(div, 0).innerHTML.trim()
  //   }
  //   return processCode(code)
  // }

  // const changeBlock = (e: React.MouseEvent) => {
  //   const { currentTarget } = e
  //   const blockType = currentTarget.getAttribute(
  //     'block-type'
  //   ) as TemplatesState['blockType']
  //   const blockName = currentTarget.getAttribute(
  //     'block-name'
  //   ) as TemplatesState['blockName']
  //   setState({
  //     ...state,
  //     blockType,
  //     codeView: false
  //   })
  // }

  // const changeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const { currentTarget } = e
  //   const theme = currentTarget.getAttribute(
  //     'data-theme'
  //   ) as TemplatesState['theme']
  //   setState({ ...state, theme })
  // }

  // const changeView = (e: React.MouseEvent) => {
  //   const { currentTarget } = e
  //   const view = currentTarget.getAttribute(
  //     'data-view'
  //   ) as TemplatesState['view']
  //   setState({
  //     ...state,
  //     view,
  //     codeView: false
  //   })
  // }

  // const toggleView = () => {
  //   setState({
  //     ...state,
  //     view: 'desktop',
  //     codeView: !state.codeView,
  //     markup: markupRef.current?.innerHTML || ''
  //   })
  // }

  // const themeListRenderer = () => {
  //   return themeList.map((t, k) => {
  //     return (
  //       <button
  //         key={t}
  //         data-theme={t}
  //         onClick={changeTheme}
  //         onKeyDown={keyboardNavigation}
  //         className={`theme-button bg-${t}-500 ${
  //           state.theme === t ? 'is-active' : ''
  //         }`}
  //       ></button>
  //     )
  //   })
  // }

  // const listRenderer = () => {
  //   return Object.entries(iconsList).map(([type, icons]) => {
  //     return (
  //       <div key={type} className="blocks">
  //         <div className="block-category">{type}</div>
  //         <div>
  //           {Object.entries(icons).map(icon => {
  //             return (
  //               <button
  //                 key={icon[0]}
  //                 tabIndex={0}
  //                 onClick={changeBlock}
  //                 className={`block-item ${
  //                   icon[0] === state.blockName ? 'is-active' : ''
  //                 }`}
  //                 block-type={type}
  //                 block-name={icon[0]}
  //               >
  //                 {icon[1]}
  //               </button>
  //             )
  //           })}
  //         </div>
  //       </div>
  //     )
  //   })
  // }

  // const viewModeRenderer = () => {
  //   return viewList.map((v, k) => {
  //     return (
  //       <button
  //         key={k}
  //         className={`device ${state.view === v.name ? 'is-active' : ''}`}
  //         data-view={v.name}
  //         onClick={changeView}
  //       >
  //         {v.icon}
  //       </button>
  //     )
  //   })
  // }

  // const toggleSidebar = () => {
  //   setState({
  //     ...state,
  //     sidebar: !state.sidebar
  //   })
  // }

  // const copyToClipboard = () => {
  //   const code = beautifyHTML(state.markup)
  //   const input = document.createElement('textarea')
  //   input.innerHTML = code
  //   document.body.appendChild(input)
  //   input.select()
  //   // TODO
  //   document.execCommand('copy')
  //   document.body.removeChild(input)
  //   setState({
  //     ...state,
  //     copied: false
  //   })
  //   // setTimeout(() => {
  //   //   setState({
  //   //     ...state,
  //   //     copied: false
  //   //   })
  //   // }, 200)
  // }

  // const {
  //   ready,
  //   view,
  //   theme,
  //   copied,
  //   markup,
  //   sidebar,
  //   darkMode,
  //   codeView,
  //   blockName,
  //   blockType,
  //   currentKeyCode
  // } = state

  return (
    <div>123</div>
    // <div
    //   className={`app ${darkMode ? 'dark-mode' : ''} ${
    //     sidebar ? 'has-sidebar' : ''
    //   } ${theme} ${view}`}
    // >
    //   <textarea className="copy-textarea" ref={textareaRef} />
    //   <aside className="sidebar" ref={sidebarRef}>
    //     {listRenderer()}
    //   </aside>
    //   <div className="toolbar">
    //     <button className="opener" onClick={toggleSidebar} ref={openerRef}>
    //       TAILBLOCKS
    //     </button>
    //     {codeView && (
    //       <div className="clipboard-wrapper">
    //         <button
    //           className="copy-the-block copy-to-clipboard"
    //           onClick={copyToClipboard}
    //         >
    //           {clipboardIcon}
    //           <span>COPY TO CLIPBOARD</span>
    //         </button>
    //         <span className={`clipboard-tooltip ${copied ? 'is-copied ' : ''}`}>
    //           Copied!
    //         </span>
    //       </div>
    //     )}
    //     <button className="copy-the-block" onClick={toggleView}>
    //       {!codeView ? (
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M16 18L22 12 16 6"></path>
    //           <path d="M8 6L2 12 8 18"></path>
    //         </svg>
    //       ) : (
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           className="css-i6dzq1"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    //           <circle cx="12" cy="12" r="3"></circle>
    //         </svg>
    //       )}
    //       <span>{!codeView ? 'VIEW CODE' : 'PREVIEW'}</span>
    //     </button>
    //     <div className="switcher">{themeListRenderer()}</div>
    //     {viewModeRenderer()}
    //     <button className="mode" onClick={changeMode}></button>
    //   </div>
    //   <div className="markup" ref={markupRef}>
    //     {getBlocks({ theme, darkMode })[blockType][blockName]}
    //   </div>
    //   <main className="main" style={{ opacity: ready ? '1' : '0' }}>
    //     <div className={`view ${codeView ? 'show-code' : ''}`}>
    //       <Frame
    //         contentDidMount={handleContentDidMount}
    //         contentDidUpdate={handleContentDidMount}
    //         head={
    //           <>
    //             <link
    //               href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
    //               rel="stylesheet"
    //             />
    //             {
    //               <style
    //                 dangerouslySetInnerHTML={{
    //                   __html: `img { filter:
    //                   ${
    //                     darkMode
    //                       ? 'invert(1) opacity(.5); mix-blend-mode: luminosity; }'
    //                       : 'sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7) }'
    //                   }`
    //                 }}
    //               />
    //             }
    //           </>
    //         }
    //       >
    //         {getBlocks({ theme, darkMode })[blockType][blockName]}
    //       </Frame>
    //       <div className="codes">
    //         <SyntaxHighlighter
    //           language="html"
    //           style={darkMode ? vs2015 : docco}
    //           showLineNumbers
    //         >
    //           {beautifyHTML(markup)}
    //         </SyntaxHighlighter>
    //       </div>
    //     </div>
    //   </main>
    //   <a
    //     href="https://github.com/mertJF/tailblocks"
    //     className="github"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //       <path
    //         fill="currentColor"
    //         d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
    //       />
    //     </svg>
    //     GitHub
    //   </a>
    //   <div className="keyboard-nav">
    //     <div
    //       className={`k-up keyboard-button ${
    //         currentKeyCode === 38 ? 'is-active' : ''
    //       }`}
    //       data-info="Previous block"
    //     >
    //       <svg
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         fill="none"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M12 19V5M5 12l7-7 7 7" />
    //       </svg>
    //     </div>
    //     <div className="keyboard-nav-row">
    //       <div
    //         className={`k-left keyboard-button ${
    //           currentKeyCode === 37 ? 'is-active' : ''
    //         }`}
    //         data-info="Hide sidebar"
    //       >
    //         <svg
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           fill="none"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M19 12H5M12 19l-7-7 7-7" />
    //         </svg>
    //       </div>
    //       <div
    //         className={`k-down keyboard-button ${
    //           currentKeyCode === 40 ? 'is-active' : ''
    //         }`}
    //         data-info="Next block"
    //       >
    //         <svg
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           fill="none"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 5v14M19 12l-7 7-7-7" />
    //         </svg>
    //       </div>
    //       <div
    //         className={`k-right keyboard-button ${
    //           currentKeyCode === 39 ? 'is-active' : ''
    //         }`}
    //         data-info="Show sidebar"
    //       >
    //         <svg
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           fill="none"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M5 12h14M12 5l7 7-7 7" />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
