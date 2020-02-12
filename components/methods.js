Vue.component('methods', {
    data() {
        return {
            name: 'Nacho',
            surname: 'Taylor'
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.surname}`;
        }
    },
    methods: {
        hello() {
            alert(this.fullName);
        }
    },
    template: `
        <div>
            <h2>Metodos vue</h2>
            <p @click="hello">Pulse para ejecutar metodo</p>
        </div>
    `
});