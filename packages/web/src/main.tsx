import ReactDom from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initMocks } from './test/server'
import './styles/index.less'

initMocks()

// const container = document.getElementById('root') as HTMLElement
// const root = createRoot(container)
// root.render(<App />)

ReactDom.render(<App />, document.getElementById('root'))
reportWebVitals()
