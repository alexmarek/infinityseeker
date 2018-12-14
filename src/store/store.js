import Vue from 'vue'
import Vuex from 'vuex'
import pages from './pages'
import portfolio from './portfolio'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    pages,
    portfolio
  }
})
export default store
