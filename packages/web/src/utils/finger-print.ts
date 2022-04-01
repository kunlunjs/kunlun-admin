import FingerPrintJS from '@fingerprintjs/fingerprintjs'

const fpPromise = FingerPrintJS.load()

export async function getFingerPrint() {
  const fp = await fpPromise
  const result = await fp.get()
  return result.visitorId
}
