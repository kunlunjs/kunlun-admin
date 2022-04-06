import { isNaN, isNil, isPlainObject } from 'lodash'
import type { SchemaModels } from '@/@generated'
import { schemaModels } from '@/@generated'
import { modelsByName } from '@/@generated'
import { isFalsy } from './utils'

/**
 * /api/article-list?title=标题&tags=标签1&authors=闻一多&approvalStatus=Pending
 * => {
        title: { contains: '标题' },
        approvalStatus: { in: [ 'Pending' ] },
        authors: { hasEvery: [ '闻一多' ] },
        tags: { some: { name: { in: ['标签1'] } } }
      }
   /api/article-list?title=标题&tags=id=1,21&authors=闻一多&approvalStatus=Pending
   => {
        title: { contains: '标题' },
        approvalStatus: { in: [ 'Pending' ] },
        authors: { hasEvery: [ '闻一多' ] },
        tags: { some: { id: { in: [1, 2] } } }
      }
 */
export function buildWhere(
  model: SchemaModels,
  rest: Record<string, any>,
  _like = true
) {
  const currentModel = modelsByName[model]
  const where = Object.entries(rest).reduce((acc, [k, v]) => {
    const currentField = currentModel.fieldsByName[k]
    const relationModel = modelsByName[currentField.type as SchemaModels]
    if (!isNil(v) && currentField?.kind === 'scalar') {
      if (currentField.isList) {
        acc[k] = _like ? { hasEvery: v.split(',') } : { in: v.split(',') }
      } else if (
        currentField.isDateTime &&
        typeof v === 'string' &&
        /^\d{4}-\d{2}-\d{2}/.test(v)
      ) {
        const cdate = new Date(v.slice(0, 10))
        const ndate = new Date(
          new Date(v.slice(0, 10)).setDate(cdate.getDate() + 1)
        )
        acc[k] = {
          gte: cdate,
          lt: ndate
        }
      } else if (
        currentField.isBoolean &&
        ['true', 'false', true, false].includes(v)
      ) {
        acc[k] = v === 'true' || v === true ? true : false
      } else if (currentField.type === 'String') {
        if (v.split(',').length > 1) {
          acc[k] = { in: v.split(',') }
        } else {
          acc[k] = _like ? { contains: v } : v
        }
      } else if (
        ['Int', 'Float'].includes(currentField.type) &&
        !isNaN(Number(v))
      ) {
        acc[k] = Number(v)
      }
    } else if (currentField?.kind === 'enum' && !isFalsy(v)) {
      acc[k] = { in: v.split(',') }
    } else if (
      currentField?.kind === 'object' &&
      typeof v === 'string' &&
      v.match(/^(\w+)=/) &&
      relationModel.fieldsName.includes((v.match(/^(\w+)=/) as string[])[1])
    ) {
      // /data-list?categories=id=37,39 => { categories: { some: { id: { in: [37,39] } } } }
      // /data-list?categories=name=载体平台,众创空间 => { categories: { some: { name: { in: ['载体平台','众创空间'] } } } }
      const fieldName = (v.match(/^(\w+)=/) as string[])[1]
      const isNumber = ['Int', 'Float'].includes(
        relationModel.fieldsByName[fieldName].type
      )
      const isNotRelationField =
        relationModel.fieldsByName[fieldName].kind !== 'object'
      if (isNotRelationField) {
        acc[k] = {
          some: {
            [fieldName]: {
              in: isNumber
                ? v.split(`${fieldName}=`)[1].split(',').map(Number)
                : v.split(`${fieldName}=`)[1].split(',')
            }
          }
        }
      }
    } else if (!isFalsy(v) && currentField?.kind === 'object') {
      // /data-list?categories=37,39 => { categories: { some: { id: { in: [37,39] } } } }
      // /data-list?categories=载体平台,众创空间 => { categories: { some: { name: { in: ['载体平台','众创空间'] } } } }
      const relationFieldUniqueName = relationModel.inputUniqueFields?.[0]
      const isInteger = relationModel.fieldsByName['id']?.isInteger
      const vs = v.split(',')
      const isPrimaryKeys = isInteger && vs.every((i: any) => !isNaN(Number(i)))
      if ((isPrimaryKeys || relationFieldUniqueName) && v !== '$$all') {
        acc[k] = currentField.isList
          ? {
              some: isPrimaryKeys
                ? {
                    id: {
                      in: vs.map(Number)
                    }
                  }
                : {
                    [relationFieldUniqueName]: {
                      in: v.split(',')
                    }
                  }
            }
          : isPrimaryKeys
          ? {
              id: {
                in: vs.map(Number)
              }
            }
          : {
              [relationFieldUniqueName]: {
                in: v.split(',')
              }
            }
      }
    }
    return acc
  }, {} as any)
  return where
}

export function builderOrderBy(model: SchemaModels, sort = '') {
  const currentModel = modelsByName[model]
  const orderBys: Record<string, 'asc' | 'desc'>[] = sort
    .split(',')
    .reduce((acc, cur) => {
      const [k, v] = cur.split(':')
      const cField = currentModel.fieldsByName[k]
      if (
        (v === 'desc' || v === 'asc') &&
        !cField.isId &&
        !cField.isRelationField &&
        !cField.isNested &&
        !cField.isBoolean &&
        !cField.isRichText &&
        !cField.isTextArea &&
        !cField.isList &&
        !cField.isJson &&
        !cField.isFile &&
        !cField.isColor
      ) {
        acc.push({
          [k]: v
        })
      }
      return acc
    }, [] as any)
  const orderBysName = orderBys.map(i => Object.keys(i)[0])
  const { fieldsName = [] } = currentModel
  if (!orderBysName.length) {
    if (fieldsName.includes('publishAt')) {
      orderBys.push({
        publishAt: 'desc'
      })
    } else if (fieldsName.includes('createdAt')) {
      orderBys.push({
        createdAt: 'desc'
      })
    }
    if (fieldsName.includes('sort')) {
      orderBys.unshift({
        sort: 'desc'
      })
    }
  }
  return orderBys
}

export function buildDataForCreateOrUpdate(
  model: SchemaModels,
  data: Record<string, any>,
  isCreate = true
) {
  const sc = isCreate ? 'connect' : 'set'
  const currentModel = modelsByName[model]
  const items = Object.entries(data).reduce((acc, [k, v]) => {
    const field = currentModel.fieldsByName[k]
    const {
      kind,
      isList,
      isNested,
      isParentField,
      isChildrenField,
      isRelationField,
      asPrimaryKeyOfParent,
      asPrimaryKeyOfForeignKey,
      relationFromFields = []
    } = field || {}
    if (isNested || isRelationField) {
      if ((!isFalsy(v) || (Array.isArray(v) && v.length)) && isParentField) {
        // example: ColumnModel parent
        acc[k] = {
          connect: {
            id: Array.isArray(v) ? v.slice(-1)[0] : v
          }
        }
      } else if (
        (!isFalsy(v) || (Array.isArray(v) && v.length)) &&
        isChildrenField
      ) {
        // example: ColumnModel children
        const val = isList
          ? Array.isArray(v)
            ? v.map(i => ({ id: i }))
            : [{ id: v }]
          : { id: v }
        acc[k] = {
          connect: val
        }
      } else if (
        (!isFalsy(v) || (Array.isArray(v) && v.length)) &&
        asPrimaryKeyOfParent
      ) {
        // example: ColumnModel parentId
        acc[asPrimaryKeyOfParent] = {
          connect: {
            id: Array.isArray(v) ? v.slice(-1)[0] : v
          }
        }
      } else if (field && !isNested && isList && Array.isArray(v) && v.length) {
        acc[k] = {
          [sc]: v.map(i => ({ id: i }))
        }
      } else if (
        field &&
        !isNested &&
        isList &&
        Array.isArray(v) &&
        !v.length
      ) {
        acc[k] = {
          [sc]: []
        }
      } else if (
        field &&
        !isNested &&
        !isList &&
        asPrimaryKeyOfForeignKey &&
        !isFalsy(v) &&
        !Array.isArray(v)
      ) {
        acc[asPrimaryKeyOfForeignKey] = {
          connect: {
            id: v
          }
        }
      } else if (
        field &&
        !isNested &&
        !isList &&
        kind === 'object' &&
        !isFalsy(v) &&
        !Array.isArray(v)
      ) {
        acc[k] = {
          connect: {
            id: v
          }
        }
      } else if (
        field &&
        !isCreate && // 创建时不存在取消关联
        !isNested &&
        !isList &&
        v === '' &&
        ((isRelationField &&
          relationFromFields[0] &&
          isFalsy(data[relationFromFields[0]])) ||
          !isRelationField)
      ) {
        acc[k] = {
          disconnect: true
        }
      }
    } else if (field?.kind === 'enum' && !isFalsy(v)) {
      acc[k] = v
    } else if (
      field?.kind === 'scalar' &&
      (Array.isArray(v) || (!Array.isArray(v) && !isNil(v)))
    ) {
      acc[k] = v
    }
    return acc
  }, {} as any)
  return items
}

export const getSelectFields = (
  model: SchemaModels,
  hasRelationField: any = false
) => {
  const currentModel = modelsByName[model]
  const selectFields = currentModel.fieldsName.reduce((result, fieldName) => {
    const item = currentModel.fieldsByName[fieldName]
    const {
      kind,
      name,
      type,
      isList,
      isNested,
      isRelationField,
      asPrimaryKeyOfForeignKey,
      documentation = ''
    } = item
    let { isSelectFalse } = item
    if (/isSelectFalse|isHidden/i.test(documentation)) {
      isSelectFalse = true
    }
    if (hasRelationField === 'igoreSelectFalse') {
      isSelectFalse = false
      hasRelationField = true
    }
    if (
      !isSelectFalse &&
      !isRelationField &&
      ['scalar', 'enum'].includes(kind) &&
      name !== 'deletedAt'
    ) {
      result[name] = true
    }
    if (
      !isSelectFalse &&
      (hasRelationField == true ||
        (isPlainObject(hasRelationField) && hasRelationField[name]) ||
        (isRelationField && !isList)) &&
      ['object', 'array'].includes(kind) &&
      schemaModels.includes(type as SchemaModels)
    ) {
      const relationModel = modelsByName[type as SchemaModels]
      result[name] = {
        select: relationModel.fieldsName.reduce((acc, cu) => {
          const { kind: rkind, name: rname } = relationModel.fieldsByName[cu]
          if (
            ['scalar', 'enum'].includes(rkind) &&
            !['createdAt', 'updatedAt', 'deletedAt'].includes(rname)
          ) {
            acc[rname] = true
          }
          return acc
        }, {} as any)
      }
    }
    return result
  }, {} as any)
  return selectFields
}
