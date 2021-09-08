export default {
  namespaced: true,
  state: {
    selected: [],
    options: []
  },
  mutations: {
    SET_SELECTED(state, newArray){
      state.selected = newArray
    },
    SET_OPTIONS(state, newArray){
      state.options = newArray
    }
  },
  actions: {
    setSelected({commit}, newArray){
      commit('SET_SELECTED', newArray)
    },
    setOptions({commit}, newArray){
      commit('SET_OPTIONS', newArray)
    }
  }
}