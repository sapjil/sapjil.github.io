// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueDisqus)

  head.htmlAttrs = { lang: 'ko' }

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css'
  // })

  head.script.push(
    {
      type: 'text/javascript',
      src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true
    },
    {
      type: 'text/javascript',
      src: 'https://browser.sentry-cdn.com/5.12.1/bundle.min.js',
      integrity: 'sha384-y+an4eARFKvjzOivf/Z7JtMJhaN6b+lLQ5oFbBbUwZNNVir39cYtkjW1r6Xjbxg3',
      crossorigin: 'anonymous'
      // async: true
    }
  )
}
