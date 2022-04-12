import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { KLTransitionChild } from '@/components/Animation'

const product = {
  name: "Women's Basic Tee",
  price: '$32',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    {
      name: 'Heather Grey',
      bgColor: 'bg-gray-400',
      selectedColor: 'ring-gray-400'
    }
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: false }
  ]
}

export const config = {
  title: 'With color selector, size selector, and details link'
}
export default function ProductQuickview1() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <KLTransitionChild>
            <Dialog.Overlay className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </KLTransitionChild>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:h-screen md:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex w-full transform text-left text-base transition md:my-8 md:inline-block md:max-w-2xl md:px-4 md:align-middle lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                      {product.name}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-1"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="font-medium text-gray-900">
                        {product.price}
                      </p>

                      {/* Reviews */}
                      <div className="mt-4">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <p className="text-sm text-gray-700">
                            {product.rating}
                            <span className="sr-only"> out of 5 stars</span>
                          </p>
                          <div className="ml-1 flex items-center">
                            {[0, 1, 2, 3, 4].map(rating => (
                              <StarIcon
                                key={rating}
                                className={clsx(
                                  product.rating > rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <div className="ml-4 hidden lg:flex lg:items-center">
                            <span className="text-gray-300" aria-hidden="true">
                              &middot;
                            </span>
                            <a
                              href="#"
                              className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              See all {product.reviewCount} reviews
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-8">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* Color picker */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Color
                          </h4>

                          <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="mt-2"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a color
                            </RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {product.colors.map(color => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    clsx(
                                      color.selectedColor,
                                      active && checked
                                        ? 'ring ring-offset-1'
                                        : '',
                                      !active && checked ? 'ring-2' : '',
                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={clsx(
                                      color.bgColor,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Size picker */}
                        <div className="mt-8">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">
                              Size
                            </h4>
                            <a
                              href="#"
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Size guide
                            </a>
                          </div>

                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="mt-2"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a size
                            </RadioGroup.Label>
                            <div className="grid grid-cols-7 gap-2">
                              {product.sizes.map(size => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  className={({ active, checked }) =>
                                    clsx(
                                      size.inStock
                                        ? 'cursor-pointer focus:outline-none'
                                        : 'cursor-not-allowed opacity-25',
                                      active
                                        ? 'ring-2 ring-indigo-500 ring-offset-2'
                                        : '',
                                      checked
                                        ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                                        : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                                      'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
                                    )
                                  }
                                  disabled={!size.inStock}
                                >
                                  <RadioGroup.Label as="p">
                                    {size.name}
                                  </RadioGroup.Label>
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <button
                          type="submit"
                          className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to bag
                        </button>

                        <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
                          <a
                            href={product.href}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View full details
                          </a>
                        </p>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
