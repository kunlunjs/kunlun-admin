import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
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
import { CheckIcon, ChevronDownIcon, MinusIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'
import { socials } from '@/components/svgs'

const solutions = [
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
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon }
]
const resources = [
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
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#'
  },
  { id: 3, name: 'Improve your customer experience', href: '#' }
]
const tiers = [
  {
    name: 'Basic',
    href: '#',
    priceMonthly: 9,
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.'
  },
  {
    name: 'Essential',
    href: '#',
    priceMonthly: 29,
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.'
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 59,
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.'
  }
]
const sections = [
  {
    name: 'Features',
    features: [
      {
        name: 'Molestie lobortis massa.',
        tiers: { Basic: true, Essential: true, Premium: true }
      },
      {
        name: 'Urna purus felis.',
        tiers: { Basic: true, Essential: true, Premium: true }
      },
      {
        name: 'Tellus pulvinar sit dictum.',
        tiers: { Essential: true, Premium: true }
      },
      {
        name: 'Convallis.',
        tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' }
      }
    ]
  },
  {
    name: 'Reporting',
    features: [
      {
        name: 'Adipiscing.',
        tiers: { Basic: true, Essential: true, Premium: true }
      },
      {
        name: 'Eget risus integer.',
        tiers: { Essential: true, Premium: true }
      },
      { name: 'Gravida leo urna velit.', tiers: { Premium: true } },
      {
        name: 'Elementum ut dapibus mi feugiat cras nisl.',
        tiers: { Premium: true }
      }
    ]
  },
  {
    name: 'Support',
    features: [
      {
        name: 'Sit dignissim.',
        tiers: { Basic: true, Essential: true, Premium: true }
      },
      { name: 'Congue at nibh et.', tiers: { Essential: true, Premium: true } },
      {
        name: 'Volutpat feugiat mattis.',
        tiers: { Essential: true, Premium: true }
      },
      {
        name: 'Tristique pellentesque ornare diam sapien.',
        tiers: { Premium: true }
      }
    ]
  }
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 2,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    id: 3,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 4,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    id: 5,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
]
const footerNavigation = {
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
  title: 'With comparison table'
}

export default function PricingPage1() {
  return (
    <div className="bg-white">
      <div className="bg-indigo-900">
        {/* Header */}
        <Popover className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b border-indigo-400 border-opacity-25 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-orange-400-to-pink-500-gradient.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-indigo-900 rounded-md p-2 inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={clsx(
                          open ? 'text-white' : 'text-indigo-300',
                          'group bg-indigo-900 rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white'
                        )}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={clsx(
                            open ? 'text-white' : 'text-indigo-300',
                            'ml-2 h-5 w-5 group-hover:text-white'
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
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative bg-white py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                              {solutions.map(item => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map(item => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 rounded-md p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
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
                  className="text-base font-medium text-indigo-300 hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-indigo-300 hover:text-white"
                >
                  Docs
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={clsx(
                          open ? 'text-white' : 'text-indigo-300',
                          'group bg-indigo-900 rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white'
                        )}
                      >
                        <span>More</span>
                        <ChevronDownIcon
                          className={clsx(
                            open ? 'text-white' : 'text-indigo-300',
                            'ml-2 h-5 w-5 group-hover:text-white'
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
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative bg-white py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                              {resources.map(item => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                  Recent Posts
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                  {recentPosts.map(post => (
                                    <li
                                      key={post.id}
                                      className="text-base truncate"
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
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
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
              <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-indigo-300 hover:text-white"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="whitespace-nowrap bg-white border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
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
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-orange-400-to-pink-500-gradient.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
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

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Blog
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Contact Sales
                    </a>
                    {resources.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* Header section with select menu */}
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Pricing Plans
              </h2>
              <p className="mt-5 text-xl text-indigo-300">
                Start building for free, then add a site plan to go live.
                Account plans unlock additional features.
              </p>
            </div>
            <div className="mt-10 w-full max-w-xs lg:mt-0">
              <label
                htmlFor="currency"
                className="block text-base font-medium text-indigo-300"
              >
                Currency
              </label>
              <div className="mt-1.5 relative">
                <select
                  id="currency"
                  name="currency"
                  className="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md"
                  defaultValue="United States (USD)"
                >
                  <option className="bg-gray-900">Argentina (ARS)</option>
                  <option className="bg-gray-900">Australia (AUD)</option>
                  <option className="bg-gray-900">United States (USD)</option>
                  <option className="bg-gray-900">Canada (CAD)</option>
                  <option className="bg-gray-900">France (EUR)</option>
                  <option className="bg-gray-900">Japan (JPY)</option>
                  <option className="bg-gray-900">Nigeria (NGN)</option>
                  <option className="bg-gray-900">Switzerland (CHF)</option>
                  <option className="bg-gray-900">United Kingdom (GBP)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                  <ChevronDownIcon
                    className="h-4 w-4 text-indigo-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* xs to lg */}
        <div className="space-y-24 lg:hidden">
          {tiers.map(tier => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.priceMonthly}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <a
                  href={tier.href}
                  className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                >
                  Buy {tier.name}
                </a>
              </div>

              {sections.map(section => (
                <table key={section.name} className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map(feature => (
                      <tr
                        key={feature.name}
                        className="border-t border-gray-200"
                      >
                        <th
                          className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {/* @ts-ignore */}
                          {typeof feature?.tiers?.[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700 text-right">
                              {/* @ts-ignore */}
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {/* @ts-ignore */}
                              {feature?.tiers?.[tier.name] === true ? (
                                <CheckIcon
                                  className="ml-auto h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="ml-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {/* @ts-ignore */}
                                {feature.tiers[tier.name] === true
                                  ? 'Yes'
                                  : 'No'}
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div className="border-t border-gray-200 px-4 pt-5">
                <a
                  href="#"
                  className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                >
                  Buy {tier.name}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map(tier => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  className="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                  scope="row"
                >
                  Pricing
                </th>
                {tiers.map(tier => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <p>
                          <span className="text-4xl font-extrabold text-gray-900">
                            ${tier.priceMonthly}
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            /mo
                          </span>
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                          {tier.description}
                        </p>
                      </div>
                      <a
                        href={tier.href}
                        className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                      >
                        Buy {tier.name}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map(section => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map(feature => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map(tier => (
                        <td key={tier.name} className="py-5 px-6">
                          {/* @ts-ignore */}
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700">
                              {/* @ts-ignore */}
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {/* @ts-ignore */}
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {/* @ts-ignore */}
                                {feature.tiers[tier.name] === true
                                  ? 'Included'
                                  : 'Not included'}{' '}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map(tier => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href="#"
                      className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Buy {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Logo cloud */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
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
      </div>

      <div className="bg-gray-50">
        {/* FAQ */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {faqs.map(faq => (
                <div key={faq.id} className="space-y-2">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Feature section with brand panel */}
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-gray-50" />
          <div className="flex-1" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block text-red-900">
                    Start your free trial today.
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-orange-50">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla nec.
                </p>
                <a
                  href="#"
                  className="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="sr-only">Footer</h2>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h4>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.solutions.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h4>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.support.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h4>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h4>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map(item => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h4>
            <p className="mt-4 text-gray-500 text-base">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="min-w-0 w-full bg-white shadow-sm py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-orange-100 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-red-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.social.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
