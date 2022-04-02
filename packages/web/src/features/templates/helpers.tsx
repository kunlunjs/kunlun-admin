import type { ReactNode } from 'react'
import desktopIcon from '@/assets/device-desktop.svg'
import mobileIcon from '@/assets/device-mobile.svg'
import tabletIcon from '@/assets/device-tablet.svg'
import Banner1 from '@/components/TailwindUI/Marketing/Elements/Banner1'
import { BlockThumbnail } from './BlockThumbnai'

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

// Array.from(document.getElementsByClassName('absolute inset-0 w-full h-full')).filter(i => i.nodeName === 'IMG').forEach(i => console.log(i.currentSrc))
export const thumbnailSrcs = [
  'https://tailwindui.com/img/category-thumbnails/marketing/heroes.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/cta-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/pricing.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/header.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/faq-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/newsletter-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/stats-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/testimonials.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/blog-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/contact-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/team-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/content-sections.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/footers.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/logo-clouds.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/headers.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/banners.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/flyout-menus.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/404-pages.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/landing-pages.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/pricing-pages.png',
  'https://tailwindui.com/img/category-thumbnails/marketing/contact-pages.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/stacked.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/sidebar.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/multi-column.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/page-headings.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/card-headings.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/section-headings.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/description-lists.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/stats.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/calendars.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/tables.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/stacked-lists.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/grid-lists.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/feeds.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/form-layouts.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/input-groups.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/select-menus.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/sign-in-forms.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/textareas.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/radio-groups.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/checkboxes.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/toggles.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/action-panels.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/comboboxes.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/alerts.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/empty-states.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/navbars.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/pagination.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/tabs.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/vertical-navigation.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/sidebar-navigation.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/breadcrumbs.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/steps.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/command-palettes.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/modals.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/slide-overs.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/notifications.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/avatars.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/dropdowns.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/badges.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/buttons.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/button-groups.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/containers.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/panels.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/list-containers.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/media-objects.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/dividers.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/home-screens.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/detail-screens.png',
  'https://tailwindui.com/img/category-thumbnails/application-ui/settings-screens.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/product-overviews.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/category-previews.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/shopping-carts.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/category-filters.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/product-quickviews.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/product-features.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/store-navigation.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/promo-sections.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/checkout-forms.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/reviews.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/order-summaries.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/order-history.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/incentives.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/storefront-pages.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/product-pages.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/category-pages.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/shopping-cart-pages.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/checkout-pages.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/order-detail-pages.png',
  'https://tailwindui.com/img/category-thumbnails/ecommerce/order-history-pages.png'
]

// ['https://tailwindui.com/img/category-thumbnails/ecommerce/order-history-pages.png'] -> ['order-history-pages']
export const thumbnailNames = thumbnailSrcs.map(i => {
  return (i.match(/\/([a-zA-Z\d-]+)\.png$/) as string[])[1]
})

export const getBlocks = ({
  theme = 'indigo',
  darkMode = false
}: {
  theme: ThemeList
  darkMode: boolean
}): Record<string, Record<string, ReactNode>> => {
  return {
    Block: {
      Marketing: <Banner1 />
    }
  }
}

export const getIcons = (): Record<string, Record<string, ReactNode>> => {
  return {
    Block: {
      Marketing: <BlockThumbnail />
    }
  }
}
