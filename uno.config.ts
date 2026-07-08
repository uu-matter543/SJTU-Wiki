import { defineConfig, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        'icon-park-outline': () => import('@iconify-json/icon-park-outline/icons.json').then(i => i.default),
        octicon: () => import('@iconify-json/octicon/icons.json').then(i => i.default),
      },
    }),
  ],
})
