import Vuex from 'vuex'
import { Xhr } from '../lib/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: [],
    isLoading: false
  },

  actions: {
    init: ({commit}) => {
      commit('isLoading', false)
      commit('entries', [])
    },

    fetchEntries: ({dispatch, commit}, {url, archive}) => {
      dispatch('beforeFetching')
      Xhr.get(`${url}/${archive}`, {}, (response) => {
          commit('entries', response.data)
          dispatch('afterFetching')
        }, (response) => {
          console.error(response)
          dispatch('afterFetching')
        })
    },

    beforeFetching: ({commit}) => {
      commit('isLoading', true)
      commit('entries', [])
    },

    afterFetching: ({commit}) => {
      commit('isLoading', false)
    },
  },

  mutations: {
    entries: (state, entries) => {
      state.entries = entries
    },

    isLoading: (state, isLoading) => {
      state.isLoading = isLoading
    }
  },
  strict: process.env.NODE_ENV !== 'production',
})
