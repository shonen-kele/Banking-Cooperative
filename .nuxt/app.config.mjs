
import { updateAppConfig } from '#app'
import { defuFn } from '/home/kelechi/Projects/Coding/Banking-business/banking-business/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {},
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/home/kelechi/Projects/Coding/Banking-business/banking-business/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
