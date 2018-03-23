import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules
})
Vue.use({
    install(Vue, options) {
        Vue.prototype.$store = store
    }
})

export default store