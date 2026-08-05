// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PdfDownload from './PdfDownload.vue'
import './style.css'
import FilRougeChooser from './FilRougeChooser.vue'
import FilRougeLink from './FilRougeLink.vue'
import FilRougeStatus from './FilRougeStatus.vue'
import FilRougeSlot from './FilRougeSlot.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(PdfDownload),
      'doc-footer-before': () => h(PdfDownload)
    })
  },
  enhanceApp({ app }) {
    app.component('FilRougeChooser', FilRougeChooser)
    app.component('FilRougeLink', FilRougeLink)
    app.component('FilRougeStatus', FilRougeStatus)
    app.component('FilRougeSlot', FilRougeSlot)
  }
  // override the Layout with a wrapper component that
  // injects the slots
  //Layout: PdfLayout
}