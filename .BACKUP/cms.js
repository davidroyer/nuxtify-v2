/* eslint-disable no-console */

export default (context, inject) => {
  if (process.server) {
    const { $content } = require('@nuxt/content')
    inject('cms', $content)
  }
}
