import { defineConfig } from '@kunlunjs/cli'

export default defineConfig({
  start: {
    entry: './src/main.tsx',
    loaders: {
      less: {
        modifyVars: {},
        globalVars: {}
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000' // process.env.PROXY_URL
        }
      }
    }
  }
})
