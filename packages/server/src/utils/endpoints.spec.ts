import type {
  SchemaGeneratedModelMethods,
  SchemaGeneratedModels
} from '@/@generated'
import type { PrismaService } from '@/common/prisma'
import { buildWhere } from './endpoints'

type ModelInstance<T extends SchemaGeneratedModels> = InstanceType<
  typeof PrismaService
>[T]
type Model<M extends SchemaGeneratedModelMethods> = Parameters<
  ModelInstance<'menuModel'>[M]
>[0]

describe('buildWher', () => {
  it('应当 已定义', () => {
    expect(buildWhere).toBeDefined()
  })

  it('能够 查询字符串', () => {
    const rest: Model<'findMany'>['where'] = {
      title: 'abc',
      id: '1'
    }
    expect(buildWhere('MenuModel', rest)).toEqual({
      title: { contains: 'abc' },
      id: { contains: '1' }
    })
  })

  it('能够 查询数字', () => {
    const rest: Model<'findMany'>['where'] = {
      sort: 1
    }
    expect(buildWhere('MenuModel', rest)).toEqual({
      sort: 1
    })
  })

  it('能够 查询日期', () => {
    const rest: Model<'findMany'>['where'] = {
      createdAt: '2020-01-01 11:11:11'
    }
    expect(buildWhere('MenuModel', rest)).toEqual({
      createdAt: new Date('2020-01-01 11:11:11')
    })
  })

  it('能够 查询日期范围', () => {
    const rest: Model<'findMany'>['where'] = {
      createdAt: '2020-01-01 11:11:11'
    }
    expect(buildWhere('MenuModel', rest)).toEqual({})
  })
})
