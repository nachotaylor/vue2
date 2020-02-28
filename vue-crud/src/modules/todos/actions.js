import Vue from 'vue';

export async function fetchTodos({commit}) {
    try {
        const {data} = await Vue.axios({
            url: '/todos'
        })
        commit('setTodos', data)
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('Peticion GET finalizada')
    }
}

export async function addTodo({commit}, todo) {
    try {
        await Vue.axios({
            methods: 'POST',
            url: '/todos',
            data: {
                id: Date.now(),
                text: todo.text,
                done: todo.done
            }
        })
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('Peticion POST finalizada')
    }
}

export async function updateTodo({commit}, todo) {
    try {
        await Vue.axios({
            methods: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: todo.done
            }
        })
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('Peticion PUT finalizada')
    }
}

export async function updateTodoStatus({commit}, todo) {
    try {
        await Vue.axios({
            methods: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: !todo.done
            }
        })
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('Peticion PUT finalizada')
    }
}

export async function deleteTodo({commit, dispatch}, todo) {
    try {
        await Vue.axios({
            methods: 'DELETE',
            url: `/todos/${todo.id}`
        })
        dispatch('fetchTodos')
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('Peticion PUT finalizada')
    }
}