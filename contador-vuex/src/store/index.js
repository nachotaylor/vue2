import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0,
        appName: "Vuex app"
    },
    mutations: {
        increment(state, count) {
            state.counter += count
        },
        decrement(state, count) {
            state.counter -= count
        }
    },
})
