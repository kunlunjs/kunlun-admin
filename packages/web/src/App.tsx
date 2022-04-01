import { useEffect } from 'react'
import { AppProvider } from '@/providers/app'
import { AppRoutes } from '@/routes'
import { getFingerPrint } from './utils/getFingerPrint'

export let fingerPrint: string

function App() {
  useEffect(() => {
    if (process.env.FINGER_PRINT === 'true') {
      getFingerPrint().then(fp => {
        fingerPrint = fp
      })
    }
  }, [])

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
