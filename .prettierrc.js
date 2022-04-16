const prettierConfig = require('@kunlunjs/fabric/dist/prettier')

// @ts-check
/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...prettierConfig,
  tailwindConfig: './packages/web/tailwind.config.js'
}
