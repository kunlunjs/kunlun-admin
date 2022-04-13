// 统计相同的类名最小出现的次数
const min = 5

;(async () => {
  const { readFileSync, writeFileSync } = await import('fs')
  const { resolve } = await import('path')
  const { globbySync } = await import('globby')
  const paths = globbySync(
    resolve(__dirname, '../src/components/TailwindUI/**/*.tsx')
  )

  const counters: Record<string, number> = {}
  paths.forEach(i => {
    const classes = readFileSync(i)
      .toString()
      .match(/className="([a-zA-Z\d\s-:]+)"/g)
      ?.map(i => i.slice(11, -1))
    classes?.forEach(j => {
      if (counters[j]) {
        counters[j] = counters[j] + 1
      } else {
        counters[j] = 1
      }
    })
  })
  writeFileSync(
    resolve(__dirname, 'count.json'),
    JSON.stringify(
      Object.entries(counters)
        .filter(i => i[1] >= min && /[a-zA-Z\d-:]+\s[a-zA-Z\d-:]+\s/.test(i[0]))
        .reduce((a, c) => {
          a[c[0]] = c[1]
          return a
        }, {} as Record<string, number>),
      null,
      2
    )
  )
})()
