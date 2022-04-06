import os from 'os'
import { isNil, isNumber } from 'lodash'
/**
 * 根据枚举值生成说明，用于 @Column 的 comment 和 @ApiProperty 的 description
 */
export function enumExplain(
  prefix: string,
  obj: Record<string, number | string>
) {
  return `${prefix}：${Object.entries(obj)
    .map(([k, v]) => {
      const val = Number(v)
      if (isNumber(val) && !isNaN(val)) {
        return `'${v}' - ${k}`
      }
      return null
    })
    .filter(Boolean)
    .join(', ')}`
}

/**
 * 生成唯一UUID
 */
export const genUUId = () => {
  let d = new Date().getTime(),
    d2 = (performance && performance.now && performance.now() * 1000) || 0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16
    if (d > 0) {
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16)
  })
}

export function isLocal(ip: string) {
  return ip.match(/::1/)
}

export function isUrl(str: string) {
  return /^https?:\/\//.test(str)
}

export function isFalsy(str: any) {
  return isNil(str) || str === ''
}

export const flatToNest = (
  array: Record<string, any>[],
  id: number | string | null = null,
  parentKey = 'parentId',
  depth = 1
): any => {
  const excludes: Record<string, any>[] = []
  const filters = array.filter(item => {
    if (item[parentKey] === id) {
      return true
    }
    excludes.push(item)
    return false
  })
  return filters.map(item => ({
    ...item,
    children: flatToNest(excludes, item.id, parentKey, depth + 1)
  }))
}

export const JSONParse = (str: any) => {
  try {
    JSON.parse(str)
    return true
  } catch {
    return false
  }
}

export const JSONStringify = (obj: any) => {
  try {
    const str = JSON.stringify(obj, null, 2)
    return str
  } catch {
    return false
  }
}

function getLocalIP() {
  const interfaces = os.networkInterfaces()
  const addresses = []
  for (const k1 in interfaces) {
    for (const k2 in interfaces[k1]) {
      // @ts-ignore
      const address = interfaces[k1][k2]
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address)
      }
    }
  }
  return addresses[0]
}

export const LocalIP: string = getLocalIP()

export function isIP(str: any) {
  return (
    typeof str === 'string' &&
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      str
    )
  )
}
