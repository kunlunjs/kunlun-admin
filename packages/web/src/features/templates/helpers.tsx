import loadable from '@loadable/component'
import type { ReactNode } from 'react'
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

const tailwinduis = require
  .context('../../components/TailwindUI', true, /\.tsx$/)
  .keys()

function replaceCategory(str: string) {
  return str
    .replace('marketing', 'Marketing')
    .replace('ecommerce', 'Ecommerce')
    .replace('application-ui', 'Application')
}

function replacePath(str: string) {
  return str.replaceAll('-', '')
}

const prefix = '/static/image'
// Array.from(document.getElementsByClassName('absolute inset-0 w-full h-full')).filter(i => i.nodeName === 'IMG').forEach(i => console.log(i.currentSrc))
export const thumbnailSrcs = [
  `${prefix}/marketing/hero-section.png`,
  `${prefix}/marketing/feature-section.png`,
  `${prefix}/marketing/cta-section.png`,
  `${prefix}/marketing/pricing-section.png`,
  `${prefix}/marketing/header-section.png`,
  `${prefix}/marketing/faq.png`,
  `${prefix}/marketing/newsletter-section.png`,
  `${prefix}/marketing/stat.png`,
  `${prefix}/marketing/testimonial.png`,
  `${prefix}/marketing/blog-section.png`,
  `${prefix}/marketing/contact-section.png`,
  `${prefix}/marketing/team-section.png`,
  `${prefix}/marketing/content-section.png`,
  `${prefix}/marketing/footer.png`,
  `${prefix}/marketing/logo-cloud.png`,
  `${prefix}/marketing/header.png`,
  `${prefix}/marketing/banner.png`,
  `${prefix}/marketing/flyout-menu.png`,
  `${prefix}/marketing/404-page.png`,
  `${prefix}/marketing/landing-page.png`,
  `${prefix}/marketing/pricing-page.png`,
  `${prefix}/marketing/contact-page.png`,
  `${prefix}/application-ui/stacked.png`,
  `${prefix}/application-ui/sidebar.png`,
  `${prefix}/application-ui/multi-column.png`,
  `${prefix}/application-ui/page-heading.png`,
  `${prefix}/application-ui/card-heading.png`,
  `${prefix}/application-ui/section-heading.png`,
  `${prefix}/application-ui/description-list.png`,
  `${prefix}/application-ui/stat.png`,
  `${prefix}/application-ui/calendar.png`,
  `${prefix}/application-ui/table.png`,
  `${prefix}/application-ui/stacked-list.png`,
  `${prefix}/application-ui/grid-list.png`,
  `${prefix}/application-ui/feed.png`,
  `${prefix}/application-ui/form-layout.png`,
  `${prefix}/application-ui/input-group.png`,
  `${prefix}/application-ui/select-menu.png`,
  `${prefix}/application-ui/sign-in-and-registration.png`,
  `${prefix}/application-ui/textarea.png`,
  `${prefix}/application-ui/radio-group.png`,
  `${prefix}/application-ui/checkbox.png`,
  `${prefix}/application-ui/toggle.png`,
  `${prefix}/application-ui/action-panel.png`,
  `${prefix}/application-ui/combobox.png`,
  `${prefix}/application-ui/alert.png`,
  `${prefix}/application-ui/empty-stat.png`,
  `${prefix}/application-ui/navbar.png`,
  `${prefix}/application-ui/pagination.png`,
  `${prefix}/application-ui/tab.png`,
  `${prefix}/application-ui/vertical-navigation.png`,
  `${prefix}/application-ui/sidebar-navigation.png`,
  `${prefix}/application-ui/breadcrumb.png`,
  `${prefix}/application-ui/step.png`,
  `${prefix}/application-ui/command-palette.png`,
  `${prefix}/application-ui/modal.png`,
  `${prefix}/application-ui/slide-over.png`,
  `${prefix}/application-ui/notification.png`,
  `${prefix}/application-ui/avatar.png`,
  `${prefix}/application-ui/dropdown.png`,
  `${prefix}/application-ui/badge.png`,
  `${prefix}/application-ui/button.png`,
  `${prefix}/application-ui/button-group.png`,
  `${prefix}/application-ui/container.png`,
  `${prefix}/application-ui/panel.png`,
  `${prefix}/application-ui/list-container.png`,
  `${prefix}/application-ui/media-object.png`,
  `${prefix}/application-ui/divider.png`,
  `${prefix}/application-ui/home-screen.png`,
  `${prefix}/application-ui/detail-screen.png`,
  `${prefix}/application-ui/settings-screen.png`,
  `${prefix}/ecommerce/product-overview.png`,
  `${prefix}/ecommerce/product-list.png`,
  `${prefix}/ecommerce/category-preview.png`,
  `${prefix}/ecommerce/shopping-cart.png`,
  `${prefix}/ecommerce/category-filters.png`,
  `${prefix}/ecommerce/product-quickviews.png`,
  `${prefix}/ecommerce/product-features.png`,
  `${prefix}/ecommerce/store-navigation.png`,
  `${prefix}/ecommerce/promo-sections.png`,
  `${prefix}/ecommerce/checkout-forms.png`,
  `${prefix}/ecommerce/reviews.png`,
  `${prefix}/ecommerce/order-summary.png`,
  `${prefix}/ecommerce/order-history.png`,
  `${prefix}/ecommerce/incentive.png`,
  `${prefix}/ecommerce/storefront-page.png`,
  `${prefix}/ecommerce/product-page.png`,
  `${prefix}/ecommerce/category-page.png`,
  `${prefix}/ecommerce/shopping-cart-page.png`,
  `${prefix}/ecommerce/checkout-page.png`,
  `${prefix}/ecommerce/order-detail-page.png`,
  `${prefix}/ecommerce/order-history-page.png`
]

// [[`${prefix}/ecommerce/order-history-pages.png'] -> ['order-history-pages']
export const thumbnailNames = thumbnailSrcs.reduce((acc, src) => {
  // `${prefix}/ecommerce/order-history-pages.png' -> 'ecommerce'
  const category = (src.match(/static\/image\/([a-zA-Z-]+)\//) as string[])[1]
  // `${prefix}/ecommerce/order-history-pages.png' -> 'order-history-pages'
  const fileName = (src.match(/\/([a-zA-Z\d-]+)\.png$/) as string[])[1]
  const realPath = tailwinduis
    .find(i =>
      i.match(new RegExp(`${replacePath(replaceCategory(fileName))}\\d+`, 'i'))
    )
    ?.slice(1, -4)
  const { config } = realPath
    ? require(`@/components/TailwindUI${realPath}`)
    : { config: {} }
  acc[category] = (acc[category] || []).concat({
    name: fileName,
    src,
    config,
    realPath: realPath || null
  })
  return acc
}, {} as Record<string, { name: string; src: string; realPath: string | null; config?: { title: string } }[]>)

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
      const Component = c.realPath
        ? loadable(
            () =>
              import(
                /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components/TailwindUI${c.realPath}`
              )
          )
        : () => (
            <div
              className="flex items-center justify-center text-xl text-orange-400"
              style={{ height: '100vh' }}
            >
              开发中，敬请期待...
            </div>
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
