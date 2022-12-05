import { exportBundleTimeToGlobal } from '@/bundleTime'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

exportBundleTimeToGlobal()
