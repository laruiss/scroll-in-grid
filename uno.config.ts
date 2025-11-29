import presetIcons from '@unocss/preset-icons/browser'

import presetWindi from '@unocss/preset-wind4'
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  transformerDirectives,
} from 'unocss'

import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWindi(),
    presetAnimations(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1,
      warn: true,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
