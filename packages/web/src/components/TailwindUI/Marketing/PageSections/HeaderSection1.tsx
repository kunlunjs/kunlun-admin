export const config = {
  title: 'Simple centered'
}

export default function HeaderSection1() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Take control of your team.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
      </div>
    </div>
  )
}
