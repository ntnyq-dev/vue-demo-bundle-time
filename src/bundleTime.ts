declare global {
  interface Window {
    __APP_BUNDLE_TIME__: string
  }
}

export const exportBundleTimeToGlobal = () => {
  window.__APP_BUNDLE_TIME__ = __APP_BUNDLE_TIME__
}
