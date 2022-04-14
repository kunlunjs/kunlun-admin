const prefix = '/static/image'
// Array.from(document.getElementsByClassName('absolute inset-0 w-full h-full')).filter(i => i.nodeName === 'IMG').forEach(i => console.log(i.currentSrc))
export const templateThumbnailSrcs = [
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
  `${prefix}/application/stacked-layout.png`,
  `${prefix}/application/sidebar-layout.png`,
  `${prefix}/application/multi-column-layout.png`,
  `${prefix}/application/page-heading.png`,
  `${prefix}/application/card-heading.png`,
  `${prefix}/application/section-heading.png`,
  `${prefix}/application/description-list.png`,
  `${prefix}/application/stat.png`,
  `${prefix}/application/calendar.png`,
  `${prefix}/application/table.png`,
  `${prefix}/application/stacked-list.png`,
  `${prefix}/application/grid-list.png`,
  `${prefix}/application/feed.png`,
  `${prefix}/application/form-layout.png`,
  `${prefix}/application/input-group.png`,
  `${prefix}/application/select-menu.png`,
  `${prefix}/application/sign-in-and-registration.png`,
  `${prefix}/application/textarea.png`,
  `${prefix}/application/radio-group.png`,
  `${prefix}/application/checkbox.png`,
  `${prefix}/application/toggle.png`,
  `${prefix}/application/action-panel.png`,
  `${prefix}/application/combobox.png`,
  `${prefix}/application/alert.png`,
  `${prefix}/application/empty-stat.png`,
  `${prefix}/application/navbar.png`,
  `${prefix}/application/pagination.png`,
  `${prefix}/application/tab.png`,
  `${prefix}/application/vertical-navigation.png`,
  `${prefix}/application/sidebar-navigation.png`,
  `${prefix}/application/breadcrumb.png`,
  `${prefix}/application/step.png`,
  `${prefix}/application/command-palette.png`,
  `${prefix}/application/modal.png`,
  `${prefix}/application/slide-over.png`,
  `${prefix}/application/notification.png`,
  `${prefix}/application/avatar.png`,
  `${prefix}/application/dropdown.png`,
  `${prefix}/application/badge.png`,
  `${prefix}/application/button.png`,
  `${prefix}/application/button-group.png`,
  `${prefix}/application/container.png`,
  `${prefix}/application/panel.png`,
  `${prefix}/application/list-container.png`,
  `${prefix}/application/media-object.png`,
  `${prefix}/application/divider.png`,
  `${prefix}/ecommerce/product-overview.png`,
  `${prefix}/ecommerce/product-list.png`,
  `${prefix}/ecommerce/category-preview.png`,
  `${prefix}/ecommerce/shopping-cart.png`,
  `${prefix}/ecommerce/category-filter.png`,
  `${prefix}/ecommerce/product-quickview.png`,
  `${prefix}/ecommerce/product-feature.png`,
  `${prefix}/ecommerce/store-navigation.png`,
  `${prefix}/ecommerce/promo-section.png`,
  `${prefix}/ecommerce/checkout-form.png`,
  `${prefix}/ecommerce/review.png`,
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

function replacePath(str: string) {
  return str.replaceAll('-', '')
}

type TemplateItems = Record<
  string,
  {
    category: string
    name: string
    src: string
    number: number
    path: string | null
    configs: { title: string }[]
  }[]
>

const tailwinduis = require
  .context('../components/TailwindUI', true, /\.tsx$/)
  .keys()

// [[`${prefix}/ecommerce/order-history-pages.png'] -> ['order-history-pages']
export const templateItems: TemplateItems = templateThumbnailSrcs.reduce(
  (acc, src) => {
    // `${prefix}/ecommerce/order-history-page.png' -> 'ecommerce'
    const category = (src.match(/static\/image\/([a-zA-Z-]+)\//) as string[])[1]
    // `${prefix}/ecommerce/order-history-page.png' -> 'order-history-pages'
    const fileName = (src.match(/\/([a-zA-Z\d-]+)\.png$/) as string[])[1]
    // 'order-history-page' -> 'orderhistorypage'
    const base = `${category}/[a-zA-Z\\d-]+/${replacePath(fileName)}`
    // example: /Marketing/Elements/Banner1.tsx
    const path =
      tailwinduis
        .find(i => i.match(new RegExp(`${base}\\d+`, 'i')))
        ?.slice(1, -4) || null
    // 某一类型组件的数量
    const number = tailwinduis.filter(i =>
      i.match(new RegExp(`${base}\\d+.tsx`, 'i'))
    ).length
    const configs = number
      ? [...Array(number)].map((_, ix) => {
          return require(`@/components/TailwindUI${path?.replace(/\d+$/, '')}${
            ix + 1
          }`)?.config
        })
      : [{ title: '' }]
    acc[category] = (acc[category] || []).concat({
      category,
      name: fileName,
      src,
      path,
      number,
      configs
    })
    return acc
  },
  {} as TemplateItems
)
