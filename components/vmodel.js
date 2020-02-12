Vue.component('vmodel', {
    data() {
        return {
            framework: 'Vue 2'
        }
    },
    template: `
        <div>
            <h2>Trabajando con v-model</h2>
            <input v-model="framework">
            <p>El framework es: {{ framework }}</p>
        </div>
    `
});