import axios from '~/plugins/axios'

const area = {
  state: {
    // 省列表
    provs: [],

    // 省对应的城市列表
    citys: {}
  },

  mutations: {
    //　设置省列表
    SET_PROV(state, payload) {
      state.provs = payload
    },

    //　设置省份对应的城市列表
    SET_CITYS(state, payload) {
      state.citys[payload.provId] = payload.data
    }
  }
}

export default area
