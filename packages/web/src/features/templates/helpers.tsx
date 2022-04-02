import loadable from '@loadable/component'
import type { FC, ReactNode } from 'react'
import desktopIcon from '@/assets/device-desktop.svg'
import mobileIcon from '@/assets/device-mobile.svg'
import tabletIcon from '@/assets/device-tablet.svg'

export const themeList = [
  'indigo',
  'yellow',
  'red',
  'purple',
  'pink',
  'blue',
  'green'
] as const
export type ThemeList = typeof themeList[number]

export const viewList = [
  {
    name: 'desktop',
    icon: desktopIcon
  },
  {
    name: 'tablet',
    icon: tabletIcon
  },
  {
    name: 'mobile',
    icon: mobileIcon
  }
]

const prefix = 'https://tailwindui.com/img/category-thumbnails'

const tailwinduis = require
  .context('../../components/TailwindUI', true, /\.tsx$/)
  .keys()

// console.log(tailwinduis)

// Array.from(document.getElementsByClassName('absolute inset-0 w-full h-full')).filter(i => i.nodeName === 'IMG').forEach(i => console.log(i.currentSrc))
export const thumbnailSrcs = [
  [`${prefix}/marketing/heroes.png`, ''],
  [`${prefix}/marketing/feature-sections.png`, ''],
  [`${prefix}/marketing/cta-sections.png`, ''],
  [`${prefix}/marketing/pricing.png`, 'Elements'],
  [`${prefix}/marketing/header.png`, 'Elements'],
  [`${prefix}/marketing/faq-sections.png`, ''],
  [`${prefix}/marketing/newsletter-sections.png`, ''],
  [`${prefix}/marketing/stats-sections.png`, 'Elements'],
  [`${prefix}/marketing/testimonials.png`, 'Elements'],
  [`${prefix}/marketing/blog-sections.png`, ''],
  [`${prefix}/marketing/contact-sections.png`, ''],
  [`${prefix}/marketing/team-sections.png`, ''],
  [`${prefix}/marketing/content-sections.png`, 'PageSections'],
  [`${prefix}/marketing/footers.png`, 'PageSections'],
  [`${prefix}/marketing/logo-clouds.png`, 'Elements'],
  [`${prefix}/marketing/headers.png`, 'Elements'],
  [`${prefix}/marketing/banners.png`, 'Elements'],
  [`${prefix}/marketing/flyout-menus.png`, ''],
  [`${prefix}/marketing/404-pages.png`, ''],
  [`${prefix}/marketing/landing-pages.png`, ''],
  [`${prefix}/marketing/pricing-pages.png`, 'PageSections'],
  [`${prefix}/marketing/contact-pages.png`, ''],
  [`${prefix}/application-ui/stacked.png`, ''],
  [`${prefix}/application-ui/sidebar.png`, ''],
  [`${prefix}/application-ui/multi-column.png`, ''],
  [`${prefix}/application-ui/page-headings.png`, ''],
  [`${prefix}/application-ui/card-headings.png`, ''],
  [`${prefix}/application-ui/section-headings.png`, ''],
  [`${prefix}/application-ui/description-lists.png`, ''],
  [`${prefix}/application-ui/stats.png`, ''],
  [`${prefix}/application-ui/calendars.png`, ''],
  [`${prefix}/application-ui/tables.png`, ''],
  [`${prefix}/application-ui/stacked-lists.png`, ''],
  [`${prefix}/application-ui/grid-lists.png`, ''],
  [`${prefix}/application-ui/feeds.png`, ''],
  [`${prefix}/application-ui/form-layouts.png`, ''],
  [`${prefix}/application-ui/input-groups.png`, ''],
  [`${prefix}/application-ui/select-menus.png`, ''],
  [`${prefix}/application-ui/sign-in-forms.png`, ''],
  [`${prefix}/application-ui/textareas.png`, ''],
  [`${prefix}/application-ui/radio-groups.png`, ''],
  [`${prefix}/application-ui/checkboxes.png`, ''],
  [`${prefix}/application-ui/toggles.png`, ''],
  [`${prefix}/application-ui/action-panels.png`, ''],
  [`${prefix}/application-ui/comboboxes.png`, ''],
  [`${prefix}/application-ui/alerts.png`, ''],
  [`${prefix}/application-ui/empty-states.png`, ''],
  [`${prefix}/application-ui/navbars.png`, ''],
  [`${prefix}/application-ui/pagination.png`, ''],
  [`${prefix}/application-ui/tabs.png`, ''],
  [`${prefix}/application-ui/vertical-navigation.png`, ''],
  [`${prefix}/application-ui/sidebar-navigation.png`, ''],
  [`${prefix}/application-ui/breadcrumbs.png`, ''],
  [`${prefix}/application-ui/steps.png`, ''],
  [`${prefix}/application-ui/command-palettes.png`, ''],
  [`${prefix}/application-ui/modals.png`, ''],
  [`${prefix}/application-ui/slide-overs.png`, ''],
  [`${prefix}/application-ui/notifications.png`, ''],
  [`${prefix}/application-ui/avatars.png`, ''],
  [`${prefix}/application-ui/dropdowns.png`, ''],
  [`${prefix}/application-ui/badges.png`, ''],
  [`${prefix}/application-ui/buttons.png`, ''],
  [`${prefix}/application-ui/button-groups.png`, ''],
  [`${prefix}/application-ui/containers.png`, ''],
  [`${prefix}/application-ui/panels.png`, ''],
  [`${prefix}/application-ui/list-containers.png`, ''],
  [`${prefix}/application-ui/media-objects.png`, ''],
  [`${prefix}/application-ui/dividers.png`, ''],
  [`${prefix}/application-ui/home-screens.png`, ''],
  [`${prefix}/application-ui/detail-screens.png`, ''],
  [`${prefix}/application-ui/settings-screens.png`, ''],
  [`${prefix}/ecommerce/product-overviews.png`, ''],
  [`${prefix}/ecommerce/product-lists.png`, ''],
  [`${prefix}/ecommerce/category-previews.png`, ''],
  [`${prefix}/ecommerce/shopping-carts.png`, ''],
  [`${prefix}/ecommerce/category-filters.png`, ''],
  [`${prefix}/ecommerce/product-quickviews.png`, ''],
  [`${prefix}/ecommerce/product-features.png`, ''],
  [`${prefix}/ecommerce/store-navigation.png`, ''],
  [`${prefix}/ecommerce/promo-sections.png`, ''],
  [`${prefix}/ecommerce/checkout-forms.png`, ''],
  [`${prefix}/ecommerce/reviews.png`, ''],
  [`${prefix}/ecommerce/order-summaries.png`, ''],
  [`${prefix}/ecommerce/order-history.png`, ''],
  [`${prefix}/ecommerce/incentives.png`, ''],
  [`${prefix}/ecommerce/storefront-pages.png`, ''],
  [`${prefix}/ecommerce/product-pages.png`, ''],
  [`${prefix}/ecommerce/category-pages.png`, ''],
  [`${prefix}/ecommerce/shopping-cart-pages.png`, ''],
  [`${prefix}/ecommerce/checkout-pages.png`, ''],
  [`${prefix}/ecommerce/order-detail-pages.png`, ''],
  [`${prefix}/ecommerce/order-history-pages.png`, '']
]

// [[`${prefix}/ecommerce/order-history-pages.png'] -> ['order-history-pages']
export const thumbnailNames = thumbnailSrcs.reduce((acc, cur) => {
  const src = cur[0] as string
  // `${prefix}/ecommerce/order-history-pages.png' -> 'ecommerce'
  const category = (src.match(/thumbnails\/([a-zA-Z-]+)\//) as string[])[1]
  // `${prefix}/ecommerce/order-history-pages.png' -> 'order-history-pages'
  const name = (src.match(/\/([a-zA-Z\d-]+)\.png$/) as string[])[1]
  acc[category] = (acc[category] || []).concat({ name, src })
  return acc
}, {} as Record<string, { name: string; src: string }[]>)

export const getBlocks = ({
  theme = 'indigo',
  darkMode = false
}: {
  theme: ThemeList
  darkMode: boolean
}): Record<string, Record<string, ReactNode>> => {
  const blocks = Object.entries(thumbnailNames).reduce((acc, cur) => {
    const [category, names] = cur
    acc[category] = names.reduce((a, c) => {
      const path = 'Marketing/Elements/Header1'
      const Component = loadable(
        () =>
          import(
            /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components/TailwindUI/${path}`
          )
      )
      a[c.name] = <Component />
      return a
    }, {} as any)
    return acc
  }, {} as any)
  return blocks
}

interface BlockProps {
  path: string
}

export const Block: FC<BlockProps> = ({ path }) => {
  const Component = loadable(
    () =>
      import(
        /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components/TailwindUI${path}`
      )
  )
  return <Component />
}
