import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_BUNDLE_TIME__: JSON.stringify(new Date()),
  },
  plugins: [
    vue(),
    {
      name: `write-bundle-time`,
      enforce: `post`,
      apply: `build`,
      transformIndexHtml(html) {
        const bundleTime = new Date()
        const bundleInfo = [
          `<!-- BUNDLE_INFO_START -->`,
          `\t<!--`,
          `\tBundleAt: ${bundleTime}`,
          `\t-->`,
          `<!-- BUNDLE_INFO_END -->`,
        ]
        return html.replace(
          /<!-- BUNDLE_INFO_START -->[\W\w]*<!-- BUNDLE_INFO_END -->/,
          bundleInfo.join(`\n`),
        )
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
