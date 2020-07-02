/* eslint-disable no-console */

export const state = () => ({
  navMenu: {}
})

export const mutations = {
  setDev: (state, payload) => (state.isDev = payload),
  setMenu: (state, payload) => (state.navMenu = payload)
}

export const actions = {
  async nuxtServerInit({ commit, state }, { $content, isDev, app }) {
    const navMenu = await $content('nav-menu')
      .without(['dir', 'path', 'extension', 'slug', 'createdAt', 'updatedAt'])
      .fetch()

    const siteConfig = await $content('site-config').fetch()
    console.log('nuxtServerInit -> siteConfig', siteConfig)
    console.log('nuxtServerInit -> navMenu', navMenu)
    commit('setMenu', navMenu)
    commit('setDev', isDev)
  }
}
