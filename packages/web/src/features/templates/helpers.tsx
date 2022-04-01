// import loadable from '@loadable/component'
// import type { TemplatesState } from './index'

// const Components = tailwinduiItems
//   .filter(i => i.path.match(/(Banner1)$/)) // /(Banner1)\d+$/
//   .map(i => {
//     return loadable(
//       () =>
//         import(
//           /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components${i.path}`
//         )
//     )
//   })

// export const getBlocks = ({
//   theme = 'indigo',
//   darkMode = false
// }: Pick<TemplatesState, 'theme' | 'darkMode'>): Record<
//   string,
//   Record<string, ReactNode>
// > => {
//   return {}
// }

// export const getIcons = (): Record<string, Record<string, ReactNode>> => {
//   return {}
// }
