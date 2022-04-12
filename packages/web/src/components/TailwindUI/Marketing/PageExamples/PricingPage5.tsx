import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'
import { socials } from '@/components/svgs'

const header = {
  solutions: [
    {
      name: 'Analytics',
      description:
        'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorClickIcon
    },
    {
      name: 'Security',
      description: "Your customers' data will be safe and secure.",
      href: '#',
      icon: ShieldCheckIcon
    },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: ViewGridIcon
    },
    {
      name: 'Automations',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: RefreshIcon
    }
  ],
  callsToAction: [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon }
  ],
  resources: [
    {
      name: 'Help Center',
      description:
        'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: SupportIcon
    },
    {
      name: 'Guides',
      description:
        'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkAltIcon
    },
    {
      name: 'Events',
      description:
        'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon
    },
    {
      name: 'Security',
      description: 'Understand how we take your privacy seriously.',
      href: '#',
      icon: ShieldCheckIcon
    }
  ],
  recentPosts: [
    { name: 'Boost your conversion rate', href: '#' },
    {
      name: 'How to use search engine optimization to drive traffic to your site',
      href: '#'
    },
    { name: 'Improve your customer experience', href: '#' }
  ]
}
const pricing = {
  tiers: [
    {
      title: 'Freelancer',
      price: 24,
      frequency: '/month',
      description: 'The essentials to provide your best work for clients.',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time'
      ],
      cta: 'Monthly billing',
      mostPopular: false
    },
    {
      title: 'Startup',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations'
      ],
      cta: 'Monthly billing',
      mostPopular: true
    },
    {
      title: 'Enterprise',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations'
      ],
      cta: 'Monthly billing',
      mostPopular: false
    }
  ]
}
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
  // More questions...
]
const footer = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' }
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ],
  social: socials
}

export const config = {
  title: 'With three tiers and testimonial'
}

export default function PricingPage5() {
  return (
    <div className="bg-white">
      {/* Header and Page Header */}
      <div className="relative">
        {/* Header */}
        <Popover as="header" className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-gray-200 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                    alt=""
                  />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={clsx(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
                        )}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={clsx(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {header.solutions.map(solution => (
                                <a
                                  key={solution.name}
                                  href={solution.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <solution.icon
                                    className="h-6 w-6 flex-shrink-0 text-rose-400"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {solution.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {solution.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {header.callsToAction.map(cta => (
                                <div key={cta.name} className="flow-root">
                                  <a
                                    href={cta.href}
                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    <cta.icon
                                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{cta.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Docs
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={clsx(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
                        )}
                      >
                        <span>More</span>
                        <ChevronDownIcon
                          className={clsx(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {header.resources.map(resource => (
                                <a
                                  key={resource.name}
                                  href={resource.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <resource.icon
                                    className="h-6 w-6 flex-shrink-0 text-rose-400"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {resource.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {resource.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                                  Recent Posts
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                  {header.recentPosts.map(post => (
                                    <li
                                      key={post.name}
                                      className="truncate text-base"
                                    >
                                      <a
                                        href={post.href}
                                        className="font-medium text-gray-900 hover:text-gray-700"
                                      >
                                        {post.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <a
                                  href="#"
                                  className="font-medium text-rose-600 hover:text-rose-500"
                                >
                                  {' '}
                                  View all posts{' '}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {header.solutions.map(solution => (
                        <a
                          key={solution.name}
                          href={solution.href}
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                        >
                          <solution.icon
                            className="h-6 w-6 flex-shrink-0 text-rose-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {solution.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Docs
                    </a>
                    {header.resources.map(resource => (
                      <a
                        key={resource.name}
                        href={resource.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {resource.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-rose-600 hover:text-rose-500">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* Page Header */}
        <div className="relative mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="relative">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              Pricing plans for teams of all sizes
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">
              Choose an affordable plan that's packed with the best features for
              engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Pricing Section */}
        <section className="relative" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">
            Pricing
          </h2>

          {/* Tiers */}
          <div className="mx-auto max-w-2xl space-y-12 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8">
            {pricing.tiers.map(tier => (
              <div
                key={tier.title}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tier.title}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-rose-500 py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      ${tier.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      {tier.frequency}
                    </span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex">
                        <CheckIcon
                          className="h-6 w-6 flex-shrink-0 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={clsx(
                    tier.mostPopular
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100',
                    'mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Cloud */}
        <section
          aria-labelledby="customer-heading"
          className="mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
        >
          <h2 id="customer-heading" className="sr-only">
            Our customers
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <div className="relative">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50"
          />

          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-rose-500 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
              <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                <img
                  src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative lg:col-span-1">
                <img
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                  alt=""
                />
                <blockquote className="mt-6 text-white">
                  <p className="text-xl font-medium sm:text-2xl">
                    Workflow has completely transformed how we interact with
                    customers. We've seen record bookings, higher customer
                    satisfaction, and reduced churn.
                  </p>
                  <footer className="mt-6">
                    <p className="flex flex-col font-medium">
                      <span>Marie Chilvers</span>
                      <span>CEO, Workcation</span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="mx-auto max-w-2xl divide-y divide-gray-200 py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-extrabold text-gray-900"
          >
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map(faq => (
                <div
                  key={faq.id}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
                alt="Company name"
              />
              <p className="text-base text-gray-500">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex space-x-6">
                {footer.social.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{link.name}</span>
                    <link.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footer.solutions.map(link => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Support
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footer.support.map(link => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footer.company.map(link => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footer.legal.map(link => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
