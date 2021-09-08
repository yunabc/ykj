// import Vue from 'vue/dist/vue.runtime.esm.js'
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import insure from './buyInsure/insure'
Vue.use(Vuex)


const createStore =  new Vuex.Store({
  state: {
    history:0,
    title:null,           //动态路由页面title 
    page:'',
  },
  getters,
  actions,
  mutations,
  // modules: {
  //   insure: insure
  // }
})

export {
  Vue
}
export default createStore
