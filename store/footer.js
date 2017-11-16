import axios from '~/plugins/axios'

const footer = {
  state: {
    footer: []
  },

  mutations: {
    SET_FOOTER (state, payload) {
      state.footer = payload
    }
  },

  actions: {
    async nuxtServerInit({ commit }) {
      const [{ data: footer }, { data: website }] = await Promise.all([
        axios.get(`/findFooter`).then(data => data.data),
        axios.get(`/siteList`).then(data => data.data)
      ])
      console.log(footer)
      commit('SET_FOOTER', footer)
      commit('SET_WEBSITE', website)
    }
  }
}

export default footer
