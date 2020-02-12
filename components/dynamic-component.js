Vue.component('dynamic-component', {
    data() {
        return {
            components: ['cmp1', 'cmp2', 'cmp3'],
            currentComponent: 'cmp1'
        }
    },
    methods: {
        changeComponent(cmp) {
            this.currentComponent = cmp;
        }
    },
    template: `
    <div>
        <h2>Componentes dinamicos</h2>
        <button v-for="cmp in components" :key="cmp" @click="changeComponent(cmp)">
                Seleccionar {{cmp}}
        </button>
        <component :is="currentComponent"></component>
    </div>
    `
});