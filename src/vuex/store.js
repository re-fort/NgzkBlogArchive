import * as Api from './api'
import * as Types from './types'

// Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entrys: [],
    isLoading: false
  },

  actions: {
    INIT: ({commit}) => {
      commit(Types.SET_IS_LOADING , false)
      commit(Types.SET_ENTRYS, [])
    },

    FETCH_ENTRYS: ({dispatch, commit}, {url, archive}) => {
      dispatch(Types.FETCH_ENTRYS_START)
      Api.fetchEntrys(url, archive)
      .then(function (response) {
        commit(Types.SET_ENTRYS, response.data)
        dispatch(Types.FETCH_ENTRYS_END)
      }, function (response) {
        console.log(response)
        dispatch(Types.FETCH_ENTRYS_END)
      })
    },

    FETCH_ENTRYS_START: ({commit}) => {
      commit(Types.SET_IS_LOADING , true)
      commit(Types.SET_ENTRYS, [])
    },

    FETCH_ENTRYS_END: ({commit}) => {
      commit(Types.SET_IS_LOADING , false)
    },
  },

  mutations: {
    SET_ENTRYS: (state, entrys) => {
      state.entrys = entrys
    },

    SET_IS_LOADING: (state, isLoading) => {
      state.isLoading = isLoading
    }
  }
})