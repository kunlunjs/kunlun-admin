import type { JSONSchema7 } from 'json-schema'
import type { klComponents } from '@/types'

export const componentConfigs: Partial<
  Record<typeof klComponents[number], JSONSchema7>
> = {
  Button: {
    properties: {
      type: {
        type: 'string'
      }
    }
  }
}
