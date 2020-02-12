Vue.component('child-methods', {
    data() {
        return {
            name: 'Child Methods name'
        }
    },
    methods: {
        showName() {
            console.log(this.name)
        }
    },
    template: `
        <div>
            <h2>Acceso a metodos hijo</h2>
        </div>
    `
});