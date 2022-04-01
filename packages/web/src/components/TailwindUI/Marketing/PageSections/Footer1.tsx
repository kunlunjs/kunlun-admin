import { faker } from '@faker-js/faker'
import clsx from 'clsx'
import { chunk } from 'lodash'
import type { FC } from 'react'
import { socials } from '@/components/svgs'

const navigations: Record<string, { name: string; href: string }[]> = [
  ...Array(4)
].reduce(acc => {
  acc[faker.word.adverb()] = [
    ...Array(faker.datatype.number({ min: 2, max: 6 }))
  ].map(() => ({
    name: faker.word.adverb(),
    href: '#'
  }))
  return acc
}, {})

interface Footer1Props {}

const Footer1: FC<Footer1Props> = () => {
  const navs = chunk(Object.entries(navigations), 2)

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
              alt="Company name"
            />
            <p className="text-gray-500 text-base">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {socials.map((item, ix) => (
                <a
                  key={item.name + ix}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            {navs.map((item, ix) => {
              return (
                <div
                  key={item[0][0] + ix}
                  className="md:grid md:grid-cols-2 md:gap-8"
                >
                  {item.map(([k, v], iix) => {
                    return (
                      <div
                        key={k + iix}
                        className={clsx(ix % 2 !== 0 && 'mt-12 md:mt-0')}
                      >
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                          {k}
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          {v.map((item, iix) => (
                            <li key={item.name + iix}>
                              <a
                                href={item.href}
                                className="text-base text-gray-500 hover:text-gray-900 capitalize"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export const config = { title: '4-column with company mission' }

export default Footer1
