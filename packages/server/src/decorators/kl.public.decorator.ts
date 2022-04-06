import { SetMetadata } from '@nestjs/common'

export const IS_PUBLIC_API = 'IS_PUBLIC_API'

export const KLPublic = () => SetMetadata(IS_PUBLIC_API, true)
