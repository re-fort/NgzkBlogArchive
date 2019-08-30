import Vuex from 'vuex'
import { Xhr } from '../lib/axios'

Vue.use(Vuex)

const getDefaultState = () => ({
  entries: [],
  isLoading: false,
  date: '',
})

export default new Vuex.Store({
  state: getDefaultState(),

  actions: {
    fetchEntries: ({dispatch, commit}, {url}) => {
      dispatch('beforeFetching')
      Xhr.get(url, {}, (response) => {
          commit('updateEntries', response.data)
          dispatch('afterFetching')
        }, (response) => {
          console.error(response)
          dispatch('afterFetching')
        })
    },

    beforeFetching: ({commit}) => {
      commit('updateIsLoading', true)
      commit('updateEntries', [])
    },

    afterFetching: ({commit}) => {
      commit('updateIsLoading', false)
    },
  },

  mutations: {
    reset: (state) => {
      const defaultState = getDefaultState()
      Object.keys(defaultState).forEach(key => state[key] = defaultState[key])
    },

    updateEntries: (state, entries) => {
      state.entries = entries
    },

    updateIsLoading: (state, isLoading) => {
      state.isLoading = isLoading
    },

    updateDate: (state, date) => {
      state.date = date
    },
  },

  getters: {
    sortEntries: (state) => (key, order) => {
      return _.orderBy(state.entries, key, order)
    },
  },
  strict: process.env.NODE_ENV !== 'production',
})
