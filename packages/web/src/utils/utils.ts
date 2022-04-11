export function isChinese(s: string) {
  return /[\u4e00-\u9fa5]/.test(s)
}
