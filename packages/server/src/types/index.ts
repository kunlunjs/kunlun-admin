export type MetadataType =
  | boolean
  | number
  | number[]
  | string
  | string[]
  | (number | string)[]

export type SetDifference<A, B> = A extends B ? never : A

export type SymmetricDifference<A, B> = SetDifference<A | B, A & B>

export interface EnvConfig {
  NODE_ENV: 'development' | 'production'
  PORT: number
  DATABASE_URL: string
  JWT_SECRET_KEY: string
  JWT_EXPIRATION_TIME: string
  INIT_ADMIN_PASSWORD: string
  HTTP_TIMEOUT: number
  HTTP_MAX_REDIRECTS: number
  CACHE_TTL: number
  REDIS_HOST: string
  REDIS_PORT: number
  REDIS_PASSWORD: string
  THROTTLE_TTL: number
  THROTTLE_LIMIT: number
  RESOURCE_UPLOADMODE: string
  RESOURCE_STATIC_PATH: string
  RESOURCE_FILE_PATH: string
  OSS_ACCESS_KEY_ID: string
  OSS_ACCESS_KEY_SECRET: string
  OSS_REGION: string
  OSS_BUCKET: string
  EOS_ACCESS_KEY_ID: string
  EOS_ACCESS_KEY_SECRET: string
  EOS_ENDPOINT: string
  EOS_BUCKET: string
}
