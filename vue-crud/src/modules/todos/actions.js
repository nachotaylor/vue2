import Vue from 'vue';

export async function fetchTdos({commit}) {
    try {
        const {data} = await Vue.axios({
            url: '/todos'
        })
        commit('setTodos', data)
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('Peticion finalizada')
    }
}