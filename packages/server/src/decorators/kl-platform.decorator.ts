import { SetMetadata } from '@nestjs/common'

export const platforms = ['app', 'ios', 'android', 'browser', 'wechat'] as const

export const isValidPlatform = (platform = '') =>
  new RegExp(`(\\[${platforms.join('\\])|(\\[')}\\])`).test(platform)

export type Plateform = typeof platforms[number]

export const ACCESS_PLATFORM_KEY = 'access-plateform-type'

export const KLPlatform = (...accesses: Plateform[]) =>
  SetMetadata(ACCESS_PLATFORM_KEY, accesses)
