import faker from '@faker-js/faker/locale/zh_CN'
import { omit } from 'lodash'

export { faker }

const Fields = [
  'id',
  'name',
  'firstName',
  'lastName',
  'gender',
  'mobile',
  'visits',
  'age',
  'gender',
  'progress',
  'status',
  'children'
] as const

export const mock = <T extends Record<string, any>>(
  fields: Partial<Array<typeof Fields[number]>>,
  len = 10
): T[] => {
  const data = [...Array(len)].map(i => {
    const obj: Partial<Record<typeof Fields[number], any>> = {}
    for (const field of fields) {
      switch (field) {
        case 'id':
          obj[field] = faker.datatype.uuid()
          return
        case 'gender':
          obj[field] = faker.name.gender()
          return
        case 'age':
          obj[field] = Math.floor(Math.random() * 30)
          return
        case 'firstName':
          obj[field] = faker.name.firstName()
          return
        case 'lastName':
          obj[field] = faker.name.firstName()
          return
        case 'visits':
          obj[field] = Math.floor(Math.random() * 100)
          return
        case 'progress':
          obj[field] = Math.floor(Math.random() * 100)
          return
        case 'children':
          obj[field] = mock(omit(fields, ['id']), len)
          return
        case 'status':
          obj[field] = faker.word.adjective()
          return
        default:
          return null
      }
    }
    return obj
  })
  return data as T[]
}
