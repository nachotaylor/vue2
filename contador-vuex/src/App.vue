<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <counter></counter>
    </div>
</template>

<script>
    import Counter from '@/Components/Counter'

    export default {
        name: 'App',
        components: {
            Counter
        },
        data() {
            return {
                message: 'Hola!'
            }
        }
    }
</script>

<style lang="stylus">
    #app
        font-family Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50
        margin-top 60px
</style>
