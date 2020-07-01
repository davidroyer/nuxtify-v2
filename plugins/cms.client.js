/* eslint-disable no-console */
// import nuxtContent from '@nuxt/content'
if (process.server) {
  console.log('FIRED')

  const nuxtContent = require('@nuxt/content')
  console.log('nuxtContent', nuxtContent)
}
// import { $content } from '@nuxt/content'
// console.log('$content', $content)

// export default (context, inject) => {
//   // Inject $hello(msg) in Vue, context and store.
//   inject('cms', $content)
//   // For Nuxt <= 2.12, also add 👇
//   context.$cms = $content
// }
