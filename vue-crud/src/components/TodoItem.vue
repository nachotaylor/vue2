<template>
    <div v-if="todos.length">

    </div>
    <b-alert show variant="info" v-else>No hay todos</b-alert>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex  '
    import {setTodo} from "../modules/todos/mutations";

    export default {
        props: {
            todos: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions({
                _updateTodoStatus: 'todos/updateTodoStatus',
                _removeTodo: 'todos/removeTodo',
            }),
            ...mapMutations('todos', ['setTodo']),
            goToUpdateTodo(todo) {
                this.setTodo(todo)
                this.$router.push({
                    name: 'todos-update',
                    params: {id: todo.id}
                })
            },
            updateTodoStatus(todo) {
                this._updateTodoStatus(todo)
            },
            removeTodo(id) {
                this._removeTodo(id)
            }
        }
    }
</script>